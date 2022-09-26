package org.example.web;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.example.DTO.UserDTO.account.LoginDTO;
import org.example.DTO.UserDTO.account.LoginSuccessDTO;
import org.example.configuration.security.JwtTokenUtil;
import org.example.entities.UserEntity;
import org.example.repositories.RoleRepository;
import org.example.repositories.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping(path="api/account")
public class AccountController {
    private final JwtTokenUtil jwtTokenUtil;
    private final AuthenticationManager authenticationManager;
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;

    @PostMapping("login")
    public ResponseEntity<LoginSuccessDTO> login(@RequestBody LoginDTO loginDTO) {     //@Valid
        try{
            LoginSuccessDTO loginUser = loginUser(loginDTO.getEmail(), loginDTO.getPassword());
            return  ResponseEntity.ok()
                    .body(loginUser);
        }catch(BadCredentialsException ex){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    private LoginSuccessDTO loginUser(String username, String password) throws BadCredentialsException {
        //проводимо авторизацію користувача
        Authentication auth = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(username, password));
        User user = (User) auth.getPrincipal();
        UserEntity dbUser = userRepository.findByEmail(username);
        LoginSuccessDTO loginSuccessDTO = new LoginSuccessDTO();
        loginSuccessDTO.setUsername(dbUser.getEmail());
        loginSuccessDTO.setToken((jwtTokenUtil.generateAccessToken(dbUser)));

        return  loginSuccessDTO;
    }
}

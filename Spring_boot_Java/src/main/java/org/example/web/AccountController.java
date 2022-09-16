package org.example.web;

import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.example.DTO.UserDTO.account.LoginSuccessDTO;
import org.example.configuration.security.JwtTokenUtil;
import org.example.entities.UserEntity;
import org.example.repositories.RoleRepository;
import org.example.repositories.UserRepository;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping(path="api/account")
public class AccountController {
    private final JwtTokenUtil jwtTokenUtil;
    private final AuthenticationManager authenticationManager;
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;

    private LoginSuccessDTO loginUser(String username, String password) throws BadCredentialsException {
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

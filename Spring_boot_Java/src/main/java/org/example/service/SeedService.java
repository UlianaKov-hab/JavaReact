package org.example.service;

import lombok.RequiredArgsConstructor;
import org.example.constants.Roles;
import org.example.entities.RoleEntity;
import org.example.entities.UserEntity;
import org.example.repositories.RoleRepository;
import org.example.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SeedService implements  SeedServiceInterface{
    @Autowired
    RoleRepository roleRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public void seedRoleData() {
        if (roleRepository.count() == 0) {
            RoleEntity role = new RoleEntity("admin");
            roleRepository.save(role);
        }
        System.out.println(roleRepository.count());
    }

    @Override
    public void seedUserData() {
        if (userRepository.count() == 0) {
            //List<Role> roles= roleRepository.findAll();
            PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
            UserEntity user = new UserEntity();
            user.setEmail("www@www.com");
            user.setPhone("1234567890");
            user.setPassword(encoder.encode("123456"));

            user.setRoles(Arrays.asList(roleRepository.findByName(Roles.Admin)));


            userRepository.save(user);
        }
        System.out.println(userRepository.count());
    }
}

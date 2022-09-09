package org.example.service;

import lombok.RequiredArgsConstructor;
import org.example.constants.Roles;
import org.example.entities.Role;
import org.example.entities.User;
import org.example.repositories.RoleRepository;
import org.example.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
            Role role = new Role("admin");
            roleRepository.save(role);
        }
        System.out.println(roleRepository.count());
    }

    @Override
    public void seedUserData() {
        if (userRepository.count() == 0) {
            //List<Role> roles= roleRepository.findAll();
            User user = new User();
            user.setEmail("www@www");
            user.setPhone("1234567890");
            user.setPassword("1111");

            user.setRoles(Arrays.asList(roleRepository.findByName(Roles.Admin)));


            userRepository.save(user);
        }
        System.out.println(userRepository.count());
    }
}

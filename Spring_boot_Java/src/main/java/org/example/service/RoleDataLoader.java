//package org.example.service;
//
//import org.example.entities.Role;
//
//
//import org.example.entities.User;
//import org.example.repositories.RoleRepository;
//import org.example.repositories.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//@Component
//public class RoleDataLoader implements CommandLineRunner{
//    @Autowired
//    RoleRepository roleRepository;
//
//    @Override
//    public void run(String... args) throws Exception {
//        loadRoleData();
//    }
//
//    private void loadRoleData() {
//        if (roleRepository.count() == 0) {
//            Role role = new Role("admin");
//            roleRepository.save(role);
//        }
//        System.out.println(roleRepository.count());
//    }
//}

//package org.example.service;
//
//import org.example.entities.Role;
//import org.example.entities.User;
//import org.example.repositories.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//@Component
//public class UserDataLoader implements CommandLineRunner {
//    @Autowired
//    UserRepository userRepository;
//    @Override
//    public void run(String... args) throws Exception {
//        loadUserData();
//    }
//
//    private void loadUserData() {
//        if (userRepository.count() == 0) {
//            Role role = new Role("admin");
//
//            User user = new User();
//            user.setEmail("www@www");
//            user.setPhone("1234567890");
//            user.setPassword("1111");
//           // user.getRoles().add(role);
//
//            userRepository.save(user);
//
//        }
//        System.out.println(userRepository.count());
//    }
//}

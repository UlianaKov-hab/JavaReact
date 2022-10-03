package org.example.service;

import lombok.RequiredArgsConstructor;
import org.example.constants.Roles;
import org.example.entities.ProductEntity;
import org.example.entities.ProductImageEntity;
import org.example.entities.RoleEntity;
import org.example.entities.UserEntity;
import org.example.repositories.ProductImageRepository;
import org.example.repositories.ProductRepository;
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

    @Autowired
    ProductRepository productRepository;

    @Autowired
    ProductImageRepository productImageRepository;

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
    @Override
    public void seedProductData() {
        if (productRepository.count() == 0) {
            ProductEntity pants = new ProductEntity("Штани", 402, "Для чоловіків");
            ProductEntity shirt = new ProductEntity("Сорочка", 300, "Для жінок");
            ProductEntity hat = new ProductEntity("Шляпа", 300, "Для жінок");

            productRepository.save(pants);
            productRepository.save(shirt);
            productRepository.save(hat);

            productImageRepository.save(new ProductImageEntity("1.jpg", 1, pants));
            productImageRepository.save(new ProductImageEntity("2.jpg", 2, pants));
            productImageRepository.save(new ProductImageEntity("3.jpg", 3, pants));

            productImageRepository.save(new ProductImageEntity("4.jpg", 1, shirt));
            productImageRepository.save(new ProductImageEntity("5.jpg", 2, shirt));

            productImageRepository.save(new ProductImageEntity("6.jpg", 1, hat));
            productImageRepository.save(new ProductImageEntity("7.jpg", 2, hat));

        }
        System.out.println(productRepository.count());
    }
}

package org.example.service;

import lombok.RequiredArgsConstructor;
import org.example.constants.Roles;
import org.example.entities.*;
import org.example.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.text.SimpleDateFormat;
import java.util.*;

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
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    OrderStatusRepository orderStatusRepository;
    @Autowired
    OrderItemRepository orderItemRepository;
    @Autowired
    BasketRepository basketRepository;

    @Override
    public void seedData(){
        UserEntity user = new UserEntity();

        if (roleRepository.count() == 0) {
            RoleEntity role = new RoleEntity("admin");
            roleRepository.save(role);
        }

        if (userRepository.count() == 0) {
//            List<Role> roles= roleRepository.findAll();

            PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
            user.setEmail("www@www.com");
            user.setPhone("1234567890");
            user.setPassword(encoder.encode("123456"));//
            user.setRoles(Arrays.asList(roleRepository.findByName(Roles.Admin)));//
            //userRepository.save(user);

        }
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

            if(orderRepository.count() ==0){
                OrderEntity order1 = new OrderEntity();
                OrderEntity order2 = new OrderEntity();
                Date date = new Date();
                OrderStatusEntity orderStatusEntity1 = new OrderStatusEntity("finished");
                OrderStatusEntity orderStatusEntity2 = new OrderStatusEntity("done");
                orderStatusRepository.save(orderStatusEntity1);
                orderStatusRepository.save(orderStatusEntity2);
                order1.setDateCreated(date);
                order1.setStatus(orderStatusEntity1);
                order1.setUser(user);

                order2.setDateCreated(date);
                order2.setStatus(orderStatusEntity2);
                order2.setUser(user);

                List<OrderEntity> orders = new ArrayList<>();
                orders.add(order1);
                orders.add(order2);

                user.setOrders(orders);

                OrderItemEntity orderItem1 = new OrderItemEntity(250, 10);
                orderItem1.setProduct(pants);
                orderItem1.setOrder(order1);

                OrderItemEntity orderItem2 = new OrderItemEntity(650, 20);
                orderItem2.setProduct(shirt);
                orderItem2.setOrder(order1);

                List<OrderItemEntity> orderItems = new ArrayList<>();
                orderItems.add(orderItem1);
                orderItems.add(orderItem2);

                

                BasketEntity basket1 = new BasketEntity(5);
                BasketId basketId1 = new BasketId();
                basketId1.setUser(user);
                basketId1.setProduct(shirt);
                basket1.setBasketId(basketId1);

                BasketEntity basket2 = new BasketEntity(8);
                BasketId basketId2 = new BasketId();
                basketId2.setUser(user);
                basketId2.setProduct(hat);
                basket2.setBasketId(basketId2);

                List<BasketEntity> baskets = new ArrayList<>();
                baskets.add(basket1);
                baskets.add(basket2);

                user.setBaskets(baskets);


                userRepository.save(user);
                orderRepository.save(order1);
                orderRepository.save(order2);
                orderItemRepository.save(orderItem1);
                orderItemRepository.save(orderItem2);
                basketRepository.save(basket1);
                basketRepository.save(basket2);

            }


        }








    }

//        @Override
//    public void seedRoleData() {
//        if (roleRepository.count() == 0) {
//            RoleEntity role = new RoleEntity("admin");
//            roleRepository.save(role);
//        }
//        System.out.println(roleRepository.count());
//    }

//    @Override
//    public void seedUserData() {
//        if (userRepository.count() == 0) {
//            //List<Role> roles= roleRepository.findAll();
//            PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
//            UserEntity user = new UserEntity();
//            user.setEmail("www@www.com");
//            user.setPhone("1234567890");
//            user.setPassword(encoder.encode("123456"));//
//            user.setRoles(Arrays.asList(roleRepository.findByName(Roles.Admin)));//
//            userRepository.save(user);
//        }
//        System.out.println(userRepository.count());
//    }
//    @Override
//    public void seedProductData() {
//        if (productRepository.count() == 0) {
//            ProductEntity pants = new ProductEntity("Штани", 402, "Для чоловіків");
//            ProductEntity shirt = new ProductEntity("Сорочка", 300, "Для жінок");
//            ProductEntity hat = new ProductEntity("Шляпа", 300, "Для жінок");
//
//            productRepository.save(pants);
//            productRepository.save(shirt);
//            productRepository.save(hat);
//
//            productImageRepository.save(new ProductImageEntity("1.jpg", 1, pants));
//            productImageRepository.save(new ProductImageEntity("2.jpg", 2, pants));
//            productImageRepository.save(new ProductImageEntity("3.jpg", 3, pants));
//
//            productImageRepository.save(new ProductImageEntity("4.jpg", 1, shirt));
//            productImageRepository.save(new ProductImageEntity("5.jpg", 2, shirt));
//
//            productImageRepository.save(new ProductImageEntity("6.jpg", 1, hat));
//            productImageRepository.save(new ProductImageEntity("7.jpg", 2, hat));
//
//        }
//        System.out.println(productRepository.count());
//    }
//    @Override
//    public void seedOrderData() {
//        if (orderRepository.count() == 0) {
//            Date date = new Date();
//            OrderStatusEntity orderStatusEntity = new OrderStatusEntity("finished");
//            orderStatusRepository.save(orderStatusEntity);
//            OrderEntity order = new OrderEntity();
//
//            PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
//            UserEntity user = new UserEntity();
//            user.setEmail("ooo.kov@gmail.com");
//            user.setPhone("1234567890");
//            user.setPassword(encoder.encode("123123123"));
//
//            user.setRoles(Arrays.asList(roleRepository.findByName(Roles.Admin)));
//              order.setDateCreated(date);
//              order.setStatus(orderStatusEntity);
//              order.setUser(user);
//            orderRepository.save(order);
//        }
//        System.out.println(productRepository.count());
//    }
//    @Override
//    public void seedBasketData(){
//
//    }
}

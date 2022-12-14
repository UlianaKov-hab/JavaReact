package org.example;


import org.example.service.SeedServiceInterface;
import org.example.storage.StorageProperties;
import org.example.storage.StorageService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
public class Main {
    public static void main(String[] args) {
//        System.out.println("Hello world!");
        SpringApplication.run(Main.class, args);
    }
    @Bean
    CommandLineRunner init(StorageService storageService, SeedServiceInterface seedService) {
        return (args) -> {
            //storageService.deleteAll();
            try {
                storageService.init();
//                seedService.seedRoleData(); //перенести в Main
//                seedService.seedUserData(); //перенести в Main
//                seedService.seedProductData();
//                seedService.seedOrderData();
                seedService.seedData();
            }
            catch(Exception ex) {
                System.out.println("----propblem cteate folder--------" + ex.getMessage());
            }
        };
    }
}
package org.example.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Data
@Entity
@Table(name="tbl_products")
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 200, nullable = false)
    private String name;

    @Column(nullable = false)
    private int price;

    @Column(length = 200, nullable = false)
    private String description;

    @OneToMany(mappedBy = "product")
    private List<ImageEntity> images;

    @ManyToOne
    @JoinColumn(name="category_id", nullable = false)
    private CategoryEntity category;

    @ManyToMany(mappedBy = "products")
    private List<CartEntity> carts = new ArrayList<CartEntity>();

}



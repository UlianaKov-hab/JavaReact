package org.example.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name="tbl_Carts")
public class CartEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(
            name="tbl_cart_products",
            joinColumns = {@JoinColumn(name="cart_id")},
            inverseJoinColumns = {@JoinColumn(name="product_id")}
    )
    private List<ProductEntity> products;
    public CartEntity()
    {
        products = new ArrayList<ProductEntity>();
    }
}

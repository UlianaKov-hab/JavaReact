package org.example.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="tbl_product_images")
public class ProductImageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 255, nullable = false)
    private String name;

    private int priority;

    @ManyToOne
    @JoinColumn(name="product_id", nullable = false)
    private ProductEntity product;
}

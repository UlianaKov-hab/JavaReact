package org.example.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name="tbl_orders")
public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

//    private String number;
    @Column(nullable = false)
    private Date dateCreated;

    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    private UserEntity user;

    @ManyToOne
    @JoinColumn(name="status_id", nullable = false)
    private OrderStatusEntity status;

    @OneToMany(mappedBy = "order")
    private List<OrderItemEntity> orderItems;

}

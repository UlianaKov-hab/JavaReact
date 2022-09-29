package org.example.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name="tbl_Orders")
public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String number;

    private Date date;

    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    private UserEntity user;

}

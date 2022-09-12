package org.example.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name="tbl_users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(length = 200, nullable = false)
    private String email;
    @Column(length = 20, nullable = false)
    private String phone;
    @Column(length = 200)
    private String image;
    @Column(length = 200, nullable = false)
    private String password;
    private int age;
    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(
            name="tbl_user_roles",
            joinColumns = {@JoinColumn(name="user_id")},
            inverseJoinColumns = {@JoinColumn(name="role_id")}
    )
    private List<Role> roles;

    public User() {
        roles = new ArrayList<Role>();
    }

    public User(String name) {
        this.email = name;
        roles = new ArrayList<Role>();
    }
}
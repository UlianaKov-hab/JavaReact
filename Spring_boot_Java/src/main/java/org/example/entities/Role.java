package org.example.entities;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name="tbl_roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="name", nullable = false, length = 250)
    private String name;

    @ManyToMany(mappedBy = "roles")
    private List<User> users = new ArrayList<User>();
    public Role(){

    }
    public Role(String name)
    {
        this.name=name;
    }
}
package com.example.meow;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name= "users")
public class Users {

    @Id
    @Column(name="id")
    private long id;

    @Column(name= "email")
    private String email;

    @Column(name= "username")
    private String username;

    @Column(name= "password")
    private String password;

    @Column(name= "favorite_toy")
    private String favorite_toy;

    @Column(name= "age")
    private int age;

    @Column(name= "bio")
    private String bio;

    @Column(name= "photo")
    private String photo;

    public Users() {

    }

    public Users(long id, String email, String username, String password, String favorite_toy, int age, String bio, String photo) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
        this.favorite_toy = favorite_toy;
        this.age = age;
        this.bio = bio;
        this.photo = photo;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFavorite_toy() {
        return favorite_toy;
    }

    public void setFavorite_toy(String favorite_toy) {
        this.favorite_toy = favorite_toy;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
}

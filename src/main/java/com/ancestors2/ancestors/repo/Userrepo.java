package com.ancestors2.ancestors.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ancestors2.ancestors.model.User;


 @Repository
public interface Userrepo extends JpaRepository<User, Long>  {

    @Query(value="select * from users where email = ?1", nativeQuery = true) //make sure field matches database exactly
    public User findByEmail(String email);

    @Query(value="select * from users where email = ?1 and password = ?2", nativeQuery = true)
    public User signIn(String email, String password);

} 


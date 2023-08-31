package com.ancestors2.ancestors.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ancestors2.ancestors.model.User;
import com.ancestors2.ancestors.repo.Userrepo;

@Service
public class UserService {
    

    @Autowired 

    private Userrepo userrepo;

    public User save(User user) throws Exception {
        return userrepo.save(user);


    }

    public User signIn(User user) throws Exception {
        User foundUser = userrepo.findByEmail(user.getEmail());

        if (foundUser == null) {
            throw new Exception("User not found");
        }

        if (!foundUser.getPassword().equals(user.getPassword())) {
            throw new Exception("Invalid credentials");
        }

        return foundUser;}

        public User findById(Long id) throws Exception {
            Optional<User> user = userrepo.findById(id);
    
            if (user.isPresent()) {
                return user.get();
            } else {
                throw new Exception("User not found");
            }
        }
    
        public User findByEmail(String email) throws Exception {
            User user = userrepo.findByEmail(email);
    
            if (user == null) {
                throw new Exception("User not found");
            }
    
            return user;
    
    }
}
package com.ancestors2.ancestors.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ancestors2.ancestors.model.User;
import com.ancestors2.ancestors.service.UserService;


@RestController
@CrossOrigin("*")
public class Usercontroller {

    @Autowired
    private UserService userService;

    @RequestMapping(
        value = "/signin",
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE,
        method = RequestMethod.POST
    )
    public ResponseEntity<Object> signin(@RequestBody User user) {
        try {
            User loggedInUser = userService.signIn(user);
            return new ResponseEntity<Object>(loggedInUser, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Error e) {
            System.out.println(e);
            return new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
        @RequestMapping(
            value = "/signup",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE,
            method = RequestMethod.POST
        )
        public ResponseEntity<Object> signUpUser(@RequestBody User user) {
            try {
                User savedUser = userService.save(user);
                return new ResponseEntity<Object>(savedUser, HttpStatus.CREATED);
            } catch (DataIntegrityViolationException e) {
                System.out.println("Duplicate email");
                return new ResponseEntity<Object>("Duplicate Email", HttpStatus.BAD_REQUEST);
            } catch (Exception e) {
                System.out.println(e);
                return new ResponseEntity<Object>(e, HttpStatus.BAD_REQUEST);
            } catch (Error e) {
                System.out.println(e);
                return new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }







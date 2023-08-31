package com.ancestors2.ancestors.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ancestors2.ancestors.model.Glendeningfamilymember;
import com.ancestors2.ancestors.service.Glendeningservice;


@RestController
@CrossOrigin("*")


public class Glendeningcontroller {


@Autowired      
 private Glendeningservice glendeningservice;  
 
 @GetMapping("/findallGlendenings")
       
public ResponseEntity<List<Glendeningfamilymember>> getAllGlendenings(){
        List<Glendeningfamilymember> allGlendenings = glendeningservice.getAllGlendenings();
        return ResponseEntity.ok(allGlendenings);
}
 @RequestMapping(value = "/findGlendeningById/{id}", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public ResponseEntity<Object> finddGlendeningById(@PathVariable Long id) {
        try {
            Glendeningfamilymember foundGlendeningfamilymember = glendeningservice.findGlendeningById(id);
            return new ResponseEntity<Object>(foundGlendeningfamilymember, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Error e) {
            System.out.println(e);
            return new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }


}

package com.ancestors2.ancestors.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ancestors2.ancestors.model.Boydfamilymember;
import com.ancestors2.ancestors.service.Boydservice;

@RestController
@CrossOrigin("*")

public class Boydcontroller {

    @Autowired
    Boydservice boydservice;

    @RequestMapping(value = "/saveboyd", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public ResponseEntity<Object> savebohnfamilymember(@RequestBody Boydfamilymember boydfamilymember) {
        try {
            Boydfamilymember savedBoydfamilymember = boydservice.save(boydfamilymember);
            return new ResponseEntity<Object>(savedBoydfamilymember, HttpStatus.CREATED);
        } catch (DataIntegrityViolationException e) {
            System.out.println("");
            return new ResponseEntity<Object>("Boydnotadded", HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<Object>(e, HttpStatus.BAD_REQUEST);
        } catch (Error e) {
            System.out.println(e);
            return new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // @RequestMapping(
    // value = "/updateboyd",
    // consumes = MediaType.APPLICATION_JSON_VALUE,
    // produces = MediaType.APPLICATION_JSON_VALUE,
    // method = RequestMethod.PUT
    // )
    // public ResponseEntity<Object> updateBoydfamilymember(@RequestBody
    // Boydfamilymember boydfamilymember) {
    // try {
    // Boydfamilymember updatedBoydfamilymember =
    // boydservice.update(boydfamilymember);
    // return new ResponseEntity<Object>(updatedBoydfamilymember, HttpStatus.OK);
    // } catch (Exception e) {
    // System.out.println(e);
    // return new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
    // } catch (Error e) {
    // System.out.println(e);
    // return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
    // } }

    @RequestMapping(value = "/deleteboyd/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> deleteboyd(@PathVariable Long id) {
        try {
            boydservice.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Error e) {
            System.out.println(e);
            return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @RequestMapping(value = "/findBoydById/{id}", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public ResponseEntity<Object> finddBoydById(@PathVariable Long id) {
        try {
            Boydfamilymember foundBoydfamilymember = boydservice.findBoydById(id);
            return new ResponseEntity<Object>(foundBoydfamilymember, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Error e) {
            System.out.println(e);
            return new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/findallBoyds")
       
public ResponseEntity<Object> getAllBoyds(){
        // List<Boydfamilymember> allBoyds = boydservice.getAllBoyds();
        // return ResponseEntity.ok(allBoyds);
 try{
    System.out.println("here1");
    List<Boydfamilymember> allBoyds = boydservice.getAllBoyds();
    System.out.println("here2");
    return ResponseEntity.ok(allBoyds);

 }
 catch(Error E){
    System.out.println("here3");
                return new ResponseEntity<Object>(E, HttpStatus.INTERNAL_SERVER_ERROR);

 }
      
   }
}

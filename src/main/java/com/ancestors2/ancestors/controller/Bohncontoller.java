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

import com.ancestors2.ancestors.model.Bohnfamilymember;
import com.ancestors2.ancestors.service.Bohnservice;



@RestController
@CrossOrigin("*")

public class Bohncontoller {

@Autowired 
private Bohnservice bohnservice;


 
@RequestMapping(
            value = "/savebohn",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE,
            method = RequestMethod.POST
        )
        public ResponseEntity<Object> savebohnfamilymember(@RequestBody Bohnfamilymember bohnfamilymember){
            try {
                Bohnfamilymember savedBohnfamilymember =bohnservice.save(bohnfamilymember);
                return new ResponseEntity<Object>(savedBohnfamilymember, HttpStatus.CREATED);
            } catch (DataIntegrityViolationException e) {
                System.out.println("");
                return new ResponseEntity<Object>("Bohnnotadded", HttpStatus.BAD_REQUEST);
            } catch (Exception e) {
                System.out.println(e);
                return new ResponseEntity<Object>(e, HttpStatus.BAD_REQUEST);
            } catch (Error e) {
                System.out.println(e);
                return new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    

 

@RequestMapping(
            value = "/update",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE,
            method = RequestMethod.PUT
       )
     public ResponseEntity<Object> updateBohnfamilymember(@RequestBody Bohnfamilymember bohnfamilymember) {
         try {
        Bohnfamilymember updatedBohnfamilymember = bohnservice.update(bohnfamilymember);
           return new ResponseEntity<Object>(updatedBohnfamilymember, HttpStatus.OK);
       } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
            } catch (Error e) {
            System.out.println(e);
            return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
           }        }

         



            @RequestMapping(
        value = "/deletebohn/{id}",
        method = RequestMethod.DELETE
    )
    public ResponseEntity<Object> deletebohn(@PathVariable Long id) {
        try {
            bohnservice.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Error e) {
            System.out.println(e);
            return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    
    }


@RequestMapping(
        value = "/findBohnById/{id}",
        produces = MediaType.APPLICATION_JSON_VALUE,
        method = RequestMethod.GET
      )
    public ResponseEntity<Object> finddBohnById(@PathVariable Long id) {
        try {
            Bohnfamilymember foundBohnfamilymember = bohnservice.findBohnById(id);
            return new ResponseEntity<Object>(foundBohnfamilymember, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Error e) {
            System.out.println(e);
            return new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    } 

    @GetMapping("/findallBohns")
       
public ResponseEntity<List<Bohnfamilymember>> getAllBohns(){
        List<Bohnfamilymember> allBohns = bohnservice.getAllBohns();
        return ResponseEntity.ok(allBohns);

      
   }
}




        
    

      









    


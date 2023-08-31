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

import com.ancestors2.ancestors.model.Rowbottomfamilymember;
import com.ancestors2.ancestors.service.Rowbottomservice;

@RestController
@CrossOrigin("*")




public class Rowbottomcontroller {


    
@Autowired 
private Rowbottomservice rowbottomservice;


  @GetMapping("/findallRowbottoms")
       
public ResponseEntity<List<Rowbottomfamilymember>> getAllRowbottoms(){
        List<Rowbottomfamilymember> allRowbottoms = rowbottomservice.getAllRowbottoms();
        return ResponseEntity.ok(allRowbottoms);
}
// @RequestMapping(
//             value = "/update",
//             consumes = MediaType.APPLICATION_JSON_VALUE,
//             produces = MediaType.APPLICATION_JSON_VALUE,
//             method = RequestMethod.PUT
//        )
//      public ResponseEntity<Object> updateRowbottomfamilymember(@RequestBody Rowbottomfamilymember rowbottomfamilymember) {
//          try {
//         Rowbottomfamilymember updatedRowbottomfamilymember = rowbottomfamilymember.update(rowbottomfamilymember);
//            return new ResponseEntity<Object>(updatedRowbottomfamilymember, HttpStatus.OK);
//        } catch (Exception e) {
//             System.out.println(e);
//             return new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
//             } catch (Error e) {
//             System.out.println(e);
//             return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
//            }        
//           }

         



            @RequestMapping(
        value = "/deleterowbottom/{id}",
        method = RequestMethod.DELETE
    )
    public ResponseEntity<Object> deleterowbottom(@PathVariable Long id) {
        try {
            rowbottomservice.deleteById(id);
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
        value = "/findrowbottomById/{id}",
        produces = MediaType.APPLICATION_JSON_VALUE,
        method = RequestMethod.GET
      )
    public ResponseEntity<Object> finddRowbottomById(@PathVariable Long id) {
        try {
            Rowbottomfamilymember foundRowbottomfamilymember = rowbottomservice.findRowbottomById(id);
            return new ResponseEntity<Object>(foundRowbottomfamilymember, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Error e) {
            System.out.println(e);
            return new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    




        
    

      









    


   }
  
}

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
import com.ancestors2.ancestors.model.Photos;
import com.ancestors2.ancestors.service.Photoservice;


@RestController
@CrossOrigin("*")


public class Photocontroller {
    

@Autowired 
private Photoservice photoservice;

@RequestMapping(
            value = "/savephoto",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE,
            method = RequestMethod.POST
        )
        public ResponseEntity<Object> savephoto(@RequestBody Photos photos) {
            try {
                Photos savedPhotos = photoservice.save(photos);
                return new ResponseEntity<Object>(savedPhotos, HttpStatus.CREATED);
            } catch (DataIntegrityViolationException e) {
                System.out.println("Photo Added");
                return new ResponseEntity<Object>("Photo Not added", HttpStatus.BAD_REQUEST);
            } catch (Exception e) {
                System.out.println(e);
                return new ResponseEntity<Object>(e, HttpStatus.BAD_REQUEST);
            } catch (Error e) {
                System.out.println(e);
                return new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
            }

        }

@RequestMapping(
            value = "/usersavephoto",
            consumes =MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE,
            method = RequestMethod.POST
)




public ResponseEntity<Object> saveuserphoto(@RequestBody Photos photos) {
            try {
                Photos savedPhotos = photoservice.save(photos);
                return new ResponseEntity<Object>(savedPhotos, HttpStatus.CREATED);
            } catch (DataIntegrityViolationException e) {
                System.out.println("Photo Added");
                return new ResponseEntity<Object>("Photo Not added", HttpStatus.BAD_REQUEST);
            } catch (Exception e) {
                System.out.println(e);
                return new ResponseEntity<Object>(e, HttpStatus.BAD_REQUEST);
            } catch (Error e) {
                System.out.println(e);
                return new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        

//  @RequestMapping(
//     value = "/upload", 
//     method = RequestMethod.POST 
  
    
//  )
    
//     public String submit(@RequestParam("file") MultipartFile file, ModelMap modelMap) {
//     modelMap.addAttribute("file", file);

//     return "fileUploadView";
}


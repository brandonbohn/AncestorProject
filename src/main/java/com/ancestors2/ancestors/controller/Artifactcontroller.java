package com.ancestors2.ancestors.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.ancestors2.ancestors.model.Artifact;
import com.ancestors2.ancestors.service.Artifactservice;


@RestController
public class Artifactcontroller {
    

@Autowired 
private Artifactservice artifactservice;
    @RequestMapping(
            value = "/savedartifact",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE,
            method = RequestMethod.POST
        )
        public ResponseEntity<Object> saveartifact(@RequestBody Artifact artifact) {
            try {
                Artifact savedArtifact = artifactservice.save(artifact);
                return new ResponseEntity<Object>(savedArtifact, HttpStatus.CREATED);
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
            

// @RequestMapping(
//     value = "/upload", 
//     method = RequestMethod.POST 
    
    
//  )
    
    // public String submit(@RequestParam("file") MultipartFile file, ModelMap modelMap) {
    // modelMap.addAttribute("file", file);

    // return "fileUploadView";
        }
    


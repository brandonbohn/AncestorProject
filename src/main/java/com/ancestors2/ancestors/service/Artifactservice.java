package com.ancestors2.ancestors.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ancestors2.ancestors.model.Artifact;
import com.ancestors2.ancestors.repo.Artifactrepo;

@Service
public class Artifactservice {
 @Autowired 

    private Artifactrepo artifactrepo;

public Artifact save(Artifact artifact) throws Exception {
    return artifactrepo.save(artifact);

}   
}
   


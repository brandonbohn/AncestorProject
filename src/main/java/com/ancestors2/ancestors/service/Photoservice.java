package com.ancestors2.ancestors.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ancestors2.ancestors.model.Photos;
import com.ancestors2.ancestors.repo.Photorepo;

@Service
public class Photoservice {
@Autowired 

    private Photorepo photorepo;

public Photos save(Photos photos) throws Exception {
    return photorepo.save(photos);

}   
}

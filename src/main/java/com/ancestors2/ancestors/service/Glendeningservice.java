package com.ancestors2.ancestors.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ancestors2.ancestors.model.Glendeningfamilymember;
import com.ancestors2.ancestors.repo.FamilyRepos.Glendeningrepo;

@Service
public class Glendeningservice {

public List<Glendeningfamilymember> glendeningfamilymember;

 @Autowired 
 private Glendeningrepo glendeningrepo;

public Glendeningfamilymember save(Glendeningfamilymember glendeningfamilymember) throws Exception {
    return glendeningrepo.save(glendeningfamilymember);


}
public Glendeningfamilymember findGlendeningById(Long id) throws Exception {
                Optional<Glendeningfamilymember> glendeningfamilymember = glendeningrepo.findGlendeningById(id);
        
                if (glendeningfamilymember.isPresent()) {
                    return glendeningfamilymember.get();
                }
                else{
                    throw new Exception("Family member not found");
                }


            }

 public List<Glendeningfamilymember> getAllGlendenings(){
                    System.out.println("here4");
                return glendeningrepo.findallGlendenings();

}

}

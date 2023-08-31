package com.ancestors2.ancestors.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ancestors2.ancestors.model.Bohnfamilymember;
import com.ancestors2.ancestors.repo.FamilyRepos.Bohnrepo;


@Service
public class Bohnservice {
    
public List<Bohnfamilymember> bohnfamilymember;

@Autowired
 private Bohnrepo bohnrepo;

public Bohnfamilymember save(Bohnfamilymember bohnfamilymember) throws Exception {
    return bohnrepo.save(bohnfamilymember);

}


 public Bohnfamilymember update(Bohnfamilymember bohnfamilymember) throws Exception {
return bohnrepo.save(bohnfamilymember);

 }



   

            public Bohnfamilymember findBohnById(Long id) throws Exception {
                Optional<Bohnfamilymember> bohnfamilymember = bohnrepo.findBohnById(id);
        
                if (bohnfamilymember.isPresent()) {
                    return bohnfamilymember.get();
                }
                else{
                    throw new Exception("Family member not found");
                }

            }


            public void deleteById(Long id) {
            }


            public List<Bohnfamilymember> getAllBohns(){
                return bohnrepo.findallBohns();
            }



}



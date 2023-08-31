package com.ancestors2.ancestors.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ancestors2.ancestors.model.Boydfamilymember;
import com.ancestors2.ancestors.repo.FamilyRepos.Boydrepo;





@Service
public class Boydservice {

public static List<Boydfamilymember> boydfamilymember;
    
@Autowired    
 private Boydrepo boydrepo;
 



public Boydfamilymember save(Boydfamilymember boydfamilymember) throws Exception {
    return boydrepo.save(boydfamilymember);

}
 public Boydfamilymember findBoydById(Long id) throws Exception {
                Optional<Boydfamilymember> boydfamilymember = boydrepo.findBoydById(id);
        
                if (boydfamilymember.isPresent()) {
                    return boydfamilymember.get();
                }
                else{
                    throw new Exception("Family member not found");
                }


            }


                public List<Boydfamilymember> getAllBoyds(){
                    System.out.println("here4");
                return boydrepo.findAll();
            }

                // public Boydfamilymember update(Boydfamilymember boydfamilymember2) {
                //     return ;
                // }
                public void deleteById(Long id) {
                }

        }
        
  




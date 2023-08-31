package com.ancestors2.ancestors.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ancestors2.ancestors.model.Rowbottomfamilymember;
import com.ancestors2.ancestors.repo.FamilyRepos.Rowbottomrepo;


@Service

public class Rowbottomservice {




    public  List<Rowbottomfamilymember> rowbottomfamilymember;

@Autowired 
private Rowbottomrepo rowbottomrepo;





 public List<Rowbottomfamilymember> getAllRowbottoms(){
                return rowbottomrepo.findallRowbottoms();
            }





public void deleteById(Long id) {
}





public Rowbottomfamilymember findRowbottomById(Long id) throws Exception {
                Optional<Rowbottomfamilymember> rowbottomfamilymember = rowbottomrepo.findRowbottomById(id);
        
                if (rowbottomfamilymember.isPresent()) {
                    return rowbottomfamilymember.get();
                }
                else{
                    throw new Exception("Family member not found");
                }

            }

        }

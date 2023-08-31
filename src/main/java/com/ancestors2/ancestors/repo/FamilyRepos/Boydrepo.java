package com.ancestors2.ancestors.repo.FamilyRepos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ancestors2.ancestors.model.Boydfamilymember;

@Repository
public interface Boydrepo extends JpaRepository<Boydfamilymember,Long>{

    
      

 @Query(value="select * from boydfamilymembers", nativeQuery = true)
    public List<Boydfamilymember> findallBoyds();
    


        Optional<Boydfamilymember> findBoydById(Long id);

    }
    


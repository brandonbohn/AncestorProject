package com.ancestors2.ancestors.repo.FamilyRepos;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ancestors2.ancestors.model.Glendeningfamilymember;

  @Repository
public interface Glendeningrepo extends JpaRepository<Glendeningfamilymember,Long>  {

  
@Query(value="select * from glendeningfamilymembers", nativeQuery = true)
    public List<Glendeningfamilymember> findallGlendenings();
    
   Optional<Glendeningfamilymember> findGlendeningById(Long id);

}

    
  


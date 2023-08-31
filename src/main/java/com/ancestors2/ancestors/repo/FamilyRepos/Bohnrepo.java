package com.ancestors2.ancestors.repo.FamilyRepos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ancestors2.ancestors.model.Bohnfamilymember;



@Repository
public interface Bohnrepo extends JpaRepository<Bohnfamilymember,Long>  {

    Optional<Bohnfamilymember> findBohnById(Long id);

    @Query(value="select * from bohnfamilymembers", nativeQuery = true)
    public List<Bohnfamilymember> findallBohns();
    

  






}







    
        

    









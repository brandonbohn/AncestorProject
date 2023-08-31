package com.ancestors2.ancestors.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ancestors2.ancestors.model.Photos;

@Repository
public interface Photorepo extends JpaRepository<Photos,Long>  {






    
}

package com.ancestors2.ancestors.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ancestors2.ancestors.model.Artifact;

@Repository
public interface Artifactrepo extends JpaRepository<Artifact,Long>  {




    
}

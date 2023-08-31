package com.ancestors2.ancestors.repo.FamilyRepos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ancestors2.ancestors.model.Rowbottomfamilymember;


@Repository

public interface Rowbottomrepo extends JpaRepository<Rowbottomfamilymember,Long>  {

Optional<Rowbottomfamilymember> findRowbottomById(Long id);

@Query(value="select * from rowbottomfamilymembers", nativeQuery = true)
    public List<Rowbottomfamilymember> findallRowbottoms();
    
     


}

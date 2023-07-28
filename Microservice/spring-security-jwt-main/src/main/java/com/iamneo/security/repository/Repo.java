package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.iamneo.security.entity.RegisEntity;

public interface Repo extends JpaRepository<RegisEntity,String>{

}

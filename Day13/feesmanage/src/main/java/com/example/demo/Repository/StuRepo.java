package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.Entity.StuEntity;

public interface StuRepo extends JpaRepository<StuEntity,String>{

}

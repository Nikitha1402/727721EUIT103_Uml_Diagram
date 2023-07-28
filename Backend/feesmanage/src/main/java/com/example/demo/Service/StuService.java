package com.example.demo.Service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.StuEntity;
import com.example.demo.Repository.StuRepo;
@Service
public class StuService {
	@Autowired //extends another class
    StuRepo stRepo; //reference variable
	
	public StuEntity saveDetails(StuEntity e) {
		return stRepo.save(e);
	}
	public List <StuEntity>getDetails()

{
		return stRepo.findAll();
		
}
	public StuEntity UpdateDetails(StuEntity e1)
	{
		return stRepo.saveAndFlush(e1);
	}
	
	public void deleteDetails (String name)
	{		
	
	    stRepo.deleteById(name);	
	
	}
}
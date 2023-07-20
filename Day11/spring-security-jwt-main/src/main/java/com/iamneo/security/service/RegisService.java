package com.iamneo.security.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.RegisEntity;
import com.iamneo.security.repository.Repo;
@Service
public class RegisService {
	@Autowired //extends another class
    Repo stRepo; //reference variable
	
	public RegisEntity saveDetails(RegisEntity e) {
		return stRepo.save(e);
	}
	public List <RegisEntity>getDetails()

{
		return stRepo.findAll();
		
}
	public RegisEntity UpdateDetails(RegisEntity e1)
	{
		return stRepo.saveAndFlush(e1);
	}
	
	public void deleteDetails (String firstName)
	{		
	
	    stRepo.deleteById(firstName);	
	
	}
}
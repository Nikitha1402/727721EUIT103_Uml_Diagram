package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.StudentEntity;
import com.example.demo.Repository.StudentRepo;

@Service
public class StudentService 
{
	@Autowired
	StudentRepo stRepo;
	
	public StudentEntity saveDetails(StudentEntity e)
	{
		return stRepo.save(e);
	}
	public List<StudentEntity> getDetails()
	{
		return stRepo.findAll();
	}
	public StudentEntity updateDetails(StudentEntity e1)
	{
		return stRepo.saveAndFlush(e1);
	}
	public void deleteDetails(int id)
	{
		stRepo.deleteById(id);
	}
	//display JPQL
//	public List<StudentEntity> allStudent()
//	{
//		return stRepo.getStudentInfo();
//	}
	
	//displayParticular JPQL
	public List<StudentEntity> allStudent(int s,String b)
	{
		return stRepo.getStudentInfo(s,b);
	}
	
	//delete JPQL
	public Integer delStudent(int id)
	{
		return stRepo.deletebyStudentId(id);
	}
	
	//update JPQL
	public Integer upStudent(String name,int id)
	{
		return stRepo.updatebyStudentId(name,id);
	}
}
package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.StudentEntity;
import com.example.demo.Service.StudentService;

@RestController
public class StudentController 

{
	@Autowired
	StudentService stuService;
	
	@PostMapping("/addDetails")
	public StudentEntity addInfo(@RequestBody StudentEntity st)
	{
		return stuService.saveDetails(st);
	}
	@GetMapping("showDetails")
	public List<StudentEntity> fetchDetails()
	{
		return stuService.getDetails();
	}
	@PutMapping("/updateDetails")
	public StudentEntity updateInfo(@RequestBody StudentEntity st1)
	{
		return stuService.updateDetails(st1);
	}
	
	@DeleteMapping("/delete/{sid}")
	public String deleteInfo(@PathVariable("sid") int sid)
	{
		stuService.deleteDetails(sid);
		return "Deleted details";
	}
	//displayAll
//	@GetMapping("/s")
//	public List<StudentEntity> displayAllStudent()
//	{
//		return stuService.allStudent();
//	}
	
	//displayParticular
	@GetMapping("/s/{sid}/{sname}")
	public List<StudentEntity> displayAllStudent(@PathVariable("sid") int sid,@PathVariable("sname") String sname)
	{
		return stuService.allStudent(sid,sname);
	}
	
	//delete
	@DeleteMapping("/d/{sid}")
	public Integer deleteStu(@PathVariable ("sid") int sid)
	{
		return stuService.delStudent(sid);
	}
	
	//update
	@PutMapping("/p/{sid}/{sname}")
	public Integer updateStu(@PathVariable ("sid") int sid, @PathVariable ("sname") String sname)
	{
		return stuService.upStudent(sname,sid);
	}
}
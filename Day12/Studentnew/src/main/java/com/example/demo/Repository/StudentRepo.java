package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Entity.StudentEntity;

import jakarta.transaction.Transactional;

public interface StudentRepo extends JpaRepository<StudentEntity,Integer> 
{
	//@Query(value="select * from student_demo",nativeQuery=true)
	@Query(value="select * from student_demo where sid=:s or sname=:sn",nativeQuery=true)
	public List<StudentEntity> getStudentInfo(@Param("s") int sid,@Param("sn") String sname);
	
	//delete
	@Modifying
	@Transactional
	@Query(value="DELETE FROM student_demo where sid=:i",nativeQuery=true)
	Integer deletebyStudentId(@Param("i") int sid);
	
	//update
	@Modifying
	@Transactional
	@Query(value="Update student_demo set sname=:n where sid=:i",nativeQuery=true)
	public Integer updatebyStudentId(@Param("n") String sname,@Param("i") int sid);
}

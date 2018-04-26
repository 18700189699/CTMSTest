package com.chinasofti.ctms.dao;

import java.util.List;

import org.mybatis.spring.annotation.MapperScan;

import com.chinasofti.ctms.bean.Teacher;
import com.chinasofti.ctms.bean.User;

@MapperScan
public interface TeacherDao {

	public int insertTeacher(Teacher teacher); //保存数据
	
	public Teacher findByName(User user); //做登录操作
	
	public int updatePwd(User user);//修改密码
	
	public List<Teacher> findTeacherByPage(User user);//查询数据，根据分页查询
	
	public int getCount(User user);//查询总记录数
}

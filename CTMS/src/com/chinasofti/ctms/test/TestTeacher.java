package com.chinasofti.ctms.test;

import java.util.List;
import java.util.UUID;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.chinasofti.ctms.bean.Teacher;
import com.chinasofti.ctms.bean.User;
import com.chinasofti.ctms.dao.TeacherDao;
import com.chinasofti.ctms.service.TeacherService;

public class TestTeacher {

	//添加数据的方法
	public static void insertteacher(){
		ApplicationContext context = new ClassPathXmlApplicationContext("ApplicationContext.xml");
//		TeacherService teacherService = (TeacherService)context.getBean("teacherService");
		TeacherDao teacherDao = (TeacherDao)context.getBean("teacherDao");
		for(int i =0;i<100;i++){
			Teacher teacher = new Teacher();
			teacher.setTeacherId(UUID.randomUUID().toString());
			teacher.setTeacherName("孙卫东"+i);
			teacher.setTeacherSex(""+i);
			teacher.setTeacherContaxt(""+i);
			teacher.setTeacherEmail(""+i);
			teacher.setTeacherUse(""+i);
			teacher.setTeacherZige(""+i);
			teacher.setStatus(""+i);
			teacher.setTeacherPic(""+i);
			teacher.setPermission(""+i);
			teacher.setPassword("swd123");
			teacherDao.insertTeacher(teacher);
		}
	}
	
	//查询分页的方法
	public static void findTeacherByPage(){
		ApplicationContext context = new ClassPathXmlApplicationContext("ApplicationContext.xml");
		TeacherDao teacherDao = (TeacherDao)context.getBean("teacherDao");
		User user = new User();
		user.setStart(40);
		user.setEnd(60);
//		user.setUserId("2e8d31fb-5528-4415-b0a9-b89103c19e29");
		user.setUserName("东");
		List<Teacher> teachers = teacherDao.findTeacherByPage(user);
		for(Teacher t: teachers){
			System.out.println(t);
		}
	}
	
	//查询总记录数
	public static void getCount(){
		ApplicationContext context = new ClassPathXmlApplicationContext("ApplicationContext.xml");
		TeacherDao teacherDao = (TeacherDao)context.getBean("teacherDao");
		User user = new User();
		user.setStart(1);
		user.setEnd(108);
//		user.setUserId("2e8d31fb-5528-4415-b0a9-b89103c19e29");
		user.setUserName("东");
		System.out.println(teacherDao.getCount(user));
	}
	
	public static void main(String[] args) {
//		insertteacher();
//		findTeacherByPage();
		getCount();
	}
}

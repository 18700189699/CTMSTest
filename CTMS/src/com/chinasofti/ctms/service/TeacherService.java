package com.chinasofti.ctms.service;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

import org.apache.commons.fileupload.util.Streams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.chinasofti.ctms.bean.Teacher;
import com.chinasofti.ctms.bean.User;
import com.chinasofti.ctms.dao.TeacherDao;
import com.chinasofti.ctms.utils.Constants;
import com.chinasofti.ctms.utils.Page;

@Service
public class TeacherService {

	@Autowired
	private TeacherDao teacherDao;
	
	/*
	 * 添加数据
	 */
	@Transactional
	public void saveTeacher(Teacher teacher,MultipartFile file,String path){
		
		path = path.replace("CTMS", "CTMSphoto");
		System.out.println("service++========="+path);
		
		//获取文件名称
		String fileName = file.getOriginalFilename();
		
		if (!file.isEmpty()) {
			try {
				String uuid = UUID.randomUUID().toString();
				teacher.setTeacherId(uuid);
				teacher.setTeacherPic(fileName);
				int ret = teacherDao.insertTeacher(teacher);
				path = path+uuid+".jpg";
				Streams.copy(file.getInputStream(), new FileOutputStream(path), true);
				} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				} 
			}
		}
	
	/*
	 * 登录
	 */
	public Teacher login(User user){
		return teacherDao.findByName(user);
	}
	
	/*
	 * 修改密码
	 */
	public String updatePwd(User user){
		if (!user.getUserPwd().equals(user.getRepeatPwd())) {
			return "您两次输入的密码的不一致";
		}
		User user2 = new User();
		user2.setUserId(user.getUserId());
		user2.setUserPwd(user.getOldPwd());
		Teacher teacher = teacherDao.findByName(user2);
		if (teacher==null) {
			return "旧密码输入有误";
		}
		teacherDao.updatePwd(user);
		return "";
	}
	
	/*
	 * 分页
	 */
	public Page<Teacher> findByPage(User user){
		int total = teacherDao.getCount(user);
		Page<Teacher> page = new Page<Teacher>(Constants.PAGE_RECORD, total);
		page.computeByCurrentPage(user.getCurPage()); //获取总页数
		user.setStart(page.getStart());
		user.setEnd(page.getEnd());
		List<Teacher> teachers = teacherDao.findTeacherByPage(user);
		page.setList(teachers);
		return page;
	}
}

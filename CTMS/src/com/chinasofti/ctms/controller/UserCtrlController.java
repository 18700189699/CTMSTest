package com.chinasofti.ctms.controller;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.fileupload.util.Streams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.chinasofti.ctms.bean.Teacher;
import com.chinasofti.ctms.bean.User;
import com.chinasofti.ctms.service.TeacherService;
import com.chinasofti.ctms.utils.Page;


@Controller()
@RequestMapping("/UserCtrl")
public class UserCtrlController {

	/*
	 * 进入用户管理
	 * 分页
	 */
	@RequestMapping("/UserCtrlL")
	public ModelAndView userCtrlL(@ModelAttribute User user){
		System.out.println("进入用户管理");
		ModelAndView model = new ModelAndView("/UserCtrl/UserCtrlL.jsp");
		if (user==null) {
			user = new User();
		}
		Page<Teacher> teacherPage = teacherService.findByPage(user);
		System.out.println(teacherPage);
		model.addObject("teacherPage", teacherPage);
		return model;
	}
	
	@RequestMapping("/UserCtrlD")
	public String userCtrlD(){
		System.out.println("进入新增页面");
		return "/UserCtrl/UserCtrlD.jsp";
	}
	
	/*
	 * 添加页面(上传图片)
	 */
	@Autowired
	private TeacherService teacherService;
	
	@RequestMapping(value="/UserSave",method={RequestMethod.POST})
	/*public ModelAndView userSave(HttpSession session,@ModelAttribute Teacher teacher,
							@RequestParam("teacherPhoto") MultipartFile file){
		ModelAndView model = new ModelAndView("/UserCtrl/UserCtrlD.jsp");
		
		//获取工程文件的路径
		String path = session.getServletContext().getRealPath("/");
		teacherService.saveTeacher(teacher, file, path);
		System.out.println("添加成功");
		return model;
	}*/
	public ModelAndView userSave(HttpSession session,@ModelAttribute Teacher teacher,
			@RequestParam("teacherPhoto") MultipartFile file){
		ModelAndView model = new ModelAndView("/UserCtrl/UserCtrlD.jsp");
		
		//获取工程文件的路径
		String path = session.getServletContext().getRealPath("/");
		teacherService.saveTeacher(teacher, file, path);
		System.out.println("照片添加成功");
		
		return model;
	}
	
	
	
	
	/*
	 * 修改密码
	 */
	@RequestMapping("/updatePassword")
	public ModelAndView updatePassword(@ModelAttribute User user){
		ModelAndView model = new ModelAndView("/UserCtrl/UpdatePassWord.jsp");
		String errorMessage=teacherService.updatePwd(user);
		if (!errorMessage.equals("")) {
			model.addObject("errorMessage", errorMessage);
		}else {
			model.addObject("errorMessage", "-1");
		}
		return model;
	}
	
	
	
	
}

package com.chinasofti.ctms.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.chinasofti.ctms.bean.Teacher;
import com.chinasofti.ctms.bean.User;
import com.chinasofti.ctms.service.TeacherService;

@Controller
@RequestMapping("/")
public class LoginController {
	
	@Autowired
	private TeacherService teacherservice;
	
	/*
	 * 登录页面
	 */
	/*@RequestMapping("/login")
	public ModelAndView login(@ModelAttribute User user,HttpSession session){
		ModelAndView model = new ModelAndView("");
		Teacher teacher = teacherservice.login(user);
		if (teacher!=null) {
			session.setAttribute("teacher", teacher);
			if ("管理员".equals(teacher.getPermission())) {
				model = new ModelAndView("/index.jsp");
			}else {
				model = new ModelAndView("/indexT.jsp");
			}
		}else {
			model = new ModelAndView("/login.jsp");
			model.addObject("message","密码或用户名不正确");
		}
		System.out.println("登录页面成功转换");
		return model;
	}*/
	@RequestMapping("/login")
	public ModelAndView login(@ModelAttribute User use,HttpSession session){
		ModelAndView model = new ModelAndView();
		Teacher teacher = teacherservice.login(use);
		session.setAttribute("teacher", teacher);
		if (teacher!=null) {
			if (teacher.getPermission().equals("管理员")) {
				model = new ModelAndView("/index.jsp");
			}else {
				model = new ModelAndView("/indexT.jsp");
			}
		}else{
			model = new ModelAndView("/login.jsp");
			model.addObject("message", "用户名或者密码错误");
		}
		
		System.out.println("登录页面成功转换");
		System.out.println(use.getUserId()+"=="+use.getUserPwd());
		return model;
	}
	
	/*
	 * 注销功能
	 */
	@RequestMapping("/logout")
	public String loginout(HttpSession session){
		session.setAttribute("teacher", null);
		return "/login.jsp";
	}
	
	
}

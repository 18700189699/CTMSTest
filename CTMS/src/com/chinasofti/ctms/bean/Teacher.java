package com.chinasofti.ctms.bean;

import org.apache.ibatis.type.Alias;

@Alias("teacher")
public class Teacher {

	private String teacherId;

	private String teacherName;

	private String teacherSex;

	private String teacherContaxt;

	private String status;
	
	private String permission;
	
	private String teacherZige;
	
	private String teacherEmail;
	
	private String teacherUse;
	
	private String teacherPic;
	
	private String password;

	public String getTeacherId() {
		return teacherId;
	}

	public void setTeacherId(String teacherId) {
		this.teacherId = teacherId;
	}

	public String getTeacherName() {
		return teacherName;
	}

	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}

	public String getTeacherSex() {
		return teacherSex;
	}

	public void setTeacherSex(String teacherSex) {
		this.teacherSex = teacherSex;
	}

	public String getTeacherContaxt() {
		return teacherContaxt;
	}

	public void setTeacherContaxt(String teacherContaxt) {
		this.teacherContaxt = teacherContaxt;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getPermission() {
		return permission;
	}

	public void setPermission(String permission) {
		this.permission = permission;
	}

	public String getTeacherZige() {
		return teacherZige;
	}

	public void setTeacherZige(String teacherZige) {
		this.teacherZige = teacherZige;
	}

	public String getTeacherEmail() {
		return teacherEmail;
	}

	public void setTeacherEmail(String teacherEmail) {
		this.teacherEmail = teacherEmail;
	}

	public String getTeacherUse() {
		return teacherUse;
	}

	public void setTeacherUse(String teacherUse) {
		this.teacherUse = teacherUse;
	}

	public String getTeacherPic() {
		return teacherPic;
	}

	public void setTeacherPic(String teacherPic) {
		this.teacherPic = teacherPic;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Teacher [teacherId=" + teacherId + ", teacherName=" + teacherName + ", teacherSex=" + teacherSex
				+ ", teacherContaxt=" + teacherContaxt + ", status=" + status + ", permission=" + permission
				+ ", teacherZige=" + teacherZige + ", teacherEmail=" + teacherEmail + ", teacherUse=" + teacherUse
				+ ", teacherPic=" + teacherPic + ", password=" + password + "]";
	}
	
}

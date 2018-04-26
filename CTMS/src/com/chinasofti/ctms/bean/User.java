package com.chinasofti.ctms.bean;

/*
 * user这个用户可以封装所有查询的条件
 */
import org.apache.ibatis.type.Alias;

/*
 * 做登录用的，登录页面
 */

@Alias("user")
public class User {

	private String userId;
	
	private String userPwd;//新密码
	
	private String oldPwd;//老密码
	
	private String repeatPwd; //冲输入新密码
	
	private String userName; //模糊查询的时候可以根据用户姓名进行查询
	
	private int start;
	
	private int end;
	
	private int curPage;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserPwd() {
		return userPwd;
	}

	public void setUserPwd(String userPwd) {
		this.userPwd = userPwd;
	}

	public String getOldPwd() {
		return oldPwd;
	}

	public void setOldPwd(String oldPwd) {
		this.oldPwd = oldPwd;
	}

	public String getRepeatPwd() {
		return repeatPwd;
	}

	public void setRepeatPwd(String repeatPwd) {
		this.repeatPwd = repeatPwd;
	}
	
	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getEnd() {
		return end;
	}

	public void setEnd(int end) {
		this.end = end;
	}

	public int getCurPage() {
		return curPage;
	}

	public void setCurPage(int curPage) {
		this.curPage = curPage;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userPwd=" + userPwd + ", oldPwd=" + oldPwd + ", repeatPwd=" + repeatPwd
				+ "]";
	}
	
}

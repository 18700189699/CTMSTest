<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>修改密码</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="../Css/main.css" rel="stylesheet" type="text/css" media="all">
<link href="../Css/cupertino/jquery-ui-1.7.2.custom.css" rel="stylesheet" 
type="text/css" media="all">
<script type="text/javascript" src="../Js/Common.js"></script>
<script  LANGUAGE="JavaScript">
    var errorMessage="${errorMessage}"
    if(errorMessage=="-1"){
    	alert("密码修改成功");
    	window.close();
    }else if(errorMessage!=""){
    	alert(errorMessage);
    }
    function OK() 
    {
        document.getElementById("form1").submit();
       /*  window.location.href="/CTMS/index.jsp" */
       // window.close();
    }
    function Cancle() 
    {
        window.close();
    }
</script>
</head>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<form id="form1" method="POST" action="/CTMS/UserCtrl/updatePassword.form">
  <input type="hidden" id="query" value="1">
  <table cellspacing=0 cellpadding=0 width="100%" border=0  align="center">
    <tr>
      <td><!--导航栏 开始-->
        <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
          <tr>
            <td width="2%" height="24"><div align="center"><img 
                                         src="../images/neiye6_r8_c9.jpg" 
                                         height="11" /></div></td>
            <td width="98%"><font color="#0000FF">当前位置 -> 用户信息 -> 更改密码</font></td>
          </tr>
          <tr>
            <td height="2" colspan="2"><hr size="1" noshade="noshade" /></td>
          </tr>
        </table>
        <!--导航栏 结束--></td>
    </tr>
    <tr>
      <td><table class="tbl" cellspacing=1 width="100%" cellpadding=0 border=0>
          <tr>
            <td width="40%">用户ID:</td>
            <td width="60%">
            <script type="text/javascript">
              document.write(" <input type=\"text\" id=\"UserID\" name=\"userId\" value=\"${teacher.teacherId}\"" + getquerystring('UserID') + "\" readonly==\"true\" size=\"60\"/> ");
              </script>
              </td>
          </tr>
          <tr>
            <td width="40%">重复旧密码:</td>
            <td width="60%"><input type="password" name="oldPwd" id="Text2" value="" 
              size="20"/></td>
          </tr>
          <tr>
            <td width="40%">新密码:</td>
            <td width="60%"><input type="password" name="userPwd" id="Text2" value="" 
              size="20"/></td>
          </tr>
          <tr>
            <td width="40%">重新输入新密码：</td>
            <td width="60%"><input type="password" id="Text1" name="repeatPwd" value="" 
              size="20"/></td>
          </tr>
          <tr>
            <td colspan=2>&nbsp;&nbsp;<input id="btnsearch" class="button" type="button" onClick="OK();" value="确定" name="search"/>&nbsp;&nbsp;
			<input id="btnsearch" class="button" type="button" onClick="Cancle();" value="取消" name="btnnew"/></td>
          </tr>
        </table></td>
    </tr>
        </table>
</form>
</body>
</html>

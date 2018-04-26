<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>软件学院管理系统</title>
<style type="text/css">
<!--
body,td,th {
	font-family: 宋体;
	font-size: 9pt;
}
body {
	background-image: url(images/login2_r1_c4.jpg);
}
-->
</style>
<script language="JavaScript">
function tijiao(){
	document.getElementById("form1").submit();
}


function btnCancled() {
    document.getElementById("txtUSERID").value = "";
    document.getElementById("txtUSER_PASSWORD").value = "";
    document.getElementById("txtUSERID").focus();
}

</script>
<link href="Css/login.css" rel="stylesheet" type="text/css" />
</head>

<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td align="center" valign="middle"><table width="770" border="0" align="center" cellpadding="0" cellspacing="1" bgcolor="c1c1c1">
        <tr> 
          <td bgcolor="#FFFFFF"><table width="770" border="0" align="center" cellpadding="0" cellspacing="0">
              <tr> 
                <td width="770" height="50" background="images/title.gif"></td>
              </tr>
              <tr> 
                <td><table width="770" border="0" cellspacing="0" cellpadding="0">
                    <tr> 
                    
                     <td width="770" height="265" background="images/login.jpg"><table width="404" height="247" border="0" cellpadding="0" cellspacing="0"> 
                          <tr> 
                            <td height="112">&nbsp;</td>
                            <td valign="bottom"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <form id="form1" name="form1" method="post" action="login.form">
                                  <tr> 
                                    <td width="34%" height="30"><div align="center">用户ID：</div></td>
                                    <td width="5%" height="30">&nbsp;</td>
                                    <td width="61%" height="30"><input id="txtUSERID" name="userId" type="text" class="box_login" /></td>
                                  </tr>
                                  <tr> 
                                    <td height="30"><div align="center">密&nbsp;&nbsp;码：</div></td>
                                    <td height="30">&nbsp;</td>
                                    <td height="30"><input id="txtUSER_PASSWORD" name="userPwd" type="password" class="box_login" />&nbsp;<font color="red">${message }</font></td>
                                  </tr>
                                  <tr> 
                                    <td height="30" colspan="3"><div align="center"> 
                                        <a href="#" onClick="tijiao()"><img src="images/dl.jpg" width="32" height="16" border="0" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="#javascript" onClick="btnCancled()"><img src="images/qx.jpg" width="33" height="17" border="0" /></a></div></td>
                                  </tr>
                                </form>
                              </table></td>
                            <td>&nbsp;</td>
                          </tr>
                          <tr> 
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                          </tr>
                        </table></td>
                    </tr>
                  </table></td>
              </tr>
              <tr> 
                
              </tr>
            </table></td>
        </tr>
      </table></td>
  </tr>
</table>
</body>
</html>

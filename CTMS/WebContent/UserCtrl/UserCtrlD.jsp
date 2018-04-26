<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>新增页面</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="../Css/main.css" rel="stylesheet" type="text/css" media="all">
<link href="../Css/cupertino/jquery-ui-1.7.2.custom.css" rel="stylesheet" 
type="text/css" media="all">
<script type="text/javascript" src="../Js/Common.js"></script>
<script  LANGUAGE="JavaScript">
    //检索
    function StartSearch() 
    {
        form1.action = "UserCtrlL.html?query=1"
        form1.target = "_self";
        form1.submit();
    }
	//初期化
	function init()
	{
		clsTextBox();
		if(getquerystring('query') != null)
		{
			document.getElementById("stable").style.visibility="visible";
		}else{
			document.getElementById("stable").innerHTML="";

        }
        if (getquerystring('view') != 'view') {
            initSex();
            initStatus();
            initGrand();
            initJob();
            initcmbUserStatus();
        }
	}
	//保存
	function save() 
	{
	    /* alert("保存成功！"); */
	    form1.action = "/CTMS/UserCtrl/UserSave.form?query=1"
			form1.target="_self";
			form1.submit();
	}
	//取消
	function cancle()
	{
			if(getquerystring('view')!="new") {
			    form1.action = "UserCtrlL.html?query=1"
			}else
			{
			    form1.action = "UserCtrlL.html"
			}
			form1.target="_self";
			form1.submit();
	}
	//新建
	function newitem()
	{
	    form1.action = "UserCtrlD.html?query=1&view=add";
		form1.target="_self";
		form1.submit();
    }
//修改密码
function UpdataPassWord() 
{
    window.open('UpdatePassWord.html?UserID=' + getquerystring('UserID'), '', 'resizable=no,width=280,height=210,left=400px,top=350px');
}
</script>
</head>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onLoad="init()">
<form id="form1" method="POST" enctype="multipart/form-data">
  <input type="hidden" id="query" value="1">
  <table cellspacing=0 cellpadding=0 width="100%" border=0  align="center">
    <tr>
      <td><!--导航栏 开始-->
        <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
          <tr>
            <td width="2%" height="24"><div align="center"><img 
                                         src="../Images/neiye6_r8_c9.jpg" 
                                         height="11" /></div></td>
             <script type="text/javascript">
                if (getquerystring('view') == 'add') {
                    document.write("<td width=\"98%\"><font color=\"#0000FF\">当前位置 -> 用户管理 -> 用户信息新增</font></td>");
                } 
                if (getquerystring('view') == 'view') {
                    document.write("<td width=\"98%\"><font color=\"#0000FF\">当前位置 -> 用户管理 -> 用户信息查询</font></td>");
                } 
                if (getquerystring('view') == 'edit') {
                    document.write("<td width=\"98%\"><font color=\"#0000FF\">当前位置 -> 用户管理 -> 用户信息编辑</font></td>");
                } 
              </script>
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
            <td width="10%">用户ID:</td>
            <td width="90%"><input type="text" id="name" value="" 
              size="30"/></td>
          </tr>
          <tr>
            <td width="10%">用户名称：</td>
            <td width="90%"><input type="text" id="Text1" value="" 
              size="30"/></td>
          </tr>
          <tr>
            <td colspan=2><input id="btnsearch" class="button" type="button" onClick="StartSearch();" value="检索" name="search"/>
	<input id="btnsearch" class="button" type="button" onClick="newitem();" value="新增" name="btnnew"/></td>
          </tr>
        </table></td>
    </tr>
    <tr>
      <td height="2" colspan="2"><hr size="1" noshade="noshade" /></td>
    </tr>
    <span id="stable" style="visibility:hidden">

    <tr>
      <td>
        <table cellspacing=0 cellpadding=0 border=0>
          <tr>
            <td valign=center width=3 height=28><img height=28 alt="" 
            src="../Images/tableft.png" width=3 border=0></td>
            <td valign=center nowrap background=../Images/tabbg.png>&nbsp;<a 
              href="UserCtrlL.html?query=1">用户信息一览</a>&nbsp;</td>
            <td valign=center width=3><img height=28 alt="" 
            src="../Images/tabright.png" width=3 border=0></td>
            <td class=tabsp width=3><img height=1  src="../Images/shim.gif" 
            width=1></td>
            <td valign=center width=3 height=28><img height=28 alt="" 
            src="../Images/tabselectedleft.png" width=3 border=0></td>
            <td valign=center nowrap background=../Images/tabselectedbg.png>&nbsp;
            用户信息&nbsp;</td>
            <td valign=center width=3><img height=28 alt="" 
            src="../Images/tabselectedright.png" width=3 border=0></td>
            <td class=tabsp width=3><img height=1  src="../Images/shim.gif" 
            width=1></td>
          </tr>
        </table>
        </td>
    </tr>

    <tr>
      <td><table class="tbl" cellspacing=1 cellpadding=1 width="100%" border=0  align="left">
        <tr>
          <th colspan=3 ><div align="left"></div></th> </tr> 
          <tr>
           <td width="10%">用户ID：</td> 
            <td width="40%">
              
             
            </td> 
              <!--<script type="text/javascript">
                  if (getquerystring('view') == 'add') {
                      document.write(" <td width='50%' rowspan=9 align=left>");
                  } else {
                  document.write(" <td width='50%' rowspan=9 align=left>");
                  }
              </script>-->
              <td width='50%' rowspan=15 align=left>
              <div><img id="Photo" src="../Images/UserPhoto.bmp"></div>
              <script type="text/javascript">
                  if (getquerystring('view') != 'view') {
                      document.write("<div><input type=\"file\" id=\"PhotoFile\" name=\"teacherPhoto\" onChange=\"PhotoOnchang();\"/></div>");
                  } 
              </script>
              </td>
          </tr> 
          <tr>
           <td>姓名：</td> 
            <td>
              	<script type="text/javascript">
              	    if (getquerystring('view') == 'view') {
              	        document.write(" <input type=\"text\" id=\"name\" name=\"teacherName\"  value=\"" + getquerystring('name') + "\"  size=\"40\"/> ");
              	    } else {
              	    document.write(" <input type=\"text\" id=\"name\" name=\"teacherName\" value=\"" + getquerystring('name') + "\" size=\"40\"/> <font Color='Red'>*</font>");
              	    }
              </script>
              </td> 
          </tr>
          <tr>
           <td>性别：</td> 
            <td>
              <div align="left">
              <script type="text/javascript">
                  if (getquerystring('view') != 'view') {
                      document.write("<select id=\"cmbSex\" name=\"teacherSex\" class=\"boxselect\"></select> ");
                      document.write(" <font Color='Red'>*</font> ");
                  }
                  else {
                      document.write(" <input type=\"text\" id=\"name\" name=\"teacherSex\" value=\"男\" readonly=\"true\" size=\"40\"/> ");
                  }
              </script>
              
              </div>
              </td> 
          </tr>
          <tr>
           <td>联系方式：</td>
            <td>
              <script type="text/javascript">
				if(getquerystring('view')=='view') {
						document.write(" <input type=\"text\" name=\"teacherContaxt\" id=\"name\" value='136********' readonly==\"true\" size=\"40\"/> ");
				}else{
						document.write(" <input type=\"text\" name=\"teacherContaxt\" id=\"address\" size=\"40\"/> ");
				}
              </script>
							</td>
          </tr>
          </span>
  <tr>
    <td>状态：</td>
      <td>
      <div align="left">
      <script type="text/javascript">
          if (getquerystring('view') != 'view') {
              document.write(" <select id=\"cmbStatus\" name=\"status\" class=\"boxselect\"></select>  ");
              document.write(" <font Color='Red'>*</font> ");
          }
          else {
              document.write(" <input type=\"text\" id=\"Text2\" name=\"status\" value=\"在职\" readonly=\"true\" size=\"40\"/> ");
          }
      </script>
      
      </div>
      </td>
      </tr>
      <tr>
    <td>权限设定：</td>
      <td>
      <div align="left">
      <script type="text/javascript">
          if (getquerystring('view') != 'view') {
              document.write(" <select id=\"cmbGrand\" name=\"permission\" class=\"boxselect\"></select>  ");
              document.write(" <font Color='Red'>*</font> ");
          }
          else {
              document.write(" <input type=\"text\" id=\"Text2\" name=\"permission\" value=\"管理员\" readonly=\"true\" size=\"40\"/> ");
          }
      </script>
      </div>
      </td>
      </tr>
      <tr>
    <td>讲师资格：</td>
      <td>
      <div align="left">
      <script type="text/javascript">
          if (getquerystring('view') != 'view') {
              document.write(" <select id=\"cmbJob\" name=\"teacherZige\" class=\"boxselect\"></select> ");
              document.write(" <font Color='Red'>*</font> ");
          }
          else {
              document.write("<input type=\"text\" id=\"Text4\" name=\"teacherZige\" value=\"国家程序员\" readonly=\"true\" size=\"40\"/>");
          }
      </script>
      </div>
      </td>
      </tr>
      <tr>
    <td>邮箱：</td>
      <td>
      <div align="left">
      <script type="text/javascript">
          if (getquerystring('view') != 'view') {
              document.write(" <input type=\"text\" id=\"Text4\" name=\"teacherEmail\" size=\"40\"/> ");
              document.write(" <font Color='Red'>*</font> ");
          }
          else {
              document.write("<input type=\"text\" id=\"Text4\" name=\"teacherEmail\" value=\"chenchongsky777@163.com\" readonly=\"true\" size=\"40\"/>");
          }
      </script>
      </div>
      </td>
      </tr>
      <tr>
    <td>使用状态：</td>
      <td>
      <div align="left">
      <script type="text/javascript">
          if (getquerystring('view') == 'add') {
              document.write(" <select id=\"cmbUserStatus\" name=\"teacherUse\" class=\"boxselect\" ></select>  ");
              document.write("");
          }
          else if (getquerystring('view') == 'edit') {
              document.write(" <select id=\"cmbUserStatus\" name=\"teacherUse\" class=\"boxselect\"></select> ");
          }
          else{
              document.write(" <input type=\"text\" id=\"Text4\" name=\"teacherUse\" value=\"使用\" size=\"40\"/> ");
          }
      </script>
      </div>
      </td>
      </tr>
      <script type="text/javascript">
          if (getquerystring('view') == 'add') {
              document.write("<tr>");
              document.write("<td>初始密码：</td>");
              document.write("<td>");
              document.write(" <input type=\"password\" id=\"name\" name=\"password\" value=\"\" size=\"40\"/> <font Color='Red'>*</font>");
              document.write("</td>");
              document.write("</tr>");
          }
      </script>
      
        <script type="text/javascript">
			if(getquerystring('view')!='view') {
					document.write("<tr>");
					document.write("<td colspan=2>");
					document.write("<input id=\"btnsearch\" class=\"button\" type=\"button\" onClick=\"save();\" value=\"确定\" name=\"btnsave\"/>&nbsp;&nbsp;");
					document.write("<input id=\"btnCancle\" class=\"button\" type=\"button\" onClick=\"cancle();\" value=\"取消\" name=\"btncancle\"/>&nbsp;&nbsp;");
					if (getquerystring('view') == 'edit') 
					{
					    document.write("<input id=\"btnUpdatePassWord\" class=\"button\" type=\"button\" onClick=\"UpdataPassWord();\" value=\"更改密码\" name=\"btncancle\"/>");
					}
					document.write("</td>");
					document.write("</tr>");
			}
      </script>
        </table>
        <!-- test -->
</form>
</body>
</html>

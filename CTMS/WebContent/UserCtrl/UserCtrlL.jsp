<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>用户管理</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="../Css/main.css" rel="stylesheet" type="text/css" media="all">
<link href="../Css/cupertino/jquery-ui-1.7.2.custom.css" rel="stylesheet" 
type="text/css" media="all">
<script type="text/javascript" src="../Js/Common.js"></script>
<script  LANGUAGE="JavaScript">
	//检索
	function StartSearch()
	{
			form1.action="UserCtrlL.html?query=1"
			form1.target="_self";
			form1.submit();
	}
	//初期化
	function init()
	{
		if(getquerystring('query') != null)
		{
			document.getElementById("stable").style.visibility="visible";
		}else{
			document.getElementById("stable").innerHTML="";

		}
	}
	//新建
	function newitem()
	{
	    var value = "UserCtrlD.form?query=1&view=add";
	    //window.open(value, '', 'resizable=no,width=500,height=300,left=400px,top=350px');
	    form1.action = value;
		form1.target="_self";
		form1.submit();
	}
	//编辑
	function Edit(value) 
	{
	    //window.open(value, '', 'resizable=no,width=500,height=300,left=400px,top=350px');
	    form1.action=value;
		form1.target="_self";
		form1.submit();
	}
	//明细
	function Detail(value) 
	{
	    //window.open(value, '', 'resizable=no,width=500,height=300,left=400px,top=350px');
	    form1.action=value;
		form1.target="_self";
		form1.submit();
	}
</script>
</head>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<form id="form1" method="POST">
  <input type="hidden" id="query" value="1">
  <table cellspacing=0 cellpadding=0 width="100%" border=0  align="center">
    <tr>
      <td><!--导航栏 开始-->
        <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
          <tr>
            <td width="2%" height="24"><div align="center"><img 
                                         src="../Images/neiye6_r8_c9.jpg" 
                                         height="11" /></div></td>
            <td width="98%"><font color="#0000FF">当前位置 -> 用户管理 -> 用户信息一览</font></td>
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
    <span id="stable">

    <tr>
      <td><!--Tab 开始-->
        <table cellspacing=0 cellpadding=0 border=0>
          <tr>
            <td valign=center width=3 height=28><img height=28 alt="" 
            src="../Images/tabselectedleft.png" width=3 border=0></td>
            <td valign=center nowrap background=../Images/tabselectedbg.png>&nbsp;用户信息一览&nbsp;</td>
            <td valign=center width=3><img height=28 alt="" 
            src="../images/tabselectedright.png" width=3 border=0></td>
            <td class=tabsp width=3><img height=1  src="../images/shim.gif" 
            width=1></td>
          </tr>
        </table>
        <!--Tab 结束--></td>
    </tr>

    <tr>
      <td><table class="tbl" cellspacing=1 cellpadding=0 width="100%" border=0  align="left">
			<tr align="right">
            <td colspan="9">
                <input type="button" name="pagerFirst" class="btnPager" value="|<">
                <input type="button" name="pagerPrevious" class="btnPager" value="<<">
                
                <input type="text" name="PageNo" id="PageNo1" size="2" />
                <input type="button" name="pagerJump" class="btnPager" value="GO">
                
                <input type="button" name="pagerNext" class="btnPager" value=">>">
                <input type="button" name="pagerLast" class="btnPager" value=">|">
            </td>
            </tr>
          <tr>
            <td><table class="tbl" id="details" cellspacing=1 cellpadding=0 width="100%" border=0  >
                <tr>
                  <th width="20%"><div align="center">用户ID</div></th>
                  <!--<th width="40%"><div align="center">地址</div></th>-->
                  <th width="25%"><div align="center">用户名称</div></th>
                  <th width="10%"><div align="center">用户状态</div></th>
                  <th width="10%"><div align="center">权限</div></th>
                  <th width="25%"><div align="center">讲师资格</div></th>
                  <th width="10%"><div align="center">操作</div></th>
                </tr>
                
                <c:forEach var="tea" items="${teacherPage.list }" varStatus="status">
                
	                <tr>
					<td width="20%"><div align="center"><a href='#' onClick='Detail("UserCtrlD.html")'> ${tea.teacherId}</a></div></td>
					<td width="25%"><div align="center">${tea.teacherName}</div></td>
					<td width="10%"><div align="center">${tea.status} </div></td>
					<td width="10%"><div align="center">${tea.permission}</div></td>
					<td width="25%"><div align="center">${tea.teacherZige}</div></td>
					<td width="10%"><div align="center"><img onClick = 'Edit("UserCtrlD.html")' src='../img/xedit.gif' alt='编辑'>
								   &nbsp;&nbsp;<img onClick = 'Delete(${tea.teacherName})' src='../img/delete.gif' alt='删除'></div></td>
					</tr>
                
                </c:forEach>
                
                
			<tr align="right">
            <td colspan="9">
                <input type="button" name="pagerFirst" class="btnPager" value="|<">
                <input type="button" name="pagerPrevious" class="btnPager" value="<<">
                
                <input type="text" name="PageNo" id="Text2" size="2" />
                <input type="button" name="pagerJump" class="btnPager" value="GO">
                
                <input type="button" name="pagerNext" class="btnPager" value=">>">
                <input type="button" name="pagerLast" class="btnPager" value=">|">
            </td>
            </tr>
				</table></td>
          </tr>
          </span>
        </table>
        <!-- test --></td>
    </tr>
  </table>
  </td>
  </tr>
  </table>
</form>
</body>
</html>

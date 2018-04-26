<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>软件学院管理系统</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="Css/style.css" rel="stylesheet" type="text/css">
<link href="Css/dtree.css" rel="stylesheet" type="text/css">
    <script src="Js/com/jsconst.js" type="text/javascript"></script>
    <script src="Js/com/JsDataGrid.js" type="text/javascript"></script>
        <link href="Css/jqueryui_css/smoothness/jquery-ui-1.7.2.custom.css"
        rel="stylesheet" type="text/css" />

    <script src="Js/jquery-1.3.2.js" type="text/javascript"></script>

    <script src="Js/jquery-ui-1.7.2.custom.min.js" type="text/javascript"></script>

    <script src="Js/com/JsDataGrid.js" type="text/javascript"></script>
    
<style type="text/css" >
#inputformback {
	visibility:hidden;
	position : absolute;
	text-align: center;
	top:12.5%;
	background : #f0f0f0;
	height: 85.4%;
}
#dropmenu03 {
 filter:revealTrans(Duration=1.5, Transition=12), filter: alpha(opacity=90);
	visibility:hide;
}
</style>
<script >


//function showLAYER(idName){ 

//    document.getElementById(idName).style.visibility = 'visible' ;
//	//document.getElementById("frame1").style.visibility = 'visible' ;
//}
//function hideLAYER(idName)
//{ 

//	if(document.getElementById("imgding1").style.display=="none")
//		{
//			
//			document.getElementById(idName).style.visibility='visible';
//			//document.getElementById("frame1").style.visibility = 'visible' ;
//		}
//		else{
//	 			document.getElementById(idName).style.visibility='hidden';
//				//document.getElementById("frame1").style.visibility = 'hidden' ;		
//		}
//}
function lock()
{
  document.getElementById("imgding1").style.display="none";
  document.getElementById("imgding2").style.display="";
  //主画面调整
  document.getElementById("MainFream").style.width="84.5%";
  document.getElementById("inputformback").style.width="15.5%";
  document.getElementById("inputformback").style.visibility='visible';
}
function unlock()
{
  document.getElementById("imgding1").style.display="";
  document.getElementById("imgding2").style.display="none";
  //主画面调整
  document.getElementById("MainFream").style.width="100%";

}
function GoToPage(Page) 
{
    if (Page == "UserCtrl") 
    {
        form1.action = "UserCtrl/UserCtrlL.form";
    }
    if (Page == "StudentCtrl") 
    {
        form1.action = "StudentCtrl/StudentCtrlL.html";
    }
    if (Page == "ProjectCtrl") 
    {
        form1.action = "ProjectCtrl/ProjectCtrlL.html";
    }
    if (Page == "SampleCtrl") 
    {
        form1.action = "SampleCtrl/SampleCtrlL.html";
    }
    if (Page == "BugCtrl") {
        form1.action = "BugCtrl/BugCtrlL.html";
    }
    form1.target = "MainFream";
    form1.submit();
}
function GoOut() {
    window.location.href="logout.form";
}

function UpdatePassWord() {
    window.open("/CTMS/UserCtrl/UpdatePassWord.jsp", '', 'resizable=no,width=800,height=500,left=500px,top=350px');
}
</script>
</head>
<body>
<form id="form1" method="POST">
<table class="tbl" cellspacing=1 cellpadding=0 width="100%" height="100%" border=0 >
  <tr>
    <td height="5%"align="center" >
      <table cellspacing=0 cellpadding=0 width="100%" background="images/top_bg.gif">
        <tr>
          <td align="right"><!--font size="12px" color = "#FFFFFF">实训管理平台</font--><img  src="images/logo.jpg"></td>
          <td align="right"><img src="images/top_right.gif"></td> 
        </tr>
      </table>
     </td> 
      </tr> 
  <tr>
    <td height="5%" style="BACKGROUND-COLOR: #f0f0f0;"><table width="100%" height="100%" border=0 align="center">
        <tr>
          <td width="100%"><div align="left" style="width:55%;float:left;"> <span id="time">
              <script type="text/javascript">document.getElementById('time').innerHTML=new Date().toLocaleString()+' 星期'+'日一二三四五六'.charAt(new Date().getDay());setInterval("document.getElementById('time').innerHTML=new Date().toLocaleString()+' 星期'+'日一二三四五六'.charAt(new Date().getDay());",1000);</script>
              </span>  &nbsp;&nbsp; 使用者: ${teacher.teacherName } &nbsp;&nbsp;ID:${teacher.teacherId } &nbsp;&nbsp; 权限:${teacher.permission }</div>
              
            <div style="width:45%;float:left;"> <img src="images/zhuxiao.JPG" width="34" height="20" onclick="GoOut();" border="0" align="right"> <img src="images/mimaxiugai.JPG" width="70" height="20" border="0" onclick="UpdatePassWord();" align="right"> </div>
            </td>
        </tr>
        <tr>
        <td width="100%">
        <div align="left" style="width:100%;float:left;"> 
        <input id="btnUserCtrl" class="button" type="button" onClick="GoToPage('UserCtrl');" value="用户管理" name="search"/>
        <input id="btnStudentCtrl" class="button" type="button" onClick="GoToPage('StudentCtrl');" value="学生管理" name="search"/>
        <input id="btnItemCtrl" class="button" type="button" onClick="GoToPage('ProjectCtrl');" value="项目管理" name="search"/>
        <input id="btnSampleCtrl" class="button" type="button" onClick="GoToPage('SampleCtrl');" value="案例管理" name="search"/>
        <input id="Button1" class="button" type="button" onClick="GoToPage('BugCtrl');" value="问题管理" name="search"/>
         </div>
        </td>
        </tr>
      </TABLE></td>
  </tr>
  <tr>
    <td height="87%" style="BACKGROUND-COLOR: #f0f0f0;" ><table  cellspacing=1 cellpadding=0 width="100%" height="100%" border=0 >
        <tr >
          <!--<td width="7px" align="left" bgcolor="#A5CEF7" id="aa" ><img src="Images/show1.JPG" align="absmiddle" width="7px" onMouseOver="showLAYER('inputformback')"></td>-->
          <!--<td width="0px"><iframe id="frame1" name="frame1" frameborder="0"style="position:absolute;visibility:hidden;top:13%; left:0px;width:200px;height:95%;background:#f0f0f0;" ></iframe></td>-->
          <td  valign="top"   id="main" ><table width="100%" height="100%"  border="0" align="center" cellpadding="0" cellspacing="0">
              <tr>
                <td height="100%" style="BACKGROUND-COLOR: #f0f0f0;"><iframe id="MainFream" name="MainFream" align="right" height="100%" width="100%" frameborder=0  src="Navi.jsp" ></iframe></td>
              </tr>
            </table></td>
        </tr>
      </table></td>
  </tr>
  <tr>
    <td height="3%" style="BACKGROUND-COLOR: #ffffff;"><table width="100%" border="0" cellpadding="0" cellspacing="0" background="Images/kkxgl_r16_c4.jpg">
        <tr>
          <td width="12%"><div align="center"><img src="Images/kkxgl_r16_c4.jpg" width="10" height="26" /></div></td>
          <td width="76%"><div align="center"></div></td>
          <td width="12%">&nbsp;</td>
        </tr>
      </table></td>
  </tr>
</table>
<!--<div  id="inputformback" align="left"  style="filter: alpha(opacity=90); ">
  <table  cellspacing=0 cellpadding=0 width="100%" border=1 rules="none" bordercolor="#A5CEF7" height="100%" onMouseOver="showLAYER('inputformback')" onMouseOut="hideLAYER('inputformback')" >
    <tr>
      <td width="4%" background="Images/1111.JPG"></td>
      <td width="92%"><table class="tbl" cellspacing=0 cellpadding=0 width="100%" border=0 height="100%" onMouseOver="showLAYER('inputformback')" onMouseOut="hideLAYER('inputformback')" >
          <tr >
            <td height="3%"  align="right" bgcolor="#f0f0f0" background="Images/2222.jpg"><img id="imgding1"src="images/ding1.jpg" border ="0" onclick ="lock();"><img  id="imgding2" style ="display:none" src="images/ding2.jpg" border ="0" onclick ="unlock();"></td>
          </tr>
          <tr >
            <td height="94%" align="left" valign="top" ><table class="tbl" cellspacing= cellpadding=1 width="100%" border=0 height="100%" >
                <tr>
                  <td><iframe id="frame" name="frame" height="100%" width="100%" frameborder="0" src="tree.htm" > </iframe></td>
                </tr>
              </table></td>
          </tr>
          <tr>
            <td height="3%"  align="right" bgcolor="#f0f0f0" background="Images/2222.jpg"></td>
          </tr>
        </table></td>
      <td width="4%" background="Images/1111.JPG"></td>
    </tr>
  </table>
</div>-->
</form>
</body>
</html>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<title>测试页面</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="Css/main.css" rel="stylesheet" type="text/css" media="all">
<script  LANGUAGE="JavaScript"> 
function  setPointer(i)  
{
	document.getElementById("r"+i).checked="checked";
}  
</script>
</head>

<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<form id="form1" method="POST">
	<table cellspacing=0 cellpadding=0 width="100%" border=0  align="center">
			<tr>
			<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
		        <tr> 
		          <td width="2%" height="24"><div align="center"><img src="Images/neiye6_r8_c9.jpg" width="12" height="11" /></div></td>
		          <td width="98%"><font color="#0000FF">当前位置 -> 系统首页</font></td>
		        </tr>
		        <tr> 
		          <td height="2" colspan="2"><hr size="1" noshade="noshade" /></td>
		        </tr>
    		</table>
		    </tr>
	  <tr>	
      <td>
        <table class="tbl" cellspacing=1 cellpadding=0 width="100%" border=0  align="left">
                   <tr>
                       <th width="100%"><div align="center">正在进行项目信息一览</div></th>
                   </tr>
                  <tr>
                    <td><table class="tbl" id="details" cellspacing=1 cellpadding=0 width="100%" border=0>

                        <tr>
                          <th width="10%"><div align="center">项目ID</div></th>
                          <!--<th width="40%"><div align="center">地址</div></th>-->
                          <th width="15%"><div align="center">项目名称</div></th>
                          <th width="5%"><div align="center">项目分类</div></th>
                          <th width="12%"><div align="center">使用语言</div></th>
                          <th width="8%"><div align="center">框架</div></th>
                          <th width="12%"><div align="center">规模</div></th>
                          <th width="8%"><div align="center">数据库</div></th>
                          <th width="5%"><div align="center">实训期间</div></th>
                        </tr>
				        <script type="text/javascript">
				            var ProjectID = new Array('Spl-0001', '00201', '00003', '00004', '00005');
				            var name = new Array('物流中心管理系统', '生产管理系统', '日语实训', '嵌入式营业支援系统', '游戏开发实训');
				            var ProjectClass = new Array('通信', '管理', '日语','营业', '游戏');
				            var Language = new Array('CSharp', 'Java', '日语', 'Java', 'j2me');
				            var Fream = new Array('MVC', 'SSH', '', 'JSF','j2me');
				            var Model = new Array('10人月', '20人月', '24人月', '60人月', '60人月');
				            var DB = new Array('Oracle10g', 'Mysql', '', 'Oracle9i', 'Oracle10i');
				            var Status = new Array('2009年12月01日-2009年12月31日', '2009年12月10日-2010年01月10日', '2009年12月20日-2010年01月20日', '2010年01月01日-2010年02月01日', '2010年01月01日-2010年02月01日');
				            for (var i = 0; i < ProjectID.length; i++)
				            {
				                document.write(" <tr>");
				                document.write("<td width=\"7%\"><div align=\"center\"><a href='#' onClick='Detail(\"ProjectCtrlDInfo.html?query=1&view=view&ProjectID=" + ProjectID[i] + "&name=" + name[i] + "&ProjectClass=" + ProjectClass[i] + "&Language=" + Language[i] + "&Fream=" + Fream[i] + "&Model=" + Model[i] + "&DB=" + DB[i] + "&Status=" + Status[i] + "\")'>" + ProjectID[i] + "</a></div></td>");
				                document.write("<td width=\"15%\"><div align=\"center\">" + name[i] + "</a></div></td>");
				                document.write("<td width=\"5%\"><div align=\"center\">" + ProjectClass[i] + "</a></div></td>");
				                document.write("<td width=\"10%\"><div align=\"center\">" + Language[i] + "</a></div></td>");
				                document.write("<td width=\"8%\"><div align=\"center\">" + Fream[i] + "</a></div></td>");
						        //document.write("<td width=\"40%\"><div align=\"center\">"+Station[i]+"</div></td>");
				                document.write("<td width=\"10%\"><div align=\"center\">" + Model[i] + "</div></td>");
				                document.write("<td width=\"5%\"><div align=\"center\">" + DB[i] + "</div></td>");
				                document.write("<td width=\"15%\"><div align=\"center\">" + Status[i] + "</div></td>");        				        
						        document.write("</tr>");
				           }
				          </script>

				        </table></td>
                  </tr>
                  </span>
                </table>
       </td>
    </tr>
  </table>
  </td>
  </tr>
  </table>
  		</td>
  		</tr>
  </table>
</form>
</body>
</html>
<script  LANGUAGE="JavaScript">

	function ChangePage(pageValue)
	{
        if(pageValue == 'DayActualAnalysis')
            form1.action="DayActualAnalysis1.html?query=1&type=allgrid&datefrom=2009/07/13&dateto=2009/07/13&province=mw";
        if(pageValue == 'DayTheoryAnalysis')
            form1.action="DayTheoryAnalysis2.html?query=1&type=allgrid&datefrom=2009/07/13&dateto=2009/07/13&province=mw";
        if(pageValue == 'DayAnalysis')
            form1.action="dayAnalysis2.html?query=1&type=allgrid&datefrom=2009/07/13&dateto=2009/07/13&province=mw";
		if(pageValue == 'DayReport')
            form1.action="dayReport.html?query=1&type=allgrid&datefrom=2009/07/01&dateto=2009/07/31&province=mw";
		
		form1.target="_self";
		form1.submit();
	}
</script>

//类别值的设定
function SetType(type)  {
	if (type.toString()==document.all("type")[0].value.toString()) {
		document.all("type")[0].checked=true;
	}
	if (type.toString()==document.all("type")[1].value.toString()) {
		document.all("type")[1].checked=true;
	}
	if (type.toString()==document.all("type")[2].value.toString()) {
		document.all("type")[2].checked=true;
	}
	if(document.all("type")[3]==null) {
		return;
	}
	if (type.toString()==document.all("type")[3].value.toString()) {
		document.all("type")[3].checked=true;
	}
		if(document.all("type")[4]==null) {
		return;
	}
	if (type.toString()==document.all("type")[4].value.toString()) {
		document.all("type")[4].checked=true;
	}
}
//在照片变化的时候
function PhotoOnchang() {
    if (document.getElementById("PhotoFile").value != "") {
        if ((document.getElementById("PhotoFile").value.toUpperCase().search('.JPG') == -1) && (Form1.PicThree.value.toUpperCase().search('.JPEG') == -1) && (Form1.PicThree.value.toUpperCase().search('.GIF') == -1)) {
            alert('档案格式必须是JPG、JPEG、GIF');
            document.getElementById("PhotoFile").focus();
        }
        else
            document.getElementById("Photo").src = document.getElementById("PhotoFile").value;
    } else {
    Form1.PicThreePreView.src = "../Images/UserPhoto.bmp";
    }
}
//时间的处理
function SetDate(){
	form1.dtpfrm.value=getquerystring('datefrom');
	form1.dtpto.value=getquerystring('dateto');
}
//request替代
function getquerystring(name)
{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) 
	{
	    return unescape(r[2]);
	}
	return "";
}
function browseFolder(path) 
{
    try {
        var Message = "\u8bf7\u9009\u62e9\u6587\u4ef6\u5939";  //选择框提示信息
        var Shell = new ActiveXObject("Shell.Application");
        //var Folder = Shell.BrowseForFolder(0, Message, 0x0040, 0x11); //起始目录为：我的电脑
        var Folder = Shell.BrowseForFolder(0,Message,0); //起始目录为：桌面
        if (Folder != null) {
            Folder = Folder.items();  // 返回 FolderItems 对象
            Folder = Folder.item();  // 返回 Folderitem 对象
            Folder = Folder.Path;   // 返回路径
            if (Folder.charAt(Folder.length - 1) != "\\") {
                Folder = Folder + "\\";
            }
            document.getElementById(path).value = Folder;
            return Folder;
        }
    }
    catch (e) {
        alert(e.message);
    }
}
//删除
function Delete(value) 
{
    confirm("确认要删除" + value + "这条记录吗？");
//    if (!confirm("确认要删除" + value + "这条记录吗？")) {
//        window.event.returnValue = false;
//    }
}

function initcmbEnglishLevel() {
    form1.cmbEnglishLevel.options.length = 0;
    form1.cmbEnglishLevel.options[1] = new Option('CET-4', '1');
    form1.cmbEnglishLevel.options[2] = new Option('CET-6', '2');
    form1.cmbEnglishLevel.options[3] = new Option('其他', '3');
}

function initcmbQuestionType() {
    form1.cmbQuestionType.options.length = 0;
    form1.cmbQuestionType.options[1] = new Option('Bug', '1');
    form1.cmbQuestionType.options[2] = new Option('ReviewError', '2');
    form1.cmbQuestionType.options[3] = new Option('Q&A', '3');
}

function initcmbQuestionType1() {
    form1.cmbQuestionType1.options.length = 0;
    form1.cmbQuestionType1.options[1] = new Option('Bug', '1');
    form1.cmbQuestionType1.options[2] = new Option('ReviewError', '2');
    form1.cmbQuestionType1.options[3] = new Option('Q&A', '3');
}

//项目规模
function initcmbCost1() {
    form1.cmbCost1.options.length = 0;
    form1.cmbCost1.options[1] = new Option('10以下', '1');
    form1.cmbCost1.options[2] = new Option('10～20', '2');
    form1.cmbCost1.options[3] = new Option('20～30', '3');
    form1.cmbCost1.options[4] = new Option('30～40', '4');
    form1.cmbCost1.options[5] = new Option('40以上', '5');
}
//项目规模
function initcmbCost() {
    form1.cmbCost.options.length = 0;
    form1.cmbCost.options[0] = new Option('', '0');
    form1.cmbCost.options[1] = new Option('10以下', '1');
    form1.cmbCost.options[2] = new Option('10～20', '2');
    form1.cmbCost.options[3] = new Option('20～30', '3');
    form1.cmbCost.options[4] = new Option('30～40', '4');
    form1.cmbCost.options[5] = new Option('40以上', '5');
}
//结项评价
function initcmbResultLevel() {
    form1.cmbResultLevel.options.length = 0;
    form1.cmbResultLevel.options[0] = new Option('优秀', '1');
    form1.cmbResultLevel.options[1] = new Option('一般', '2');
    form1.cmbResultLevel.options[2] = new Option('差', '2');
}
//项目状态
function initcmbProjectStatus() {
    form1.cmbProjectStatus.options.length = 0;
    form1.cmbProjectStatus.options[0] = new Option('已开始', '1');
    form1.cmbProjectStatus.options[1] = new Option('已结束', '2');
}
//用户冻结不冻结
function initcmbUserStatus() {
    form1.cmbUserStatus.options.length = 0;
    form1.cmbUserStatus.options[0] = new Option('使用', '使用');
    form1.cmbUserStatus.options[1] = new Option('禁用', '禁用');
}
//教师
function initteacherName() {
    form1.teacherName.options.length = 0;
    form1.teacherName.options[0] = new Option('', '0');
    form1.teacherName.options[1] = new Option('张天众', '1');
    form1.teacherName.options[2] = new Option('李逵', '2');
    form1.teacherName.options[3] = new Option('高达', '3');
    form1.teacherName.options[4] = new Option('巍巍', '4');
}
//班级
function initcmbclassName1() {
    form1.className1.options.length = 0;
    form1.className1.options[0] = new Option('', '0');
    form1.className1.options[1] = new Option('20090301', '1');
    form1.className1.options[2] = new Option('20090302', '2');
    form1.className1.options[3] = new Option('20090403', '3');
    form1.className1.options[4] = new Option('20090404', '4');
}
//班级
function initcmbclassName() {
    form1.className.options.length = 0;
    form1.className.options[0] = new Option('', '0');
    form1.className.options[1] = new Option('20090301', '1');
    form1.className.options[2] = new Option('20090302', '2');
    form1.className.options[3] = new Option('20090403', '3');
    form1.className.options[4] = new Option('20090404', '4');
}
//初始化进度
function initcmbProgress() {
    form1.cmbProgress.options.length = 0;
    form1.cmbProgress.options[0] = new Option('10%', '1');
    form1.cmbProgress.options[1] = new Option('20%', '2');
    form1.cmbProgress.options[2] = new Option('30%', '3');
    form1.cmbProgress.options[3] = new Option('40%', '4');
    form1.cmbProgress.options[4] = new Option('50%', '5');
    form1.cmbProgress.options[5] = new Option('60%', '6');
    form1.cmbProgress.options[6] = new Option('70%', '7');
    form1.cmbProgress.options[7] = new Option('80%', '8');
    form1.cmbProgress.options[8] = new Option('90%', '9');
    form1.cmbProgress.options[9] = new Option('100%', '10')
}
function initcmbProgress1() {
    form1.cmbProgress1.options.length = 0;
    form1.cmbProgress1.options[0] = new Option('', '0');
    form1.cmbProgress1.options[1] = new Option('10%', '1');
    form1.cmbProgress1.options[2] = new Option('20%', '2');
    form1.cmbProgress1.options[3] = new Option('30%', '3');
    form1.cmbProgress1.options[4] = new Option('40%', '4');
    form1.cmbProgress1.options[5] = new Option('50%', '5');
    form1.cmbProgress1.options[6] = new Option('60%', '6');
    form1.cmbProgress1.options[7] = new Option('70%', '7');
    form1.cmbProgress1.options[8] = new Option('80%', '8');
    form1.cmbProgress1.options[9] = new Option('90%', '9');
    form1.cmbProgress1.options[10] = new Option('100%', '10')
}
//初始化使用Bug等级
function initObjectStage() {
    form1.cmbObjectStage.options.length = 0;
    form1.cmbObjectStage.options[0] = new Option('正在进行', '1');
    form1.cmbObjectStage.options[1] = new Option('已经结束', '2');
}
//初始化使用Bug等级
function initBugLevel() {
    form1.cmbBugLevel.options.length = 0;
    form1.cmbBugLevel.options[0] = new Option('高', '1');
    form1.cmbBugLevel.options[1] = new Option('中', '2');
    form1.cmbBugLevel.options[2] = new Option('低', '3');
}
//初始化使用学生选择
function initBugCreater() {
    form1.cmbBugCreater.options.length = 0;
    form1.cmbBugCreater.options[0] = new Option('上官玉', '1');
    form1.cmbBugCreater.options[1] = new Option('周星星', '2');
    form1.cmbBugCreater.options[2] = new Option('白晶晶', '3');
    form1.cmbBugCreater.options[3] = new Option('雷人王', '4');
}
//初始化使用学生选择
function initBugCreater1() {
    form1.cmbBugCreater1.options.length = 0;
    form1.cmbBugCreater1.options[0] = new Option('上官玉', '1');
    form1.cmbBugCreater1.options[1] = new Option('周星星', '2');
    form1.cmbBugCreater1.options[2] = new Option('白晶晶', '3');
    form1.cmbBugCreater1.options[3] = new Option('雷人王', '4');
}
//初始化使用学生选择
function initBugCreater2() {
    form1.cmbBugCreater2.options.length = 0;
    form1.cmbBugCreater2.options[0] = new Option('上官玉', '1');
    form1.cmbBugCreater2.options[1] = new Option('周星星', '2');
    form1.cmbBugCreater2.options[2] = new Option('白晶晶', '3');
    form1.cmbBugCreater2.options[3] = new Option('雷人王', '4');
}
//初始化使用Bug类型
function initBugType() {
    form1.cmbBugType.options.length = 0;
    form1.cmbBugType.options[0] = new Option('样式有误', '1');
    form1.cmbBugType.options[1] = new Option('编码错误', '2');
    form1.cmbBugType.options[2] = new Option('逻辑错误', '3');
}
//初始化使用Bug类型
function initBugType1() {
    form1.cmbBugType1.options.length = 0;
    form1.cmbBugType1.options[0] = new Option('样式有误', '1');
    form1.cmbBugType1.options[1] = new Option('编码错误', '2');
    form1.cmbBugType1.options[2] = new Option('逻辑错误', '3');
}
//初始化使用Bug阶段
function initStage() {
    form1.cmbStage.options.length = 0;
    form1.cmbStage.options[0] = new Option('单体测试', '1');
    form1.cmbStage.options[1] = new Option('结合测试', '2');
    form1.cmbStage.options[2] = new Option('冒烟测试', '3');
}
//初始化使用Bug状态
function initBugStatus1() {
    form1.cmbBugStatus1.options.length = 0;
    form1.cmbBugStatus1.options[0] = new Option('打开', '1');
    form1.cmbBugStatus1.options[1] = new Option('已关闭', '2');
    form1.cmbBugStatus1.options[2] = new Option('解决待确认', '3');
}
//初始化使用Bug状态
function initBugStatus() {
    form1.cmbBugStatus.options.length = 0;
    form1.cmbBugStatus.options[0] = new Option('打开', '1');
    form1.cmbBugStatus.options[1] = new Option('已关闭', '2');
    form1.cmbBugStatus.options[2] = new Option('解决待确认', '3');
}
//初始化使用项目名称
function initSampleName() {
    form1.cmbSampleName.options.length = 0;
    form1.cmbSampleName.options[0] = new Option('邮局系统', '1');
    form1.cmbSampleName.options[1] = new Option('门禁系统', '2');
    form1.cmbSampleName.options[2] = new Option('生产管理系统', '3');
    form1.cmbSampleName.options[3] = new Option('社内系统', '4');
}
//初始化使用状态
function initUseStatus() {
    form1.cmbUseStatus.options.length = 0;
    form1.cmbUseStatus.options[0] = new Option('在使用', '1');
    form1.cmbUseStatus.options[1] = new Option('已弃用', '2');
}
//初始化框架
function initDB() {
    form1.cmbDB.options.length = 0;
    form1.cmbDB.options[0] = new Option('ORACLE', '1');
    form1.cmbDB.options[1] = new Option('SQL Server', '2');
    form1.cmbDB.options[2] = new Option('Mysql', '3');
    form1.cmbDB.options[3] = new Option('Access', '4');
}
//初始化框架
function initDB1() {
    form1.cmbDB1.options.length = 0;
    form1.cmbDB1.options[0] = new Option('ORACLE', '1');
    form1.cmbDB1.options[1] = new Option('SQL Server', '2');
    form1.cmbDB1.options[2] = new Option('Mysql', '3');
    form1.cmbDB1.options[3] = new Option('Access', '4');
}
//初始化框架
function initFrame() {
    form1.cmbFrame.options.length = 0;
    form1.cmbFrame.options[0] = new Option('MVC.NET', '1');
    form1.cmbFrame.options[1] = new Option('SSH', '2');
    form1.cmbFrame.options[2] = new Option('JSF', '3');
    form1.cmbFrame.options[3] = new Option('Spring', '4');
}
//初始化框架
function initFrame1() {
    form1.cmbFrame1.options.length = 0;
    form1.cmbFrame1.options[0] = new Option('MVC.NET', '1');
    form1.cmbFrame1.options[1] = new Option('SSH', '2');
    form1.cmbFrame1.options[2] = new Option('JSF', '3');
    form1.cmbFrame1.options[3] = new Option('Spring', '4');
}
//初始化语言
function initLanguage() {
    form1.cmbLanguage.options.length = 0;
    form1.cmbLanguage.options[0] = new Option('CSharp', '1');
    form1.cmbLanguage.options[1] = new Option('Java', '2');
    form1.cmbLanguage.options[2] = new Option('CPP', '3');
    form1.cmbLanguage.options[3] = new Option('C', '4');
}
//初始化语言
function initLanguage1() {
    form1.cmbLanguage1.options.length = 0;
    form1.cmbLanguage1.options[0] = new Option('CSharp', '1');
    form1.cmbLanguage1.options[1] = new Option('Java', '2');
    form1.cmbLanguage1.options[2] = new Option('CPP', '3');
    form1.cmbLanguage1.options[3] = new Option('C', '4');
}
//初始化项目分类
function initSampleClass() {
    form1.cmbSampleClass.options.length = 0;
    form1.cmbSampleClass.options[0] = new Option('通信', '1');
    form1.cmbSampleClass.options[1] = new Option('管理', '2');
    form1.cmbSampleClass.options[2] = new Option('金融', '3');
    form1.cmbSampleClass.options[3] = new Option('教育', '4');
}
//初始化项目分类
function initSampleClass1() {
    form1.cmbSampleClass1.options.length = 0;
    form1.cmbSampleClass1.options[0] = new Option('通信', '1');
    form1.cmbSampleClass1.options[1] = new Option('管理', '2');
    form1.cmbSampleClass1.options[2] = new Option('金融', '3');
    form1.cmbSampleClass1.options[3] = new Option('教育', '4');
}
//初始化性别
function initSex() {
    form1.cmbSex.options.length = 0;
    form1.cmbSex.options[0] = new Option('男', '男');
    form1.cmbSex.options[1] = new Option('女', '女');
}
//初始化参训状态
function initStage() {
    form1.cmbStage.options.length = 0;
    form1.cmbStage.options[0] = new Option('参加', '1');
    form1.cmbStage.options[1] = new Option('没参加', '2');
    form1.cmbStage.options[2] = new Option('完成', '3');
}
//初始化在职状态
function initStatus() {
    form1.cmbStatus.options.length = 0;
    form1.cmbStatus.options[0] = new Option('在职', '在职');
    form1.cmbStatus.options[1] = new Option('离职', '离职');
}
//初始化权限状态
function initGrand() {
    form1.cmbGrand.options.length = 0;
    form1.cmbGrand.options[0] = new Option('管理员', '管理员');
    form1.cmbGrand.options[1] = new Option('教师', '教师');
    //form1.cmbGrand.options[2] = new Option('学生', '3');
}
//初始化讲师资格状态
function initJob() {
    form1.cmbJob.options.length = 0;
    form1.cmbJob.options[0] = new Option('Oracle工程师', '1');
    form1.cmbJob.options[1] = new Option('微软架构师', '2');
    form1.cmbJob.options[2] = new Option('国家软件设计师', '3');
    form1.cmbJob.options[3] = new Option('国家程序员', '4');
}
//初始化变电站名
function initStation()
{
	form1.cmbStation.options.length=0;
	form1.cmbStation.options[0]=new Option('兰州东变','1');
	form1.cmbStation.options[1]=new Option('平凉变','2');
	form1.cmbStation.options[2]=new Option('乾县变','3');
}
//初始化省份
function initProvince()
{
	form1.cmbProvince.options.length=0;
	form1.cmbProvince.options[0]=new Option('','1');
	form1.cmbProvince.options[1]=new Option('陕西','2');
	form1.cmbProvince.options[2]=new Option('甘肃','3');
	form1.cmbProvince.options[3]=new Option('宁夏','4');
	form1.cmbProvince.options[4]=new Option('青海','5');
	form1.cmbProvince.options[5]=new Option('新疆','6');
}
function initLineStation()
{
	form1.cmbStart.options.length=0;
	form1.cmbStart.options[0]=new Option('','1');
	form1.cmbStart.options[1]=new Option('兰州东变','2');
	form1.cmbStart.options[2]=new Option('平凉变','3');
	form1.cmbStart.options[3]=new Option('乾县变','4');
	form1.cmbEnd.options.length=0;
	form1.cmbEnd.options[0]=new Option('','1');
	form1.cmbEnd.options[1]=new Option('平凉变','2');
	form1.cmbEnd.options[2]=new Option('兰州东变','3');
	form1.cmbEnd.options[3]=new Option('乾县变','4');
}
//初始化季度
function initTheory()
{
	form1.Theory.options.length=0;
	form1.Theory.options[0]=new Option('第一季度','1');
	form1.Theory.options[1]=new Option('第二季度','2');
	form1.Theory.options[2]=new Option('第三季度','3');
	form1.Theory.options[3]=new Option('第四季度','4');
	form1.Theory.options[2].selected=true;
}
///
//获得检索结果数 
///
function getCount(strInterval,from,to)
{
    var dtFrom = StringToDate(from);
	var dtTo =StringToDate(to);
	return Datediff(strInterval,dtFrom,dtTo);
}
function StringToDate(DateStr)  
{   
    var converted = Date.parse(DateStr);  
    var myDate = new Date(converted);  
    if (isNaN(myDate))  
    {   
        var arys= DateStr.split('/');  
        myDate = new Date(arys[0],--arys[1],arys[2]);  
    }  
    return myDate;  
}  
function Datediff(strInterval,dtStart, dtEnd)
{   
    if (typeof dtEnd == 'string' )//如果是字符串转换为日期型  
    {   
        dtEnd = StringToDate(dtEnd);  
    }  
    switch (strInterval) {   
        case 's' :return parseInt((dtEnd - dtStart) / 1000);  
        case 'n' :return parseInt((dtEnd - dtStart) / 60000);  
        case 'h' :return parseInt((dtEnd - dtStart) / 3600000);  
        case 'd' :return parseInt((dtEnd - dtStart) / 86400000);  
        case 'w' :return parseInt((dtEnd - dtStart) / (86400000 * 7));  
        case 'm' :return (dtEnd.getMonth()+1)+((dtEnd.getFullYear()-dtStart.getFullYear())*12) - (dtStart.getMonth()+1);  
        case 'y' :return dtEnd.getFullYear() - dtStart.getFullYear();  
    }  
}  
function DateAdd(strInterval, Number) {   
    var dtTmp = this;  
    switch (strInterval) {   
        case 's' :return new Date(Date.parse(dtTmp) + (1000 * Number));  
        case 'n' :return new Date(Date.parse(dtTmp) + (60000 * Number));  
        case 'h' :return new Date(Date.parse(dtTmp) + (3600000 * Number));  
        case 'd' :return new Date(Date.parse(dtTmp) + (86400000 * Number));  
        case 'w' :return new Date(Date.parse(dtTmp) + ((86400000 * 7) * Number));  
        case 'q' :return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number*3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());  
        case 'm' :return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());  
        case 'y' :return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());  
    }  
}  
var daySource = new Array("2009/7/1,27094.29,28526.33,33.6,0.561,76,10.2,20.727,0.333","2009/7/2,27298.59,28126.7,33.7,0.052,96,8.4,20.495,0.296","2009/7/3,27730.88,29481.41,42,0.457,68,10.4,20.616,0.208","2009/7/4,29477.6,27830.38,46.8,0.476,93,8.3,20.475,0.333","2009/7/5,28826.58,29981.23,37.2,0.885,66,8.5,20.173,0.247","2009/7/6,28014.62,28859.4,40.1,0.832,37,8.9,20.436,0.242","2009/7/7,29365.33,27777.36,50.8,0.339,75,9.2,20.905,0.251","2009/7/8,28860.77,27132.38,44.5,0.225,62,8.6,20.228,0.395","2009/7/9,29629.93,29442.99,47.8,0.73,54,8.9,20.263,0.235","2009/7/10,28738.89,28300.8,46.5,0.961,96,10.2,20.47,0.365","2009/7/11,27188.5,27235.42,37.5,0.484,80,8.7,20.524,0.364","2009/7/12,29113.19,27954.67,35.1,0.752,91,10.3,20.314,0.382","2009/7/13,28321.89,29046.6,30.5,0.367,49,8.5,20.866,0.288","2009/7/14,28796.37,28203.31,36.3,0.768,57,10.9,20.563,0.264","2009/7/15,29642.71,29691.91,42.4,0.808,58,8.9,20.77,0.34");
var daySortRealRate = new Array("2009/7/10,28738.89,28300.8,46.5,0.961,96,10.2,20.47,0.365","2009/7/5,28826.58,29981.23,37.2,0.885,66,8.5,20.173,0.247","2009/7/6,28014.62,28859.4,40.1,0.832,37,8.9,20.436,0.242","2009/7/15,29642.71,29691.91,42.4,0.808,58,8.9,20.77,0.34","2009/7/14,28796.37,28203.31,36.3,0.768,57,10.9,20.563,0.264","2009/7/12,29113.19,27954.67,35.1,0.752,91,10.3,20.314,0.382","2009/7/9,29629.93,29442.99,47.8,0.73,54,8.9,20.263,0.235","2009/7/1,27094.29,28526.33,33.6,0.561,76,10.2,20.727,0.333","2009/7/11,27188.5,27235.42,37.5,0.484,80,8.7,20.524,0.364","2009/7/4,29477.6,27830.38,46.8,0.476,93,8.3,20.475,0.333","2009/7/3,27730.88,29481.41,42,0.457,68,10.4,20.616,0.208","2009/7/13,28321.89,29046.6,30.5,0.367,49,8.5,20.866,0.288","2009/7/7,29365.33,27777.36,50.8,0.339,75,9.2,20.905,0.251","2009/7/8,28860.77,27132.38,44.5,0.225,62,8.6,20.228,0.395","2009/7/2,27298.59,28126.7,33.7,0.052,96,8.4,20.495,0.296");
var daySortLogicRate = new Array("2009/7/8,28860.77,27132.38,44.5,0.225,62,8.6,20.228,0.395","2009/7/12,29113.19,27954.67,35.1,0.752,91,10.3,20.314,0.382","2009/7/10,28738.89,28300.8,46.5,0.961,96,10.2,20.47,0.365","2009/7/11,27188.5,27235.42,37.5,0.484,80,8.7,20.524,0.364","2009/7/15,29642.71,29691.91,42.4,0.808,58,8.9,20.77,0.34","2009/7/1,27094.29,28526.33,33.6,0.561,76,10.2,20.727,0.333","2009/7/4,29477.6,27830.38,46.8,0.476,93,8.3,20.475,0.333","2009/7/2,27298.59,28126.7,33.7,0.052,96,8.4,20.495,0.296","2009/7/13,28321.89,29046.6,30.5,0.367,49,8.5,20.866,0.288","2009/7/14,28796.37,28203.31,36.3,0.768,57,10.9,20.563,0.264","2009/7/7,29365.33,27777.36,50.8,0.339,75,9.2,20.905,0.251","2009/7/5,28826.58,29981.23,37.2,0.885,66,8.5,20.173,0.247","2009/7/6,28014.62,28859.4,40.1,0.832,37,8.9,20.436,0.242","2009/7/9,29629.93,29442.99,47.8,0.73,54,8.9,20.263,0.235","2009/7/3,27730.88,29481.41,42,0.457,68,10.4,20.616,0.208");
var daySortReal = new Array("2009/7/7,29365.33,27777.36,50.8,0.339,75,9.2,20.905,0.251","2009/7/9,29629.93,29442.99,47.8,0.73,54,8.9,20.263,0.235","2009/7/4,29477.6,27830.38,46.8,0.476,93,8.3,20.475,0.333","2009/7/10,28738.89,28300.8,46.5,0.961,96,10.2,20.47,0.365","2009/7/8,28860.77,27132.38,44.5,0.225,62,8.6,20.228,0.395","2009/7/15,29642.71,29691.91,42.4,0.808,58,8.9,20.77,0.34","2009/7/3,27730.88,29481.41,42,0.457,68,10.4,20.616,0.208","2009/7/6,28014.62,28859.4,40.1,0.832,37,8.9,20.436,0.242","2009/7/11,27188.5,27235.42,37.5,0.484,80,8.7,20.524,0.364","2009/7/5,28826.58,29981.23,37.2,0.885,66,8.5,20.173,0.247","2009/7/14,28796.37,28203.31,36.3,0.768,57,10.9,20.563,0.264","2009/7/12,29113.19,27954.67,35.1,0.752,91,10.3,20.314,0.382","2009/7/2,27298.59,28126.7,33.7,0.052,96,8.4,20.495,0.296","2009/7/1,27094.29,28526.33,33.6,0.561,76,10.2,20.727,0.333","2009/7/13,28321.89,29046.6,30.5,0.367,49,8.5,20.866,0.288");
var datSortLogic = new Array("2009/7/10,28738.89,28300.8,46.5,0.961,96,10.2,20.47,0.365","2009/7/2,27298.59,28126.7,33.7,0.052,96,8.4,20.495,0.296","2009/7/4,29477.6,27830.38,46.8,0.476,93,8.3,20.475,0.333","2009/7/12,29113.19,27954.67,35.1,0.752,91,10.3,20.314,0.382","2009/7/11,27188.5,27235.42,37.5,0.484,80,8.7,20.524,0.364","2009/7/1,27094.29,28526.33,33.6,0.561,76,10.2,20.727,0.333","2009/7/7,29365.33,27777.36,50.8,0.339,75,9.2,20.905,0.251","2009/7/3,27730.88,29481.41,42,0.457,68,10.4,20.616,0.208","2009/7/5,28826.58,29981.23,37.2,0.885,66,8.5,20.173,0.247","2009/7/8,28860.77,27132.38,44.5,0.225,62,8.6,20.228,0.395","2009/7/15,29642.71,29691.91,42.4,0.808,58,8.9,20.77,0.34","2009/7/14,28796.37,28203.31,36.3,0.768,57,10.9,20.563,0.264","2009/7/9,29629.93,29442.99,47.8,0.73,54,8.9,20.263,0.235","2009/7/13,28321.89,29046.6,30.5,0.367,49,8.5,20.866,0.288","2009/7/6,28014.62,28859.4,40.1,0.832,37,8.9,20.436,0.242");

var monthActRate = new Array("2009/5,28053.15,29088.36,64.7,0.382,64,11.1,40.307,0.206","2009/3,29545.99,29347.17,47.1,0.374,42,10.2,31.893,0.222","2009/11,29808.48,29495.32,58.6,0.368,55,14.3,36.41,0.223","2009/7,29242.37,28686.63,58.8,0.367,79,10.8,37.333,0.282","2009/9,29213.02,28350.74,67.8,0.324,77,15.1,37.779,0.277","2009/8,28874.12,28493.34,44.3,0.312,45,14.1,33.952,0.225","2009/10,28194.21,29035.71,80.9,0.292,77,9.9,31.165,0.234","2009/4,29033.55,29725.23,51.2,0.286,52,14.7,34.253,0.264","2009/6,29592.56,29415.45,54.6,0.276,48,14.3,32.825,0.283","2009/2,28063.72,28430.28,79.9,0.275,72,11.7,32.201,0.291","2009/1,28114.6,29723.34,70.5,0.266,77,15.4,36.464,0.245","2009/12,28378.67,28904.92,66.5,0.205,61,9.5,38.298,0.215");
var monthTheoryRate =new Array("2009/2,28063.72,28430.28,79.9,0.275,72,11.7,32.201,0.291","2009/6,29592.56,29415.45,54.6,0.276,48,14.3,32.825,0.283","2009/7,29242.37,28686.63,58.8,0.367,79,10.8,37.333,0.282","2009/9,29213.02,28350.74,67.8,0.324,77,15.1,37.779,0.277","2009/4,29033.55,29725.23,51.2,0.286,52,14.7,34.253,0.264","2009/1,28114.6,29723.34,70.5,0.266,77,15.4,36.464,0.245","2009/10,28194.21,29035.71,80.9,0.292,77,9.9,31.165,0.234","2009/8,28874.12,28493.34,44.3,0.312,45,14.1,33.952,0.225","2009/11,29808.48,29495.32,58.6,0.368,55,14.3,36.41,0.223","2009/3,29545.99,29347.17,47.1,0.374,42,10.2,31.893,0.222","2009/12,28378.67,28904.92,66.5,0.205,61,9.5,38.298,0.215","2009/5,28053.15,29088.36,64.7,0.382,64,11.1,40.307,0.206");
var monthActLose = new Array("2009/10,28194.21,29035.71,80.9,0.292,77,9.9,31.165,0.234","2009/2,28063.72,28430.28,79.9,0.275,72,11.7,32.201,0.291","2009/1,28114.6,29723.34,70.5,0.266,77,15.4,36.464,0.245","2009/9,29213.02,28350.74,67.8,0.324,77,15.1,37.779,0.277","2009/12,28378.67,28904.92,66.5,0.205,61,9.5,38.298,0.215","2009/5,28053.15,29088.36,64.7,0.382,64,11.1,40.307,0.206","2009/7,29242.37,28686.63,58.8,0.367,79,10.8,37.333,0.282","2009/11,29808.48,29495.32,58.6,0.368,55,14.3,36.41,0.223","2009/6,29592.56,29415.45,54.6,0.276,48,14.3,32.825,0.283","2009/4,29033.55,29725.23,51.2,0.286,52,14.7,34.253,0.264","2009/3,29545.99,29347.17,47.1,0.374,42,10.2,31.893,0.222","2009/8,28874.12,28493.34,44.3,0.312,45,14.1,33.952,0.225");
var monthTheoryLose =new Array("2009/7,29242.37,28686.63,58.8,0.367,79,10.8,37.333,0.282","2009/10,28194.21,29035.71,80.9,0.292,77,9.9,31.165,0.234","2009/1,28114.6,29723.34,70.5,0.266,77,15.4,36.464,0.245","2009/9,29213.02,28350.74,67.8,0.324,77,15.1,37.779,0.277","2009/2,28063.72,28430.28,79.9,0.275,72,11.7,32.201,0.291","2009/5,28053.15,29088.36,64.7,0.382,64,11.1,40.307,0.206","2009/12,28378.67,28904.92,66.5,0.205,61,9.5,38.298,0.215","2009/11,29808.48,29495.32,58.6,0.368,55,14.3,36.41,0.223","2009/4,29033.55,29725.23,51.2,0.286,52,14.7,34.253,0.264","2009/6,29592.56,29415.45,54.6,0.276,48,14.3,32.825,0.283","2009/8,28874.12,28493.34,44.3,0.312,45,14.1,33.952,0.225","2009/3,29545.99,29347.17,47.1,0.374,42,10.2,31.893,0.222");
	///清空textbox
	function clsTextBox()
	{
		if(getquerystring('view')!="new") {
			return;
		}
		var texts =document.getElementsByTagName("input");
		for(var i =0;i<texts.length;i++) {
			if(texts[i].type=="text") {
				texts[i].value="";
			}
		}
	}

//获得排序的信息
function GetProvince()
{
	if(document.all("Province")[0].checked) {
		return document.all("Province")[0].value;
	}
	if(document.all("Province")[1].checked) {
		return document.all("Province")[1].value;
	}
	if(document.all("Province")[2].checked) {
		return document.all("Province")[2].value;
	}
	if(document.all("Province")[3].checked) {
		return document.all("Province")[3].value;
	}
	if(document.all("Province")[4].checked) {
		return document.all("Province")[4].value;
	}
	if(document.all("Province")[5].checked) {
		return document.all("Province")[5].value;
	}
}
function SetProvince(type)
{
	if (type.toString()==document.all("Province")[0].value.toString()) {
		document.all("Province")[0].checked=true;
	}
	if (type.toString()==document.all("Province")[1].value.toString()) {
		document.all("Province")[1].checked=true;
	}
	if (type.toString()==document.all("Province")[2].value.toString()) {
		document.all("Province")[2].checked=true;
	}
	if (type.toString()==document.all("Province")[3].value.toString()) {
		document.all("Province")[3].checked=true;
	}
	if (type.toString()==document.all("Province")[4].value.toString()) {
		document.all("Province")[4].checked=true;
	}
	if (type.toString()==document.all("Province")[5].value.toString()) {
		document.all("Province")[5].checked=true;
	}
}
//初始化月和季度设置情况
function GetMonth_Theory()
{
	if(document.all("Month_Theory")[0].checked) {
		return document.all("Month_Theory")[0].value;
	}
	if(document.all("Month_Theory")[1].checked) {
		return document.all("Month_Theory")[1].value;
	}
}
//得到月和季度设置情况
function SetMonth_Theory(Month_Theory)
{
	if (Month_Theory.toString()==document.all("Month_Theory")[0].value.toString()) {
		document.all("Month_Theory")[0].checked=true;
		document.getElementById("Theory").disabled="disabled";
	}
	if (Month_Theory.toString()==document.all("Month_Theory")[1].value.toString()) {
		document.all("Month_Theory")[1].checked=true;
		document.getElementById("dtpfrm").disabled="disabled";
		document.getElementById("dtpto").disabled="disabled";
	}
}
//月和季度切换的时候置灰不可用
function Change1()
{
	if(document.all("Month_Theory")[0].checked) 
	{
		document.getElementById("Theory").disabled="disabled";
		document.getElementById("dtpfrm").disabled="";
		document.getElementById("dtpto").disabled="";
	}
	else
	{
		document.getElementById("Theory").disabled="";
		document.getElementById("dtpfrm").disabled="disabled";
		document.getElementById("dtpto").disabled="disabled";
	}
}
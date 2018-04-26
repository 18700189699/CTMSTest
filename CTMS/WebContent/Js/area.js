
function area(dateType, typeValue){
	this.dateType = dateType;
	this.typeValue = typeValue;
}

var dateType;
var typeValue = new Array();
var areaArray = new Array();


//loop_1--------

	dateType = new Option("年", "10001");
	typeValue = new Array();
		//loop_1_1--------
		
			typeValue[typeValue.length] = new Option("", "31");
		
		//loop_1_1 end========
	areaArray[areaArray.length] = new area(dateType, typeValue);

	dateType = new Option("季", "10005");
	typeValue = new Array();
		//loop_1_1--------
		
			typeValue[typeValue.length] = new Option("第1季", "2008");
		
			typeValue[typeValue.length] = new Option("第2季", "2010");
		
			typeValue[typeValue.length] = new Option("第3季", "2011");
		
			typeValue[typeValue.length] = new Option("第4季", "2012");
		
		//loop_1_1 end========
	areaArray[areaArray.length] = new area(dateType, typeValue);

	dateType = new Option("月", "10006");
	typeValue = new Array();
		//loop_1_1--------
		
			typeValue[typeValue.length] = new Option("1月", "10240");
		
			typeValue[typeValue.length] = new Option("2月", "10241");
		
			typeValue[typeValue.length] = new Option("3月", "10242");
		
			typeValue[typeValue.length] = new Option("4月", "10243");
		
			typeValue[typeValue.length] = new Option("5月", "10244");
		
			typeValue[typeValue.length] = new Option("6月", "10245");
		
			typeValue[typeValue.length] = new Option("7月", "10246");
		
			typeValue[typeValue.length] = new Option("8月", "10247");
		
			typeValue[typeValue.length] = new Option("9月", "10248");
		
			typeValue[typeValue.length] = new Option("10月", "10249");
		
			typeValue[typeValue.length] = new Option("11月", "10250");
		
			typeValue[typeValue.length] = new Option("12月", "10251");
		
		//loop_1_1 end========
	areaArray[areaArray.length] = new area(dateType, typeValue);

	dateType = new Option("周", "10007");
	typeValue = new Array();
		//loop_1_1--------
		
			typeValue[typeValue.length] = new Option("1周", "10430");
		
			typeValue[typeValue.length] = new Option("2周", "10431");
		
			typeValue[typeValue.length] = new Option("3周", "10432");
		
			typeValue[typeValue.length] = new Option("4周", "10433");
		
			typeValue[typeValue.length] = new Option("5周", "10434");
		
			typeValue[typeValue.length] = new Option("6周", "10435");
		
			typeValue[typeValue.length] = new Option("7周", "10436");
		
			typeValue[typeValue.length] = new Option("8周", "10437");
		
			typeValue[typeValue.length] = new Option("9周", "10438");
		
			typeValue[typeValue.length] = new Option("10周", "10439");
		
			typeValue[typeValue.length] = new Option("11周", "10440");
		
			typeValue[typeValue.length] = new Option("12周", "10441");
		
			typeValue[typeValue.length] = new Option("13周", "10442");
		
			typeValue[typeValue.length] = new Option("14周", "10650");
		
			typeValue[typeValue.length] = new Option("15周", "10651");
		
			typeValue[typeValue.length] = new Option("16周", "10652");
		
			typeValue[typeValue.length] = new Option("17周", "10653");
		
			typeValue[typeValue.length] = new Option("18周", "10654");
		
			typeValue[typeValue.length] = new Option("19周", "10655");
		
			typeValue[typeValue.length] = new Option("20周", "10656");
		
			typeValue[typeValue.length] = new Option("21周", "10657");
		
			typeValue[typeValue.length] = new Option("22周", "10658");

			typeValue[typeValue.length] = new Option("23周", "10171");
		
			typeValue[typeValue.length] = new Option("24周", "10172");
		
			typeValue[typeValue.length] = new Option("25周", "10173");
		
			typeValue[typeValue.length] = new Option("26周", "10174");
		
			typeValue[typeValue.length] = new Option("27周", "10175");
		
			typeValue[typeValue.length] = new Option("28周", "10176");
		
			typeValue[typeValue.length] = new Option("29周", "10177");
		
			typeValue[typeValue.length] = new Option("30周", "10178");
		
			typeValue[typeValue.length] = new Option("31周", "10179");
		
			typeValue[typeValue.length] = new Option("32周", "10180");
		
			typeValue[typeValue.length] = new Option("33周", "10181");
		
			typeValue[typeValue.length] = new Option("34周", "10182");
		
			typeValue[typeValue.length] = new Option("35周", "10183");
		
			typeValue[typeValue.length] = new Option("36周", "10184");
		
			typeValue[typeValue.length] = new Option("37周", "10185");
		
			typeValue[typeValue.length] = new Option("38周", "10186");
		
			typeValue[typeValue.length] = new Option("39周", "10187");
		
			typeValue[typeValue.length] = new Option("40周", "10188");
		
			typeValue[typeValue.length] = new Option("41周", "10189");
		
			typeValue[typeValue.length] = new Option("42周", "10190");
		
			typeValue[typeValue.length] = new Option("43周", "10618");
		
			typeValue[typeValue.length] = new Option("44周", "10619");
		
			typeValue[typeValue.length] = new Option("45周", "10620");
		
			typeValue[typeValue.length] = new Option("46周", "10621");
		
			typeValue[typeValue.length] = new Option("47周", "10622");
		
			typeValue[typeValue.length] = new Option("48周", "10623");
		
			typeValue[typeValue.length] = new Option("49周", "10624");
		
			typeValue[typeValue.length] = new Option("50周", "10625");
		
			typeValue[typeValue.length] = new Option("51周", "10626");
		
			typeValue[typeValue.length] = new Option("52周", "10627");

			
		//loop_1_1 end========
	areaArray[areaArray.length] = new area(dateType, typeValue);



function getTypeValue(dateValue){
	var types = new Array();
	for(var i = 0; i < areaArray.length; i++){
		if(areaArray[i].dateType.value == dateValue){
			types = areaArray[i].typeValue;
			break;
		}
	}
	return types;
}


function getdateText(dateValue){
	var pText = "";
	
	for(var i = 0; i < areaArray.length; i++){
		if(areaArray[i].dateType.value == dateValue){
			pText = areaArray[i].dateType.text;
			break;
		}
	}
	
	return pText;
}	


function gettypeText(typeValue){
	var cText = "";
	
	for(var i = 0; i < areaArray.length; i++){
		var types = areaArray[i].typeValue;
		for(var k = 0; k < types.length; k++){
			if(types[k].value == typeValue){
				cText = types[k].text;
				break;
			}
		}
	}
	
	return cText;
}


function getdateOptionOfType(typeValue){
	var pOption = new Option("", "");
	
	for(var i = 0; i < areaArray.length; i++){
		var provinceOpt = areaArray[i].dateType;
		var types = areaArray[i].dateType;
		for(var k = 0; k < types.length; k++){
			if(types[k].value == typeValue){
				pOption = provinceOpt;
				break;
			}
		}
	}
	
	return pOption;
}


function getdateTextOfType(typeValue){
	return getdateOptionOfType(typeValue).text;
}


function getDateValOfType(typeValue){
	return getdateOptionOfType(typeValue).value;
}


function genDateSelect(tag, selected, keep){
	var selectTag = tag;
	selectTag.options.length = 1*keep;
	
	for(var i = 0; i < areaArray.length; i++){
		selectTag.options.add(areaArray[i].dateType);  
	}
	
	if(selected != ""){ 
		selectTag.value = selected;
		if(selectTag.selectedIndex < 0 && selectTag.length > 0) selectTag.selectedIndex = 0;
		if(selectTag.onchange != null) selectTag.onchange();
	}
}


function genTypeSelect(Value, tag, selected, keep){
	
	var selectTag = tag;
	selectTag.options.length=1*keep;
	
	var types = getTypeValue(Value);
	if(types == null || types.length == 0){
		selectTag.options.add(new Option("",""));  
	}else{
		for(var i = 0; i < types.length; i++){
			selectTag.options.add(types[i]);  
		}
	}
	
	if(selected != ""){ 
		selectTag.value = selected;
		if(selectTag.selectedIndex < 0 && selectTag.length > 0) selectTag.selectedIndex = 0;
		if(selectTag.onchange != null) selectTag.onchange();
	}
}



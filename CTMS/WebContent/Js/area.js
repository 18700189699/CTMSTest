
function area(dateType, typeValue){
	this.dateType = dateType;
	this.typeValue = typeValue;
}

var dateType;
var typeValue = new Array();
var areaArray = new Array();


//loop_1--------

	dateType = new Option("��", "10001");
	typeValue = new Array();
		//loop_1_1--------
		
			typeValue[typeValue.length] = new Option("", "31");
		
		//loop_1_1 end========
	areaArray[areaArray.length] = new area(dateType, typeValue);

	dateType = new Option("��", "10005");
	typeValue = new Array();
		//loop_1_1--------
		
			typeValue[typeValue.length] = new Option("��1��", "2008");
		
			typeValue[typeValue.length] = new Option("��2��", "2010");
		
			typeValue[typeValue.length] = new Option("��3��", "2011");
		
			typeValue[typeValue.length] = new Option("��4��", "2012");
		
		//loop_1_1 end========
	areaArray[areaArray.length] = new area(dateType, typeValue);

	dateType = new Option("��", "10006");
	typeValue = new Array();
		//loop_1_1--------
		
			typeValue[typeValue.length] = new Option("1��", "10240");
		
			typeValue[typeValue.length] = new Option("2��", "10241");
		
			typeValue[typeValue.length] = new Option("3��", "10242");
		
			typeValue[typeValue.length] = new Option("4��", "10243");
		
			typeValue[typeValue.length] = new Option("5��", "10244");
		
			typeValue[typeValue.length] = new Option("6��", "10245");
		
			typeValue[typeValue.length] = new Option("7��", "10246");
		
			typeValue[typeValue.length] = new Option("8��", "10247");
		
			typeValue[typeValue.length] = new Option("9��", "10248");
		
			typeValue[typeValue.length] = new Option("10��", "10249");
		
			typeValue[typeValue.length] = new Option("11��", "10250");
		
			typeValue[typeValue.length] = new Option("12��", "10251");
		
		//loop_1_1 end========
	areaArray[areaArray.length] = new area(dateType, typeValue);

	dateType = new Option("��", "10007");
	typeValue = new Array();
		//loop_1_1--------
		
			typeValue[typeValue.length] = new Option("1��", "10430");
		
			typeValue[typeValue.length] = new Option("2��", "10431");
		
			typeValue[typeValue.length] = new Option("3��", "10432");
		
			typeValue[typeValue.length] = new Option("4��", "10433");
		
			typeValue[typeValue.length] = new Option("5��", "10434");
		
			typeValue[typeValue.length] = new Option("6��", "10435");
		
			typeValue[typeValue.length] = new Option("7��", "10436");
		
			typeValue[typeValue.length] = new Option("8��", "10437");
		
			typeValue[typeValue.length] = new Option("9��", "10438");
		
			typeValue[typeValue.length] = new Option("10��", "10439");
		
			typeValue[typeValue.length] = new Option("11��", "10440");
		
			typeValue[typeValue.length] = new Option("12��", "10441");
		
			typeValue[typeValue.length] = new Option("13��", "10442");
		
			typeValue[typeValue.length] = new Option("14��", "10650");
		
			typeValue[typeValue.length] = new Option("15��", "10651");
		
			typeValue[typeValue.length] = new Option("16��", "10652");
		
			typeValue[typeValue.length] = new Option("17��", "10653");
		
			typeValue[typeValue.length] = new Option("18��", "10654");
		
			typeValue[typeValue.length] = new Option("19��", "10655");
		
			typeValue[typeValue.length] = new Option("20��", "10656");
		
			typeValue[typeValue.length] = new Option("21��", "10657");
		
			typeValue[typeValue.length] = new Option("22��", "10658");

			typeValue[typeValue.length] = new Option("23��", "10171");
		
			typeValue[typeValue.length] = new Option("24��", "10172");
		
			typeValue[typeValue.length] = new Option("25��", "10173");
		
			typeValue[typeValue.length] = new Option("26��", "10174");
		
			typeValue[typeValue.length] = new Option("27��", "10175");
		
			typeValue[typeValue.length] = new Option("28��", "10176");
		
			typeValue[typeValue.length] = new Option("29��", "10177");
		
			typeValue[typeValue.length] = new Option("30��", "10178");
		
			typeValue[typeValue.length] = new Option("31��", "10179");
		
			typeValue[typeValue.length] = new Option("32��", "10180");
		
			typeValue[typeValue.length] = new Option("33��", "10181");
		
			typeValue[typeValue.length] = new Option("34��", "10182");
		
			typeValue[typeValue.length] = new Option("35��", "10183");
		
			typeValue[typeValue.length] = new Option("36��", "10184");
		
			typeValue[typeValue.length] = new Option("37��", "10185");
		
			typeValue[typeValue.length] = new Option("38��", "10186");
		
			typeValue[typeValue.length] = new Option("39��", "10187");
		
			typeValue[typeValue.length] = new Option("40��", "10188");
		
			typeValue[typeValue.length] = new Option("41��", "10189");
		
			typeValue[typeValue.length] = new Option("42��", "10190");
		
			typeValue[typeValue.length] = new Option("43��", "10618");
		
			typeValue[typeValue.length] = new Option("44��", "10619");
		
			typeValue[typeValue.length] = new Option("45��", "10620");
		
			typeValue[typeValue.length] = new Option("46��", "10621");
		
			typeValue[typeValue.length] = new Option("47��", "10622");
		
			typeValue[typeValue.length] = new Option("48��", "10623");
		
			typeValue[typeValue.length] = new Option("49��", "10624");
		
			typeValue[typeValue.length] = new Option("50��", "10625");
		
			typeValue[typeValue.length] = new Option("51��", "10626");
		
			typeValue[typeValue.length] = new Option("52��", "10627");

			
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



_sitePref = "/porfolio/index.php/";

$(".calcGroup").bind("click",function(){clickCalcGroup(this)});
$("#calc_saveB").bind("click",function(){saveCalc()});

function clickCalcGroup(curEl){
    var calcTemplates = $.ajax({url: _sitePref+"ajax/GetCalcTemplates",async:false,dataType:"json",data:{"idGroupCalc":curEl.attributes.idGroupCalc.nodeValue}}).responseJSON;
    if(calcTemplates == null)
        return

    var htmlTemplates = "";

    for(i=0;i<calcTemplates.length;i++){
        htmlTemplates+='<div id="calc_template_id_'+calcTemplates[i].id+'" class="clac_header2 calc_template" idTemplateCalc="'+calcTemplates[i].id+'">'+calcTemplates[i].name+'</div>';
    }

    $("#calc_templates").html(htmlTemplates);

    $(".calc_choosenGroup").removeClass("calc_choosenGroup");
    $("#"+curEl.id).addClass("calc_choosenGroup");

    $(".calc_template").bind("click",function(){clickCalcTemplate(this)});
    $("#calc_elements_checkbox").html("");
}

function clickCalcTemplate(curEl){

    var calcElements = $.ajax({url: _sitePref+"ajax/GetCalcElements",async:false,dataType:"json",data:{"idTemplateCalc":$(".calc_choosenGroup")[0].attributes.idGroupCalc.nodeValue}}).responseJSON;
    if(calcElements == null)
        return

    var htmlElements = "";

    for(i=0;i<calcElements.length;i++){
        htmlElements+=' <input name="'+calcElements[i].name+'" class="calc_checkbox" type="checkbox" idElementCalc="'+calcElements[i].id+'">'+calcElements[i].sinonym+'</input>';
    }

    $("#calc_elements_checkbox").html(htmlElements);

    $(".calc_choosenTemplate").removeClass("calc_choosenTemplate");
    $("#"+curEl.id).addClass("calc_choosenTemplate");
}

function saveCalc(){
    saveArray = [];
    saveGET = "";
    allCheckBoxes = $(".calc_checkbox");
    for(i=0;i<allCheckBoxes.length;i++){
        if(!allCheckBoxes[i].checked)
            continue
        //(allCheckBoxes[i].name)
        var key = allCheckBoxes[i].name;
        var value = allCheckBoxes[i].checked;
        saveGET += key+"="+value+"&";
        //saveArray[key]= value;
    }

    $.ajax({url: _sitePref+"ajax/saveCalc?"+saveGET});
}

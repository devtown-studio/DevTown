$("#button_closeInfo").bind("click ",openCloseInfo);
/*$(".list_navTop li").bind("mouseleave ",notdoit);*/
/*$(".circle").bind("mouseover ",{changeSize: 70},changeCircle);*/
$(".circleAlpha").bind("click", changeCircleMax);
/*$(".circleAlpha").bind("mouseleave",changeCircleMin);*/

/*function handler(event) {
    alert(event.data.foo);
}*/

function changeCircleMax(){
    var thisCircle = $(this);
    /*thisCircle.stop(true);

    thisCircle.animate({
        "height": "80px",
        "width": "80px",
        "border-radius": "80px",
        "margin-top":"-10px",
        "margin-left":"-10px"
    },140);*/

    var c_info =  $("#c_info");
    c_info.stop(true);
    var id = thisCircle[0].id;
    if(id == "circleGreen")
        c_info.animate({"background-color":"green"});
    else if(id == "circleRed")
        c_info.animate({"background-color":"red"});
    else if(id == "circleYellow")
        c_info.animate({"background-color":"yellow"});
    else if(id == "circleWhite")
        c_info.animate({"background-color":"white"});
}

function changeCircleMin(){
    /*var thisCircle = $(this);
    thisCircle.stop(true);
    thisCircle.animate({
        "height": "60px",
        "width": "60px",
        "border-radius": "60px",
        "margin-top":"0",
        "margin-left":"0"
    },140);*/
}
function openCloseInfo(){
    var c_info = $("#c_info");
    if(c_info.is(":hidden"))
        c_info.slideDown(200);
    else
        c_info.slideUp(200);
}









function doit(){
//    alert($(this).html());
    $(this).animate({"box-shadow":"inset 0 0 20px #11385f","background-color":"#1e68ac"}, 300);
}

function notdoit(){
//    alert($(this).html());
    $(this).css({"box-shadow":"","background-color":""}, 100);
}
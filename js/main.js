//distanceTop = $("#i_buttonMenuRect").offset().top - $(window).height();
distanceMenuButton = $("#i_buttonMenuRect").offset().top;
mainMenuToUp = true;
mainMenuOpen = false;

$(window).on("scroll",function(){checkMenuButton()});
$("#i_buttonMenuRect").bind("click",function(){openMainMenu()});


function getOffsetElem(el){
    if(el == null || el == undefined)
        return null;
    return el.offset();
}

function checkMenuButton(){
    if($(window).scrollTop()>=distanceMenuButton){
        var pos = "fixed";
        var top = "35px";
        mainMenuToUp = false;
    }else{
        var pos = "relative";
        var top = "0";
        mainMenuToUp = true;
    }
    $("#i_buttonMenuRect").css("position",pos);
    $("#i_buttonMenuRect").css("top",top);
}

function openMainMenu(){
    var mainMenu = $("#i_mainMenu");
    mainMenu.stop(true);

    if(mainMenuOpen){
        var marginTop = "-5px";
        var height = "5px";
        var width = "10px";
        var marginLeft = "125px";
    }else{
        var marginTop = "-1050px";
        var height = "1050px";
        var width = "280px";
        var marginLeft = "0";
    }

    if(!mainMenuOpen){
        mainMenu.animate({
            "width":width,
            "margin-left":marginLeft
        },300);
    }
    mainMenu.animate({
        "margin-top":marginTop,
        "height":height
    },300);

    if(mainMenuOpen){
        mainMenu.animate({
            "width":width,
            "margin-left":marginLeft
        },300);
    }
    mainMenuOpen = !mainMenuOpen;
}


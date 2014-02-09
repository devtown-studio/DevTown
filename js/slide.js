slide_start_num=1;    //Номер первого слайда при загрузке страницы
slide_auto_few=1;    //Автопрокрутка включена(1) или выключена(0) по умолчанию
slide_slidespeed=400;    //Время перехода от слайда к слайду(мсек)
slide_intervalspeed=3000;    //интервал автопрокрутки(мсек)

slide_num = 3;    //Количество слайдов будет тут. Но его мы запишем, когда полностью загрузим документ
slide_i = slide_start_num;    //В будущем будем хранить в i показываемый слайд
slide_intervalID = null;    //Интервал для автопрокрутки
slide_lock = 0;    //Не даем прокрутить сразу на несколько слайдов, чтобы не сбивалось

slide_width = 245;

function slide_few() {    //Прокрутка вперед
    if(slide_lock == 0) {    //Не даем пройти нажатие во время анимации
        if(slide_i>=slide_num) {    //Проверим не уходит ли в пустоту слайдшоу, если нет, то просто сдвинем на длину слайда(то есть 371px), если же да, то тогда вернемся к первому слайду
            $('#c_servicesAnim').animate({'margin-left':'0'},slide_slidespeed,function(){slide_lock=0});
            slide_i = 1;
        } else {
            $('#c_servicesAnim').animate({'margin-left': parseInt($('#c_servicesAnim').css('margin-left')) - slide_width + 'px'},slide_slidespeed,function(){slide_lock=0});
            slide_i++;
        }
    }
    slide_lock = 1;
}
function slide_rew() {
    if(slide_lock == 0) {
        if(slide_i<=1) {
            $('#c_servicesAnim').animate({'margin-left': parseInt($('#c_servicesAnim').css('margin-left')) - slide_width*(slide_num-1) + 'px'},slide_slidespeed,function(){slide_lock=0});
            slide_i = slide_num;
        } else {
            $('#c_servicesAnim').animate({'margin-left': parseInt($('#c_servicesAnim').css('margin-left')) + slide_width + 'px'},slide_slidespeed,function(){slide_lock=0});
            slide_i--;
        }
    }
    slide_lock = 1;
}
function slide_autofew() {
    if(slide_auto_few == 1) {
        slide_few();
    }
}
function slide_stop_auto_few() {
    if(slide_auto_few == 1) {
        slide_auto_few = 0;
        clearInterval(slide_intervalID);
    }
}

slide_intervalID = setInterval(slide_autofew, slide_intervalspeed);

$('.button_servicesAnimPrev').click(function() {
    slide_rew();
    slide_stop_auto_few();
});
$('.button_servicesAnimNext').click(function() {
    slide_few();
    slide_stop_auto_few();
});
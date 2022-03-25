$(document).ready(function() {
    $('.header-wrapper_disable').hide();
//смена кнопки
$('.header-wrapper').on('click', function(){
    $('.header-wrapper__content-button').css('background-image', 'url(' + "./images/Arrow-Right.svg" + ')');
})
$('.header-wrapper_disable').on('click', function(){
    $('.header-wrapper__content-button').css('background-image', 'url(' + "./images/Arrow-Down.svg" + ')');
})


    //Открытие
    $('#header-wrapper-first').on('click', function() {
        $('#wrapper-first').slideDown('slow');

        $('.header__content').css('background-image', 'url(' + "./images/Wrapper-first.jpg" + ')');

        $('.header-wrapper__title').html('Услуги по ремонту');
        $('.header-wrapper__text').html('С другой стороны реализация намеченных плановых заданий требуют от нас анализа.');
        $('.navbar').css({"background-color":"inherit"});
        $('.header-wrapper_disable').css({"background-color":"#EB5757"});
        $('.navbar a').css({"color":"white"});
    })
    //Закрытие
    $('#wrapper-first').on('click', function() {
        $('.header-wrapper').on();
        $('#wrapper-first').slideUp();
        setTimeout(function() {
            $('.navbar').css({"background-color":"white"});
            $('.navbar a').css({"color":"black"});
            $('.header__content').css('background-image', 'url(' + "./images/header-img.jpg" + ')');
        }, 400);
        return false
    })
//open
    $('#header-wrapper-second').on('click', function() {
        $('#wrapper-second').slideDown('slow');

        $('.header__content').css('background-image', 'url(' + "./images/Wrapper-second.jpg" + ')');

        $('.header-wrapper__title').html('Виды работ');
        $('.header-wrapper__text').html('С другой стороны реализация намеченных плановых заданий требуют от нас анализа.');
        $('.navbar').css({"background-color":"inherit"});
        $('.header-wrapper_disable').css({"background-color":"#219653"});
        $('.navbar a').css({"color":"white"});
    })
//close
$('#wrapper-second').on('click', function() {
    $('#wrapper-second').slideUp();
    setTimeout(function() {
        $('.navbar').css({"background-color":"white"});
        $('.navbar a').css({"color":"black"});
        $('.header__content').css('background-image', 'url(' + "./images/header-img.jpg" + ')');
    }, 400);
    return false
})


//open
$('#header-wrapper-third').on('click', function() {
    $('#wrapper-third').slideDown('slow');

    $('.header__content').css('background-image', 'url(' + "./images/Wrapper-third.jpg" + ')');

    $('.header-wrapper__title').html('Виды работ');
    $('.header-wrapper__text').html('С другой стороны реализация намеченных плановых заданий требуют от нас анализа.');
    $('.navbar').css({"background-color":"inherit"});
    $('.header-wrapper_disable').css({"background-color":"#2F80ED"});
    $('.navbar a').css({"color":"white"});
})

//close
$('#wrapper-third').on('click', function() {
    $('#wrapper-third').slideUp();
    setTimeout(function() {
        $('.navbar').css({"background-color":"white"});
        $('.navbar a').css({"color":"black"});
        $('.header__content').css('background-image', 'url(' + "./images/header-img.jpg" + ')');
    }, 400);
    return false
})
//open
$('#header-wrapper-fourth').on('click', function() {
    $('#wrapper-fourth').slideDown('slow');

    $('.header__content').css('background-image', 'url(' + "./images/Wrapper-fourth.jpg" + ')');

    $('.header-wrapper__title').html('Виды работ');
    $('.header-wrapper__text').html('С другой стороны реализация намеченных плановых заданий требуют от нас анализа.');
    $('.navbar').css({"background-color":"inherit"});
    $('.header-wrapper_disable').css({"background-color":"#9B51E0"});
    $('.navbar a').css({"color":"white"});
})

//close
$('#wrapper-fourth').on('click', function() {
    $('#wrapper-fourth').slideUp();
    setTimeout(function() {
        $('.navbar').css({"background-color":"white"});
        $('.navbar a').css({"color":"black"});
        $('.header__content').css('background-image', 'url(' + "./images/header-img.jpg" + ')');
    }, 400);
    return false
})

})

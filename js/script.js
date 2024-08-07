$(document).ready(function () {

    /* 슬라이드 */
    $('#main').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    /* 배너 버튼 */
    $('.banner button').mouseover(function(){
        $(this).css({
            'color' : '#f2c44b',
            'background' : '#ffffff'
        })
    })
    $('.banner button').mouseout(function(){
        $(this).css({
            'color' : '#ffffff',
            'background' : 'transparent'
        })
    })

    /* 녹턴 버튼 */
    $('#section3 button').mouseover(function(){
        $(this).css({
            'color' : '#ffffff',
            'background' : '#f2c44b',
            'borderColor' : '#f2c44b'
        })
    })
    $('#section3 button').mouseout(function(){
        $(this).css({
            'color' : '#111111',
            'background' : 'transparent',
            'borderColor' : '#111111'
        })
    })

    /* 코코란 버튼 */
    $('#section4 button').mouseover(function(){
        $(this).css({
            'color' : '#f2c44b',
            'background' : '#ffffff',
            'borderColor' : '#ffffff'
        })
    })
    $('#section4 button').mouseout(function(){
        $(this).css({
            'color' : '#111111',
            'background' : 'transparent',
            'borderColor' : '#111111'
        })
    })

    /* 콜라보 버튼 */
    $('#section5 button').mouseover(function(){
        $(this).css({
            'background' : '#f2c44b',
        })
        $('#section5 button a').css({
            'color' : '#ffffff',
        })
    })
    $('#section5 button').mouseout(function(){
        $(this).css({
            'background' : 'transparent',
        })
        $('#section5 button a').css({
            'color' : '#f2c44b',
        })
    })

    /* 룩북 버튼 */
    $('#section6 button').mouseover(function(){
        $(this).css({
            'background' : '#ffffff',
        })
        $('#section6 button a').css({
            'color' : '#f2c44b',
        })
    })
    $('#section6 button').mouseout(function(){
        $(this).css({
            'background' : 'transparent',
        })
        $('#section6 button a').css({
            'color' : '#ffffff',
        })
    })
    
    //////////////////////
});
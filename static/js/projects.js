//////////////////////menu change//////////////////////

$(window).scroll(function(e){
        
    var wht = $(window).height();
    console.log('윈도우 높이: '+wht);
    
    var scTop = $(this).scrollTop();
    console.log(scTop);
    
    if(scTop > wht){
        $('header').css({
            background: 'lightblue',
            borderBottom: 'none',
            transition: 'all .6s'
        });
        $('.main_menu li').css({
            color: '#fff',
            transition: 'all .3s'
        });
    }else if(scTop <= wht){
        $('header').css({
            background: '#fff',
            borderBottom: '2px solid #eee'
        });
        $('.main_menu li').css({
            color: '#333'
        });
    } //if & else if
    
}); //scroll


////////////////// main animate//////////////////////
function mainSet(){
    
    $('main div').css({
        transform: 'scale(0.1)'
    }); //main 셋팅
    
    $('.what_box').css({
        transform: 'translateX(-120%)'
    });
    
} //ready 전 셋팅 함수


mainSet();

$(window).scroll(function(){
    
    var scTop = $(this).scrollTop();
    console.log('스크롤? '+scTop);
    
    if(scTop > 0){
        $('main div').css({
        transform: 'scale(1)',
        transition: 'all 2s'
    });
    }
    if(scTop > 300){
        $('.what_box').css({
        transform: 'translateX(0%)',
        transition: 'all 2s'
    });
    }
    
}); //scroll
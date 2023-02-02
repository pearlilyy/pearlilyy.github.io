//portfolio profile js

$(function () {

    // prev, next button for project previews
    document.querySelector('.prev').onclick = function () {
        // Prev button
        goSlide(0);
    };
    document.querySelector('.next').onclick = function () {
        // Next button
        goSlide(1);
    };

    // Section1. random logo imgs pop out(scale(1.2)) every 0.8 sec
    var imgmax = $('#section1 .imgsContainer img').length;
    function ranNum() {
        return Math.floor(Math.random() * imgmax) + 1;
    }

    setInterval(function () {
        $('#section1 .imgsContainer').children().removeClass('on');
        var selectedImg = $("#section1 .imgsContainer").children().eq(ranNum());
        $(selectedImg).addClass('on');
    }, 800, 'easeInOutQuint');


}); //jQuery


var prot = 0; //광클 금지 상태값(0-허용, 1-금지)
function goSlide(bang) { //bang 방향 (0-왼쪽, 1-오른쪽)

    //alert("나는 함수!!! "+bang);

    ///광클금지구역///
    if (prot === 1) return false;
    prot = 1;

    //querySelector : getElement(s)By와 동일, 차이점은 TagNames를 제외하고 id, class에 모두 사용 가능

    //querySelectorAll : 해당 선택자에 해당하는 '모든' 요소를 가져옴

    var tg = document.querySelector('.gbox');
    var tg2 = tg.querySelectorAll('img'); //이미지 집합
    console.log('이미지 개수: ' + tg2.length);



    if (bang === 0) {
        //맨 뒤의 이미지를 맨 앞으로 이동함
        //insertBefore(넣을 대상, 넣을 대상의 이전 대상)
        //insertBefore(맨 뒤의 이미지, 맨 앞의 이미지)
        //대상을 선택할 때 item(index no.)

        tg.insertBefore(tg2.item(tg2.length - 1), tg2.item(0));
        //insertBefore(tg2.item(4), tg2.item(0))
        //맨 뒤의 이미지를 선택해서 맨 앞의 이미지 앞으로 이동
    } else if (bang === 1) {
        //맨 앞의 이미지를 맨 뒤로 이동함
        tg.appendChild(tg2.item(0));
    }

    //변경된 순서의 이미지를 다시 읽어옴!
    tg2 = tg.querySelectorAll('img');

    //이미지 클래스 다시 설정!
    for (var i = 0; i < tg2.length; i++) {
        //setAttribute: 속성 변경
        //기본형 setAttribute('name',value);

        tg2[i].setAttribute('class', 'i' + (i + 1));
    }

    //광클금지 상태값 변경(허용)
    //setTimeout(함수, 시간) - 설정한 시간 후에 함수가 한 번만 실행!
    setTimeout(function () {
        prot = 0;
    }, 400);

}  //goSlide();

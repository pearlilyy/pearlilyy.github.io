$(document).ready(function () {
    // 'ORDER' Quick Menu Hover Effect
var menu_circle = document.getElementById('quickmenu-circle');
$('.quickmenu-outer').on("mouseenter", function(){
menu_circle.setAttribute('stroke-dashoffset', 0);
}).on('mouseleave', function(){
menu_circle.setAttribute('stroke-dashoffset', 1000);
});
// 		setTimeout(function () {
// 			menu_circle.setAttribute('stroke-dashoffset', 0);
// 		}, 0);

});
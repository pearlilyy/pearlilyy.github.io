counter = 0;

function createCircle() {

    $("#section0 .imgsContainer").append("<div class='circle'></div>");

    // add "zoom" class
    setTimeout(function () {
        $(".circle:last-child").addClass("zoom");
    }, 10);

    // Remove circle
    setTimeout(function () {
        $(".circle:first-child").remove();
    }, 3000);
    counter++;
}

setInterval(function () {
    createCircle();
}, 1500);
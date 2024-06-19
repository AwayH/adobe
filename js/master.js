// let isMobile;

// if ($(window).width() <= 480) {
//     isMobile = true;
// } else {
//     isMobile = false;
// }
// console.log(isMobile)

const isMobile = $(window).width() <= 480;

function setGrid() {
    if (isMobile) {
        $('#Grid').addClass('grid-2');
        return;
    }
    $('#Grid').addClass('grid-3');
}

setGrid();


$(window).scroll(function () {
    // console.log($(window).scrollTop());
    if ($(window).scrollTop() == 0) {
        $('#Nav').removeClass('nav-active');
    } else {
        $('#Nav').addClass('nav-active');
    }
});


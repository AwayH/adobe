// let isMobile;

// if ($(window).width() <= 480) {
//     isMobile = true;
// } else {
//     isMobile = false;
// }
const isMobile = $(window).width() <= 480;
const $grid = $('#Grid');

function setGrid() {
    if (!isMobile) {
        $grid.addClass('grid-3');
        return;
    }
    $grid.addClass('grid-2');
}

function setScroll() {
    if (!isMobile) return;
    const $nav = $('#Nav');

    $(window).scroll(function () {

        if ($(this).scrollTop() === 0) {
            $nav.removeClass('nav-active');
        } else {
            $nav.addClass('nav-active');
        }
    });
}

function setFancybox() {
    const $anchors = $grid.find('a');

    $anchors.fancybox({
        protect: true,
        loop: true,
        // animationDuration: 1000,
        // transitionDuration: 3000,
        transitionEffect: 'rotate',
        keyboard: false,
        // fullScreen: {
        //     autoStart: true,
        // }
        // infobar: false,
        // toolbar: false,
        // smallBtn: false,
        // arrows: false,
        // slideShow: {
        //     autoStart: true,
        //     speed: 10000,
        // }
        // thumbs: false,
        buttons: ['share', 'download'],
        media: {
            youtube: {
                params: {
                    autoplay: false,
                }
            }
        }
    });
}

function init() {
    setGrid();
}

function setEvent() {
    setScroll();
    setFancybox();
}

init();
setEvent();








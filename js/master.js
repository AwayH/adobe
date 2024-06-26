const isMobile = $(window).width() <= 480;
const $grid = $('#Grid');
const $nav = $('#Nav');

function setGrid() {
    if (isMobile) {
        $grid.addClass('grid-2');
        return;
    }
    $grid.addClass('grid-3');
}

function setScroll() {
    $(window).scroll(function () {
        // isMobile: true
        // !isMobile: false
        if (!isMobile) return;

        if ($(this).scrollTop() == 0) {
            $nav.removeClass('nav-active');
        } else {
            $nav.addClass('nav-active');
        }
    });
}

function setInit() {
    setGrid();
}

function setEvent() {
    setScroll();
    setFancybox();
}

function setFancybox() {
    $grid.find('a').fancybox({
        protect: true,
        loop: true,
        animationDuration: 1000,
        transitionDuration: 1000,
        transitionEffect: 'tube',
        // fullScreen: {
        //     autoStart: true,
        // },
        // keyboard: false,
        infobar: false,
        // toolbar: false,
        // smallBtn: true,
        // arrows: false,
        // slideShow: {
        //     autoStart: true,
        //     speed: 1000,
        // }
        // thumbs: false,
        buttons: [
            'share',
            'slideShow',
            'fullScreen',
            'download',
            'thumbs',
            'close'
        ],
        media: {
            youtube: {
                params: {
                    autoplay: false
                }
            },

        }
    });
}

setInit();
setEvent();

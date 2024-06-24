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
}

setInit();
setEvent();

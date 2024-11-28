// console.log($(window).width());

// let isMobile;

// if($(window).width() > 480) {
//     isMobile = false;
// }else {
//     isMobile = true;
// }

// console.log('1 == 1: ', 1 == 1);
// console.log('1 === 1: ', 1 === 1);
// console.log('1 == "1": ', 1 == 1);
// console.log('1 === "1": ', 1 === '1');
// console.log('1 == true: ', 1 == true);
// console.log('1 === true: ', 1 === true);

const isMobile = $(window).width() <= 480;
const $grid = $('#Grid');

// console.log(isMobile);
// console.log($nav);

function setGrid() {
  if (isMobile) {
    $grid.addClass('grid-2');
    return;
  }
  $grid.addClass('grid-3');
}

function setScroll() {
  if (!isMobile) return;

  const $nav = $('#Nav');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $nav.addClass('nav-active');
      return;
    }
    $nav.removeClass('nav-active')
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
console.log($(window).width());

// let isMobile;

// if($(window).width() > 480) {
//     isMobile = false;
// }else {
//     isMobile = true;
// }

const isMobile = $(window).width() <= 480

console.log(isMobile);

const section = document.getElementsByClassName("skewable");
let currentPixel = window.pageYOffset;
const looper = function () {
	const newPixel = window.pageYOffset;
	const diff = newPixel - currentPixel;
	const speed = diff * 0.15;
	section[0].style.transform = "skewY(" + speed + "deg)";
	currentPixel = newPixel;
	requestAnimationFrame(looper);
}
looper();

// Mouse

$(document).mousemove(function(e) {
    $('.cursor').eq(0).css({ left: e.pageX, top: e.pageY });
});
$('a').mouseenter(function() {
	$('.cursor').css('transform','translate(-50%,-50%) scale(5)');
});
$('a').mouseleave(function() {
	$('.cursor').css('transform','translate(-50%,-50%) scale(1)');
});
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
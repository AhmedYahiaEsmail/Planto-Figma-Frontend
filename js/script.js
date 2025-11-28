// hamburger menu
const toggle = document.querySelector(".icons-hamburger");
const toggleOverlay = document.querySelector(".icons-hamburger .hamburger-abs");
const hamburgerMenu = document.querySelector(".header-menu-ul");
toggleOverlay.addEventListener("click", function () {
	toggle.classList.toggle("toggled");
	hamburgerMenu.classList.toggle("open");
});

// btn scroll up and sliders

const topbtn = document.querySelector(".top");
let reset = document.querySelector(".featured-car-part #carouselExampleIndicators");

window.onscroll = function () {
	if (this.scrollY >= 1000) {
		topbtn.classList.add("active");
		reset.id = "carouselExampleIndicators1";
	} else {
		topbtn.classList.remove("active");
		reset.id = "carouselExampleIndicators";
	}
};
topbtn.onclick = function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

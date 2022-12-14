const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
var accs = document.querySelectorAll(".accordion_item");	


hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#57585A';
	} 
	else {
		header.style.backgroundColor = '#57585a';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

accs.forEach((accordion_item) => {
    accordion_item.addEventListener("click", () => {
        accordion_item.classList.toggle("active");
    })
});

function showPassword(){
	var x = document.getElementById("std_password");
	if (x.type === "password") 
	{
		x.type = "text";
	} 
	else 
	{
		x.type = "password";
	}
}

function scrolll() {
	var left = document.querySelector(".scroll-images");
	left.scrollBy(-550, 0)
}

function scrollr() {
	var right = document.querySelector(".scroll-images");
	right.scrollBy(550, 0)
}
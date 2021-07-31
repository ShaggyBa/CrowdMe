//Fixed Header
window.onscroll = function fixedFunc() {
	let header = document.querySelector('.header')
	if (window.pageYOffset > 100)
		header.classList.add('fixed')
	else
		header.classList.remove('fixed')
}
// Slider 
let prev = document.querySelector('.home__slider-1')
let next = document.querySelector('.home__slider-2')
let slider = document.querySelector('.home__bg-img')

let numSlide = 1
let numEndSlide = 4
prev.addEventListener('click', function clicker() {
	if (numSlide != 1) {
		console.log(numSlide)
		numSlide--
		slider.classList.toggle(`img_${numSlide}`)
		slider.classList.toggle(`img_${numSlide + 1}`, false)
	}
	else if (numSlide == 1) {
		slider.classList.remove(`img_${numSlide}`)
		numSlide = numEndSlide
		slider.classList.toggle(`img_${numSlide}`)
	}
})

next.addEventListener('click', function clicker() {
	if (numSlide != numEndSlide) {
		console.log(numSlide)
		numSlide++
		slider.classList.toggle(`img_${numSlide}`)
		slider.classList.toggle(`img_${numSlide - 1}`, false)
	}
	else if (numSlide == numEndSlide) {
		slider.classList.remove(`img_${numSlide}`)
		numSlide = 1
		slider.classList.toggle(`img_${numSlide}`)
	}
})

// tabs
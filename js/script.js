// 모바일 메뉴
$(function(){
	
	var
	  winW = $(window).width(),
		winH = $(window).height(),
		nav = $('#mainnav ul a'),
		curPos = $(this).scrollTop();
	
	if (winW > 880){
		var headerH =20;
	}
	else{
		var headerH =60;
	}
	
	$(nav).on('click', function(){
		nav.removeClass('active');
  	var $el = $(this),
		id = $el.attr('href');
 		$('html, body').animate({
   		scrollTop: $(id).offset().top - headerH
 		}, 500);
		$(this).addClass('active');
		if (winW < 880){
			$('#menuWrap').next().slideToggle();
			$('#menuBtn').removeClass('close');
		}
 		return false;
	});
	
	$('.panel').hide();
	$('#menuWrap').toggle(function(){
		$(this).next().slideToggle();
		$('#menuBtn').toggleClass('close');
	},
	function(){
		$(this).next().slideToggle();
		$('#menuBtn').removeClass('close');
	});

});



// 슬라이드버튼메뉴
function toggleNav() {
	var btn = document.getElementById('btn');
	var nav = document.getElementById('btnnav');
	btn.classList.toggle('open');
	nav.classList.toggle('open');
}

function selectSlide(slideId) {
	// Add your slide selection logic here
	console.log('Selected slide:', slideId);
}



// 슬라이드 버튼
function selectSlide(slideId) {
	document.getElementById(slideId).checked = true;
	updateSlide();
}

function updateSlide() {
	const slidelist = document.querySelector('.slidelist');
	const slideIndex = Array.from(document.getElementsByName('slide')).findIndex(slide => slide.checked);
	slidelist.style.transform = 'translateX(' + (-slideWidth * slideIndex) + 'px)';
}

document.querySelectorAll('input[name="slide"]').forEach(input => {
	input.addEventListener('change', updateSlide);
});

// 초기 슬라이드 설정
updateSlide();
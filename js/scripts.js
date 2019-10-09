$(window).on('load', function() {

var owl = $('.owl-carousel_top');
owl.owlCarousel({
    items:1,
    loop:true,
	margin:0,
	nav: true,
	dots: false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});




if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	$('.owl-nav').css('visibility', 'hidden');
	$('.video_container_wrapper_button').css('visibility', 'hidden');
}


var inputs = document.querySelectorAll('.inputfile');
Array.prototype.forEach.call(inputs,function(input)
{
	var label	 = input.nextElementSibling,
	labelVal = label.innerHTML;
	input.addEventListener('change', function(e)
	{
		var fileName = '';
		if(this.files && this.files.length > 1)
			fileName = ( this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
		else
			fileName = e.target.value.split( '\\' ).pop();
		if( fileName )
			label.querySelector('span').innerHTML = fileName;
		else
			label.innerHTML = labelVal;
	});
});


$('.button_modal_form').on('click', function(e) {
	e.preventDefault();
	$('.modal_product--wrapper').addClass('modal_product--wrapper__show');
	$('.overlay').addClass('overlay_show');
})
$(window).keydown(function(e) {
	if(e.keyCode === 27) {
		$('.modal_product--wrapper').removeClass('modal_product--wrapper__show');
		$('.overlay').removeClass('overlay_show');
	}
});
$('.overlay').on('click', function() {
	$('.overlay').removeClass('overlay_show');
	$('.modal_product--wrapper').removeClass('modal_product--wrapper__show');
})


$('.modal_product--button-next').on('click', function() {
		next_steps();
});
$('.modal_product--button-prev').on('click', function() {
		prev_steps();
});
$('.korzina_button_prev').on('click', function() {
	prev_steps_last();
})

$('input[name=size_radio]').on('change', function() {
	if ($('#size_radio1').prop('checked')) {
		if($('#step_2--1').prop('checked') || $('#step_2--2').prop('checked') || $('#step_2--3').prop('checked') || $('#step_2--4').prop('checked') || $('#step_2--5').prop('checked')) {
		$('.total_item_step2').html(' - ' + $('input[name=step_2--radio]:checked').next()[0].innerText)
		}
	}
	if ($('#size_radio2').prop('checked')) {
		$('.total_item_step2').html();
		$('.total__item_step2').addClass('total__item_step_active');
	}
})
$('.modal_product--close').on('click', function() {
	$('.modal_product--wrapper').removeClass('modal_product--wrapper__show')
	$('.overlay').removeClass('overlay_show');
})



$('.modal_product--button-next').on('click', function() {
	if($('#size_radio2').prop('checked'))
	$('.total_item_step2').html(' - ' + $('.size_his_input1')[0].value + 'x' + $('.size_his_input2')[0].value + 'x' + $('.size_his_selection')[0].value);
})


var index = 0;
stepsModal = document.querySelectorAll('.wrap_step');

function next_steps() {
	stepsModal[index].classList.remove('wrap_steps_show');
	index++;
	if(index > stepsModal.length - 1) {
		$('.modal_product--form').addClass('modal_product--form_step7');
		$('.modal_product--total').addClass('modal_product--total_step7');
		$('.korzina_button_prev').addClass('korzina_button_prev_step7');
		$('.button_korzina').addClass('button_korzina_step7');
		$('.step_7_korzina').addClass('step_7_korzina_step7');
		$('.product--total__title').addClass('product--total__title_step7');
		$('.product--total__list').addClass('product--total__list_step7');
		$('.product--total__item').addClass('product--total__item_step7');
		$('.button_korzina_wrap').addClass('button_korzina_wrap_step7');
	}
	stepsModal[index].classList.add('wrap_steps_show');

}
function prev_steps() {
	stepsModal[index].classList.remove('wrap_steps_show');
	index--;
	if(index < 0 ) {
		index = 0;
	}
	stepsModal[index].classList.add('wrap_steps_show');
}
function prev_steps_last() {
	index--;
	stepsModal[index].classList.add('wrap_steps_show');
	$('.modal_product--form').removeClass('modal_product--form_step7');
		$('.modal_product--total').removeClass('modal_product--total_step7');
		$('.korzina_button_prev').removeClass('korzina_button_prev_step7');
		$('.button_korzina').removeClass('button_korzina_step7');
		$('.step_7_korzina').removeClass('step_7_korzina_step7');
		$('.product--total__title').removeClass('product--total__title_step7');
		$('.product--total__list').removeClass('product--total__list_step7');
		$('.product--total__item').removeClass('product--total__item_step7');
		$('.button_korzina_wrap').removeClass('button_korzina_wrap_step7');
}

$('.modal_product--choice').on('click', function() {
	stepsModal[index].classList.remove('wrap_steps_show');
	$('.modal_product--form').addClass('modal_product--form_step7');
	$('.modal_product--total').addClass('modal_product--total_step7');
	$('.korzina_button_prev').addClass('korzina_button_prev_step7');
	$('.button_korzina').addClass('button_korzina_step7');
	$('.step_7_korzina').addClass('step_7_korzina_step7');
	$('.product--total__title').addClass('product--total__title_step7');
	$('.product--total__list').addClass('product--total__list_step7');
	$('.product--total__item').addClass('product--total__item_step7');
	$('.button_korzina_wrap').addClass('button_korzina_wrap_step7');
	index = 6;
})



$('input[name=step_1--radio]').on('change', function() {
	$('.total_item_step1').html(' - ' + $('input[name=step_1--radio]:checked').next()[0].innerText)
	$('.total__item_step1').addClass('total__item_step_active');
});
$('input[name=step_2--radio]').on('change', function() {
	$('.total_item_step2').html(' - ' + $('input[name=step_2--radio]:checked').next()[0].innerText)
	$('.total__item_step2').addClass('total__item_step_active');
});
$('input[name=step_3--radio]').on('change', function() {
	$('.total__item_step3').html('3. ' + $('input[name=step_3--radio]:checked').next()[0].attributes[1].nodeValue);
	$('.total__item_step3').addClass('total__item_step_active');
});

$('input[name=step_4--radio]').on('change', function() {
	$('.total__item_step4').html('4. ' + $('input[name=step_4--radio]:checked').next()[0].attributes[1].nodeValue);
	$('.total__item_step4').addClass('total__item_step_active');
});
$('input[name=step_5--radio]').on('change', function() {
	$('.total__item_step5').html('5. ' + $('input[name=step_5--radio]:checked').next()[0].attributes[1].nodeValue);
	$('.total__item_step5').addClass('total__item_step_active');
});
$('input[name=step_6--radio]').on('change', function() {
	$('.total_item_step6').html(' - ' + $('input[name=step_6--radio]:checked').next()[0].attributes[1].nodeValue)
	$('.total__item_step6').addClass('total__item_step_active');
});


$('input[name=size_radio]').on('change', function() {
	if($("#size_radio1").prop('checked')) {
		$('.inputs_step2_size_standart').css({
			"display": "flex"
		});
		$('.inputs_step2_size_his').css({
			"display": "none"
		});
	}

	if($("#size_radio2").prop('checked')) {
		$('.inputs_step2_size_standart').css({
			"display": "none"
		});
		$('.inputs_step2_size_his').css({
			"display": "flex"
		});
	}
})

$('input:radio').on('change', function() {
	let totalItemSteps = document.querySelectorAll('.product--total__item');
	console.log(totalItemSteps[0])
	if(totalItemSteps[0].classList.contains('total__item_step_active') && totalItemSteps[1].classList.contains('total__item_step_active') && totalItemSteps[2].classList.contains('total__item_step_active') && totalItemSteps[3].classList.contains('total__item_step_active') && totalItemSteps[4].classList.contains('total__item_step_active') && totalItemSteps[5].classList.contains('total__item_step_active')){
		$('.button_korzina').removeAttr('disabled')
	}
})





var inputStar = document.querySelectorAll(".input_star");
var form = document.querySelector(".modal_request_form");
var starInfo = document.querySelector(".modal_star");
var inputCheckbox = document.querySelector(".input_star_checkbox");
var checkboxInfo = document.querySelector(".modal_checkbox label");
var inputPhone = document.querySelector("input[type=tel]")
var modal = document.querySelector(".modal_request");
var openModal = document.querySelector(".header_callback a");
var modalClose = document.querySelector(".modal_close");
var overlay = document.querySelector(".overlay");

document.querySelector('.modal_request_form').onsubmit = function(e) {
	var error = false;
	for(var i = 0; i < inputStar.length; i++) {
		if(inputStar[i].value == "" ) {
			inputStar[i].classList.add("input_error");
			error = true;

		}
		else {
			inputStar[i].classList.remove("input_error");
		}
		if(inputCheckbox.checked == false) {
			checkboxInfo.style.color = "red";
			error = true;
		}
	}
	if(error) {
		e.preventDefault();
	}
}

inputCheckbox.onclick = function() {
	if(inputCheckbox.checked == true) {
		checkboxInfo.style.color = "#000";
	}
	else {
		checkboxInfo.style.color = "red";
	}
}


for(var i = 0; i < inputStar.length; i++) {
	inputStar[i].onfocus = function() {
		this.classList.remove("input_error");

	}

	inputStar[i].onblur = function() {
		if(this.value == "") {
			this.classList.add("input_error");
		}
	}
}

openModal.onclick = function(event) {
	event.preventDefault();
	modal.classList.add("modal_show");
	overlay.classList.add("overlay_show");
	inputStar[0].focus();
}
overlay.onclick = function(event) {
	event.preventDefault();
	modal.classList.remove("modal_show");
	overlay.classList.remove("overlay_show");
}
modalClose.onclick = function(event) {
	event.preventDefault();
	modal.classList.remove("modal_show");
	overlay.classList.remove("overlay_show");
}

document.addEventListener('keydown',function(e){
	if(e.keyCode === 27){
		modal.classList.remove("modal_show");
		overlay.classList.remove("overlay_show");
	}
})


var company_link = $('.about_company_link');
var product_link = $('.menu_product_link');
var search_link = $('.menu_search');


company_link.on('click', function(e) {
	$('.menu_product.about_company').slideToggle(250);
	$('.menu_product:first').slideUp(250);
	$('.search_all').slideUp(250);
	$('.menu_product').addClass('menu_product--show');
});

product_link.on('click', function() {
	$('.menu_product:first').stop(true).slideToggle(250);
	$('.menu_product.about_company').slideUp(250);
	$('.search_all').slideUp(250);
});

search_link.on('click', function() {
	$('.search_all').stop(true).slideToggle(250);
	$('.menu_product.about_company').slideUp(250);
	$('.menu_product:first').slideUp(250);
});


// $('.header_menu').on('mouseout', function() {
// 	$('.menu_product.about_company').stop(true).slideUp(250);
// 	$('.menu_product:first').slideUp(250);
// 	$('.search_all').slideUp(250);
// });


function backToTop() {
	// Нашли кнопку
	let button = $('.button_up');
	// Следим за скролом window
	$(window).on('scroll', function() {
		// Если скрол виндоу больше 600, тогда появляется кнопка, если меньше - убираем
		if($(this).scrollTop() >= 600) {
			button.slideDown(400);
		} else {
			button.fadeOut(400);
		}
	})
	// По клику на кнопку отменяем стандартное событие и переносимся на верх
	button.on('click', function(e) {
		e.preventDefault();
		$('html').animate({scrollTop: 0}, 700);
	})
}
backToTop();

function menuFixed() {
	let menu = $('.header_menu');

	$(window).on('scroll', function() {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			return;
		}
		if($(this).scrollTop() >= 70) {
			menu.addClass('menu_scroll');
			$('.header_slider').css({
				"margin-top": "100px"
			})
		} else {
			menu.removeClass('menu_scroll');
			$('.header_slider').css({
				"margin-top": "0"
			})
		}
	});
}
menuFixed();


function Slider(content, items) {

	var isRun = false;

	this.content = content;
	this.items = items;
	this.i = 0;

	this.next = function() {
		if(isRun) {
			return;
		}
		isRun = true;
		this.i = this.content[0].scrollLeft + this.items[0].scrollWidth;
		if(this.i >= this.content[0].scrollWidth) {
			this.i = 0;
		}
		if(this.i >= this.content[0].scrollLeft.max) {
			this.i = 0;
		}
		var indexforF = this.content[0].scrollLeft;
		console.log(callBackScroll);
		this.content.stop(true).animate({scrollLeft: this.i}, function() {
			isRun = false;
		});

		function callBackScroll() {
			var indexLeft = indexforF;
			var indexLeftCallback;
			if(indexLeftCallback == indexLeft) {
				this.i = 0;
			} else {
				indexLeftCallback = indexLeft;
			}
		}

	}

	this.prev = function() {
		if(isRun) {
			return;
		}
		isRun = true;

		this.i = this.content[0].scrollLeft - this.items[0].scrollWidth;
		if(this.i < 0) {
			this.i = this.content[0].scrollWidth - this.items[0].scrollWidth;
		}
		this.content.stop(true).animate({scrollLeft: this.i}, function() {
			isRun = false;
		});
	}
}




var sliderTop = new Slider($('.slider_content'), $('.slider_item'), 500);

$('.slider_button.next').on('click', function() {
	sliderTop.next();
});
$('.slider_button.prev').on('click', function() {
	sliderTop.prev();
});

var sliderVideo = new Slider($('.video_container'), $('.video_item'), 650);

$('.video_container_wrapper_button').on('click', function() {
	sliderVideo.next();
});






// КАРТА

function mapsMove(region) {
	e = window.event;
	Y = e.pageY;
	X = e.pageX;
	$('.map_info').css({
		'top': Y + 10 + 'px',
		'left': X + 10 + 'px',
		'display': 'block'
	}).html(region);
}

// Удаление и добавление фона и надписи
$('.region').on('mouseover', function() {
	$(this).css({
		'fill': '#ffd923'
	});
})
$('.region').on('mouseout', function(e) {
	$('.map_info').css({
		'display': 'none'
	})
	$(this).css({
		'fill': ''
	})
});



$('.chukotskiy_AO').on('mousemove', function() {
	mapsMove('Чукотский <br>автономный округ');
});
$('.saha').on('mousemove', function() {
	mapsMove('Республика Саха <br> (Якутия)');
});
$('.magadan').on('mousemove', function() {
	mapsMove('Магаданская<br> область');
});
$('.kamchatka').on('mousemove', function() {
	mapsMove('Камчатский <br>край');
});
$('.habarovsk').on('mousemove', function() {
	mapsMove('Хабароский <br>край');
});
$('.sahalin').on('mousemove', function() {
	mapsMove('Сахалинская <br> область');
});
$('.primorsky').on('mousemove', function() {
	mapsMove('Приморский <br>край');
});
$('.evrey').on('mousemove', function() {
	mapsMove('Еврейская <br> автономная область');
});
$('.amur').on('mousemove', function() {
	mapsMove('Амурская<br> область');
});
$('.zabaykalsky').on('mousemove', function() {
	mapsMove('Забайкальский <br>край');
});
$('.buryatiya').on('mousemove', function() {
	mapsMove('Республика<br> Бурятия');
});
$('.irkutsk').on('mousemove', function() {
	mapsMove('Иркутская<br> область');
});
$('.tiva').on('mousemove', function() {
	mapsMove('Республика<br> Тыва');
});
$('.krasnoyarskiy').on('mousemove', function() {
	mapsMove('Красноярский <br>край');
});
$('.krasnoyarskiy').on('mousemove', function() {
	mapsMove('Красноярский <br>край');
});
$('.hakasiya').on('mousemove', function() {
	mapsMove('Республика <br>Хакасия');
});
$('.altay').on('mousemove', function() {
	mapsMove('Республика <br>Алтай');
});
$('.kemerovo').on('mousemove', function() {
	mapsMove('Кемеровская <br>область');
});
$('.altayskyKray').on('mousemove', function() {
	mapsMove('Алтайский <br>край');
});
$('.novosib').on('mousemove', function() {
	mapsMove('Новосибирская<br> область');
});
$('.tomskaya').on('mousemove', function() {
	mapsMove('Томская<br> область');
});
$('.hantimantiysk').on('mousemove', function() {
	mapsMove('Ханты-Мансийский <br> автономный округ');
});
$('.yamalo-nenec').on('mousemove', function() {
	mapsMove('Ямало-Ненецкий <br> автономный округ');
});
$('.omsk').on('mousemove', function() {
	mapsMove('Омская<br> область');
});
$('.tumen').on('mousemove', function() {
	mapsMove('Тюменская<br> область');
});
$('.kurgan').on('mousemove', function() {
	mapsMove('Курганская <br>область');
});
$('.sverdlovsky').on('mousemove', function() {
	mapsMove('Свердловская <br>область');
});
$('.komi').on('mousemove', function() {
	mapsMove('Республика<br> Коми');
});
$('.nenecky').on('mousemove', function() {
	mapsMove('Ненецкий <br> автономный округ');
});
$('.chelyaba').on('mousemove', function() {
	mapsMove('Челябинская <br>область');
});
$('.orenburg').on('mousemove', function() {
	mapsMove('Оренбургская<br> область');
});
$('.bashkor').on('mousemove', function() {
	mapsMove('Республика <br>Башкортостан');
});
$('.perm').on('mousemove', function() {
	mapsMove('Пермский<br> край');
});
$('.murmansk').on('mousemove', function() {
	mapsMove('Мурманская<br> область');
});
$('.kareliya').on('mousemove', function() {
	mapsMove('Республика <br>Карелия');
});
$('.arhangelsk').on('mousemove', function() {
	mapsMove('Архангельская<br> область');
});
$('.kirov').on('mousemove', function() {
	mapsMove('Кировская<br> область');
});
$('.udmurtsky').on('mousemove', function() {
	mapsMove('Удмуртская<br> Республика');
});
$('.tatarstan').on('mousemove', function() {
	mapsMove('Республика <br>Татарстан');
});
$('.piter').on('mousemove', function() {
	mapsMove('Ленинградская <br>область');
});
$('.volgogradsky').on('mousemove', function() {
	mapsMove('Вологодская <br>область');
});
$('.yaroslavsky').on('mousemove', function() {
	mapsMove('Ярославская<br> область');
});
$('.pskovsky').on('mousemove', function() {
	mapsMove('Псковская <br>область');
});
$('.novgorosky_obl').on('mousemove', function() {
	mapsMove('Новгородская <br>область');
});
$('.dagestan').on('mousemove', function() {
	mapsMove('Республика<br> Дагестан');
});
$('.krasnodar').on('mousemove', function() {
	mapsMove('Краснодарский<br> край');
});
$('.adigeya').on('mousemove', function() {
	mapsMove('Республика<br> Адыгея');
});
$('.karachaevo').on('mousemove', function() {
	mapsMove('Карачаево-Черкесская <br>Республика');
});
$('.rostov').on('mousemove', function() {
	mapsMove('Ростовская<br> область');
});
$('.kabardino').on('mousemove', function() {
	mapsMove('Кабардино-Балкарская<br> Республика');
});
$('.osetiya').on('mousemove', function() {
	mapsMove('Республика<br> Северная Осетия-Алания');
});
$('.ingushetiya').on('mousemove', function() {
	mapsMove('Республика<br> Ингушетия');
});
$('.chechenskaya').on('mousemove', function() {
	mapsMove('Чеченская<br> Республика');
});
$('.stavropolsky').on('mousemove', function() {
	mapsMove('Ставропольский<br> край');
});
$('.kalmikiya').on('mousemove', function() {
	mapsMove('Республика<br> Калмыкия');
});
$('.astrahan').on('mousemove', function() {
	mapsMove('Астраханская<br> область');
});
$('.volgograd').on('mousemove', function() {
	mapsMove('Волгоградская<br> область');
});
$('.voronej').on('mousemove', function() {
	mapsMove('Воронежская<br> область');
});
$('.belgorod').on('mousemove', function() {
	mapsMove('Белгородская<br> область');
});
$('.kursky').on('mousemove', function() {
	mapsMove('Курская<br> область');
});
$('.bryansk').on('mousemove', function() {
	mapsMove('Брянская<br> область');
});
$('.smolensk').on('mousemove', function() {
	mapsMove('Смоленская<br> область');
});
$('.tver').on('mousemove', function() {
	mapsMove('Тверская<br> область');
});
$('.moscow').on('mousemove', function() {
	mapsMove('Московская<br> область');
});
$('.kaluga').on('mousemove', function() {
	mapsMove('Калужская<br> область');
});
$('.tula').on('mousemove', function() {
	mapsMove('Тульская<br> область');
});
$('.orel').on('mousemove', function() {
	mapsMove('Орловская<br> область');
});
$('.lipesk').on('mousemove', function() {
	mapsMove('Липецкая<br> область');
});
$('.ryazan').on('mousemove', function() {
	mapsMove('Рязанская<br> область');
});
$('.ivanovsky').on('mousemove', function() {
	mapsMove('Ивановская<br> область');
});
$('.tambov').on('mousemove', function() {
	mapsMove('Тамбовская<br> область');
});
$('.penza').on('mousemove', function() {
	mapsMove('Пензенская<br> область');
});
$('.saratov').on('mousemove', function() {
	mapsMove('Саратовская<br> область');
});
$('.mordoviya').on('mousemove', function() {
	mapsMove('Республика<br> Мордовия');
});
$('.ulyanovsk').on('mousemove', function() {
	mapsMove('Ульяновская<br> область');
});
$('.samarskaya').on('mousemove', function() {
	mapsMove('Самарская<br> область');
});
$('.vladimir').on('mousemove', function() {
	mapsMove('Владимирская<br> область');
});
$('.kostroma').on('mousemove', function() {
	mapsMove('Костромская<br> область');
});
$('.nijegorod').on('mousemove', function() {
	mapsMove('Нижегородская<br> область');
});
$('.chuvashiya').on('mousemove', function() {
	mapsMove('Чувашская<br> Республика');
});
$('.mariiEl').on('mousemove', function() {
	mapsMove('Республика<br> Марий Эл');
});

$('.menu_button').on('click', function(e) {
	e.preventDefault();
	$('.menu').toggleClass('menu-show');
})

var basketSize = $('.quantity-text')[0].innerText;
$('.quantity-plus').on('click', function(e) {
  e.preventDefault();
  basketSize++;
  $('.quantity-text').html(basketSize);
})
$('.quantity-minus').on('click', function(e) {
  e.preventDefault();
  basketSize--;
  if(basketSize < 1) {
    basketSize = 1;
  }
  $('.quantity-text').html(basketSize);
})

});

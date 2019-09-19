$(window).on('load', function() {

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



});
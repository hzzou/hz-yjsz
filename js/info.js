$(function (){
	info.app.hide();
});

var info = {};

info.app = {};

info.app.hide = function (){
	var ph1 = $('.sec_2 .ph').text();
	var ph2 = $('.sec_3 .zhang').text();
	
	var ph1_1 = ph1.substr(0,3)+'****'+ph1.substr(7);
	var ph2_2 = ph2.substr(0,3)+'****'+ph2.substr(7);
	
	$('.sec_2 .ph').text(ph1_1);
	$('.sec_3 .zhang').text(ph2_2);
};



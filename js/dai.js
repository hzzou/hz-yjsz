$(function (){
	dai.app.addr_1();
	dai.app.btn_1();
	dai.app.btn_2();
	dai.app.btn_3();
});

var dai = {};
dai.app = {};
dai.app.addr_1 = function () {
	$('#detail').cxSelect({
		url: 'cityData.json',
		selects: ['first', 'second', 'third', 'four'],
		emptyStyle: 'none'
	});
	
};

dai.app.btn_1 = function () {
	$('#hang').cxSelect({
		url: 'cityData.json',
		selects: ['select_1'],
		emptyStyle: 'none'
	});
};

dai.app.btn_2 = function () {


};

dai.app.btn_3 = function () {
	
	
	$('.sec_2 .div_3 .btn_1').livequery('touchstart', function (){
		var prov = $('#detail .first').val();
		var city = $('#detail .second').val();
		var county = $('#detail .third').val();
		var street = $('#detail .four').val();
		var hang = $('#hang .select_1').val();
		console.log(prov,city,county,street,hang);
	});
	//ajax提交审核
	
};
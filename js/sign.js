$(function (){
	sign.app.init();
	sign.app.signed();
});

var sign = {};

sign.app = {};


sign.app.init = function () {
	//申请激活状态
};
sign.app.signed = function () {
	//ajax申请签到数据
	var qian = [1, 3, 5, 7, 8, 9, 11, 13, 15];
	var s = window.localStorage;
	s.setItem('key_2', qian);
	var m_2 = s.getItem('key_2');

	$('#my_date tbody td').each(function () {
		for (var i = 0; i < m_2.length; i++) {
			if ($(this).html() == m_2[i] && $(this).css('color') == 'rgb(51, 51, 51)') {
				$(this).addClass('active');
			}
		}
	});
};
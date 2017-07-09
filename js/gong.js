$(function (){
    gong.app.addr_1();
	gong.app.btn_1();
	gong.app.btn_2();
});

var gong = {};

gong.app = {};

gong.app.addr_1 = function (){
	//可以使用加载地址json文件的方式，也可以使用给元素添加的自定义属性data-url(获取接口地址)，data-json-space
	// http://code.ciaoca.com/jquery/cxSelect/
    $('#detail').cxSelect({
        url:'cityData.json',
		selects: ['first', 'second', 'third', 'four'],
        emptyStyle:'none'
    });
};

gong.app.btn_1 = function () {
	$('#sel_1').cxSelect({
		url: 'cityData.json',
		selects: ['select_1'],
		emptyStyle: 'none'
	});
};

gong.app.btn_2 = function () {
	//ajax提交审核
}


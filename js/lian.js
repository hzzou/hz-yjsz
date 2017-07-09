$(function (){
    lian.app.addr_1();
    lian.app.btn_1();
    lian.app.btn_2();
});

var lian = {};

lian.app = {};

lian.app.addr_1 = function (){
    $('#detail').cxSelect({
        url:'cityData.json',
        selects: ['first', 'second', 'third', 'four'],
        emptyStyle:'none'
    });
};
lian.app.btn_1 = function () {
    $('#sel_1').cxSelect({
        url: 'cityData.json',
        selects: ['select_1'],
        emptyStyle: 'none'
	});
};
lian.app.btn_2 = function () {
    //提交审核
}

$(function (){
    coupons.app.dropup();
});

var coupons = {};

coupons.app = {};

coupons.app.dropup = function (){
    var counter = 0;
    var num = 10;
    var pageStart = 0,pageEnd = 0;
    var dropload = $('.sec_1 .div_1').dropload({
        domDown : {
            domClass   : 'dropload-down',
            domRefresh : '<div class="dropload-refresh">↑上拉加载更多</div>',
            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
            domNoData  : '<div class="dropload-noData">暂无数据</div>'
        },
        loadDownFn : function(me){
            //申请消费赠予
            $.ajax({
                type: 'GET',
                url: 'more_1.json',
                dataType: 'json',
                success: function(data){
                    var result = '';
                    counter++;
                    pageEnd = num * counter;
                    pageStart = pageEnd - num;

                    if(pageStart <= data.lists.length){
                        for(var i = pageStart; i < pageEnd; i++){
                            result += '<li><dl class="left"><dd><span>购买金额:</span><span>'+data.lists[i].cash+'</span></dd><dd><span>购买数量:</span><span>'+data.lists[i].count+'</span></dd><dd><span>购买方式:</span><span>'+data.lists[i].way+'</span></dd></dl><div class="right"><span>'+data.lists[i].time+'</span></div></li>';
                            if((i + 1) >= data.lists.length){
                                tab1LoadEnd = true;
                                me.lock();
                                me.noData();
                                break;
                            }
                        }
                        setTimeout(function(){
                            $('.sec_1 .div_1').find('.list_1').append(result);
                            me.resetload();
                        },1000);
                    }
                },
                error: function(xhr, type){
                    me.resetload();
                }
            });
        }
    });
};

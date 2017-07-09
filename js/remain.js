$(function (){
    remain.app.dropup();
});

var remain = {};

remain.app = {};

remain.app.dropup = function (){

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
                url: 'more.json',
                dataType: 'json',
                success: function(data){
                    console.log(data);
                    var result = '';
                    counter++;
                    pageEnd = num * counter;
                    pageStart = pageEnd - num;

                    if(pageStart <= data.lists.length){
                        for(var i = pageStart; i < pageEnd; i++){
                            result += '<li><div class="left"> <h2>'+data.lists[i].name+'</h2><span>'+data.lists[i].time+'</span></div><span class="right">'+data.lists[i].cash+'</span></li>';
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

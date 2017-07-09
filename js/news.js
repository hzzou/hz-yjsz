$(function (){
    news.app.dropup();
});

var news = {};

news.app = {};

news.app.dropup = function (){

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
                url: 'more_2.json',
                dataType: 'json',
                success: function(data){
                    console.log(data);
                    var counter = 0;
                    // 每次加载的条数
                    var num = 10;
                    var pageStart = 0,pageEnd = 0;
                    var result = '';
                    counter++;
                    pageEnd = num * counter;
                    pageStart = pageEnd - num;

                    if(pageStart <= data.lists.length){
                        for(var i = pageStart; i < pageEnd; i++){
                            result += '<li><span class="sp_1">'+data.lists[i].title+'</span><a href="'+data.lists[i].href+'">'+data.lists[i].link+'</a><span class="sp_2">'+data.lists[i].time+'</span></li>';
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

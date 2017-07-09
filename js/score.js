$(function (){
    score.app.init();
    score.app.tab();
});

var score = {};

score.app = {};

score.app.init = function (){
    // ajax获取积分明细
};
score.app.tab = function (){
    var itemIndex = 0;
    var tab1LoadEnd = false;
    var tab2LoadEnd = false;
    var tab3LoadEnd = false;
    // tab
    $('.sec_2 .list li').on('touchstart',function(){
        var $this = $(this);
        itemIndex = $this.index();
        $(this).children('.sp_1').addClass('active');
        $(this).siblings().children('.sp_1').removeClass('active');
        $('.sec_2 .wrap .lists').eq(itemIndex).show().siblings('.lists').hide();


        if(itemIndex == '0'){
            // 如果数据没有加载完
            if(!tab1LoadEnd){
                // 解锁
                dropload.unlock();
                dropload.noData(false);
            }
            else{
                // 锁定
                dropload.lock('down');
                dropload.noData();
            }
        }
        else if(itemIndex == '1'){
            if(!tab2LoadEnd){
                // 解锁
                dropload.unlock();
                dropload.noData(false);
            }
            else{
                // 锁定
                dropload.lock('down');
                dropload.noData();
            }
        }
        else if(itemIndex == '2'){
            if(!tab3LoadEnd){
                // 解锁
                dropload.unlock();
                dropload.noData(false);
            }
            else{
                // 锁定
                dropload.lock('down');
                dropload.noData();
            }
        }
        // 重置
        dropload.resetload();
    });

    var counter = 0;
    var num = 10;
    var pageStart = 0,pageEnd = 0;
    // dropload
    var dropload = $('.sec_2 .wrap .lists').dropload({
        domDown : {
            domClass   : 'dropload-down',
            domRefresh : '<div class="dropload-refresh">↑上拉加载更多</div>',
            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
            domNoData  : '<div class="dropload-noData">暂无数据</div>'
        },
        loadDownFn : function(me){
            //申请消费赠予
            if(itemIndex == '0'){
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
                                $('.sec_2 .wrap .div_1').find('.list_1').append(result);
                                me.resetload();
                            },1000);
                        }
                    },
                    error: function(xhr, type){
                        me.resetload();
                    }
                });
            }
            else if(itemIndex == '1'){//分享赠予
                $.ajax({
                    type: 'GET',
                    url: 'more.json',
                    dataType: 'json',
                    success: function(data){
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
                                $('.sec_2 .wrap .div_2').find('.list_1').append(result);
                                me.resetload();
                            },1000);
                        }
                    },
                    error: function(xhr, type){
                        me.resetload();
                    }
                });
            }
            else if(itemIndex == '2'){ //其他
                $.ajax({
                    type: 'GET',
                    url: 'more.json',
                    dataType: 'json',
                    success: function(data){
                        var counter = 0;
                        var num = 10;
                        var pageStart = 0,pageEnd = 0;
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
                                $('.sec_2 .wrap .div_3').find('.list_1').append(result);
                                me.resetload();
                            },1000);
                        }
                    },
                    error: function(xhr, type){
                        me.resetload();
                    }
                });
            }
        }
    });
};

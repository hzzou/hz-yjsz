$(function (){
    ren.app.fen();
    ren.app.move();
    ren.app.btn();
});

var ren = {};

ren.app = {};

ren.app.fen = function () {
    //ajax请求粉丝总数和金银铜粉数
};
ren.app.move = function () {

    var dropload = $('.sec_2').dropload({
        domDown: {
            domClass: 'dropload-down',
            domRefresh: '<div class="dropload-refresh">↑上拉加载更多</div>',
            domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
            domNoData: '<div class="dropload-noData">暂无数据</div>'
        },
        loadDownFn: function (me) {
            //请求粉丝数
            $.ajax({
                type: 'GET',
                url: 'ren.json',
                dataType: 'json',
                success: function (data) {
                    var len = data.lists.length;
                    var counter = 0;
                    var num = 10;
                    var pageStart = 0, pageEnd = 0;
                    var result = '';
                    counter++;
                    pageEnd = num * counter;
                    pageStart = pageEnd - num;

                    if (pageStart <= len) {
                        for (var i = pageStart; i < pageEnd; i++) {
                            result += '<li class="li_1"><div class="wrap"><img class="left" src="' + data.lists[i].src + '" alt=""><div class="right"><span class="nicheng">' + data.lists[i].name + '</span><span class="id">ID:' + data.lists[i].id + '</span><span class="dengji  ' + data.lists[i].class + '">' + data.lists[i].rank + '</span></div></div></li>';
                            if ((i + 1) >= len) {
                                me.lock();
                                me.noData();
                            }
                        }
                        setTimeout(function () {
                            $('.sec_2 .list_1').append(result);
                            me.resetload();
                        }, 1000);
                    }
                },
                error: function (xhr, type) {
                    me.resetload();
                }
            });
        }
    });
};
ren.app.btn = function () {
    var startY_1 = 0;
    var endY_1 = 0;
    var Y_1 = 0;
    var startY_2 = 0;
    var endY_2 = 0;
    var Y_2 = 0;
    $('.sec_2 .list_1 .li_1').livequery('touchstart', function (ev) {

        startY_1 = ev.originalEvent.changedTouches[0].pageY;
        ev.stopPropagation();
    });
    $('.sec_2 .list_1 .li_1').livequery('touchend', function (ev) {
        endY_1 = ev.originalEvent.changedTouches[0].pageY;
        Y_1 = endY_1 - startY_1;
        if (Y_1 == 0) {
            //ajax请求数据
            var str = '';
            str = '<ul class="list_2"><li class="li_2"><div class="wrap"><img class="left" src="../img/ben.png" alt=""><div class="right"><span class="nicheng">牛德华</span><span class="id">ID:800000</span><span class="dengji yin">银牌会员</span></div></div></li><li class="li_2"><div class="wrap"><img class="left" src="../img/ben.png" alt=""><div class="right"><span class="nicheng">牛德华</span><span class="id">ID:800000</span><span class="dengji yin">银牌会员</span></div></div></li><li class="li_2"><div class="wrap"><img class="left" src="../img/ben.png" alt=""><div class="right"><span class="nicheng">牛德华</span><span class="id">ID:800000</span><span class="dengji yin">银牌会员</span></div></div></li></ul>';
            $(this).append(str);
        }
        ev.stopPropagation();
    });
    $('.sec_2 .list_2 .li_2').livequery('touchstart', function (ev) {

        startY_2 = ev.originalEvent.changedTouches[0].pageY;
        ev.stopPropagation();
    });
    $('.sec_2 .list_2 .li_2').livequery('touchend', function (ev) {
        endY_2 = ev.originalEvent.changedTouches[0].pageY;
        Y_2 = endY_2 - startY_2;

        if (Y_2 == 0) {
            //ajax请求数据
            var str = '';
            str = '<ul class="list_3"><li class="li_3"><div class="wrap"><img class="left" src="../img/ben.png" alt=""><div class="right"><span class="nicheng">牛德华</span><span class="id">ID:800000</span><span class="dengji tong">铜牌会员</span></div></div></li><li class="li_3"><div class="wrap"><img class="left" src="../img/ben.png" alt=""><div class="right"><span class="nicheng">牛德华</span><span class="id">ID:800000</span><span class="dengji tong">铜牌会员</span></div></div></li><li class="li_3"><div class="wrap"><img class="left" src="../img/ben.png" alt=""><div class="right"><span class="nicheng">牛德华</span><span class="id">ID:800000</span><span class="dengji tong">铜牌会员</span></div></div></li></ul>';
            $(this).append(str);
        }

        ev.stopPropagation();

    });
    $('.sec_2 .list_3 .li_3').livequery('touchstart', function (ev) {
        ev.stopPropagation();
    });


};




$(function (){
    jifen.app.init();
    jifen.app.tab();
    jifen.app.slide();
});

var jifen = {};

jifen.app = {};
jifen.app.init = function (){
    //用user.html页面申请保存的session设置金元铜元总收入等
};
jifen.app.tab = function () {
    var itemIndex = 0;
    var tab1LoadEnd = false;
    var tab2LoadEnd = false;
    // tab
    $('.sec_1 .list_1 .item').on('touchstart', function () {
        var $this = $(this);
        itemIndex = $this.index();
        $(this).children('.sp_1').addClass('active');
        $(this).siblings().children('.sp_1').removeClass('active');
        $('.lists').eq(itemIndex).show().siblings('.lists').hide();

        // 如果选中菜单一
        if (itemIndex == '0') {
            // 如果数据没有加载完
            if (!tab1LoadEnd) {
                // 解锁
                dropload.unlock();
                dropload.noData(false);
            }
            else {
                // 锁定
                dropload.lock('down');
                dropload.noData();
            }
        }
        else if (itemIndex == '2') {
            if (!tab2LoadEnd) {
                // 解锁
                dropload.unlock();
                dropload.noData(false);
            } else {
                // 锁定
                dropload.lock('down');
                dropload.noData();
            }
        }
        // 重置
        dropload.resetload();
    });

    // dropload
    var dropload = $('.wrap .lists .div_2').dropload({
        domDown: {
            domClass: 'dropload-down',
            domRefresh: '<div class="dropload-refresh">↑上拉加载更多</div>',
            domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
            domNoData: '<div class="dropload-noData">暂无数据</div>'
        },
        loadDownFn: function (me) {
            //申请金元明细
            if (itemIndex == '0') {
                $.ajax({
                    type: 'GET',
                    url: 'more.json',
                    dataType: 'json',
                    success: function (data) {
                        var counter = 0;
                        var num = 10;
                        var pageStart = 0, pageEnd = 0;
                        var result = '';
                        counter++;
                        pageEnd = num * counter;
                        pageStart = pageEnd - num;

                        if (pageStart <= data.lists.length) {
                            for (var i = pageStart; i < pageEnd; i++) {
                                result += '<li class="li_1"><ul class="list_3"><li><span class="type">收支名称:</span><span class="type_1">' + data.lists[i].name + '</span></li><li><span class="cash">收支金额:</span><span class="cash_1">' + data.lists[i].cash + '</span></li><li><span class="re">当前余额:</span><span class="re_1">' + data.lists[i].remain + '</span></li><li><span class="explain">简单说明:</span><span class="explain_1">' + data.lists[i].explain + '</span></li><li><span class="time">收支时间:</span><span class="time_1">' + data.lists[i].time + '</span></li></ul></li>';
                                if ((i + 1) >= data.lists.length) {
                                    tab1LoadEnd = true;
                                    me.lock();
                                    me.noData();
                                    break;
                                }
                            }
                            setTimeout(function () {
                                $('.wrap .lists').eq(0).find('.list_2').append(result);
                                me.resetload();
                            }, 1000);
                        }
                    },
                    error: function (xhr, type) {
                        me.resetload();
                    }
                });
                //申请铜元明细
            } else if (itemIndex == '2') {
                $.ajax({
                    type: 'GET',
                    url: 'more.json',
                    dataType: 'json',
                    success: function (data) {
                        var counter = 0;
                        //每次加载的条数
                        var num = 10;
                        var pageStart = 0, pageEnd = 0;
                        var result = '';
                        counter++;
                        pageEnd = num * counter;
                        pageStart = pageEnd - num;

                        if (pageStart <= data.lists.length) {
                            for (var i = pageStart; i < pageEnd; i++) {
                                result += '<li class="li_1"><ul class="list_3"><li><span class="type">收支名称:</span><span class="type_1">' + data.lists[i].name + '</span></li><li><span class="cash">收支金额:</span><span class="cash_1">' + data.lists[i].cash + '</span></li><li><span class="re">当前余额:</span><span class="re_1">' + data.lists[i].remain + '</span></li><li><span class="explain">简单说明:</span><span class="explain_1">' + data.lists[i].explain + '</span></li><li><span class="time">收支时间:</span><span class="time_1">' + data.lists[i].time + '</span></li></ul></li>';
                                if ((i + 1) >= data.lists.length) {
                                    tab1LoadEnd = true;
                                    me.lock();
                                    me.noData();
                                    break;
                                }
                            }
                            setTimeout(function () {
                                $('.wrap .lists').eq(2).find('.list_2').append(result);
                                me.resetload();
                            }, 1000);
                        }
                    },
                    error: function (xhr, type) {
                        me.resetload();
                    }
                });
            }
        }
    });
};
jifen.app.slide = function (){
    $(document).ready(function (){
        var slide = new Swiper('.swiper-container_1', {
            pagination:'.swiper-pagination',
            loop:true,
            autoplay:4000
        });
    });

    $('.sec_1 .list_1 .jin').on('touchstart', function (){
        var slide = new Swiper('.swiper-container_1', {
            pagination:'.swiper-pagination',
            loop:true,
            autoplay:4000
        });
    });

    $('.sec_1 .list_1 .tong').on('touchstart', function (){
        var slide = new Swiper('.swiper-container_2', {
            pagination:'.swiper-pagination',
            loop:true,
            autoplay:4000
        });
    });

};



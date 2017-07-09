$(function (){
  fans.app.init();
  fans.app.dropup();
});

var fans = {};

fans.app = {};

fans.app.init = function (){
  // ajax获取粉丝明细
};
fans.app.dropup = function (){

  var dropload = $('.sec_2 .div_1').dropload({
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
        url: 'more_3.json',
        dataType: 'json',
        success: function(data){

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
              result += '<li><div class="left"> <h2>'+data.lists[i].name+'</h2><span>'+data.lists[i].tel+'</span></div><span class="right">'+data.lists[i].cou+'</span></li>';
              if((i + 1) >= data.lists.length){
                tab1LoadEnd = true;
                me.lock();
                me.noData();
                break;
              }
            }
            setTimeout(function(){
              $('.sec_2 .div_1').find('.list_1').append(result);
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


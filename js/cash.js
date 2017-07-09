$(function (){
  cash.app.init();
  cash.app.btn();
});

var cash = {};

cash.app = {};

cash.app.init = function (){
  //ajax初始化可提金额和当前积分
};

cash.app.btn = function (){
  //点击提取方式时获取提取金额，弹出提取框，并进行金额判断

  $('#wei').on('touchstart', function (){
    $(this).children('.radio').addClass('active');
    $(this).siblings().children('.radio').removeClass('active');
    var cash = $('#cash').val();

    /*var str = '<section class="alert"><h2><span class="left">提现到微信账户:</span><span class="right"></span></h2><div class="div_1"><img src="../img/u_2.png" alt=""><p><span class="name">乐可可</span><span class="weixin">(微信号:kingli)</span></p></div><div class="div_2"><button type="button">确认提现</button></div></section>';

     var str_1 = '<div class="div_z"></div>';
     $(document.body).append(str);
     $(document.body).append(str_1);*/
  });

  $('#zhi').on('touchstart', function (){
    $(this).children('.radio').addClass('active');
    $(this).siblings().children('.radio').removeClass('active');
    var cash = $('#cash').val();

    /*var str = '<section class="alert"><h2><span class="left">提现到支付宝账户:</span><span class="right"></span></h2><div class="div_1"><img src="../img/u_2.png" alt=""><p><span class="name">乐可可</span><span class="weixin">(微信号:kingli)</span></p></div><div class="div_2"><button type="button">确认提现</button></div></section>';

     var str_1 = '<div class="div_z"></div>';
     $(document.body).append(str);
     $(document.body).append(str_1);*/
  });


  /*$('.alert .right').livequery('touchstart', function (){
   $('.div_z').remove();
   $('.alert').remove();
   });*/

};
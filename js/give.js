$(function (){
    give.app.init();
    //give.app.btn();
});

var give = {};

give.app = {};

give.app.init = function (){
    //ajax初始化当前积分
};

give.app.btn = function (){

    $('#user').on('change', function (){
        //监听input框的输入变化，随时动态获取手机号，然后向后台发送ajax请求对应的用户信息,
        //按如下方式把用户信息添加到网页
        var str = '<section class="alert"><h2><span class="left">转赠积分到账户:</span><span class="right"></span></h2><div class="div_1"><img src="../img/u_2.png" alt=""><p><span class="name">乐可可</span><span class="weixin">(微信号:kingli)</span></p></div><div class="div_2"><button type="button">确认转赠</button></div></section>';

        $('.sec_2').append(str);
    });
    $('.alert .right').livequery('touchstart', function (){
        $('.alert').remove();
    });

};
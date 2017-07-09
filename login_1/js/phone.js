$(function (){
  phone.app.yan();
  phone.app.btn();
});

var phone = {};

phone.app = {};

phone.app.yan = function (){
  //点击按钮获取验证码
  $('#btn_y').on('touchstart', function (){
    if($('#btn_y').attr('disabled')=='disabled'){
      return
    }
    var reg = /^1\d{10}$/;
    var tel = $('#account').val();
    if(reg.test(tel) ){
      //获取验证码,以下函数放在ajax成功之后执行,注意限定点击次数
      var wait = 60;
      function fn_1(){
        $('#btn_y').attr('disabled',true);
        $('#btn_y').addClass('active');
        $('#btn_y').html('('+wait+')');
        var timer = setInterval(function (){
          wait--;
          if(wait<10){
            wait = '0'+wait;
          }
          $('#btn_y').html('('+wait+')');

          if(wait == 0){
            $('#btn_y').removeClass('active');
            $('#btn_y').attr('disabled',false);
            $('#btn_y').html('获取验证码');
            wait = 60;
            clearInterval (timer);
          }
        },1000);
      }
      fn_1();
    }
  });
};

phone.app.btn = function (){

  $.mvalidateExtend({
    account:{
      required:true,
      pattern:/^1\d{10}$/,
      descriptions:{
        required:'<div class="mui-error error"><p>请输入手机号</p></div>',
        pattern:'<div class=" mui-error error"><p>你输入的手机号格式不正确</p></div>',
        valid:'<div class="error_ok"><p>验证通过</p></div>'
      }
    },
    yan:{
      required:true,
      pattern:/\w{4}/,
      descriptions:{
        required:'<div class="mui-error error"><p>请输入验证码</p></div>',
        pattern:'<div class=" mui-error error"><p>你输入的验证码位数不正确</p></div>',
        valid:'<div class="error_ok"><p>验证通过</p></div>'
      }
    },
    password:{
      required:true,
      pattern:/\w{6,14}/,
      descriptions:{
        required:'<div class="mui-error error"><p>请输入密码</p></div>',
        pattern:'<div class=" mui-error error"><p>请输入6-14位数字或字母密码</p></div>',
        valid:'<div class="error_ok"><p>验证通过</p></div>'
      }
    }
  });

  $('#form_1').mvalidate({
    type:2,
    onKeyup:true,
    sendForm:false,
    firstInvalidFocus:true,
    valid:function(){
      //$.ajax()
      var account_2 = $('#account').val();
      var yan_2 = $('#yan').val();
      var password_2 = $('#password').val();

      console.log(account_2,yan_2,password_2);
    }
  });

};

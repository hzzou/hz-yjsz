$(function (){
  $(function (){
    $('body,html').height(document.body.clientHeight);
  });

  login.app.btn();

});

var login = {};

login.app = {};


login.app.btn = function (){

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
      var password_2 = $('#password').val();

      console.log(account_2,password_2);
    }
  });

};

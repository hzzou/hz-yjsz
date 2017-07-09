$(function (){
  brand.app.addr_1();
  brand.app.btn_1();
});

var brand = {};

brand.app = {};

brand.app.addr_1 = function () {
  $('#div_2').cxSelect({
    url: 'cityData.json',
    selects: ['first', 'second', 'third', 'four'],
    emptyStyle: 'block'
  });

};

brand.app.btn_1 = function(){
  $('.sec_2 .btn_1').livequery('touchstart', function (){
    var prov = $('#div_2 .first').val();
    var city = $('#div_2 .second').val();
    var county = $('#div_2 .third').val();
    var street = $('#div_2 .four').val();

    //省级代理
    if(prov && !city && !county && !street){
      var oLi = document.createElement('li');
      oLi.innerHTML=prov+'省级代理';
      $('.sec_1 .list').append(oLi);
      $('.sec_2 .btn_1').html('继续申请');
      //发送ajax,需要发送ajax判断之后再添加

    }//市级代理
    else if(prov && city && !county && !street){
      var oLi = document.createElement('li');
      oLi.innerHTML=prov+city+'市级代理';
      $('.sec_2 .btn_1').html('继续申请');
      $('.sec_1 .list').append(oLi);
      //发送ajax

    }//县级代理
    else if(prov && city && county && !street){
      var oLi = document.createElement('li');
      oLi.innerHTML=prov+city+county+'县/区级代理';
      $('.sec_2 .btn_1').html('继续申请');
      $('.sec_1 .list').append(oLi);
      //发送ajax

    }//街道代理
    else if(prov && city && county && street){
      var oLi = document.createElement('li');
      oLi.innerHTML=prov+city+county+street+'街道/乡镇代理';
      $('.sec_2 .btn_1').html('继续申请');
      $('.sec_1 .list').append(oLi);
      //发送ajax

    }
  });
}
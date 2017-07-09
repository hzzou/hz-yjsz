$(function (){
    charge.app.btn();
});

var charge = {};

charge.app = {};

charge.app.btn = function (){

    $('#wei').on('touchstart', function (){
        $(this).children('.radio').addClass('active');
        $(this).siblings().children('.radio').removeClass('active');
        var cash = $('#cash').val();

    });

    $('#zhi').on('touchstart', function (){
        $(this).children('.radio').addClass('active');
        $(this).siblings().children('.radio').removeClass('active');
        var cash = $('#cash').val();

    });

};

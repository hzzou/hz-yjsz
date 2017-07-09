$(function (){
    change.app.back();
    change.app.btn();
});

var change = {};

change.app = {};

change.app.back = function (){
    $('header .left').on('touchstart', function (){
        history.back();
    })
};
change.app.btn = function (){
    var reg = /^1[0-9]{10}$/;
    $('.div_4 .btn_y').on('touchstart', function (){
       var val = $('.div_1 .tel').val();
        console.log(val);
        if(reg.test(val)){

            $.ajax({
                url:'http://www.baidu.com',
                type:'POST',
                dataType:'json',
                data:{
                    num:val
                },
                success:function (d){

                },
                error:function (d){

                }
            });
        }
    });
    $('.div_3 .btn_z').on('touchstart', function (){
        var val_1 = $('.div_1 .tel').val();
        var val_2 = $('.div_2 .pass_1').val();
        $.ajax({
            url:'http://www.baidu.com',
            type:'POST',
            dataType:'json',
            data:{
                num:val_1,
                pass:val_2
            },
            success:function (d){

            },
            error:function (d){

            }
        });
    });
};
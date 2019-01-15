$(document).ready(function(){
    $.ajax({
        type: "post",
        url: 'http://www.uear.net/admin/ajax/joinus.php',
        async : true,
        dataType:'json',
        success: function (data)
        {
            console.log(data)
        },
    });
    $.ajax({
        type: "post",
        url: 'http://www.uear.net/admin/ajax/joinus_position.php',
        data:{
            'name':'设计类'
        },
        async : true,
        dataType:'json',
        success: function (data)
        {
            if(data=='无数据'){
            }
        },
    });
})
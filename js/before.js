$(function(){
    beforeCon(".beforPage a");
});

function beforeCon(target){
    var currentTarget = null;
    $(target).click(function(){
        currentTarget = "#" + $(this).attr('data-pop');
        console.log(currentTarget);
        $(currentTarget).addClass("active");
    });
    $(".closePop").click(function(){
        $(currentTarget).removeClass("active");
    })
}

$(function(){
    sayHello("#hello");
});

function sayHello(targetA){
    $(".closePop").click(function(){
        $(targetA).css({
            "display" : "none"
        })
    })
}
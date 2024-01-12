$(function(){
    customSlider01('.mainTopslider','.mainContainer > div:first-of-type .currentCount','.mainContainer > div:first-of-type .maxCount',true);
    customSlider01('.listSlider','.listContainer .currentCount','.listContainer .maxCount',false)
    customSlider02('.storyslide');
    customSlider02('.footerHQslider');
    customSlider02('.detailSlider',true,false);

    openCloseElement("header > div > nav + input");
    openCloseElement(".btnCart");
    openPa('.openCart');
    removeCart('.removeBtn');

    countPrice(".countP span","#cartHave figure figcaption strong",".countP input[type='button']","#cartHave .totalPrice");

    $(".videoArea").fitVids();

    snsToggle('.toggleLike');
    snsToggle('.mainContainer > div:nth-of-type(5) > div');

    foldMenu(".foldMenu li span+input[type='button']",".foldMenu ol");

    accordion(".accordionQA li b");
    accordionMenu("#gnb > div > div");

    tabUI(".tabMenu01 li",".freeList");
    tabUI(".bottleDesignTap ul:first-of-type li",".bottleDesignTap ul:last-of-type li");
    tabUI(".mypage aside ul li",".accountTab");
    tabUI(".paymentContainer form div div:nth-of-type(2) > ul li",".paymentTab");
    tabUI(".checkOutpayContainer form div div:nth-of-type(2) > ul li",".addrTab");
    tabUI02("#emptyAddr input",'.addrTab');
    tabUI02("#addrBefore input[type='button']",'.addrTab');

    account(".accountFind fieldset input[type='button']");

    good(".reviewList li input[type='button']");

    verticalBanner(".verticalSlider li");
    
    goMenu('.barMenu li:nth-of-type(1) a','.prDetail');
    goMenu('.barMenu li:nth-of-type(2) a','.qa');
    goMenu('.barMenu li:nth-of-type(3) a','.items');
    goMenu('.barMenu li:nth-of-type(4) a','.reviews');

    addr(".afterAddr #manageAddr > ul li>*:nth-child(6) input[type='button']");
});

function customSlider01(target,currentIndex,maxIndex,pagerBool){
  var test01 = $(target);
   test01.bxSlider({
    pager: pagerBool,
    pagerType : 'full',
    onSlideBefore: function($slideElement, oldIndex, newIndex){
        var index = newIndex +1;
        $(currentIndex).text('0'+index);
    },
    onSliderLoad: function(currentIndex){
        $(maxIndex).text('0'+test01.getSlideCount());
    }
  });
}

function customSlider02(target02,pagertorf,contTorF){
    var test02 = $(target02);
    test02.bxSlider({
        pager:pagertorf,
        pagerCustom:".detailPager",
        controls : contTorF
    })
}

function snsToggle(toggleLike){
    $(toggleLike).click(function(e){
        e.stopPropagation();
        $(this).toggleClass('active');
    });
}

function openCloseElement(openBtn){
    var currentTarget = null;
    $(openBtn).click(function(){
        currentTarget = "#" + $(this).attr('data-popup');
        console.log(currentTarget);
        $(currentTarget).addClass("active");
    });
    $(".btnClose").click(function(){
        $(currentTarget).removeClass("active");
    });
}


function openPa(openCart){
    var cartTarget = null;
    $(openCart).click(function(){
        cartTarget = "#" + $(this).attr('data-panel');
        $(cartTarget).addClass("active");
        $('#gnb').removeClass('active');
    });
    $('.closeCart').click(function(){
        $(cartTarget).removeClass('active');
    })
    $(".btnClose").click(function(){
        $(cartTarget).removeClass("active");
    });
}

function removeCart(remBtn){
    var trueTarget = null;
    var parent = $(remBtn).parent();
    $(remBtn).click(function(){
        trueTarget = "#" + $(this).attr('data-panel');
        $(trueTarget).addClass('active');
        parent.parent().removeClass('active');
    });
    $('.closeCart').click(function(){
        $(trueTarget).removeClass('active');
    });
}

function foldMenu(foldTarget,sideMenu){
    $(foldTarget).click(function(){
        $(this).toggleClass('active');
        $(sideMenu).toggleClass("active");
    });
}

function accordion(q){
    $(q).click(function(){
        $(this).next().slideToggle(400);
        $(this).toggleClass('active');
    })
}

function accordionMenu(menuName){
    $(menuName).click(function(){
        $(menuName).removeClass('active');
        $(this).addClass('active');
    });
}

function tabUI(tabMenu,tabCont){
    $(tabMenu).click(function(){
        var tabOk = $(this).attr('data-tab');
        $(tabMenu).removeClass('active');
        $(this).addClass('active');

        $(tabCont).removeClass('active');
        $("#"+tabOk).addClass('active');
    });
}

function tabUI02(tabMenu02,tabCont02){
    $(tabMenu02).click(function(){
        var tabM = $(this).attr('data-tab');
        $('#emptyAddr').removeClass('active');
        $(this).addClass('active');

        $(tabCont02).removeClass('active');
        $("#"+tabM).addClass('active');
    });
}

function account(okBtn){
    $(okBtn).click(function(){
        $(".accountFind > div > div:last-of-type").css({
            "display": "none"
        })
        $("#successPage").css({
            "display": "block"
        })
    });
}

function verticalBanner(vertical){
    var bannerT = $(vertical); 
    var i = 0; 
    setInterval(function(){
        var currentBanner = bannerT.eq(i); 
        bannerT.removeClass("active");
        currentBanner.addClass("active");
        i++;
        if(i == bannerT.length){ 
            i = 0;
        }
    }, 2000); 
}

function goMenu(targetM,high){
    $(targetM).click(function(){
        $('html, body').animate({scrollTop:$(high).offset().top-160},'slow');
    })
}

function addr(targetA){
    $(targetA).click(function(){
        var attrV =$(this).attr('value');
        $('#defaultAddr').siblings().attr('disabled',false);
        $(this).attr('value','Save');
        $('#manageAddr ul li:last-of-type span').prevAll().addClass('positive');

        if(attrV == 'Save'){
            $('#defaultAddr').siblings().attr('disabled',true);
            $(this).attr('value','Edit');
            $('#manageAddr ul li:last-of-type span').prevAll().removeClass('positive');
        };
    });
}

function countPrice(numb,priceVal,tragetP,totalP){
    var limitNumber = 99;
    var inputV = 0;
    var oneP = $(priceVal).text();
    var priceF = 0;

    var currentNumber =parseInt($(numb).text());

    $(tragetP).click(function(){
        inputV = $(this).val();
        
        if(inputV == '+' && currentNumber < limitNumber){
            currentNumber = currentNumber+1;
        }else if(currentNumber !=1 && currentNumber < limitNumber){
            currentNumber = currentNumber -1;
        }else if(inputV == '-' && currentNumber == limitNumber){
            currentNumber = currentNumber-1;
        }
        $(numb).text(currentNumber);

        priceF = oneP;
        priceF = (currentNumber*priceF+'.00');
        $(totalP).text(priceF);
    });
}

function good(reco){
    $(reco).click(function(){
        var classN = $(this).attr("class");
        var count01 = parseInt($(this).attr("value"));
        var reve =true;

        $(this).addClass('color');
        $(this).attr("value",count01+1);
        $(this).siblings().attr("disabled",reve);

        if(classN == 'oswWRF20 btnUp color'){  
            $(this).removeClass('color');
            $(this).attr("value",count01-1);
            $(this).siblings().attr("disabled",!reve);
        }else if(classN =='oswWRF20 btnDown color'){
            $(this).removeClass('color');
            $(this).attr("value",count01-1);
            $(this).siblings().attr("disabled",!reve);
        };
    });

}


 
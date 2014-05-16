 (function(){
        var trans_dom = $('aside,.main');
        $('.side-icon').click(function(){
            if(trans_dom.hasClass('trans-show')){
                trans_dom.removeClass('trans-show').addClass('trans-hide'); 
            }else{
                trans_dom.removeClass('trans-hide').addClass('trans-show');
            }
        });
})()

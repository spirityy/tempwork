 (function(){

        var trans_dom = $('aside,.main');
        $('.side-icon').click(function(){
            trans_dom.toggleClass('trans-show');
        });

        //$('.side-icon').click();

        $('aside').height($('.main').height());

        //jobcat select init
        var aside_select_dom =$('.jobcat-selected,.area-selected');
        
        aside_select_dom.each(function(k,el){
            $(el).click(function(){
                if($(el)){
                    $(el).find('i').toggleClass('up-arrow');
                    $(el).next('.'+$(el).attr("class")+'-options').slideToggle('fast');
                }
            });
        
        });




        //area p select
        var monidata ={
            citys : [
                {city_name:'bj'},
                {city_name:'sh'},
                {city_name:'hk'}
            ]
        }
              
        $('.c-options').html(Handlebars.compile($('.c-options').html())(monidata));
        

        var  p_options_dom = $('.area-selected-options .p-options'); 
        p_options_dom.find('li').click(function(){
            p_options_dom.find('li').removeClass('active');
            $(this).addClass('active'); 
        });

})()

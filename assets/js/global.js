 (function(){

        var trans_dom = $('aside,.main');
        $('.side-icon').click(function(){
            trans_dom.toggleClass('trans-show');
        });

        //$('.side-icon').click();

        $('aside').height($('.main').height()>1050?$('.main').height():1050);


        /****
         * jobcat select area
         */
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
        var allcitys ={
            '热门':{
                citys:[
                    {'city_name':'香港'},
                    {'city_name':'香港'}
                ]
                
            },
            '北京':{
                citys:[
                    {'city_name':'香港'}
                ]
            },
            '上海':{
                citys:[
                    {'city_name':'香港'},
                    {'city_name':'香港'},
                    {'city_name':'香港'},
                ]
            }
        };
              
        var  p_options_dom = $('.area-selected-options .p-options'); 
        p_options_dom.find('li').click(function(){
            p_options_dom.find('li').removeClass('active');
            $(this).addClass('active'); 
            $(this).parent('.p-options').next('.c-options').html(Handlebars.compile($('#city-options').html())(allcitys[$(this).text()]));
        });

        p_options_dom.find('li').first().click();


        /*
         * selected action
         */


        /*
         * bottom layout
         */




})()

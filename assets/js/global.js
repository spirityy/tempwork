 (function(){

        var trans_dom = $('aside,.main');
        $('.side-icon').click(function(e){
            e.stopPropagation();
            trans_dom.toggleClass('trans-show');
            if(trans_dom.hasClass('trans-show')){
                $('.main.trans-show').on('click',function(event){
                    event.preventDefault();
                    $('.side-icon').click();
                });
            }else{
                $('.main').off('click');
            }
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
                    {'city_name':'香港1'},
                    {'city_name':'香港2'}
                ]
                
            },
            '北京':{
                citys:[
                    {'city_name':'香港3'}
                ]
            },
            '上海':{
                citys:[
                    {'city_name':'香港4'},
                    {'city_name':'香港5'},
                    {'city_name':'香港6'},
                ]
            }
        };
              
        var  p_options_dom = $('.area-selected-options .p-options'); 

        p_options_dom.find('li').click(function(){

            p_options_dom.find('li').removeClass('active');
            $(this).addClass('active'); 
            //handlebars
            $(this).parent('.p-options').next('.c-options').html(Handlebars.compile($('#city-options').html())(allcitys[$(this).text()]));

            AddSelected($(this).parent('.p-options').next('.c-options').find('li'));

        });

        p_options_dom.find('li').first().click();

        /*
         * selected action
         */
        var selected_doms = $('.c-options li,.jobcat-selected-options li');

        function AddSelected(els){
            els.off('click').click(function(){
                $(this).closest('.options').prev('div').find('.sub').text($(this).text());
                $(this).closest('.options').prev('div').click();
            });
        }

        AddSelected(selected_doms);

})()

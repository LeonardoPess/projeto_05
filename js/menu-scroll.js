$(function(){

 	var directory = '/Pess/Projeto%2005/home'
       
        $('[goto=contato]').click(function(){
            location.href=directory+'?contato';
            return false;
        })
        

        checkUrl();


        function checkUrl(){
            var url = location.href.split('/');
            var curPage = url[url.length-1].split('?');
       
            if(curPage[1] != undefined && curPage[1] == 'contato'){
              //$('header nav a').css('color','black');
              //$('footer nav a').css('color','white');
              $('[goto=contato]').css('color','#EB2D2D');
              $('html,body').animate({'scrollTop':$('#contato').offset().top});
            }else{
              if(curPage[0] == '')
                $('a[href=home]').css('color','#EB2D2D');
              else
                $('a[href='+curPage[0]+']').css('color','#EB2D2D');
            }

        }

});
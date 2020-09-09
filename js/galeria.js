$(function(){

	var imgShow = 3;
	var maxIndex = Math.ceil($('.mini-img-wraper').length/3) - 1;
	var curIndex = 0;

	initSlider();
	navegateSlider();
	clickSlider();

	function initSlider(){
		var amt = $('.mini-img-wraper').length * 33.3;
		var elScroll = $('.nav-galeria-wraper');
		var elSingle = $('.mini-img-wraper');

		elScroll.css('width',amt+'%');
		elSingle.css('width',33.3*(100/amt)+'%');
	}

	function navegateSlider(){
		$('.arrow-right-nav').click(function(){
			if(curIndex < maxIndex){
				curIndex++;
				var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
				$('.nav-galeria').animate({'scrollLeft':elOff+'px'});
			}else{
				//console.log('chegamos até o final')
			}
		});

		$('.arrow-left-nav').click(function(){
			if(curIndex > 0){
				curIndex--;
				var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
				$('.nav-galeria').animate({'scrollLeft':elOff+'px'});
			}else{
				//console.log('chegamos até o final')
			}
		});
	}

	function clickSlider(){
		$('.mini-img-wraper').click(function(){
			$('.mini-img-wraper').css('background-color','transparent');
			$(this).css('background-color','rgb(210,210,210)');
			var img = $(this).children().css('background-image');
			$('.foto-destaque').css('background-image',img);
		});

		$('.mini-img-wraper').eq(0).click();
	}


})
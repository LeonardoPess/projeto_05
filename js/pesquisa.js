$(function(){

	var currentValue = 0;
	var isDrag = false;
	var precoMaximo = 90000;
	var preco_atual = 0;

	$('.pointer-barra').mousedown(function(){
		isDrag = true;
	})

	$(document).mouseup(function(){
		enableTextSelection();
		isDrag = false;
	})

	$('.barra-preco').mousemove(function(e){
		if(isDrag){
			disableTextSelection();
			var elBase = $(this);
			var mouseX = e.pageX - elBase.offset().left;
			if(mouseX < 0)
				mouseX = 0;
			if(mouseX > elBase.width())
				mouseX = elBase.width();

			$('.pointer-barra').css('left',(mouseX-13)+'px');
			currentValue = (mouseX / elBase.width()) * 100;
			$('.barra-preco-fill').css('width',currentValue+'%');

			preco_atual = currentValue / 100 * precoMaximo;
			preco_atual = formatarPreco(preco_atual);
			$('.preco_pesquisa').html('R$'+preco_atual);
		}
	})

	function formatarPreco(preco_atual){
		preco_atual = preco_atual.toFixed(2);
		preco_arr = preco_atual.split('.');

		var novo_preco = formatarTotal(preco_arr);

		return novo_preco;
	}

	function formatarTotal(preco_arr){
			if(preco_arr[0] < 1000){
				return preco_arr[0]+','+preco_arr[1];
			}else if(preco_arr[0] < 10000){
				return preco_arr[0][0]+'.'+preco_arr[0].substr(1,preco_arr[0].length)+
				','+preco_arr[1];
			}else{
				return preco_arr[0][0]+preco_arr[0][1]+'.'+preco_arr[0].substr(2,preco_arr[0].length)+
				','+preco_arr[1];
			}
	}

	function disableTextSelection(){
		$('body').css('-webkit-user-select',"none")
		$('body').css('-noz-user-select',"none")
		$('body').css('-ns-user-select',"none")
		$('body').css('-o-user-select',"none")
		$('body').css('user-select',"none")
	}

	function enableTextSelection(){
		$('body').css('-webkit-user-select',"auto")
		$('body').css('-noz-user-select',"auto")
		$('body').css('-ns-user-select',"auto")
		$('body').css('-o-user-select',"auto")
		$('body').css('user-select',"auto")
	}


})
$(document).ready(
	function(){
		/*lazyload*/
		$("img.lazy").lazyload({
			threshold :180,
			effect:"fadeIn"
		});
		$(".modal-body img.lazy").lazyload({
			effect:"fadeIn",
		    skip_invisible : false
		});
		
		/*头部导航条更多箭头切换*/
		$('#navMore').hover(
			function(){
				$(this).find('span').css('background', 'url(images/3HeaderNav/arrowUp.png) 32px 10px no-repeat');
				$('#ulMore').show();
			},
			function(){
				$(this).find('span').css('background', 'url(images/3HeaderNav/arrowDown.png) 32px 10px no-repeat');
				$('#ulMore').hide();
			}
		);
		
		$('#sideQRCode').modal({ backdrop:false});
		
		//新闻标签面板
		$('#newsTab a').hover(function(e){
			e.preventDefault();
			$(this).tab('show')
		}, function(e){
			e.preventDefault();
			$(this).tab('hide')
		});
		//今日系列标签面板
		$('#todayTab a').hover(function(e){
			e.preventDefault();
			$(this).tab('show')
		}, function(e){
			e.preventDefault();
			$(this).tab('hide')
		});
		
		/*大家爱看面板选项图标*/
		$(".today2 .header2").one("mouseenter",function() {
			var $img=$(this).find("h2 > span img");
			/*	console.log($img.get(0));
			 console.log($img.get(1));*/
			$img.each(function(i){
				/*eq返回JQ对象，get返回Dom对象*/
				var $image=$img.eq(i);
				var SrcData=$image.data("src");
				var index1=SrcData.lastIndexOf("/");
				var index2=SrcData.lastIndexOf(".");
				var altName=SrcData.substring(index1+1,index2);
				$image.attr({"src":SrcData,"alt":altName});
			});
		})
		
		/*产品浮动框图标*/
		$("#table").one("mouseenter",function() {
			var $img=$(this).find("tbody > tr td:last-child img");
			/*	console.log($img.get(0));
			 console.log($img.get(1));*/
			$img.each(function(i){
				/*eq返回JQ对象，get返回Dom对象*/
				var $image=$img.eq(i);
				var SrcData=$image.data("src");
				var index1=SrcData.lastIndexOf("/") || 0;
				var index2=SrcData.lastIndexOf(".") || 0;
				var altName=SrcData.substring(index1+1,index2);
				$image.attr({"src":SrcData,"alt":altName});
			});
		})
		
		/*产品浮动框*/
		$('.productFloatBtn').click(function(){
			$('#table1').fadeToggle("normal", "linear");
			$(this).toggleClass(function(){
				if($(this).hasClass('float14')){
					$(this).removeClass('float14');
					$('#table').css('border-left', 'none');
					return 'float378';
				}else{
					$(this).removeClass('float378');
					$('#table').css('border-left', '1px solid #d2e1f1');
					return 'float14';
				}
			})
		});
		
		/*京东广告轮播*/
		$('#myCarousel').carousel({
			interval:5000
		});
		
		/*滚动条*/
		window.addEventListener('scroll',debounce(realFunc,500));
		function debounce( func,wait,immediate ) {
			var timeout;
			return function() {
				clearTimeout(timeout);
				timeout=setTimeout(func,wait);
			}
		}
		
		function realFunc() {
			if($(document).scrollTop() >= 550){
				$('#floatNav').show();
			}else{
				$('#floatNav').hide();
			}
		}
		
	}
);
/**
 * Created by LinChuQiang.
 */

(function() {
	
	/*路径*/
	var imgSrc="dist/";
	
	
	function href( h,t,c ) {
		var c = c || "";
		return '<a href ="' + h + '" class=" ' + c + ' ">' + t + '</a>';
	}
	/*
	 *  which，同ID下存在第二个相同class，参考IT面板
	 * */
	function imgArea( data,pnlID,which ) {
		if(!arguments[1]){
			console.log("imgArea pnlID error!");
			return;
		}
		var order=which?which:0;
		var thisdata=which!==undefined?data["image_text"+which]:data.image_text;
		var thishref = imgSrc + thisdata.href;
		var thisalt = thisdata.alt;
		var thissrc = imgSrc + thisdata.src;
		$( pnlID+" .imgArea" ).eq(order).find( "a" ).attr( "href",thishref ).find( "img" ).attr( { "alt" : thisalt,"src" : thissrc } );
		$( pnlID+" .txtArea" ).eq(order).find( "a" ).attr( "href",thishref ).find( "strong" ).html( thisalt );
	}
	
	/*
	 * txt(data,"#amusement",".txtArea","news",6)
	 * data,json数据集
	 * pnlID,哪个面板
	 * pnlClas，哪个面板下的class需要插入文本
	 * choose，JSON数据中哪块数据
	 * limit，读取条数
	 * which，同ID下存在第二个相同class，参考IT面板
	 * */
	function txt(data,pnlID,pnlClas,choose,limit,which) {
		if(!arguments[1]){
			console.log("txtArea pnlID error!");
			return;
		}
		var order=which?which:0;
		var newsC=data[choose];
		var newsCL=newsC.length;
		var i;
		var arr=[];
		for( i = 0; i < newsCL; i++ ) {
			var newsCon = newsC[ i ];
			if(newsCon instanceof  Array){
				var str="";
				$.each(newsCon,function(k,v){
					if( k == 0 && v.title.length <= 3 ) {
						str += href( v.href,v.title ) + " | ";
					} else {
						if(v.clas != undefined){
							str+=href(v.href,v.title,v.clas)+" ";
						}else{
							str+=href(v.href,v.title)+" ";
						}
					}
				});
				arr.push("<li>"+str+"</li>");
			}else{
				if(newsCon.clas != undefined){
					arr[i]="<li>"+href(newsCon.href,newsCon.title,newsCon.clas)+"</li>";
				}else{
					arr[i]="<li>"+href(newsCon.href,newsCon.title)+"</li>";
				}
			}
			if(i==(limit-1)){
				break;
			}
		}
		var $myul=$(pnlID+" "+pnlClas+" > ul").eq(order).detach();
		$myul.html(arr.join(''));
		$(pnlID+" "+pnlClas).eq(order).append($myul);
	}
	
	/*广东新闻面板*/
	$('#GuangDongNews-tab').on('show.bs.tab', function(){
		$.getJSON( imgSrc+"ajax/gdnews.json" ).done( function( data ) {
			txt(data,"#gdnews","","gdnews",8);
			imgArea(data,"#GuangDongNews",0);
			txt(data,"#gdnews1","","gdnews1",9);
			imgArea(data,"#GuangDongNews",1);
			txt(data,"#gdnews2","","gdnews2",10);
		} );
	});
	/*今日热播*/
	$('#todayMovie-tab').on('shown.bs.tab', function(){
		$.getJSON( imgSrc+"ajax/toadyMovie.json" ).done( function( data ) {
			$("#todayMovie .vnews1").find("div").html('<a href="'+data.movie_image_text.href+'"><img src="'+imgSrc+data.movie_image_text.src+'" alt="'+data.movie_image_text.alt+'"></a>');
			txt(data,"#todayMovie",".mnews","movie_news",8);
		} );
	});
	
	/*股指加载*/
	$('.index-list li').mousedown(function(){
		$('.index-list li').removeClass('selected');
		$(this).addClass('selected');
		var id=$(this).attr('id');
		$.getJSON( imgSrc+"ajax/stocks.json" ).done( function( data ) {
			var thisdata=data["stk"+id];
			//console.log(thisdata);
			$('.financeContent').find('.imgArea-stk a').attr("href",thisdata.href).find('img').attr({"src":'src/'+thisdata.src,"alt":thisdata.name,"height":75,"width":130});
			$('.financeContent').find('.txtArea-stk').find('.stkName a').attr("href",thisdata.href).text(thisdata.name).end().find('.stkPrice').text(thisdata.price).end().find('.stkChange').text(thisdata.change);
		} );
	});
	
	/*幸运*/
	$('#luck li').mousedown(function(){
		var liAtxt = $(this).find('a').text();
		$('#luckTtl').text(liAtxt);
		var liV = $(this).attr('value');
		$.getJSON( imgSrc+"ajax/luck.json" ).done( function( data ) {
			var thisdata=data[liV];
			console.log(thisdata);
			var cls=thisdata.luckNum>=80?"progress-bar-success":(thisdata.luckNum>=40?"progress-bar-warning":"progress-bar-danger");
			$("#luckCont .progress-bar").removeClass("progress-bar-warning progress-bar-success progress-bar-danger").addClass(cls).css({width:thisdata.luckNum+"%"}).find("span").text(thisdata.luckNum);
			$("#luckCont .luckDetail").find("p").text(thisdata.txt).find("a").attr("href",thisdata.href);
		} );
	});
	
	/********
	 中栏内容加载
	 ********/
	
	/*金融面板加载*/
	var financialPnl = imgSrc+"ajax/financial.json";
	$.getJSON( financialPnl )
	 .done( function( data ) {
		 var image_text_src = 'src/'+data.image_text.src;
		 var image_text_alt = data.image_text.alt;
		 var image_text_href = data.image_text.href;
		 /*左一图文*/
		 $( "#financial .imgArea" )
			 .find( "a" ).attr( { "href" : image_text_href } )
			 .find( "img" ).attr( { src : image_text_src,alt : image_text_alt } );
		 $( "#financial .txtArea" )
			 .find( "a" ).attr( { "href" : image_text_href } )
			 .find( "strong" ).text( image_text_alt );
		 var $myul = $( "#financial .imgTtl > ul" ).detach();
		 var array = [];
		 var newsC = data.news;
		 var newsCL = data.news.length;
		 var i;
		 for( i = 0; i < newsCL; i++ ) {
			 array[ i ] = '<li><a href ="' + newsC[ i ].href + '">' + newsC[ i ].title + "</a></li>";
			 if( i == 5 ) {
				 break;
			 }
		 }
		 $myul.html( array.join( '' ) );
		 $myul.appendTo( "#financial .imgTtl" );
		 /*中间*/
		 var newsR = data.newsRight;
		 var newsRL = newsR.length;
		 var x;
		 var arr = [];
		 for( x = 0; x < newsRL; x++ ) {
			 if( newsR[ x ] instanceof Array ) {
				 var str = "";
				 $.each( newsR[ x ],function( key,value ) {
					 str += href( value.href,value.title ) + ' ';
				 } );
				 arr.push( '<li>' + str + '</li>' );
			 } else {
				 arr[ x ] = '<li>' + href( newsR[ x ].href,newsR[ x ].title ) + '</li>';
			 }
			 if( x == 8 ) {
				 break;
			 }
		 }
		 var $mineUl = $( "#financial .txt > ul" ).detach();
		 $mineUl.html( arr.join( "" ) );
		 $( "#financial .txt" ).append( $mineUl );
	 } )
	 .fail( function() {
		 console.log( "financialPnl Error" );
	 } );
	/*汽车面板加载*/
	var jqxhr = $.ajax( {
		method     : "GET",
		type       : "GET",
		url        : imgSrc+"ajax/car.json",
		dataType   : "json",
		statusCode : {
			200 : function() {
			},
			404 : function() {
			}
		}
	} );
	jqxhr.done( function( data ) {
		$( "#car .imgArea" ).find( "a" ).attr( { "href" : data.image_text.href } ).find( "img" ).attr( { "alt" : data.image_text.alt,"src" : 'src/' + data.image_text.src } );
		$( "#car .txtArea" ).find( "a" ).attr( { "href" : data.image_text.href } ).find( "strong" ).html( data.image_text.alt );
		var arr = [];
		for( var i = 0; i < data.news.length; i++ ) {
			var newsC = data.news[ i ];
			if( newsC instanceof Array ) {
				var newsContent = data.news[ i ];
				var str = "";
				$.each( newsContent,function( key,value ) {
					if( key == 0 && value.title.length <= 3 ) {
						str += href( value.href,value.title ) + " | ";
					} else {
						str += href( value.href,value.title ) + " "
					}
				} )
				arr.push( '<li>' + str + '</li>' );
			} else {
				arr[ i ] = '<li>' + href( newsC.href,newsC.title ) + '</li>';
			}
		}
		var $myul = $( "#car .imgTtl > ul" ).detach();
		$myul.html( arr.join( '' ) );
		$myul.appendTo( $( "#car .imgTtl" ) );
	} );
	jqxhr.fail( function() { console.log( "carPnl Error" );} );
	/*体育面板*/
	$.getJSON( imgSrc+"ajax/pe.json" ).done( function( data ) {
		$( "#pe .imgArea" ).find( "a" ).attr( "href",data.image_text.href ).find( "img" ).attr( { "src" : 'src/' + data.image_text.src,"alt" : data.image_text.alt } );
		$( "#pe .txtArea" ).find( "a > strong" ).html( data.image_text.alt )
		var newsC = data.news;
		var newsCL = newsC.length;
		var arr = [];
		for( var i = 0; i < newsCL; i++ ) {
			var content = newsC[ i ];
			if( content instanceof Array ) {
				var str = "";
				$.each( content,function( key,value ) {
					if( value.clas != undefined ) {
						str += href( value.href,value.title,value.clas ) + " ";
					} else {
						str += href( value.href,value.title ) + " ";
					}
				} );
				arr.push( '<li>' + str + '</li>' )
			} else {
				if( content.clas != undefined ) {
					arr[ i ] = '<li>' + href( content.href,content.title,content.clas ) + '</li>';
				} else {
					arr[ i ] = '<li>' + href( content.href,content.title ) + '</li>';
				}
			}
		}
		var $peUl = $( "#pe .imgTtl> ul" ).detach();
		$peUl.html( arr.join( "" ) );
		$( "#pe .imgTtl" ).append( $peUl );
		var newsR = data.newsRight;
		var source = '<ul>'
		             + '{{each newsR as value i}}'
		             + '<li><a href = "{{value.href}}" class = "{{value.clas}}">{{value.title}}</a></li>'
		             + '{{/each}}'
		             + '</ul>';
		var render = template.compile( source );
		var html = render( {
			newsR : newsR
		} );
		document.getElementById( "pe" ).getElementsByClassName( 'txt' )[ 0 ].innerHTML = html;
	} );
	/*房产面板*/
	var housexhr = $.ajax( {
		method   : "GET",
		type     : "GET",
		url      : imgSrc+"ajax/house.json",
		dataType : "json"
	} );
	housexhr.done( function( data ) {
		$( "#house .imgArea" ).find( "a" ).attr( "href",data.image_text.href ).find( "img" ).attr( { "alt" : data.image_text.alt,"src" : 'src/' + data.image_text.src } );
		$( "#house .txtArea" ).find( "a" ).attr( { "href" : data.image_text.href } ).find( "strong" ).html( data.image_text.alt );
		var arr = [];
		for( var i = 0; i < data.news.length; i++ ) {
			var newsC = data.news[ i ];
			if( newsC instanceof Array ) {
				var newsContent = data.news[ i ];
				var str = "";
				$.each( newsContent,function( key,value ) {
					if( key == 0 && value.title.length <= 3 ) {
						str += href( value.href,value.title ) + " | ";
					} else {
						str += href( value.href,value.title ) + " "
					}
				} )
				arr.push( '<li>' + str + '</li>' );
			} else {
				arr[ i ] = '<li>' + href( newsC.href,newsC.title ) + '</li>';
			}
		}
		var $houseul = $( "#house .imgTtl > ul" ).detach();
		$houseul.html( arr.join( '' ) );
		$houseul.appendTo( $( "#house .imgTtl" ) );
	} );
	housexhr.fail( function() {
		console.log( "housexhr fail!" );
	} )
	/********
	 中栏内容一加载
	 ********/
	/*娱乐面板*/
	$.getJSON( imgSrc+"ajax/amusement.json" ).done( function( data ) {
		imgArea( data,"#amusement");
		txt(data,"#amusement",".imgTtl","news",6);
		txt(data,"#amusement",".txt","newsRight",9);
	} );
	/*阅读面板*/
	$.getJSON( imgSrc+"ajax/book.json" ).done( function( data ) {
		var str="";
		$.each(data.books,function( key,value ) {
			str+='<a href="'+value.href+'"><img alt="' +value.alt+'" src="'+imgSrc+value.src+'"></a>&nbsp';
		})
		$("#books .imgTtl").find("div").html(str);
		txt(data,"#books",".imgTtl","news",6);
	} );
	/*IT面板*/
	$.getJSON( imgSrc+"ajax/it.json" ).done( function( data ) {
		imgArea( data,"#it",0);
		txt(data,"#it",".imgTtl","news",6,0);
		imgArea( data,"#it",1);
		txt(data,"#it",".imgTtl","news1",6,1);
	} );
	
	/*文化面板*/
	$.getJSON( imgSrc+"ajax/culture.json" ).done( function( data ) {
		imgArea( data,"#culture");
		txt(data,"#culture",".imgTtl","news",6);
	} );
	
	/********
	 中栏内容二加载
	 ********/
	
	/*时尚面板*/
	$.getJSON( imgSrc+"ajax/fashion.json" ).done( function( data ) {
		imgArea( data,"#fashion");
		txt(data,"#fashion",".imgTtl","news",6);
	} );
	/*大家面板*/
	$.getJSON( imgSrc+"ajax/people.json" ).done( function( data ) {
		imgArea( data,"#people");
		txt(data,"#people",".imgTtl","news",6);
	} );
	
	/*星座面板*/
	$.getJSON( imgSrc+"ajax/constellation.json" ).done( function( data ) {
		imgArea( data,"#constellation");
		txt(data,"#constellation",".imgTtl","news",6);
	} );
	
	/*教育面板*/
	$.getJSON( imgSrc+"ajax/education.json" ).done( function( data ) {
		imgArea( data,"#education");
		txt(data,"#education",".imgTtl","news",6);
	} );
	
	/*儿童面板*/
	$.getJSON( imgSrc+"ajax/children.json" ).done( function( data ) {
		var str="";
		$.each(data.childrens,function( key,value ) {
			str+='<a href="'+value.href+'"><img alt="' +value.alt+'" src="'+imgSrc+value.src+'"></a>&nbsp';
		})
		$("#children .imgTtl").find("div").html(str);
		txt(data,"#children",".imgTtl","news",6);
	} );
	
	/********
	 中栏内容三加载
	 ********/
	/*军事*/
	$.getJSON( imgSrc+"ajax/war.json" ).done( function( data ) {
		imgArea( data,"#war");
		txt(data,"#war",".imgTtl","news",6);
	} );
	/*游戏*/
	$.getJSON( imgSrc+"ajax/acg.json" ).done( function( data ) {
		imgArea( data,"#acg");
		txt(data,"#acg",".imgTtl","news",6);
	} );
	/*订阅*/
	$.getJSON( imgSrc+"ajax/order.json" ).done( function( data ) {
		imgArea( data,"#order");
		txt(data,"#order",".imgTtl","news",6);
	} );
	/*社会*/
	$.getJSON( imgSrc+"ajax/social.json" ).done( function( data ) {
		imgArea( data,"#social");
		txt(data,"#social",".imgTtl","news",6);
	} );
	
	/*宗教*/
	$.getJSON( imgSrc+"ajax/religion.json" ).done( function( data ) {
		imgArea( data,"#religion");
		txt(data,"#religion",".imgTtl","news",6);
	} );
	/*美食*/
	$.getJSON( imgSrc+"ajax/food.json" ).done( function( data ) {
		imgArea( data,"#food");
		txt(data,"#food",".imgTtl","news",3);
	} );
	/*生活*/
	$.getJSON( imgSrc+"ajax/life.json" ).done( function( data ) {
		imgArea( data,"#life");
		txt(data,"#life",".imgTtl","news",3);
	} );
	/*腾讯*/
	$.getJSON( imgSrc+"ajax/tx.json" ).done( function( data ) {
		txt(data,"#tx",".imgTtl","txs",6);
	} );
})();

/**
 * Created by LinChuQiang.
 */
require( [ 'indexCfg' ],function() {

	/*bbs*/
/*
	requirejs( ['jquery' ],function($) {
		"use strict";
		/!*点击放大内容框*!/
		const panels   = document.querySelectorAll( '.panel' );
		const panels1  = document.querySelectorAll( '.panel > ul' );
		const panelUls = $( '.panel > ul' );
		//console.log( 'panelUls: ' + panelUls );
		//console.log( 'panels: ' + panels );
		function toggleGrow( event ) {
			var e =event || window.event;
			var target =e.target || e.srcElement;
			console.log(target);
			this.classList.toggle( 'grow' );
			$( this ).siblings( '.panel' ).removeClass( 'grow' );
		}
		
		//panels.forEach( panel => panel.addEventListener( 'click',toggleGrow,true ) );
		$( ".panels" ).on( "click",".panel",toggleGrow );
		//panels.forEach( panel => $(panel).on( 'click',toggleGrow ) );
		
		$('.panel').on('click','ul',function(event) {
			stopBubble( event );
		});
		$('.panel.edit').on('click','div',function(event) {
			stopBubble( event );
		});
		$('.panel').on('mousedown','ul',function(event) {
			stopBubble( event );
			$(this).find('div.ih-item.circle.effect13 a h3').animate({
				fontSize:"24px",
			},1).addClass('love');
		});
		$('.panel').on('mouseup','ul',function(event) {
			stopBubble( event );
			$(this).find('div.ih-item.circle.effect13 a h3').animate({
				fontSize:"22px"
			},1).removeClass('love');
		});
		function stopBubble( e ) {
			//console.log( 'stopBubble:阻止冒泡事件触发父元素事件' );
			if( e && e.stopPropagation ) {//非IE浏览器
				e.stopPropagation();
			} else {//IE浏览器
				window.event.cancelBubble = true;
			}
		}
	} );
	*/
	/*reactJsx*/
	requirejs( [ 'bbsES5'],function() {} );
} );
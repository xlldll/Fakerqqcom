/*indexCfg跟index.js同级目录*/
//下面依赖的indexCfg模块的实际路径为 src/jsRequire/indexCfg.js
require( [ 'indexCfg' ],function() {
	requirejs( [ 'jquery' ],function( $ ) {
		var
			resLogo = $( '#resLogo' ),
			navul   = $( 'nav ul' ),
			navHref = $( 'nav ul li a' );
		
		resLogo.on( 'click',function( e ) {
			e.preventDefault();
			navul.slideToggle();
		} );
		navEffect();
		navHref.addClass( 'hvr-bounce-to-right' );
		$( window ).resize( function() {
			navEffect();
		} );
		/*切换NAV特效*/
		function navEffect() {
			var w = $( window ).width();
			if( w <= 768 ) {
				/*alert($( 'nav ul' )[0].getAttribute('style'));*/
				navul.css( 'display','none' );
				navHref.removeClass( 'hvr-bounce-to-right' ).addClass( 'hvr-shutter-out-vertical' );
			} else {
				navul.css( 'display','block' );
				navHref.removeClass( 'hvr-shutter-out-vertical' ).addClass( 'hvr-bounce-to-right' );
			}
		}
	} );
	/*占位图*/
	requirejs( [ 'holder' ],function() {} );
	/*登录注册*/
	requirejs( [ 'reglogbox' ],function() {} );
	/*滑动验证*/
	requirejs( [ 'slideAuthCode' ],function() {} );
	/*搜索下拉列表*/
	requirejs( [ 'dropdown' ],function() {} );
	requirejs( [ 'tab' ],function() {} );
	requirejs( [ 'checkRadio' ],function() {} );
	/*首屏广告*/
	requirejs( [ 'adSlider' ],function() {} );
	/*分类选取*/
	requirejs( [ 'quicksand' ],function() {} );
	/*页面耗时*/
	requirejs( [ 'costTime' ],function() {} );
} );






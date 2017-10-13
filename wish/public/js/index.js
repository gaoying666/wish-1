$(function () {
	//收藏点亮图标
	$('.b4').click(function () {
		$(this).css('background-position','-70px -46px');
	})
	
	//点击弹出弹层
	$('.picture').click(function () {
		$('#picture .one').show();
	})
	$('.quote').click(function () {
		$('#quote .two').show();
	})
	$('.link').click(function () {
		$('#link .three').show();
	})
	$('.title').click(function () {
		$('#title .four').show();
	})
	$('.audio').click(function () {
		$('#audio .five').show();
	})
	$('.video').click(function () {
		$('#video .six').show();
	})
	
	//点击弹层关闭
	$('#picture .one .gb').click(function () {
		$('#picture .one').hide();
	})
	$('#quote .two .gb').click(function () {
		$('#quote .two').hide();
	})
	$('#link .three .gb').click(function () {
		$('#link .three').hide();
	})
	$('#title .four .gb').click(function () {
		$('#title .four').hide();
	})
	$('#audio .five .gb').click(function () {
		$('#audio .five').hide();
	})
	$('#video .six .gb').click(function () {
		$('#video .six').hide();
	})
	
	//点击x关闭
	$('.close1 .close').click(function () {
		$('.close1').hide();
	})
	$('.close2 .close').click(function () {
		$('.close2').hide();
	})
	$('.close3 .close').click(function () {
		$('.close3').hide();
	})
	$('.close4 .close').click(function () {
		$('.close4').hide();
	})
})
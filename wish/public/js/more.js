window.onload=function(){
	// 获取要进行展示和收起的元素
var sqzs = document.getElementsByClassName('sqzs')[0];
// 下面是收起展开按钮
var sqzs_dj = document.getElementById('sqzs_dj');

var rmqyxz = document.getElementsByClassName('rmqyxz')[0];

sqzs_dj.onclick=(function(){
	console.log(this.innerText);
	if(this.innerText=='展开∨'){
		this.innerHTML='收起∧';
		sqzs.style='height:250px';
		rmqyxz.style='height:670px';
	}else{
		this.innerHTML='展开∨';
		sqzs.style='height:0px';
		rmqyxz.style='height:430px';

	};
});


var cvczczc = document.getElementsByClassName('cvczczc');
var gengduo_xs = document.getElementsByClassName('gengduo_xs');
var gengduo_xdjxs = document.getElementsByClassName('gengduo_xdjxs');
// gengduo_dj 被点击时候进行显示和消失
// gengduo_xdjxs 点击时候消失
for(var s=0;s<cvczczc.length;s++){
	cvczczc[s].index=s;
	cvczczc[s].onclick=function(){
		for(var z=0;z<cvczczc.length;z++){
			gengduo_xs[z].style='display:none';
		}
		gengduo_xs[this.index].style='display:block';
		
	}
	gengduo_xdjxs[s].index=s;
	gengduo_xdjxs[s].onclick=function(){
		gengduo_xs[this.index].style='display:none';
	}
}


}

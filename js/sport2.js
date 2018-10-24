//obj要操作的对象
function move(obj,target,attr){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var cur = 0;
		if(attr == "opacity"){
			cur = parseFloat(getStyle(obj,attr)) * 100;//因为getComputedStyle取出来是字符串；所以parseFloat
		}else{
			cur = parseInt(getStyle(obj,attr));//有单位 所以parseInt
		}
		
		var speed = (target - cur) / 10;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(cur == target){
			clearInterval(obj.timer);
			return;
		}
		if(attr == "opacity"){
			obj.style[attr] =  (cur + speed) / 100;
		}else{
			obj.style[attr] =  cur + speed + "px";
		}
		
	},30)
}

//获取非行内元素样式    实际值  
function getStyle(obj,attr){
	if(window.getComputedStyle){
		return window.getComputedStyle(obj)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}

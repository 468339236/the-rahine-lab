	const btn=document.getElementById("returntop");
    //var btn_top=document.getElementById("returnTop");//返回顶部
    var navbar=document.getElementById("navbar");
    var menu=document.getElementById("menu");
	var item=document.querySelectorAll('.item');
	const circle=document.querySelector('.circle');
	const circle1=document.querySelector('.circle1');
	const text=circle.innerText;
	const text1=circle1.innerText;
	// 先清空原有文本
	circle.innerText='';

	for(let i=0;i<text.length;i++){
	// 循环文本，取出单字
	let letter=text[i];
	// 创建span元素，并把单字赋给span
	let span=document.createElement('span');
	span.innerText=letter;
	// 计算每一个字的旋转角度
	let r=(360/text.length)*i;
	// 设置span的旋转角度
	span.style.transform='rotate('+r+'deg)';
	// 追加span
	circle.appendChild(span);
	}
	circle1.innerText='';

	for(let i=0;i<text.length;i++){
	// 循环文本，取出单字
	let letter=text[i];
	// 创建span元素，并把单字赋给span
	let span1=document.createElement('span');
	span1.innerText=letter;
	// 计算每一个字的旋转角度
	let r=(360/text.length)*i+180;
	// 设置span的旋转角度
	span1.style.transform='rotate('+r+'deg)';
	// 追加span
	circle1.appendChild(span1);
	}
    // btn.addEventListener('click',()=>{
       
    // //     window.scrollTo({
    // //         top:0,
    // //         left:0,
    // //         behavior:"smooth"
    // //     })
    // $("html,body").animate({scrollTop:0},"slow")
     //})
    
    function getScrolloffsets(w) {
	//使用指定窗口，如果不带参数则使用当前窗口
	w=w||window;

	//除IE 8及更早版本，其他浏览器都适用
	if(w.pageXoffset!=null)
		return {x:w.pageXoffset,y:w.pageYoffset};

	//对标准模式下的IE及任何浏览器
	var d=w.document;
	if(document.compatMode=="CSS1Compat")
		return {x:d.documentElement.scrollLeft,y:d.documentElement.scrollTop};

	//怪异模式下
	return {x:d.body.scrollLeft,y:d.body.scrollTop};
}
    function getViewportSize(w) {
	w=w||window;

	//除了IE8及更早的版本以外，其他的浏览器都能用
	if(w.innerWidth!=null)
		return {w:w.innerWidth,h:w.innerHeight};

	//标准模式下的IE或任何其他浏览器
	var d=w.document;
	if(document.compatMode=="CSS1Compat")
		return {w:d.documentElement.clientWidth,
				h:d.documentElement.clientHeight};

	//怪异模式下的浏览器
	return {w:d.body.clientWidth,h:d.body.clientHeight};
}

    window.onscroll=function(){
        if(window.pageYOffset >=menu.offsetTop){
            navbar.classList.add("sticky");
        }
        else{
            navbar.classList.remove("sticky");
        }
        
		//显示/隐藏返回顶部按钮
		if(getScrolloffsets().y>getViewportSize().h)
			btn.style.display="block";
		else
			btn.style.display="none";
	}
	function setActive(){
		item.forEach((item)=>{
			item.classList.remove('active');
		})
		this.classList.add('active');
	}
	item.forEach((item)=>{
		item.addEventListener('click',setActive);
	})
	
    
    
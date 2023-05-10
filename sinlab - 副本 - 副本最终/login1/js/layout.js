var elt_topBar=document.getElementById("topBar");//顶栏


//设置首页背景图高度等于视口高度
var h=getViewportSize(window).h;//获取视口高度
elt_topBar.style.height=h+"px";//设置高度
elt_drt.style.height=h+"px";//设置高度
elt_palace.style.height=h+"px";//设置高度
elt_co.style.height=h+"px";//设置高度

//查询窗口的视口尺寸
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
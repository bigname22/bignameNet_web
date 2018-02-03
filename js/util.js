
var MyUtil = {};
(function (){
	MyUtil.MainColor_Bla = "#34374C";
	MyUtil.MainColor_Black = "#2C2E3E";
	MyUtil.MainColor_Red = "#EE2B47";
	/* 
	当鼠标移动到功能块面板时：
	改变背景颜色、字体颜色
	*/
	MyUtil.setFunctionsBgColor = function (target,color) {
		target.css("background-color", color);
	}

	MyUtil.setFunctionsTvColor = function (target,color) {
		target.css("color", color);
	};

	//************************ 初始化代码************
	var mColorArr = [MyUtil.MainColor_Bla,  MyUtil.MainColor_Black, "#DB9019", "#5Ed5d1", "#ff6e97",  "#f1aaa6"]

	/* 设置三个功能块按钮鼠标滑过样式 */
	var pFuncArr = [$("#pFunc1"),$("#pFunc2"),$("#pFunc3")]
	for (let i =0; i <  pFuncArr.length; i++) {
		pFuncArr[i].mouseover(function () {
			MyUtil.setFunctionsTvColor(pFuncArr[i],"#fff");
			MyUtil.setFunctionsBgColor(pFuncArr[i],MyUtil.MainColor_Black);
		});

		pFuncArr[i].mouseout(function () {
			MyUtil.setFunctionsTvColor(pFuncArr[i],"#000");
			MyUtil.setFunctionsBgColor(pFuncArr[i],"#fff");
		})
	}

	/* 设置小功能按钮初始颜色（随机）*/
	var pLittleFuncArr = [$(".btn_login"), $(".btn_stay"),  $(".btn_write")]
	for (let i = 0; i < pLittleFuncArr.length; i++) {
		let btnItem = pLittleFuncArr[i];
		let colorIndex = parseInt(Math.random()*6)
		btnItem.css("color", mColorArr[colorIndex]);
		btnItem.css("border-color", mColorArr[colorIndex]);
	}
	

})();
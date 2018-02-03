# bignameNet_web
**1小时就能搭建这么简约漂亮的个人网站（Bootstrap）**

各位客官留下你的小星星☆，star一下！我前进的动力。

有一个搭建自己个人网站的想法，把自己的一些技术文章、日记、创业想法等等统统寄托在这里。
后台前端统统来一套！
**首先是前端！**
先上这个长得好看的效果图。
![这里写图片描述](http://img.blog.csdn.net/20180203160518553?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmlnbmFtZTIy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
###概述
目前为只完成了该页面的UI开发，暂时没有实现与后台交互的功能。现在在学习ssm框架的搭建，争取过年前搞定后台的基本接口。然后把这个页面的登录、技术文章、随手记与后台交互的功能完成了。

**希望各位可以去我的github地址添个小星星☆，最新的额代码会更新在这，哈哈。**

[CSDN博客地址](https://github.com/bigname22/bignameNet_web)

###文章
文章也会分名为**BG前端**，**BG后端**两个板块，专门用于记录该项目的问题；按进度更新文章。

###苦水
一个Android开发者，搞这些有点吃力，不过很开心，把工作推到年后，现在可以安安心心学习一下，搞下自己想做的东西！
首先要入手的便是用了1天的时间学习bootstrap的使用，第二天便实践。

##实践开始
####**1.准备Jq、BootStrap的所需要的材料**
![这里写图片描述](http://img.blog.csdn.net/20180203153413173?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmlnbmFtZTIy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
####**2.创建index.html引进jq、bootstrap文件**
![这里写图片描述](http://img.blog.csdn.net/20180203153639838?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmlnbmFtZTIy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
![这里写图片描述](http://img.blog.csdn.net/20180203153656678?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmlnbmFtZTIy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
####**3.实现**
![这里写图片描述](http://img.blog.csdn.net/20180203155300820?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmlnbmFtZTIy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
#####**3.1轮播图：**
代码主要参照bootstrap官网提供的示例，html代码按排班分段给出、css、js代码最后一起贴出
```
<!-- 图片轮播 -->
	<!-- 圆点 -->
  	<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  		<!-- Indicators -->
  		<ol class="carousel-indicators">
  			<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
  			<li data-target="#carousel-example-generic" data-slide-to="1"></li>
  			<li data-target="#carousel-example-generic" data-slide-to="2"></li>
  			<li data-target="#carousel-example-generic" data-slide-to="3"></li>
  			<li data-target="#carousel-example-generic" data-slide-to="4"></li>
  			<li data-target="#carousel-example-generic" data-slide-to="5"></li>
  		</ol>

  		<!-- 内容 -->
  		<div class="carousel-inner" role="listbox">
  			<div class="item active">
  				<img src="img/ic_p4.jpg">
  				<p class="carousel-caption">
  					骑马
  				</p>
  			</div>
  			<div class="item">
  				<img src="img/ic_p5.jpg">
  				<p class="carousel-caption">
  					骑马
  				</p>
  			</div>
  			<div class="item">
  				<img src="img/ic_p6.jpg">
  				<p class="carousel-caption">
  					骑马
  				</p>
  			</div>
  			<div class="item">
  				<img src="img/ic_p7.jpg">
  				<p class="carousel-caption">
  					骑马
  				</p>
  			</div>
  			<div class="item">
  				<img src="img/ic_p8.jpg">
  				<p class="carousel-caption">
  					骑马
  				</p>
  			</div>
  			<div class="item">
  				<img src="img/ic_p9.jpg">
  				<p class="carousel-caption">
  					骑马
  				</p>
  			</div>
  		</div>

  		<!-- 切换按钮 -->
  		<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
  			<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
  			<span class="sr-only">Previous</span>
  		</a>
  		<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
  			<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
  			<span class="sr-only">Next</span>
  		</a>
  	</div>
```
#####**3.2大功能块**
店铺：放为了放我今年计划开淘宝店商品的目录，以及我喜欢的一些物品的连接。
纪念馆：放一些阶段性的具有意义的文章、照片等
私人角落：放日记、技术文章等

```
<!-- 功能模块 -->
  	<div class="row div_function">
  		<div class="col-xs-4">
  			<div class="panel panel-default" id="pFunc1">
  				<div class="panel-body">
  					<strong>店铺</strong>
  					<img class="iv_function" src="img/ic_store.svg">
  				</div>
  			</div>
  		</div>
  		<div class="col-xs-4">
  			<div class="panel panel-default"  id="pFunc2">
  				<div class="panel-body">
  					<strong>纪念馆</strong>
  					<img class="iv_function" src="img/ic_remeber.svg">
  				</div>
  			</div>
  		</div>
  		<div class="col-xs-4">
  			<div class="panel panel-default"  id="pFunc3">
  				<div class="panel-body">
  					<strong>私人角落</strong>
  					<img class="iv_function" src="img/ic_personal.svg">
  				</div>
  			</div>
  		</div>
  	</div>
```
#####**3.3技术世界**
这里是展示自己的技术文章，使用bootstrap列表样式

```
<!-- 技术日记 -->
  	<div class="container div_divider">
  		<!-- 分割线 -->
  		<hr class="hr_1">Bigname Technology World !<hr class="hr_2">
  		<div class="row">
  			<!-- 文章列表 -->
  			<div class="col-xs-9">
  				<div class="list-group div_article">
  					<!-- 子头栏 -->
  					<a href="#" class="list-group-item active item_article_first">
  						<h4 class="list-group-item-heading">
  							My Life, Like Sun!
  						</h4>
  					</a>
  					<!-- 文章列表 -->
  					<div class="list-group-item item_article">
  						<div class="row">
  							<div class="div_center col-xs-9">
  								<div class="list-group-item-heading div_article_title">
  									<strong>
  										Android框架设计理念
  									</strong>
  								</div>
  								<p class="list-group-item-text div_article_content">
  									所有设计源于生活，框终点在于分层、层与层之间如何交流。
  								</p>
  							</div>
  							<!-- 右侧图片，信息 -->
  							<div class="col-xs-3 div_right_info">
  								<img class="iv_article img-rounded" src="img/ic_android1.jpg">
  							</div>
  						</div>
  					</div>
  					<div class="list-group-item item_article">
  						<div class="row">
  							<div class="div_center col-xs-9">
  								<div class="list-group-item-heading div_article_title">
  									<strong>
  										Android框架设计理念
  									</strong>
  								</div>
  								<p class="list-group-item-text div_article_content">
  									所有设计源于生活，框终点在于分层、层与层之间如何交流。
  									所有设计源于生活，框终点在于分层、层与层之间如何交流。
  									所有设计源于生活，框终点在于分层、层与层之间如何交流。
  								</p>
  							</div>
  							<!-- 右侧图片，信息 -->
  							<div class="col-xs-3 div_right_info">
  								<img class="iv_article img-rounded" src="img/ic_android1.jpg">
  							</div>
  						</div>
  					</div>
  					<div class="list-group-item item_article">
  						<div class="row">
  							<div class="div_center col-xs-9">
  								<div class="list-group-item-heading div_article_title">
  									<strong>
  										Android框架设计理念
  									</strong>
  								</div>
  								<p class="list-group-item-text div_article_content">
  									所有设计源于生活，框终点在于分层、层与层之间如何交流。
  									所有设计源于生活，框终点在于分层、层与层之间如何交流。
  									所有设计源于生活，框终点在于分层、层与层之间如何交流。
  									所有设计源于生活，框终点在于分层、层与层之间如何交流。
  									所有设计源于生活，框终点在于分层、层与层之间如何交流。
  								</p>
  							</div>
  							<!-- 右侧图片，信息 -->
  							<div class="col-xs-3 div_right_info">
  								<img class="iv_article img-rounded" src="img/ic_android2.jpg">
  							</div>
  						</div>
  					</div>
  					<div class="list-group-item item_article">
  						<div class="row">
  							<div class="div_center col-xs-9">
  								<div class="list-group-item-heading div_article_title">
  									<strong>
  										Android框架设计理念
  									</strong>
  								</div>
  								<p class="list-group-item-text div_article_content">
  									所有设计源于生活，框终点在于分层、层与层之间如何交流。
  									所有设计源于生活，框终点在于分层、层与层之间如何交流。
  									所有设计源于生活，框终点在于分层、层与层之间如何交流。
  									所有设计源于生活，框终点在于分层、层与层之间如何交流。
  									所有设计源于生活，框终点在于分层、层与层之间如何交流。
  									所有设计源于生活，框终点在于分层、层与层之间如何交流。
  									所有设计源于生活，框终点在于分层、层与层之间如何交流。
  									所有设计源于生活，框终点在于分层、层与层之间如何交流。
  								</p>
  							</div>
  							<!-- 右侧图片，信息 -->
  							<div class="col-xs-3 div_right_info">
  								<img class="iv_article img-rounded" src="img/ic_android3.jpg">
  								<div>2017/12/9 12:09</div>
  							</div>
  						</div>
  					</div>
  				</div>
  			</div>
```
#####**3.4个人标签、随手记心情**

```
<!-- 右侧 -->
  			<div class="col-xs-3 div_record">
  				<!-- 用户信息 -->
  				<div class="jumbotron div_userinfo">
  					<img class="iv_user_head img-circle" src="img/ic_p5.jpg">
  					<div style="display: inline-block; margin-left: 12px;font-size: 18px;">梁世杰</div>
  				</div>
  				<!-- 随手记录 -->
  				<div style="display: flex;">
  					<div style="flex: 1"><hr></div>
  					<div style="text-align: center;line-height: 48px;color: #34374C">记录美好的心情</div>
  					<div style="flex: 1"><hr></div>
  				</div>
  				<input type="text" class="form-control" placeholder="标题:美好的一天...">
  				<br>
  				<textarea class="form-control" rows="3" name=textarea placeholder="内容:今天捡到一分钱！！！^_^"></textarea>
  				<br>
  				<div class="div_save">
  					<button type="button" class="btn btn-primary btn_save_record">save</button>
  				</div>
  				<hr>
  				<!-- 小功能列表 -->
  				<div class="row div_little_func">
  					<div class="col-xs-4">
  						<button class="btn btn-default btn-cricle btn_login" data-toggle="modal" data-target="#loginModal">登</button>
  					</div>
  					<div class="col-xs-4">
  						<button class="btn btn-default btn-cricle btn_stay">留</button>
  					</div>
  					<div class="col-xs-4">
  						<button class="btn btn-default btn-cricle btn_write">写</button>
  					</div>
  				</div>
  			</div>
  		</div>
```
#####**3.5登录模态框**
![这里写图片描述](http://img.blog.csdn.net/20180203155616303?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmlnbmFtZTIy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

```
<!-- 登录模态框 -->
  		<div class="modal fade bs-example-modal-sm" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
  			<div class="modal-dialog modal-sm" role="document">
  				<div class="modal-content">
  					<div class="modal-header">
  						<div class="modal-title" id="myModalLabel" style="text-align: center;">登录</div>
  					</div>
  					<div class="modal-body">
  						<form class="form-horizontal" style="padding: 12px;">
  							<div class="form-group">
  								<input type="text" class="form-control" id="inputEmail3" placeholder="账户名">  		
  							</div>
  							<div class="form-group">			
  								<input type="password" class="form-control" id="inputPassword3" placeholder="密码">
  							</div>
  						</form>
  					</div>
  					<div class="modal-footer" style="text-align: center;">
  						<button type="button" class="btn btn-primary" style="width: 100%">Login</button>
  					</div>
  				</div>
  			</div>
  		</div>
```

各个效果的代码如上，多看bootstrap官网！没有完成不了的事。同时说一下，jq也是第一次用，庆幸没出现什么问题，这么简单也不应该出现什么问题。~~~~(>_<)~~~~
在接触前端的时候，是粗暴的学习了一个月的html+css+js，然后学习Vue、Ionic框架的，所以这些解除有点晚了，还倒过来学了，哈哈。不过不影响。

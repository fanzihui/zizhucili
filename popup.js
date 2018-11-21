// ==UserScript==
// @name         蜘蛛磁力搜索弹窗版
// @namespace    https://zizhucili.com
// @version      0.1
// @description  搜索想看的视频,书籍,软件的磁力链接,方便高效,想搜什么搜什么
// @author       Fructose
// @match        *://*/*
// @grant        GM_addStyle
// @require      https://code.jquery.com/jquery-3.1.0.js
// @license      MIT
// @icon         https://cdn-img.easyicon.net/png/376/37643.gif
// ==/UserScript==

(function() {
    'use strict';
      GM_addStyle(`#zizhuPopupMain{position:fixed;bottom:20px;right:0;background: #fff;z-index: 999;}
                 #zizhuPopupMain-hd{height:30px;font-size:14px;background:#4d90fe;line-height:30px;padding:0 10px;color:#fff;box-sizing:border-box;cursor: pointer;}
                 #zizhuPopupMain-bd{height:60px;padding:10px;box-sizing:border-box;border:1px solid #ccc}
                 #zizhuPopupMainInput{display:inline-block;width:210px;height:40px;padding:0 10px;box-sizing:border-box;outline:0;border:1px solid #ccc}
                 #zizhuPopupMainBtn{display:inline-block;width:60px;height:40px;text-align:center;line-height:42px;color:#fff;text-decoration:none;background:#4d90fe;font-size:13px;margin-left:-4px}
                 .zizhuPopupMainSmallHead{width:104px}`)
    // 添加内容
    var smallCnt = `<div id="zizhuPopupMain-hd">
			蜘蛛磁力搜索<small>(点击可缩小)</small>
		</div>
		<div id="zizhuPopupMain-bd">
			<input type="text" name="" placeholder="电影,小说,动漫等等,想看的全都有" id="zizhuPopupMainInput" />
			<a href="javascript:void(0);" id="zizhuPopupMainBtn">搜索</a>
		</div>`
    // 添加到 body
    var odom = document.createElement("div");
    odom.id = "zizhuPopupMain";
    odom.innerHTML = smallCnt;
    document.body.appendChild(odom);
    // 点击 hd 事件
    $('#zizhuPopupMain-hd').click(function(){
		$('#zizhuPopupMain').toggleClass('zizhuPopupMainSmallHead')
		$('#zizhuPopupMain-bd').slideToggle()
	})
    //点击搜索事件
    $('#zizhuPopupMainBtn').click(function(){
		let val = $('#zizhuPopupMainInput').val();
		if(val != '' && val != null && val != undefined){
			console.log(val)
			$(this).attr({
				href:'https://zizhucili.com/s/'+val+'/time-1.html',
				target: '_blank'
			})
		}
	})
    // 回车事件
    $('#zizhuPopupMainInput').keydown(function(e){
		if(e.keyCode == 13) {
			let val = $('#zizhuPopupMainInput').val();
			if(val != '' && val != null && val != undefined){
				window.open('https://zizhucili.com/s/'+val+'/time-1.html')
			}
		}
	})
})();
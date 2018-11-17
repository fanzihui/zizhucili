// ==UserScript==
// @name         蜘蛛磁力搜索
// @namespace    https://zizhucili.com
// @version      0.0.2
// @description  搜索想看的视频,书籍,软件的磁力链接,方便,节省时间
// @author       Fructose
// @match        *://*/*
// @grant        GM_addStyle
// @require      https://code.jquery.com/jquery-3.1.0.js
// @license      MIT
// @icon         https://cdn-img.easyicon.net/png/376/37643.gif
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`#zizhuIcon {width: 36px; height: 36px;box-shadow: 2px 2px 4px rgba(12,12,12,.3); border-radius: 5px; cursor: pointer;}
                 #zizhuMain {position: absolute; top: 0; left: 0; width: 0; height: 0; padding: 2px; background: #fff; font-size: 12px; opacity: 0;}`)
    var innerIcon = "<img src='https://cdn-img.easyicon.net/png/376/37643.gif' id='zizhuIcon' alt='蜘蛛磁力搜索' title='蜘蛛磁力搜索'/>"
    var txt = ''
    var odom = document.createElement("div");
    odom.id = "zizhuMain";
    odom.innerHTML = innerIcon;
    document.body.appendChild(odom);
    document.querySelector("#zizhuMain").addEventListener("click",searchSetting);
    function searchSetting(){
       location.href="https://zizhucili.com/s/"+txt
    }
    $('body').mouseup(function(e){
        txt = window.getSelection?window.getSelection().toString():document.selection.createRange().text;
        let sel = window.getSelection()
        var range = sel.getRangeAt(0);
        var rect = range.getBoundingClientRect();
        var scrollH = $(document).scrollTop();
        var scrollW = $(document).scrollLeft();
        if(txt){
            $('#zizhuMain').css({ "top": rect.y+scrollH+24+'px', "left": rect.x+scrollW+'px','opacity':1,'width':'36px','height':'36px' })
        } else {
            $('#zizhuMain').css({'opacity':0 ,'width':'0','height':'0' })
        }
    })
})();
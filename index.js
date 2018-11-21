// ==UserScript==
// @name         磁力猪搜索
// @namespace    https://pigcili.com
// @version      0.0.1
// @description  磁力猪随时随地搜索磁力信息,一键搜索,超高效
// @author       小猪猪
// @match        *://*/*
// @grant        GM_addStyle
// @require      https://code.jquery.com/jquery-3.1.0.js
// @license      MIT
// @icon         https://cdn-img.easyicon.net/png/376/37643.gif
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`#pigIcon {width: 36px; height: 36px;box-shadow: 2px 2px 4px rgba(12,12,12,.3); border-radius: 5px; cursor: pointer;}
                 #pigMain {position: absolute; top: 0; left: 0; width: 0; height: 0; padding: 2px; background: #fff; font-size: 12px; opacity: 0;z-index: 9999;}`)
    var innerIcon = "<img src='https://cdn-img.easyicon.net/png/376/37643.gif' id='pigIcon' alt='蜘蛛磁力搜索' title='蜘蛛磁力搜索'/>"
    var txt = ''
    var odom = document.createElement("div");
    odom.id = "pigMain";
    odom.innerHTML = innerIcon;
    document.body.appendChild(odom);
    document.querySelector("#pigMain").addEventListener("click",searchSetting);
    function searchSetting(){
       location.href="https://pigcili.com/s/"+txt
    }
    $('body').mouseup(function(e){
        txt = window.getSelection?window.getSelection().toString():document.selection.createRange().text;
        let sel = window.getSelection()
        var range = sel.getRangeAt(0);
        var rect = range.getBoundingClientRect();
        var scrollH = $(document).scrollTop();
        var scrollW = $(document).scrollLeft();
        if(txt){
            $('#pigMain').css({ "top": rect.y+scrollH+24+'px', "left": rect.x+scrollW+'px','opacity':1,'width':'36px','height':'36px' })
        } else {
            $('#pigMain').css({'opacity':0 ,'width':'0','height':'0' })
        }
    })
})();
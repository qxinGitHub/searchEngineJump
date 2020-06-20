// ==UserScript==
// @name           searchEngineJump 搜索引擎快捷跳转
// @author         NLF&锐经(修改) & iqxin(再修改)
// @contributor    iqxin
// @description    方便的在各个搜索引擎之间跳转,增加可视化设置菜单,能更友好的自定义设置,修复百度搜索样式丢失的问题
// @version        5.21.2
// @created        2011-07-02
// @lastUpdated    2020-05-04

// @namespace      https://greasyfork.org/zh-CN/scripts/27752-searchenginejump
// @homepage       https://github.com/qxinGitHub/searchEngineJump

// @icon           data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFSElEQVR4nMWXX4hdVxXGf2vfe89kJg61ia0DYzMTMWnoQ0FJtKmtJsFixT8DBSmYtGMLgq0PCqMEKwmxYzSGyUPBB7XRNi0FC6JtwYovgcS0klJD8SHakoExYhLQFkwn9/aeOfv7fDi3SStJ5o4muN4O7L32b33rz94H/s8WS10cvR3yVQaY++wnkESkwDK2sMy1EwXDtzRRziBhu+dGDG48smSA5kUP//wmAFIkrNwiGMOsBzYAQwTzEEeBY8BJO1fYtF+4laGPv/i/Afz1C1sAYwngZiKmsDcDI0DrHUtL4DRwMGAmUnVcCtpHPsrQbS/1DZDe+VFHblKziIjYBjwD3Iu5ARBwBjgJnAkwMAa+z+ZZqXEX8VZg0T784aUDzH3uk0DtVQvlVsMjwGpMB3gauAu8ieB2YDPwxR5gF/gQ+MeoNUFzACI4d+imvgDOp0BVRWo2AW62eRi8wvY/wNtrgGhDL+7a/gIcBLYBu4HrsPdSzr8K/JlcLk2BaCQstSxN2VptuYO93an7WES0UyORGg1Wfu0QKivyQhfb56yhn4B3Ynew1kD1oDTfJF20vi8NYBvjMVubbWHrOdtPhwaAYPVvfs8Hf1u32bJbDtXVbgFvAj4AOgTGzhPhGMdV/wCvbtmAJSyttzRiuWv7CdttAlY/f/iimwdvfQGiAfmtczg/jnOJ8/txtRbnvgAu6FSPtg1AC3wGPAvgWGRYqiSowLwC1Ru4GoFyFPc3ZM8DfGPLB1jZXlhe74sS6AAc+O6vL+tg6LaX2LP/SSA6tkpcYeee36/0D/C7Ve9BwZs97iLMEMDAE5N07z1wSQebvl/y3KkAGDIUsrHpRp8ACeDGw38kZdPMPtrILhvZ1yZ5TZJxvnwuW40GzSSaDa1vJq1oJXVbKZ9qpv5qoO6Cqr5ULB+zfNrygOX7LS+PlCgeu+eimz/1w0yWaTTScIqYTEERcDoiXovFauddAAA22CeRDyKD/Bnkbd32PNgUj09S/GwrUMt+x14hiWVFI1LEVyPidggi4hfOnuv3nr8AEGC5sj1j+4TtAcu7i4HlDwLLqRawMmtmnidn6JYLGIa7C/mbwHeAgYATQexPjVCVxcZd7SUACDCEfRyznXoMr8Sawf4lcDdwI7AKWAdss/0r2dOyr6kFpCn7hiyPRlDY5mM7z10W4F1KFT+/p6ZwDkgT2HuN19Tz3yXWG+NnJ8uR9h0FSStSRAFBwAmbpu3xbP/T9rzkp2zvtt2RzcvfG15EAaC8/8m6FkgmpWdsTyD/COtv9esnj1haZXvEtiXP2d5jc6es+3qHv8/2uO1v2d4hedA2H/n2vxZX4LwS+78E1PcDqprAOPZao9Gxs5PNkc6dXUKnIuI1Z8+lRijLo8AR2+OWqeeBS8n7bE8bd2x4Zc97FwcAaP307vqyiXi7QzBi7OyXGel8GkJEBAFUWUREIXlnL/LCvgBheZ9h2lLHyvxp5rrFAZZiG3e16zliBm3vsD0lu6i5ja0awppWrjrKmeOPjAL/UQP/rf1h11BPJHckT/dkL+vDjeXC0pRy3qGcB22x9oHZKwcAcPTh5UimzrWnexGXlrCFlAvlakq5eiiX3eLtSXnFAABe3j1c/0PgTp1z77NUKmesjHMulKuttq9X/eq+sgAAx35wTZ0OqWNrWqr2KVelqoqcF3DOL1r5dStfHQCoW03K9ApuWrnam/PCnHN+StZDRHSK1jLgCnXBpeymr/8dS+SFbmH7eiu/TkQnNRrkqmL20XVXFwBg7QOzRASSsDJFaxndssPso+uu9tH92b8BowSyPc/iZtEAAAAASUVORK5CYII=

// @match          *://*/*

// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_deleteValue
// @grant       GM_setClipboard
// @grant       GM_registerMenuCommand
// @grant       GM_openInTab
// @run-at      document-end

// ==/UserScript==

(function () {
    'use strict';

    console.log("脚本: 搜索引擎快捷跳转 --- 开始执行 --- 发布者: qxin --- GitHub:https://github.com/qxinGitHub/searchEngineJump ← 问题反馈地址")
    function iqxinstart(){
        // 根据规则把搜索引擎列表插入到指定网站
        var rules = [
            // 网页搜索/////////////第一个可以当模板看
            {name: "google网页搜索",// 你要加载的网站的名字(方便自己查找)
                // 是否启用.
                enabled: true,
                // 在哪个网站上加载,正则.
                url: /^https?:\/\/www\.google(?:\.[A-z]{2,3}){1,2}\/[^?]+\?(?!tbm=)(?:&?q=|(?:[^#](?!&tbm=))+?&q=)(?:.(?!&tbm=))*$/,
                // 加载哪个类型的列表:
                // ['web'|'music'|'video'|'image'|'download'|'shopping'|'translate'|'knowledge'|'sociality']
                engineList: 'web',
                // 若固定到顶栏,是否给一个高度
                fixedTop: 52,
                // 给引擎列表的样式
                style: '\
                    margin-left: 170px;\
                    z-index: 100;\
                    margin-top:5px;\
                ',
                style_ACBaidu: '\
                    text-align: center;\
                    z-index: 100;\
                    margin-top:5px;\
                ',

                // 插入文档,相关
                // target 将引擎跳转工具栏插入到文档的某个元素
                    // (请使用xpath匹配,比如: '//*[@id="subform_ctrl"]'  或者 css匹配(请加上 'css;' 的前缀),比如: 'css;#subform_ctrl' );
                // keyword 使用 xpath 或者 css选中一个form input元素 或者 该项是一个函数,使用返回值
                // where 四种:
                    // 'beforeBegin'(插入到给定元素的前面) ;
                    // 'afterBegin'(作为给定元素的第一个子元素) ;
                    // 'beforeEnd' (作为给定元素的最后一个子元素) ;
                    // 'afterEnd'(插入到给定元素的后面);.
                insertIntoDoc: {
                    target: 'css;#appbar',
                    // keyword: function () {
                        // var input = document.getElementById('lst-ib');
                        // if (input) return input.value;
                    // },
                    keyword: '//input[@name="q"]',
                    where: 'beforeBegin',
                },
                // 修改源网页用来适应跳转栏
                stylish: 'body.vasq #hdtbMenus.hdtb-td-o{top:100px !important}'
            },
            {name: "google-hash-query",// 不刷新页面显示搜索结果的google
                enabled: true,
                url: /^https?:\/\/www\.google(?:\.[A-z]{2,3}){1,2}\/[^#]*#(?:&?q=|.+?&q=).+/,
                engineList: 'web',
                style: '\
                    margin-left: 138px;\
                    z-index: 100;\
                    margin-top:5px;\
                ',
                style_ACBaidu: '\
                    text-align: center;\
                    z-index: 100;\
                    margin-top:5px;\
                ',
                insertIntoDoc: {
                    target: 'css;#appbar',
                    keyword: function () {
                        var input = document.getElementById('lst-ib');
                        if (input) return input.value;
                    },
                    where: 'beforeBegin',
                },
                stylish: 'body.vasq #hdtbMenus.hdtb-td-o{top:100px !important}'
            },
            {name: "百度网页搜索",
                url: /^https?:\/\/www\.baidu\.com\/(?:s|baidu)/,
                enabled: true,
                engineList: "web",
                fixedTop:55,
                style: '\
                    margin-top:8px;\
                    margin-bottom: -5px;\
                    z-index: 99;\
                    margin-left: 113px;\
                ',
                style_ACBaidu: '\
                    margin-top: 8px;\
                    margin-left: -120px;\
                    margin-bottom: -5px;\
                    z-index: 99;\
                    text-align: center;\
                    padding-left:0px !important;\
                ',
                insertIntoDoc: {
                    keyword: 'css;input#kw',
                    target: 'css;#s_tab',
                    where: 'afterEnd',
                },
                stylish:".headBlock,.se_common_hint{display:none !important}"
            },
            {name: "必应网页搜索",
                url: /^https?:\/\/[^.]*\.bing\.com\/search/,
                enabled: true,
                engineList: "web",
                style: '\
                    padding-left:15px;\
                    margin-top:10px;\
                    margin-left: 100px;\
                    margin-bottom:-20px;\
                ',
                style_ACBaidu: '\
                    text-align: center;\
                    margin-left: -120px;\
                    margin-right: 0px;\
                    margin-bottom:-20px;\
                ',
                insertIntoDoc: {
                    keyword: 'css;#sb_form_q',
                    target: 'css;#b_content',
                    where: 'beforeBegin',
                },
            },
            {name: "DDG",
                url: /^https?:\/\/duckduckgo\.com\/*/i,
                enabled: true,
                engineList: "web",
                style: '\
                    padding-left:95px;\
                    margin-top:5px;\
                ',
                insertIntoDoc: {
                    keyword: '//input[@name="q"]',
                    target: 'css;#header_wrapper',
                    where: 'afterEnd',
                },
            },
            {name:"雅虎网页搜索",
                url:/^https?:\/\/search\.yahoo\.com\/search/i,
                engineList:"web",
                enabled:true,
                fixedTop:72,
                style:"\
                    margin-left:122px;\
                    margin-bottom:-4px;\
                    padding-top:6px;\
                ",
                insertIntoDoc:{
                    keyword:'css;#yschsp',
                    target:'css;#horizontal-bar',
                    where:'afterBegin',
                },
            },
            {name:"台湾雅虎网页搜索",
                url:/^https?:\/\/tw\.search\.yahoo\.com\/search/i,
                engineList:"web",
                enabled:true,
                fixedTop:52,
                style:"\
                    margin-left:-10px;\
                    margin-bottom:10px;\
                ",
                insertIntoDoc:{
                    keyword:'css;#yschsp',
                    target:'css;#results',
                    where:'afterBegin',
                },
            },
            {name:"searx",
                url:/^https?:\/\/searx\.me\/\?q/i,
                engineList:"web",
                enabled:true,
                style:"\
                    margin-left:-10px;\
                    margin-bottom:10px;\
                ",
                insertIntoDoc:{
                    keyword:'css;#q',
                    target:'css;#categories',
                    where:'beforeBegin',
                },
            },
            {name: "搜狗",
                url: /^https?:\/\/www\.sogou\.com\/(?:web|s)/,
                enabled: true,
                engineList: "web",
                fixedTop:60,
                style: "\
                        top:-46px;\
                        z-index:99;\
                        margin-left:-5px;\
                ",
                style_ACBaidu: "\
                        top:-46px;\
                        z-index:99;\
                        margin-left:60px;\
                        padding-left: 0px !important;\
                ",
                insertIntoDoc: {
                    keyword: "css;#upquery",
                    target: "css;#wrapper",
                    where: "afterBegin",
                },
                stylish:"#float_uphint{display:none;}",
            },
            {name:"yandex",
                url:/^https?:\/\/yandex\.com\/search/i,
                engineList:"web",
                enabled:true,
                fixedTop:56,
                style:"\
                    margin-top:10px;\
                    padding-left:130px;\
                ",
                insertIntoDoc:{
                    keyword:'css;.input__control',
                    target:'css;.navigation',
                    where:'beforeBegin',
                },
            },
            {name: "google网页分类搜索",
                enabled: true,
                url: /^https?:\/\/www\.google(?:\.[A-z]{2,3}){1,2}\/[^?]+\?(?:tbm=)(?:&?q=|(?:[^#](?!&tbm=))+?&q=)(?:.(?!&tbm=))*$/,
                engineList: 'web',
                style: '\
                    margin-left: 142px;\
                    z-index: 100;\
                    margin-top:5px;\
                ',
                insertIntoDoc: {
                    target: 'css;#appbar',
                    keyword: '//input[@name="q"]',
                    where: 'beforeBegin',
                },
                stylish: 'body.vasq #hdtbMenus.hdtb-td-o{top:100px !important}'
            },
            {name: "startpage",
                enabled: true,
                url:/^https?:\/\/www\.startpage\.com\/do\/asearch/i,
                engineList: 'web',
                fixedTop:69,
                style: '\
                    z-index: 100;\
                    margin-left: 260px;\
                ',
                insertIntoDoc: {
                    target: 'css;.column--main',
                    keyword: '//input[@name="query"]',
                    where: 'beforeBegin',
                },
            },
            {name:"mijisou",
                url:/^https?:\/\/mijisou.com\/\?q/i,
                engineList:"web",
                enabled:true,
                fixedTop:75,
                style:"\
                    margin-left:-10px;\
                    margin-bottom:10px;\
                ",
                insertIntoDoc:{
                    keyword:'css;#q',
                    target:'css;#cat',
                    where:'beforeBegin',
                },
                stylish:'.default-container{margin-top:50px;}',  // 此处应该仅在需要置顶的时候才会有影响，后期需要在加一个判断，2019-04-19 22:52:38
            },
            {name: "infinitynewtab",
                enabled: true,
                url:/^https?:\/\/google\.infinitynewtab\.com\/\?q/i,
                engineList: 'web',
                style: '\
                    z-index: 100;\
                    margin-top: 20px;\
                ',
                insertIntoDoc: {
                    target: 'css;.search-types',
                    // keyword: 'css;input.gsc-input',
                    keyword: '//input[@name="search"]',
                    where: 'afterBegin',
                },
            },
            {name: "dogedoge",
                enabled: true,
                url:/^https?:\/\/www\.dogedoge\.com\/results\?q/i,
                engineList: 'web',
                fixedTop: 105,
                style: '\
                    z-index: 100;\
                ',
                insertIntoDoc: {
                    target: 'css;#links_wrapper',
                    // keyword: 'css;input.gsc-input',
                    keyword: '//input[@name="q"]',
                    where: 'afterBegin',
                },
            },

            // 知识
            {name: "百度百科词条",
                url: /^https?:\/\/baike\.baidu\.com\/item/,
                engineList: "knowledge",
                fixedTop:65,
                enabled: true,
                style: "\
                    text-align: center;\
                    z-index: 999999;\
                    background: #fff;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#query',
                    target: 'css;.navbar-wrapper',
                    where: 'beforeBegin',
                },
            },
            {name: "百度百科搜索",
                url: /^https?:\/\/baike\.baidu\.com\/search/,
                engineList: "knowledge",
                enabled: true,
                fixedTop:56,
                style: "\
                    padding-left: 120px;\
                    margin: 5px 0 -10px 0px;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#query',
                    target: 'css;.header-wrapper',
                    where: 'afterEnd',
                },
            },
            {name: "百度文库",
                url: /^https?:\/\/wenku\.baidu\.com\/search/i,
                engineList: "knowledge",
                enabled: true,
                style: "\
                    border-top: 1px solid #e5e5e5;\
                    padding-left:121px;\
                    border-bottom: 1px solid #e5e5e5;\
                    margin-bottom: 1px;\
                ",
                insertIntoDoc: {
                    keyword: function(){
                        var str = document.querySelector("#kw").value;
                        return str;
                        },
                    target: 'css;#hd',
                    where: 'afterEnd',
                },
            },
            {name: "百度知道",
                url: /^https?:\/\/zhidao\.baidu\.com\/search/i,
                engineList: "knowledge",
                enabled: true,
                style: "\
                    border-top: 1px solid #e5e5e5;\
                    border-bottom: 1px solid #e5e5e5;\
                    margin-bottom: 1px;\
                    margin-left:112px;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#kw',
                    target: 'css;#header',
                    where: 'afterEnd',
                },
            },
            {name: "维基百科",
                url: /^https?:\/\/\D{2,5}\.wikipedia\.org\/wiki/i,
                engineList: "knowledge",
                enabled: true,
                style: "\
                        position: absolute;\
                        padding-left: 14em;\
                ",
                insertIntoDoc: {
                    keyword: function(){
                        var url = window.location.href.substring(window.location.href.lastIndexOf("/")+1);
                        return decodeURIComponent(url);
                        },
                    target: 'css;#mw-head',
                    where: 'afterBegin',
                },
            },
            {name: "知乎",
                url: /^https?:\/\/www\.zhihu\.com\/search\?/i,
                engineList: "knowledge",
                enabled: true,
                fixedTop:50,
                style: "\
                    margin: 5px auto 0px;\
                    width:960px;\
                    z-index:19;\
                    background: #fff;\
                    box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);  \
                    padding: 5px 20px; \
                ",
                // 兼容“知乎排版优化”
                    // https://greasyfork.org/zh-CN/scripts/21659
                style_ZhihuChenglinz: "\
                    margin: 5px auto 0px;\
                    width:654px;\
                    z-index:19;\
                    background: #fff;\
                    box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);  \
                    padding: 5px 20px; \
                ",
                insertIntoDoc: {
                    keyword: 'css;.Input',
                    target:"css;.App-main .SearchTabs",
                    where: 'afterEnd', //beforeBegin
                },
                stylish:".TopSearch.Card{margin:30px auto;}",
            },
            {name: "互动百科搜索页",
                url: /^https?:\/\/so\.baike\.com\/doc/i,
                engineList: "knowledge",
                enabled: true,
                style: "\
                    border-top: 1px solid #e5e5e5;\
                    text-align: center;\
                    border-bottom: 1px solid #e5e5e5;\
                    margin-bottom: 1px;\
                ",
                insertIntoDoc: {
                    keyword: 'css;.ac_input',
                    target: 'css;.bk-head',
                    where: 'afterEnd',
                },
            },
            {name: "互动百科词条页",
                url: /^https?:\/\/www\.baike\.com\/wiki/i,
                engineList: "knowledge",
                enabled: true,
                style: "\
                    border-top: 1px solid #e5e5e5;\
                    text-align: center;\
                    border-bottom: 1px solid #e5e5e5;\
                    margin-bottom: 1px;\
                ",
                insertIntoDoc: {
                    keyword: 'css;.ac_input',
                    target: 'css;.bk-head',
                    where: 'afterEnd',
                },
            },
            {name: "豆丁文档",
                url: /^https?:\/\/www\.docin\.com\/search\.do/,
                engineList: "knowledge",
                enabled: true,
                style: "\
                    text-align: center;\
                    margin:0 auto;\
                    padding-top:1px;\
                    border-top:1px solid #00000;\
                    border-bottom:1px solid #D9E1F7;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#topsearch',
                    target: 'css;.doc_hd_mini',
                    where: 'afterEnd',
                },
            },
            {name: "知乎(搜狗)",
                   url: /^https?:\/\/zhihu\.sogou\.com\/zhihu/,
                   enabled: true,
                   engineList: 'web',
                   fixedTop:55,
                   style: "\
                      margin: auto;\
                      width: 1000px;\
                      z-index:99;\
                   ",
                   insertIntoDoc: {
                      keyword: 'css;#upquery',
                      target: 'css;#header',
                      where: 'afterEnd',
                   },
                   stylish: '.header{ margin-bottom: 5px; }'
            },
            {name: "微信搜狗",
                url: /^https?:\/\/weixin\.sogou\.com\/weixin\?/,
                enabled: true,
                engineList: "web",
                fixedTop:55,
                style: "width: 1000px;margin: 8px auto -5px;z-index:99;",
                insertIntoDoc: {
                    keyword: "//input[@name='query']",
                    target: "css;.header-box",
                    where: "afterEnd",
                },
            },
            {name: "Quora",
                       // https://www.quora.com/search?q=china
                url:  /^https?:\/\/www\.quora\.com\/search\?/i,
                enabled: true,
                engineList: "knowledge",
                fixedTop:53,
                style: "width: 1000px;margin: 0px auto 0px; padding-left:180px;",
                insertIntoDoc: {
                    keyword: function(){
                        var url = window.location.href.substring(window.location.href.lastIndexOf("=")+1);
                        return decodeURIComponent(url);
                        },
                    target: "css;.SiteHeader",
                    where: "beforeEnd",
                },
            },
            {name: "stackoverflow",
                url: /^https?:\/\/stackoverflow\.com\/search\?/i,
                enabled: true,
                engineList: "knowledge",
                fixedTop:50,
                style: "width: 1000px;margin: 8px auto 0px;z-index:99;",
                insertIntoDoc: {
                    keyword: "//input[@name='q']",
                    target: "css;.top-bar",
                    where: "afterEnd",
                },
            },


            // 视频网站
            {name: "优酷",
                url: /^https?:\/\/www\.soku\.com\/search_video\//,
                engineList: "video",
                enabled: true,
                fixedTop:54,
                style: "\
                    width:1190px;\
                    margin:0 auto;\
                    z-index:99999;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#headq',
                    target: 'css;.sk_container',
                    where: 'beforeBegin',
                },
            },
            {name: "土豆",
                url: /^https?:\/\/www\.soku\.com\/t\/nisearch\//,
                enabled: true,
                engineList: "video",
                style: "\
                    padding-left: 10px;\
                    border-top: 1px solid #FC6500;\
                    border-bottom: 1px solid #FC6500;\
                    text-align: center;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#headq',
                    target: 'css;body > .sk_container',
                    where: 'beforeBegin',
                },
            },
            {name: "哔哩哔哩",
                url: /^https?:\/\/search\.bilibili\.com\/all/,
                enabled: true,
                engineList: "video",
                fixedTop:50,
                style: "\
                    width:980px;\
                    margin:10px auto -5px;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#search-keyword',
                    target: 'css;.filter-wrap',
                    where: 'beforeBegin',
                },
            },
            {name: "AcFun",
                url: /^https?:\/\/www\.acfun\.cn\/search/,
                enabled: true,
                engineList: "video",
                fixedTop:46,
                style: "\
                    width:980px;\
                    margin: 0 auto;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#search-text',
                    target: 'css;.search-nav',
                    where: 'afterBegin',
                },
            },
            {name: "YouTube",
                url: /^https?:\/\/www\.youtube\.com\/results/,
                enabled: true,
                engineList: "video",
                fixedTop:56,
                style: "\
                    z-index:0;\
                    margin-top: 62px;\
                    margin-bottom: -80px;\
                    text-align: center;\
                ",
                insertIntoDoc: {
                    keyword: 'css;input#search',
                    target: 'css;#page-manager',
                    where: 'beforeBegin',
                },
            },
            {name: "niconico",
                url: /^https?:\/\/www\.nicovideo\.jp\/search\//,
                enabled: true,
                engineList: "video",
                style: "\
                    border-top: 1px solid #E8E8E8;\
                    border-bottom: 1px solid #E8E8E8;\
                    text-align: center;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#search_united',
                    target: 'css;.tagListBox',
                    where: 'beforeBegin',
                },
            },
            {name: "Iqiyi",
                 url: /^https?:\/\/so\.iqiyi\.com\/so\/q/,
                 enabled: true,
                 engineList: "video",
                 fixedTop:60,
                 style: '\
                        margin:0 auto;\
                        width:1180px;\
                        ',
                 insertIntoDoc: {
                    keyword: 'css;#data-widget-searchword',
                    target: 'css;.mod_search_header',
                    where: 'afterEnd'
                 },
            },
            {name: "腾讯视频",
                    url: /^https?:\/\/v\.qq\.com\/x\/search/i,
                    engineList: "video",
                    enabled: true,
                    fixedTop:60,
                    style: "width:1140px;margin:0 auto;",
                    insertIntoDoc: {
                       keyword: 'css;#keywords',
                       target: 'css;.site_head_simple',
                       where: 'afterEnd',
                    },
            },


            // 音乐
            {name: "百度音乐",
                url: /^https?:\/\/music\.baidu\.com\/search/,
                enabled: true,
                engineList: "music",
                style: "\
                    border-top: 0px solid #0064C4;\
                    margin-bottom: 5px;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#ww',
                    target: 'css;.nav-wrapper',
                    where: 'beforeBegin',
                },
            },
            {name: "一听音乐",
                url: /^https?:\/\/so\.1ting\.com\/all\.do/,
                enabled: true,
                engineList: "music",
                style: "\
                    text-align: center;\
                    border-bottom: 1px solid #13B310;\
                    border-top: 1px solid #13B310;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#keyword',
                    target: 'css;.nav',
                    where: 'beforeBegin',
                },
            },
            {name: "xiami",
                url: /^https?:\/\/www\.xiami\.com\/search/,
                enabled: true,
                engineList: "music",
                style: "\
                    border-top: 1px solid #93D3FF;\
                    text-align: center;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#search_text',
                    target: 'css;.search_result',
                    where: 'beforeBegin',
                },
            },
            {name: 'QQ音乐',
                url: /^https?:\/\/s\.music\.qq\.com/i,
                enabled: true,
                engineList: 'music',
                style:"\
                    border-bottom: 1px solid #2B6DAE;\
                    border-top: 1px solid #2B6DAE;\
                    text-align: center;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#keyword',
                    target: 'css;.mod_soso',
                    where: 'afterEnd',
                },
            },
            {name: '网易云音乐',
                url: /^https?:\/\/music\.163\.com\/.*?#\/search/i,
                enabled: true,
                engineList: 'music',
                fixedTop:80,
                style:"\
                    text-align: center;\
                    padding-top:8px;\
                    ",
                insertIntoDoc: {
                    keyword: (function(){return decodeURI(document.URL.match(/s=(.+?)(&|$)/)[1]);}),
                    target: 'css;.m-subnav.m-subnav-up.f-pr.j-tflag',
                    where: 'afterEnd',
                },
            },
            {name: '音悦台',
                url: /^https?:\/\/so\.yinyuetai\.com\/\?keyword/,
                enabled: true,
                engineList: 'music',
                style:"\
                    border-bottom: 1px solid #2B6DAE;\
                    border-top: 1px solid #2B6DAE;\
                    text-align: center;\
                    ",
                insertIntoDoc: {
                    keyword:function(){
                        var url = window.location.href.substring(window.location.href.lastIndexOf("=")+1);
                        return decodeURIComponent(url);
                    },
                    target: 'css;.content',
                    where: 'afterEnd'
                },
            },


            // 图片
            {name: "百度图片",
                url: /^https?:\/\/image\.baidu\.com\/search/i,
                enabled: true,
                engineList: "image",
                fixedTop:95,
                style: '\
                    margin-left:110px;\
                    ',
                insertIntoDoc: {
                    keyword: 'css;input#kw',
                    target: 'css;.s_tab',
                    where: 'afterEnd',
                },
            },
            {name: "谷歌图片",
                url: /^https?:\/\/\w{2,10}\.google(?:\.\D{1,3}){1,2}\/[^?]+\?.*&tbm=isch/i,
                enabled: true,
                engineList: "image",
                style: '\
                    margin-left:136px;\
                    padding: 10px 5px 1px 22px;\
                    ',
                insertIntoDoc: {
                    keyword: 'css;input[name=q]',
                    // target: 'css;#ucs',
                    target: 'css;.ndYZfc',
                    where: 'afterBegin',
                    // where: 'beforeEnd',
                },
            },
            {name: "必应图片",
                url: /^https?:\/\/.*\.bing\.com\/images\/search/i,
                enabled: true,
                engineList: "image",
                fixedTop: 62,
                style: '\
                    padding-left:90px;\
                    margin-top:-6px;\
                    ',
                insertIntoDoc: {
                    keyword: 'css;#sb_form_q',
                    target: 'css;#rfPaneIn',
                    where: 'afterBegin',
                },
            },
            {name: "flickr",
                url: /^https?:\/\/www\.flickr\.com\/search\//,
                engineList: "image",
                enabled: true,
                style: '\
                    z-index:1999;\
                    width:100%;\
                    border-top:1px solid #EBF1FF;\
                    border-bottom:0px solid #EBF1FF;\
                    ',
                insertIntoDoc: {
                    keyword: function() {
                        var input = document.getElementById("autosuggest-input");
                        if (input) {
                            return input.value;
                        } else {
                            var m = location.search.match(/q=([^&]+)/i);
                            if (m) {
                                return decodeURIComponent(m[1]);
                            }
                        }
                    },
                    target: 'css;.using-slender-advanced-panel',
                    where: 'afterBegin'
                    },
            },
            {name: "pixiv",
                url: /^http:\/\/www\.pixiv\.net\/search\.php/i,
                engineList: "image",
                enabled: true,
                style: '\
                    margin: 0 auto;\
                    text-align: center;\
                    font-family: 微软雅黑;\
                   ',
                insertIntoDoc: {
                    keyword: 'css;input[name=word]',
                    target: 'css;body',
                    where: 'beforeBegin'
                },
            },
            {name: "花瓣",
                url: /^https?:\/\/huaban\.com\/search\/\?/,
                engineList: "image",
                enabled: true,
                style: '\
                    border-top:1px solid #EBF1FF;\
                    text-align: center;\
                    ',
                insertIntoDoc: {
                    keyword: 'css;#query',
                    target: 'css;#search_switch',
                    where: 'afterEnd'
                },
            },
            {name: "Pinterest",
                url: /^https?:\/\/www\.pinterest\.com\/search\//,
                engineList: "image",
                enabled: true,
                style: '\
                    text-align: center;\
                    margin-top:-11px;\
                    ',
                insertIntoDoc: {
                    keyword: '//input[@name="q"]',
                    target: 'css;.headerContainer',
                    where: 'afterEnd'
                },
            },


            // 资源下载
            {
                name: '海盗湾thepiratebay',
                url: /^https?:\/\/thepiratebay\.org\/search/i,
                engineList: 'bittorrent',
                enabled: true,
                style: '\
                    text-align: center;\
                    z-index: 9999;\
                    ',
                insertIntoDoc: {
                    keyword: 'css;.inputbox',
                    target: 'css;#SearchResults',
                    where: 'beforeBegin',
                },
            },
            {
                name: '动漫花园',
                url: /^https?:\/\/share\.dmhy\.org\/topics\/list\?keyword\=/i,
                engineList: 'download',
                enabled: true,
                style: '\
                    text-align: center;\
                    ',
                insertIntoDoc: {
                    keyword: 'css;#keyword',
                    target: 'css;.table.clear',
                    where: 'beforeBegin',
                },
            },
            {
                name: 'ED2K',
                url: /^https?:\/\/www\.ed2000\.com\/filelist\.asp/i,
                engineList: 'download',
                enabled: true,
                insertIntoDoc: {
                    keyword: 'css;.searchtxt',
                    target: 'css;.topsearch',
                    where: 'afterEnd',
                },
            },
            {name: "人人影视",
                url: /^https?:\/\/www\.zimuzu\.tv\/search\//,
                engineList: "download",
                enabled: true,
                style: '\
                    border-bottom: 1px solid #00AFFF;\
                    text-align: center;\
                    ',
                insertIntoDoc: {
                    keyword: '//input[@name="q"]',
                    target: 'css;.Header',
                    where: 'afterEnd',
                },
            },
            {name: '酷搜-百度网盘',
                url: /^https?:\/\/so\.cqp\.cc\/search/i,
                engineList: 'download',
                enabled: true,
                insertIntoDoc: {
                    keyword: 'css;.form-control',
                    target: 'css;.c_sbi > div:nth-child(1)',
                    where: 'afterEnd',
                },
            },
            {name: "subHD字幕",
                url: /^https?:\/\/subhd\.com\/search/i,
                engineList: "download",
                enabled: true,
                style: "\
                    border-bottom: 0px solid #CAD9EA;\
                    border-top: 0px solid #CAD9EA;\
                    text-align: center;\
                    top: -20px;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#sn',
                    target: 'css;.navbar.navbar-inverse',
                    where: 'afterEnd',
                },
            },


            //翻译词典
            {name: "谷歌翻译",
                url: /^https?:\/\/translate\.google(?:\.\D{1,4}){1,2}/i,
                enabled: true,
                engineList: "translate",
                style: '\
                    padding-left:1px;\
                    margin:-1px 0 0 20px;\
                ',
                insertIntoDoc: {
                    keyword: 'css;#source',
                    target: 'css;#gba',
                    where: 'afterEnd',
                },
            },
            {name: "百度翻译",
                url: /^https?:\/\/fanyi\.baidu\.com/i,
                enabled: true,
                engineList: "translate",
                style: '\
                    padding-left:1px;\
                    margin:0px auto;\
                    width:1220px;\
                ',
                insertIntoDoc: {
                    keyword: function(){
                        return document.querySelector("#baidu_translate_input").value;
                    },
                    target: 'css;.header',
                    where: 'afterEnd',
                },
            },
            {name: "必应翻译",
                url: /^https?:\/\/.*\.bing\.com\/dict\/search\?q\=/i,
                enabled: true,
                engineList: "translate",
                style: '\
                    padding-left:110px;\
                    margin-top:-0px;\
                ',
                insertIntoDoc: {
                    keyword: 'css;#sb_form_q',
                    target: 'css;#b_header',
                    where: 'beforeEnd',
                },
            },
            {name: "有道翻译",
                url: /^https?:\/\/dict\.youdao\.com\/search/i,
                enabled: true,
                engineList: "translate",
                style: '\
                    padding-left:0px;\
                    margin-top:2px;\
                    text-align:center;\
                ',
                insertIntoDoc: {
                    keyword: 'css;#query',
                    target: 'css;.c-topbar-wrapper',
                    where: 'beforeEnd',
                },
            },
            {name: "有道翻译",
                url: /^https?:\/\/dict\.youdao\.com\/w/i,
                enabled: true,
                engineList: "translate",
                style: '\
                    padding-left:0px;\
                    border-top:1px solid #D9E1F7;\
                    border-bottom:1px solid #D9E1F7;\
                    margin-top:0px;\
                    text-align:center;\
                ',
                insertIntoDoc: {
                    keyword: 'css;#query',
                    target: 'css;#scontainer',
                    where: 'beforeBegin',
                },
            },
            {name: "海词",
               url: /^https?:\/\/dict\.cn\/./,
               enabled: true,
               engineList: "translate",
               style: "\
                    z-index : 99;\
                    margin : -30px auto 0;\
                    position : absolute;\
                    width : 100%;\
                    text-align : center;\
                   ",
               insertIntoDoc: {
                   keyword: 'css;#q',
                   target: 'css;.top',
                   where: 'afterEnd'
               }
           },

            // 购物
            {name: "淘宝搜索",
                url: /^https?:\/\/s\.taobao\.com\/search/,
                enabled: true,
                engineList: "shopping",
                fixedTop:51,
                style: "\
                    margin:10px auto -10px;\
                    text-align: center;\
                    z-index: 99;\
                ",
                insertIntoDoc: {
                    keyword: function() {
                      var input = document.querySelector('#q');
                         if (input) {
                           return input.value;
                         } else {
                           var m = location.search.match(/q=([^&]+)/);
                           if (m) {
                                return decodeURIComponent(m[1]);
                           }
                        }
                    },
                    target: 'css;#main',
                    where: 'beforeBegin',
                },
            },
            {name: "天猫超市搜索",
                url: /^https?:\/\/list\.tmall\.com\/search_product\.htm.*from=chaoshi/i,
                enabled: true,
                engineList: "shopping",
                fixedTop:37,
                style: "\
                    z-index:9999;\
                    margin: 2px auto -10px;\
                    left:0;\
                    right:0;\
                    text-align:center;\
                    position:absolute;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#mq',
                    target: 'css;.headerCon',
                    where: 'beforeBegin',
                },
            },
            {name: "天猫搜索",
                url: /^https?:\/\/list\.tmall\.com\/search_product\.htm/i,
                enabled: true,
                engineList: "shopping",
                fixedTop:34,
                style: "\
                    margin: 10px auto -10px;\
                    text-align:center;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#mq',
                    target: 'css;.headerCon',
                    where: 'beforeBegin',
                },
            },
            {name: "京东",
                url: /^https?:\/\/search\.jd\.com\/Search/,
                enabled: true,
                engineList: "shopping",
                style: "\
                    margin: 10px auto -10px;\
                    text-align: center;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#key',
                    target: 'css;#header-2013',
                    where: 'beforeBegin',
                },
            },
            {name: "苏宁",
                url: /^https?:\/\/search\.suning\.com/i,
                enabled: true,
                engineList: "shopping",
                style: "\
                    border-bottom: 1px solid #E5E5E5;\
                    border-top: 1px solid #E5E5E5;\
                    text-align: center;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#searchKeywordsHidden',
                    target: 'css;.ng-toolbar',
                    where: 'afterEnd',
                },
            },
            {name: "1号店",
                url: /^https?:\/\/search\.yhd\.com\/c0-0\/k/i,
                enabled: true,
                engineList: "shopping",
                style: "\
                    border-bottom: 1px solid #E5E5E5;\
                    border-top: 1px solid #E5E5E5;\
                    text-align: center;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#keyword',
                    target: 'css;#global_top_bar',
                    where: 'afterEnd',
                },
            },
            {name: "什么值得买",
               // http://search.smzdm.com/?c=home&s=%E8%A5%BF%E6%B8%B8%E8%AE%B0
                url: /^https?:\/\/search\.smzdm\.com\/\?/i,
                enabled: true,
                engineList: "shopping",
                fixedTop:34,
                style: "\
                    text-align: center;\
                    z-index: 999;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#J_search_input',
                    target: 'css;.search-inner',
                    where: 'afterEnd',
                },
            },


            //社交
            {name: "新浪微博",
                url: /^https?:\/\/s\.weibo\.com\/weibo\//i,
                enabled: true,
                engineList: "sociality",
                fixedTop:48,
                style: "\
                    // border-bottom: 1px solid #E5E5E5;\
                    // border-top: 1px solid #E5E5E5;\
                    // text-align: center;\
                ",
                insertIntoDoc: {
                    keyword: 'css;.searchInp_form',
                    target: 'css;#pl_common_searchTop',
                    where: 'afterEnd',
                },
            },
            {name: "百度贴吧",
                url: /^https?:\/\/tieba\.baidu\.com\/f\/search/i,
                enabled: true,
                engineList: "sociality",
                style: "\
                    border-top: 1px solid #e5e5e5;\
                    text-align: center;\
                    border-bottom: 1px solid #e5e5e5;\
                    margin-bottom: 1px;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#wd1',
                    target: 'css;.s_container.clearfix',
                    where: 'beforeBegin',
                },
            },
            {name: "豆瓣1",
                url: /^https?:\/\/(movie|music|book)\.douban\.com\/subject_search?/,
                enabled: true,
                engineList: "sociality",
                style: "\
                    border-top: 1px solid #e5e5e5;\
                    text-align: center;\
                    border-bottom: 1px solid #e5e5e5;\
                    margin-bottom: 1px;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#inp-query',
                    target: 'css;.nav-secondary',
                    where: 'afterEnd'
                },
            },
            {name: "豆瓣2",
                url: /^https?:\/\/www\.douban\.com\/search/i,
                enabled: true,
                engineList: "sociality",
                style: "\
                    border-top: 1px solid #e5e5e5;\
                    text-align: center;\
                    border-bottom: 1px solid #e5e5e5;\
                    margin-bottom: 1px;\
                ",
                insertIntoDoc: {
                    keyword: 'css;#inp',
                    target: 'css;#db-global-nav',
                    where: 'afterEnd'
                },
            },


            //学术搜索列表
            {name: "百度学术",
                url: /^https?:\/\/xueshu\.baidu\.com\/(?:s|baidu)/,
                enabled: true,
                engineList: "scholar",
                style: '\
                    text-align: center;\
                    margin:0px;\
                    top:0px;\
                    z-index:99999;\
                    ',
                insertIntoDoc: {
                    keyword: 'css;input#kw',
                    target: 'css;#head_wr',
                    where: 'afterEnd',
                },
            },
            {name: "谷歌学术",
                enabled: true,
                url: /^https?:\/\/scholar\.google(?:\.\D{1,3}){1,2}\/scholar\?/,
                engineList: "scholar",
                style: '\
                    z-index:999;\
                    position:relative;\
                ',
                insertIntoDoc: {
                    target: 'css;#gs_ab',
                    keyword: '//input[@name="q"]',
                    where: 'beforeBegin'
                }
            },
            {name: "cnki",
                url: /^http:\/\/search\.cnki\.net\/search\.aspx/i,
                enabled: true,
                engineList: "scholar",
                style: '\
                    padding-left:15px;\
                    border-top:1px solid #D9E1F7;\
                    border-bottom:1px solid #D9E1F7;\
                    margin-top:-1px;\
                    ',
                insertIntoDoc: {
                    keyword:'css;#txtSearchKey',
                    target:'css;.main',
                    where:'afterBegin',
                },
            },
            {name: "知网",
                enabled: true,
                url: /^http:\/\/epub\.cnki\.net\/kns\/brief\/default_result\.aspx/i,
                engineList: "scholar",
                style: '\
                    border-bottom:1px solid #E5E5E5;\
                    border-top:1px solid #E5E5E5;\
                    z-index:999;\
                    position:relative;\
                    ',
                insertIntoDoc: {
                    keyword:'css;#txt_1_value1',
                    target:'css;#TopSearchBar',
                    where:'afterEnd',
                }
            },
            {name: "万方",
                enabled: true,
                url: /^https?:\/\/s\.g\.wanfangdata\.com\.cn\/Paper\.aspx/i,
                engineList: "scholar",
                style: '\
                    border-bottom:1px solid #E5E5E5;\
                    border-top:1px solid #E5E5E5;\
                    z-index:999;\
                    position:relative;\
                    ',
                insertIntoDoc: {
                    keyword:'css;#queryBox',
                    target:'css;#content',
                    where:'beforeBegin',
                }
            },
            {name: "EBSCO",
                enabled: true,
                url: /^http:\/\/.*?ebscohost\.com\/.*?results/i,
                engineList: "scholar",
                style: '\
                    border-bottom:1px solid #E5E5E5;\
                    border-top:1px solid #E5E5E5;\
                    position:relative;\
                    ',
                insertIntoDoc: {
                    keyword:'css;#SearchTerm1',
                    target:'css;#findFieldOuter',
                    where:'afterend',
                }
            },
            {name: "Springer",
                enabled: true,
                url: /^http:\/\/link\.springer\.com\/search\?query=/i,
                engineList: "scholar",
                style: '\
                    border-bottom:1px solid #E5E5E5;\
                    border-top:1px solid #E5E5E5;\
                    position:relative;\
                    ',
                insertIntoDoc: {
                    keyword:'css;#query',
                    target:'css;#content',
                    where:'beforeBegin',
                }
            },
            {name: "JSTOR",
                enabled: true,
                url: /^https?:.*?jstor.org\/action\/doAdvancedSearch/i,
                engineList: "scholar",
                style: '\
                    border-bottom:1px solid #E5E5E5;\
                    border-top:1px solid #E5E5E5;\
                    position:relative;\
                   ',
                insertIntoDoc: {
                    keyword:'css;#searchBox',
                    target:'css;.tabs-search-results',
                    where:'beforeBegin',
                }
            },

            //html 列表
            {name: "w3c",
                enabled:true,
                url:/^https?:.*?runoob\.com\//i,
                engineList:"mine",
                style: '\
                    border-bottom:1px solid #E5E5E5;\
                    border-top:1px solid #E5E5E5;\
                    position:relative;\
                    text-align:center;\
                   ',
                insertIntoDoc: {
                    keyword:function(){
                                var url = window.location.href.substring(window.location.href.lastIndexOf("=")+1);
                                return decodeURIComponent(url);
                            },
                    target:'css;.navigation',
                    where:'afterEnd',
                }
            },
            {
                name: "GitHub",
                enabled:true,
                url:/^https?:\/\/github\.com\/search/,
                engineList:"mine",
                style:'\
                    border-bottom:1px solid #E5E5E5;\
                    border-top:1px solid #E5E5E5;\
                    position:relative;\
                    text-align:center;\
                    position:fixed;\
                    z-index:99999;\
                    top:0;\
                   ',
               insertIntoDoc: {
                   keyword:'//input[@name="s"]',
                   target:'css;body',
                   where:'afterBegin',
               }
            },
            {
                name: "MDN",
                enabled:true,
                url:/^https?:\/\/developer\.mozilla\.org\/.{2,5}\/search/,
                engineList:"mine",
                style:'\
                    position:relative;\
                    text-align:center;\
                   ',
               insertIntoDoc: {
                   keyword:function(){
                                var url = window.location.href.substring(window.location.href.lastIndexOf("=")+1);
                                return decodeURIComponent(url);
                            },
                   target:'css;.results-search-form',
                   where:'afterEnd',
               }
            },

            // 其他补充， 这个脚本将会朝重型方向发展，如果嫌弃代码过多，可自行删减无用代码
            {
                name: "infinitynewtab",
                enabled:true,
                //https://google.infinitynewtab.com/?q=苹果
                url:/^https?:\/\/google\.infinitynewtab\.com\/\?q/,
                engineList:"web",
                style:'\
                    text-align:center;\
                    position:fixed;\
                    z-index:99999;\
                    top:0;\
                   ',
               insertIntoDoc: {
                   target: 'css;.searchbox-results',
                   // keyword: '//input[@name="search"]',
                   keyword: 'css;input.gsc-input',
                   where: 'beforeBegin',
               }
            },
             {
                name: "startpage",
                enabled:true,
                //https://www.startpage.com/do/search?q=
                url:/^https?:\/\/www\.startpage\.com\/do\/search/,
                engineList:"web",
                fixedTop:70,
                style:'\
                    text-align:center;\
                    position:fixed;\
                    z-index:99999;\
                    top:70px;\
                    margin-left:257px;\
                    background-color:#fff;\
                   ',
               insertIntoDoc: {
                   target: 'css;.header',
                   keyword: '//input[@name="query"]',
                   // keyword: 'css;input#gsc-i-id1',
                   where: 'beforeEnd',
               }
            },

            // 回家没网,用8090端口离线测试使用。
            {
                name:"test",
                enabled:true,
                url:/^https?:\/\/127\.0\.0\.1:8090\/./,
                style:"\
                    margin:150px;\
                ",
                insertIntoDoc: {
                    keyword:function(){return false},
                    target:'css;body',
                    where:'beforeEnd',
                }
            }
        ];

        // 搜索引擎列表
        var engineList = {};

        // 有些图标需要重复使用
        // icon = {};
        var icon ={};
        icon = {
            google:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD1klEQVR4nMWXbWhbVRjHf+cmTZq3hU67tcvmaql2L2q3FdTqkEodTESZ+GEKExX3YTrRyhCmMnDgCkP8EHwBnV+UMRyIiGLZLG7TMq22MsegOErrSmnarFub0CbN6z1+KLnNzb1JbmLF59M5T57z/H835zlvQkopqcCklBQbIoRACFFJOoQVgJyooiiWkqqqahmmJEClwtWAFAVQVbVq4UpymQIUG5CdmiR5/gfSl4bIjI+hRiMgJcoqP7aNzTjaduDs2o0tsMEyhAHALDA7HSL26Qck+89BuZIRAueDnXgOvIatYV1ZCB2AWUCir5eF4HFkYrG0cCGHy43v0Ns4O3eVhNBaZsUW//Jz5o+/U7E4gFyMkxr81eBXFEW3jO35APnVmujrJfbZR6bJ7c0tOO59AFtjAIQgG5okNfgLmdERLab2sSfxdR82h8vTEnLJdOLZqUnm9j+DTCZ0A22NAbzdh3G032eaODU0wPz7x3Du7MR78JBpTCGEkFLKwnmJBV8l/t2AbkDN5rvw9wQRPl/pxPEYwu0pGQPLtWBYBXJxjGz/FuLnGkkO1QOgrL6FuhOnUPx1ZRNXakrhNiDDp8Gm4t41iWfPNYRD4nnx4H8iLqXEXjj/cvaC1nZsjmAPeHF07V5xcQ3A4IwN6/q2O+4HuyFMs66emGXBI3ucdG7R5zLujekZXVe4WiwLlLNQxLiLrsxpY9FSGSsANfW6royPGEKqNY/TeCwbJld4tyJnw1p/OjLMGjVDjWJeBz++Zb7m/55R2X9Cv4Wv9RsBlMLLgqh7WGufSa7n6VAzvdd+MhUpZb+PZg2+Oxttei0hTADW7iWNnfcW7uHo/A4S2Pj4yiluJiKWxRcSkq9+S+t8t92q0FDwDwghlmpAVdVlp6uJTzxv8nWiSfPNJqJ0/9xDNDVfVjydhXe/STIb0xfco236KcxpKjmSfNt79wHc9lqd76+5MfadfYP+0B9FxUci47z0/WkGx1I6/2qP4PHtegDdaZgjyj+Qzoz3c2QgaCrUtCpAR8N2NngbEEJwffEml64Pc/nGVSQSW6IFd/gVRGZp+z76VC07W5fnP19LAyjckgFOXv2W4J9fFP3iUiayPlzhl3mhvY3nH3LofsvX0j5ZCKGrBYB9rU9wrON13HZXxQCKPc6zj0wZxHNXdU3XyqV0On6DDy+fpG/iIqqFh1T7mq10b3uOTXXNBvGSl9JSgQBTsRn6Ji4yGL7CaHSCuWQUKcHv9LHRt45t9ZvoWt9Ba93thrGWr+XlBlRjFT9Mcva/Ps3+DciKPU5LwZgmq+J5/g/N4OUGvdHwnQAAAABJRU5ErkJggg==",
            baidu:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABpElEQVR4nKWTvUtbURjGfzcf5prqEBFMBpWCHUIVISKRoIgQ3QQRRNBM1UHqX+AiLg4uQpeCiKigIkIkf4DgYAmVQBDEL2iHVIsfaGpi1Nxrck+HaGLMzSB5xuec9znP+5z3lYQQghJgKKW4qMDW9gPNbaf4AwkA5hbiTE1HSWuFd016AhubCZ6eBEurdzgcJr59vwXA45bp8VqLO4j+yzxhtWboKpuB8/NU9vyF13UQ3lPwjVzibpWZnLAhWySGByupqzWxG1JoaizjU4OZ4G4Sj1vOKYhnzMxGhdMVEU5XRPz6rQo9dHSfCacrIlbW41ku68lhz5iRLRLV1UYOjlT6hy4Y8F1w9jdFUhFc36QBODxSC1sYGqzEZjPwsd5MLKbxZeyKu0Qmk9HxK9YW7XjcMqGwgrcrF6T0dpCub9L4Ri75c5p6TdP0uYzl+Rpki1T8F2JxTbcYYP9AZfRrzpWugD+Q0C1+QXhPwR+4Ly5gNufb04Om5a9O3iT29X5gJ/jIj2CSuloTne3lGI3wM6RwfKLS2mJhoL8iT6AgxPei5G38Dx7mvwaRBxETAAAAAElFTkSuQmCC",
            bing:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5ElEQVQ4jZ2Tv0sbYRyHX5Uzl8bLVNrSToUOHbr0T2gHqf1Baf8AvcUruNcpd5e75BK9H0Q9gptCogZKh6J2kWtDhkpxkmCwOIidijpYECoI5unQNo0QauwHnuUD78PL9/2+on9w0ItrWiSraiSNjER9w8NRTFUjuQvimhaJuKZ9ThaLJHyfGzMz3AxDRC6H7LooQYDi+50JApJhiJBVNVJ8nx7TZKhU4svhIYX1dW4XCsRsm4FstjOOg+K6fwXCMHiysMCfvKhUELp+OcHjcrkleL60hEil/l/wslKhxzAQuk6vaRLPZC5/g9dra5jVKvdnZ5FtG5FKIVkWSjeCB3NzvFpeBuD7yQnvd3YYW13lztQUsm1fLHhUKnE1n6e+v0973mxtIaXTJDKZLoY4Ps71yUneNhqt/uPuLrJlceUiwcP5ea5NTJCt1fh2fNzq321vI6XT/xacNZuUNzdpHBy0Dp41m1Tqde4Vi/RbVucZPG1bpPbU9vZ4triIlE7TZ5qdXyFmWdzyfYobG/w4PQXg69ERYysrKI6D0PXzu9Am+KAEAYrjELNthGEwVC5jVqvcDUOErv/6E45znlwOxfMQ8ujop2QYorguiueRcF16HQeRzSLl8wz87hXXPY/nkZye5icfi28JEi0cegAAAABJRU5ErkJggg==',
            edit:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAACDklEQVR4nJXVzUtUURjH8Y/mSNKkki2iwiApxHQ1q/6C+gusoCB6oxbRRqFNL4sWtRKqhVSLIDe1CqpNiwjKIilKLKKFEr2Z2qI0xxHN0+LOm+PMOPOc1T2H7/f5ncO991BdNer30zmxKrl0xV2zKJjRoy6aqkkvbbdVLPuUq+8+5uGXnVILki7qsxgtNDtrTNLcijHvrdYsft0/wQ8DZgSzeqMUDW4IJceYHcvwCd1ies0KZvWI1TnhIH6574Olgg0E74zmhZ902j304by4Cxp5LPjtQNmjy3XPVK2rgmCBCcGgdVXhdBgUBCMEwVMNVeIvBMFLifKC8vgrndFBlRJUhJcWFMd3ZfGuzFRxwWrdu3KTxQQVhi8lqApfKVhf0d4bc2/OckG9Pkur7r3TEw+1FRO0GxdM2Vc2/HHBgr1If935UTfigbt5+C27MeSo9+m5GJYitlCwWR2G8oQZ/FgWX1aFgnZMG852v5nFR4rhMn+2dDVJYFpKqy0SDksUhF9FsE0bWgyIa9bIanihoEUcDTrSz4ueOVMOLxQkzVkrZcaoNz755rmpcnihYNghm3w26Ys/5cGcIKgRBJDyqCIquj8C1PqKZvHK+qVrJ5bMRwmGterU64pkkZupWO3RjXkzUZj9+jVZMGK6IsEaHTbgjpOSUYZL/pa5m4qPIbtyznpHvJaqGB53O33h4T/3VzLuzDhE6AAAAABJRU5ErkJggg==",
            del:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEUAAADsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVH///9VVVVWVlZXV1dYWFhZWVlaWlpbW1tcXFxdXV1eXl5fX19gYGBhYWFiYmJjY2NkZGRlZWVmZmZnZ2doaGhpaWlqampra2tsbGxtbW1ubm5vb29wcHBxcXFycnJzc3N0dHR1dXV2dnZ3d3d4eHh5eXl6enp7e3t8fHx9fX1+fn5/f3+AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7O0tLS1tbW2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjJycnKysrLy8vMzMzNzc3Ozs7Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8dej9TAAAAU3RSTlMAAABm7P/sZgAAABPO////zhQAAB/i/////////+IfAAAe4fvk4AAAAAAd/+Q3GxwAFR85FQBjz+LPY+v////r6//////rZM/h4c9jABUdHRUAAP0EcPoAAAEuSURBVHic7ZRnc8IwDIbdEUZHGB0kDsMOMcOMttBBB93Qvcj//y9VjB0Czh13/dz3ixT5OVmSYyMktLK6tm74oYxEMpVGUW1sbm2bM8DMZHP5OWBnd2+/YNnYAWHbKhRL5cocQKjrWFWPuSDmVS3HpUQu1eoNQkiTM9xqd7oHoG6n3cKMNyHcqNfQ4VGPUsr7nh0FbK/PIdw7PkGnZwOZNrqF9AfnF+jyaigLixYp/eH1Dbq9u4eAHyOAHh5HaPz0DCnjANjm5fUNvX98QoGCxyo5Fjmh0K/vH2hzAi0KnqnymMgJrU6gzemQBM+DZpX1/XBYUyAYTTAuZTUg+Aw8Zf+BvwJLR730sPTjXgD0H2YB0BUClXKpGAeE1y+fy2ZMfX12gdOpZMLQAfkE/AL7e5vGZF+dOQAAAABJRU5ErkJggg==",
        };

        // 网页搜索列表
        engineList.web = [];

        // engineList.web[0] 中间的数字表示排序(数字不能重复,否则后面的会覆盖掉前面的),越小数字越靠前,小于0该引擎不会显示在页面上
        engineList.web[0] = {
            // 搜索引擎名称
            name: 'Google',
            // 搜索引擎地址,关键字变量用%s代替
            url: 'https://www.google.com/search?q=%s&ie=utf-8&oe=utf-8',
            // 搜索引擎的站点图标
            // favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACyElEQVQ4jXWT72tTdxTGv4yN+cY/oMFGqQpD7ZjtsAF/oPEXGFhtbUEn4mSTatSJVua0UNNSEG/01UAH0m6dN1hdW5SbrE3sgkr1hb9lRTFW3Upqcy1NzE1yc/Prfvaia7dM+7w853keznM4R4h38aHdbt8gSZJbURSv3++/Jsuyp6GhwWm1Wsvew/8XNptteTAYvMEMiKjquMvlahVCzHpHXFdXV69pWhLAHHtNSm7nbdMhYo170U61kLkZnDZSFMUrhJg9La6qqrLpum4A6FcuM+5YReRTK5HyUiLlViJLSolULiB2eA+mFgdAlmWPEOIDIYT4aHBw8DaA3tODavuESMV8orvqSZ7/Af1XD/HW71HXVKKdbsPUU9OT1NTU1Aq73b4BgPhLJrYtY2zxQuKtxzATWlH+/MvnYJpFtUAgMCDcbvcZAHOkjXSHIH50LYW3iZn2WIRoNBoTiqJ4AfIPq8n1CwrDB4pIPw5kcP6k0+hJ0+hJ8+0vaU5eNdCzk30RCAQGAPL311PwCnjVXGSw+7zOvIMa5UcTVDQl+Ox4Aoc7yfg/QwpZlj0A5pNvML2Cp/d2FhmExgrceZHn0Z952q9nqGhKsONsCiMP2Ww2J5xO534A481V3N1lLL24md/Dd96b2dWdZfF3Gi29xqR5KDQsSkpK5kaj0ZhhFtgVbKOkfTUru7+kK+RjNKkSzyR4FgvRHOzn8+YJVrakefxXHgBJkk4LIYRwuVytAOHUG7b2H8basZr5netY2/sVm737WHZpC3M6VrDk3Aku3Jq8g9HR0TGLxWKdOsaPfT7fbwBaLsWZBx1svPI1i+RNlP28jsquLWz3H8E3cg0AwzAyDofji/+/w+zOzs4LU3mTZprHE8+4q/7BcGJkeg/hcPh1dXV1zYwfWVtbW9fX1+dXVXV8SpTL5fJDQ0NPJElyWyyW0v/y/wbuo60BpWkyAAAAAABJRU5ErkJggg==',
            favicon: icon.google,
            // 弃用；搜索引擎编码（默认utf-8）如果跳转后乱码可以填写 'gbk'
            // 弃用：encoding: 'utf-8',
            // 如果网站使用的gbk编码
            gbk:false,
            // 新标签页打开
            // blank:true,
            // 禁用
            // disable:true,
        };
        engineList.web[1] = {
            name: '百度',
            url: 'https://www.baidu.com/s?wd=%s&ie=utf-8',
            favicon: icon.baidu,
        };
        engineList.web[2] = {
            name: '必应',
            url: 'https://cn.bing.com/search?q=%s',
            favicon: icon.bing,
        };
        engineList.web[3] = {
            name: 'DDG',
            url: 'https://duckduckgo.com/?q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADiElEQVQ4jXWTfVDTBRjHn+uyi8KAbWz7/TbeNzeUeNkLCljGS3hrspDUsC7vqivz5cI/OtQ7vSxNrpvdkQx0k10M5FYgztECgfOoM7kurs6IFx1ja7xsgMiLAySDffvDtLrs8/fz+T7PH8+X6BFIQymxOGb1WyWy8COH13LL9svCSgtEoTt4RMyj5h/CIRKfSImsMKu4NrOKZ6vZwDafz2Tbajaw9ur1wibzemHj+7Lwo0S06j9yYtgqRX0m216lFDS0FCR3Obcl3/FvFmJCFwt/0Rr0aOPGrVlsuymduVShEljDiCL+3hxCUbWZTLtBwfuqXyeZCThqsTTUj0BrPUZ2psGTE4mxQilmt8twLT/WVaUSXvgsjW8hoseJiOhYUuTpSqWw8YYmPjC6JQ5TtXqsLAYAAMu3fLj9eSk8eQw8OimmXpGjMzfWaU5nv94RvfodkoQ+se6cmm2+tDGqe1Ijxm+HXsd4IIi5+WUAQBDA6MRdePdq4c4Xw12wBlNFifginW0tTxN8Sa9Gh+02qlh7v0ayOJTNh8d4Ev7AMq4P+BAM3g/4rm8KvdVn4H6exWCOHMMaOTqzY1wGJXORDkg5H1ermZYRnQyubCEG9R/Av7CCsnOd+P3eCgCg68YCbnZ0YGyXCLf0AowfjML1PMm8UcHaqVTOO1WjFnWMFMjgyhWjZ48OC3/cPx9YRnD6POArAoZSsfT9k7jTEIHR/THoyZXerVYzLfReQvjRs0qRw7NFBmd+HH4pTMXk6Mhf/jTg4WDGRBjex4f33Th43ojHoEaG7nzJXKWSsdHLwmd2VSmE9h9flMwNaqT4NSca3mudeMCs4xDGj4fgdiUfc1YOJssF8OpkcGTF9FUomIvEIRIb0li7RSX+dqxAjt6NAgxYDA8Dpq116E+JhHdzPJxaKfpyZBjWymFQsPZPkvgWIiLancA9Up7C2K5sivd6XxCh98MS+JYmMDzvxqJ7AN2FctSVKtC9dS18LyWiXh3dZVKK257jPaV98IxPn0oWNpYlCera1cxN/55itLpt2H45A3uvbMObjiy89pMWP7ydioZk0dXyFNZWIuGW/asLoUR8fZLQenod325MlzsuXLVMHnMeRIXrLC67G4OHP8roPZ4hajI9y7YdSOB9+n+FfKw4KmLfSUlEbdPOvJ9dJv3sUnMTZmqM9yypsd+ckHLNm7ghW/8p/Alp3+8i87OHIgAAAABJRU5ErkJggg==',
            disable:true,
        };
        engineList.web[4] = {
            name: '360',
            url: 'https://www.so.com/s?ie=utf-8&q=%s',
            favicon: 'data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB60lEQVR4nIWTvWtTURTAf+e+GpPWRFptmigIDhWELo5+DKLCMxZEJfVjEhTqok4O/geik2MdOuhUm4ogpTS6iNQoRV3sIOqQgpiX2NKEprH58B2HvMQEUnO3ezi/3/m4XKHD2fvywrCr1oirbvWPuh9XYs8znfIApPUSmR97KHAbaY8rVIBxx0487iz4ML4tsrrmCAxsVckTpRw7cbQ1ZgCiq2vLDViVSatAb8ZOSMZOiEttCFj0qh2Jzo8l2jqIJOM3BJmowxJ3Tk8/61Q9koxPCnINwHXN/mzsaRrACDzwcl5vBQM49sx1VDcARNxHLSNIqG51b/5vfgAVuV/vm+NtOwAI6sb3rgKVhTqP75+gpvTlK2SswM5ughoa9a9XQdGmYKK0pF9CKZYqi7e6CT5XF+5+63vLlcKP5UZMirODUz1GLgFsL2pQLv4qdoLLc7sPKeYTQEnN1YFR5wmA6DS+8o5wuT6jbmLMwUAsm26Ff8+GT4nhFYBCPnAm19/sAKD0InzY9JBqEspPRd8g+FE5IULIg93NcnmXz+c7aYnMqOqUAeg9m3unRofVe2eEPSJyWZBzDRjVtN+SUP/5Qt4S2efVP9D2aQBKc4PHBO6IyohCVeA9uPf8oytfW/PWk0PhoJ3NdVt81/MXwby4bACYqGIAAAAASUVORK5CYII=',
            // disable:true,
        };
        engineList.web[5] = {
            name: 'yahoo',
            url: 'https://search.yahoo.com/search;?p=%s',
            favicon: 'data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAG7klEQVR4nLWX36sdVxXHP9+9Z+bc8yNNcrG1RTEFkwhtLQVFCwWrVf+Biu9RAvYhrQUffBSkT4IaC62gxYq2DwX7JCoWRVpFaWlioS82TVNigtY2jTdNcu85M7P38mHtmXPwoQ+CA4fZs8+es75rfb/ru/fRPTxiXbz8IkovIH6XOz3/MidX/B+uT/LwpKrjvWb6gln+TJ22P617eMRa3qNmhmEI9StdvqjA3ye64UymP6uYXkt5dbbr+gunefzK+wd5aF+sOKQYD+dsRzA72tjBw5bDrRgfNnKVaMl0NOxH9/CIJVoiNRVzRKDjOpmWTE/FDAmWXEIYGZJkHbA35UYyPUYi0zWZbqux7QgZwwAwy0zYxsiISMu/6VkCUDGjAkrwBZGaGTeRSbTseEry25YOYiSMFI0Us/qthgWGlfmMWSJqjtGTSUSbgIyJbQOwx7tMuYmWHVquFhBAxZw5HyzxRMOCRnM6rhUA5h/JaSqgnDK8LoDJCFY7avObEKLCSGzZQVquULGPnr01gCHNiikNC0yeUaMDPH7mXhYHa6b7Ij9++FWe+9H5AoZSZoegEvS+Y4f42mN3snul49rlnq/f/ieiGrIlOl1HJva4TGRKpic4BQ0VM2pmVJpRs6DRPiYs+OlD51hs18Q68JXv3EET59SaUTGl1pRGUxrNqZnRhDnHv/9x6klg/00TnvrmOWrNiEypNaNmTqUtpnyAyBaAAxChfCKBQFDlY9W8+tw1zr50DYDJPHL8B7dRhS3qsEWtBbUcUB1mHPvubWztiwCce/kar/56l6gGFc6kiBCBiDz0UIHauVLACXYQQZGgyMkvvU5Orur7jt/MDdtTghqChMqaxYEJX3zgFtdChu/df5agUD4RZBiZrESrq7S8twbQsyKrJ9NhJFDClMiuenbeXvHCz97xF6I48fQRKMJDGQNOPH2EWHmmf3zqHa683Y5ahORVUCZQEalBtgYwCnF4wYdIQvKiPHniTdpdD3r75/Zz6K45lIJ95M4pt9+3H4B2L/PkiTcRhil7IJX+KlR02mWAFihtVMwElEi09GrJrMhqSbTknHjmW+dHuCd+fhTJQMaJp46OrfmLb5+n6zpMyRtVPYkVvZb07NFrSSCOrRuGMrqjZRJdaauNdhZken77+AUvLXDz4Sl3f3mbT92/zS1HpgBcvdTxm0cvopCdPjmlWdmTK+3u3sDaB4xcuOwxbdiowrhwSPGJB8/wjWfuAODYySNsXj956AxJ7YjaTBgia4VZ5w6pJclaKs3pbTVooNipjExXBNmXcUfPEitzp371Fm+9sQvAbH/FbL972b/O7fHSL/9Z3htE3JO1GueyeiC4rkpqowYyyblib+SqZ4/EkkznYy1JLHn0q6f57+ux468UB+0wdSRWrh0ciKkHrMx5MhsArGwgLetnKzvAoOL1zLm/7nD21M4Y/I3TO7x+6t3yo1ZEbQVQX2byBv8C4oYIcZGIqmS8IrHCWJFpSbbOKNGR6PnLsxdHAH9+9kJZ4/t8piOxJNmSniW5bL9D9j17RZRFhCKSsbEsEMGKGeBCDAQwwySwTMppBJCSlxkr+6YNafWDnEnWMuyqIpJYEmgcQE9LZItkLUGRZBAkMgEs+dgMSSRAprGkAKqMZGsAQiTzds7mM5lMtq5oPhCo1xVIXMNs7sq15CAQMncv2xj7HZrpWoCTWRgzNCtNbGsNySoGb0nmgqYA8xORTcnqCqpM7+EJFkrQcs+uGpmYLOIIoJoIM+8kMCwPIIp0rRsrNrRkzy4Vi6ECPaH0PZZ9L7Bi9BYIkiOWCNnnFWxNQW30rHxNCTpWwEqbG1jRiesubIrQOzSbe7gMpICZ797GuvxZAUxMF9UIYLaosZzX56MxeAaDPNKSSKQRxAgg060zBoIFIGPy8A6k7Gbm9MR6/SOKmcSyWO/6eDZ0Q6IvYEIp/3L8rgBIBDJmvT8plGNfKNJx65BFxyijmojVrqu6mUZ668bAyVKhoSC0iJmRWfkxwBhbfvxjEqgI1Jhy2QmDO4CcDrkwBigIkdWNz1i5F4aHljMDWQ0YvS2B4FTT0XBgOBUPZumlklzpSQGZ18EFKReSoyLbGoCRNkBknxtO81AAiWwrX7upgbX7d+6K1nvWljG5iGQe1KujsYyDTzqIzjMe1T9Q4DZvAzUwtuWoAW1I0+gx895gKGx5NOjBOhGWVt4sXzdmTISqMfSGNYselZOQg9gAQNkNCxUtSv+oQnU+K/1N0hsh6HXL+bWu6y6e5odXeZ/rEzw4j7UOhRCPWs6Hs9nHMD5qmVvN7EOQGl8ZNkQYL70o2R8Qv2+768+/whPd+wX5X6+7OF439fxejM9n47OTdOPd/wHi0RkhxZ/TiQAAAABJRU5ErkJggg==',
            disable:true,
        };
        engineList.web[6] = {
            name: '搜狗',
            url: 'https://www.sogou.com/web?query=%s',
            favicon: 'data:image/png;base64,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',
            disable:true,
        };
        engineList.web[7] = {
            name: 'Startpage',
            url: 'https://www.startpage.com/do/asearch$post$query',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA9ElEQVR4nO2WTUoDQRBGX5txIMRs/EFBAm49iEfxBN5J8AAeZwwkgmTR6e6ZHsNMDO2iFkEyibqQcVG1+aq74KvXteky9w8p0WMc9dlcARRAARRAARTgXwBk+z5jYyA/3p7zvDv/Ltp2N2/XoilBNj4Rw6sLuDyXwuRa9OxUdDz6ajoc/hwAYLUSrertnV2KmpT6XUiyvzBtGplxjPLksooA+FAB4HzZDdA0a2Ksmb2+4XzJYmFxPlBM51jr8aHCLgPOBQDqd5ntx2ZzECgbDPbWzOPTcyqmM5wvKV7mOw26zA8Z/jbMze2dLqUKoAAKoAC9xic+GmK9S0OJvAAAAABJRU5ErkJggg==',
            disable:true,
        };
        engineList.web[8] = {
            name: '秘迹搜索',
            url: 'https://mijisou.com/?q=%s&category_general=on&time_range=&language=zh-CN',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADHklEQVR4nLXXXYhVVRQH8N9cJxzRoXLGFKK0SQvRyRJ9kCAq6iH6JBNliB6CYhIfJCoMpHwoUCqiMJR6UHooqCAoKoIesrTQCckUI/ogLSoLScKISpse1j6c45kz9547d/zDZe9z9vr4r33X2msfJh+7z4JNMAXPYlMbOl24ZjKcz8fnGE2/7YlQEb2T4agKDRzCFbgdQwUi52FBSb6/MD+3U+dTsBF/FpwWfxcWZHsq9JdP1PEtOJKc7MH0Cpnr8Ddm4dOK9csK832YV9f5OfIIr28hO4qH0vzqwvtpOFHXYREjyehNNeUzouvRhx3p/WAaP2ploFGYd2EZ/sJ7NQl8k8ZpWIHF6bk7jdeW5AfGMzSQHD9X03GGNWIH/sWWNP+4sP5BXUPvJuWpbRK4MundjUfFjjxp7A7e2crQKL5s03mG73EQe/F1spUdUkNY2Ey5gRlpvnOCBL7CcRzDi/gCP4nzY4YagT0hmE8UW+XV8FQaYRhLMVuelN1l5YbI3n0dEDiBb0WT2oXfcU+a7xfVdSrJnhqrzq9Y2wGB++U78Goal4uS3IBFuCqRGYMGzscfHRA4LXrFSyIPiGP3ArwvKuJSbK5S7sZ3uKgDAnNEr7hPlNu9ItqZuA1z5XkxBo3Een4HBHrFQXRa5FOvyIkRPINbk9xwSe/ibHKHSI6+CRJ4WZ4Dz8v7yR6x9S3RlxQeaCJT1Y4zvIMfxaXlgAhmJd5K67UaWxZBFXbgrnHWesTWZ/pHsVoE04035cf7qmYE9iYDXRVrg6JJvVCxtiTp7RRZ/iFuSGuPp/GHZo6L2Ip/REuuQn9y9h9ewdOixLLob8RjIvMz+bYwNRk61kRmvSjb8t1wGJeLJNzozK5avJrN1uL2PBeHcVL0+lbICBzHz4X3A/Im1yyBKzGzYPiSGgQ+w9sVazfXcVaVdBnmiVbaI7Z9F17DLyK6deIEfR1viEhPisOtduK1Qj+2qf4mGBVVAA+K/58zvxUmDb+JrZ4lvweOlGTKX0iDpefxqqsWlopbThb5J6KLwsNpHCrplE/WRzohUBcb2lX4H+8RvvN6tC5LAAAAAElFTkSuQmCC',
        };
        engineList.web[9] = {
            name: 'Yandex',
            url: 'https://yandex.com/search/?text=%s',
            favicon: 'data:image/ico;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAAAAAAsAAAAUwAAAF8AAABfAAAAXwAAAF8AAABfAAAAXwAAAF8AAABfAAAAXwAAADjBwcEAwcHBAMHBwQDBwcEAAAAAUbq6uurExMT/xMTE/8TExP/ExMT/xMTE/8TExP/ExMT/xMTE/8TExP9ubm6QAAAALcTExADExMQAxMTEAAAAAFrHx8f/x8fH/8fHx/+7u8j/AADS/wAA0v+wsMj/x8fH/8fHx//Hx8f/vr6+7h4eHmQAAAAQx8fHAMfHxwAAAABXy8vL/8vLy//Ly8v/v7/M/wAA2/8AANv/s7PN/8vLy//Ly8v/y8vL/8vLy/+kpKS6AAAAM8vLywDLy8sAAAAAU9DQ0P/Q0ND/0NDQ/8TE0f8AAOX/AADl/7i40v/Q0ND/0NDQ/9DQ0P/Q0ND/0NDQ/2VlZXsAAAAk0NDQAAAAAE/U1NT/1NTU/9TU1P/IyNb/AADw/wAA8P+7u9f/1NTU/9TU1P/U1NT/1NTU/9TU1P/JycnkDw8PUwAAAAcAAABL2dnZ/9nZ2f/Z2dn/np7i/wAA+f8AAPn/goLm/9nZ2f/Z2dn/2dnZ/9nZ2f/Z2dn/2dnZ/6ioqKYAAAAqAAAASOLi4v/i4uL/4uLi/0hI9v8AAP//BQX+/yAg+//f3+L/4uLi/+Li4v/i4uL/4uLi/+Li4v/g4OD7AAAARgAAAETx8fH/8fHx/9jZ8v8LD///HiL+/3h6+P8IDP//lJX3//Hx8f/x8fH/8fHx//Hx8f/x8fH/7+/v+wAAAEIAAABA9vb2//b29v+Ah/v/Ex///3N6+//Z2vf/FiL//ys2/v/r7Pb/9vb2//b29v/29vb/9vb2/8jIyKMAAAAkAAAAPPn5+f/09Pn/NEf+/yA0///Gy/r/+fn5/1hn/f8gNP//jpj8//n5+f/5+fn/+fn5//Dw8OMXFxdBAAAABgAAADj7+/v/tb/8/y5K//9GX///+/v7//v7+/+zvfz/Lkr//zhS///l6Pv/+/v7//v7+/+Tk5NnAAAAGfv7+wAAAAA1/f39/3OM/v85Xf//mqz+//39/f/9/f3/9vf9/0do//85Xf//fpX+//39/f/c3NysAAAAH/39/QD9/f0AAAAAMv7+/v/+/v7//v7+//7+/v/+/v7//v7+//7+/v+VrP//QWn//0Fp///T3PrtPj4+PgAAAAn+/v4A/v7+AAAAACn39/fi////////////////////////////////////////////////tbW1cgAAABf///8A////AP///wAAAAAVAAAAKAAAAC4AAAAuAAAALgAAAC4AAAAuAAAALgAAAC4AAAAuAAAALgAAABv///8A////AP///wD///8AAA8AAAAHAAAAAwAAAAMAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAMAAAADAAAABwAAAA8AAA==',
        };


        // 视频搜索列表
        engineList.video = [];

        engineList.video[0] = {
            name: 'youtube',
            url: 'https://www.youtube.com/results?search_query=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAByElEQVR4nO2WTy/EQBjGf1M9ES4rQSzdlkVw2KtIcMBdfB1fQ3wWXEQiTtgI4k8k/gbBRdzYjkO33VUz7WyWuuwzeZPp9O37PH3ft52BFlr4Z4j6i7vJUZkFaf7oLOKNJjcTI5mQhxg8PheRgKvxbMlDFE7OhQ0gZTL/p9+8PtsSynXrcqwofQlJJgmsc2k5mjdqqriXY0Vp+ylvDxC6yM8PiqcXPL688DY91VAGfNQ8lpQBgakB9HZ3M3J2QcfqWkPPqsxKS39QgtqoR//8PF3rG7SvrHzzUQ1dbLMSxEpRjz7XBdflaXaO18UF8H1lDKEpgW3S31EPJDj3OA5sbALwVCrRlsvFFagF+CafmOZhpQiAchmAh0IBe8gDQKoTg61Z/84fZsBMBz2Ow/P7O22eV8uextdO+wlVJQRBDBUcekM/1uINHAkwq4CsCkh2Lrue9p42AyZfgSVEqESJgwTiEDoewwwEiMfYL6QT1wSo122TuspqF4aue94w+BVjctD3j9jNO6kSop1MCPNOjEG3owqAnf5kEbqttFkB0/fXZueBj8rfnVeiV9vuG8z0VDTzcFM7koXY6h3IRMTc423zNW2hhd/CF3jZLaCW4/+vAAAAAElFTkSuQmCC',
        };
        engineList.video[1] = {
            name: 'bilibili',
            url: 'http://search.bilibili.com/all?keyword=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACTElEQVQ4jY2QMUsbcRjGH7n73z+m4g0OblkDpkOgRT/AKeRCYvwHzxDBBOLUzU/gF+gkjlLoKlTBxQvxCqe5u4iFkw6CATfddLPSCIWnU8/E1rYP/Jbnfd/f8ALPIqUsj4+Pe1LK8lCXBeAB8AzDeP38JokQ4u309PSP2dlZmqbZByANw8iZpvm1UCgwn88znU5/+pvgzcTExGB/f5+O4xDAewC5hYUFPj4+cn5+/huA+osCADAMw8lms8zlcpycnPySTqff2bbNVqtFALWX7kpSSk8I4aVSqVDXdY6NjdE0TU5NTVHXdQJgKpWKhBCelNLTNO0DAAkAlVar9T0MQ/Z6PYZhyDAMGUURgyBgt9tNul/96ekpd3d3mclkDqDrenR+fs7t7W0qpVitVhOUUgnD/fLyMm9ubri2tkYIIT73ej0Wi0Vubm7S930GQcBOp8N2u50w3M/MzNB1XTabTUII4UVRRKUUz87OuLOzQ8dxeH19zeFsbW1xZWWFd3d3rNVqPDw8ZKPReBJUq1WGYUilFAHw+Ph4RGBZFgEwjmPW63W6rjsqUEqx0+mw3+/T930OBoMRweXlJX3f5/39Pcvl8p8F7XY7OdjY2ODc3FzCxcVFMisUCr8LlpaW6Pt+shTH8cgTHx4eklmpVHr6ga7rQRzHrFQqzOfztG2btm3TcRzW6/WExcVF2rbNYrFI0zTZ7Xa5vr5OaJr2cW9vj1dXVzw6OqLruv/k5OSEt7e3tCxrAACvMpnMwerqKhuNxn/RbDZpWdZA07TKT3uI/eaBFtmBAAAAAElFTkSuQmCC',
        };
        engineList.video[2] = {
            name: '优酷',
            url: "http://www.soku.com/search_video/q_%s",
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABnElEQVQ4jZ2Sv2vCUBDHv4OFYEAeRrFihjeYLl3eILRDhkcXKQg6tWAHs4W6WBAq2CWCFLe4CS7ZOhWyuHTK4uDmpKtD/4As3dOhOYk/SrGBg3fc+37u7vsCAOztPud/DXhEseoUN7cX6Qbi7/Yi3Vh1ihuqT+pZDwADAIyqzE2KKWatfEDiY/W5XVgCAGatfEBdm0K1mkK1+pI5NAF1jgWsKVSLIE2hWr92GFWZCwCUJ1ea24Xl14BHfckcAIDJFTmpZz0qUJhckX8CyINRlbnnDDw5kckVmVzB5Ip8vMo87ayw/wIUnz093AceMxkAWF8yh8z87Onh233Ov8yfCbpgckVSo7ldWMa7s1h+zjV77Gfunl0SKNcNS+t6AUqGUG8enuhMdc0e+5o99gEAqXJF6tN1pE/XEYkpz9Tajtb1AjoTgOqpckXuAJLiorsIUTLESYB9MQD8C5B/eV+SSScBNHvs70MIwFpD78CzkiEOTGStoZcEZmptZ5t3vaDoLkJ9uo4Krx+bn3lKhtjuTT9GDImfliWhW3Hs0Tdk6pGCP1WKswAAAABJRU5ErkJggg==',
        };
        engineList.video[3] = {
            name: '腾讯视频',
            url: 'https://v.qq.com/x/search/?q=%s',
            favicon: 'data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACNUlEQVR4nK2SS0iUYRSGn/P/42UcLCXDIoykaKhlSVCbGlu1MkgSJKE20saoyG2Q7QNpF0RIi6goXKQkLoIQhjBCNBAddFLGWw0q3ua/nxa/82eF0KID3+K7vC/Peb8DO+pKWi80p9W5mtbH/GPJzs3loUAFkOKp6GylbSR7UmLtZmDoAI06gE4P78+2nj7FvorPuB64HnieHF41tdD00c/sSqDvREHpPXF2zj24eAgRBBida2d4phORkCiEMu73peTh7wZvRQGeNJzbiu/JVYSC0EQERnIdfJm9HRmpqDN40SxHQp2BDTjgyHLcsn2aEkNcivfjOAa2E3Cytpu2M/WUmrPYruI6lKbe+0GqX4+GBM8MRaA7VYsI3Kqbj/BWvEle5htDIoGJpTbS2a5tOiHmm/UGFmBBwfax7AAliAyqY8e5eSBHmVeHZfkcqerBdn0sByxH2fDd0Rh2mJBl+wjClreKIWa4MBlf72Vxc4piNpZtIGj41aJPY1gCohTsAAE2/B+YlLDsZHk+3RKFZ3s1vB4ZRUTDFmAqc6PsTgw7jHtzrdqPlefNnonrLBbGoz5F4EPmBQtrKRDdNtQ3ufZ4M0AMJ+x374qxtVITVH5b/RoJx+Y7GVsozsI2NpLMd8QniznFsJnAkGTD0rLftzdARPg084ip/DUoCgFBX63fS7T8NYkAerdkMBuv+p5MZFqVkl8X4W3WtRLHeCDBn+LoSVRdGx4iZjggOqR+4vxuwv9WPwHg2/J5NFR2OgAAAABJRU5ErkJggg==',
        };
        engineList.video[4] = {
            name: 'AcFun',
            url: 'https://www.acfun.cn/search/?type=complex&keyword=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADfElEQVQ4jX3MbUzUdQDA8b/1xrW1tlhrtmatF1qrVk5opajLUScgJtoIxXjQ1iobqzaV1MCWqZm2EumO8+C4Bw4OMsC8EGgeWkqi8vy/P8cBJ8cdTwccj/6u+4/79qLVy77b9+1Hcvb4Q2/oukS6SRZZ5YrItLpEpkUW71pkkVgRFO+b/xTZpjaRYXGLTKtLZJUrYpdZFhpdl6htHwpJSSVukkr7SDV5iNcqpJR5eK9S5hW74LjRyrcXCkmyTbKn0kuKsY94rUKa1cN2k4fXi3uRMiwusblYIafKS0FjgG0lCqvLwphs5/EVPk+sXZD9k4/kkl52mvspaAqwUddLvE4hy6IIKUHbKfKbAtwcmqfZO4dveoHnKiDb1EqbLpkXqyOsqoY1himGphZpH7mPdyrMSecIa87cEdLnlwbFF40BfmyZoEYOsQgMd15G+9UOFMMWhg3x1J3YSGdLHTfno/zcOcW/7atQhLTV0C2OXvHjUGbIKXcTBGZvFcEhCbX4SdA+AoclFp2HqFqE75tH/wMK6geFlGNTRFiNAnDs+hK3w9B2PgH13EOM6V5iTL+WvwofpjV/BUEV6obg+G/D2LtCHKsfFNIHdrcgusTcEuT5obPmBDN5EsEfnmBK/zKh4hcY18cy+tkDdBW9ybAKehe4/CEO/zIgpCyrIpx+ldnQGO1nXgXdMqKODSg6DSHtM8yeXo773AbUoBuqH6PxwxWw4CcgIMvqEtLRSx5xbQFqzPlwRCJ33TLWxq3nXscNVG0Mc2cfJSg3kLb3INt3ZhAtkGg8GYdjHs5e9QqpWRkXWj8cOfA23F3Jyth9SMtXoQYHWGo+yMwtI0QmiXn8aR6MWQfBWvK+/Jhv2iPc9k4KKc3YLVYXBflE7wChsL+ogafW5xIdbSI67UUdkWHOyabsU8Tt/RrCPnIvh3j2Ow/bDN1C2m2WRYK+l7fq70OfA3QfEf69HGabQa6CHjtMXyVyx86S9gD06Pm0IcBrF3ykl8n/AFvN99hT42f8j2oi1aeIdNcy0X+N8dZaxlouMqE4CSu/ol48zex1C/sdwySU+cgwuYSUWOom1eRmt9XDFtsomivzaCrHSDQMkGwLkGIbJbF0EI0tQGLDPBr7OO+YPaSX95OgdyPV3h0KbSrsEOkmWewwKiL1/y51iVSjItJNsthc1CFMN7yhvwH03PqrfJ8h8gAAAABJRU5ErkJggg==',
        };
        engineList.video[5] = {
            name: '乐视',
            url: 'http://so.letv.com/s?wd=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABjElEQVQ4ja2SPS+DURTH/9yXPs/tc59WWxK9tfkCFgwiNLUIQWMhqhEsQopFRcTCwOAlIp2MEiFBwmcghobZ5i1I6iUm2zVoG1KetImT/HKm80v+5xzgq9xJZm2kXN6jEFCLUqsOtPlRKv1u1+hp7l4uWVAPGr6RQX0nlZ512ZslCxpAW6+zgiSz1v9LwBpA2yKER8OE9+SIEB5tIq4OAJajYIS6k49S6Vup9I0M5rmVQZ2RSi9yz7ajYIyKhYyt9F126DuvUukV5tn5VTDD5GouQgvh3T3EiHcSI9ZBjMEuYgxFiTHcTnifDfh+FcwxawsABUBKXuKVVa3PRFVmT/jTh8J3cSACl7l+IgLpUeqeBVBeIGgEjTxnl/UglX6WoQI+7Bp9LipfAXgKBAEgmHJVHB+LwMWO6T/bzePLc2D4TmPMnARQ5pSGF527iBKdxIgNMDPRz8zxPmZODDAzEWfmVC8xRiygynE6wa2llz/+4M0O6TXu3XcUxJk5dZ897c9PVPpJKj3/dW58AkPWtgVm+sp6AAAAAElFTkSuQmCC',
            blank:true,
        };
        engineList.video[6] = {
            name: '搜狐',
            url: 'http://so.tv.sohu.com/mts?wd=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACk0lEQVQ4jW2SXUhTYRjHf2furH1vns0tc+p01YbSaRRGFGmElRWhRVR0VzeBCUkRKRQUURFBUYtMsAsvwqSLboqKii76oOjLLsKwLBLOjsM+iBEiEk8XOtCDD7zwwvv//57/+7wvWEpX1WUXqud33U1XPn+2cuHgm4bk9xeNqc+Xl1f0eiFi1c8s+wHNd6gzWpxZ7XXtrHBQMx/itR413RYPdbysXzQ80qxPnFkay8zp3jXP1V7ncPS74BbQD6ywavbGQm25lrTcXJN4OOtgS5G6L4oyDogNRYDfpdCUBN0KaYp4t+da0nJcX3AeAB+EU9gmAFGnzH8B2xlcmTElJBk8N6yQW8vjT7Lblv7zQZj1FHUVzNOAdoBruHsNRRMzlJCPkUVja7E3FQBxB6nRzbqc0MsuosKwfdpcBJOAE+Aq7l4DTQybJmY0KWagUnpw3wb8AN8aUuMvG2uGscFPUMSOIgrkC10yBQCaGASksL+Cqw/gQ13C/LKhJo8Xfi7DLo6p+JOAfVaCGesxvo/VsBhgKJ3IDzWk/rAV9XMvPtmPUw7gEmC3FfCV4EQrjo5CuhgsNPWEPK2rHqQFNWOiyQBBGUOTbjw5gIu4rxtocg//W+sPvBMKvzKXJKSzouQsXoiMEJzMKSEx0OQXmjzA/zoJej32DdYnvGLz9GVLy2SktmoSCALQifOsYQtL1rlg+r5B+UQwfw53dzOOPZso2nEC16UBAjljXolkY+VysCR4bBa5B/dtMxCX0Qpdst6YGPinp188a5BZX1S6wlq/NRkAR3Ce+l6amvixrlnGVm2U0bIayXrLxVAjYqDJsFI83urwdMxpnlH+o3bv6UclVR8GwlXmO2fUvE/g/WGcJwG3VfwfeW39pYdUeeAAAAAASUVORK5CYII=',
            blank:true,
        };
        engineList.video[7] = {
            name: 'niconico',
            url: 'http://www.nicovideo.jp/search/%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAASUlEQVQ4jWNgoCYwMTH5b2Ji8p9ceZwKidZIsY2kYhQDSAW0MYAUg8h2AbJltA8DWGiTZQB6lJHlApK8QFFCghlCMMmSoZYgAAAvUMVwhox/egAAAABJRU5ErkJggg==',
        };
        engineList.video[8] = {
            name: '爱奇艺',
            url: 'http://so.iqiyi.com/so/q_%s',
            favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIABLAQAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAARJJREFUeJylk71KxFAQhb8bw7IKgbW0sxUuiPgA2ttsodhaLOwDiBDyALKNnYWBFJYiKttspUhaQRAh4GMoBDSkuRZOdHTDkrgHBs6dnzNT3ANzwkSJXQUOgPVuJ+gDFGVe29ztBEh9DDwD5z7wBPT+Nr5/5BOdW1oMdtSzL7Hly/Db8SBbbnN6lNhXYLvNTC1MGFsHHAJrwEDVJsA9cCKbUrWx4qmnBlYARsPMzFh4JPENX5Q2G1x7BewKv6uSnpzTBBeKn2mBX3DO1V4zGmbXdXxKoC2mBE5v9h/nUnx4udwLY+vC2N426TdRYh3//4k9UxH4MQsw0wvKbKkPbCBu5MsgFGWOt4A2D0WZ6wVjxI2fleZQvCOg+1AAAAAASUVORK5CYII=',
        };

        // 音乐搜索列表
        engineList.music = [];

        engineList.music[0] = {
            name: '网易音乐',
            url: 'http://music.163.com/#/search/m/?s=%s',
            favicon: 'data:image/png;base64,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',
        };

        engineList.music[1] = {
            name: '一听',
            url: 'http://so.1ting.com/all.do?q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABfUlEQVQ4jZ2RTUsCURiF/SFton27qIgoQ9skidJSF5qu2gZRtGrVan6ABJGbIqiwDz9CLSINIceKcNOoV8MpxQ9EJ2uc62nTiJUj6gt3c7nnOec9V6VSGIZQ2GLCr8MQCqX3LRFDKKysAFNUgNrLY8qdwehJEqtsCSvPn8oQhlAsP9RhZQXog1lo3ElMul7o4mEcW4EkVTufsBHNw3xXqCsCxvcib/pgFjofgeaCYMyVwOZ1Gh5SARN9h9aTgtafgzlSFjtC1mJFwXCZxtwpRydcCcyfc9RDKqh+iZQXREiSRPEzhrM4/y+BMyvilq/iOFXBAVfG33ks1sEQCoOPK3RuPZzDbqbWcmo0RAoAktSgTQByyYod2MI52G9e8UGbLddwsYH7ktjbF8oAOYHsyBCKnRp6AwSyVcjiroJOAIZQHJHKYIB2SDtAvlvaduz3DLGwQmt3Y6iMoXWHt+8kFlbAwlUes/48RmZ09r7XkUHGUBnD01rTQAAZ0q3Qb/EHnAbFqFNRAAAAAElFTkSuQmCC',
        };
        engineList.music[2] = {
            name: '虾米音乐',
            url: 'http://www.xiami.com/search?key=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADKElEQVQ4jY3MTWyTBRzH8X/fni7GXdSYwAFCRFG3cNgOcvGiTjjonDPdWhgO1rGCQ7c5R6cTxjTRqTQDQxZEJTFcyKZMaTSQQOJhkBAdZoBjSEyskq17+ry0T1/Wpzzt18MWbxoPn/x//8tXROT+d56V9z5rkVPHX/7/Pm+RUzvrZI801UiIcReMrYoJfCAr+xOBj/7FmFAcdSHb66SLI27METfmsItMbC2F872Yh91kPt2IdbJ+xXgt1onN//zZsbVYIy4kuFnCjLoxhwT9DSFzbBPlzF/o/UJxOoajzuGo81TsLOWciqPOU07NY194EyMqSLBWwoy4SH+4hvzXXRSvHKWSUymcHyA/0YZ5uBq9z0tp/nsKF97G6PdiHlSwDnpID7lXApUBIT/VTaVoUfrt4sq99QOUy2RitWh7hNLcOfJnX0PrEowDQibqxox6kOATEi73Cfl4lOLPpzGGHsBZuI62X3AWrpM5uoVUh2DPTlK6cwkj+hDaPiH9lhej34sEN0m4vF/IfzuAPXMGc3g9zuJN9D4/zsJNMkeeIvWqULz6FZWcRjn9J9aJRsxuF0bPasDZK+SnBrGvfYNx6FGcxV/ReqtxkrdJf7wFNSTYs+fITfSQPR1h+cfjGBEXWrcXCW6UsNMpZL/cSWXZwlF/p3KviJO8TaWQxnz3cdSAYM/GyU8OoDYLqQ7B3OtDj/hWA/t8aJFq9GgN1sl2nNQfGMP1GNHHSO12o7YK9i9xchODLLUKqQ4fRqeCFlaQ4AYJOxE/aouQ3CYYB2pwknfQe9ZRnPkOY6iO5AuCfS1O7swgS68IqXYFY5eC1q4ggQ2ecCnkxhpvx75xCefuHBW7gHP3FmVjAXsmzuJWwb5xkdzEIZKNgrrDj97mJ7XDj7Su93TeC3kxh58h+8XrpN/fht77JFrnGlK7HiQTC7D0kov82VEyx9pYanShBv3oIT9a0I8E13m62H0fVrNgvShYTYLVLGQDbrIBD1aTkA1VkW3xkG31rexQFcvbq8iHqpCH/fLI1NO+qz89rySmG/7Dc57EdIMvMd2gJC43KImZrUpirN47+TcxcooW8TIPDAAAAABJRU5ErkJggg==',
        };
        engineList.music[3] = {
            name: '音悦Tai',
            url: 'http://so.yinyuetai.com/?keyword=%s',
            favicon: 'data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC10lEQVR4nH2QX2iVdRjHP8/z/N73Pec929TZwmrdtEltOupCTGZ/bMbqIopVjGqQwSS7iBGBCV0EgTKsROiP2aIu+ne1AodFlOkKyiLUi63QrDCULoTcVs2d857znqeLMxdB+IXvxfOH5/l+v9w3mvqhM/t8YHeT75vc6qMfD/i9o0U/cnbM79kV+/YPev3dY8/4Ay+2+GdnXvX7X2j2h/e2+cHTL/nA7uYjYWRoD6aBdWv66O5cj4pRzTNEhMG7Ruho76Fay1jR0kYcEp4dfouFyjx5vUaeVzfJg3uW+bquzRw7eZgoRFSqFRTj5p5+vp3+lGpWpq31Gub+vkBPZy8nTn1JrZaxtmMDP5+bQs2MEz9NsjJtZ3jDGDde1Y8afP/j55gahUKJvy7OkpOxuriZ4fVjJMUSv/7+A6qKqgmrr+jl9W1TdHWsoee6tTy28TnMBF1kLhnvP3GBwb6nkFXfsOXOLcjS3IS7u0cAGP/6ZULs1HSOrF7BTDAT+jufpFBMmD1/EWoJhWKECo0nGhQRB0DFKOd/EiWw9Y4daFDMAo9u2gnA9oluTIQQFA2CBkXNFITGARUOHH+HuODEaY0srxCHlCQ1yvM5HmpEkRIixazBoGZcgoiSJAXipFEP3jLExtbG9/2Ht6GmWGzEkaFmjRCDKrooQU0Iqrx96A2SArSvWsbKK5vJsgpTMxMEVSwoFilBLzH8a0EENChJSFjekjJfhgU5y8lT50iiFIDIhMikkYEuZjD5234W5nKmZw4uedv70WuUSgl/2DhvTj+y1J+dmaeWgUUBM0VGxjvcWRJxWfzfXuhq76X72tv58OguBnufR0T45Pgr9N/0ON+dPsCtNzxENc9476sdDN02yvm5X1heupo4FBk/uhNtKrbi7sRRkTpVHKcQp7g7pUILKkrda4QQ4V4nTVZQsBT3OqqCPD1x/Re494n8V5y7c/me01QOyT8DBfBJpwjHJQAAAABJRU5ErkJggg==',
        };
        engineList.music[4] = {
            name: 'QQ音乐',
            url: 'https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADMklEQVQ4jY2TbVATdADG/3cBDgkNN2QyZWMhoKQwtLIyQ/DgaPvAAUVddUjU2UUdd3Z1vmR2B3VxUWhJqyBS0vAlDo7VImCWsPM4KcC0BtgYgzFjzcmY42Uovz7lnZ3n+Xx+fs+X53mEuDvJ1E+G7L5LrwjaqFmed6D8ibqaU6mdpd8s78ozLrny6M7FvUKIkDuSccrwRyy/Vg14ffUcdmt56aKcp87cR/a3S9C3rsHavcG2Pl6ScVtYs06ePePpmMXXQs/km1Q4tlDQJiOrPpw3GlR4/9JyfSwd34UH5rc8GPL0LXBoqFh11WmYXPC1sHC1lsnxfZRZNLzbloitL4fZoXwCl3TMDaXjP6/hsil6WhouEm8GfFyeU7vgbeaG+3OuT1Qwb99J9wUdr55O4FJvJtO/a/H3Z+HvS2OqW4PHFEPNW6GN//GLPMOHfPOuagLj+wmM7WFmoJhr/fkc6XmMyva1TJ3NwNuVxuSZzXg6NLgMSuwnlwaEEBFCtjQ4dW78IHP2t5m1ljBj3YH/z2K85ixGTI+zz6yh58dU3MZNuL5/iImmZJzHVYwfW4YySqQLdYxk2/TQbvyWHfgtz+MfLGDGVsKVjnRchof5uXUD77UmcPmUBufxZBxHkxitUzJaKyVJIfKFTBa80XtuO96eAqb6c7k2kIt/5FncYyX8NFDE4T+0lJoTaWuIY/TrNYzUxGOrXsXwp1JipGKbEEJI7E1b/f+0Z+ExZ+I9r8PhLmLM/xpn/36R0l+SeO6HFbx+MhLbF3EM69VYDyqwVETMCyGkQggh3i9eWe/Qr8ZaqeBcUwodzjw6HTmcHtFR99tm8uojyPwqlL4aJbYvVQx/puDQC2EtN2uUSIT6YlWsz/aRgoY6OYVGBbvaV3PAnMIHpiT2t8ZR0hzJ4LFYRo+qGNSvmI0IE+tuGVOqOiTXUrky0FUVRXbtYtKqF6HV38srJ+Tsao+m2RTLhDEBR+P9N9LWBxfeds7qqKCMznfk9u8+jOSZcglby4LY/kkYBoMSl2kt/UdUzmT1Pbo7HkoIIdkUH1xYWbTsRMteea+xLLqvujSyMT1F8rIQIuz/5n8BdBDOUVi5DnwAAAAASUVORK5CYII=',
            blank:true,
        };
        engineList.music[5] = {
            name: '百度音乐',
            url: 'http://music.baidu.com/search?ie=utf-8&oe=utf-8&key=%s',
            favicon: icon.baidu,
        };
        engineList.music[6] = {
            name: '酷我音乐',
            url: 'http://sou.kuwo.cn/ws/NSearch?type=all&key=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC+klEQVR4nIWTX2hbZRiHn++ck3OapMu2oG3WCm2XUJm4zihK/TN0rQ6ZcxsIq0w6hG0XE/FC2BgqInhR6o0yN8U/IBYVp2PMC91VsReheFFdt27FaknDTE66Lmt7mpwkPfnO+byoE4SpD7zwXvze5+blB7fHiIRI73iw5dt3j6VVsi06BMRvFxS3FguSsfbkwY6e3hMnDwVmulOCUiA0KtLk/E8uJ89dreSn7ONLS5XPgSqACMGRF0798LEZshBizahpgtL8NOXJT7lu6Ow48DC6JlBK8fuSjVSSX94fr9gTpVbx/ScDas4J8dFsN4mOu0ktXGAwUuCeWAiEABTvTBYYv78ZLR7FX3SIZRyG97Wz642f3zKK+TyHn01xcKdL11NH2PV4C6m4jywBmgaGzqHWEOZUmWq1yNCJJ2FwMyISJf/iKEbY0nNApykX6dqzjYmnU5z5epL9hkvLepOzWZ/hvRt4rfcBRDRG/dI4ZGeIPDNAADnt1zknACDwUIDrChK772PE02lrD3Hm9UfZ5DvUM6P4dhb5h00jW8DPfQEgtc/OZ69lphbXXqEU0pfkl4uUPAcME2FZEAQoT1IbG0cWlolslyjnKgIKxvbWcD294LHz5QzFVsFN2wPF2ug6wrLwb7oE5TrBimTd/m6EkUcYHehctjXpB/PeDZcvewRqxiC4VEYFCsVfAl3SmHNpXLHw7WacD4vI5W0IazMCPO3OqJlrVMuslivITX2Et5ymacyiMl2G1d9QCyMEhSj4ArP7DpSrWDk1hQgnWYWc8cGEPXRvk/tqX3s45q9cp27PQ/Io4doIhjmLaEoAywBsONyDMjeCFuWr72ZXAAzAeynjrO9vq42qhOpTgYQgIGhK4AcFhNVFaKuNqjYQVhcT06Xgkd1vvyLh9C0BAKO216/b556LpB47q4XXrfVAb0ZYncSPprk2X2NLeuibG05t4F8K+DfN8YeeX2p5YlCNvdevnItvqt6td80A5v8d/gMdhg340YLUf+X+BAnLRacR4gVKAAAAAElFTkSuQmCC',
            blank:true,
        };
        engineList.music[7] = {
            name: '5sing',
            url: 'http://search.5sing.kugou.com/?keyword=%s',
            favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIAByAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAjlJREFUeJytkz9oU1EUxn8v7zW5xNekhSL+QxoUmmBxUozRxcUOgg2pgkJxrWBBqh0cdROqg5BBBaeKgkIIIkLawUFsaoUsUtLaDKUNVklKQhrb25j3rkNfYqx2EDxwl3PP9333fPccjW0RTZhngT4gAoScdBaYAlLJWHWitV5rAXYDw8CQEMI0dB2XSwfAti3qloWUsgo8AuLJWHWxVbU7mjDHL73pUlcm96lsKa1sZau6XWsey64rW9lq5utrFU2Y444ghsMxLIQY9Lg97NkVoMd/AltZfC7PUJR5iht5ANatCvOlaYQQg1LKb8Co4fQ85G5zA3B893k0TWMsc5m5Unq7RQC429xIKYeiCXPCBfQJIUxN27Kju72XwsbyjmAATdMQQphAnwFEDF1vXgY7IqzXK/QHRpq5oswzX0pTlPlmzsFEDCDUcBvAa/jwGj6igRt/KM+XP3A3cwGg8UMhY3vRs9xtVjfyFGWepbVZvIaPYOdJ+gMjBDvDnNp7kfcrL3+9BMjathXW9S2uyaUnvxGu1ytkCimW1mYZi6TpEgeArdkAsi5gqm5ZOxrWiKu9caeNaQAczJQLSEkpq0qpvwIHDt3i8Zkch/3HeLX4gLlSGqVUYypTGkA0Yd4TQtz0uD0cbD9CT0eY/sB1vIYfl6bz5XuO5wt3+LT6FoDN2iZSyvvJWHW0YWL82tGH507vHwg2lJercyyUP/Ju5QWZQgoApRS1HzWklE+BOPyHZWoStBD90zr/BDWFAshUlB4uAAAAAElFTkSuQmCC',
            blank:true,
        };

        // 图片搜索列表
        engineList.image = [];

        engineList.image[0] = {
            name: '谷歌图片',
            url: 'https://www.google.com/search?q=%s&tbm=isch',
            favicon: icon.google,
        };
        engineList.image[1] = {
            name: '百度图片',
            url: 'http://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=%s',
            favicon: icon.baidu,
        };
        engineList.image[2] = {
            name: '必应图片',
            url: 'https://www.bing.com/images/search?q=%s',
            favicon: icon.bing
        };
        engineList.image[3] = {
            name: 'pixiv',
            url: 'http://www.pixiv.net/search.php?word=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACaElEQVQ4jY2TS0iUYRSGjwupXYsIAqFdDl13tclNd6WgZVQULZrB6ddsbhA1FwkyNQOjCMz805nxMiM6ajq/OkjZxQElLS0sK6NQI7QkCCrTnhbfmBMatXj54PDxfO97zvlERERM245IlqbLXut/StNlj7VM0kzbRdZlHBVfJ+LtQDzGgtwGci6KuKN/1ueVH0Nc9bMi+3KD4u1AnGHEHkK0IHIyiNhDLD/TQIozrGpaEHGE1D1nGHGGEF8nIpnZt8QdRaxBUh0hDvl70HtHaR4ao/XZBLHn72kcHONwoAc5XYucqkFcCYjHQGSHRRdXC8eCcQbHp3kwOsnxQBxTQRurPBHSL7Ria3jE568zdL/6wGp3REHmASv3a3rkxRTfZ+cAWHsxipyoVK/Z69RpriK9oI0fcz/pH/vEMkdIxfUYSHlFhd40Mo29aQCATZc6kNyapKxhZdlchaPlMQCW+j7EGkg0s+SqnlZ8F0u4D4DNJUsAnGEkt4b1RQYAxvAEolWrCaVmaXqKsxlngv5XQF4taedvA9D39iOSV6sAssuiiy2C618ArZqtpTEA6p+8U2N1RxHZa9XF3vQbsKG4fTHAFkLMVfj73gCQVd6tIniMxYAtpTE1BWtAKduP5FTjbR8C4Nr9l0hOddIeJAD2ZjWFh6OTlPe8xmcMYWse4HLXMIPj00x9+YYt0q/c2euSAJnZlckOdl6/w4GybrztT7lyb4TCrmEO+uOsONuoHCWvswJoleJsxZFwYCoyEHPVQgRrQOW11S1ubH4MkTUbd4tWM1MYnwAg42Yv4mpZ+gcmyxdDrDcmfgF4QGAxnLBCrgAAAABJRU5ErkJggg==',
        };
        engineList.image[4] = {
            name: 'flickr',
            url: 'http://www.flickr.com/search/?q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVQ4jWNgGAUIIKBqwKCfUMSgGZXJwCklhy6twSCoW8BpUZTFaZIjz8CviCprXtbFkHX3PxynXPrGoBIQC5Ou57Fv/C/Z+B+Gf4jV/szgMs6EyMq7BqJoRjaEQ1zRmUXRFVkzsiEaDIK6DAwuE1ZgNSDr7n8Gvbj8Wfy+c7AZ8F+y8X8tl30dA4PrlNU4DdBPKFrCH7QUlwGNPE4tDAzqoclYNaff+MMgoGoQwaYdhcsAGxY5G0g4eExZh2GAUVY1LBCX8wevQNfcyevShRoTim4hDHZNMxls6yczSJjao0ejP5ta4Axe35mT+DwnO7MoupKfXoYfAABPvsL2GuU3QwAAAABJRU5ErkJggg==',
        };
        engineList.image[5] = {
            name: '花瓣',
            url: 'http://huaban.com/search/?q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC1klEQVQ4jYXOyU+TeQDG8Z//gIkxXogxXky8TTIeRhMzcSEdoKW0SIFibYuJLFbZVGyxlLbQFoqoBEhEBSlbA4xxNwq9zMXMeTLO0b4vWOhGoSKBUfHrAZdEEZ/kOT6fPMJtNLVPelpD92yNobv1ttCd2vNTI5aqhx0lxpv6/ftNO3fs2LN7+/a95Qd/r75VZBgPGsyTE0ZzaMJ4MvTQXBYSU772v/nrOdx/zIeJe6wF/+Td4CjvAqOsdl/n3xNlqf+Kjellh4dVfycrrVdY8XWw2noFOnoQD5yuEE8mWQyOsxAYJdU3SKovQMJ/lZmSUiK5OiI5Bcg5BUQqqom7fcScXuJOL288lzcAAsMkr/UwXVyKpMxHyitEUuqQFBrCmbnMmMqIubzEXb4NgMEgqdtDRMqr10d5RV+BrHwkhYaXh3OYKa0g0dxG2uNHjDU0PvoCjIwT93Uga/TIGv33wB9awpkqXh5Rkqi5iORoeSM6LZbedWCCheExIpZzSOpiZE3JxoBCTfhwNvPHDIwbzCGhP3TItPb4GYtjd0jdHGDGVI6k0W8OZOaSVORxYd9vzSJj27Zd8sDwwsrdB8z33GBaX4qsPf7zBwUGBtX5j4QQQnRVWvp5OkWy6zrTRSbk/E2AI0qkbC3Js+d5cbomKYQQYndGxt7ZoZH0cm8/8o8AhYbwURWyupDZs+eIXbATr7UiPqcsW3Xmfd8QEZ0RSV2EpCokrDy23iwtsqqQV+YK5i46mLM6iNbZWKyzfQWEEMKr03WtNraQqKonUlnDq/IqIqdrma21ErO7ibl8RC+5mau3E62zkf4WEEJsadLrfcuBEd4ODJPq7iVxtZuE/xrxFj8xRwvRBuemgBBCiKxfftU+t7v++b+3n7c9N0i3dzLf3Ea8yUOswUm03k6szsbrHwGfsrX4wMGTwVOVT144XHPznnaWmttYcnp5bXezZG1izdrER/CEaFr9QFrRAAAAAElFTkSuQmCC',
        };
        engineList.image[6] = {
            name: 'easyicon',
            url: 'http://www.easyicon.net/iconsearch/%s/',
            favicon: 'data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACOElEQVR4nH2T30vTYRTGP1txcttXU77DpQmbyVIpKLELhxdJYBE2MyIiasWUHOzP6Cb7cbcQotSL6raigTUpo8QLozQoAyEXUpJSqV/TWbvwdCEu54YPvPA+vO95znMeOLABp9tOam9vnwIkk5M6NvZek8lJBYjH4yoiyibYN5KGQADVVSzL0h0OF76qPZimG8uy9NXgIA67fXN9Lhrq6zQaiahlWTr+8ZOKiFqWleFbOrgVi+noh3FmZ2cAePL4IQBnTrUCMPJmZOvuA4mEiog2NQY0GomoaTi1qTGgtX5/xkVPT0+Wi+3rl+nvM2o4HUxMfCbSEeJuXx+vh4ZYTv2h0lvBqs2GXZXS0lLyCgCMvnvL/O9Frly9TqGrkOnpr/xNp/ky9Q3TdAOwaC3kz2B32S6br9KP1+cDYMGax2UYANTUVAPQHYtx/kLItlEgi7SHwzr38xcdnZdZWk4BsJJKobrKza4uJqemSKfTWTWZEQYSCT0RDFJulvDIbVJbU43D6eLli+fE+58CsC2dJh6PazAYzBIBQES0LdiaSXvzOXrksK7/yZtBlddLf+IZS6mVHHGAcGd0LZu5H/lDrCgvA+DO7e68ApcuhgA4drwl97G2eq86QEVEH9y/l2M/dO6sioi2NDerp7hI28Ph/2PsLChQ03Cqz+NW03Bq3f59WcXr+xCNRLSpMaAioiKiN651rYk01NepaTjVU1ykIqKHDh7IcTA8PKyekmIVEfV53Oor82RW+x9KpTd/hADUEAAAAABJRU5ErkJggg==',
            blank:true,
        };
        engineList.image[7] = {
            name: 'Pinterest',
            url: 'https://www.pinterest.com/search/pins/?q=%s&rs=typed&term_meta',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACD0lEQVR4nO1WsW4UMRB9sxsECAmlpbrbRKwpKE4nk0i0/AQSogGlSInID/ABKegoEimioCC/kJYiySKCkE7aC8rtUdKgSClQyHlSBN95N/batyQVN5U9nnnvzazXNjCz/92oSVKWiPcAnlfcR3KQL16rgCwRHBKn1Ki7NPz+5coEhBJXTQ5yL350XeShubUKnQDMZ7Lo3zBdH4F4IRFntvC6TjgXsnb6B0Rz04CNcy3CXXluARWQW7fjmw97vVPXesSq0y0OvzpFUNySR70fVR7rHthPxK+qT5NnbbFhq1BRdGD6L1XMo6GNyyqAgHlzrsE+L6RPQHhpy9GWJWL8+7HCal2sU0DJmD9MhrRzMcCxHOTk+K4dPXg0zN+VxLXFrldAlqRb5lwW/WcAkLXSBxNfPj8OUPzKV8PYCEteAcz01Joc4a0dlN4EC7DCVvGA39ZIxje7ANy9UgEAts3Jbut+BwBk0V/7F6JgAbLIV8x5HEWTXQ1+7QM0N+Z+kp6UFhl7XgE20/83gdZNv+6Oywh0pySuyJeDBDDjp0vESMX3tG95eHgwyeFTs/rQSyz4KNYWchfsLYrHkcKnMtMURzFwUVEdietIzhLBl8gB2MiBBtex7sA074S6rtVuwmqiryvTknsFWADWnYENyIMEaCA5yIn+/h2+9is16oaQA02f5e10E0QvKu5Gz/KZzewcjEjYbJKZwQoAAAAASUVORK5CYII=',
        };

        // 下载资源
        engineList.download = [];

        engineList.download[0] = {
            name: 'BTSOW',
            blank:true,
            url: 'https://btso.pw/search/%s',
            favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIACJAQAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAVBJREFUeJzVkk0rhGEUhq/neT9mGGYwZSXlIz9gsiJWo1gQxaT8BUuUnSws/ARbyyklCzXKwsJCERurIWtlZmpoGu/rHAtiGDSxctdZPJ3T/dzn6sC/UHqd9PQm6a96thGDeBPXiQgHI6ukfmWws8x1oqWF7iSnw0us1PZM7SOzTX6gLd4XiqChIaiCBoIIqBjCRyiU7ymUyOY2yNQnEDoAjLzGM2AsGPv+T3usmZ7O2NzsGlqXYOaQfJeb6JOqoAEEgUEDgRCeAqAC9klxQwirUCw9NELgZ5ndcTTe6RBFiKsSVYhZiPrQ7ILnAP5recAtV2aL/g8Q9yfR1qQl6guOtURc8BzBcwy+A54LvgXfU/wris72C6s3iBN7mPsbyVbu3mAiNfVJhW/3yQ2ycjKPXi5a/TWUoyFSFwvo+RS9jczXXeLoMWdaZkzKjRn8Wc/HVG5h5+kwfgAAAABJRU5ErkJggg=='
        };
        engineList.download[1] = {
            name: '谷歌搜索',
            blank:true,
            // url: 'https://www.google.com/cse?q=%s&newwindow=1&cx=006100883259189159113%3Atwgohm0sz8q',
            url: 'https://cse.google.com/?q=%s&newwindow=1&cx=006100883259189159113%3Atwgohm0sz8q',
            favicon: icon.google,
        };
        engineList.download[2] = {
            name: '动漫花园',
            url: 'https://share.dmhy.org/topics/list?keyword=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC1ElEQVR4nCXTyY7cRACA4b9c5a3tdi8z6e4JsygzTKJIcwJxyTPwfDwJnDjNBQgicCFESiRamSW9jt2r7barXBz43uETP02srSws04JD7tBUPv0RtHwAGC8tgxC+fyV4mMPNAMZryy9Lwd2TRu01VAeYTva8+e6YsoDbv1LiqMdun+HJkJeXHlHT8CJy+JxazjoOL2rBeC5QsxWkU8siaxjfafqx4OV1F7B0vA6ykdS1ZaYl/ZZhGCkeU83bj5pdblGzZcFwFHJ+McBRmnRnCbFIqSiNBXPAOIJ3D4ZAKk5VzqxUBL2Q/SJHbfca12wJByEEClNpssaQaUGaHohcwdmRywKXNKv48aHg8qsu89UWmgbneNgmLeHnX6fcTyzSkRS1x+0fcz5/qdkeJFFXIQr4+EmzLRLefdiQO22c0wRV19AKY6Ijh0KDdOH+3wkXF22+vW7DwfL7+wWLDBrj8eabFunGMF8tifMYB8ANBYd8QSM0xhquzk+oVw1uU+DFFiE6CNenn0ieJZrLkU9CyJFyUSjLdLzm9NmAr08UERWTnWCyXbOpz+j4lkHHkEQtzp9LTA1uy2KDkNqxqDKzXA18Li5CdjuN9jzu7kp6SUIImHXDsB3QTqB0DOVBMh8f2G+h7AWoOBBcn4ek2YFKeJCDFgIAzwKOZK/hyyMsVxnrrOLm9Qjh7OiXCnW/2PG87YGS1AZkY0iOFPapAqD2NL/9uSQXCa7oEokNw5Fks4tQyqB6wza3759wNLy+iYmkR7XLKfGQLpjG5eqqy9Oqpt2SXJ/3iY3huC/5NN6jAgkngx7T6YIo8FGqIokUs6xmU0CrbXl1EsDAASnAVJSVQgNRO8DphJZ+1wFASuh0PPbZmtNRl7d/PzDNGkoLbvh/z9z4PK5hNsnoJBLxwz/Wrraa+RPYpiA2UFiN348BeBznWEcTBz6HqqRxXOLQ5fTYJ+pI/gNDt17HeSMTvQAAAABJRU5ErkJggg=='
        };
        engineList.download[3] = {
            name: '海盗湾',
            url: 'https://thepiratebay.org/search/%s',
            favicon: 'data:image/jpeg;base64,AAABAAEAEBAAAAAAIAA2AgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgCAAAAkJFoNgAAAf1JREFUeJx9kj9r8nAQxy8xLQatGmPtIoiigoKCoAZHyeQutEtBHHRpl7yELq6+AP+8AIcWOxURQRzMIDhEyeLilIKDQYUg+eWeIT48VujzWe4Ovtzd9zgKEeEvl/kVFEXZCWMHVVUlSTIMg6bpK6ndpV6vPz4+nmtE7Pf7v/W2qVQqtvI8gWHOyc3NDSGE4zhCyH6/BwDLshDx9vbWFvxYIJ1Oz+fz5+fnXq8ny3KtVnt/f282m5f2mMtFWZblef50Or2+vjqdTtM0X15eFEWx5/zzhIjtdtsuvV7v5cy7uzuHwwEAhULhdDoh4vVNdF0Ph8MulwsAEomEYRiEEAA4Ho9nD8vlUpIk0zTtToIg5PN5n88HAMViURAEjuMAIBgMMgxDCKHG43GpVHp7e3O73Q8PDxzHHQ4H0zTtVVmWpWmapulcLjcYDKbTKTMcDgFgPB5blhWJRDKZjCiKqVTKPvRut1utVqqqdrvdVquVTqepr6+vz89PRVEajcZiseh0OtvtNhAIxONxTdMMw4jFYqFQ6Pv7W9M0QgiFiJqmJZNJn88XjUbv7+89Hk8ikbAsS5ZlVVV5ns9msx8fH6IoVqtVQMT9fu/3+yVJ0nUdf6Lr+mQyeXp6AoDZbIaIgIimaY5Go+12i7+w2WzK5fJ6vUZE6j8vfQki2h/+B8UpLqpv9VygAAAAAElFTkSuQmCC'
        };
        engineList.download[4] = {
            name: 'veryCD',
            blank:true,
            url: 'http://www.verycd.com/search/folders/%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACbklEQVR4nK2RPWhTYRSGn+/+5LdJk2pDa6soVkEH8R8Vi9VJXAQHcbQ46mBVFBe1gzjVRVFcXBy0VITSQeiirT+gWAfFtpZq06ZN0jbeNJrcJPfe3M+hWIhdFH3hwFne53DeF/5RInFzo/Ti3RE79/H93xhTt3fO6FpgUOTuH9n3Y2H8FUKhaWFUFZ24AMbljisY2b3lvDllKvL6+gc9UwDJW1vOVexSly50Gjo+CQFg3G21nZKhlaVNtP78nG9Pa8yZiOOm0pRTKYpTE+TeviZ60vvctgptITWIDK9ZF23vjSsA0bTi99ZohII+svNdMSc+icxkqMxncOZnsYxviCaJY5lttbEAhINOtL03DqAAiM4BR0Q2m2qdwO/3YIx04GYNKrksTjaDlfhCzSGHyAYfwiupXav6f2Wh/FrkylMBNIm/ReAJeyjVdWPNJLAys9SeLhPZFED4XEzW0HPBWVUFkFcPaD4JpfIBUCG42UWps9FaU4TPzBFobkGNVECFJxdHcG2zswqQHm1ottNJFt55lmryN5fxbJ1Fb9yPvmISgOTXFrAtXMfeWAVo7O6Ol6anCdhFRntWI20BlovulejqIFgSaQue3RgGwOP1Di/LwOh7TCExhf1mAmmpuEUFNy8Wp6gw9KieSrmIrmvU1K+4tAyQQ9yZ+/yB76bJ0/MlZIElgCzAcN/iGyFNcw739xvLALteDJ1Omko+WZRkv5nY+QZkAWQBeq9JcCyiAR+xVY1LFVYBAI5PxEMef+ilJlUenR3HzSu4hTDWbImVQZ91YmxMHBwYcPgTPdyy7Vj63tFE3+7tZ6/+dui/6ifLWRWj5AzXVgAAAABJRU5ErkJggg=='
        };
        engineList.download[5] = {
            name: 'ED2000',
            url: 'http://www.ed2000.com/FileList.asp?PageIndex=1&SearchWord=%s&searchMethod=ED2000',
            favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIAAwAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAfdJREFUeJylkUtoE0Ech79dJWYjSau2qcW0jZDSLoZYRfFRsLYHEcWD9OCh14AgiIg30YOCJzGHetNcLZ681GcPFgMaPTT1AaZK0NAmbvPYWBOy26YJ66EkkF2bi38YGGbm++Y/vwFTBWXJMK+1KvF/YICtZrjHLUFcbykLx3XBIgCYOOUj8jFNUJaM0PQUupJEU37ye+EzyaTC8+hiE9wQBGXJ6HFLLBd0lrI6oekp1NgsWuYX2cQ3Hs0kLDdbOnButzPQ7+HouTOkZx7z+tU75r/nNwUtgmP+LtScykLiJUmlzI9UoSXYENTDKmo1RAFezC9z6+YVvn76gudt1Ehlii1FQj2Di+NDlEpl9o5cwHv+OoIgcP/SaTq0Re7GOxpA7EOkSSbWO9jm2sGefQEq+Tiqmmf05Cj7nX/oP+Dj6cMbzL1/w+S92xw8cqLpe8V6e06vj+6xcWztO1GfXOXaYI4aa5TXJe48eMburk6Gh0f+nYHDvoXKSgE1NgvA2koBgIxSoluWmTg+xuFDQ+TzWaugPpmLRPEHBgAoqwr6amXjwK4+ens3RrVatYYYlCXD43aQymqWTdfZywT8gzgcdirrVUKTYUuIQlCWDNnbTp/Hha5VSCwVSec0wnFdMAdmhhtPEEWBzjYbtNnQV2ukc9qmgLn+AvHN01EAtz5WAAAAAElFTkSuQmCC'
        };
        engineList.download[6] = {
            name: '人人影视',
            url: 'http://www.zimuzu.tv/search/index?keyword=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADQUlEQVQ4jS2SS2hcdRTGDwW789FUNFCRihtB3YoLNy6mKGJFbBeCgtqdKKh1J4SK0NZFFxEVgiSahy1im2Zim0wSG/ImadBkknY6mZjHzGSm87xz79z3vf87PxeTxbf8ft855zsiZ893HR0u+C9Oabw3bzBfDii7EVVXkch7XNmwuZy0+G3boWAr8nbEbDXg5FjRl7Pnu0T+PPCfSWi8NaczV/apuBF1T5GsBQxkHAYzDomcR9VVVN2IDS3kgyWDFyY1jtw48OXorTqvTDe4U/IpO21zw4vQvYjlUsByKUD3I3Q/YrcZcilp8dGSwWvTDR4fqyNPJTRGiz5FJ6LiKhZLPgVLYQYtnLAtK2hRtBW/b7t8n7T4bKXJGzM6JxIaMpj32Lciio7ids6jL+0wlvVoeBFRq0XUaqH7EZN5j6GMw5VNm69WTU7P6Tw3oSFbpmLfUgzsuFxct+hNOyw+9LGCCBW1UK0WdtBeZ/AQ8OVdk7dndU5OaMgDM+RiyubjJYML/1qMHqabQYuaG1FzI6ygPcV4zuNS0uLTlSanZnQ6ExryyZrJS1MaZ+YNerYcKm77iAVLMZb1GM96FCyF7rer7cs4fLho8OqdBo/eriMyUqNzvM7X6xZ5S1E+TN03Q65uu/yadujfcvjPCKm4EQe24psNi+cnNY6M1hC5XuXNZYN0U5G1IzYbIQVbUXEjto2Q7ns2361ZfLtusa6F5OyIjKk4vdJEhmtIbEYnqYc8MBV/VwLemde5sGmRsxRFp/04X6yavL9gcGbBYLoSkDYVSSMkNqsjSS0gZYTEiz5PT2h0JjRentL4fM1kx1RkrYjFasDrszrPTmicmNQYKfqkjJBkI0BSDZ943qVjuIZcryIjNR75q85jY3XevdvkfjMkbSpulXyeHK8jw1U6btYYybukGgES32tyfHAf6c8jV0vIH5U2aLiK3KwRWzBI6iEpQxEv+HTcqCIDBTqGsozsmcix7lVffryH9GSQvj2k/wAZetiGXSsj18qcmtZINgJSekA853B8YBf5OcUTP/zji8TOdcnlJV+615Gf7iM9W8gvO0jvHtK331bvHrHxIsm6R0rziO8aHOte9SV2rut/2AZGwaMpOBUAAAAASUVORK5CYII=',
        };
        engineList.download[7] = {
            name: 'subHD字幕',
            blank:true,
            url: 'http://subhd.com/search0/%s',
            favicon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFn0lEQVR4nM1Xa2xURRT+zu3SFtKXZZeHYqFQwGxVEhQLhFQRjPERwdpdCGWDGCRYa/ylRkNYN/pLNARsiWB8pAuN3ZboH5GXGEFbaqIGlFViMXERIdtS6VI3bLt7jz/mzr1z7+5WSfzhSe7O7J1vzvnmzJkz5xKkBIMaQiE9q6+OA1ganbJOBwdAVAWgxhjtB3NMA4V7vPGOrLlOUfTTuEAAXl+ksAyDjQTeD7CYQkYLFiB2qmEwtKYE3N3RLv/oePrHJbDE13oURCv/ieS4wnyst6vlgRsi4PVFCssRT4FyDMvFZxsCg6whB2aYPUW5vEFyb6UsPuv+gojqWdHDxu+cqkpsbV6B+dUeMUYEZoauM/pjV/Dym5/h8sA1qBuktjrzib7aweWqPZtxb7TWBaJ6NukTZH9+tQfh7WtN42LRgqamEebNciOyaz0qKyYp8+wtkVbvjda67B5QZImvje28xSpffPpePLbCC8q1JQYRdez1ts9x8Mtzpg6n9Ha1ZO+UGXAOvx1v34ziIov0wNAItu08ivOxKxhJjqKitBgvbKpH/aLZKCiwHLpyw7tIXh9zEIUIKyUwCTCCjgZSBsxkQET4+qNmU8Hezj58eOBb5RhKvFC1/621qJ5RCQAYuprE6uZ2pDMZB1b0h9lTFPWeTWsAUIbBRmbBkJnM9pap5bYVtH/yHRgqBgCT+X/bziMmtrJiEhZ6b7Zh1X4ZBhsRCuma4M77FUeZveoZN4GZzSeT0bMw6i73/zZkw294/C7kF2FTE8eQDbdKdaL/++VhEJEZYBNcBVkYa554hq4mcT01huupMfTHrljjDhzAQDCo0VJf23omhPMELHoiVgwwM+qb3kEmnQd8g0JAQNPBARGeMOJDYUiM7kNnrAlEONnxDNq3+7HmkTuNOapHlFa+lxip20ox0KEHNBBVqSmXQWCyEsjb+3rxffSijXnNTDee37AMu19djWnuUjDJeQDIaOV/qRMAG3YEHgBpVVTnax3TiFxsHVJBz/wvZLN/ETY+sSivO5kZOz44ia7DP9idbHpFuT2N9wykqc7XOkYEl8AohuW2KNsts+KqFd68RABg647DON533nFxqYtigzTSVOdv/UkDbhNYAueMRid7gb7njhl4ZctyTJlcYhKU90PnwdPY1d4zrj4GftaIOSbYwcgWyHHCWHnHxnvGN2cuoKEljI+P/Ihrf6VM40SENQ8vwIPL5madQlL0EXOM6nxt6zVC+L84WJXlE/Hp3o22d0vW7M6xdiHMCGh93ngHwGJlMPMriBlfdWxBb2czejubse7RBVByKmRsk3QNM/4cTqLh2fYsg+Y5YHsi6vPGOzQJk+qs/7DdbvfVzYZMFuS4643zB2bCpYERG4GykiIFaxQ3bDyhkK4hFNKZqckYhRkPIFy8PGzm9dvnTjOdZwYWZ4dYUWGB7T5IjKSsRdt90wQYFVEC7m6ZCNXnaM8vAmrkg+meUocPyExy8rl/8Ry7Hce4xCfg7hYEgkEt2uUf1cHHJEJ4iLGns8+m60BrAFM9JQIDibUsTPOUYFuLVUSnM7qCYblT0MHHot6zaQSDmq3GWuxvtTmKAFRNr8Ce1xpQXjrRUpzOINofx6nTMUwsnoD6u6tx6/QKaIq6P+IJPPlSBNeSKVOXzEu9kRwlGSA/QgZSNrQh4Tf8qJnpxr+RS/EEGp7bl13CM5CAvTzPW5ZLejIjFxa6cOi9p1BcNGFc45mMjoc2vY+RZCqLAOt84pSjLLeXuQYZb7TWVQ5RIzqvj4ICDYFVC1EzazLmzXJjdCyDc78O4PyFIUQOnkE6rdvrWqMzDFEDOgn/Dz7NHFvgFG+01lWGwUYitW502nBcegDAJD5Oc6zaTiCX5PtUDwY18XmuB0BaFYAaBgNM/QSOMSgsUjsw7ie6ovNvYr7e8pZ+VIUAAAAASUVORK5CYII="
        };

        // 购物列表

        engineList.shopping = [];
        engineList.shopping[0] = {
            name: '淘宝',
            url: 'http://s.taobao.com/search?q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqUlEQVQ4jaWTsRGAIAxFs4Gj0DgGtTtQOIY7sAO1EzCOOxgLiCQRUfTf/TtE/zPBCAAAGAPiMvU5BgQRJjkj1zfe7JAguEw5tKfQPBYAX5NWn/YzpADmsQRWLyHcdP8C0IGa+H4TUGtFgy8AZ2Tp3RVwgH7b6wpaLfw6g8cWuGpnwStErHxG/aA2Vw4XQAxpLBtj2xxl+h82OwgQXd/5DGudpX0VOtMVPgBRELV9pv7F+wAAAABJRU5ErkJggg==',
        };
        engineList.shopping[1] = {
            name: '京东',
            url: 'http://search.jd.com/Search?keyword=%s&enc=utf-8',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACoElEQVQ4jZWTW0iTYRjHdxcUfrPZtq+cm25LxaQSQ4tO2IkKO1yEQVEERWJFYUQJQQUZUWQG0QGKIgoCS4pVBlKapH6fztNsW+zQZnOW5GGyxFkQvy4+LbUguvjxvu//efjxXDyvqmCaUFymFitKBf1/U6YWK1TlgljVMzsNt96qoLPi1lqUc/w+zng21tsjpqEqFfQVbr0VWWv+CykKsxSkhGQkjUl5a824ddYJglkpyDoLrRm5dK7Kx25dSEdOHq5NBQqbt9OxZA3Nxnm/hJMEUkIyTeJcfPuPEKmuwb11B+ErN4j5Aww73jHc6eRrcyufb96hMy8fSWPCNUmgMdE0O5Wuk2f51tODd08R/bYqYv4AwZLT+IqK6Xv0hNFQNwPPXvJu7RacmpQ/BcGSM8QCQTy7C+mrtBF5VUd71jIapou0ZuYSLr/G974+ui+U41Qb/y0YelOPY+k6GuMSaZwh4li5gahsZ8D2Ak/aov8QqA1IGhOtmbn0V9oYfFWLPydvikCcS/DE6b8LBANSvJH27BUMVFUz+LIa34KlYwKdhUbBgKyzEDp/mdGPITw799FfaWOo9i0dS9bQMF1PY9wcvHsPEgt00Xv7Hu7EdFSlgrbifVIGbVnL8OwuJCrbGXY4cW7cRv/T50Rlu7IDi1fjP3SMaEsbI14/nl37ccablAm6Vm/iy8PHjHj9jPj8dJ06R0t6NpHqGn6MfiPyuo6hunpGvH6iTS0Ejp3Ebp6PS2tRBMHl6wmXXeXT9dv4DhylJS0bSZPMh8PH6b37gM+37tF75z6hsxdx5RfQbMxA1pgmbKLWjKQ2IAkGpPgk5IRkZK0ZKT4JKS5RyQWD0jPT+Kvu1llRXRLEqrCYiktr+c3Yr5uUTam5dVbC+lR+AkXUXUZHV2HdAAAAAElFTkSuQmCC',
        };
        engineList.shopping[2] = {
            name: '苏宁',
            url: 'http://search.suning.com/%s/',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMUlEQVQ4ja1TQU7CQBR9xNWwpUTJNF0A4VCEhVvjBRo5AAR2pjHxAO0C40JMqXgDTfQE0mqiB8CFganxuTBtaKdFYvzJ28x/7/2Z/+cDJWFU0fBtzHwbgVFFo4xXGE0DndBBxAnICRg6iJoGOltFgy6GaxcqEZVh7UINuhhqBspD/Js4gfIQawa7ihNkxK062ptJy7I0Qf6sVUcbACAFzMUpwkLy9ICc7hcahA4iKWDi5gS3+Worr0I+nZH8Iklycc6VW9FudW3D1w0u9sj7Q2px1/vJbXB9GzNIATN08Jwm3q5IkpZlZUCSfL1MxZGDFylg6k38/EiLZsQkGb/rTdTG+HBEqqX+BLUkH4+Lx/gvH2nUw3gXE+UhHvUw3roXf1qmfNQEZNDHPOhjXhOQZbxvFy/H102X8MIAAAAASUVORK5CYII=',
        };
        engineList.shopping[3] = {
            name: '亚马逊',
            url: 'http://www.amazon.cn/s/ref=nb_sb_noss?field-keywords=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACHklEQVQ4jY3QT0jTYRzH8a9d0m1M8rbMZklQbjRDOpSnHXSTjpFHvVgH0UODwShJWn8gGXXRi6Q1lIpfWYwCYZkQwWqHdhrYH/UwgxmzGU5sv7Hf3h3CJ3U5+sJzeL58ntfzfR4REbHZbPZgMHhL+8+ampp61Nvbe0lE9ondbj+SSqWW2VWRSIRAIED/wABjY2Osrq7ujhAOhyclFArd3d5cWFzE4XQiIjuWtbaWN3NzZYhMT08/39qUSiU6PB5EBLPFwp3hYYaGhqgxmRARvJ2d5YCmadrWxjAMfD4f7e3t3B8fVyG3242I4GppwTCMvYHtFYvFGBkd5bLPx2G7HRHhRHMzuq5XBpLJJGfb2tTbzRYLFqsVEaHZ4agM5PN5TrW2IiIcrK8nGo2ysbGB1+tFRHA4nZWBRCKhbvb7/Sp00uVSE1T8xA/xuAI6PB4ymQzjExOICFVVVVRXV/N6dnZvYD2X42hTk0JqzGZEhEMNDap3PXjzX0BJNeLxOG63mwN1dTQ2NnJ1cJB0Os2Fri4CgQCGnoO1edhcUcBT9Hn4dA8K6wrK/syhF4plb+b7W4hdhPc9CngGRfg8AjNnIHEF1j4Chb+HjCJsLsPSQ3h3HpK34cvoH6Cvr69fBX8kYO4cPDGBZoaXx+DVcXhRD5oVZk7DtwjoWeAX+XxeFxHZHw6HJ3fNCZnHsHQDFq7BygMwvu5IZLPZte7u7p7fLX31eStakCQAAAAASUVORK5CYII=',
        };
        engineList.shopping[4] = {
            name: '天猫',
            url: 'http://list.tmall.com/search_product.htm?q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAQElEQVQ4jWNgYGBg2MzA8J8czADTvIOB4f9+EvEOmCGbydAMwxgGEAtoZwA6RtdA0AujBgxLA4hOyhRlJkqzMwCOOAUjv7eE+gAAAABJRU5ErkJggg==',
        };
        engineList.shopping[5] = {
            name: '1号店',
            url: 'http://search.yhd.com/c0-0/k%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4UlEQVQ4jaWTMQqEMBBF03iAxcLCzspTCJ5B8AYWsnfYYi+gVxFyh1SKIKQTCw/gkiYWwt/KoCZmA/shTSbzBn7+kMUP0T8C42HEQ/8IIGmDdZ5OtcUPsfghiK15yDNI3gIAJG2M7zTAPnWuKxwlaaNqtwBGPHRpoqbu2oRwA1ynHjXX1T2AR7EySvIWmxAa4PN62wE8itWlCTAWpbsHJg155gYYi9II6NLEDXBnZJcmv3PAiAdJG615E+LkkTVI1wwA0GJsBazzpAEkb90Adz9gBezbyIgHUTydAWob/wV8ARTCpDZEwN5jAAAAAElFTkSuQmCC',
        };
        engineList.shopping[6] = {
            name: '闲鱼',
            url: 'https://s.2.taobao.com/list/list.htm?q=%s&search_type=item&_input_charset=utf8',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqUlEQVQ4jaWTsRGAIAxFs4Gj0DgGtTtQOIY7sAO1EzCOOxgLiCQRUfTf/TtE/zPBCAAAGAPiMvU5BgQRJjkj1zfe7JAguEw5tKfQPBYAX5NWn/YzpADmsQRWLyHcdP8C0IGa+H4TUGtFgy8AZ2Tp3RVwgH7b6wpaLfw6g8cWuGpnwStErHxG/aA2Vw4XQAxpLBtj2xxl+h82OwgQXd/5DGudpX0VOtMVPgBRELV9pv7F+wAAAABJRU5ErkJggg==',
            blank:true,
        };
        engineList.shopping[7] = {
            name: '值得买',
            url: 'http://search.smzdm.com/?c=home&s=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACQElEQVR4nG2ST0iUURTFf+d9g2V/NKSgRYSriLCZ0jLie+Gi3LWqoKCFEYG0tHBTREgQSLWQCIRoWVCbKKKC/oD0fVGG5Iy2KDCiRQTBUBJh+vluC2dkHDurxzvvnnvuuU/U4H1X17ooy16Y2QAAUgfwEedWyawH6MknyefaGlc9FON4CFiH1C7nHkjaXEjTi5Juy+wm4Amhpej9rWUCRe+v5NO0L8qyu4uMdB3AYHZtFDVKinHunaBY8v7ZUgdmW8e7uppcLre/ShgMAwh2T2fZDzNLK9RQMBsoen8EwI3v3dsm6eDOkZGfYX7+PmZfgIvAyep0SI8Nphe7Sq8E3QDORdFEzUgHkFqBAUEGQAinsxD6CknSXDs7Zm8n4vhQNcQ/1CGfJKtL3hvSnpw0Vs8bDJnU7xbyUnfJ+zMG56sPJuN4s8FVpBOSNtYLSFpj0OkW3Nh34FqUZcOYXV45O9scYFAhTLlyeYXB14rtl0tEwDmgAEwBtL15U0Y6t2V0dBrp2Bw8DC0tf4EblZrbdUYm3fYkmay3V/T+iEGIzDKDe4LBUhzPVbJRPkkEFAL0C6DkvVVquw0OyyyYtB44YHB8R5I8Le7bd4oQLlXzMLOZQpo2OgBXLq+oJNvuzO4ibSokyVGg18GTkvcms5s1YfZGudyGSg4L+NTZ2TTT0PArnySqcbR0dWa/JZ2dC+FRx+vX35YIVFHyfgJoq7u+Y/ABswuFNG2s28T/UfL+gZm1CrYBz2dnZg7vGhtb9uH+Affd7MpRvsLpAAAAAElFTkSuQmCC',
            blank:true,
        };
        engineList.shopping[8] = {
            name: '当当网',
            url: 'http://search.dangdang.com/?key=%s',
            favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIADzAQAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAbpJREFUeJylk0ssXGEUx39zZ+a2g1QX7DxjMwzKJF2IR0iEWIxlV6KZeGQaEhZWbHRTsVCPJq5IG48IiYiFErZNmngUCYmgqGBFMljWq2Nx6l7XXAvxT76c73z/c/7fOd/DBhDyuqcAH0/Dd9vqVrmiJ794CZ29Bp2TB/NrYgHiEqBLA5frLsIX8rqnFH3nji9QUATdfULn5oOqQkys+K2fIL/Q4P+LKPq0vgaWF6EhIL7TKVZVxVZXwMoS1L439WELed0h3XM64eoKJqYhOcWI2tyAto/we0v4e1BMXm0drGxK8p89aGmCo0NI9cDwuLTwAEYFJWXQ9hnOzyDgh51tI8qTCdo3iIyCdz7Y27UQcDjg+jpsBx2JSTA5C1oPfNUsBHLy5OQf4uYfHOzD5DjM/YCICCh4q9MOfdalSRVWmJsRgZNj8GSYKCOj8QNkZllUcAOnQVDsEBcPZ6ePCMz/lPEY0tIh+jV0tpuWjWssLoVfG7CwLmXePSCXC95kw8AYXF7CyKBJwDhEd5qM5law2+HiLwSD8pRVVZIDflhbDRMI/4mVVeCvgVfR0v9AP4wOWzU2ZIPnfedbccyGGmWXmM8AAAAASUVORK5CYII=',
            blank:true,
        };
        engineList.shopping[9] = {
            name: '1688',
            url: 'https://s.1688.com/selloffer/offer_search.htm?keywords=%s',
            favicon: 'data:image/ico;base64,AAABAAEAEBAAAAEACABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAQAEAAAAAAAAAAAAAAAEAAAAAAAAICBAAAIiMAABwiAAATEwABIz4AAx0+AAAyMwAGChIADBQiAAAnKwALEh4ACBYWAAAwMgANGjMACAwQAAwYKgABHyAAAwsLAAEzPgABKz4ADh47AAE7OwAMEBYABgwMAAYIDAAHIz4AACwsAAAkJgABFxcAASc+AAcfPgABNTcAAQ8RAA8XJwARGCQADhIWAAsbNwANDxQAEBwwAAA3OwABLz4ABis+AAU7PgAGJz4ABRYWAAYPEAAPHTcABTc+AAUvPgACBgYAACAiAAQjPgACID4AACouAAAqLAAKDhQAEBosAAAMDgAEMz4ACx0+AAE7PgAMEBoABgwOAAoKCgAALjAABCYoAAQnPgABNz4ABT4+AAQNDgAMID4AAT4+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AQUREREQqQxIoKDApKysZGT5HR0dHRzw8QxIoExMdBBkUIEdHR0dHPDxDEigTEx0rOzsYBkdHR0dHPEMSEhMTKTs7HjgnR0dHR0c8QxISKCk7OzsNFUdHR0dHRzxDQxIwOzs7DTEAESA5MQM8PENDEjs7Ozs7RUdHR0dHIBwcPBIoOzs7OztFR0dHR0cDRzxDEyg7Ozs7DkdHR0dHR0dHPB0TKDs7Oz8BR0dHR0dHR0QdHRMoGTs7OyERG0dHR0dEBAQdEygTOzs7OzshGBwfRDQEBB0TKBIdOzs7OzseLggFNAQEHRMoKBITOzs7Ozs7BQU0BAQdExMoEkNDKTs7OwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
            blank:true,
            gbk:true,
        };

        //翻译列表
        engineList.translate = [];

        engineList.translate[0] = {
            name: '谷歌翻译',
            url: 'https://translate.google.com/?q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC/UlEQVQ4jYWTT0ybdRyH34MH4wVjovG2ZIl60IMXNTgoDtlG/wAy49bt4r+8XSFm2SZGox6WWNnal45SbKAbygKbShAT38yMNC9LMGyQsS5OdGtpOwqNvNkLLbwv76+KJns8lES9jG/yXJ98kidf6bGn6vY42tWEo/2SVutXtZotHEcT2o5q33vSdlfbpk68OQSH4uCNw8F+ONAPhwbhlQ9mbkuS9NADBY72S1e8cXg9ItgfEbR2bxH5k5aw+PuRJ5994YGCGr+qeePQ2i1whQRuReAMCZq6BC0992k6+nVCfuetE7J8pEOW5Q6fz/e+LMsdbW1tH7pcrgNSjV/V3uiD5rAgNr7BzB2TyzdM3u63aThVxjcgSGcKCNvCtm0sy8I0TWzbZm1tDellv6o1RSE2bpGcX+fjbzcIjG1w+AvBvqDApQhGxlMsZNOsrhgY9+6h6zq6rmNZFlL1EVVr7oXrKZOOCzbeXpvLSZPxpIl81sYR+IPPLi6RufMr0aERpm/ewiwV0fXlyoJqn6p5eiBx02RgwmJfUBBSLQr6Ov4vbeo7NzkYXiZ6foxPzvQRHvyGyPAo/SM/kM0vVQTNUfCds5lNrzM5ZzKT+lfmCpVxKwLl/E9cvXaNxORVOuNDpLM5VovFimB/DPaeFnh7BSe/2+D4sE1jsFLDrQj2hjY53jdHOP4VysAFrkxNoy//TqlUQnrRp2qtMfB0CRqDgvrPBQ2dW0lDNq5QpYbcV+IjJc6xUz2kUmmWFhcxDAOp2p+YqgjKeLrKuJXKZNcWzpCNMyioD6wTvTjFqPojp88NM/fbbVYMA+kZd6C7JQaeHvBEwNN9H/d/cHZt0qiUcXT+RXB0maVcmu/HNSanr7OyYiBJkvTwozt27a7aufvVqp21/+Pxp+uddd6xhYZ3b7Dr8BRnBn8ml02zcDdHLpdF13W2fbbnX2o/W/faBJ8GJpi79QvpdIr5+XkymQzF4ur2gqonnttzUkmSSmXJ5++Szy9SKBQwDIPZ2eTaP/p6Y/2tPjpQAAAAAElFTkSuQmCC',
        };
        engineList.translate[1] = {
            name: '百度翻译',
            url: 'http://fanyi.baidu.com/#auto/zh/%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAAC1QTFRFT6b44O/+Uaf44fD+Uaf4T6b4U6j44fD+Uaf4GYr12+39F4n1Gov1////FIj1B6sNLAAAAAl0Uk5T50ThROTm5kPip4USNgAAAFZJREFUCNdVzbEJAmEQBeFtxR6sy9gOrEZL+Tt4i4mB3O1Xg8EhaDYMA1PXBfutLsCr1gFbGffkoegxFKQpad0UnZlWtHGYSfybJL/NwrB9p886L3ifPt+ucPSWYnodAAAAAElFTkSuQmCC',
        };
        engineList.translate[2] = {
            name: '有道词典',
            url: 'http://dict.youdao.com/search?q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2ElEQVQ4jWNgGFQggps34Y2i2v83imr/78gpvZdgYFBgYGBg8OXkCUMWx2sITOEbRbX/MAMYGBgEkMVxahZiYJCBKTonLX+fkDgG0GNlNYIpnCQsOh8mbsjCYgkTXy8uvR+nAcgK0/gECmDifpw8oTDxMgGhBpwGOLKzu8MU7peSOW/BweFgyMJimc4rUAQT9+TiCiDKC7gwUsBiBezIzoUFGrKr8GnGBgSQDYjg5k3Aq7pFSKTfgoPDwYKDwyGNT6CAZNtx+RuqWYCgAXfklN6jayTo7AEHAIjTnaHLaQtfAAAAAElFTkSuQmCC',
            blank:true,
        };
        engineList.translate[3] = {
            name: '必应翻译',
            url: 'http://cn.bing.com/dict/search?q=%s',
            favicon: icon.bing
        };
        engineList.translate[4] = {
            name: 'Forvo发音',
            url: 'https://zh.forvo.com/search/%s',
            favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIAAAAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAcdJREFUeJyFkk9rE1EUxX/3pZMJxtCRuim01k03IkKJCI0E9Bu4VgxxpZaKurf+ofEDqHUhFCKKuuwHUCiKBgRL24WloVZd1KIVTFprMQ2d6yKZzEsZ07u6575zzpw7XCGi+gula6AjIIMAKNO+7lz/djM7v5srNugbL10R4X6UaVB/67XUzzunNwNsgubog7k3oB3FAMmk99sbmRxoMxguLp7vTu3LHvCSqGrjRXVKIA3+GaAMEHMSVL7MQCz+tW2FTLGswaC6scXC1aG21QDSjz44S7Oz28ZxQRVFN9cn8imTKZbzNjFKDDBz8Xhd3K4hmgkF2Q9gVBkNafqi0/7r9y7M2dgbfZwzIqRbct8872TQZH1qdTBsVHUnGBjRw3vrORS0AltGkJeW4+09DUTiITBPjHFrZ8NHerJPF3r/p+2+PPnextWJ3Lx5e+5YJRjE410sf/612l8o5XaL+8ZLrxJe7wlVv5lW7zbXaNSpZ8u6uLRK3IkR3hI1EVwrP9t/KtQ21qg+zAtYp7z2/UePLW6sa4sb33VTB1vitgRh1HcfReRI1D9Q1bGVsZMFexZ5dQO3phO+415CGVShDrxeuZGZiuL+A2DYnV2Yre6zAAAAAElFTkSuQmCC',
            blank:true,
        };
        engineList.translate[5] = {
            name: 'CNKI翻译',
            url: 'http://dict.cnki.net/dict_result.aspx?searchword=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB3klEQVQ4jaXSMUhqURzH8YuBrSbiIIKIS4vo4ORQgyJCBg5Fuuqgsyh3tKFwUsjFycEIwq0lBMc7RLQFIl4RnLxXzqbe4Yp0v28I6vle+F70h99y4Hw45///S9SO+Ukkasf8XovFgkKhgCzLrFYrdtZXgBCCw8NDbDYbnU7n+4Cu67hcLlKpFEKI7wOPj4/Y7Xaen595eXmhUqmg6/r/AUIIQqEQBwcH5PN5HA4HTqcTVVW37mma9t6fP4GrqyskSfqIx+Oh1+sBsNlseHp6olwuE4lEuLy8/BsYj8fc3NwQCATw+/0Mh0NM0+Tu7o5Go0GhUKBerxMOh4nFYl/3wDAMms0mPp+P+/t7ptMpXq+XYrGIaZqs12vOzs5QFGUbGAwG9Pt9FEUhm80iSRJHR0dMJhNOTk6oVCoAtNttzs/P2Ww2n4CmabjdbhwOB7FYDL/fjyzLCCGwLItSqUQwGKRarbK3t0c6nWa5XH4Cs9mM09NTcrkco9GIWq3G7e0tlmUBMJ1OiUajxONxWq0Wqqry9va2/YXFYvExynQ6zfX1NZlMhvF4/HFuGMbuPdA0jWQySbVaRdd19vf3ubi4YL1e/3uRXl9fyefzJBIJ5vM5AN1ul4eHh/fn7gR+kF/ZQQ/WnEhepgAAAABJRU5ErkJggg==',
            disable:true,
        };
        engineList.translate[6] = {
            name: '汉典',
            url: 'http://www.zdic.net/sousuo/?q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJElEQVQ4jY2TMWrEMBBFdQYJuU23BsM2gbQBFSl0AEsEs+CzxClETpALpEwbttjGJ9hiwXLh1uf4W81EcpRNBgTfo9HTeDQjlnmCk7q4xrbP1joErEPIfGJsezipsbWPt5eiTo0BJfOqwjJPAAAnNevUorE54Hw6ZoCSzmN2ENFY3jifjlkNurpBNDbTFAcAl/0DRFc3DEhrkeptNgRwUkNQ4H8BTurfAV5V6OoGz4/3nHZXN3BSIxrL+ibgryIWAVQY+r9bOo1nwOvB/6j+Vqc+ryrWwqsdtrbME74+3/l7HUKxkZzUEJf9U+ZMe2Eb7O9UBnJSf/fBMk/cLOntqa1DgJOaZ4NrQJNXSrMEoUszAL01vXc0FusQ+BCNL+1FYzG2Pa51VtKhEx+TOgAAAABJRU5ErkJggg==',
            disable:true,
        };
        engineList.translate[7] = {
            name: '海词',
            url: 'http://dict.cn/%s',
            favicon: "data:image/x-icon;base64,AAABAAEAEBAAAAAAIACAAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAkdJREFUeJx1k81LbVUYxn9n7y1+g3qPWYMosaKyVBp07yDJwFuUUKOoaU0v0SwuTRravHF/QFA0CQoHJTQJvHDR6IMUvXCvYpkfR49Hj573eRrsvY9KtWCxWO96n2e9H89bAZhd2XoVuG08aXvIMna5hWVUnqE9W8uSPl16eXyhMruyddPwre2USyCVJFJ+j9IuLCE5JL2eGX9sO82d//fXS2CXJKmk25nl59ogm7epc+OhQY4ED/d1U+3qpNY44ZuNTb6sQ8MgqSDXRCKrKuXsUyc1br0wzlBPN+XK0pSx4Wt8+OIEn48/Qn80kQJFEBHVrMgHWzzdnQKQVip89fs6PR0d9HZkjA/0MjP6KE+NDPPJaJ0PVneKOgTZlbwSA5BU4KfOwTzvM/H1doPV3Z957YnHeOXJUR7/4wFrkWCJRKF2SK0Qp62g2cptEWWo4vvDJmQd/Lr9F890pvm7gkwReQoSh9Fku37MTqNBblf7LQGqPV1gk2BKXKZoV5TaWZP7h8fsHDWIKPudR/NmtZ+hrk4AlmonSBUkkYWi7Xhu2Nzb56TVYjpt4sSkmJdGhnhn8lkAfly7x0YLrEAuIigJxgb6eHcqd3yPf6/N/Rof3V29UGVOELuSrlkCZ/8Bg3qzyRfLv/HZ+g57RdcK4f1def67Oz9YmpFEn87pcSADhdNpmN0IWqaYC7d1Y3sxU8S8pGkr0gOZ/aI4V7TfnhNdmlKH7fnkl7nrC4rWnEKLCh2EotDFRQesizpZOrC0aOmNP99/a+EfiilTPoj1fYcAAAAASUVORK5CYII=",
        };

        //知识列表
        engineList.knowledge = [];
        engineList.knowledge[0] = {
            name: '知乎',
            url: 'http://www.zhihu.com/search?q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACk0lEQVQ4jY2SS0hUcRTGzyLcRI9Nm8BlbaqFm9xFi+hhm9EgrVZBUETOI3VsUGeiN/RGAqFyGmcRFCFUFJRFWCs1k3LunZnGbOb+73W0ssfo3HEG+7W4E4iBtPjg4xz48Z2PI7J+Z4Psj/ZJ/Z0+qQ//v/ZH+2TX+YjIvmi/nJtBQhNIu4UETMcHraUVyiKnvyPSEHkhQQtpjlN5JkXrw0mkSUcaNcSjI81xxKc7fqFaEkjQRKQ+3CdBC3FrnHv2hUS2wPauDDXditqoSeXZMTZeGWd3WOHqMXH1mGy7abD6ZAppM8qADotlLXGG0nmGzQL54jyTv0oMpPPsDRv0j82ifpR4a9iMKBuAmrCJNKfLgFbFnogipmwqWuI8iuXwPMgiR2KIT2fEtKmNmMjRGOLVGVY2e6LWAkC7SfW1cdaeSiGHPvAiOcPBuxZyaBRx67xTNq4e0+nleJy3yqZuMWBV6CM7bitc3QptskDn62lqbxlUXR5nIJOnLmoibg1pijP8D+CEwhU2GMjYDBo2dvE3+tQcA2mbM8+/8ObTLLU9SwGCFuJPIG6NFW1JdNNmw6Vx5PAo4nVOWDpB0EJaE4hHZ8uNDKXiPPeGfrI8kETcGu+UTU1YOSUe1RjM5BeV+Bfg1rg//JMnsRxPYzl63/+iwqujT87R9HiKNYEErrBiKldyEjQtBDRq7L5lAFDdmWZlIMn7TJ7N1z9z8eU3coV5UtkCI2aBV6lZqq6nEX+mDAiYbOlM8yNXorN/2nldn866C2NUnk0hxzQuvvyKpzfr7LzlV+5QiByI9kvHBJuufmZrl+Es/AnkRBJpXuD9CcQXR/xJpLWsUBaRXecjcnoaCRhOpHbDIS/W4nkoi7TEi38AwHibcZoJerYAAAAASUVORK5CYII=',
        };
        engineList.knowledge[1] = {
            name: '维基',
            url: 'http://zh.wikipedia.org/wiki/%s',
            favicon: 'data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACKklEQVR4nM2Xva3yMBSG3xPdBai8Ah0WS1iUiCYbeINITBAWyApImSAjuKOgSUYwFRv43ILryCR2IN8VN58lGr/E5zm/TgiR5Zzj2P5vV5ZlNNzrNz5l9BVMtoTx0Gb214aHa3EAWiL84Vo8AosDfAHAbrfD7XaDEAKr1aoXu64DAFwuF2y326R+PB5RluWTfr/fsdlscDqdRs92XYf1eo3z+fxoB/8rioIBMBExEbG1lkO9rmsWQvR6qDnnWErJRMRVVY20siyZiFgp9bT/BGCt5TzPkwZCSAAjzT87BA/h27ZNA3gIb6BpmiiEBxx6CoDruh7931rLSik2xoy0EYBzjoUQDICllFEAKSUDYCFE760xhpVSUe+bpolGLAlQVVXv5TBnzjlu27aHFEKwMSaZMh+xPM/fB7DW9l6myLXWPWSe5yyEmASIpSYJ4L1MdUOYcyKKFlcYzVhXvAQIi01rPamHtRCrp5T2EsD3NRFxWZaTaYgVrFJqMjUvAZqmYSJKdoQ3npobAJLRewvA5zBWjMaY/nCvh1Fq2zZZ+bMAvKfDIRP2fJgGX4xa62RhzgYY9rxS6iklfg54CD/33zn7LYBw/vvDw2hYa0cFmZqi/wQwvKRid0R4h0gpJ1tvNsAwzFO1krqOfw3g3KPai6JI6v4OmXPm15zXp6IosN/vk/rhcMD1ep1z5OPL6Me7P19ZltHiL6X/B0Dsq/Xjhn9sRg1/qiZijn4DhUA2yPD/DEEAAAAASUVORK5CYII=',
        };
        engineList.knowledge[2] = {
            name: '百度百科',
            url: 'http://baike.baidu.com/search/word?pic=1&sug=1&word=%s',
            favicon: icon.baidu,
            disable:true,
        };
        engineList.knowledge[3] = {
            name: '百度文库',
            url: 'http://wenku.baidu.com/search?word=%s&ie=utf-8',
            favicon: icon.baidu,
        };
        engineList.knowledge[4] = {
            name: '豆丁文档',
            url: 'http://www.docin.com/search.do?searchcat=2&searchType_banner=p&nkey=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACsklEQVQ4jZ3SWUgTcBwH8H+QeDCpLUXR2vKGyZzHFuq8ErMi1PBK01LSBKdplgeYCPWQZWFgGV2GQhbpQ4XNSs3l0XRTZ+pm6hRiTtnmXOKZZfv2EstSevD3/P18H778CNnmOfmYHSSE7NquJylVjq1O3pTQbWH3Y7YpZcNBhn1uFpz/5SzNdhOGOZXQTa2Ji60XJdgr3ibndBWjtXKSi7Ju33lCCHWTsnY28Uoud3tyo5Oruv/Jb/VO/4Hlsj7Pn8VSD5SM+KB83Ae3J5lIr2Z2bcLc41YZtYrAtc7FaPTqz6JPx4dkNg3CmRjUjnFRKHZFUgcb2SNchJ13ufUXZvJMj76a8YfmRwOWvg9ANlcE2VwhZPqLGNJloXM6ETWjQeB3s5Eg9Qcz1D5uozcpf+0+Il6IhELfhKn5z5BqL6BPm4ZeTSrE6kQIp6LwXBGJq4P+yO7mGWh0mrtRO3ma8xpVAeiYiYZcVwOFXoCB2TyoV5qhXHwG3eoHKBcFqFdE4NqwF3JbuF8pFIq1sSD0BDWzeS4EzcrD0K/JAAASdS4AYG19HdolFQCgS12BkgF7ZApYGkIIzVgQdoqW16jh4eUkD+plMdYNK2hTpQIAZLoGNCjifxfcQ26PHfhNbL2lJbH6M2CgRVTtBAvVI87QrkoAAIIvcQCAIV0d6sajAABC1SOc6WCAX++tIITs3Dgi7fJbx/kK+V50Td+FfFaIx6MHMarrxouJK7gpDYdcK8HDwUvg97ERUeBSuekHAk7uKbo+xkKByAH5H+koFrsgt8sBWe1uyGhlIaHRFSltbOQLgxaodub0rV53R2yp3dNSOReZIi5S33OQ9I6D2CYOYgTeSBP5oUh06Jt7kE3kVth4wcmMgrw3Icr8/iPI6Q9HVk8gzrUHGNIfhLTs97Dx/Tf/C0aUi3kge/guAAAAAElFTkSuQmCC',
            disable:true,
        };
        engineList.knowledge[5] = {
            name: '爱问知识',
            url: 'http://iask.sina.com.cn/search?searchWord=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACRElEQVQ4jY2SzUvTcRzHv5dunjqEHWJrzqVGPqxLeUkR/4PPd79Nk/QgFV6GWmhRoCAooWaSumUpiVD0DBVIUkqkl/UA5W/zYU0z0HBqkaZzk1d/gM56nz+f1+X1UmqXuYwKXFKCFhdaG7g9Hna727Hs7Gyn6DKczsbA7T4z9mzoY/jp8MRcXcODgEjVvyEilRQXt5Nmuc6pwkG6+r/iG1ikoPgRx080BUXOJoeIlGM/VB8+mt6J2rcfW0YP+YUvOFn0kvyCYWw2PwcPFvm0W3aHiFSSmV6NRwz+RHrxiMbiuIXD8RBLVhei3YgW3JIMoDWlWlgPPyFu3mBj1o/WgiEajwi/pvtILNxLDnBpIRr2EzebYLIDgq2shduJB30Q7gSzjVioA3ElARjiIREdgm8DEGwmMeljfbaD7Zl2CHYRMx9DdBwxkii1plqthgjxpS/E5rrhczeEOtkONcNEB6yEcGsh1Wq1JjWhlEoREe70XBr4NP586udyID4RGJzq7akb0FqjlErZ61kppZTdbs9yiUaLUCpChQjiLvm/EpVSSotws3WY2JEstmzHiOTk4a/xzYih94ZUVXm92lVOS0v/+shohLHRIAlbLuNvTMbemjRcu78ucm6vEktpbevn9Yi5NT2zycz3BVbTclic/0FkbpOh0RCNV+9GzkgSC2II7z68Z2p+kd8J2EhzQmYqK/ZcVteWmV2aZuKViXiSpix4vV5qay9QerqMhQOO6ELe4e1ZS0b04pVaLtecp766bkdIfwF25n38sMbXHQAAAABJRU5ErkJggg==',
            disable:true,
        };
        engineList.knowledge[6] = {
            name: '萌娘百科',
            url: 'https://zh.moegirl.org/%s',
            favicon: "data:image/x-icon;base64,AAABAAEAEBAAAAAAIABPAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAhZJREFUeJyN011ozXEcx/HXOc7mnON4mM0Wo7V5ahJtaTIkuSFFQnGjFrmRxIVy48KN5E7K0412Qx7WmodyQexCuSCxhRUlDzPLtrOj7cw5/n8XkzO2C5+736fv99Pv/ft9v/yr96bJSo7zIZQUioy1ouOKHjrpjjNCVX/57Za4oA9Txtqjabdt9kmdOrPVapKS8EOvK54KTDGEwByBapN1KJKS0m6XphjIalSsQajYiIRhxJWq1eexNnERk5yU1CLpnk++KvVtIsZlQve1uSV0aIwf0eyzZ3boVDIeYbQoqsU6GbMt0q7RR6026LdZaL6MTfKKRFHqgfW2mWdw9BGfWOiSTl+0yTvsuddarTRsqX4HRQ2qttERszSql7HMA9sKv9BlldB0m9TYq0G5i3qcFsgoMijmvrQZ7qrS4LmELgMmQ+w3QKWoPl1KVEuLa5HVpNiAwEzDDhuSMCjw3UZDipQJCwF94kK1XnmjV6cae+SFKuSkZe1TJyIAB3BepYieAkKAEjftNNVua/SbKSnvqx6BuHNuOOeqy84aUCanXEJ3ISAuLy9lru9iBqStENNhuVCIGV6a6q2cXt0q5MTU+lJAWOqRF4676pScb9KOqbTfW91CzHfdSh2g1WrF8hb7XLjBWu0qbJWxwIj1KhyyxTXbf6/OuzHLlTVH1AcRP8dP4kRqdtQT5X/Od9S77sT/Nf+HfgGu7K8KC1PzBgAAAABJRU5ErkJggg==",
            blank:true,
        };
        engineList.knowledge[7] = {
            name: '果壳',
            url: 'http://www.guokr.com/search/all/?wd=%s',
            favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIAA8AQAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAQNJREFUeJxjFGk1/89ABHCTZmYwUGdlYGBgYDg+7w5cnIkYzQwMDHDNX9/+RBFnElRbRpTtuAATAwMDAyuPCV4DVEX+wdmfXn7HNIBHqgiv7dzC7HD+86sf4Wx2IU1EGBDjFXSgwyKGGojYvAILPBj4+fk3nC3ILopqAI9UEYoh+AKPXUiTgYEBSzQihwdy4DEwoEahDosYdgMYGCBeQQ88BgbUGBBkF8VtAI9UEYOirBhu5/MiwgVnSkw0nowhBotCHU4r/AZEKfMyKPPLMARpLsFqOMz5OA2IVYIEljK/DIo4chTiNABmOwyUWhxgYGBAxAAs+nAaALMdGSB7BRZ9MAAAP2Q1NvsvI2QAAAAASUVORK5CYII=',
            blank:true,
        };
        engineList.knowledge[8] = {
            name: '知乎(搜狗)',
            url: 'http://zhihu.sogou.com/zhihu?ie=utf8&query=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACk0lEQVQ4jY2SS0hUcRTGzyLcRI9Nm8BlbaqFm9xFi+hhm9EgrVZBUETOI3VsUGeiN/RGAqFyGmcRFCFUFJRFWCs1k3LunZnGbOb+73W0ssfo3HEG+7W4E4iBtPjg4xz48Z2PI7J+Z4Psj/ZJ/Z0+qQ//v/ZH+2TX+YjIvmi/nJtBQhNIu4UETMcHraUVyiKnvyPSEHkhQQtpjlN5JkXrw0mkSUcaNcSjI81xxKc7fqFaEkjQRKQ+3CdBC3FrnHv2hUS2wPauDDXditqoSeXZMTZeGWd3WOHqMXH1mGy7abD6ZAppM8qADotlLXGG0nmGzQL54jyTv0oMpPPsDRv0j82ifpR4a9iMKBuAmrCJNKfLgFbFnogipmwqWuI8iuXwPMgiR2KIT2fEtKmNmMjRGOLVGVY2e6LWAkC7SfW1cdaeSiGHPvAiOcPBuxZyaBRx67xTNq4e0+nleJy3yqZuMWBV6CM7bitc3QptskDn62lqbxlUXR5nIJOnLmoibg1pijP8D+CEwhU2GMjYDBo2dvE3+tQcA2mbM8+/8ObTLLU9SwGCFuJPIG6NFW1JdNNmw6Vx5PAo4nVOWDpB0EJaE4hHZ8uNDKXiPPeGfrI8kETcGu+UTU1YOSUe1RjM5BeV+Bfg1rg//JMnsRxPYzl63/+iwqujT87R9HiKNYEErrBiKldyEjQtBDRq7L5lAFDdmWZlIMn7TJ7N1z9z8eU3coV5UtkCI2aBV6lZqq6nEX+mDAiYbOlM8yNXorN/2nldn866C2NUnk0hxzQuvvyKpzfr7LzlV+5QiByI9kvHBJuufmZrl+Es/AnkRBJpXuD9CcQXR/xJpLWsUBaRXecjcnoaCRhOpHbDIS/W4nkoi7TEi38AwHibcZoJerYAAAAASUVORK5CYII=',
            disable:true,
        };
        engineList.knowledge[9] = {
            name: 'Quora',
            url: 'https://www.quora.com/search?q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADQUlEQVR4nO2WXYhUZRjHf8+ZzS0Jw9oUtMSa2V0TI1MJwqiETSzNWnFnxkzpoi5CSqKLCIwGL2Shqz4uFvoAtZCZYEet9GI1Ay+EDRQ1ktWZvNiIVNA+2V3dc/5eNDvunPPOeLS9Uv9X5zw8z/P/vec9vM8Lt3Szy+Im7kkx5W+PTnyWCRYYTBc0A2cMymb0kaCYHmBgQgEKj3OHzvGOxJvA1Ks0k6A4yWPTqlOc+N8AhRRzJfKCedUC4yjGF+bxEz5DwMxALDfjZYmmStMhYGOmzKfXDVBIMVdwUOLuarLHxzaft9Jf40fykywMoI9xX8kz3k2X6L5mgN453HNplKMSM8eFD2ZKPGWGGkCvDMSuGgOPlzKn2FGvxnMFL15iS8gcS7C5kTlAusRujCM1QfHhtw/X/3ciAMUUSYPXQuEL9ggHGplXQY1ijb+4959h3o4NcBEyim7NYde+OwECfowExZrYAIhnHXnlOOYVlRw9Hyy00x4PAGaFAwZ/xLY3/nSF5TM7HoAxPVJsDMf1b064c6VoXzeAOB9lojkuwIiY4oqbcSYegDHogLorLgDelYNrvG5r4rQr3hT14nvgsRBUcuwx38ZzCnjFoBW4U/ALRq/Xwrb0IYYsYFrExRjszFIi5+INEyWip5bgUeXwdrUzA5/diC6J+RIpxFICenSW/uIcZgcBixwmn1mOwPUFIgCrBzgG9IYIWgpf8cQLA/wmjw0Y3Ubt2BXMGxllD2JpzeKNc02T6XGZQ51ZsDPJ/SNwXFzZe4N9mTLPjL0feJrbz/7KdonVDZrLS7C86yR76+U4Z8GLZQa9BM9XxioAgo58im7l/qtZ8gPD0+5jHXCsjrlvxoZG5pW8+sq38qTEDsSMaoHRr8p9wIy/NMoKiS2Oxp2ZMjurC8jh8T4KD7Sr3oi+aaPlX58Pxl84Ysn4PFviVYB8Gx3y6QP2Z8t0XBPAmArtPCCf9cAyYIHEpEqD34GfMRZLtQeWwXdm9AewHpE0+ChTZuN1AYQ1NuNXHOcCQL6V9xSwuWGRsTBb4vCEAIRV6CKhI2yVWFvH/JNsiTei4QmUcnj5L1lj4nWMhxAJjBN49GROsnUivW7pxtFlNM8U1KJDSwUAAAAASUVORK5CYII=',
        };
        engineList.knowledge[10] = {
            name: 'stackoverflow',
            url: 'https://stackoverflow.com/search?q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACRklEQVR4nM3XXWjPURzH8dcfUVsekjuhZVa0mI3kIeUhzcMFkvJ0sSgXLpCSkljZhRQXKLlAUliJkodSyhXSPJQ8jF14KuXG04rR/i7Omf2a/2y/bf/9fet0zu90Ht7nez7fc84vk81mFdIGFHR2DOqqQXPthLxMXLz3Jf4DD/Q1wDTcRXkhAIbjJmbgEkb0N8BnbEIWpTiHgfkGGIhJie+L2B/L1ajLN8ARPMDmRN0+XI3lnVidL4BxWIEhOI4zKEIr1uEFMjiFyfkAeI2puB2/N+AeygQ9LI95ES5jVF8DwAcsxAFBfOW4j1V4HqGyKNGJKHsCsBbLEn1/YRdW4hOGoR6HcEPQhAh6sLcAw3EUV9CIbbGO4ObpeCTs/XbcwknhXPgmeKVXAKPxJJbH4zDeRqgyvMJMnI5t5qBBEGkFTvQW4CnmoipO8gNDsUVY3XXMw8aYvqMl9mvKNWBPRfgANRiDPXgvuL0a1/BMUP8iLMa7zgZKA7BEiO+J2tX8UTj5SrBGuIgI23EEs7VvWU7r8j2QsB2YH8vNeIyHgjceCsfweeFG3IoFONbVoGkAfuKLEGbFmBVTm7UIq23AHdTia48ATp2t/1NOHOTVwpaVCidgZcyrMBKDY11lbL9UiIr0ANHaXquZRF2rEP+NuJCoHxtBKmI+RdRD/fi6LKxu2p0cp1sAaexNTJfSdkwDkPb9nnPFHa3gj9I0HujWitJawT2QyfVrFsOwr//ZMjXr/36dFdwD/9JAXva8oxXcAzk10J/2Gw08e05AgXJ5AAAAAElFTkSuQmCC',
        };

        //社交列表
        engineList.sociality = [];

        engineList.sociality[0] = {
            name: 'Twitter',
            url: 'https://twitter.com/search/%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABR0lEQVQ4jWNgGEyAH5e4bXhCgX1ibqOVb2gCklpU9ealvRuRFMCBau3cCwxTzvxnmHbhP8PEk//1yyfvl6xb9sDGLywJRaFh/+ZTDBNP/rfOrZ8PM11VW9uAYcnj/wxr3iHwwvv/eZfc/mxkZeeEYoBvdnkdw5p3/xnm3PjP37TunXVu/XyH3LopKJqhODCrtIKBgYEHxQCDliVH4YpWvvrPMOfGf4aZVzA0M6x595+Xl1cEI6RcfIPDeFc8/oxNAzLWWHjuNq5Y4PFvmT6fkCH++dWNuAxgcPAJCteYc+Y2PttFRUUlcBrAwMDA7x4UEWUzbcchbJotbW3tcWq0zq2fz1+38h1D597/DPNvo2h2nrBmG1QzMy4DmNXU1DR8I2IT/FtnLYThkPKWTs+g0HA1NTUNfJqRAY+kpKQ8DEP9y06MxoEDAKUW4Kpi1NnUAAAAAElFTkSuQmCC',
        };
        engineList.sociality[1] = {
            name: '豆瓣',
            url: 'http://www.douban.com/search?source=suggest&q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACOElEQVQ4jZXST0jTYRjA8UfQNd2w3DqERIQQBmFQNPFgHVwI2SHokKTQpaB/RJvZ/JPLhWWkCcq2lCIhFILyEHaoYEr9LE1/bXMzqYOYTmeUOT2olWjfDjYV+qcvfC4vL194eR6R7Zqjkqf3SK5ubfL0HslJuCeSr1ekciNSmoAUa1bPvh6pMCJyRNcmJVqqntehjvhXLa02EynSIpKr80iJlmrFSceHLtoHlP/qGfGxs3ZvNKD3yGUDYtWw5XoaJqeZzPoD7Gs4+JsMdzYmZxYxxQakUIfYjdFAEnI+lpa+VgCmv88QmZ1k6uvUkonZSaIn3WVGLLGI3bAiYInjYfARAObbh0i+ksLmyh1Lkh1bud/bAoDJmYVY4v4e2HQ1FTkhyNkVjgt1L+v/FYil9d1TANydd6hsu0mN4qZGcVGjuHA8u4Z3tBeADHf2H75QoKX0iYPP0+MADEaGCX7sp//TewJjb/k2PwdAz4iP1KrdSIF2ZcCAFCUhZwTr40sAHG46hpyLQQr1iC0R/1gfEzMREsqSEeu6xffLASNSEI+cFrZV72F+YZ5GtRk5JchJIeXGLhZ+LNDse7B4Z4lFLiZGx7i4SLe67qKGvPSO9S2NSw15UYd7GIqEABif/oI6rKKO+jG5zIhNsxxoeN2ILxzgzaif9oEOXgx24gsH8IWDdIe8tA8ovBrqxhcO4gsHSHft/xXI1ytSbkQuxCNWzerZEhGHEZEcXZNUGBF7ElK2BuUGxLZh7icJ8DyZ0CDAawAAAABJRU5ErkJggg==',
        };
        engineList.sociality[2] = {
            name: '百度贴吧',
            url: 'http://tieba.baidu.com/f?kw=%s&ie=utf-8',
            favicon: icon.baidu,
            blank:true,
        };
        engineList.sociality[3] = {
            name: '腾讯微博',
            url: 'http://search.t.qq.com/index.php?k=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADd0lEQVQ4jXXMaUyTBxzH8SfbK98sMjXAoEAB0YHLRuCNjnMLMxhissQd2RYPZgzOuBcsWbIsmbAwNhG6FaaAlhadghzLmFAw8MxyFCiUlkMOW+5SEChFwvGUcn33QvTNsn/yyf/36isIgrBXfvJcdnyGRoz/SSPGpReJMbui0orEY2nP/4t9NK1IPJZeLEak5lQdCIs4I8g/PK/80uTmvHmDZJObs13rfGKQ+NQgkWx0cdYo8VG7xKk2ic87XbvW+cK8zQcavUuITtc0nu50cbx2mgStnfdqpkg3LWByuLCvbjK1uknHnIvvOx3E1UxxvHaaEw+nSWqY50StHeHoDyrxVMsysQ8mift7Au3kCu6tHUT7Cjk9Cyh6F9DZV1nf2ub+8BJRVRO8X20joW6G+KoxhMjvCsSkR4u8XT6MZsjJ9g5cbp4mrNRKyD0LIfcshJVa+UY/w84OKHochJePEFNt490KC8Jb314Xo7WzJFaNIG1uk9k5i0zdT2ylFUX3PDnmOaIrrMjUA/xqnmNe2iC20kp4+QgRJQMIb6bmikdKLKT+M8qCtEFksZngQiPi+DNeXN2oE3l+J1F3e3CsbZCstRBw00SYqgsh8OscMfCmiR8bhxlxruGj0BFeoGduxfUysCi5eadAj1zZhG1J4nLtAAdyGgnKa0Hwu5QtyvI7uVD9mOX1TUJvNBOtbmdJcr8MVPTP4HFVJPJWK07JzccV3ezPfoSfsgnhja+yxACVmfBb7fTNLXPyvpmmcSdKwwQp2gFS6y3I81p4JaOBa23jTCxJBF1vwTtXj6+yCcEzJUs8WNyPV24rhwsNZOpHMU4vslfRgpCpQ/hZx55rTVyse8Lm9g4XH1p4TdGMb34H3soWhP0pWWLwXSueN4zICoz0zM5xWjvIEY2ZjDYbVw02dJPPWHZvcaXVhkeeAZ8CIzJVN96/tz8PHCwbZ19hL59p++maGcVX1c25+gn6HBK9DonbgwskVll5Pb8bWVEf/uo+Am4P4pNvRNh36Tfd4b+e4qWx8EtHF2VDJrzUFvzvPMFbPYi3ehBP9SDemiEC/7AQtCu4dBQ/VR+Cx5krdaH1a8jL7ZQMNVDwuBW/smkOVU4RsuvQf9gIrXHip+pBeNU3KNEz/c+n8pIxEh70EVPVT0DJOIGlY/8rqGwS/6Je9iRduPMvGb/OaZ8pffkAAAAASUVORK5CYII=',
        };
        engineList.sociality[4] = {
            name: '新浪微博',
            url: 'http://s.weibo.com/weibo/%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACpElEQVQ4jb2SXUiTcRTGH9CZNmeyvXO+2163tSWaFWmsMmtpSpC1EBNDJaiky0AEL6S0D4pKHVFpXmTaB5FdtIuEqBslBCMqKyNDUFKpLQ2rOb9y/s/pIlYUeBFBz+U55wfnBw/wHxO7zowNa4zIAKD6a3pPOkpG6zA+WoeJ50fwJi8VOxc91gLKzpjYwjUq1cbwLA7QbluJHVuSkespxsWpywi5HNj+JxtToZWOv7As980kp3G/1T4pAXJ42VCCpp5q9KZbkHmhFC091ej7JQgk3JLND4LJK3nckcJ+Rwr3W+yTOUuW5rvV6pIqrXRib6L6QI0bp7uq8NRlx7aRs/gc5uO9RqU76EjlUZOF3+llGjGYaECSZ/t0CV8+KTaeSU7jLr190GWM3N68H9d2rEaB34PZH6/pE9umbCt42GBmX3YezRytJXH9JoVaWjlQWcUfMjfzmKzwsySrzwDYAGCtAmdDEZqRGR2d609azr6UVRy40kJibo7eDg/Tw+5uGvT5SAhB8z4/TVRW0ZCshO4ZlccZkdFbfro36PVtAesKnrrrZSEEnfF4CAABIJ1OR16vl4QQtDA/Tx93FfC02cbdim1IA0gAgDvx0qPpfDcLIehJby9pNBoqKioit9tNKpWKnE4nCSFICEHjhyvIn2DkfqtjMqyCGrXG8y07j5mYOzo7aavLRYFAgLKysggAHSwvJyEEhfx+8m1y8YzFwU16QzuAiHBpzA+khFd88hQvBINcW1/P63NyOE6WqXDfPhqbnubQ4BB/LS7loMnC90yWHgkw/tYeCZDr1eqW97sLJ7ntBr++1MgDV1uZO+4zHzvBX9Od/FJv8FfrpHMA4hetsAVILYuIOOSREi+3GpX2xrhlt2tUMed3R0WVGYGkRcF/yXdyajYEKzT4iQAAAABJRU5ErkJggg==',
        };
        engineList.sociality[5] = {
            name: 'Facebook',
            url: 'https://www.facebook.com/search/results.php?q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAl0lEQVQ4jWNgoAbQtE48bOXX9J8UrGmdeBhugEvs7P8eSYtJwi6xs//DDcCnMCx31f9j5x79//X7z//3H7//v3H3NVyOKAP2n7j3Hx2QZMDXbz///////39+3RK4/0kyAAZcYmdhyOE1ABd4/PwjZQYsWXecOANg/oUBGN8hYhJ5YYBNbjgZYOJRdZhUA8w9a48QmVfxAwATIfnUl6gLIAAAAABJRU5ErkJggg==',
        };
        engineList.sociality[6] = {
            name: 'Google+',
            url: 'https://plus.google.com/s/%s',
            favicon: 'data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACM0lEQVR4nG2TT0iUURTFf/d93zeiFkJkFLXJkhYFbYIQIhdZ6EyG0DCWRLZLWrcvgoK2bdwFLUSKIKMCW4hkZgsRMaRFmiMVhSgurNCcee+0cPwz4uU9eFzOue/ce7jGtsjfvrVfszO/kEBCIYCEJQl1z/ttO74skc9lJAQl0kYBKOUCxbhi+diLt1XrHLf+mMmltb36ThEX/lVOX2zcwDqAmWyzkJACWtNQdtFmbZWU5bPpUYB4uuvaPubnQaKYVFDb/aTsx5+dWWIgQpv9Svi/S6cAnJubm0PCR6kN8sjNTj49uAvA7GqBZe8RYu2UFArybecf2de2JmHGnsfPABjoaIMgnBkEEeGpdsahOMIFqO3pY+ZKhiqMGBFT6hlg/P4dVPSknHG292VZKxPtrZx8+gqAw72v+dKeoQZwqGQbsLvuCGZGtMP0VxSYzKWRxGg2zbL3eAmHwvqsOXr1esl3MZJrZSibBuDzw3ugQApjMpchMVFdstCmMo0yM1aCONjTt6P3H7It1JhjlwkwTJ5E8CeERlf/5p2hQALkOy7h/61sEBcnxnl/uYUEqEA4g8REghE54/Tg6FAMsFIsLFdEcWU18O1Glu+rRQjgDFIG1QYpwAUwDEP88DoOW3ZhqvmMDAgIL1jwAScRAQkQmzAZzsRvXxxoGBxrgi27UN8/bIsFP+YkEsSByEghEtMaSGAm5nw4sU4uU7A1Pp5r6N7r6AJYCh4TLKwWmi4Mjw9sx/4HkrAQwN8GM6wAAAAASUVORK5CYII=',
        };
        engineList.sociality[7] = {
            name: '微信搜索',
            url: 'http://weixin.sogou.com/weixin?ie=utf8&type=2&query=%s',
            favicon: 'data:image/png;base64,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',
        };

        // 学术搜索列表
        engineList.scholar = [];

        engineList.scholar[0] = {
            name: '谷歌学术',
            url: 'https://scholar.google.com/scholar?hl=zh-CN&q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACqklEQVQ4jYWT2UtUURzHL/QH1LMP9hKVNUKFWpP7TDrjU9uEo4WPWlERUbSoueSMaTWjTBCRGV3HiCsSWrTQApVSZBtZWEZSUWZkC3PPne3OzKeHK1NKy4Hfyzl8P+d3vt/fkSRJmpWSVbU9vbxbMZXJSnqZrMx3yErqmrN/r7V+Zf76jjNz5mYXSilZldtKfGBrA5sXcg7Dpg5wX/lzNV+FlmuwsRNy6r9HJFO5v9feBlaXILNWxenT+Pgtzr/W2Oc4azwalqMgLXZ29di9JMXj/xH3P4pybjDKhvYg1qMgpZfKyko3lPk0xr9PF7/4EOfTjwQAiQRcfqpjrlMZeBVjc2eI/FaQ5jlkZWs3qKHENPH7yTg5DYKKExp6DGJxcLRprHILAJr7w5hdIC1wyMquHmNj3/kQN57rALz9Eie/SZBRo/JwLAZAtRLC4jIA7r4pQHqprBS0QkaNysLdAXbKIQAiOjh9Gml7VOS7kaSooGkGwFQqKzYvWFyCgiZBbqPg3mvjRv9ABNPeANeHdSbVBOu8GvYWA9ByMcyKmQCLS5DToFLSKlDuR/kmEox+Moyt6w2TtidAUbPgyKUwZceDWI7MAFhdRgdL9quk7ghw8bGeNPXdZJzKjiCZNSpZtSp5jQKb9zeA1SUw16ms9WqcvBlhcDTG4KsYoxO/ohXhBFWng5jrVCwuQbHnN0B2vaDiRJCJqdzvvtRZfUyQ3SA4dSuCbtjC0JsY5npBYRLg9PfaPEYK14f15NA4fRpLD6jkHxKY9ga4PWKcvRyPk9toGF7sBWmR45S/pN0Y5a6BaLLdroEoGTUqy6oNc99NGk85dCHM8oMCqzuIvQ2k2XPzLAWNX9UiD9i90D0EE8Yo8GQc/A/g2QSMfIHaPsg9DMUe4/dmbrnz8CdxKwtDTtdexQAAAABJRU5ErkJggg==',
        };
        engineList.scholar[1] = {
            name: '百度学术',
            url: 'http://xueshu.baidu.com/s?wd=%s',
            favicon: icon.baidu,
        };
        engineList.scholar[2] = {
            name: '知网',
            url: 'http://epub.cnki.net/kns/brief/default_result.aspx?txt_1_value1=%s&dbPrefix=SCDB&db_opt=CJFQ%2CCJFN%2CCDFD%2CCMFD%2CCPFD%2CIPFD%2CCCND%2CCCJD%2CHBRD&singleDB=SCDB&action=scdbsearch',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB3klEQVQ4jaXSMUhqURzH8YuBrSbiIIKIS4vo4ORQgyJCBg5Fuuqgsyh3tKFwUsjFycEIwq0lBMc7RLQFIl4RnLxXzqbe4Yp0v28I6vle+F70h99y4Hw45///S9SO+Ukkasf8XovFgkKhgCzLrFYrdtZXgBCCw8NDbDYbnU7n+4Cu67hcLlKpFEKI7wOPj4/Y7Xaen595eXmhUqmg6/r/AUIIQqEQBwcH5PN5HA4HTqcTVVW37mma9t6fP4GrqyskSfqIx+Oh1+sBsNlseHp6olwuE4lEuLy8/BsYj8fc3NwQCATw+/0Mh0NM0+Tu7o5Go0GhUKBerxMOh4nFYl/3wDAMms0mPp+P+/t7ptMpXq+XYrGIaZqs12vOzs5QFGUbGAwG9Pt9FEUhm80iSRJHR0dMJhNOTk6oVCoAtNttzs/P2Ww2n4CmabjdbhwOB7FYDL/fjyzLCCGwLItSqUQwGKRarbK3t0c6nWa5XH4Cs9mM09NTcrkco9GIWq3G7e0tlmUBMJ1OiUajxONxWq0Wqqry9va2/YXFYvExynQ6zfX1NZlMhvF4/HFuGMbuPdA0jWQySbVaRdd19vf3ubi4YL1e/3uRXl9fyefzJBIJ5vM5AN1ul4eHh/fn7gR+kF/ZQQ/WnEhepgAAAABJRU5ErkJggg==',
        };
        engineList.scholar[3] = {
            name: '万方',
            url: 'http://s.g.wanfangdata.com.cn/Paper.aspx?q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJ0lEQVQ4jdWSvY4BURhAPwoS8TuTqESC3lN4DZGYVqGTaPQa4g1UYjqxdN5EoURI/CQ0M9/ZYnYya9fsRrHFFqe5Jzm5936ftEXatog9EZm+ii1iy1xkQbUKlgXNpodlQb0O8TjUao/O940GJJPIRGRKr4fCd0wTXa2eO4BK5SPQ6XiHqh6Ans+oYaCz2aPz/e0GpdJfBk4nL7BcPn+C60K5/MsNTBMdj9HDAd1uA3Y7dLOBYvGHwPWKFgqoSCiI/BC4XNB8HrUsdDRCB4OA4RDt98EwwgOcz2guFzpG/sEYXwp0uziuq59x73d1DEOdxUK/Osd11XUcDfag1UKPx2DO+z2s194nhuwB/h7MRd6IxSCbhXTaI5OBVAoiEUgkHp1PKgXRKO8NfBp7UCxd2QAAAABJRU5ErkJggg==',
        };
        engineList.scholar[4] = {
            name: 'EBSCO',
            url: 'http://web.b.ebscohost.com/ehost/results?sid=8e76c941-084d-4b93-b05a-d5f182196017%40sessionmgr102&vid=1&hid=128&bquery=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACJ0lEQVQ4jZWT3UtTYRzHT+w4pzddeRFdBAbd1Z8giXtJz9mKvBDCxMqkrK57u6kEyx13zjHWIl8TEbMptaLpZMeMCgdBS8dSRC8WWAS9UJRS1j5d7AWnjuqB78UPHj58n+f7+wpFLp0il45Z1hBs7nVS0krPdoXM/YyEIpdOgaRSWt/JGZ9BvWeUOiXIUXWMxvZxGrQQTd4wTd4wrkv3sDh1LOsBYpVKaX0XPaEYmfPx6wqHlSAHLt/nlDdMZO4tyWSSHXUdmKrUXECxS0eUVIS9V3kYWQTAiCYQKlpT1itaESs9BKYWqHU/QrApuYDsYFMYnJwF4PH0G0RJxeLUKJQ1BKubbYdusvNIF2ZZzQOwKww9mcsCTJKKKKmU1PgoPzvElkoPBZK68RM3AxjRRMp++TWO6yFGns3nT2EzwIcvyzyILBB+mWD1128GJl7nvP2vgOjie6zn/Ow77+d5fInhp/P/BzCiCQSrG6GsBfsFP/1GHMHRhsX5j4BMCoWyxtaD19l1rBuzrGGWVYr3t+cH3Jmc2xijU8NU5UFwKFwZmGLPyb7sMmUBZllDKGvhbtrBxKv0ItmVlMpaqG4O8O7TN7bX3kKU1gDMskZJjY/G9nG+r/wEYPnHKg1aCMfFYaqbA6gjLwCYX/pMYdpVFmCq9LD7xG36jTg9oRgdwWm6x2L0heN0js7QOx5jcHKW3lCM0zcMxPVdyKmzdY3SFc6ptKMtJ4U/fkBXz/LD6BYAAAAASUVORK5CYII=',
        };
        engineList.scholar[5] = {
            name: 'WOS',
            url: 'http://apps.webofknowledge.com/UA_GeneralSearch.do?fieldCount=3&action=search&product=UA&search_mode=GeneralSearch&max_field_count=25&max_field_notice=Notice%3A+You+cannot+add+another+field.&input_invalid_notice=Search+Error%3A+Please+enter+a+search+term.&input_invalid_notice_limits=+%3Cbr%2F%3ENote%3A+Fields+displayed+in+scrolling+boxes+must+be+combined+with+at+least+one+other+search+field.&sa_img_alt=Select+terms+from+the+index&value(input1)=%s&value%28select1%29=TI&value%28hidInput1%29=initVoid&value%28hidShowIcon1%29=0&value%28bool_1_2%29=AND&value%28input2%29=&value%28select2%29=AU&value%28hidInput2%29=initAuthor&value%28hidShowIcon2%29=1&value%28bool_2_3%29=AND&value%28input3%29=&value%28select3%29=SO&value%28hidInput3%29=initSource&value%28hidShowIcon3%29=1&limitStatus=collapsed&expand_alt=Expand+these+settings&expand_title=Expand+these+settings&collapse_alt=Collapse+these+settings&collapse_title=Collapse+these+settings&SinceLastVisit_UTC=&SinceLastVisit_DATE=&timespanStatus=display%3A+block&timeSpanCollapsedListStatus=display%3A+none&period=Range+Selection&range=ALL&ssStatus=display%3Anone&ss_lemmatization=On&ss_query_language=&rsStatus=display%3Anone&rs_rec_per_page=10&rs_sort_by=PY.D%3BLD.D%3BVL.D%3BSO.A%3BPG.A%3BAU.A&rs_refinePanel=visibility%3Ashow',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABr0lEQVQ4jZ2TPYobQRCFvyNUMpGTjgQbGAqBEZs1i5AD4VWzBoNgF1cihB0NONyk1/mgEwxzgmFuMHMD6Sa7RxgHQ8uzI+HAFRXUT79+7xVMQjPUO/zxFyfv8ONcM3Tafw4nuHZPlxZM62lBu6dzgrsYNsWKNQcA/YAW9xyKew5xSSy/UhWfh1qx5mCKvVsS74ivz7wB2CcsrogAAiIgmqGmWP+bHuD1mbd4N/RgitVbGic4zdBwQxAQm2NxSSwfqI4/OYUZwRSrv9FohtZbGlOMckPVv9ALSP1IAxA+EsYQNUPTYPs08NS/0JcbKvIFeZgRNEM1Q53gwg1hSqIpZoqVG6roiWFGyBfk9JG+j/Te4cOMkN+SX5PLO3x+OzzmHT7NnRFETyw3VKZYviC/QDAfmE9IzwgSB+P/HXecxiic4GyOAdSPNAJy5mCsQvtEFz1RM/S451RvaeKSmIZtjnmHF5CzClMftN/pTDHN0OQDgLj6u+idD5JMyYkCUj5QFevBhcUXDnE1oBKQ5MQLop3g2h1dgnlNBZtj7e7KLYwjHVP7gy5dY8r/eY3/G38A1vO4VlociLQAAAAASUVORK5CYII=',
        };
        engineList.scholar[6] = {
            name: 'JSTOR',
            url: 'http://www.jstor.org/action/doAdvancedSearch?q0=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADl0lEQVQ4jS2RS0zbdQCA/3cvJh71ollMICN0FhpwbBlZx+Zg0NdC3/23pbQ8B91YGQOtCAOZJQrIaillLVDgJ6+BPMTJU91Bl7mwOBQQjEuGzJMHTbx8HvD+5Uu+fFLGSy/XlipVQlaohC1NKeT0TOFSZgm3MlvYUtOF+ViKMB9LEbbUdOFWZgk5TXnEKVRCTkkTkkeRMb/cEGS+sZb1T5r54sZVRpwuhq1ONsUU+6tr7C2v8jg5TtLh5uv2Bta7mllqaWDRX49kS1OKe9eqCBvP0u+8RNynI+rIp/nEcdqyT/HX4Qv+/fsfomYnd4xq4j4NAyWFDFboSJjsSLbjSjEbqKXPdpGBEi19lgJWoteZD1XRVZTD1uoyz59uM1hup18uoM9eSMSSz0CJjmGHG0lWqETCZKfPns9Mq5fuwrOETRfpNeQRNqp5srjEwdYO4zfKGasz06vPY/ZWGZ3nThHTWpBsqQqx8tF7DFYYmGnx0u8o5MPT2UwFS2jPUbI5t8Qf27vEnBbW4wG++tSPCNiZft9DTP+/YLUzyFCFHlHvYK6jgpD6FBFrAWHTeX76coXDnT169VrmbvuYD1VyS6Uk5iwiZrAiyYpMMSK7GHAXMtHkouN0FiN+MzOtpfTocvnt4fc839ohJpu569EwVFlM3GsgYslnrNSH5M7MEuELOlpU6QyU6Ih7DWwM3iTpNxPKO8mzzR85+GWXXq2GHl0uC53VDFYW06vPY+HdAJIt9S2xGAww21bK/fA1OvNOU/vKa/Ro1ISNeWx/84DD3T367UaGqi8T9+rp1qi5/urrDFqdSI40pZj2VzHR6GC2vYzlSB3JKya+TTYx0+Zh/4eHHGztcNdtZaJJRtTZWI3VE3UUEdWYkFxKlejXGmlVKYi5tEw0ygx4tIzV2bhzWc32xgN+f/yEhM9BxPIOwzUmQuocItZ8Rj1eJGuqQiwG61kIlSMCNrouFXA7921C5zL5rDifP/ee8WhqluYTGYiAlc8bZKKOIkZqTExUVx1tvN92kz7bBbo1ZxitvcLPa+tMNtSxtbzMi1/3GaupYbLJzr0PSrljOM90sIS4V0//UUKWGHN7SZQbGKoyErUU8V0iydOVNR7dmyPhKmPEb2Ej0cjoVTsfX8il48xJxhucDFncSNY33pxfvBJg1F3GbN11kg4Pw3Y3k9V+hK+SIYsT4a1gzFNBUi5lxFXGqLuMqepaplw+/gNcwmcGmhKGRAAAAABJRU5ErkJggg==',
        };
        engineList.scholar[7] = {
            name: 'Springer',
            url: 'http://rd.springer.com/search?query=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuElEQVQ4jbWRsQ2EMAxFMwjFzULHJvR0GeAaKL2GV4jEANmBiorqOipf5ejH+Dg46b5kRYLv5x8niKNl3SQSC6fs/a4UvOamG0pxyrKs231A24+H8xKg7cdi1ukKjcTngEhcjBobT72SC0ADmjA6pyxNN/gApHPKEoklElcAHYJLDRpdjXaJNrL9FjCaNnrTTwEK0RfAl7gMsCBPH3eAzfYaWN5eDgnuqgLs8ySv5+Nr7fP0J8AvegOhkGr6AYHSEgAAAABJRU5ErkJggg==',
        };

        engineList.news = [];

        engineList.news[0] = {
            name: "谷歌中文",
            url: "https://news.google.com/search?q=%s&hl=zh-CN&gl=CN&ceid=CN:zh-Hans",
            favicon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAERElEQVR4nO2WTWhcVRTHf/e++crko/kyX201jQitIOnGhcWqUBWLSGgRVNCVFqouXFQFa0XQXRRcWBpBURRBo9JWcZGWghhqbVOK1I8uLEksmKS2yTRt5iszc+9x8Wbmzbx5mca1OfB4vHvOPf//+bjnPliT/7uoesq7v9k3o6JOn1gBBAFE3HfpG+C6FZqR8krJRhSQK8z+8eSh9SthhOoRWLTZPklaRDxIEWFagIxlZF2KRzov09/4A/suPc3ocqSCZJGOVn31MOoS8Ms8ihsGDug0j982z2DLONgomFaeWfc3o1cG/ou7mxMoiDBt4VYD77Utsrt7HEwWpAEQsC24YQpbW39h7KtOpjbGGFrvgAY0dOu6Va5PYNpqRlqW2Nt7EgoLUGgE4lCufkkEbIT471e5f0a41tzCdE+M4YE4X0bzdQnU0JOLjw2xcG6U8GyUXN29NTwWTvejvu+CmHF1YsFaQloRijeTibf/5LS2j7cd/GR/IAGZGJwnfK3j6o3nQMxN0GsJ5JcUS0ciqGil3jWyOPRcOoLWYfJNzbO6oWGs/dPDzyoAObNRMDlAg55j18+p4PMpHqb4vyVoTco6C4weayIf2YYCxJortxw/060BMOnzKO2F5C/xKsBXmSRA0IBY+ytuyKC2LWzF2LwXRjGiygfvqQSvQvBFX0m4nFFRCNB14uxDZQKu5E+txFoAI7BcAGurwQVIG0gZ9502kCoIaQNWqEmqIFhjpkouysdQ3Zt4QE51SSn6kiwsw+ieGH2dHtc9IxlmkkJIw+UsTLweJ0iOTeR443iejoiXSRB0InGgZKOrdjgeWwESOXjqLqcKHODN3Q5zy6XuriMV5VRAQUCh6Dh38YuaDABQyP9FiP5SBj54IsKdm0K8+tF1TvwTptGBRB56ItARUYhAbxQ2v5UGwIigcMuFQJMDMe1xSRpoU9Xnq5qAXR5Ds7dksqXfVR+dDbO5EXYMaArWS93YpCVn4cOhMMbW9rtSiqWMcHDcnYY5Acd3vqsIqO3p5+VH7rHCoOvAXe9wwFh4aVesavPHb6cIA9sHwzXgJRER3h/Pg0DaQiHvNXttBgDyfA0ugflFQ2erw+m0sDOiUK8kQMAMt6G1IqagKwrq5UQRzY8OhBQPt0fKRzGZyZysCjqI9aPvpATg+HXL1IthNvREsRYmZwy3b3DQCs7/meW1bw2JHHz3QgMmYHIfPZXj898MjcXmfvdw09zgWar+D3TttuIQEeHBFsV9h5ZdQw13bHTBL0xm2PGZe1NlDXS1aXo7a5+BHk2m4PkNpznvxwrMwM7hZFUys8bt/qRxO7uveNmUjC6kBFsxBU1RuSmqaAp50/PE/qYavOD/AV8tY7oa1F/qLXHPb8UFGDyuV0Ogjr2r9xn4gfyXVD1/qyewghf/vbCi+Qr7AwkowogED1kJ+JCKhaASiIBSgf2+JmvCvyV4A+6kXQlFAAAAAElFTkSuQmCC",
            blank: true,
        };
        engineList.news[1] = {
            name: "百度新闻",
            url: "http://news.baidu.com/ns?word=%s&tn=news&from=news&cl=2&rn=20&ct=1",
            favicon:icon.baidu,
            blank: true,
        };
        engineList.news[2] = {
            name: "网易-百度",
            url: "https://www.baidu.com/s?wd=%s%20site%3Anews.163.com",
            favicon:"data:image/x-icon;base64,AAABAAEAEBAAAAAAIACtAAAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAHRJREFUeJytUUEOwDAIokv//2V3cnFUaJONUyWIaIGPGB0ZQAjxor9c8wBGbeqMXwbcHEAEEM5kdlFdZIY1ULc4MthFTywRd1N5reUXqqC7AQ9oI2Zjclwrczup1vU9lUilYDwGndBx2/gp5OjyiGoFx/+CG9j1PAn7jkYoAAAAAElFTkSuQmCC",
            blank: true,
        };
        engineList.news[3] = {
            name: "网易-谷歌",
            url: "https://www.google.com.hk/search?q=site:news.163.com+%s",
            favicon:"data:image/x-icon;base64,AAABAAEAEBAAAAAAIACtAAAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAHRJREFUeJytUUEOwDAIokv//2V3cnFUaJONUyWIaIGPGB0ZQAjxor9c8wBGbeqMXwbcHEAEEM5kdlFdZIY1ULc4MthFTywRd1N5reUXqqC7AQ9oI2Zjclwrczup1vU9lUilYDwGndBx2/gp5OjyiGoFx/+CG9j1PAn7jkYoAAAAAElFTkSuQmCC",
            blank: true,
        };
        engineList.news[4] = {
            name: "腾讯新闻",
            url: "https://www.sogou.com/sogou?site=news.qq.com&query=%s",
            favicon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC50lEQVR4nG2TS2hcdRTGf/87c+/NHTOZR2ybtEoz7SILWyRqCmKCKeJrI2gJFRc2G4siRF0qglpRcaFFAoqgFkWxtkLdFNGWToSmEGo19EFN2hKSdGaatCb3ZmbuzH0eF7HoVA/84Cw+Pj4O31HcMtG0Nqu09p7otr2sJJ7noYnnsBA2mHnOuqWdc8OT4//WazcXmWZESsOipXf3OOkfqKVeJ6nnMRGuhy6mROzrfbb48I+7V/5jINOM0P35AcIZnMReku07MAwDy7L4dGA/XdY6phqLnKqcYnTrruye8VFpiS2NoyKLL0q0PCau64rn+xKGoURRJFEUyfTSZfli5pBs+35AXi2+ICfnf5HCd/1FAC26lJ0ldsE7TV2G0HUdPZnk3LzDiTmb7e8c4/ycwZ6tu/ig720aCYOJ0k8cHPx4CECJ85HgX4NgDr/zALquM7Wwyj1fnWlJufzyA2RSOldvlBn74316Owq8O3PwLQ2zF5q/QupBEokEAIcv2GCmWth/fBalFN25Ddzf/RgT1ybZnOp6Q8P9Hfwp0LeglALgy6UGtLW1MHZlFQClFI9u2slg4XF0CdFonoHIBu8sAEfOLVH2ANNqwU53rB0cQIS+7L3MezYazUlEAjD7iEV4cvt69nVpYJhgtP2NzvIzhTWDOCYW4Wp1AT8Ox7W6egRQuMsniKJorY2WSW/g8fRGg34zZlscsmB7BEFAve4SxzFeUCVWvEKF/MjipcuyYttSq9fF8zyJokjiOG7hz/GT0vz5uFSs9VK+8y554ujwP2Wq3L5xZfHrb8R2HKnVatJoNsX3fQmCQFZXq1L95DMpk18j0SnlZKdsPnJ3FkDdNCmTl/R7r8GmLrwLVzAG+uH0JI1jh5CwicqYqIyFMky8by/23YEz1WIAUNLzReOpLUMq047WkUbLZNGyObRsJ1p2He6Hh6kWf8sVcOxbv7hlSuTevH7foDijL8mNHUNSIleskOn5P+1fu3twDSB3ukoAAAAASUVORK5CYII=",
            blank: true,
        };
        engineList.news[5] = {
            name: "凤凰新闻",
            url: "http://search.ifeng.com/sofeng/search.action?q=%s",
            favicon:"data:image/x-icon;base64,AAABAAEAEBAAAAAAIACBAwAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAA0hJREFUeJxNk11MW3UAxX/39t/ellLAAgUyEBFwIAsOAkNkakxMNjcJ0S1u0ZGZGT+S+WD0wcQn49P0ZZJo0LkYI5i56RwjIzoS2ISEIAzHpxLsYBIKLR+Fln7cllv+PiDVk5zH80tOco7S5kACKOwos6qGrNrHWZ8aZysYIH3vo2hZ2cRWV1i98xuh+7P8X0r7vwCA0jNv4qyqYebCZxQ3n6Hw2EmC7hnWRoYwIhGEzUbYs8DspW+Jr/tRALEbzj/aREHTcQbeaObpy51YXTn0nTpOZHGB7PqD2HLz0FeXMcJhXPUH8f7aixEOQbsDecmVIr3Dg7KroUrOXb8qg54FeflBp+x5qVFu+rwyFoslHV5bldNffyl/KMmVbQ6kEA4HeYeOEl1ZQbFacT17mP4XD2PJzKLuq3YUITAM47/SVhsFJ04hTYKht19DZDxWTUZ1LRszf5J7pInArBvfQD/Vn36BISVS10noOsJuTzKi3iVyG18gr6sD1V5aBlYb24ZB6t5yVocGAcg4UI9/fJRbzz/DzSermDz3EYZhYGxtkUgkmO/4kYKXT6PaCovY2gyi5RciLRrxcAhtTwHbUnL/ynfkHGrEmrcHX18vK8ODBOfusa2qBOfuYcTjqNaCQvTlZVL3VaLabKSWV2DJzOLuu2cRaelszrrZ33IBQ9fx3x1hKxJh7c4Qluwcgn/NoMqEgf3hErZjMVKKikmrqCSz4SmCUxMsdl4l/9gJTCkpbM5MY9I0EnqU0KwbYbcTnv8b4fm+jf2t36B7lxBmMwBl731A8etnMWlWVE3D19O9s9KaOgKTYyhIZDxGZH4OdaW3G9+NDhyFDyGESNrmzMRityOEwN3aQnp5Bc59lSx2XSejtIzAxBjBiTFUgOlzH7J07QqqYWA2m5NWEwaj779D4I9JGi62ExgdIepZIL24BE/nT8Q31nemnIhEWPrlBv7fhxGONIQjjeiyD2//bUxmC8/1DGDSNG6/9Sq1n7TgvthKfGMdBVB23ygecFJ0shlbTi7xUAjFbCarupbs6hoWun9m6vPzlLxymqjPx+T5j9l9cBKwDUjA8UgZrgNPYHXloPvXWBsfRVEUXLV1+Kcm8PbdSoZR4B+hMGuvciFlvwAAAABJRU5ErkJggg==",
            blank: true,
        };
        engineList.news[6] = {
            name: "CNN",
            url: "https://edition.cnn.com/search/?q=%s",
            favicon:"data:image/png;base64,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",
            blank: true,
        };
        engineList.news[7] = {
            name: "BBC",
            url: "https://www.bbc.co.uk/search?q=%s",
            favicon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAq0lEQVR4nO2USwrDMAwFn0vvZR1NvtnzydRN06iNf4FAoGg2NmIUy4oSIAiCILiZ5Pa26F/qPX4jJEESqjrMXPUAQFW7/qEDZoZSCkQEAD6r8095JOFXEfFuahaQ3mG/bxUw8/yhHdKzFd0Sa629xCUv54xSyvAZhxkA9jZt763HzJtdoFvAVZCEiHwN3mhoDYB5SNoWx/5ZnfJU1Uj23Pv/AwtOEARB8Oe8AEX8nWWaRvY7AAAAAElFTkSuQmCC",
            blank: true,
        };
        engineList.news[8] = {
            name: "Economis",
            url: "https://www.google.com/search?q=site:www.economist.com%20%s",
            favicon:"data:image/x-icon;base64,AAABAAEAEBAAAAAAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAALEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//w==",
            blank: true,
        };
        engineList.news[9] = {
            name: "今日头条",
            url: "https://www.toutiao.com/search/?keyword=%E4%B8%96%E7%95%8C%E6%9D%AF",
            favicon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFN0lEQVR4nMWXTYhTVxTHf+/lJTHJzCTRDE61jiLFhWBBhJbSdiEoVHBTqFoFXVgoiNBNu9GN9mNTLbSF0lpKC1JcVK0iLkQobVEKghWsX6jggFO1MyVOzEsmMy8m79/FmZjJJFH7feBw3/2fc885755zv2CKJA1K+kzSTUl1/fNUl/SrpM8lLWI6SVolqfgvOO1GRUmrABxJg8BFoA/A933i8ThhGBKGIY7j4LoujuMA4HkelUqFyclJOlFfXx+Tk5NUq9U2WSqVIplMNro+sMwDdjScA7iuSxAERCIRwjDEdV1qtRqu6yIJ13WJxWK4rtsxgEgkQjwex/O8Nlk0Gm2JFdjhAWuno6VSiVqtBvDgr6fShOM45HI5KpUKlUqlYwC5XI5yudxxhtLp9MwgXvKAedORarVKNpulVqtRKBQeBJLNZhkbG0MSqVSKeDzeMYBoNEpPTw+JRKJNFovFQIJqFYpFuHfvSQ9om8tSqUQYhsRiMYIgIJPJkMlkKI+PQxBQGR1lYmQEfB98H9f3cUsl3FKJmEQ9n6deKDzAGhwpl21Mc3Y8R4cPi2KRBvu3b0OxiFsuk6pWqebzRMfHcX0fFYsQBDgzI/4b5Aj0D9rrTIkEDAzA8DDU6y2i9lLtRp4H/f2QTMKNG62ylSvhiy/g2DHL8RNPGA8MWJtOg+PAnDkwNtY6VjaklZ9/Xlq3Tlq5som99ZZtIT/91Krb3y/dvm2yUkm6elX67jtp/37po4+ku3dNNjQkJRJtvjoHsH27DQoC6YUXDNu507Dvv2/VfeMN6auvpN27pYULpWjU8Geeka5dszH790t9fe1+ugYA0r590vXr0pEjUiwmvfuuGTtxolXPcaQNG6TLl00+Oip9841Urdrfr1/f2f5DA0gkpAULpHS6ie3ZYw6OHetsLBKRDhxo3fF//93SsGJF1wDa91PPg2+/tYo9fdoKCGDWLGuDoL1AX3wRzpyBTZvgyhXYsgXefhtGRmDtWvjkE9izBwYH2921IbUarF8Pp07B009bdW/YAI2db+Yhs2yZ8d69MDpqq+Sdd2BoCDZvhlyuyUuX2o89chWAFVNPj6Vi+XLLvSSdOSPt2mUpcRzpvfdMdvasVfr4ePdDePXqNj+tM9DTAz/+2Iw4mbT1O52efdb4wAEz8dRTttEMD8P58zB/PqxZAxcuwJdfwnPP2fa7cyfcvduevpaIZs+WLl2SfvhBOnRI+vRT6ejR5h8EgbVvvimlUs1x778vFQrSq69Kr71mOidPms7Nm9bfuvVPLkOQBgak4WEz8PXX0rZt9v3bb1IuZzrz5kkTE9KdO5a2Dz4wnb17Tf7yy9bP523TemgA8+dL585ZLsfGpFrNBp89K82aJbmu9PPPhh0+bGM+/ND6u3dLmYx06pR0/Lg0d27T7saN0iuvWD3NCKD1MFq8GA4ehHv3jAsFaz/+GG7dMp3BQVi0yPJ68SJkMjAxAV0uKI+i/+Y0fAg9/mn4uOQ4hIkEYTKJGu3UdzSdxuvrg1TKVlgyGXosWWLAdE4m27FpeAnMSSKBkklrp5xl5s6lMjlJ0OFO2Nvbi5dKTYdCj2vXWpR83+94pX7kjwMRwHFdIq7b8Vbc6SbtASHT7oXRaLTrlftxyHXdrjYikchMKPSAO8CTDaRcLjMxMfGXA+jv7+9qI5vN2s24SSOOpM+B1xvI/fv3CcPwLwcQjUap1+sdbXieN3MW9jmyh+IvTL2O8vn8vzYDmUyG3t7eRtcHlgH/7+P0AUlaJHs6/6r/8Hn+B0w7zXRC+ZfTAAAAAElFTkSuQmCC",
            blank: true,
        };

        // 自用 该列表默认隐藏,
        engineList.mine = [];

        engineList.mine[0] = {
            name: 'MDN',
            url: 'https://developer.mozilla.org/zh-CN/search?q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAABi0lEQVR4nJ2VsU4CQRRFzy66GCtLrWysjMbEyi+wNFHBmGDpH1jYWJtAq5WxpoFEorXxB6xs1CBBI4WJVhpNoPBayMAuuzOw3FcwvMe5eTOzy0OYIGCHMk3ayBJf3FMmTxCieotN6lZwMOpsRQzIUBwZNlEk0zdIjwtR7BqQGwsXIicg4HVsgxYBFGzlGS1pepjFHlSSCiUZ/ehQS9rVerJB1eOZeUKapINNXjz14jMbzdhxWImn5oi2dCa3FuObCH85HoJL0o3mIgYeMt0o3qBVbaZ659LlfpOOyCHza5/ewsPjKJXJv0L7ORjhDIwSDnGi+/kxAv6QfAsIvY+At5SxGSxbkEshtKqanpS1PwcmGgN4xfE6hZ4DowXqlitLkh9PlVJe42e8rYvIBr4dG6ANj0mF/ZBBw2Xw7HOX1NY5Hlfd9b2r/1ufmq22gcc18OYyqA39U53Smr3aIosg7zJwRt4MltJYeEn0R9tJavw0NNqEYDvVcM31uH6WgAJVmnSsYIcmVQrh8f4HufpcPqh3SFcAAAAASUVORK5CYII=',
        };
        engineList.mine[1] = {
            name: 'Can I Use',
            url: 'http://caniuse.com/#search=%s',
            blank:true,
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAADAFBMVEXRa1hIvVUBriaErG7//vzQx7e116nq4M2Dy4FmYktwx3Tt48/y6NQXsTH+7uK2fGBhwmhoxW7Wg3HEMxe8EAD78Nqn0plRvluZ0ZLKQizNs6qupZZ0zX/9/+3669vM5cUxt0QlszpQqV6HhoPP3L1YwWKYooEQujB9ynxWUTgly0Tp38yhlIhAkEAldSRdOC706tbw5dL/8ezInXD169iK1JO7u6n+9ODAJQSY2J+Wrc+z4bLluKpnkcWbyYz/++CMzYcAqQz25dd90Yn90/ll020qwEPk28j5/OjhueEstkDfoo7k2NP+68n/5+CmSj3i2MX85dI6ukzx+ufhqp7+8/r39er29uP77NU0kjgvvEQ4LBc8nEFOzVqQvY0evzvN+f/m+drt8uHpxbnb5s7s7dpwomfb0cA3p0Ti7tfB473n3bzc7dDe3szr//9SZH0Avij37tng1ssttT7dk4Xf4t6U4ZOm3Kh81ntaelrv6Os/WC6I3Ik+iDvuzr/z2M6AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7O0tLS1tbW2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjJycnKysrLy8vMzMzNzc3Ozs7Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7////XnzsNAAAAmklEQVR4nF3KQQuCMADF8U2EQT1hklJCQSIhbIdCCtepRodgpxB26eKxj+ChL99mhOm7/OHHI8AdD+AFeZzXRXEhTLKKSuZyYD49xFM4T+E0hpttprAeQ2x5YAZYJEsb6KgHHweN3f6DSnL/iLTa/B5lWOq21SpMdZum5Cn4nguTi+ydCWMEAVZVR/mOAqAd8AWgBz8H12qGYR9XXh8E2WsxgQAAAABJRU5ErkJggg==',
        };
        engineList.mine[2] = {
            name: 'GitHub',
            url: 'https://github.com/search?utf8=✓&q=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADLElEQVR4nM1Xz2sTQRT+dpNScqhJW7ZJ9mx706RJ0/SHbRHR/8Cz9ORBBBEUEfwjBJVePHhQFPUiIi09SNqkSbtJU70p6dH+IOChQmpNss9Ddqezu7NJmgT0LQPZN/O+75s3bzI7wD826QxjPURUawtUktrGbWfggK7rR3bnxWjc8v51p+AIlGVZBkAdC9B1nQXbCZuZXYwsy648bh1yvV6vA8D9Bw+xvLLSNrlFSPFUiMfjEXKJnJ5arVYDgMj4REfEdvtSzAMAvF6vg8/hqFWrBACRWKIn5EzEttYQ0ddn4bS8VE3yHs3cIaKYR6VSOfD7/WHTJ3P9YSJykCuKgp1tDTvGDNoxt/FEBJ/PF+J9LAMnJycEAFFb6s9CbDc7Fo/X398vAYDX8A+ACJH4pBOFmm7jpiaMtOHJAPD7+PiIiBqdthaJJUBEHbVmeKqqjjEBLMhQzbdifrNjAcX8phCTiLBbKn1jS0BEGJ9IOrJlkndlgngeUwbQ11AsylhnM+fbtpZzxTUF+BrpFzw9ECDCXrhyjQlgSyAq2a7TDyC1tu7AHvT7LQKO+ZT0WsCdu/ccvvdvX1uWoEq6LlyC8cQUSNe7a6LH6DMFgIhQyGUE+6W7QoxNzjTFtAhwK8RYcqYj8pu3botnbxR3YGjoPBMwODx8jhWi0fLZNPsdT84inpxti/jxk2eIJ2ehaQXh7PPZtDn7XYA7jH6WywQA8alLrFgKuTSm5y7jT7VqKaJCLi0sOD7WzczYIUWRWAYMh0oAVpc/WgA31j87QIR/ry2pgXwuDeLIgdPTEAD2iQgBbo8CjfrQsutWAS7bs9m2fffmJYgINxYXr/N+xydZ+fCQACAxPcd8dgFuxsfYzcRQgkH3TzLDPOWDgxoATMzMOzpfvXiOsdFRIYlo/OqnDxgMBBrkoZCDT7Y7ANSVUMhDRNAyKWiZlOUk+bG377oD7KeOlkmxJRWRuwkAAH0kHJbM4traWMPWxhoAYGF+rmURmuMJwNOlpUcj4fCZLya8DRzu7TmuZu1YUFVbXs3cMsDbr6CqSkFV9X4vlbJuszfbhWj0qjFeakX+X9hfKwNpwLLdyLQAAAAASUVORK5CYII=',
            blank:true,
        };
        engineList.mine[3] = {
            name: 'w3c',
            url: 'http://www.runoob.com/?s=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACHklEQVR4nIWTX0jTURTHP+fu59xUCJLGCgp0IIPSIvLPg9JTvZq+RBj5WJGySWVPKSH0ZCSWD/ZiFAQVqQUVBulbaQT2IkVEUhISPrTptE23e3pYm26t+sLlHrjnfL/3fM+9Qh4Gp5ubVOSmqlSLIACqGkUY8bp83acP3drYmi+ZYGSq3RP1RudFxJ9PmgOVU6GG0bs5BCNT7Z7lkuUVwPlncZaEi6GGsf4swcD0sUW14p954S6cryAoKoJ/j6VybxLEHAzVPZp1Bl63HBHB//2bYe6N2dLUJhqD68xKgANflpj7GCewL4m1qQnAJwPTLZ9ECJS7K2ja3gFogRuneRX4mYowsdSHIKRc7HJECAAYceEu2rRARECV6Ooa28pKUU0Tp0xRNseVpNXkqxljeDz5ig/zC0RiqywsLnGhf5jYWryQO00mv/j4+T6qqyoJVuzm3tNJaqoquN59ls6rN3j/+WtuubDgqJIQoRjAWsv9a5eZmnmHqiWyHAOgd+gOw71duIsc1lKRTUExE0aE51tZrbUcrq1h545yzp1oJmUtPWfacvzJoLN29KWzXhw76U6UxRJ2BSOu7GGZtyQnOTNdVft757YImn5IMy1XBHoKjfAP29JbPFw/7gUwAOH6sV5Fh9I6/1vEExvWl/UhE4TrxzvUchRl9a/qyoMfdftLLzU+WclvLQeDb1uDNqltiAZREgIPPY7vWf5XBvgFMS/Jw/yUPqwAAAAASUVORK5CYII=',
        };
        engineList.mine[4] = {
            name: 'GreasyFork',
            url: 'https://greasyfork.org/scripts?q=%s&utf8=✓',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII=',
            blank:true,
        };
        engineList.mine[5] = {
            name: '人生05电影',
            url: 'http://www.rs05.com/search.php?s=%s',
            favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIACBAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAkhJREFUeJytk19IU2EYxp9z5s40ZzSRkWOQJIog0dzmH2aECFEIhiSCoN2oECJYYUI3QjqlQdqdF6bYRcwLUQhRxBBkXgQqKaKRjWFYMmnmyMN2FMzv6SI9FnXRvwe+m4f3+/G+L88rCSGIf1ACAEiS9NcA+VfmdjiMT1tbv0cQQpAkhRD8sL7OOxUVdAB0JyXx3doajxVaWWG1w8Eal4s1Lhdr3W7OTU9TB7ycmmKJ1UonwFKrlbfLy+ltbCRJxlWVFTk5zAPoPHqXLRZGIxEmAMBGMIj2hgbg8BCdfj8uejzY0zT0d3VhX9Nwt6oKqenpuNfTA0mWQQDnsrNxJi0NeLO4yCs2GwtMJr4KBPSWnw8O0tvUxIVAgBcMBo729fFxayuf+nyMqapeh/b6ejolif2dnbqpRqMssdk47vdzZmyMTlnWW88D2FJZeQK4npnJktRURiMR3ez3+VhgNvN9KMTPOzt82NzMF8PD/Li5ydDqKmuKini8O+QbjXzW3a1/nh0fZ57RyJ6WFr3oWEII9ra1sbaw8ARwKSWFb5eW+OXggKMDAyw2m3nT4+GepnF2YoJPOjoYU1W+np/n/epquo1G9nm9OlS6VVrKpORkaLEYFmZmcDYjA72Tk1ASE3EjNxfns7KgxePYDIUgGQwoLivDo5ERKIryLUjB5WVes9vpkmU+qKvjdjhMktwIBpmvKPryrtrtnBwa4r6m/TCWdDQL9jUNp8zm7xOKlbk5xHd3cdpiQbbDAcVk+inJkhCC//2Y/kRfASoRrtb2v2kbAAAAAElFTkSuQmCC',
            blank:true,
        };
        engineList.mine[6] = {
            name: '射手网(伪)',
            url: 'http://assrt.net/sub/?searchword=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADfElEQVR4nF2TQUxTdxzHv7//e319pH3QEi3MAYMpqWZj1c1lESIz0WwLXmZl7CAXjCYzuyCJJPVgPAy8zZglEuRA5sLJiIlm4ExmQtDilmVgQrDCsq2WuRRKoX20tO+9//vtglni9/z5fk7fLzEzXs+T8+f3rTx6VItSSV2fn4/qVVVjX25szACQ3xLt72Oee8XS64LfYrHe9bm5Do/P50mOjxvEHJZESx8MDKzv6O5mZ3bWHz9z5s8t0/wOzDPqq+JPx49/nJqY+CIYDkcPj46+wa6L5N27YNuGZD5gmyZ21dcjnUxCWtZHKJU+8er6VQEAP9TUtIZ7esbbR0a+lqZZLUslu6atzYlcvCgl4BLgCE2zXdd1lm7edMxcziKgOhCJfKMCQGFlJZpfWqp+LxYrldfXPc9u3IC+cyf9Oz0tBOBKQAURCyEgVBXBhgbFSqcdaVlCAAAB+7Nzcy67rvJWZyftO3eOVuNxpB4+ZAmQBFitqCAA3NLfT9GFBT4wOEiObbvqtmCjnMkQiLA0PMyKYUDVdaH7fNTU2cl1HR1Ue/Qou8xkNDZybnGRVuNx8vr9qjpFFCDAkYUC2ZubqNq7l6x8nkPt7fjs0CGEWlsZAJVzOSKAnw0N0e+XLrnlTEbUHjy4JjKVlbUuUOEyO7JUonI2i2AkQm6xiF/6+vDjkSN0a88e/DE6CiJCenqazUzGNUIhrj12bEj8VSjU6Iax693+flfRNKpsbqZQa6v458EDyHIZgXCYpGWBpQQAaJWVEIAiNG3r/StXBgRL+XbTiRM+f1OT/WtvL3kMg8vZLDd2deHT+/fRNjzMkQsXgO3BqYbBBJAsFh1zcdFW5xXlxZuTkykzkZAfXrv2TiGV4uWJCTR2dWFhbIzTjx9TLpFAJBYDtjUMsDcUyq/OzEB87zg/b62urjWfPbubhHCmTp8mUhTKJRLs5PMkPB6spdNgAMxMiqa5BEAJBmdnL1+WKgDYwJ2ng4OfF1MpKR2HG6JRpfjyJf6+d889PDJCu0+domBLC4iINb9fAlB9qhooAxAA8BXzLW8gcMeoq9MVXdde3L6tFJJJJZ9MiumeHlJ9PgQjEUjLEuVs1uvRdeuppl3VAoH/37g8OVllZbP9ievXA8l43OvXtJDrOHV6MLiDdL2+8eRJ2KYZ31xeTnoDgalCd/dw3fPn4j+2Ya+YXX1PBgAAAABJRU5ErkJggg==',
            blank:true,
        };
        engineList.mine[7] = {
            name: '游戏-3dm',
            url: 'http://so.3dmgame.com/?type=4&keyword=%s',
            favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIAALAwAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAtJJREFUeJydU0tIVGEU/v57r3dmdJzG0a6T6UyaM6GZYkJhBRZE9EJcCEVpVIuIyGhRi6hNBC5bBBJRqxgiopoWlVZoVvQgUsuaIZPyNabzuukd5zre199CMaMk6IPDgXP4vvNxDgdYBKET/GKt30D+Vrx8alu5JCn5Jl4Mfg9zwpoyy7j2JjV8qLXr3wLnfV4UBB2bSyqXt7gKM0vtdjMkSUU0nOzu7Qqfbjj3tGNRgRgFHl3YsnPL7iK/IJh4EIBQAkoMEINC/KFrT+8N7Nmf77yrHvb9KXC7qdxaVlfe7/EucRJQTM9oYBiCkYEEXEWZmJY1RKOK+OROYFVZrTDR91At4n7zn2evdzgtzgedI1BUQJI0yLKKowe8aO2IYGhEQoaVOIrLlx1LDbPipu2OSvK5dS9vzx5XfIEhVGulfq+k14VjMzDVuBAKxUAjERjTMsCxYCzpyF2aA9PzyLh130p71MB1LqkzXSSRb1ufln0rN8+01ZyYgduVicl0DY6cJdCyV0FTOBAiw2KKw11iQzzP6szyZmGsW4xwUJRXxZXOI6mUcsq92g4GAAWFyVyBZenrAMLO75tSBUbyLXjpLQwdCA2IPczHz+GW4cGplKdklgwQUL4YbMYGEMKBAQEDgAEFQ9LAWjdCT3Ojv18KMkZOGxPrSxpiVJbkpA5Np0ilVMCyBoQuPBEBQEDmMjWvfRVIjFUNVbfJJD4R53wndzmFwoymAo/tIM9DqNpxBoQxzRF+wQCgGxSBZ88bK3c2+QCAybJlofHivXFLw46zr9vHaghLBg2qzk4C5sMAoGoaPrx8eTN4tfnGvDdKKQcAycQM7sff4X3zJVt1he3KikJPvUVwgbAsdINO/fgaYEY7/Wb7asG99Xh7aKEAAwC6rmM0JqJv8hp6H6s297cXtZMOjyhDmKAZrGymiplXk+kjSfZLz6evMb/fL//xWf+Dnxs2M3yo2q6nAAAAAElFTkSuQmCC',
            blank:true,
        };
        engineList.mine[8] = {
            name: '搜狗表情',
            url: 'https://pic.sogou.com/pic/emo/searchList.jsp?statref=home_form&keyword=%s',
            favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIADiAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAqlJREFUeJxtk0+IVXUUxz/n/O67772rjdH1NVpRoeVo1sZavnI0S0vFhaOBpC4S/0AuCqE0aNGi3IS4kEkEF+EiyoVhxIyKNsxYGxERFEVI5w/WKE/GAe/YvHfPadEdkaGzPH8+fM/he4RpkdXTOvARwjKgvUiP4pwDjiYDjf7H++WxwVlAN0on0A2cBAaL8gvAWmAXRh+wMxlo3H8EyOrpk8BZlOsIO5K+xvh0ZQDZ0rQN5zBGB7A8GWiMTQF+RGkhbCbIAlHZRJBXUUkEHrj7EMZFz+00ud/BOIYRkoHGRsnqaSfKMYRXUFktQb6npJFECkEeAkbuVVom3jTz3L/C/ADOVYwPFdgGfJf0NcZFZQcljSQOSCX0SFmfkVjnEOsiIt1OpKckyMxixW5gmyJ0FgeDSP6USJFYkUp4W2fEB7UtfkOfiG9WTv51pNoz+h6Rflac5BeETgVqOMMABN1DkOMS1KSkJamGzVIOZyXIrclNz3/zz/pna9WeUSsAw0BNAQcUoPrr3/cqJ25vcPx14BDOMA64z8X43HO/NvF++/ICoIArMITQATDxTm3rxKr22eUfhi+Vjt782LLmfHvQXOmTdt1zg9yfouX7C8BCYDDC6UXYAJz33D+RwKGHa+YcJ2ivjU/eEJExYMRb1uFNg9ynVujCOSVZPV2M0I+wBGWdBN1NSedLJKCFUc3xlkPTRt28C/MRnIsYb04Z6WuUFQjvJn2NsWxFbbEEWYLIc0Ab7uOYX8E5XT1zdyJbmu7HsKS/sS8q5HyJMQ/lt+ytdEty5u5l4Mr/2RlA4jDkLfvj0S8UKhT4FGEvwu/Azzg3/pvgZeAlKYdvw9OVL7xpH9j9ybXV3jsXZDo9q6c1YCOwDOHFIn0LOIfyms6KUymHPeWfRgYB/gUGFwYmsuO+WAAAAABJRU5ErkJggg==',
            blank:true,
        };
        // engineList.mine[8] = {
        //     name: 'javlibrary',
        //     url: 'http://www.ja14b.com/cn/vl_searchbyid.php?keyword=%s',
        //     favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIAA3AQAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAP5JREFUeJylkzFKBDEUhr+3SQZdF8vFxmobwT2AtXgHCzsbQbyANuJVbLyAnR7BTlFBrGwUsRBcGdckz2JFd5zMzA7+Vf6Q9+XPSyIfc2fKP9RJznYNZncZpBkgpQQC2fvGjx3Pn7dLIP2seds6gD6N0YccgHj63AiwpQSrPbCC374injy2BHQN7mJtMnbp/v5VYZXZXPo1ruIKsg6yspAGYKeKTBpgj4fo7WgGQEUAffksllQC+g73uk7YukRHAfGKRiXs3dQApurtwYBwdI8Me4gAi5a4f1c+UjroROZwUPAhASj2II/w5iEP4PXbB/zOdeWTLv+FlprttdToC7F9R7urpLwHAAAAAElFTkSuQmCC',
        //     blank:true,
        // };
        // engineList.mine[9] = {
        //     name: 'airav',
        //     url: 'http://airav.cc/avgirlInfo.aspx?Search=%s',
        //     favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSklEQVR4nJWRQUrDQBSGv5m2mWhasCKVotQ0iCh002rqFQRBTyPoLdx4C3eudCF4Aim4EV2IrgpFFNSa1DYuQicdk0Kd1cyb/315+Ub0Ts4jspYQlI/2iMIhb6dXmREAOe3C2lhGLsyTq5QouEv/Byi/nuzb9WmxbIAs2Vib1WSaxipizpodoLZdkEKfRV6iWrUZAUJg+y4AX5d3umz73myAwnoFWXYA6N/ca8g0mSmA7ZvCJiFZMg2ALCqsrWoqFH0PgGyZBkC11iBnDmXvejgHTSBbZpIWoNpedrOYqP2RqQEFr0Ju0TEunUOzGdIy83r8HVcXh6+fRMGP+SU7r19HtesMnnoJQDgK1ViJk6OI97Nron5oAoqK8vE+SBHLvOgQ9cP4F+xmTcsLH7qpZoDRR8DgsQuYMmU8UiIm7LykmscruH3W+7HMX4w3TDVyAQKXAAAAAElFTkSuQmCC',
        //     blank:true,
        // };

        // 福利列表
        var engineList_fuli = [];
        engineList_fuli[0] = {
            "status":3,
            "version":1,
            "message":"福利列表，默认隐藏，",
            "name":"福利",
            "engineDetails":['福利',"iqxin_fuli",true],
            "engineList":[
                {
                    name: 'JAVlibrary',
                    url: 'http://www.javlibrary.com/cn/vl_searchbyid.php?keyword=%s',
                    favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIAA3AQAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAP5JREFUeJylkzFKBDEUhr+3SQZdF8vFxmobwT2AtXgHCzsbQbyANuJVbLyAnR7BTlFBrGwUsRBcGdckz2JFd5zMzA7+Vf6Q9+XPSyIfc2fKP9RJznYNZncZpBkgpQQC2fvGjx3Pn7dLIP2seds6gD6N0YccgHj63AiwpQSrPbCC374injy2BHQN7mJtMnbp/v5VYZXZXPo1ruIKsg6yspAGYKeKTBpgj4fo7WgGQEUAffksllQC+g73uk7YukRHAfGKRiXs3dQApurtwYBwdI8Me4gAi5a4f1c+UjroROZwUPAhASj2II/w5iEP4PXbB/zOdeWTLv+FlprttdToC7F9R7urpLwHAAAAAElFTkSuQmCC',
                    blank:true
                },
                {
                    name: 'javbus',
                    url: 'https://www.javbus.com/search/%s',
                    favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAAAAMxWAADM2wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzNsAAMxWAADM2wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM2wAAzP8AAMz/AADM/wAAzP8AAMz/AADL/wAAzP8BAcz/AADL/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/BATN/0VF2v+Jief/kZHp/15e3/8PD8//AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADL/0hI2v/q6vv//Pz+//b2/f/6+v7/iIjn/wUFzf8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wEBzP+YmOr//////4uL6P9LS9v/4eH5/9zc+P8dHdL/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8CAsz/Skrb/39/5v8oKNT/DAzO/7+/8v/t7fv/Li7V/wAAy/8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAy/8AAMz/AADM/w0Nz/++vvL/7e38/zAw1v8AAMv/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8NDc//vr7y/+3t+/8wMNb/AADL/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/DQ3P/76+8v/t7fv/MDDW/wAAy/8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/w0Nz/++vvL/7e37/zAw1v8AAMv/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8NDc//urrx/+jo+v8vL9X/AADL/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/BATN/0BA2f9QUNz/EBDP/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMv/AADL/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzNsAAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzNsAAMxWAADM2wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzP8AAMz/AADM/wAAzNsAAMxWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==',
                    blank:true
                },
                {
                    name: '草榴',
                    url: 'https://www.google.com/search?q=site:www.t66y.com %s',
                    // 长
                    favicon: 'data:image/x-icon;base64,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',
                    blank:true
                },
                {
                    name: 'sukebei',
                    url: 'https://sukebei.nyaa.si/?f=0&c=0_0&q=%s',
                    favicon: 'data:image/png;base64,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',
                    blank:true
                },
                {
                    name: 'jable',
                    url: 'https://jable.tv/search/%s',
                    favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVQ4jWP4m9xX9y+p9+e/pL7/pOHen3+T++oYyNMMxz8ZKND8/19S33/CBmRM+v9v3dH//5qWkmlA/vT///////9v8d5RAxbvoacByf0IdvcaiAEzt5FgwPxd//89efP/351n////+v3//5uP///lTCXBgKKZkEDbcOz/vwW7///LnUZBSiSAKcxMvT8ZyM/OfT//J/fVAQB8gvyNVegtUAAAAABJRU5ErkJggg==',
                    blank:true
                },
                {
                    name: 'PornHub',
                    url: 'https://cn.pornhub.com/video/search?search=%s',
                    favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAEACABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAABorAAACAwAAwP8AAG+5AAA0VgAAUYkAAInkAAA/aQAAMFEAAJf/AABZlAAAmv8AAGSnAAAaLAAAERwAAKP/AABHZAAABAcAAC0xAACp/wAArP8AALL/AABDcAAAbowAAI/uAAAKEAAAht4AALv/AAAtSwAAiOEAAI3sAACV/wAAmP8AAJv/AAABAQAAnv8AAHrHAABlpwAA//8AAND/AACh/wAAiOIAAC9PAABqsgAApP8AAEVkAABJegAAp/8AADFSAACq/wAAGSoAAAECAACt/wAAM1UAAIjjAAA+aAAAfcgAALb/AAAdMAAAT4MAADpjAABAawAAuf8AAAsQAAC//wAAAAYAAML/AAADBgAACQ4AAMX/AACW/wAAmf8AADdcAACc/wAAn/8AABAcAABRhwAAov8AAIXdAADX/wAAqP8AAKv/AACQ8AAAWI0AAC5NAACx/wAAIEMAALT/AACF3gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISAxISEhISCIiSEgMIkhICkpWLSBIIUg1MEcgEDUiCk4ZCAQUSCQiMTwUNQ0xHxBSTwAvQ0sQSgAzWBw4AFkyUSoABjpOPykANihQCwA3UVEHAjRCRVQyD0wuETs0B1FRNyNVGAkAJh0CGkASAgdRUR4ALCdOAD0BVUFGTQA3UVIbAEQTAAA5AA4/Az4AWTJOUxcFV0klNSs8FDUNMR8QCkoWFhZYNSEVMEcgEDUiCkhIDAwMSEhIIiJISAwiSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
                    blank:true
                },
            ]
        }

        // 导入列表
        var engineList_plus = [];
        engineList_plus[0] = {
            "status":3,
            "version":1,
            "message":"应用app下载,由奔跑中的奶酪整理",
            "name":"应用",
            "engineDetails":['应用',"app_xin",true],
            "engineList":[
                {
                    name: 'AppStore',
                    url: 'https://fnd.io/#/us/search?mediaType=all&term=%s',
                    favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADtElEQVR4nL2XTYtcRRSGn1O3enp6mJk4TBDGIFHpjQtdGpigIApq/AGKCCKBrN2Jf0AwCC6EiOLKnYIKKhJcSBQMgiaKX6DmQwnGRNOrgUz6457joqpuV/d0T/fViRca7r1V1U+des97bpUc/+IBM8AUDADBCPdKuNK94TAbPqvlbWRtgimoxGcFQyglcFJ/kQY+DJKIchgaQADZ/SgA1PI22QG3MbjKcHwaA4QJkKJDY6NmHUfhThpgRt96lNrHRABBxI/AtYKHlVAL/6FpwjFEvxOe/1yQwQTHAte6Z9jfOsTda5vcttJmpbmfgoK/ty/xyaW3KEvFxEbgpcTVGYMrIAbeMs0nwQuaXO2d5JHbT/DwXW/T8quk6+fOWd4/9yoXtr5nqdgHInPAg0xqhhPwk5c8Rq6O5dYGz29epyFNSisB+ObK57z+4xMsSJtFv8KyX0OZN3JBLeYKkiaQSxDgg3LA5oGnOdI+hpqCCDcGW7x4+km6vZLVxj30taRf9iZovlvkmQsApxMiN3UcPvAMR9rHMAwnwk9/fclzpw6iWkBhDGK2jcNLkYkJl2ybeOnew07Nb1k6yGPtoxiGIHz62zt8cOEV1hYOMbBeWLEJ2b675qPwFLTPtceEq92TvHD4BmqKiHDq93f5+OIJvGtVGs4Pt6nw4AIJEqTlAc/jd7yJo4Eg/NI5w3vnXwJxMcOn+bxe5AqYOUrA5eW10/2ah+58CjOlW17n+Nn7WCxWd4XX0TyHp/cur3AbSw+yULQonOflr45y6+Kj0V51ln125Pm3w+e1/d71+zGMXzvfcm37Mr7waK2E213zHK6W2VBN6Zc9NpbbCMJrPzxLs7E4FT6P5uNfS83hMXoT8KGTo2/b7Guuc3nrIr3BAvgSdLLP54ncxiK3fEUMTAQ1wQ1tKDjxfHj+DZYa6zXg82tevY+Jq1ZJIDhp0Nn+k+86n6GqNSKfnu06CR73Dum5coHgOX3lI4SCkvI/+1zzZSeNHYWTV0IV4Y+tc/iiuSfZPq55CiIvw7EQUfm83ve8nubj8NBXcPVr+3wVbprmVd98T/hvfT66SZ2g+bTIq12Y4KsZ77HPZ8PDs5sN30PNMzgxCDc8NNwcn0+DD+tAfmioEfk8Pp8FB/DlRPje+DyHMwavkjCdCf8PzcfbFYZbspvh82nwcAlgqRTn8LgDmgWvYTXG2kmHWRG8SGM4JwMnwyrl4glXLBytXUw2iXkjhNItkv449CVOIvk8vorvLExADMHxD+83EPzS100KAAAAAElFTkSuQmCC',
                    blank:true
                },
                {
                    name: ' PP助手',
                    url: 'https://www.25pp.com/ios/search_app_0/%s',
                    favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIABTAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAhpJREFUeJydk81LVGEUxn/vvaMz45SjlZpfWBpUkyj06aIWFVGBCG0EN22CFi2CNtHSfZsyyFWL/ANCgkDCylWEGzcKLSKn8qOaGUbHdO69733P2yK6OemifOBsXh5+7zmc8+B5XkZr/cIYE4qI/ZcyxgRa6/EgCA4ThuFLuwOJiIRhOK5ERCulYmzSQlHz+v0ac4seAMdaE1w4spu2+qrNNkQkUCJilVLR48RsieHny8wuevihBSAeU3S3Jhke2M+V7trIa62lAvDu4zrXn3wiWwiIxxStddUALK4E+KHlwN5qxm500NeZigBR69pYRqfyZAsB6aTL3ctNXDueRgHPZla5P/GNbCFgdCrPiY4aqtxfnzq/AUsrmun5DSzQ35Nm6Ew9DydzPJjMMXS6nv6eNADT8xssrehojKiDUtnwwzM4CnrbE8znfZ6+LQAweKqOoy0JFLDuG9Y82QqwFiygAAdFb3uSO5cacZSiqyHO4zd5BKhNutTVuFsB/FkEYi21CZfbFxtYKGpGXuWYmCuhgLOHdtGcjm0D2CTXUWTzATfHPjO37FFcN4RiyTQnuHV+H66jtgHYSsjXkmbmS5nVsiFV7XDuYIrhgWZ62pIVvghQFVM4SmEEYq7iZEcNj4baWChqMi0J+jpT7Em5/K3olMtaGJnM8eG7z72rTXQ1xrebrkIiElSEyYi1oZH/ChO+72fCMNxxnH8CVx+vwwyO9nUAAAAASUVORK5CYII=',
                    blank:true
                },
                {
                    name: 'Google Play',
                    url: 'https://play.google.com/store/search?q=%s',
                    favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEg0lEQVR4nMWXXUwcVRTH/3d2IVblI2FLiolFUkzIFNFIH5o+mGpc+qY8GGJ88sFEU22DpIGqiBSIqcZoqpY2xFQ+hALbsqgopEQxhkQhjaUWJxhadE2hsizLxy77wdy5x4fdgQvd5UtIT3Iyc2d37v93/vfc2VlGRAz3MKzyYN/YTLJ18exJYTUWbQkprb9kFo/sNACTHXhgABXC2luUmHRFtVgtPClxV+2eFFvVQNLr3p0CUORBiJATCtnVcLBAC1sMqxv+4yMLEyOZnuriV1FnjTfJtgEIBVYoQNhvV3V/gUYWhiDTbePk+7h15vbvWb4PnttRACgAWOSoz9pVY9aukQWAhcGHcM4/YqYzdb6yJ2fho7ydAWAALMsQ3GtXDY9dEwpACiBAmKNgwZjhvWrzV9ceXDiTvr0AlugV86gANG1XaepZTf6aToZ12vC/NsTdIxm+mtIiOBK3B0CRkknnk3YV7pUQABAGT/1X+E53z98Yzgx++ML/B5BFTRfMZXHHhgAAP4Wzby9621N97/2YE/jkwNYBlBgpLQcm7SqmnokJIUCYE6HDt/jUr2lzpy48Gfj8oc0DyA7Eg5k8osIdGwIAOBmKF4GX9y/83AnXnnLg6fs2DiDtgLjJALiPxHUCAApDo8NNM44D0Cer4BrUcOfhlzYGgKiAmbL9q5ckjhOFwdFh57QzFxSdQwQegT7+Fe6k9MOdfWh9AHkHmOO1nJAgCgOjw06PM3epADI/IUDMHwK5+uFJqwOKlrbtyue7BYCI3myKE+KHiEIwaM/fX8edU848WJY1AWkuACAOkPcVeL6bgA2VdzsgVy8f1+mL9xsm4KwZWykW7y2DAM4DXJZceVMsiDWyprteK/vhooohWx7OPT68VL3ZA5KDBEA3cP76OE7HBlgtalYhN6bUiNVd9VpZb6tKxEDEQNd35y5BSA4QAdxAvy+IgwkZdDQ/n+I4IEPIjqxuPgZUfVOvlfa0qkIQiAACi+RQei5ql50wDPwd4njRupeeSs6iwVhyyyE33ypB2YFTzgbtRFdbpHIwCIpUScRAAqDfdufys/sHFzne/gvI2bWP2u8qNBrx33IURLrc3AnR3VHpaNRKvm5TibHIJSIwRQEhQkFgggtxYX7gwfL0M+TOjisQD8AUXn3OgIr2Rq2ks10FYyCiqGMRByAIhiJ+0hd5Seq1vqE1n7/rOiB3bxTi3bYm7c0Oh0pRcUVhIEFQGINBuBkGStMGejs3qLsBACnKm5u04ksO1VwJhSkQRCBgNkRGjeua59N8uspjTbU5AHO9pT38TlOzdrz9kkqMLcEZJLguxBdGKFiR8Wefx7YV5ZgAq+KtxmbtWKtDhcIgiMAAcBJXFjkv2ftHT9xfw60DSNafrG/Rjl28rBIYhCAYIE0nKs280fX9dgjHBhCCAwrKvmzR3mi5rJLCYBB5dRKVrhHf+cPUt6V13gyAVtrQph1t7lANxrjOjdpAWK98zNU1m7XdytFY8d/w0c+6kzvO1Z9ICOs8BL3liVvf3twh3dgA9yL+A+DGIba7GhlTAAAAAElFTkSuQmCC',
                    blank:true
                },
                {
                    name: 'Microsoft Store',
                    url: 'https://www.microsoft.com/zh-cn/search/result.aspx?q=%s&form=MSHOME',
                    favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAWElEQVR4nO3WMQ2AUBAE0TkEkGABRQj4XjCDAFoQgwUSDHw8bEhoZvq7vHLrWeZO2LhfBbCexD+G9PCrBAgQIECAgN8BVmx3PCZoUwH0w0EiQIAAAQIE5L2DfQwqapCvzgAAAABJRU5ErkJggg==',
                    blank:true
                },
                {
                    name: 'Alternativeto',
                    url: 'https://alternativeto.net/browse/search?q=%s',
                    favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADVklEQVR4nMWXXUhTYRjHf1aO3OJMt2k1FDFbCSFZkgaVeGEQgwIr+4CC6IMkow+I6qqL6iKCgqBAiEq6KK3bjC66iG6KPi0wrTWLNtZ07hyd+8jvLt4waefsbHPVHw68e5/nfZ7/ed73+Z93WZZjdyb5j5iTrGNscoLYQC+E+iGswEjst9GQA0YzmMxgysViys0sATkUAG83DEfVHUZi4hnwC39zAdiXYJlrmjkBORQA9xsA9tWtYnPNKlYuc7DAmjfl4w8qfP7qpbPHQ2PbI+jvg1AA2VGlW40svTMg97yFwT7untzDDmet7htFojGutj7g9O12MbGkOiGJWboRwzIAG2urdV0BTMYcTu1toLlpm5jwfUror09gfGwqcCo42OCk0lEIYUVsowb0D+G8PAgrtD58Qm31ct50uvD09vPy4xcAHPYCtq5fQ2mRPW7pifo6dl5sEV0j5adJYH4JhBURSAP3n73j1fXzcfNli4rEIDKguVZ3CyxSPpSuBItd9LvFLqoyDa9dXjq63XFrK8pKxSCsaMZPSgcsUj7y7GzR67JPTNokLjjXUb64GHuB9XeyFJGcECnf4et7ACodhZzdvQlnTVVaCVMmMD15c9M2DjY4M5I4KQLy6DB4uwBoP3soY289HYkPoecDjI1ysr42YXJ/UCESjWna0yIg/4jAYB/YJM4c2K7q4/b42H/+Ggu3HMf1zZcWgTlZYxrMh3oBuOBcp6qCHd1uVjSeSzqRVh7tLYiGAShfXKxq3n/plhj8oQmpQptAbAiApSWFcSZ/UOG1ywuGuTNKrkNAVEBN4/0B8YXEkNoHSg1JX8lUMTkxYwLaFZgtuKm1V0VZKdgkiAyKxyalLcXaBExmAN52fVY1tx/ZJUjYJDFOE9pbYJQgFKSzx8PayvI4s7OmiskMKKNuBRrbHqWtcjMiYDVKIFmhP8TRyzf/PQEA7A4w5HDj8UtOXWlJWAm3xxd3KXn49IUY/KqmGrKsh28kvJYHh6Pgfgfjo2CTaN6+gbrVFVP64Pb4ePy8g8Zr97SDFJVhzS1IjwBAcHQEfC4IBRM7msyiLaf/tizUTA5JCpE12wDFywhGQzAYEEl+KSU580Qic744NykiJSW0GiXRnhmE/h+Tv4yfzZcbwYt6jlUAAAAASUVORK5CYII=',
                    blank:true
                },
                {
                    name: 'Github',
                    url: 'https://www.runningcheese.com/go/?url=https://github.com/search?q=%s',
                    favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEmklEQVR4nK1XX2hbVRz+vnNv02xrIxu9N1mSlTiuIL26PdStiMjciyjq9ElkTwMfrMhEdOjDYEunU/BBJw71QXwUpA+WoQznZGygOOdEO6aCQWKbP7e5rptpM9qkyc+HJttdctNma76nnN/vnO/7zrknv3MO0SFs2w7Muu5uAfZAZAhAVMgoAFAkByAH8ncCJzYZxpnLly+XO+Hlah0ShhFZIA+LyF4AoQ79Fkl+HhQZS7uuc0cGLMvqnS8WDwJ4VUQ2dCh8KzlZAvBeXyh0NJVKLXZsoD7rCREZuRNhHyPngyLP+K1Gi4G4aW5bEvlagHg3xD1CGZ18IlMoTLY1kDCMyAJwodviXhNBYId3JVTjh2VZvQvkhFecwB8EviB55Q70rhEYJ/BLIyBAfIGcsCyrt8XAfLF4sPmbU6ljjus+d+/QUARKPQ9y2Tk5D/ISgXMEzoKcBPDfcoqzBPYPmGbYcd1nSR71corISH1zNyZ5Y9Olmnc7NW2n4zgXGm3bMPquaNrg6Ojon8lkstZEzHg8fo+mae7U1NTVRjwcDt+NWu3vW3jJUlDESruuQwCImObHIjLavIZK1x/I5/MX/da3U0Sj0cFqpfJPc5zkJ06h8KKybTtQLzKtqFaH1iIOALVazfaLi8he27YDatZ1d8OnwpEsQdPOrdWApmk/kfzXJxWadd3dSoA9bcYeyefzLUt3u8hms1cg8rpfToA9qn6wtEAPBL5cq3gDwQ0b/LlEhhSAaHOcZGl6ejrVLQPpdPoaySmfVFQ1jtQmFEhKtwwAAERmWkJkVNFTjG72lYGuigMA2cJJQCkAfju0PxwOm93STiQSQfh8agCuAuB7YVAij3bLwOL167tEpNcn5SiK/Og3SEReFpFVb0ydQIBX/OIUOa9Anm0zaMfmcPi1tYpHDGOfiDzmmyTPqtDGjd8CmPM1IfJuxDSPDA8P99yucDKZVBHTPCDAp226zG0SOdU4jI6LyEt1V+9r5M9VkTcgsg0ACEyD/EwB36tA4GImk5n1Y9y6detdpVJpWAEP1kT2QcRqZ5BKHXdmZvYrANBFjpEsAwCXB7oDIg+B/BUABNgiIoerIqcq5fKJZDLZ8tcFgOtzcxOo1b6r1WpvrShOLvaIHKtPbhkR0xwTkUP1ZlEPBGyS65bK5R+8dUFT6unczMwJP+JIJPKIVKtn2gl7DIw5hUIS8BShvlDo7frNBgBC1XJ5LJPJ/BUUuZ/kAQAfKKVeWN/f/007Yl3XJ9vlPOqTfaHQOzea3lw0Gt1SrVTOA9gMoEpNe8pxnJOrknoQNowKAL1NOq/19IzkcrlpXwMAEDPN7UsiJ2+YIE8DOE1gToDww7t2HR0fH6+uYGAJgOYnrpOPZwuF37xB30ITi8XiS5XKVxDZ3pwbMM3eld59YcOoovl8IS9puv5kLpdrORF9d3M2m830h0IjJMdI3vKkKpVKvmO8cjd1WSb55rr163f6ibc1AACpVGrRKRSSPYBNpT4EUAQ5n0gkllZUJ6+CnCf5kR4I3OcUCofS6fTCKqZXh20YfYODgxtX6xeLxeKWZXX6isb/mQzVdYidKdgAAAAASUVORK5CYII=',
                    blank:true
                },
                {
                    name: 'GreaseFork',
                    url: 'https://greasyfork.org/zh-CN/scripts?utf8=%E2%9C%93&q=%s',
                    favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII=',
                    blank:true
                },
                {
                    name: 'Chrome WebStore',
                    url: 'https://chrome.google.com/webstore/search/%s',
                    favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADT0lEQVR4nO2VT2gcZRjGf983U9du4ia7aYy4s8SEnooieBAVPCsWRFCiIsVL7VmoWKXX9iBUT8V/RTA2KkICIiJ4aSHooVBv1YaG7KrdDZoxu4nkz053dl8PO7O7k5lpd5qolz6w7Mz7zvc8z/t+3zsDd/A/QwEsLy/LzoRIKHRLJF1jWZYyAZRSIZLeWL/CSdb4MKOIbiXmum5kzjCMxCbMfoU9XFFKnRkfH5+OSpbL5VeBN4AHExnoFwMDA+8MDQ3NxOUty5quVqvN7e3t8/1y6iQG6vX6Cdu2j8Tlbds+4jjOm0k4Y6egX9zOtPjI5/MqUQf+DezKwG6q3xMDe4HbNrAX1UPCMQRordXYmv0cqa3h/l5skxQeQGWz7H/hFfRwNhGfAqhUKjctx7n0A/Vv5mhV/wKvcsFb4nfCZxBB50a4+7kpUo89GcspIhQKhfa3IJ1Oxz7YWrWpn/+EFIA2gqI7THTC62vI9Mfsf/gR9IF7b7pdCqBWq0U+UTv6EuK6Pcxh0e5ttCllmGSn5yLFc7lc/HvAXVxAGo1diSOCuA3ca1fjZKI7UDt9Erm2ECTtJY4Ujzbgh4zJgwydei8gHtuBL8w/90a8J9csLkZJhcdwpjTPB4cyFAc1Jy/ZwaTHmT3zPub9VsCEblQYvP76DvHg0dr6+zuczDOBWKgD35YvIwjfFwaCwgJoTfr5l1H3WVy4qjgxq3hrTnNxQeGaeZzsFN6uhsRBuGtzPtSBwBn4svQjp67Mdqp6+/Iqh0sbnUpHZ76msm5w/CvdQ9vFuy82sYabZIpTIXH/fyv3Gk7mKSDiDPxUXQrs60cPDbOxT7djStFSBmcvqhBt2yCcvaBpitHThaA4gFn/JWAtYODnteudbguwmjI4/KwFCKlHn+DcvKK0ojp5X9j3vLSiODevaQw+HimOCOaNYryBFWc9kBQRGl4x+yYOUrLDVfv0frxoQys1SfgMtKHcatiA4zjHAEZTGUSk8/Ppp57Os/3rIhOj3Yr9Ee/IeDcTo6CdpWCwp01i5vA0j4I3hmNjY5+Wy2V9wLznw99aK6F3dyVtMFv7g4mRG0hTd6i7reheTo60aG4sIW4rIi+4RobNzc1jlmV9FtmiO/iv8Q8bO7AiEMGc8wAAAABJRU5ErkJggg==',
                    blank:true
                },
                {
                    name: 'Firefox Add-ons',
                    url: 'https://addons.mozilla.org/zh-CN/firefox/search/?platform=windows&q=%s',
                    favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD3UlEQVR4nLWW3U+bdRTHP+dpFSllI6hzJmucEWiTZizTQtG5uRcgYRoS451eqBcmXHjhjf+B116Z6JIlvt0YExONAsqiw0zNKIWCkeTpYGrEFEIclDGElbbHi2elb89DW+m+V+3vvHy/Oe15EQoxtdBGeqcblSXC/nFEFDtEEx4y65dQeQEYo4XXCQQ2bH0BItdPo5kjuIxpQn6z0CQAqAqT8XfJ6lt5i0zS6jpFe/udomSzy01sJb8BPVOQ5mdaGCgToepmIn4F9NmCvB/Q7X8TkQyAAVBGbgV3kUw/XUa+vTZcTA6gJ0kyimk2Fz1PXj9RRG7lHSISfy/31SB2o72MPC/3wO7HuRUv28lRlOfsfe+KmFvx5sOzTfauOkRkPmgJSKW67BMCGSybaTazsTqK6ilH35yIjdVvdyuh0unsmg0BCNfMs6A/2DqJKMovCH5UH9qbvChwBSGG6nnAbevicvXT1XFZUBUi8QlUnStRb4hE6faHEclaXTA/38AaPUi2CaWTrL4D6qojYRbkbYzsNBj/Ih0xQrIDuTYsxYT5Parn6ijgKuHAaTuTUfZi/YGO1Y3cwjFif7RUFjC34iXJCKoP15VetYXUnTGiNw6WmvI/wexyk9XnlVptX5gAdz897bdyD1YFogkP22vD95gcIIykvyucmAbRhIf0rWHnCVdnKD2sszusDDLrl8pn+70Woc+wzicAbmul2mxd4SYq72MQB21HeQPl0YrJRZKgHyL8inIUZQh4xEbF86iKGxgDXipJksXgJF2B+O7btHmRHR1DCe5B/jcu6SMUyO/86J8XyWwtoHiK+eUyImrQ3PoaIleLjSwXkQM8GUgg9w0Aaw7s2xjugdKDg9DRJRSzxHmKhoZXAAyCh27zQMsAwo8FDilbju62RUQ+txegI3S1/WavjfxRIzKDx9PHiceTlgCA44c3cR28gMiXQBrRj+1JAGTJ4X3ROUQ+A9IgP4G3l87HdqtYvgsWFxvx+bYck10zvwIdtGEZpydw1jFubsVL8NDtsijHgFJR/6QbSKUGQT9C1T5OjFfp7vjU8Zi1C9nTqipEzCs1DSmRLOg2KhHc/v7c2nVC+TYsxNTvvponpKphtZyeIb3wVCX3vQWEnvgL5IuaBOQgMkO4bXJ/AgCa/S+DjNZIPgve3tztvz8BQUnxoOtFhLEqyWfwNp0jfORmVe5VJQWrExKbX9+9dJ2yxfB6ewn6VqtNW7kCOfh8W7gODIKMO3hM0+g5Xws51FKBHOwuJ5EojY39hROuWlRfgRyOH97E22qNbWEHZIT7G/r+D/n+4TQRa8B/kvpzjBrBCDkAAAAASUVORK5CYII=',
                    blank:true
                },
                {
                    name: 'Userstyles',
                    url: 'https://userstyles.org/styles/browse?search_terms=%s',
                    favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABqElEQVR4nO2XsWsTURzHP99fLoPUSWjqaOnuEBK6iA6ucQuVdHCw1Ek3d59/gasIrhlCECSugohLJVzR1SFjbAqCiFN793PxGlFj9WzvLf1OB/d77/N5j9973IkfEjzYs93PG3I2cVpAw6HGgrxvPRLAtHPFF9VIyoAZ+Bipv9K8PlAI+dH74uHyu/urHGRDoLlosjICvzFKhboXR68nAFbAdZjt/Au8dNyb7r7z8cbVVQALHoyDbOjO8qnD5xbLjg89BLPnu19uUsXKf3Hw5l76csNyz3uVw+cSm/a92yNFLQMa8QRo2J/O+WnH3WsWC14kOYlJDEJUgZUXbx5GFWg/mVyLKuD54auyY6M34ZnAmUCCFGIK6PiS49N6/OHvP8l+SvL16YUHZQcvbX0qfQMeCeRe/h4H/lsgehOaRBYLLikzXLNYAg4zA8axBISPzVE/loBLfTu/dXcgKa2cLqWd7bWBSSGv1ZMu0n51cPbNkm6QcgM4d2tvktST9Up2QkrN6utvty/Nf04LiaXb99pgPaGR0PQkjqikDGkqMcLU69xZaxdwgG83NodGaQLg6QAAAABJRU5ErkJggg==',
                    blank:true
                }
            ]
        }
        engineList_plus[1] = {
            "status":3,
            "version":1,
            "engineDetails":['电子书',"ebook_xin",true],
            "message":"由奔跑中的奶酪整理",
            "engineList":[
                // {
                //     name: 'jiumodiary',
                //     url: 'https://www.jiumodiary.com/$post$q',
                //     favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAABi0lEQVR4nJ2VsU4CQRRFzy66GCtLrWysjMbEyi+wNFHBmGDpH1jYWJtAq5WxpoFEorXxB6xs1CBBI4WJVhpNoPBayMAuuzOw3FcwvMe5eTOzy0OYIGCHMk3ayBJf3FMmTxCieotN6lZwMOpsRQzIUBwZNlEk0zdIjwtR7BqQGwsXIicg4HVsgxYBFGzlGS1pepjFHlSSCiUZ/ehQS9rVerJB1eOZeUKapINNXjz14jMbzdhxWImn5oi2dCa3FuObCH85HoJL0o3mIgYeMt0o3qBVbaZ659LlfpOOyCHza5/ewsPjKJXJv0L7ORjhDIwSDnGi+/kxAv6QfAsIvY+At5SxGSxbkEshtKqanpS1PwcmGgN4xfE6hZ4DowXqlitLkh9PlVJe42e8rYvIBr4dG6ANj0mF/ZBBw2Xw7HOX1NY5Hlfd9b2r/1ufmq22gcc18OYyqA39U53Smr3aIosg7zJwRt4MltJYeEn0R9tJavw0NNqEYDvVcM31uH6WgAJVmnSsYIcmVQrh8f4HufpcPqh3SFcAAAAASUVORK5CYII=',
                //     blank:true
                // },
                {
                    name: 'forfrigg',
                    url: 'http://forfrigg.com/#gsc.tab=0&gsc.q=%s&gsc.sort=',
                    favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFQUlEQVR4nMWXT4tlSRHFfxGZee97VdXaOroRBuYbCLpwIaMtbl26Ety7HETQxegX8A8uXLkVP4AwMAgiyKCCqMwoCuKgojjWOI12t1317s3MiHCRr9rpnq56U90LAx6XR76XcfJEnBM3JSIE4DOf/9IL6Y2ffuve2Y6LyCmRn7vF04aKnIvw4kvf+8a3H12TiBAR0U/futU/9fzH+N1vXuPDH/kob56e8tvXfs1nv/JdTDMybZimmQCSCN0DiWA7ZwDWZuSkuEE1Y8qJtXUc+Nvrf+DVV37sL3//m1NE+NsB5ItnRPCn1//I7dtv8de//Jnbt98C4Pf/+A+hGc2NMjdUhGrGunSmOdOqkbPSu7OZM0vttOZMRUmq7JbOsx98jpKT7vPVh9h55Dm+qCIiAIRDb8E8JZII5kavDiIUVUpO4+QetOZYD25sC/OUWKshArUaIvqOPJcCeKhGCtOcuH/ecIIIcAIBzpZKSoIIEFBbZypK92C3jOQi+/VL8lya+CLWarQ26AVwBxxKUXJSlrXjBkiwmQvzlDk7b8yTgkBrRsTl++fLl/YIdX88oHdn7UYQrIuBQskJc8Mddkuj5oQq1OpMKdHE2WwuT3OQARVISVHAAsKCpON0SZXWjW6BR5BzorcOIkgSlto4OS7Uak8OYLd0rAUhMGfh5o2ZIPAY/eEetOqEQ107200ZElwac8ncvbcOwJfEwRLklEhFqatRNoV791dKSeRkJBGON4W1GggIwm7p5KxsN4XajHnKXJTwiRjo3tktFSMwC3IRWuu4D4nulqGOpEJtxnaT6N1Y1g4hIOBP04RzzsxHE0uH6UgokanitO4jcUrjJCIcbTIEnBxPuAVLNVRGoz4xgJITZpCTEAFrdcwckSBrwnHMRj/U1QenaxCM/4gIu6Veuv/BEpwtjbPdikdQu9PMSVmYS2K3jnqHBOFjXYDaHLOg9+B8167c/7AMFTZTZlk6WYWswhgnylwUAqaUEFGmSShJOd4WFCEnmKe0b8THx2EVqGI+ZoGKoCr05qzRcGNvw0LrRm3BWV9JIsxTwh26Ofo2L742AE1KUqEFnC2dpELKwpQTZ2vHHMw6qso8Cds5YR7kJKzNqdWxhyfw9QC4GVOZmEomNOPuRATNgqJK7cZcEq0HhLP04HibaT0oScknBb9ChwcBIEK3YLHG0VHBI8Y7QbNhQONHlCQESgnHA5KCuUOMGXJZHGxCsxhzwIKIQBDOzitTVt57Y0JEhkSB3hxNym7XHshQk1zpAwcBjLnfuHFUEITejZIT1ZxlNbZzQlVQgXmTEAm224wA988bEXBFDx4uQVLBXHCH5n00ZRLqOvzfHTSCtTllEnDoPijPOdFteMITM9B8jNnmTk46qO6BxTAfGVZAKcK6Gr075mNkBwEB7k/RA0rg4eNkFnh3WjOyKrI3JXNHRJhKIgAJwczJ+9LkdzULvPG+9z/Dm6dvcOM9N7lz59+oKh965gTNE5pnQhKigvcgZYEQLIb9XkhN9i+IIkJE4A7JlsMAvJ3zq1/+AoCf/+wVAMrJB7C/v8rjSni1wz8c5+s6WLwKQN7exOoOLVsAnv/kJ3jxq19jXddrpHp81O584ctfvxKAR0QNb5OvQ8M/+eFL/OjlH/Dsxz83Zq0oSALNoBlJGUll/5mQVNBckIs1/V/d651T1rWeAu+g4QEA0/k7mpYXvC0Ko7Onacty985TMxARt+/+659ffByAB3dD4AQ44t3Y8/WjA+fA/UfvhnJxO96DyAxpHpTnNWJ/laE/mvwhAP+v+C9sz+VdwyQu0gAAAABJRU5ErkJggg==',
                    blank:true
                },
                {
                    name: '威锋网',
                    url: 'https://s.feng.com/index.php?srchtxt=%s',
                    favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIAAAAwAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAsdJREFUeJyNkl1IUwEUx3+73nbVTV13zaZlsw8VIyvbSkiyeimjHtKHIkSiwCAwhIiIoIceCqJeyqIg6qUoiIigDyOKCsUinPmxMpZmpubH5pz7crve7fZQSSuIztvhnP///M//HN3zL9OaMqOyUtaRKxv4n5gKK5zrCeAtkhEe2lJ5sMTIoX4NZ6/nvwhudI0x5ZhHToaAYALMAlhLjZx+rxCORP8JVtU4LaMxxJ+58HvRF5fodvUAEI6pOIciPOkN0eSa4ONwAABRTGHu2DdGxsEPiH5ABXxe8LU5mb+mmFa3l2tBA2ORcQDMjnymvbD46SgNjgzqNy9k3/kmJjZVoNvRltDiMRh69pZdmR/YsGUbjQYrEXczL2r2I5ksrL90hsRMFGlhGYlOH9e3zyUUDPCs+R26xptPtGHPJKWLjJSXr6ehSyTDnsDVeI3RVg+WiloE5Q0dZ0+w/dVTJOsKClq6ObWn5MdK9TVbZz1ock2g5qXzYGslaeZlFNbUIWWm4r7dTn71cbKLlqDMgRa/Ad9UCDnLmGxi50iALJtI6eF6YgEV962rtB6tZdIdYu2RGkyZ6WgqqFIqx+5+IpZg9hoA6AWJiA9K9uwkz74O5+V7yGuqkB12gsEp/AGJRDydeGCadr2e665gsgJ7joC/L05QA3NhLvLyfLKKV2GwptF74y2Pqg8w8nKQac84WTmZdAz6kgkcS+eR9vELk1/B3eam8/wVoqMfSLPEsFWtIkU00n32JOEBJ4piZnN6IJnAIIkcWR3B8/gzfXe6AcguL0M0yuizC5Hte8mdb6JEjlJncrN70wp0mqZpf77roxdOTly6jyc4g6WiFoDIwHuqlic4XFuJxWya7U0yMRJVuNA8TI/OiliwGke4n4MbFVL1IrYFG7AtyPlzVrKCi68H6SnLQxIgFIVPj72cW6lhX2b5C/grvgPjZxiC9n+r/wAAAABJRU5ErkJggg==',
                    blank:true
                },
                {
                    name: '我的小书屋',
                    url: 'http://mebook.cc/?s=%s',
                    favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIAC2AQAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAX1JREFUeJylk7Gq6mAQhL8NtxMDAdu/DphKUvgCQdKr8SG08DFSWsp5gxT2FrGNIAo2thY2lkqKaKHurY4ajxzk3oGFhf2Zf2bYFdd1lf+A9d2ICO/6jwlUH0Ke+98gIvx5NzDGEEURnucBMJ/PSZKEPM9L71QVec3AGMNkMsG2bbIswxiDMYbNZkO73S4RnE6nsgIRIQxDbNtmOBwynU4BGI1GhGGI53ksFgvyPKcoCm6324NARFDVu8woigDIsozBYMDxeCTPcy6XS9mv67r6Wl9fX/qM5XKpURSpiPysd3twvV6pVqs0m00ajQbdbhfHcWi1WqRpelcMlDNQVfr9PvV6nV6vx3q9BmA2m5EkCb7vk6bp3S487cH5fGa327Hf7wmCgPF4TBAEBEFAp9MBYLvd3j8qZVCr1VRE1LIstSxL4zjWV8Rx/MO/ZVkqlUpFi6J4jQHHcfB9H4DVasXhcCjNvzMQEfnnYxKRRwYvrB8RqGr5GlW1lPAn+Asf+sooQi/6SwAAAABJRU5ErkJggg==',
                    blank:true
                },
                {
                    name: 'Library Genesis',
                    url: 'http://gen.lib.rus.ec/search.php?req=%s',
                    favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADfElEQVR4nM2XQWgbRxSGv5SFncNSDXQhexB4aQUVRhARDBFOwSEt2PRSU3pI6CFJL8mtLTmEnEoOxYRSQm/pLaE15FCa9NCSQy+FYmQwRQFTVmCCAqJsQIQR7GEWBtrDaFeqsaVdieI+GObtaPa9f2b+9+/o1KtXvb85QXvtJJP/LwA4ZSbv7Bsu33mEEIJACgJfUl+SrDVDLja9uQCcKsuBW/f3ebD9G3gC9Hg8CCs8/uoSb/qmFIDSR3D3RgNZPW0fPEDYFkcv+Wa7XTbcfBy4sBKCBikrBIFtSMHTvV7pWKWPYNJel9XcV0oT9RXL1XJHUJiEz2OHXqyIlUYbjdaA6ZMaS4SKZ0mplGC1UZzbhWaeufYDcX9oHwxgtO2zt3NfWE44sPXpOp9sVI+I9m8rdAQ7keHy7UdonYJwbcIMfpbcpIBr/SRFBhW63300E0AhEq7WHe7d2rBlZwBS+0PmG8Bxx2MCtNZHRJoTAMCHLZ9mawl0apOZ1LYESFIYDG2v7VgYyEJxSynhlXebdJ5281VKv0IYSKQnEA5oA/FAEUUv2VyrF4pZugy/eLC/kPQuDCCzP/sO8cCWpUo0w0QjRvvpCoEUEPhyJtCZR/BLO2E36tHpxvQGGqUUOhkRT2twxHhyXhHjcem7PL539ViBmroD17/e48n3u1bzHWGDZ5Az1h9ejjnUD4a03nmbn7beOzLH1B349uYKwRuC+9u74LnjWp80M1kV2VgGwgVP0IvVsTlmluGdqw1ufHwOBlnyUfnlySdAOIz6CbHCVsfcADIQuQbAeMWOa0GJETCyXZoAZCD05WIAALauXxh57pgLJp0QIcYA9chPUhhoNs6Fx8YtLERnaw71xhLRXjcnpAwqNGsBzbcClqqS0JdIKZCeQCWaqBfzoq/4/FJtcQAAV9brPEw0G2t11lshZ2tHvW7Y2Y9ZbXgsV33AnxpzoQvJYfvx9wEPf+7Q/rXLZzfXuT1l5ZmV2oFJex479AaKZwcx7WcxnShGxUMb0RMoVexrWBjAX8rj2pdP7I1Ia5QaES9TPYHVCgdQKULMCFgWgEo0nb0XNhHYMvMgr4r8nmA1YG0lLBS3cBkuVw1B7TRkWzspRnp8DyAesrl5houNYl/LUiT848Bwd7tNdBATJzpXO+kJAl9QDwM+OB/yfms68+cG8F/Yif85/QdlMHLuJQQjHQAAAABJRU5ErkJggg==',
                    blank:true
                },
                {
                    name: 'B-OK',
                    url: 'http://b-ok.xyz/s/?q=%s',
                    favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEN0lEQVR4nOWWTWxUZRSGn3O/+W3Lj7VtaGlri1UUBEy6IPEnRBMTiYFVW6MmJmDUGHDjlo3EpRsTDQmJUSORhYCYYnDhQkCNhJ8FhM4ChKFUBEMJUjrTzsz9vuPiOkOnc6ftlKILz2Ly5TvvOe97zz2578D/PaTWgp7D5+PxTKxXPdoEbUc9dWovR9T83tjceeboc+IvuIDH96U3esIWlD5EZqlRpyq7UftFauDhE/cmQFWe2H+lV8X9CNIwF7GlUrgRcaw/O9CVnpeAtQd+a7EaGQFitRBXCFH+Wqxe2/GBzomwvBd2ufLb4TbfmV33Sg4gwtIxse+v/fJafWh++kWwZNGJsHetxR+pLJwpB6Cq2VR/d4WIigkkMtHXiuRWwVfFE0gYoSluaEka6iMSEN7lpCHi0ZI0NCUMES/I+6o4LU5C6lZ9PfzMjBNYvT/9Ccg2gJgn/LK5g4SREmjCKqpQFwluPjs/RmvSsLGjHqeQ9R1RT4ibIO8UxgqOpw+NIMEUfFS3pwZW7C5yRsrHJP0ioApL4x5JI1wcKzB4ZZw/sparGR+nyprGOM8uS7L10cUAHLw8zrHrE4xkfOojwuoH4rTWGV5sr6c5YYh5QsEpIhJR4U2gUsCaAyPtTm1LcaweglXlw7O3+PnP8gU+dyvPngtjpPq6uJmz7Dh1E2/KLE+P5gDIW+WNlUvKxixI70OfpxPDW7onYcoOOLXrp7+fqhsFiAhOFasaDijWh0Rysekpnj2A3sGrdapsm3uL2hDTwzj7VpmAfME1gnbW3GmWqC5NHuk5fD5eEmCt60JYtuACqikQ7TH5+IMlARiNCWJCsQutCkAlavJ+pCRA8O4o5EKx90OAaCaGnSgJUMst0PH7wVUlbrrJRdmSgNRQxyVROfrv8cuhs6+3ZkoC2ClOhV9nK1OCr2S1nNPq+XKwniweS1/CzB39tGGRfDwV5wEvLK9jU2c9jf8YkRG4lrWcHJ0MGgjseLKRtY0xmhIG38H1CZ/RSUtzMnSvGervPlI8TzOjyzkgpkBzwnDkpfaywpwN3C051Q0VPAmePmcD5yyaUTHWfTOMvTuZ60N9Xa0VEwBw6Mse7BGkYXTS8tTgCDmnZH1FUYq+qChLooafNrWT9ZUN3wW4qXlBWBQVBCmRK5p2YjZP5SwTUKgrfB/Pxr4C3ga4XXAIEDxQuaWMFxzvHb/B7bzDV4hIeR4g4yugpUpP5aNUX+c5KpDTYtW+9EURWRGWm3cox4b6uzZMvw79T6jCu6qMLCD9Cet5tZvd6n3pHxCeBwkVOmsoOYS9Q31dW6tBZmwc1cKrKB/Mj1wVZXsiFt0+E2xOXtO7+1Q009S0xii7FB4TWBLKCTdE9YyqeSc11HGJneJm612T2a07mF6a93WlIK8g0iFKmwqKckUg7am3N5YwF09vXp6tpe9/Gn8DQrStezS4ePUAAAAASUVORK5CYII=',
                    blank:true
                }
            ]
        }
        engineList_plus[2] = {
            "status":3,
            "version":1,
            "engineDetails":['网盘',"netdisc_xin",true],
            "message":"由奔跑中的奶酪整理,https://www.runningcheese.com/resources",
            "engineList":[
                // {
                //     name: 'jiumodiary',
                //     url: 'https://www.jiumodiary.com/$post$q',
                //     favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAABi0lEQVR4nJ2VsU4CQRRFzy66GCtLrWysjMbEyi+wNFHBmGDpH1jYWJtAq5WxpoFEorXxB6xs1CBBI4WJVhpNoPBayMAuuzOw3FcwvMe5eTOzy0OYIGCHMk3ayBJf3FMmTxCieotN6lZwMOpsRQzIUBwZNlEk0zdIjwtR7BqQGwsXIicg4HVsgxYBFGzlGS1pepjFHlSSCiUZ/ehQS9rVerJB1eOZeUKapINNXjz14jMbzdhxWImn5oi2dCa3FuObCH85HoJL0o3mIgYeMt0o3qBVbaZ659LlfpOOyCHza5/ewsPjKJXJv0L7ORjhDIwSDnGi+/kxAv6QfAsIvY+At5SxGSxbkEshtKqanpS1PwcmGgN4xfE6hZ4DowXqlitLkh9PlVJe42e8rYvIBr4dG6ANj0mF/ZBBw2Xw7HOX1NY5Hlfd9b2r/1ufmq22gcc18OYyqA39U53Smr3aIosg7zJwRt4MltJYeEn0R9tJavw0NNqEYDvVcM31uH6WgAJVmnSsYIcmVQrh8f4HufpcPqh3SFcAAAAASUVORK5CYII=',
                //     blank:true
                // },
                {
                    name: '百度网盘',
                    url: 'https://pan.baidu.com/disk/home?#/search?key=%s&vmode=list',
                    favicon: 'data:image/png;base64,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',
                    blank:true
                },
                {
                    name: '盘多多',
                    url: 'http://www.panduoduo.net/s/name/%s',
                    favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIAAXAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAd5JREFUeJylkz9oE1Ecxz+XnpKUlPxZEq7DDVeog1wU3OQKdmgnERoIUlFnNXQQdBHd4iJ0URRcWiWjLnZKN1O6BfRCF6EHZvCMCEkvf3yRNH0OwcPzkkW/y/v93u+97+/3/b3fU760B3IuOsO/oDsYoSZnVWZPhwnKlRpHPUExb00lmIkoqKMTGdj0eoLCo228vuDBjRXqjhuIm4bm26MTifo3a9V28PoCK2dw7/m7UNbimhWoKkTQaLYxjXme3L6Cnkmzs39AZfMWAGeuPQ4Rqn9e9PqCuuOiZ1P+qmfTIRl1x0XPpIiop1A6Yijnoiqrd1/Q+NYOZZiG66sX2CgsQ0cM5W98/tqSi+sledT9IaWUsvBwS77/eOjHF9dL8umbqu93xFAGerBnO+QMjUQ8BoCVMyi92oWbK5QrtYmVBAjMBY1EPOr7xbzF5Ytnxz05dEnEo5gLWoDA7wHAs7d71B2XRrM1tR96JuW/SndwHH5GgJf3r1J6vYtpaCydG8u4k7fweiI0G5GJWbIpqrYzlmVo2I5LMh5Dz6ZDZ5WOGMoPnxqUKzUazRZeX2Aa81RtBz0znoOq7bCUMwB8W8+m2Cgso/R/HsvvrQ47+wcTNU9DMh5j7dJ5lP/9zr8A5hvhBGvOuq4AAAAASUVORK5CYII=',
                    blank:true
                },
                {
                    name: '56网盘',
                    url: 'http://www.56wangpan.com/search/kw%s',
                    favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEbUlEQVR4nMWXaUxcVRTHf28WmM4MW1kLgqVQiqEVBNtKhagxVdCorba2JhZIjNZooo2p1ETbfrGNS+uaurbxg1ZNI9o0ktbSpI1RA4TSsLVICUyFsA7LwAwzzMyb5yce82A2QOL/09xzzr3n9+56RuB8hcT/KE2ogXFaI4/G51IafyfFMVlEa/XYxGnqx7uoHm6meriJfxwjCwYQgs1ASngMhzIf59nkQvTqcL9xLo/IuaFrHO78hTZr338DsDtpMydy9rBSawh5QIfo4uDNn/nA9Bsegq+uyp9jf3oJ3+W+4DO5JEm4PSKSND+BTq3l/exdfJZThgohKIDPPVCefC/vZj2NSpgdQJQ8nB9u5nR/LQ2WbsZdUxjU4eRGprEz6W52JG1Ep9LK8XtT72fEaeXNm1UBAeYtwTpDEg2FhzFqdLKt0zZIRctJ/hzv9DtQtmEV32x4jnuiMxTQj1z9kIvmVr/95i3BsXW7FclbJ3spqjsaMDlAu62fB+vfUyRTCyo+yn4GraAODeCuyNspjd8gtyfcdp66doJB50TA5DOa8jjZ3fQF3VNm2XaHMZntifmhAexJLkQtzJqOdV+gY2ogpOQzGnPZONBxRrFBy1OKggMIwEOx62XHlOjky54rC0o+o7ODjYpLqTgmC70qLDBAlEZPpiFBdly1mBgKcernyiWJ1Jjb5HaERkeGPsFnrAwQG2Yk3OsYtdtCv8186fqc/im6mMAAc3eqVZxeEoDVreyvEXzfebLV7nEqNs5KrXFJAHFhyv4OjyswgNlpxeb11XkRqUsCyItMU7Rv2X2/lDKATZymebJXduREpJBtWLWo5JEaHVtjc+T2wLQFk93sM1axMNXDTfJvjaBmf3rJogD2pj5AjNcjdtHciksSgwN82/cXdtEpt8tTing4bv28ToGUbVjFWxmPyW1JkjjZ+7vfeAVAj2OUU17BGkHFD7kvUuj1wATSmhXx/Fqwj0jNCtl2caSNP8Y6QgMAONR5llte6xWjNXBpYyWV6aV+bzOtoKYseQt1hQcVF47FbeeV66cDliU+K6LNUWu4tLESo0ZZgvU5xjk71Ej9eBfDzkmitXryItPYlpDPWkPivMGbJ3vYUntEcbpCAgDYGpvDmbyXiNbqA/AHV9VAA7uaPkeUPD79fkuympE2ttS+Td14l8/Sy5+kORP+ZFIB72Tt8BvvFwDghq2forojlLV8TaPFhMfPV0iSRIdtgH03vudjU43CJyDw2uoSnr/tPp99g5bls4GQqU+kMDqTTH0CERoddo+T7ikzdZYu2iZ7EZFQCyqq8l7miTlFyLTHTWnDcS6Pti8OYCGKUOu4vOkABVGrFXaz00px3VHabf2yLeASLFaTooNt1z6h1zGqsMeFGTmX/ypxXg/dsgAA9DrG2N74KVa3Q2Ffa0jk9fTS5QcAaJgwUdFyCvecdyDZqzhZVgCAqsEG3vj7J/koi5KHH/trZX/I/46XouOmCww6LexM2sRXPVeoHm6Wff8CcSai56TwP2UAAAAASUVORK5CYII=',
                    blank:true
                },
                {
                    name: 'Pan115',
                    url: 'http://www.pan115.com/search?key=%s',
                    favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB40lEQVR4nO2W4U0jMRCFvzlRwEIHkA6gBG47SEqASC6AiBKgAEtHB3eXDgglkA7iEpLtwPxY7zJr7GRvtSJIx0iRdsaemWfPeF7gfxcZ4uQtv8LnBnBiWA4FcDLQ71Z9L8NvXADecpFZmkb67z17WxGDS9r3AHgGfh4K/A9SimEVG3+MmGCQ9O2BJbBQegH8Dbb1Hr/NWAC2uobesgEuAoilGGYpJ28PBx5aAl3Lqbfs+jTiaADEMAdKoAqmgoENewLgLQVwFq1pvUqc0AHX1GVYA6sDt1Do9aakEgDcQjvdPkNWYijhCz3DP3QbqwBelT7j/bk13e+AG977ICX6GeoYrSQnobfcAQ9BrcRwqtZ2AWAjCzE8ZuJ4pSYn4Yc5EBrlXplip3PgBbgM+oO3lGIooyaca6dUcohuIAR4pXvCSYpI1C1VwBWwBXapJMBaDFephbYJvWVKXTOdfJ5lsfraJ8BMDE4MFST3OkhPSuiWYE19mgbAkxieco4BhIuSltGWbQCWj6GVqAR7HQfIKsUZnSYUg/OWBfVQKkYGkIzXhw2rTJA+9mzivgDakQkdGiaaDfrf06x5cn1G/NFH8dEBpOh4otbPchQb2TV1a9rNxjo2HTsxNbivUQI+0vG3fJq8AbQYmOhoQk+aAAAAAElFTkSuQmCC',
                    blank:true
                },
                {
                    name: '鸵鸟搜索',
                    url: 'http://www.tuoniao.me/search/%s/list',
                    favicon: 'data:image/png;base64,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',
                    blank:true
                },
                 {
                    name: '胖次分享',
                    url: 'https://www.panc.cc/s/%s/td_0',
                    favicon: '',
                    blank:true
                }, 
                {
                    name: '小不点搜索',
                    url: 'https://www.xiaoso.net/mod/app_search?wd=%E9%92%A2%E7%82%BC&mod=app_search&oksubmit=true&okbtn=XiaoSo%s',
                    favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABd0lEQVR4nKWTTytEYRTGf+e9d8zcmZEFGzFLZWE1kW9gY2fHyiyVfAAUG7KULLGzIR/AAqWoSUqTjaKwoFBkmubPnfu+FlfjXi4z5SxP5zzneZ5zjgzl9gz/CBWZVIIxUHU9XE+jlPwKYH9P1Oqawb4u5iezZLrT1LVh/+Seha1zEnELT4cJS1BCqeyS3xgjmbQRAPEna22wlDC3nufw4iEE0pBQqXmcbY6RdGyUCCKCAAJYnxKWpofp7UyhRMIAlhJGhzMkHPtPvQC7KyOUKm4YoOpqZnNZ/JlNQiAV/7LOB6h7tKfbkBb6AZyE3ahVQEhTK2ECi1AATpvF+eUTWrd2U89v5QaIAt/pmdXTpgZqbShcvZByYmEGBvAwrG0X0CaahdYGpYTxxYNQXgULto9umFo+/tFsDNw9FBmY2CEdmA7fLhH8P3gv1ejqSNDf08Frscr1YxHbVpFb+vELWhvSToyq61G4fcUAsVjkz0UDBGkbmm/lA6vHg4K5ek21AAAAAElFTkSuQmCC',
                    blank:true
                }
            ]
        }




        var settingData = {
            "status":1,
            "message":"$相关说明$(status: 这个在将来或许很重要)..."+
                    "(version: 若有新功能加入,靠这个版本号识别)..." +
                    "(addSearchItems: 允许更新时,添加新的搜索到你的搜索列表)..." +
                    "(modifySearchItems: 允许更新时,修改你的搜索列表中的项目)..." +
                    "(connectToTheServer: 允许连接到我的服务器(更新列表,将图标转换为base64等),将来更新使用或永不使用)..." +
                    "(closeBtn: 设置页面右上角的“关闭”圆圈是否显示。true显示,false隐藏)..." +
                    "(newtab: 新标签页打开。0为默认设置,1为新标签页打开)..." +
                    "(foldlist: 折叠当前搜索分类列表。true为折叠,false为展开。)..." +
                    "(settingOpacity: 设置按钮的透明度,值为0-1之间的数,0为透明,1为完全显示,中间值半透明。注：-1为直接关闭按钮,关闭之前请确定自己知道如何再次打开它)..." +
                    "(debug: debug模式,开启后,控制台会输出一些信息,“关闭并保存”按钮将不会在刷新页面)..." +
                    "(fixedTop: 将搜索栏固定到顶端。 true开启,false关闭)..." +
                    "(fixedTopUpward: 固定顶端后，搜索栏下拉不会出现，只有上拉时才出现。 true开启,false关闭)..." +
                    "(baiduOffset: 在百度页面鼠标划过的菜单会出现位移,若有使用其他的style样式,可以修改这个来修复二级菜单的偏移)..." +
                    "(getIcon: 自己添加搜索后获取图标的方式。0为自动，能连接谷歌的情况下用谷歌获取，无法连接的情况下，域名加favicon.ico获取；1为域名加favicon获取，2为使用谷歌获取，3为使用dnspot的服务获取(不建议使用)。或者添加网址，关键字使用%s代替，未测试)..." +
                    "(allOpen:一键搜索，点击相关分类后，打开该分类下的所有搜索)..." +
                    "(center:是否居中显示，主要是为了兼容脚本 ac 百度  ： 0 不居中，强制在左。 1, 强制居中 。 2,自动判断)..." +
                    "(engineDetails: 第一个值为分类列表标题名称,第二个值与enginelist相关联,必须匹配,第三个值true为显示列表,false为禁用列表。排列顺序与跳转栏上的显示顺序相同，可以用它将分类列表按自己喜欢排序)..." +
                    "(engineList: 各个搜索的相关信息)" +
                    "(rules: 将搜索样式插入到目标网页,同脚本中的rules设置相同,优先级高于脚本中自带的规则。自带了360搜索,可仿写)...",
            "version":4.02,
            "addSearchItems":true,
            "modifySearchItems":true,
            "connectToTheServer":true,
            "closeBtn":true,
            "newtab":0,
            "foldlist":true,
            "setBtnOpacity":0.8,
            "debug":false,
            "fixedTop":true,
            "fixedTopUpward":false,
            "baiduOffset":-120,
            "getIcon":0,
            "allOpen":false,
            "center":2,
            "engineDetails":[['网页', 'web',true],['翻译', 'translate',true],['知识', 'knowledge',true],['图片', 'image',true],['视频', 'video',true],['音乐', 'music',true],['学术', 'scholar',false],  ['社交', 'sociality',true],['购物', 'shopping',true],["下载","download",true],["新闻","news",false],['mine', 'mine',false]],
            "engineList":{},
            "rules":[{"name": "360", "url": "/^https?:\\/\\/www\\.so\\.com\\/s\\?/", "enabled": true, "engineList": "web","fixedTop":50, "style": "padding: 10px 0 0 120px;margin-bottom:-10px;z-index:3001;", "insertIntoDoc": {"keyword": "//input[@name='q']", "target": "css;#tabs-wrap", "where": "afterEnd"}}]
        }
        // --------------------可设置项结束------------------------
        // GM_deleteValue("searchEngineJumpData");
        var getSettingData = GM_getValue("searchEngineJumpData");
        if(getSettingData){
            // console.log("本地存在列表：",getSettingData);
            if(!getSettingData.status && confirm("设置发生错误,脚本将会复原出厂设置")){
                GM_deleteValue("searchEngineJumpData");
                window.location.reload();
            }

            // 查看本地配置信息是否完整
            for(let value in settingData){
                if(!getSettingData.hasOwnProperty(value)){
                    console.log("属性不存在： ",value);
                    getSettingData[value] = settingData[value];
                    GM_setValue("searchEngineJumpData",getSettingData);
                }
            }

            // 获取版本,用于搜索列表更新
                // console.log("当前版本号和目标版本号: ",getSettingData.version,settingData.version);
            if(parseFloat(getSettingData.version) < settingData.version){
                console.log("版本过低,开始更新,当前版本号和目标版本号: ",getSettingData.version,settingData.version);
                // 1.96 更新 修改a站搜索链接
                // if(getSettingData.modifySearchItems){
                //     getSettingData.engineList = modifySearchItemsFun(getSettingData.engineList,"http://www.acfun.tv/search.aspx#query=%s","http://www.acfun.cn/search/?#query=%s")
                // }
                // 版本3.02 添加 自用网站-搜狗表情
                // if(getSettingData.addSearchItems && getSettingData.engineList.hasOwnProperty("mine")){
                //     // engineList.mine[8].disable = true; // 对于老用户,默认禁用的状态添加
                //     getSettingData.engineList["mine"].push(engineList.mine[8])
                // }
                // 4.01 
                // if(getSettingData.addSearchItems){
                //     // engineList.mine[8].disable = true; // 对于老用户,默认禁用的状态添加
                //     if(getSettingData.engineList.hasOwnProperty("web")){
                //         getSettingData.engineList["web"].push(engineList.web[7])
                //     }
                //     if(getSettingData.engineList.hasOwnProperty("shopping")){
                //         getSettingData.engineList["shopping"].push(engineList.shopping[8])
                //     }
                //     if(getSettingData.engineList.hasOwnProperty("music")){
                //         getSettingData.engineList["music"].push(engineList.music[6])
                //         getSettingData.engineList["music"].push(engineList.music[7])
                //     }
                // }
                // 4.02
                if(getSettingData.addSearchItems){
                    // engineList.mine[8].disable = true; // 对于老用户,默认禁用的状态添加
                    if(getSettingData.engineList.hasOwnProperty("web")){
                        getSettingData.engineList["web"].push(engineList.web[8])
                    }
                }

                // 更新本地版本 其他相关信息
                getSettingData.version = settingData.version;
                getSettingData.message = settingData.message;
                GM_setValue("searchEngineJumpData",getSettingData);
            }

            engineList = getSettingData.engineList;

        } else {
            console.log("未发现本地列表");
            settingData.engineList = engineList;
            console.log("初始化：",settingData);

            GM_setValue("searchEngineJumpData",settingData);
            getSettingData = GM_getValue("searchEngineJumpData");
        }

        // 处理enginlist.detail的相关信息
        var engineDetails = getSettingData.engineDetails;
        //列表分类显示情况
        var getDetails = engineDetails.map(function(value,index){
            return value[2]?index:-index;
        })

        // 列表分类的key value
        var getDetailsL = getDetails.length;
        var details = [];
        for(let i=0;i<getDetailsL;i++){
            details[getDetails[i]] =  engineDetails[i];
        };
        engineList.details = details;

        reloadDebug(getSettingData.debug);

        ///test -------------- 测试 start
        debug("searchEngineJump test location.href: ",window.location.href)
        ///test -------------- 测试 end

        // 更新已过期的搜索链接
        function modifySearchItemsFun(engineList,oldURL,newURL){
            for(let value in engineList){
                var item = engineList[value]
                for(let i=0;i<item.length;i++){
                    if(item[i].url === oldURL){
                        item[i].url = newURL;
                        return engineList;
                    }
                }
            }
            return engineList;
        }
        // 更新本地 rule
        function modifySearchItemsRuleFun(name,value){
            var oldRule = getSettingData.rules;
            for(let item in oldRule){
                if(oldRule[item].name == name){
                    console.log("匹配成功, 更新 rule : ", name);
                    oldRule[item] = value;
                    GM_setValue("searchEngineJumpData",getSettingData);
                }
            }
        }

        // parseUri 1.2.2
        // (c) Steven Levithan <stevenlevithan.com>
        // MIT License
        var parseUri = function(str) {
            var o = parseUri.options,
                m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
                uri = {},
                i = 14;

            while (i--) uri[o.key[i]] = m[i] || "";

            uri[o.ds.name] = {};
            uri[o.ds.name][0] = {};
            uri[o.ds.name][0]["key"] = (uri.protocol ? uri.protocol : "http") + "://" + uri.host + (uri.port ? ":" + uri.port : "") + "/";
            uri[o.ds.name][0]["val"] = "/";
            i = 0;
            var tempsub = "/",
                subs = uri[o.key[10]].substr(1).split("/");
            for (var j = 1; j < (subs.length + 1); j++, i++) {
                tempsub += tempsub === "/" ? subs[i] : "/" + subs[i];
                if (subs[i]) {
                    uri[o.ds.name][j] = {};
                    uri[o.ds.name][j]["key"] = subs[i];
                    uri[o.ds.name][j]["val"] = tempsub;
                }
            }

            uri[o.q.name] = {};
            uri[o.key[12]].replace(o.q.parser, function($0, $1, $2) {
                if ($1) uri[o.q.name][$1] = $2;
            });
            uri[o.aq.name] = {};
            uri[o.key[13]].replace(o.aq.parser, function($0, $1, $2) {
                if ($1) uri[o.aq.name][$1] = $2;
            });

            return uri;
        };
        parseUri.options = {
            strictMode: false,
            key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
            q: {
                name: "queryKey",
                parser: /(?:^|&)([^&=]*)=?([^&]*)/g
            },
            aq: {
                name: "anchorqueryKey",
                parser: /(?:^|&)([^&=]*)=?([^&]*)/g
            },
            ds: {
                name: "directorySub"
            },
            parser: {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
        };

        // gbk 编码   引自 https://segmentfault.com/a/1190000006919102
        function gbkEncode(str) {
          return str.replace(/./g, function (a) {
            var code = a.charCodeAt(0);
            if (isAscii(code)) {
              return encodeURIComponent(a);
            } else {
              var key = code.toString(16);
              if (key.length != 4)key = ('000' + key).match(/....$/)[0];
              return U2Ghash[key] || a;
            }
          });
        }

        function getElementLeft(element){
            var actualLeft = element.offsetLeft;
            var current = element.offsetParent;
            while (current !== null){
                actualLeft += current.offsetLeft;
                current = current.offsetParent;
            }
            return actualLeft;
        };
        // console.log("engineList: ",engineList);
        //xpath 获取单个元素
        function getElementByXPath(xPath, contextNode, doc) {
            doc = doc || document;
            contextNode = contextNode || doc;
            return doc.evaluate(xPath, contextNode, null, 9, null).singleNodeValue;
        };

        // 从函数中获取多行注释的字符串
        function getMStr(fn) {
            var fnSource = fn.toString();
            var ret = {};
            fnSource = fnSource.replace(/^[^{]+/, '');
            // console.log(fnSource);
            var matched;
            var reg = /var\s+([$\w]+)[\s\S]*?\/\*([\s\S]+?)\*\//g;
            while (matched = reg.exec(fnSource)) {
                // console.log(matched);
                ret[matched[1]] = matched[2];
            };

            return ret;
        };

        // 事件支持检测.
        // 比如 eventSupported('fullscreenchange', document);
        function eventSupported(eventName, elem) {
            elem = elem || document.createElement('div');
            var prefix = ['o', 'ms', 'moz', 'webkit', ''];

            var l = prefix.length;
            var pEventName;
            var isFunction;
            var setAttr;

            while(l --) {
                pEventName = 'on' + prefix[l] + eventName;

                if (pEventName in elem) {
                    return pEventName.slice(2);
                } else if (typeof elem.setAttribute == 'function') { // setAttribute 是元素节点的方法
                    setAttr = false;
                    if (!elem.hasAttribute(pEventName)) {
                        setAttr = true;
                        elem.setAttribute(pEventName, 'return;');
                    };

                    isFunction = typeof elem[pEventName] == 'function';

                    if (setAttr) elem.removeAttribute(pEventName);

                    if (isFunction) {
                        return pEventName.slice(2);
                    };
                };
            };

            return false;
        };

        // 保存指定对象相关数据
        var data = (function () {
            'use strict';

            var cache = {
                objs: [],
                data: {},
            };

            function data(obj, key, value) {
                var id = cache.objs.indexOf(obj);
                if (id == -1) {
                    id = cache.objs.push(obj) - 1;
                };
                if (!cache.data[id]) {//初始化
                    cache.data[id] = {};
                };
                if (typeof value == 'undefined') {// 取值
                    return typeof key == 'undefined' ? cache.data[id] : cache.data[id][key];
                } else {
                    return cache.data[id][key] = value;
                };
            };

            return data;
        })();

        // 为mouseleave mouseenter事件做个兼容
        // 需要 eventSupported, data函数支持
        var mouseEventListener = (function () {

            var support = {
                mouseleave : eventSupported('mouseleave'),
                mouseenter : eventSupported('mouseenter'),
            };

            var map = {
                mouseleave : 'mouseout',
                mouseenter : 'mouseover',
            };

            return {
                add : function (type, ele, callback) { //事件类型,元素,监听函数
                    if (support[type]) {
                        ele.addEventListener(type, callback, false); //mouseleave,enter不冒泡,所以在冒泡阶段监听事件,不要担心子孙元素进出发生的事件冒泡上来。
                    } else {
                        var listener = data(callback, 'mouseELListener');
                        if (!listener) {
                            listener = function (e) {
                                var relatedTarget = e.relatedTarget; //mouseout,去往的元素;mouseover,来自的元素
                                // 当mouseout（离开ele）去往的元素不是自己的子孙元素
                                // 当mouseover（进入ele）来自的元素不是自己的子孙元素
                                if (!ele.contains(relatedTarget)) { // contains函数,自己.contains(自己) 返回true
                                    callback.call(ele, e);
                                };
                            };
                            data(callback, 'mouseELListener', listener);
                        };

                        ele.addEventListener(map[type], listener, true);
                    };
                },
                remove : function (type, ele, callback) {
                    if (support[type]) {
                        ele.removeEventListener(type, callback, false);
                    } else {
                        ele.removeEventListener(map[type], data(callback, 'mouseELListener'), true);
                    };
                },
            };
        })();

        //获取已滚动的距离
        function getScrolled(container) {
            if (container) {
                return {
                    x:container.scrollLeft,
                    y:container.scrollTop,
                };
            };
            return {
                x: 'scrollX' in window ? window.scrollX : ('pageXOffset' in window ? window.pageXOffset : document.documentElement.scrollLeft || document.body.scrollLeft),
                y: 'scrollY' in window ? window.scrollY : ('pageYOffset' in window ? window.pageYOffset :  document.documentElement.scrollTop || document.body.scrollTop),
            };
        };

        function getElement(selector) {
            if (selector.indexOf('css;') == 0) {
                return document.querySelector(selector.slice(4));
            } else {
                return getElementByXPath(selector);
            };
        };

        function mousedownhandler(e) {
            var target = e.target;

            target = getElementByXPath('ancestor-or-self::a[contains(@class, "sej-engine")]', target);

            // if (!target || target.className.indexOf('sej-engine') == -1) return;
            if (!target || !this.contains(target)) return;

            var value;
            if (typeof iInput == 'function') {
                value = iInput();
            } else {
                if (iInput.nodeName == 'INPUT') {
                    value = iInput.value;
                } else {
                    value = iInput.textContent;
                };
            };

            // 编码 解码
               // 对搜索词编码 (未做解码处理，浏览器自动处理) 网站1688采用gbk编码
            if (matchedRule.gbk){
                value = gbkEncode(value)
            } else {
                value = encodeURIComponent(value);
            }
            // // @name     searchEngineJump-NextStage
            if (document.characterSet != "UTF-8") value = encodeURIComponent(value);

            var targetURL = target.getAttribute('url');

            // 一键搜索  
            if(getSettingData.allOpen && target.classList.contains("sej-drop-list-trigger")){
                var list = engineList[target.dataset.iqxincategory]
                console.log("allOpen")
                console.log(list)
                for(var i=0;i<list.length;i++){
                    if (matchedRule.url.test(list[i].url)) continue ;
                    if (list[i].disable) continue ;
                    var href = list[i].url.replace('%s', value);
                    GM_openInTab(href)
                }
                target.setAttribute("onclick","return false;");
                return 
            }


            // 如果有post请求
            var postSign = targetURL.indexOf('$post$');
            if(~postSign){
                // var targetBlank =
                var f=getPostFormHTML(targetURL.substring(0,postSign),[targetURL.substring(postSign+6),value],target.getAttribute('target'))
                // a = a.replace("$form$", f);
                target.appendChild(f)
                // a = a.replace("$onclick$", "this.getElementsByTagName('form')[0].submit();return false;");
                // target.removeAttribute('onclick');
                target.setAttribute("onclick","this.getElementsByTagName('form')[0].submit();return false;");
                // alert(f);
            } else{
                //console.log(value);
                target.href = target.getAttribute('url').replace('%s', value);
            }
        };
         //获取  POST 的表单的 HTML
        function getPostFormHTML(url, value, newTab) {
            //console.log(url,value,newTab)
            var ospan = document.createElement('span');
            ospan.style.cssText = 'width:0px;height:0px;';
            var form = "" +
                "<form method='post'" +
                " action='" + url + "'" +
                (newTab ? " target='_blank'" : "") +
                ">" +
                "<input type='hidden'" +
                    " name='" + value[0] + "'" +
                    " value='" + value[1] + "'" +
                    " />" +
                "</form>";
            ospan.innerHTML = form;
            return ospan;
        };

        // iframe 禁止加载
        if (window.self != window.top) return;

        var url = location.href;
        var matchedRule;
        var marchedSign;

        //先判断用户规则
        marchedSign = getSettingData.rules.some(function (rule) {
            rule.url = new RegExp(rule.url.substring(1,rule.url.length-1));
            if (rule.url.test(url)) {
                matchedRule = rule;
                return true;
            };
        });

        // console.log(marchedSign,matchedRule);
        if(!marchedSign){
            rules.some(function (rule) {
                if (rule.url.test(url)) {
                    matchedRule = rule;
                    return true;
                };
            });
        }

        if (!matchedRule || !matchedRule.enabled) return;

        var iTarget = getElement(matchedRule.insertIntoDoc.target);
        var iInput = typeof matchedRule.insertIntoDoc.keyword == 'function' ? matchedRule.insertIntoDoc.keyword : getElement(matchedRule.insertIntoDoc.keyword);

        ///test -------------- 测试 start
        debug("searchEngineJump test iTarget, iInput: ",iTarget, iInput);
        ///test -------------- 测试 end

        if (!iTarget || !iInput) {
            console.log("脚本 searchEngineJump 搜索引擎快捷跳转 遇到了错误： ");
            console.log("目标有误： iTarget：" + iTarget + "\niInput: " + iInput);
            return;
        }

        // 添加全局样式
        var globalStyle = document.createElement('style');
        globalStyle.type = 'text/css';
        globalStyle.textContent = getMStr(function(){
            var cssText;
            /*
                #sej-container {
                    display: block;
                    position: relative;
                    z-index: 2;
                    padding: 1px 5px 1px 5px;
                    line-height: 1.5;
                    font-size: 13px;
                    font-family: arial,sans-serif;
                    transform-origin: top center;
                    animation: sejopen 0.3s !important;
                    border-bottom-right-radius: 4px;
                    //transition:0.3s;
                }

                #sej-expanded-category {
                    font-weight: bold;
                }

                .sej-engine {
                    line-height: 2;
                    display: inline-block;
                    margin: 0 0px 0 0;
                    border: none;
                    padding: 0 6px;
                    text-decoration: none;
                    font-weight:500;
                    color: #333 !important;
                    transition: background-color 0.15s ease-in-out;
                }
                .sej-drop-list-trigger {

                }
                .sej-drop-list-trigger-shown {
                    background-color: #DEEDFF !important;
                }
                .sej-drop-list-trigger::after {
                    content: '';
                    display: inline-block;
                    margin: 0 0 0 3px;
                    padding: 0;
                    width: 0;
                    height: 0;
                    border-top: 6px solid #BCBCBC;
                    border-right: 5px solid transparent;
                    border-left: 5px solid transparent;
                    border-bottom: 0px solid transparent;
                    vertical-align: middle;
                    transition: -webkit-transform 0.3s ease-in-out;
                    transition: transform 0.3s ease-in-out;
                }
                .sej-drop-list-trigger-shown::after {
                    -webkit-transform: rotate(180deg);
                    transform: rotate(180deg);
                }
                .sej-engine:hover {
                    background-color: #EAEAEA;
                }
                .sej-drop-list > .sej-engine {
                    display: block;
                    padding-top: 4px;
                    padding-bottom: 4px;
                }
                .sej-drop-list > .sej-engine:hover {
                    background-color: #DEEDFF;
                }

                .sej-engine-icon {
                    display: none;
                    width: 16px;
                    height: 16px;
                    border: none;
                    padding: 0;
                    margin: 0 3px 0 0;
                    vertical-align: text-bottom;
                }

                .sej-drop-list {
                    position: absolute;
                    display: none;
                    opacity: 0.3;
                    top: -10000px;
                    left: 0;
                    min-width: 90px;
					border: 1px solid #EBEBEB !important;
					border-radius: 4px !important;
                    padding: 5px 0;
                    text-align: left;
                    font-size: 13px;
                    -moz-box-shadow: 0 5px 20px rgba(26,26,26,.1);
                    -webkit-box-shadow: 0 5px 20px rgba(26,26,26,.1);
                    box-shadow: 0 5px 20px rgba(26,26,26,.1);
                    background-color: white;
                    transition: opacity 0.2s ease-in-out,
                        top 0.2s ease-in-out;
                }
                @keyframes sejopen {
                    0% {
                        transform: scale(1, 0.1);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(1, 1);
                        opacity: 1;
                    }
                }
                @keyframes iqxinsejopen {
                    0% {
                        transform: scale(0.01, 0.01);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(1, 1);
                        opacity: 1;
                    }
                }
            */
        }).cssText;
        document.head.appendChild(globalStyle);

        // 列表对象
        function DropDownList(a, list) {
            this.a = a;
            this.list = list;
            this.init();
        };
        DropDownList.zIndex = 100000000;

        DropDownList.prototype = {
            hidden: true,
            showDelay: 0,
            hideDelay: 0,
            aShownClass: 'sej-drop-list-trigger-shown',

            init: function () {
                var a = this.a;
                var list = this.list;

                var self = this;

                // 进入显示
                mouseEventListener.add('mouseenter', a, function () {
                    clearTimeout(self.hideTimerId);

                    if (self.hidden) {
                        self.showTimerId = setTimeout(function () {
                            self.show();
                        }, self.showDelay);
                    } else {
                        var style = list.style;
                        style.zIndex = DropDownList.zIndex ++;
                        style.opacity = 0.96;
                    };
                });

                // 离开隐藏
                mouseEventListener.add('mouseleave', a, function () {
                    clearTimeout(self.showTimerId);

                    if (!self.hidden) {
                        //list.style.top = parseInt(list.style.top)+6 +"px";
                        list.style.opacity = 0.04;
                        self.hideTimerId = setTimeout(function () {
                            self.hide();
                        }, self.hideDelay);
                    };
                });

                mouseEventListener.add('mouseenter', list, function () {
                    clearTimeout(self.hideTimerId);

                    var style = list.style;
                    style.zIndex = DropDownList.zIndex ++;
                    style.opacity = 0.96;
                });

                mouseEventListener.add('mouseleave', list, function () {

                    list.style.opacity = 0.04;
                    list.style.top = parseInt(list.style.top)+6 +"px";
                    self.hideTimerId = setTimeout(function () {
                        self.hide();
                    }, self.hideDelay);
                });
            },
            show: function () {
                if (!this.hidden) return;
                this.hidden = false;

                var scrolled = getScrolled();
                var aBCRect = this.a.getBoundingClientRect();

                var style = this.list.style;

                var top = scrolled.y + aBCRect.bottom;
                var left = scrolled.x + aBCRect.left;

                if(/^https?:\/\/www\.baidu\.com\/(?:s|baidu)/.test(url)){
                    // top -= 90;
                    top = 26;
                    // left -= 120;
                    if(document.querySelector("#myuser") && getSettingData.center != 0){
                         left += 120;
                    } else {
                        left += getSettingData.baiduOffset;
                    }
                }

                style.top = top + 6 + 'px';
                style.left = left + 'px';
                style.zIndex = DropDownList.zIndex ++;
                style.display = 'block';

                setTimeout(function () {
                    style.opacity = 0.96;
                    style.top = top + 'px';
                }, 30);

                this.a.classList.add(this.aShownClass);

            },
            hide: function () {
                if (this.hidden) return;
                this.hidden = true;

                var style = this.list.style;
                style.display = 'none';
                style.opacity = 0.1;

                this.a.classList.remove(this.aShownClass);

            }
        };

        var pageEncoding = (document.characterSet || document.charset).toLowerCase();

        // 创建dom
        var aPattern = '<a href="" class="sej-engine" target="$blank$" data-iqxincategory="$category$" encoding="$encoding$" url="$url$"><img src="$favicon$" class="sej-engine-icon" />$name$</a>';
        var container = document.createElement('sejspan');
        container.id = 'sej-container';
        container.className = "rwl-exempt";

        container.addEventListener('mousedown', mousedownhandler, true);

        // 兼容其他修改网页的脚本
        if (matchedRule.style) {
            // 判断是否存在脚本 “AC-baidu:重定向优化百度搜狗谷歌搜索_去广告_favicon_双列”
            if(getSettingData.center==2){    // 自动判断是否添加
                if(document.querySelector("#myuser") && matchedRule.style_ACBaidu){
                    console.log("检测到脚本：“AC-baidu:重定向优化百度搜狗谷歌搜索_去广告_favicon_双列”   ------自动添加");
                    matchedRule.style = matchedRule.style_ACBaidu;
                }
            } else if (getSettingData.center==1){   //  强制添加
                console.log("检测到脚本：“AC-baidu:重定向优化百度搜狗谷歌搜索_去广告_favicon_双列”   ------强制添加");
                matchedRule.style = matchedRule.style_ACBaidu?matchedRule.style_ACBaidu:matchedRule.style;
            }     // 
            // 判断是否存在脚本“知乎排版优化”
            if(document.getElementById('SearchMain')){
                if(document.getElementById('SearchMain').style.marginLeft=='150px'){
                    matchedRule.style = matchedRule.style_ZhihuChenglinz;
                    matchedRule.fixedTop = null;
                }
            }
            container.style.cssText = matchedRule.style;
        };

        var dropLists = [];
        engineList.details.forEach(function (item) {
            var category = item[1];
            var cName = item[0];
            var engines = [];

            engineList[category].forEach(function (engine) {
                // 检测是否用搜索搜某一网站 site:xxx.xx
                var engineUrl = engine.url;
                var siteIndex = engineUrl.lastIndexOf("site");
                var siteMark = null;
                if(~siteIndex){
                    var siteURL = engineUrl.slice(siteIndex);
                    siteMark = /([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}/.test(siteURL);
                    // console.log(/([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}/.test(siteURL),siteURL);
                }

                if (!siteMark && matchedRule.url.test(engineUrl)) return;// 去掉跳转到当前引擎的引擎
                if(engine.disable) return;
                var a = aPattern.replace('$encoding$', (engine.encoding || 'utf-8').toLowerCase())
                    .replace('$url$', engineUrl)
                    .replace('$name$', engine.name)
                    .replace("$category$",category);

                if (engine.favicon) {
                    a = a.replace('$favicon$', engine.favicon);
                } else {
                    a = a.replace('src="$favicon$"', '');
                };
                if (getSettingData.newtab || engine.blank) {
                    a = a.replace('$blank$', "_blank");
                } else {
                    a = a.replace('target="$blank$"', '');
                };

                engines.push(a);
            });
            // 非空列表
            if (!engines.length) return;

            engines = engines.join('');

            // 展开当前搜索分类列表
            if (!getSettingData.foldlist && category == matchedRule.engineList) {
                container.innerHTML = engines;
            } else {
                var dropList = document.createElement('sejspan');
                dropList.className = 'sej-drop-list rwl-exempt';
                dropList.innerHTML = engines;

                // 非空列表
                var a = dropList.firstElementChild.cloneNode(true);
                a.className = a.className + ' sej-drop-list-trigger';
                a.lastChild.nodeValue = cName;
                dropLists.push([a, dropList]);
            };
        });

        //将各个搜索列表插入文档中
        dropLists.forEach(function (item) {
            container.appendChild(item[0]);
            document.body.appendChild(item[1]);
            item[1].addEventListener('mousedown', mousedownhandler, true);

            new DropDownList(item[0], item[1]);
        });

        // 插入到文档中
        switch (matchedRule.insertIntoDoc.where.toLowerCase()) {
            case 'beforebegin' :
                iTarget.parentNode.insertBefore(container, iTarget);
            break;
            case 'afterbegin' :
                if (iTarget.firstChild) {
                    iTarget.insertBefore(container, iTarget.firstChild);
                } else {
                    iTarget.appendChild(container);
                };
            break;
            case 'beforeend' :
                iTarget.appendChild(container);
            break;
            case 'afterend' :
                if (iTarget.nextSibling) {
                    iTarget.parentNode.insertBefore(container, iTarget.nextSibling);
                } else {
                    iTarget.parentNode.appendChild(container);
                };
            break;
        };

        // todo: 此处与上面重复,在百度页面会插入两次
        if(/^https?:\/\/www\.baidu\.com\/(?:s|baidu)/.test(url)){
            var sej = document.getElementsByTagName("sejspan")[0];
            sej.appendChild(globalStyle);

            dropLists.forEach(function (item) {
                container.appendChild(item[0]);
                // document.body.appendChild(item[1]);
                var sej = document.getElementsByTagName("sejspan")[0];
                sej.appendChild(item[1]);
                item[1].addEventListener('mousedown', mousedownhandler, true);

                new DropDownList(item[0], item[1]);
            });
        };

        // 由于与要插入网页的样式无法很好的兼容,更改源网页的样式
        if(matchedRule.stylish){GM_addStyle(matchedRule.stylish);};
        //固定搜索栏
        if(getSettingData.fixedTop){
            // 判断是否需要只在向上滚动时显示
            if(getSettingData.fixedTopUpward){
                window.onmousewheel = document.onmousewheel = function(eee){
                    if(eee.wheelDelta>0){
                        fixedTopFun(matchedRule.fixedTop);
                    }else{
                        var obj = document.getElementById("sej-container");
                        obj.style.cssText = matchedRule.style;
                    }
                }    
            } else {
                window.onscroll = function(){
                    fixedTopFun(matchedRule.fixedTop);
                };
            }
            // 固定搜索栏
            function fixedTopFun(height){
                var obj = document.getElementById("sej-container");
                var objTop = obj.offsetTop ;
                var objLeft = obj.offsetLeft ;

                var current = obj.offsetParent;
                while (current !== null){
                    objLeft += current.offsetLeft;
                    current = current.offsetParent;
                }

                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

                if(height){
                    objTop = height;
                }else{
                    height = 0;
                }

                if(scrollTop <= objTop){
                    obj.style.cssText = matchedRule.style;
                }else if(obj.style.position!="fixed"){
                    // console.log(scrollTop,objTop,scrollTop - objTop);
                    var objstyle = window.getComputedStyle(obj , null);
                    var marginTop = parseInt(objstyle.marginTop);
                    var marginLeft = parseInt(objstyle.marginLeft);
                    var marginRight = parseInt(objstyle.marginRight);
                    //console.log(objLeft,marginLeft);

                    obj.style.top = height - marginTop + 'px';
                    
                    // 如果之前未设置颜色,则默认设置为白色
                    if(objstyle.backgroundColor === "rgba(0, 0, 0, 0)" || objstyle.backgroundColor === "transparent"){
                        obj.style.background = '#fff'; 
                    }
                    obj.style.left = getElementLeft(obj) - marginLeft + "px";
                    // obj.style.left = getElementLeft(obj) + "px";
                    debug("objLeft: ",objLeft,"marginLeft: ",marginLeft,"marginRight: ",marginRight,"getElementLeft: ",getElementLeft(obj));
                    // 知乎等网站的情况 利用 margin 居中
                    if(marginRight === marginLeft && marginRight != 0){
                        obj.style.left = marginLeft + "px";
                    }
                    // 淘宝等网站的情况 利用 text-align 居中
                    if(obj.style.textAlign === "center"){
                        obj.style.width = objstyle.width;
                    }

                    obj.style.position = 'fixed';
                }
            }
        } else {
            window.onscroll = function(){
                return true;
            };
        };

        // -------------------设置相关--------------------------------
        // 设置按钮相关
        var dragEl = null;
        var dragData = null;

        function SEJsetting(){
            this.ele = document.createElement("div");
            this.mask = document.createElement("div");

            this.parentTemp = null;
            this.editTemp = null;
            this.online = null;
            this.init();
        };

        SEJsetting.prototype = {
            testabc : "hahah",
            aPatternParent : "<div></div>",

            init: function () {
                // console.log("init...");
                var that = this;

                this.ele.id = "settingLayer";
                this.mask.id = "settingLayerMask";

                this.addGlobalStyle();

                this.addContent();

                this.mask.addEventListener("click",function(){
                    that.hide();
                });
                this.ele.addEventListener("click",function(e){
                    e.stopPropagation();
                });

                this.mask.appendChild(this.ele);
                document.body.appendChild(this.mask);

                // 绑定事件
                this.ele.addEventListener("click",that.domClick.bind(this),false);
                this.dragEvent();
                this.setDragNode(this.ele); //设置拖动
                // input[range]
                that.rangeChange(true);
                document.querySelector("#setBtnOpacityRange").addEventListener("input",that.rangeChange);
            },
            dragEvent: function(){
                var that = this;
                var odivsdrag = document.querySelectorAll(".drag");
                [].forEach.call(odivsdrag,function(odiv){
                    odiv.addEventListener("dragstart",that.domdragstart,false);
                    odiv.addEventListener('dragenter', that.domdragenter, false);
                    odiv.addEventListener('dragover', that.domdragover, false);
                    odiv.addEventListener('dragleave', that.domdragleave, false);
                    odiv.addEventListener('drop', that.domdrop, false);
                    odiv.addEventListener('dragend',that.domdropend, false);
                });
            },
            addContent: function(){
                var aPattern = '<span draggable="true" class="drag">' +
                                '<span class="sej-engine"' +
                                ' data-xin="$xin$" ' +
                                ' data-iqxinimg="$img$" ' +
                                ' data-iqxintitle="$title$" ' +
                                ' data-iqxinlink="$link$" ' +
                                ' data-iqxintarget="$blank$" ' +
                                ' data-iqxindisabled="$disabled$" ' +
                                '><img src="$favicon$" class="sej-engine-icon" style="padding-bottom:3px;"/><span>$name$</span></span>' +
                                ' <span class="iqxin-set-edit" title="编辑 Edit"><img class="sej-engine-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAACDklEQVR4nJXVzUtUURjH8Y/mSNKkki2iwiApxHQ1q/6C+gusoCB6oxbRRqFNL4sWtRKqhVSLIDe1CqpNiwjKIilKLKKFEr2Z2qI0xxHN0+LOm+PMOPOc1T2H7/f5ncO991BdNer30zmxKrl0xV2zKJjRoy6aqkkvbbdVLPuUq+8+5uGXnVILki7qsxgtNDtrTNLcijHvrdYsft0/wQ8DZgSzeqMUDW4IJceYHcvwCd1ies0KZvWI1TnhIH6574Olgg0E74zmhZ902j304by4Cxp5LPjtQNmjy3XPVK2rgmCBCcGgdVXhdBgUBCMEwVMNVeIvBMFLifKC8vgrndFBlRJUhJcWFMd3ZfGuzFRxwWrdu3KTxQQVhi8lqApfKVhf0d4bc2/OckG9Pkur7r3TEw+1FRO0GxdM2Vc2/HHBgr1If935UTfigbt5+C27MeSo9+m5GJYitlCwWR2G8oQZ/FgWX1aFgnZMG852v5nFR4rhMn+2dDVJYFpKqy0SDksUhF9FsE0bWgyIa9bIanihoEUcDTrSz4ueOVMOLxQkzVkrZcaoNz755rmpcnihYNghm3w26Ys/5cGcIKgRBJDyqCIquj8C1PqKZvHK+qVrJ5bMRwmGterU64pkkZupWO3RjXkzUZj9+jVZMGK6IsEaHTbgjpOSUYZL/pa5m4qPIbtyznpHvJaqGB53O33h4T/3VzLuzDhE6AAAAABJRU5ErkJggg=="/></span>' +
                                ' <span class="iqxin-set-del" title="删除 Delete"><img class="sej-engine-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEUAAADsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVH///9VVVVWVlZXV1dYWFhZWVlaWlpbW1tcXFxdXV1eXl5fX19gYGBhYWFiYmJjY2NkZGRlZWVmZmZnZ2doaGhpaWlqampra2tsbGxtbW1ubm5vb29wcHBxcXFycnJzc3N0dHR1dXV2dnZ3d3d4eHh5eXl6enp7e3t8fHx9fX1+fn5/f3+AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7O0tLS1tbW2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjJycnKysrLy8vMzMzNzc3Ozs7Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8dej9TAAAAU3RSTlMAAABm7P/sZgAAABPO////zhQAAB/i/////////+IfAAAe4fvk4AAAAAAd/+Q3GxwAFR85FQBjz+LPY+v////r6//////rZM/h4c9jABUdHRUAAP0EcPoAAAEuSURBVHic7ZRnc8IwDIbdEUZHGB0kDsMOMcOMttBBB93Qvcj//y9VjB0Czh13/dz3ixT5OVmSYyMktLK6tm74oYxEMpVGUW1sbm2bM8DMZHP5OWBnd2+/YNnYAWHbKhRL5cocQKjrWFWPuSDmVS3HpUQu1eoNQkiTM9xqd7oHoG6n3cKMNyHcqNfQ4VGPUsr7nh0FbK/PIdw7PkGnZwOZNrqF9AfnF+jyaigLixYp/eH1Dbq9u4eAHyOAHh5HaPz0DCnjANjm5fUNvX98QoGCxyo5Fjmh0K/vH2hzAi0KnqnymMgJrU6gzemQBM+DZpX1/XBYUyAYTTAuZTUg+Aw8Zf+BvwJLR730sPTjXgD0H2YB0BUClXKpGAeE1y+fy2ZMfX12gdOpZMLQAfkE/AL7e5vGZF+dOQAAAABJRU5ErkJggg=="></span>' +
                                '</span>';
                var details = engineList.details;
                // 若根据数组长度获取,负数引导的为属性,不再length长度之内,所以来个大体的数字,当都为空时,结束循环
                // var detailsLength = details.length;
                var detailsLength = 99;
                for (let i=0;i<detailsLength;i++){
                    var j = i;
                    j = details[j] ? j : -j;
                    if (!details[j]){break};

                    var odiv = document.createElement("div");
                    odiv.id = details[j][1]; // "web"
                    odiv.classList.add("iqxin-items");

                    var oDivTitle = document.createElement("div");
                    oDivTitle.classList.add("sejtitle","drag");
                    oDivTitle.setAttribute("draggable","true");
                    oDivTitle.dataset.iqxintitle = details[j][1];
                    oDivTitle.dataset.xin = j;
                    oDivTitle.innerHTML ='<span class="iqxin-pointer-events">' + details[j][0] + '</span>' +
                                        '<span class="iqxin-title-edit" title="编辑 Edit"><img class="sej-engine-icon" src="' + icon.edit + '"/></span>'+
                                        ' <span class="iqxin-set-title-del" title="删除 Delete"><img class="sej-engine-icon" src="' + icon.del + '"></span>';
                    odiv.appendChild(oDivTitle);

                    var oDivCon = document.createElement("div");
                    oDivCon.classList.add("sejcon");
                    var oDivConStr = "";
                    var engineListItme = engineList[details[j][1]];
                    var itemLength = engineListItme.length;
                    for(let ii=0;ii<itemLength;ii++){
                        var jj = ii;
                        if (!engineListItme[jj]){break};
                        var a = aPattern.replace('$name$', engineListItme[jj].name)
                                .replace('$favicon$', engineListItme[jj].favicon)
                                .replace("$xin$",jj);
                        // 添加属性
                        a = a.replace("$img$", engineListItme[jj].favicon)
                            .replace("$title$", engineListItme[jj].name)
                            .replace("$link$", engineListItme[jj].url);
                        if (engineListItme[jj].blank) {
                            a = a.replace('$blank$', "_blank");
                        } else {
                            a = a.replace('data-iqxintarget="$blank$"', '');
                        };
                        if (engineListItme[jj].disable) {
                            a = a.replace('$disabled$', "true");
                        } else {
                            a = a.replace('data-iqxindisabled="$disabled$"', '');
                        };

                        oDivConStr += a;
                    };

                    oDivConStr += "<span class='iqxin-additem'>+</span>";

                    oDivCon.innerHTML = oDivConStr;
                    odiv.appendChild(oDivCon);

                    this.ele.appendChild(odiv);
                };

                // 更多设置 菜单
                var btnEle2 = document.createElement("div");
                btnEle2.id = "btnEle2"
                var fixedTop_checked = getSettingData.fixedTop?"checked":"";
                var fixedTopUpward_checked = getSettingData.fixedTopUpward?"checked":"";
                var debug_checked = getSettingData.debug?"checked":"";
                var foldlist_checked = getSettingData.foldlist?"checked":"";
                var allOpen_checked = getSettingData.allOpen?"checked":"";

                // var setBtnOpacity_value = getSettingData.setBtnOpacity;
                var btnStr2 = "<div>" +
                            // "<span id='xin-reset' title='慎点,出厂重置'>清空设置</span>" +
                            "<span id='xin-modification' title='edit 分享自己的配置或清空配置'>配置文件</span>" +
                            "<span id='xin-importing' title='importing 导入更为专业的搜索引擎'>导入</span>" +
                            // "<span id='iqxin-debugS' title='对设置菜单有一定的影响'>" +
                            //     "<label>debug<input id='iqxin-debug' type='checkbox' name='' " +
                            //         debug_checked +
                            //     " style='vertical-align:middle;'></label>" +
                            // "</span>" +
                            "<span id='xin-foldlists' title='将当前所在搜索分类折叠'>" +
                                "<label>折叠当前搜索分类<input id='iqxin-foldlist' type='checkbox' name='' " +
                                    foldlist_checked +
                                " style='vertical-align:middle;'></label>" +
                            "</span>" +
                            "<span id='iqxin-fixedTopS' title='fixedTop 当滚动页面时,固定到页面顶端。某些页面的样式存在问题'>" +
                                "<label>固定到顶端<input id='iqxin-fixedTop' type='checkbox' name='' " +
                                    fixedTop_checked +
                                " style='vertical-align:middle;'></label>" +
                            "</span>" +
                            "<span id='iqxin-fixedTopUpward' title='固定到顶端后,仅向上滚动才显示,需要刷新网页生效'>" +
                                "<label>仅上拉显示<input id='iqxin-fixedTopUpward-item' type='checkbox' name='' " +
                                    fixedTopUpward_checked +
                                " style='vertical-align:middle;'></label>" +
                            "</span>" +
                            "<span id='xin-setBtnOpacity' title='设置按钮透明度'>设置按钮透明度 <input type='range' step='0.01'  min='0' max='1' value='"+ (getSettingData.setBtnOpacity<0?-getSettingData.setBtnOpacity:getSettingData.setBtnOpacity) +"' id='setBtnOpacityRange'><i style='display:inline-block;width:3em;text-align:center;' class='iqxin-setBtnOpacityRangeValue' title='按钮 显示/隐藏(非透明)),请确定知道自己如何再次打开; 火狐非高级玩家建议别禁用'></i></span>" +

                            "</div>";
                btnEle2.innerHTML = btnStr2;
                this.ele.appendChild(btnEle2);


                // 添加按钮
                var btnEle = document.createElement("div");
                btnEle.id = "btnEle"

                var btnStr = "<div class='btnEleLayer'>" +
                            "<span class='feedback' title='在 GreasyFork 进行反馈'><a target='_blank' href='https://greasyfork.org/zh-CN/scripts/27752-searchenginejump'>Greasy Fork</a></span>" +
                            "<span class='feedback' title='在 Github 进行反馈'><a target='_blank' href='https://github.com/qxinGitHub/searchEngineJump'>GitHub</a></span>" +
                            "<span id='xin-allOpen' title='后台打开该搜索分类的所有网站'>" +
                                "<label>一键搜索<input id='iqxin-allOpen-item' type='checkbox' name='' " +
                                    allOpen_checked +
                                " style='vertical-align:middle;'></label>" +
                            "</span>" +
                            "<span id='xin-centerDisplay' title='center 居中显示。主要是兼容AC-baidu:重定向优化百度搜狗谷歌搜索_去广告_favicon_双列'>居中：" +
                                "<select id='iqxin-center'>" +
                                    "<option value='original'" + (getSettingData.center == 0?"selected":"")  + ">原始 ▽</option>" +
                                    "<option value='force'" + (getSettingData.center == 1?"selected":"")  + ">强制 ▽</option>" +
                                    "<option value='auto'" + (getSettingData.center == 2?"selected":"")  + ">自动 ▽</option>" +
                                "</select>" +
                            "</span> " +
                            "<span id='xin-newtab' title='open newtab 是否采用新标签页打开的方式'>打开方式：" +
                                "<select id='iqxin-globalNewtab'>" +
                                    "<option value='globalDef'>默认页面 ▽</option>" +
                                    "<option value='globalNewtab'" + (getSettingData.newtab?"selected":"")  + ">新标签页 ▽</option>" +
                                "</select>" +
                            "</span> " +
                            "<span id='xin-addDel' title='add & del 增加新的或者删除现有的搜索'>增加 / 删除</span> " +
                            "<span id='moreSet' title='more set'>更多设置</span>" +
                            "<span id='xin-save' title='save & close'>保存并关闭</span>" +
                            "</div>";
                btnEle.innerHTML = btnStr;
                this.ele.appendChild(btnEle);

                // 可以拖动的顶栏
                var dragDom = document.createElement("div");
                dragDom.id = "dragDom";
                dragDom.style.cssText = "height:16px;width:97%;position:absolute;top:0;cursor:move;";
                this.ele.appendChild(dragDom);

                // 增加搜索列表
                var nSearchList = document.createElement("div");
                nSearchList.id = "nSearchList";
                nSearchList.style.cssText = "visibility:hidden;opacity:0;transition:0.3s;position:absolute;bottom:10%;right:5%;padding:5px 10px;border-radius:4px;border:1px solid #EC6D51;color:#ec6d51;cursor:pointer;background:#fff;";
                nSearchList.innerHTML = "增加新的搜索列表";
                this.ele.appendChild(nSearchList);

                // 关闭按钮
                if(getSettingData.closeBtn){
                    var closebtnELe = document.createElement("span");
                    closebtnELe.id = "xin-close";
                    closebtnELe.setAttribute("title","close 关闭");
                    this.ele.appendChild(closebtnELe);
                }
            },
            show: function(){
                var style = this.mask.style;
                var eleStyle = this.ele.style;
                style.display = "flex";
                eleStyle.transform = "translateY(-20%)";
                document.body.style.overflow = "hidden";

                this.windowResize();

                // if(document.querySelector("xin-newtab")){
                //     document.querySelector("#xin-newtab").querySelectorAll("option")[getSettingData.newtab].setAttribute("selected","selected");
                // }

                setTimeout(function () {
                    style.opacity = 1;
                    eleStyle.transform = "none";
                }, 30);
            },
            hide: function(){
                this.allBoxClose(); // 关闭所有次级窗口、菜单

                var style = this.mask.style;
                this.ele.style.transform = "translateY(20%)";
                style.opacity = 0;
                setTimeout(function () {
                    style.display = "none";
                    document.body.style.overflow = "auto";
                }, 500);
            },
            reset: function(){
                if(confirm("将会删除用户设置！")){
                    GM_deleteValue("searchEngineJumpData");
                    window.location.reload();
                }
            },
            // 增加 “添加删除框”
            addDel: function(e){
                if (e.target.classList.contains("iqxin-btn-active")){
                    this.addDelremove();
                } else {
                    // console.log("不存在,增加增加");
                    var obtn = document.querySelector("#xin-addDel");
                    obtn.classList.add("iqxin-btn-active");

                    var odom = document.querySelectorAll(".iqxin-set-del");
                    [].forEach.call(odom,function(div){
                        div.classList.add("iqxin-set-active");
                    });

                    // 标题添加删除框
                    var odom = document.querySelectorAll(".iqxin-set-title-del");
                    [].forEach.call(odom,function(div){
                        // console.log(div);
                        div.classList.add("iqxin-set-active");
                    });

                    // 增加单个搜索
                    var oitemAdd = document.querySelectorAll(".iqxin-additem");
                    [].forEach.call(oitemAdd,function(div){
                        // console.log(div);
                        div.classList.add("iqxin-set-active");
                    });

                    // 添加搜索列表
                    var olistAdd = document.querySelector("#nSearchList");
                    olistAdd.classList.add("iqxin-set-active");

                }
            },
            // 关闭 “添加删除框”
            addDelremove: function(bool){
                var obtn = document.querySelector(".iqxin-btn-active");
                if(obtn){
                    obtn.classList.remove("iqxin-btn-active");

                    var odom = document.querySelectorAll(".iqxin-set-active");
                    [].forEach.call(odom,function(div){
                        div.classList.remove("iqxin-set-active");
                    });

                    var oitemAdd = document.querySelectorAll(".iqxin-additem");
                    [].forEach.call(oitemAdd,function(div){
                        div.classList.remove("iqxin-set-active");
                    });
                }
                this.addItemBoxRemove();
            },

            // 界面,框：添加新的搜索
            addItemBox: function(bool){
                this.isOnline();
                this.addItemBoxRemove();

                var newDiv = document.createElement("div");
                newDiv.id= "newSearchBox";
                newDiv.innerHTML=""+
                    "<span>标&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp题 : </span><input id='iqxin-newTitle' placeholder='必填' onfocus='this.select()' /> <br/><br/>" +
                    "<span>链&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp接 : </span><input id='iqxin-newLink' placeholder='必填' onfocus='this.select()' /> <br/><br/>" +
                    "<span>图&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp标 : </span><input id='iqxin-newIcon' placeholder='选填,留空则自动获取' onfocus='this.select()' /> <br/><br/>" +
                    "<span>打开方式 : " +
                        '<select id="iqxin-newTarget" style="border-radius: 4px;border: none;padding: 2px 0 2px 2px"> ' +
                        '<option value="default">新标签页打开</option> ' +
                        '<option value="newtab">当前页打开</option> ' +
                        '<select> ' +
                    "</span>" +
                    "<br/><br/>" +
                    "<span style=''><a target='_blank' style='color:#999;' href='https://greasyfork.org/zh-CN/scripts/27752-searchenginejump'>相关使用说明</a></span>" +
                    "&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp;" +
                    "<button id='addItemBoxEnter' class='addItemBoxEnter addItemBoxBtn iqxin-enterBtn'>确定</button>&nbsp;&nbsp;&nbsp&nbsp&nbsp;&nbsp" +
                    "<button id='addItemBoxCancel' class='addItemBoxCancel addItemBoxBtn iqxin-closeBtn'>取消</button>" +
                    "";

                this.ele.appendChild(newDiv);
                document.querySelector("#iqxin-newTitle").focus();
            },
            // 内部逻辑,：添加新的搜索
            addItemEnger: function(){
                var otitle,olink,oimg,oblank;
                otitle = document.querySelector("#iqxin-newTitle").value;
                olink = document.querySelector("#iqxin-newLink").value;
                oimg = document.querySelector("#iqxin-newIcon").value;
                oblank = document.querySelector("#iqxin-newTarget").selectedIndex;

                if (!oimg){
                    oimg = this.getICON(olink);
                }

                var a = '<span class="sej-engine"' +
                            ' data-iqxinimg="$img$" ' +
                            ' data-iqxintitle="$title$" ' +
                            ' data-iqxinlink="$link$" ' +
                            ' data-iqxintarget="$blank$" ' +
                            '><img src="$favicon$" class="sej-engine-icon" />$name$</span>' +
                            '<span class="iqxin-set-edit" title="编辑 Edit">' +
                                '<img class="sej-engine-icon" src="' + icon.edit + '">' +
                            '</span> ' +
                            '<span class="iqxin-set-del iqxin-set-active" title="删除 Delete">' +
                                '<img class="sej-engine-icon" src="' + icon.del + '">' +
                            '</span>' ;

                a = a.replace("$img$", oimg)
                    .replace("$title$", otitle)
                    .replace("$link$", olink);

                if (oblank){
                    a = a.replace('data-iqxintarget="$blank$"', '');
                } else {
                    a = a.replace('$blank$', "_blank");
                };

                a = a.replace('$name$', otitle)
                    .replace('$favicon$', oimg);

                var ospan = document.createElement("span");
                ospan.className = "drag";
                ospan.innerHTML = a;

                this.parentNode.insertBefore(ospan,this.parentNode.lastChild);

                // 添加完成,移除添加框
                this.addItemBoxRemove();
            },
            addItemBoxRemove: function(ele){
                ele = ele?ele:"#newSearchBox"
                var newBox = document.querySelector(ele);
                if(newBox){
                    newBox.style.transform = "scale(0.01, 0.01)";
                    newBox.style.opacity = "0";
                    setTimeout(function(){
                        newBox.parentNode.removeChild(newBox);
                    },550);
                }
            },
            // 获取图标
            getICON: function(olink){
                var ourl;
                var mark;
                var uri = parseUri(olink);
                var ohttp = uri.protocol?uri.protocol:"http";
                var siteURL = ohttp + "://" + uri.host;
                // console.log(siteURL);

                if(isNaN(getSettingData.getIcon)){
                    ourl = getSettingData.getIcon;
                } else {
                    mark = parseInt(getSettingData.getIcon);
                    console.log(mark);
                    switch (mark){
                        case 1: ourl = siteURL + "/favicon.ico";break;
                        case 2: ourl = 'https://www.google.com/s2/favicons?domain='+siteURL;break;
                        case 3: ourl = 'http://statics.dnspod.cn/proxy_favicon/_/favicon?domain='+uri.host;break;
                    }
                }

                if(ourl){
                    ourl = ourl.replace("%s", siteURL)
                    return ourl;
                }
                debug("能否连接至google：",this.online);
                if (this.online){
                    ourl = 'https://www.google.com/s2/favicons?domain=' + uri.host;
                    return ourl;
                } else {
                    ourl =  ohttp + "://" + uri.host + "/favicon.ico";
                    return ourl;
                }
            },

            // 界面, 框: 添加新的搜索列表
            addSearchListBox: function(){
                var odiv = document.querySelector("#newSearchListBox");
                if (odiv){
                    this.boxClose("#newSearchListBox");
                    return;
                }
                var newDiv = document.createElement("div");
                newDiv.id= "newSearchListBox";

                var myDate = new Date();
                // var hash = "user" + myDate.getFullYear() + myDate.getMonth() + myDate.getDate() + myDate.getHours() +myDate.getMinutes()+myDate.getSeconds();
                var hash = "user" + myDate.getTime();

                newDiv.innerHTML=""+
                    "<span>列表名称: </span><input id='iqxin-newSearchListName' onfocus='this.select()'>" +
                    "<br><br>" +
                    "<span>内部名称: </span><input id='iqxin-newSearchListInnerName' onfocus='this.select()' value='" + hash + "'>" +
                    "<br><br>" +
                    "<button id='addSearchListBoxEnter' class='addSearchListBoxEnter addItemBoxBtn'>确定</button>&nbsp;&nbsp;&nbsp&nbsp&nbsp;&nbsp" +
                    "<button id='addSearchListBoxCancel' class='addSearchListBoxCancel addItemBoxBtn'>取消</button>" +
                    "";
                this.ele.appendChild(newDiv);

                document.querySelector("#iqxin-newSearchListName").focus();
            },
            addSearchListEnger: function(){
                var name = document.querySelector("#iqxin-newSearchListName").value;
                var innerName = document.querySelector("#iqxin-newSearchListInnerName").value;

                if(innerName.length===0){
                    alert("内部名称不能为空");
                    return;
                }
                if(name.length===0){
                    name = innerName;
                }

                var odiv = document.createElement("div");
                odiv.id = innerName;
                odiv.className = "iqxin-items";
                odiv.innerHTML = "" +
                    '<div class="sejtitle" data-iqxintitle="' + innerName + '" data-xin="99">' +
                        '<span class="iqxin-pointer-events">'+ name +'</span>' +
                        '<span class="iqxin-title-edit" title="编辑 Edit">' +
                            '<img class="sej-engine-icon" src="' + icon.edit + '">' +
                        '</span> ' +
                        '<span class="iqxin-set-title-del iqxin-set-active" title="删除 Delete">' +
                            '<img class="sej-engine-icon" src="' + icon.del + '">' +
                        '</span>' +
                    '</div>' +
                    '<div class="sejcon">' +
                        '<span class="iqxin-additem iqxin-set-active">+</span>' +
                    '</div>' +
                "";

                // this.boxClose("#newSearchListBox");
                this.addItemBoxRemove("#newSearchListBox");

                var btnEle = document.querySelector("#btnEle");
                btnEle.parentNode.insertBefore(odiv,btnEle);
            },

            boxClose: function(ele){
                var odiv = document.querySelector(ele);
                if(odiv){
                    odiv.parentNode.removeChild(odiv);
                }
            },

            // 界面 框：修改框
            addEditBox: function(e){
                console.log(e);
                this.addItemBoxRemove();

                var target = e.target.parentNode.firstChild;

                var otitle = target.dataset.iqxintitle;
                var olink = target.dataset.iqxinlink;
                var oicon = target.dataset.iqxinimg;
                var otarget = target.dataset.iqxintarget;
                var odisabled = target.dataset.iqxindisabled;

                this.editTemp = target;

                var strblank;
                if(otarget){
                    strblank = '<option value="default">新标签页打开</option><option value="newtab">当前页打开</option> ';
                } else{
                    strblank = '<option value="default">新标签页打开</option><option value="newtab" selected="selected">当前页打开</option>';
                }

                var strdisable = "";
                if(odisabled){
                    strdisable = "checked='checked'";
                }

                var newDiv = document.createElement("div");
                newDiv.id= "newSearchBox";
                newDiv.style.cssText = "top:"+(e.screenY-120) +"px;left:"+(e.screenX-140) +"px;";
                var innerHTML=""+
                    "<span>标&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp题 : </span><input id='iqxin-newTitle' placeholder='必填' onfocus='this.select()' value='"+ otitle +"' /> <br/><br/>" +
                    "<span>链&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp接 : </span><input id='iqxin-newLink' placeholder='必填' onfocus='this.select()' value='"+ olink +"' /> <br/><br/>" +
                    "<span>图&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp标 : </span><input id='iqxin-newIcon' placeholder='选填,留空则自动获取' onfocus='this.select()' value='"+ oicon +"' /> <br/><br/>" +
                    "<span>打开方式 : " +
                        '<select id="iqxin-newTarget" style="border-radius: 4px;border: none;padding: 2px 0 2px 2px"> ' +
                            '$strblank$' +
                        '<select> ' +
                    "</span>" +
                    "<br/><br/>" +
                    "<span style=''><label>禁用：<input type='checkbox' name='' id='iqxin-newDisabled' $checked$ style='vertical-align:middle;'></label></span>" +
                    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                    "<button id='editItemBoxEnter' class='editItemBoxEnter addItemBoxBtn iqxin-enterBtn'>确定</button>&nbsp;&nbsp;&nbsp&nbsp&nbsp;&nbsp" +
                    "<button id='addItemBoxCancel' class='addItemBoxCancel addItemBoxBtn iqxin-closeBtn'>取消</button>" +
                    "";

                newDiv.innerHTML = innerHTML.replace("$strblank$", strblank)
                                    .replace("$checked$",strdisable);

                this.ele.appendChild(newDiv);
                setTimeout(function(){newDiv.style.cssText="";},10);
                document.querySelector("#iqxin-newTitle").select();
            },
            addEditBoxEnger: function(){
                var otitle,olink,oimg,oblank,odisabled;
                otitle = document.querySelector("#iqxin-newTitle").value;
                olink = document.querySelector("#iqxin-newLink").value;
                oimg = document.querySelector("#iqxin-newIcon").value;
                oblank = document.querySelector("#iqxin-newTarget").selectedIndex;
                odisabled = document.querySelector("#iqxin-newDisabled").checked;

                this.editTemp.dataset.iqxintitle = otitle;
                this.editTemp.lastChild.innerText = otitle;  //文本节点

                this.editTemp.dataset.iqxinlink = olink;
                this.editTemp.dataset.iqxinimg = oimg;
                this.editTemp.firstChild.src = oimg;

                // 是否新标签页打开
                if (oblank){
                    this.editTemp.removeAttribute("data-iqxintarget");
                } else {
                    this.editTemp.dataset.iqxintarget = "_blank";
                }
                // 是否禁用
                if (odisabled){
                    this.editTemp.dataset.iqxindisabled = "true";
                } else{
                    this.editTemp.removeAttribute("data-iqxindisabled");
                }

                // 修改完成,移除添加框
                this.addItemBoxRemove();
            },

            // 标题编辑
            addTitleEditBox: function(e){
                this.addItemBoxRemove();

                var element = e.target.parentNode.firstChild;
                element.classList.remove("iqxin-pointer-events");

                var flag = document.querySelector("#titleEdit");
                // 存在编辑的标题 && 之前的编辑的节点与点击的节点是同一个节点
                if(flag && flag.parentNode == element){
                        element.innerHTML = element.firstChild.value?element.firstChild.value:"空";
                        element.classList.add("iqxin-pointer-events");
                } else {
                    //  存在编辑的标题,但与点击的不是同一个节点
                    if(flag){
                        flag.parentNode.innerHTML = flag.parentNode.firstChild.value;
                    }
                    var oldhtml = element.innerHTML;
                    var newobj = document.createElement("input");
                    newobj.id = "titleEdit";
                    newobj.type = "text";
                    newobj.value = oldhtml;
                    // newobj.onblur = function(){
                    //     element.innerHTML = this.value?this.value:oldhtml;
                    // }
                    newobj.onkeydown = function(e){
                        if((e.keyCode || e.which) == 13){
                            element.innerHTML = this.value?this.value:oldhtml;
                        } else if((e.keyCode || e.which) == 27){
                            element.innerHTML = oldhtml;
                        }

                        element.classList.add("iqxin-pointer-events");
                    }
                    element.innerHTML = "";
                    element.appendChild(newobj);
                    newobj.select();
                }
            },
            addTitleEditBoxRemove:function(){
                var odiv = document.querySelector("#titleEdit");
                if(odiv){
                    odiv.parentNode.innerHTML = odiv.value?odiv.value:"空";
                }
            },

            // 高级菜单,配置文件编辑界面
            editCodeBox: function(){
                console.log("原始数据： ",getSettingData);
                var userSetting = GM_getValue("searchEngineJumpData")
                var editbox = document.createElement("div");
                // var sData =
                editbox.id = "iqxin-editCodeBox";
                editbox.style.cssText = "position:fixed;" +
                    "top:50%;left:50%;" +
                    "transform:translate(-50%,-50%);" +
                    "background:#ccc;" +
                    "border-radius:4px;" +
                    "padding:10px 20px;" ;
                var innerH = " "+
                    "<p><span style='color:red;font-size:1.2em;'>! ! !</span></br>"+
                    "此处有更多的设置选项,自由度更高,</br>"+
                    "但设置错误会导致脚本无法运行"+
                    "</p>" +
                    "<textarea wrap='off' cols='45' rows='20' style='overflow:auto;border-radius:4px;'>" + JSON.stringify(userSetting,false,4) + "</textarea>" +
                    "<br>" +
                    "<button id='xin-reset'>清空设置</button> &nbsp;&nbsp;&nbsp;" +
                    "<button id='xin-copyCode'>复制</button> &nbsp;&nbsp;&nbsp;" +
                    "<button id='codeboxclose' class='iqxin-closeBtn'>关闭</button> &nbsp;&nbsp;&nbsp;" +
                    "<button id='xin-codeboxsave' class='iqxin-enterBtn'>保存</button>" +
                    "<button id='xin-fulibtn' class='iqxin-fuliBtn'>福利</button>" +
                "";
                // console.log(JSON.stringify(getSettingData,4));
                // console.log(JSON.stringify(getSettingData,null,4));
                editbox.innerHTML = innerH;
                this.ele.appendChild(editbox);
            },
            editCodeBoxSave: function(){
                var codevalue = document.querySelector("#iqxin-editCodeBox textarea").value;
                if(codevalue){
                    // console.log(JSON.parse(codevalue));
                    GM_setValue("searchEngineJumpData",JSON.parse(codevalue));
                    // console.log(GM_getValue("searchEngineJumpData"));
                    // 刷新页面
                    setTimeout(function(){
                        window.location.reload();
                    },300);
                } else {
                    // alert("输入为空");
                    this.reset();
                }
            },
            editCodeBoxClose: function(){
                var box = document.querySelector("#iqxin-editCodeBox");
                if(box){
                    box.parentNode.removeChild(box);
                }
            },

            // 导入窗口
            addImportingBox: function(){
                var odiv = document.querySelector("#importingBox");
                if (odiv){
                    this.boxClose("#importingBox");
                    return;
                }
                var newDiv = document.createElement("div");
                newDiv.id= "importingBox";

                var a ="<p>更加细分的搜索列表, 列表之间会有所重合</p>" +
                       "<ul>";

                for(let i=0;i<engineList_plus.length;i++){
                    // if(engineList_plus.status!=3){continue};
                    console.log(engineList_plus[i]);

                    // 包含网站名称
                    var includeWeb = "";
                    for(let j=0; j<engineList_plus[i].engineList.length;j++){
                        if(j!=0){
                            includeWeb += " | " + engineList_plus[i].engineList[j].name;
                        } else{
                            includeWeb += engineList_plus[i].engineList[j].name;
                        }
                    }

                    a += "<li>"+
                        "<span class='xin-importing-item' xin-importing-id='" + i +"' title='"+ (engineList_plus[i].message?engineList_plus[i].message:engineList_plus[i].engineDetails[0]) +"'>"+ (engineList_plus[i].name?engineList_plus[i].name:engineList_plus[i].engineDetails[0]) + " : </span>" +
                        "<p title='"+ includeWeb +"'>"+ includeWeb +"</p>"
                        "</li>";
                }

                a += "</ul>";

                newDiv.innerHTML=a;

                this.ele.appendChild(newDiv);
            },
            addImportingEnger:function(e){
                // console.log(e);
                // console.log("第几个： ",e.target.getAttribute("xin-importing-id"));
                var engineListID = e.target.getAttribute("xin-importing-id");
                var engineList_temp = engineList_plus[engineListID];
                var elist = engineList_temp.engineList;

                var name = engineList_temp.engineDetails[0];
                var innerName = engineList_temp.engineDetails[1];

                var odiv = document.createElement("div");
                odiv.id = innerName;
                odiv.className = "iqxin-items";
                var innerHTML = "" +
                    '<div class="sejtitle" data-iqxintitle="' + innerName + '" data-xin="99">' +
                        '<span class="iqxin-pointer-events">'+ name +'</span>' +
                        '<span class="iqxin-title-edit" title="编辑 Edit">' +
                            '<img class="sej-engine-icon" src="' + icon.edit + '">' +
                        '</span> ' +
                        '<span class="iqxin-set-title-del iqxin-set-active" title="删除 Delete">' +
                            '<img class="sej-engine-icon" src="' + icon.del + '">' +
                        '</span>' +
                    '</div>' +
                    '<div class="sejcon">' +
                    "";

                // 具体列表
                for(let i=0;i<elist.length;i++){
                    var a = '<span draggable="true" class="drag">' +    
                                '<span class="sej-engine"' +
                                ' data-iqxinimg="$img$" ' +
                                ' data-iqxintitle="$title$" ' +
                                ' data-iqxinlink="$link$" ' +
                                ' data-iqxintarget="$blank$" ' +
                                '><img src="$favicon$" class="sej-engine-icon" />$name$</span>' +
                                '<span class="iqxin-set-edit" title="编辑 Edit">' +
                                    '<img class="sej-engine-icon" src="' + icon.edit + '">' +
                                '</span> ' +
                                '<span class="iqxin-set-del iqxin-set-active" title="删除 Delete">' +
                                    '<img class="sej-engine-icon" src="' + icon.del + '">' +
                                '</span>' +
                            '</span>';

                    a = a.replace("$img$", elist[i].favicon)
                        .replace("$title$", elist[i].name)
                        .replace("$link$", elist[i].url);

                    if (elist[i].blank){
                        a = a.replace('$blank$', "_blank");
                    } else {
                        a = a.replace('data-iqxintarget="$blank$"', '');
                    };

                    a = a.replace('$name$', elist[i].name)
                        .replace('$favicon$', elist[i].favicon);

                    innerHTML += a;
                }

                 innerHTML += "" +
                    '<span class="iqxin-additem iqxin-set-active">+</span>' +
                    '</div>' +
                "";


                odiv.innerHTML = innerHTML;

                this.addItemBoxRemove("#importingBox");

                var btnEle = document.querySelector("#btnEle");
                btnEle.parentNode.insertBefore(odiv,btnEle);
            },
            // 添加福利搜索  与上面的函数大量重复，可提出一个共用函数
            addImportingFuLiEnger:function(e){
                // console.log(e);
                // console.log("第几个： ",e.target.getAttribute("xin-importing-id"));
                // var engineListID = e.target.getAttribute("xin-importing-id");
                // var engineList_temp = engineList_plus[engineListID];
                var elist = engineList_fuli[0].engineList;

                var name = engineList_fuli[0].engineDetails[0];
                var innerName = engineList_fuli[0].engineDetails[1];

                var odiv = document.createElement("div");
                odiv.id = innerName;
                odiv.className = "iqxin-items";
                var innerHTML = "" +
                    '<div class="sejtitle" data-iqxintitle="' + innerName + '" data-xin="99">' +
                        '<span class="iqxin-pointer-events">'+ name +'</span>' +
                        '<span class="iqxin-title-edit" title="编辑 Edit">' +
                            '<img class="sej-engine-icon" src="' + icon.edit + '">' +
                        '</span> ' +
                        '<span class="iqxin-set-title-del iqxin-set-active" title="删除 Delete">' +
                            '<img class="sej-engine-icon" src="' + icon.del + '">' +
                        '</span>' +
                    '</div>' +
                    '<div class="sejcon">' +
                    "";

                // 具体列表
                for(let i=0;i<elist.length;i++){
                    var a = '<span draggable="true" class="drag">' +    
                                '<span class="sej-engine"' +
                                ' data-iqxinimg="$img$" ' +
                                ' data-iqxintitle="$title$" ' +
                                ' data-iqxinlink="$link$" ' +
                                ' data-iqxintarget="$blank$" ' +
                                '><img src="$favicon$" class="sej-engine-icon" />$name$</span>' +
                                '<span class="iqxin-set-edit" title="编辑 Edit">' +
                                    '<img class="sej-engine-icon" src="' + icon.edit + '">' +
                                '</span> ' +
                                '<span class="iqxin-set-del iqxin-set-active" title="删除 Delete">' +
                                    '<img class="sej-engine-icon" src="' + icon.del + '">' +
                                '</span>' +
                            '</span>';

                    a = a.replace("$img$", elist[i].favicon)
                        .replace("$title$", elist[i].name)
                        .replace("$link$", elist[i].url);

                    if (elist[i].blank){
                        a = a.replace('$blank$', "_blank");
                    } else {
                        a = a.replace('data-iqxintarget="$blank$"', '');
                    };

                    a = a.replace('$name$', elist[i].name)
                        .replace('$favicon$', elist[i].favicon);

                    innerHTML += a;
                }

                 innerHTML += "" +
                    '<span class="iqxin-additem iqxin-set-active">+</span>' +
                    '</div>' +
                "";

                odiv.innerHTML = innerHTML;

                var btnEle = document.querySelector("#btnEle");
                btnEle.parentNode.insertBefore(odiv,btnEle);
            },

            // “设置按钮” 透明度
            setBtnOpacityFun: function(){
                if(~window.navigator.userAgent.indexOf("Chrome")){
                    var odom = document.querySelector("#setBtnOpacityRange");
                    var odomV = odom.value;
                    // odom.style.backgroundSize = odom.value*100 +"% 100%";
                    console.log(odomV,getSettingData.setBtnOpacity);
                    if(getSettingData.setBtnOpacity<0){
                        document.querySelector(".iqxin-setBtnOpacityRangeValue").innerHTML = odomV;
                        odom.style.background = "-webkit-linear-gradient(left,#3ABDC1,#83e7ea) no-repeat, #fff";
                    }else{
                        document.querySelector(".iqxin-setBtnOpacityRangeValue").innerHTML = "禁用";
                        odom.style.background = "-webkit-linear-gradient(left,#bdbdbd,#c6c7c7) no-repeat, #fff";
                    }
                    odom.style.backgroundSize = odom.value*100 +"% 100%";

                    getSettingData.setBtnOpacity = -getSettingData.setBtnOpacity;
                } else {
                    console.log("非chrome");
                    iqxinShowTip("抱歉,目前只支持chrome类浏览器",2500);
                }
            },

            // 标题点击 （开关搜索列表）（可以并入到下面的点击事件）
            titleClick: function(e){
                var target = e.target;
                target.dataset.xin = -parseInt(target.dataset.xin);
            },
            // 点击事件   此处的 if 需要根据实际情况替换成 elseif (switch)
            domClick: function(e){
                var targetClass = e.target.className;
                var targetid = e.target.id;
                debug("点击事件：%o, ID: %o, class: %o, e: %o",e.target,targetid,targetClass,e)

                // 删除搜索
                if(~e.target.className.indexOf("iqxin-set-del")){
                    // console.log(e.target);
                    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
                };
                // 删除搜索列表
                if(~e.target.className.indexOf("iqxin-set-title-del")){
                    // console.log(e.target, e.target.parentNode.parentNode);
                    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
                };

                if(~e.target.className.indexOf("iqxin-additem")){
                    this.parentNode = e.target.parentNode;
                    this.addItemBox();
                };
                if(e.target.className==="sej-engine"){
                    e.target.dataset.iqxindisabled = e.target.dataset.iqxindisabled?"":"true";
                };
                if(~targetClass.indexOf("addItemBoxCancel")){
                    this.addItemBoxRemove();
                };
                // 添加新的搜索 确定
                if(~targetClass.indexOf("addItemBoxEnter")){
                    this.addItemEnger();
                };
                // 添加新的搜索列表 确定
                if(targetid === "nSearchList"){
                    debug("添加新的搜索列表");
                    this.addSearchListBox();
                };
                if(targetid === "addSearchListBoxEnter"){
                    debug("向网页添加元素");
                    this.addSearchListEnger();
                };
                if(targetid === "addSearchListBoxCancel"){
                    debug("移除盒子");
                    // this.boxClose("#newSearchListBox");
                    this.addItemBoxRemove("#newSearchListBox");

                };

                // 修改搜索 确定
                if(~targetClass.indexOf("editItemBoxEnter")){
                    this.addEditBoxEnger();
                };

                // 编辑框
                if(~e.target.className.indexOf("iqxin-set-edit")){
                    this.addEditBox(e);
                }
                // 标题编辑框
                if(~targetClass.indexOf("iqxin-title-edit")){
                    e.stopPropagation();
                    this.addTitleEditBox(e);
                }
                if(~targetClass.indexOf("sejtitle")){
                    this.titleClick(e);
                }
                // codebox  源代码编辑框
                if(targetid ==="codeboxclose"){
                    this.editCodeBoxClose();
                } else if(targetid==="xin-reset"){
                    this.reset();
                } else if( targetid === "xin-codeboxsave"){
                    this.editCodeBoxSave();
                } else if( targetid === "xin-fulibtn"){
                    this.addImportingFuLiEnger();
                } else if( targetid === "xin-copyCode"){
                    GM_setClipboard(JSON.stringify(getSettingData,false,4));
                    iqxinShowTip("复制成功");
                }

                //  点击更多菜单
                if(targetid ==="moreSet"){
                    document.querySelector("#btnEle2").classList.toggle("btnEle2active");
                    // iqxin-btn-active
                    e.target.classList.toggle("iqxin-btn-active");
                }

                // 点击导入菜单
                if(targetid ==="xin-importing"){
                    this.addImportingBox();
                }
                if(targetClass ==="xin-importing-item"){
                    this.addImportingEnger(e);
                }

                // 关闭"设置菜单按钮"
                if(targetClass === "iqxin-setBtnOpacityRangeValue"){
                    this.setBtnOpacityFun();
                }

                // 关闭设置菜单
                if (targetid === "xin-close"){
                    this.hide();
                }

                // 空白地方点击
                if(~targetClass.indexOf("iqxin-items") || targetid === "settingLayer" || targetClass==="btnEleLayer"){
                    this.allBoxClose();
                }
            },

            // 关闭所有次级窗口、菜单
            allBoxClose: function(){
                this.addItemBoxRemove(); // 新的搜索添加框
                this.addDelremove();  //  增加/删除界面
                this.editCodeBoxClose(); // code编辑框
                this.addTitleEditBoxRemove(); //标题编辑框
                this.addItemBoxRemove("#newSearchListBox"); // 添加新的搜索列表
                this.boxClose("#iqxin-sortBox"); // 搜索列表排序
                this.addItemBoxRemove("#importingBox"); //导入框
                document.querySelector("#btnEle2").classList.remove("btnEle2active"); // 更多设置
            },

            // 窗口位置拖动
            setDragNode: function(ele) {
                var node = document.querySelector("#dragDom");

                node.addEventListener("mousedown",function(event){
                    ele.style.transition = "null";
                    // offsetLeft 距离 body 的位置, 得到的 dis 即鼠标到窗口左上角的位置
                    var disX = event.clientX - ele.offsetLeft;
                    var disY = event.clientY - ele.offsetTop;

                    var move = function(event) {
                        //鼠标的位置减去到左上角的位置 即窗口的位置
                        // console.log(event.clientX - disX,event.clientY - disY)
                        ele.style.left = event.clientX - disX + "px";
                        ele.style.top = event.clientY - disY  + "px";
                    };

                    document.addEventListener("mousemove",move);
                    document.addEventListener("mouseup",function(){
                        ele.style.transition = "0.5s";
                        document.removeEventListener("mousemove",move);
                    })
                });
            },

            // 拖动
            domdragstart:function (e) {
                if(~this.className.indexOf("sejtitle")){
                    dragEl = this.parentNode;
                } else{
                    dragEl = this;
                }
                dragData = dragEl.innerHTML;
                    e.dataTransfer.effectAllowed = "move";
                    e.dataTransfer.setData("text/html",dragEl.innerHTML);
            },
            domdragenter:function (e) {
                var target = e.target;
                var targetClass = target.className;
                if(~targetClass.indexOf("sejtitle")){
                    target = target.parentNode;
                }
                target.classList.add('drop-over');
            },
            domdragover:function (e) {
                if (e.preventDefault) {
                    e.preventDefault();
                }
                e.dataTransfer.dropEffect = 'move';
                return false;
            },
            domdragleave:function (e) {
                var target = e.target;
                var targetClass = target.className;
                if(~targetClass.indexOf("sejtitle")){
                    target = target.parentNode;
                }
                target.classList.remove('drop-over');
            },
            domdrop:function (e) {
                debug("拖拽结束")
                // e.target === this
                var _this = e.target;
                var that = _this.parentNode;
                var pparentNode = that.parentNode;

                // 防止跨区域移动
                SEJsetting.prototype.domdropend();
                if(dragEl.className != that.className){
                    console.log("移动对象 之前,现在: ", dragEl.className);
                    console.log(that.className);
                    return;
                }

                // Sortable.js https://github.com/RubaXa/Sortable
                var targetRect = _this.getBoundingClientRect(); //
                var width = targetRect.right - targetRect.left; //目标节点的宽
                var height = targetRect.bottom - targetRect.top; //目标节点的高
                var domPosition = null;
                if(~_this.className.indexOf("sejtitle")){
                    debug(e.clientX,targetRect.left,height,e.clientX - targetRect.left,(e.clientX - targetRect.left) / height)
                    if((e.clientX - targetRect.left) / width > 0.5){
                        debug("右");
                        domPosition = true;
                    }else{
                        debug("左");
                        domPosition = false;
                    }
                } else {
                    if((e.clientY - targetRect.top) / height > 0.5){
                        debug("下");
                        domPosition = true;
                    }else{
                        debug("上");
                        domPosition = false;
                    }
                }

                dragEl.style.transformOrigin = "top center";
                dragEl.style.animation = "sejopen 0.3s";

                if(domPosition){
                    if(pparentNode.lastChild == that){
                        pparentNode.insertBefore(dragEl,that);
                    }else{
                        pparentNode.insertBefore(dragEl,that.nextElementSibling)
                    }
                }else{
                    that.parentNode.insertBefore(dragEl,that);
                }

                // 重新绑定拖拽事件
                SEJsetting.prototype.dragEvent();
                return false;
            },
            domdropend:function(){
                var dom = document.querySelector(".drop-over");
                if(dom){
                    dom.classList.remove("drop-over")
                }
            },

            // 判断是否能连接至google
            isOnline: function(){
                console.log("this.online",this.online);
                if(this.online)return;

                var that = this;
                var myImage = new Image;
                myImage.src = 'https://www.google.com/s2/favicons?domain=www.baidu.com&' + Math.random() ;
                setTimeout(function(){
                    // console.log("取消加载");
                    console.log(myImage.width);
                    if(myImage.width){
                        that.online = true;
                    }else{
                        myImage.src = undefined;
                    };
                },2000);
            },

            // 重新加载工具
            reloadSet: function(){
                var elems = document.querySelectorAll('#sej-container, #settingLayerMask, sejspan.sej-drop-list');
                if (!elems) return;
                console.log("elems: " + elems);
                // return;

                [].forEach.call(elems, function(elem) {
                    elem.parentNode.removeChild(elem);
                });

                iqxinstart();
                iqxinShowTip("保存成功");
            },

            // 设置按钮透明度设置
            rangeChange: function(bool){
                var odom = document.querySelector("#setBtnOpacityRange");
                if(getSettingData.setBtnOpacity<0){
                    odom.style.background = "-webkit-linear-gradient(left,#bdbdbd,#c6c7c7) no-repeat, #fff";
                    odom.style.backgroundSize = odom.value*100 +"% 100%";
                    document.querySelector(".iqxin-setBtnOpacityRangeValue").innerHTML = "禁用";
                    getSettingData.setBtnOpacity = -odom.value;
                } else{
                    odom.style.background = "-webkit-linear-gradient(left,#3ABDC1,#83e7ea) no-repeat, #fff";
                    odom.style.backgroundSize = odom.value*100 +"% 100%";
                    document.querySelector(".iqxin-setBtnOpacityRangeValue").innerHTML = odom.value;
                    getSettingData.setBtnOpacity = odom.value;
                }
            },

            // 窗口大小改变
            windowResize: function(){
                var eleStyle = window.getComputedStyle(this.ele , null);
                var w = parseInt(eleStyle.width) ;
                var h = parseInt(eleStyle.height)  + 54;
                var ww = document.documentElement.clientWidth;
                var wh = document.documentElement.clientHeight;
                var maskStyle = this.mask.style;

                if(w>=ww){
                    maskStyle.justifyContent = "stretch";
                }else{
                    maskStyle.justifyContent = "center";
                }
                if(h>=wh){
                    maskStyle.alignItems = "stretch";
                }else{
                    maskStyle.alignItems = "center";
                }
            },
            saveData: function(){
                //
                this.addTitleEditBoxRemove(); //标题栏处于编辑状态

                var obj = {};
                var parentdiv = document.querySelectorAll("#settingLayer .iqxin-items");
                for (let i=0;i<parentdiv.length;i++){
                    var data = parentdiv[i].querySelectorAll(".sej-engine");
                    var id = parentdiv[i].id;
                    obj[id]=[];
                    for(let ii=0;ii<data.length;ii++){
                        if (data[ii].dataset.xin<0){
                            var ij = -ii;
                        } else {
                            ij = ii;
                        }
                        obj[id][ij]={};
                        obj[id][ij].favicon=data[ii].dataset.iqxinimg;
                        obj[id][ij].name=data[ii].dataset.iqxintitle;
                        obj[id][ij].url=data[ii].dataset.iqxinlink;
                        if(data[ii].dataset.iqxintarget){
                            obj[id][ij].blank=data[ii].dataset.iqxintarget;
                        };
                        if(data[ii].dataset.iqxindisabled){
                            obj[id][ij].disable=data[ii].dataset.iqxindisabled;
                        };
                    }
                }

                // 分类名称
                var engineDetails=[];

                // 分类排序
                var odetails = document.querySelectorAll(".sejtitle");
                var odetailsLength = odetails.length;
                for(let i=0;i<odetailsLength;i++){
                    debug(odetails[i]);
                    engineDetails[i] = [];
                    engineDetails[i][0] = odetails[i].firstChild.innerHTML;
                    engineDetails[i][1] = odetails[i].dataset.iqxintitle;
                    engineDetails[i][2] = odetails[i].dataset.xin>=0?true:false;
                }

                // 新标签页全局设置
                var onewtab = document.querySelector("#iqxin-globalNewtab").selectedIndex;
                var foldlist = document.querySelector("#iqxin-foldlist").checked;

                // 以防不测,重新获取本地配置文件
                var getData = GM_getValue("searchEngineJumpData");
                getData.newtab = onewtab;
                getData.foldlist = foldlist;
                getData.setBtnOpacity = getSettingData.setBtnOpacity;
                // getData.debug = document.querySelector("#iqxin-debug").checked;
                getData.center = document.querySelector("#iqxin-center").selectedIndex;
                getData.fixedTop = document.querySelector("#iqxin-fixedTop").checked;
                getData.allOpen = document.querySelector("#iqxin-allOpen-item").checked;
                getData.fixedTopUpward = document.querySelector("#iqxin-fixedTopUpward-item").checked;
                getData.engineDetails = engineDetails;
                getData.engineList = obj;

                debug('将要保存的数据：',getData);
                GM_setValue("searchEngineJumpData",getData);
            },
            addGlobalStyle: function(){
                var head, style;
                var css =
                    "#settingLayerMask{" +
                        "display: none;" +
                        "justify-content: center;" +
                        "align-items: center;" +
                        "position: fixed;" +
                        "top:0; right:0; bottom:0; left:0;" +
                        "background-color: rgba(0,0,0,.5);" +
                        "z-index: 200000000;" +
                        "overflow: auto;" +
                        "font-family: arial,sans-serif;" +
                        "min-height: 100%;" +
                        "font-size:16px;" +
                        "transition:0.5s;" +
                        "opacity:0;" +
                        "user-select: none;" +
                        "-moz-user-select: none;" +
                        "padding-bottom: 80px;" +
                        "box-sizing: border-box;" +
                    "}" +
                    "#settingLayer{" +
                        "display: flex;" +
                        "flex-wrap: wrap;" +
                        "padding: 20px;" +
                        "margin: 0px 25px 50px 5px;" +
                        "background-color: #fff;" +
                        "border-radius: 4px;" +
                        "position: absolute;" +
                        "min-width: 700px;" +
                        "transition:0.5s;" +
                    "}" +
                    ".iqxin-items{" +
                        "min-width:5em;" +
                        "margin: 0 5px 0px;" +
                    "}" +
                    "#settingLayer .drag{" +
                        "display: block;" +
                        "position: relative;" +
                    "}" +
                    "#settingLayer .sej-engine{" +
                        "display: inline-block;" +
                        "width: 100%;" +
                        "box-sizing: border-box;" +
                    "}" +
                    ".iqxin-pointer-events," +
                    ".sej-engine-icon," +
                    "#settingLayer .sej-engine *{" +
                        "pointer-events:none;" +
                    "}" +
                    ".sejtitle{" +
                        "text-align: center;" +
                        "padding: 2px 0;" +
                        "cursor: pointer;" +
                        "position: relative;" +
                    "}" +
                    "#settingLayerMask [data-xin]{" +
                        "margin:4px 0;" +
                        "line-height:1.7;" +
                        "border-radius:4px;" +
                    "}" +
                    ".sejtitle:not([data-xin^='-']):hover{" +
                    "background:#cff9ff;" +
                    "}" +
                    ".sejcon [data-xin]{"+
                        "cursor: pointer;" +
                    "}" +
                    "#settingLayerMask .sej-engine:hover{" +
                        "background-color:#cff9ff" +
                    "}" +
                    "#settingLayerMask [data-iqxindisabled='true']," +
                    "[data-xin^='-']{" +
                        "background-color: #ccc;" +
                        "text-decoration: line-through;" +
                        "text-decoration-color:red;" +
                        "border-radius:2px;" +
                        "transition:.3s;" +
                    "}" +
                    "#settingLayerMask [data-iqxindisabled='true']:hover," +
                    "[data-xin^='-']:hover{" +
                        "background-color: #ffa2a2;" +
                    "}" +
                    "#settingLayerMask label{" +
                        "cursor:pointer;" +
                    "}" +
                    "#settingLayerMask .sej-engine-icon{" +
                        "vertical-align:middle;" +
                    "}" +
                    "#btnEle2," +
                    "#btnEle{" +
                        "position:absolute;" +
                        "width:100%;" +
                        "bottom: 4px;" +
                        "right: 0;" +
                        "background: #fff;" +
                        "border-radius: 4px;" +
                    "}" +
                    "#btnEle2 span," +
                    "#btnEle span{" +
                        "display: inline-block;" +
                        "background: #EFF4F8;" +
                        "border: 1px solid #3abdc1;" +
                        "margin: 12px auto 10px;" +
                        "color: #3abdc1;" +
                        "padding: 5px 10px;" +
                        "border-radius: 4px;" +
                        "cursor: pointer;" +
                        "outline: none;" +
                        "transition: 0.3s;" +
                    "}" +
                    "#btnEle a{" +
                        "color: #999;" +
                        "text-decoration: none;" +
                        "font-family: auto;" +
                    "}" +
                    "#btnEle a:hover{" +
                        "text-decoration: underline;" +
                        "color: #ef8957;" +
                    "}" +
                    "#btnEle2 span.feedback:hover," +
                    "#btnEle span.feedback:hover{" +
                        "border-color:#ef8957;" +
                    "}" +
                    "#btnEle2 span:not(.feedback):hover," +
                    "#btnEle span:not(.feedback):hover{" +
                        "background:#3ACBDD;" +
                        "color:#fff;" +
                    "}" +
                    "#btnEle .feedback{" +
                        "border-color: #aaa;" +
                    "}" +
                    "#btnEle2>div," +
                    "#btnEle>div{" +
                        "width: 100%;" +
                        "margin-bottom:-100%;" +
                        "display:flex;" +
                        "justify-content: space-around;" +
                        "background: #EFF4F8;" +
                        "border-radius: 4px;" +
                    "}" +
                    "#btnEle2{" +
                        "visibility:hidden;" +
                        "opacity:0;" +
                        "transform:translate(0,0px);" +
                        "transition : 0.3s;" +
                    "}" +
                    "#btnEle2.btnEle2active{" +
                        "visibility:visible;" +
                        "opacity:1;" +
                        "transform:translate(0,53px);" +
                    "}" +
                    "#settingLayerMask input[type=checkbox]{" +
                        "width: 12px;" +
                        "height: 12px;" +
                        "display: inline-block;" +
                        "text-align: center;" +
                        "vertical-align: middle;" +
                        "line-height: 18px!important;" +
                        "margin: 0 5px 5px 5px!important;" +
                        "position: relative;" +
                    "}" +
                    "#settingLayerMask input[type=checkbox]:before{" +
                        "content: '';" +
                        "position: absolute;" +
                        "top: 0;" +
                        "left: 0;" +
                        "background: #fff;" +
                        "width: 100%;" +
                        "height: 100%;" +
                        "border: 1px solid #d9d9d9;" +
                    "}" +
                    "#settingLayerMask input[type=checkbox]:checked:after{" +
                        'content: "✔";' +
                        "background-color: #63d4d8;" +
                        "position: absolute;" +
                        "top: 0;" +
                        "left: 0;" +
                        "width: 12px;" +
                        "height: 12px;" +
                        "border: 1px solid #63d4d8;" +
                        "color: #fff;" +
                        "font-size: 17px;" +
                    "}" +
                    ".drop-over{" +
                        "opacity: 0.6;" +
                    "}" +
                    ".iqxin-title-edit," +
                    ".iqxin-set-edit," +
                    ".iqxin-set-title-del," +
                    ".iqxin-set-del {" +
                        "visibility: hidden;" +
                        "opacity:0;" +
                        "position: absolute;" +
                        "background: rgba(207, 249, 255, 0.86);" +
                        "color: red;" +
                        "top: 50%;" +
                        "transform: translate(0,-50%);" +
                        "right: 0;" +
                        "padding: 3px 3px 6px 6px;" +
                        "border-radius: 2px;" +
                        "cursor: pointer;" +
                        "transition: .3s;" +
                    "}" +
                    ".iqxin-set-title-del.iqxin-set-active {" +
                        "background: #fff;" +
                        "border-radius: 50% 0 0 50%;" +
                    "}" +
                    ".iqxin-title-edit{" +
                        "padding: 0px 3px 6px 6px;" +
                    "}" +
                    "span.iqxin-additem {" +
                        "display: inline-block;" +
                        "text-align: center;" +
                        "width: 100%;" +
                        "margin: 10px 0;" +
                        "border: 1px dotted red;" +
                        "color: red;" +
                        "cursor: pointer;" +
                        "visibility:hidden;" +
                        "opacity:0;" +
                        "transition:0.3s;" +
                        "transform:scale(0);" +
                    "}" +
                    "span.iqxin-additem.iqxin-set-active {" +
                        "visibility:visible;" +
                        "opacity:1;" +
                        "margin:10px 0;" +
                        "transform:scale(1);" +
                    "}" +
                    "#settingLayer .sejtitle:hover .iqxin-title-edit," +
                    "#settingLayer .sejcon>span:hover .iqxin-set-edit{" +
                        "visibility:visible;" +
                        "opacity:0.8;" +
                    "}" +
                    "#nSearchList.iqxin-set-active," +
                    ".iqxin-set-edit.iqxin-set-active," +
                    ".iqxin-set-title-del.iqxin-set-active," +
                    ".iqxin-set-del.iqxin-set-active {" +
                        "visibility:visible !important;" +
                        "opacity:1 !important;" +
                    "}" +
                    "#btnEle span.iqxin-btn-active{" +
                        "color:red;" +
                        "border-color:red;" +
                    "}" +
                    "#newSearchListBox," +
                    "#newSearchBox{" +
                        "transition:0.6s;" +
                        "transform-origin: center center;" +
                        "animation-timing-function: ease-in;" +
                        "animation: iqxinsejopen 0.8s;" +
                        "position:fixed;" +
                        "z-index:200000100;" +
                        "top:50%;" +
                        "left:50%;" +
                        "padding:22px;" +
                        "background:rgb(29, 29, 29);" +
                        "border-radius:4px;" +
                        "color: #e8e8e8;" +
                        "margin: -149px -117px;" +
                    "}" +
                    "#newSearchListBox input," +
                    "#newSearchBox input{" +
                        "border: none;" +
                        "padding: 4px 0 4px 5px;" +
                        "border-radius: 4px;" +
                        "outline: none;" +
                    "}" +
                    "#newSearchListBox input:focus," +
                    "#newSearchBox input:focus {" +
                        "background: #f1d2d2;" +
                        "transition: 0.5s;" +
                    "}" +
                    ".addItemBoxBtn{" +
                        "cursor: pointer;" +
                        "background: #fff;" +
                        "border: none;" +
                        "border-radius: 4px;" +
                        "padding: 4px 10px;" +
                        "color: #333;" +
                        "transition:0.3s;" +
                    "}" +
                    "#xin-centerDisplay select," +
                    "#xin-newtab select{" +
                        "height:auto;" +
                        "border: none;" +
                        "outline: none;" +
                        "color: #3ABDC1;" +
                        "font-size: 1em;" +
                        "font-family: arial,sans-serif;" +
                        "appearance: none;" +
                        "-moz-appearance: none;" +
                        "-webkit-appearance: none;" +
                        "padding: 0px 5px;" +
                        "cursor: pointer;" +
                        "text-decoration: underline;" +
                        "background: #EFF4F8;" +
                    "}" +
                    "#titleEdit{" +
                        "width:6em;" +
                    "}" +
                    // 按钮效果 ： 确定 取消按钮
                    ".iqxin-closeBtn," +
                    ".iqxin-enterBtn{" +
                        "box-sizing: border-box;" +
                    "}" +
                    ".iqxin-closeBtn:hover{" +
                        "background: #ff6565;" +
                        "border-color: #ff6565;" +
                        "color: #fff;" +
                    "}" +
                    ".iqxin-enterBtn:hover{" +
                        "background: #84bb84;" +
                         "border-color: #84bb84;" +
                         "color: #fff;" +
                    "}" +
                    "#iqxin-editCodeBox button{" +
                        "cursor:pointer;" +
                    "}" +
                    ".iqxin-fuliBtn{" +
                        "border: none;" +
                        "background: none;" +
                        "color: #ccc;" +
                        "margin-left: 30px;" +
                    "}" +

                    // 关闭按钮
                    "#xin-close{" +
                        "background:white;" +
                        "color:#3ABDC1;" +
                        "line-height:20px;" +
                        "text-align:center;" +
                        "height:20px;" +
                        "width:20px;" +
                        "text-align:center;" +
                        "font-size:20px;" +
                        "padding:10px;" +
                        "border: 3px solid #3ABDC1;" +
                        "border-radius: 50%;" +
                        "transition: .5s;" +
                        "top: -20px;" +
                        "right:-20px;" +
                        "position: absolute;" +
                    "}" +
                    "#xin-close::before{" +
                        "content:'\\2716';" +
                    "}" +
                    "#xin-close:hover{" +
                        "background: indianred;" +
                        "border-color: indianred;" +
                        "color: #fff;" +
                    "}" +
                    // type[range] 效果
                    "input[type=range] {" +
                        "outline: none;" +
                        "-webkit-appearance: none;" +
                        "background:-webkit-linear-gradient(left,#3ABDC1,#83e7ea) no-repeat, #fff;" +
                        "border-radius: 10px; /*这个属性设置使填充进度条时的图形为圆角*/" +
                    "}" +
                    "input[type=range]::-webkit-slider-thumb {" +
                        "-webkit-appearance: none;" +
                    "} " +
                    "input[type=range]::-webkit-slider-runnable-track {" +
                        "height: 10px;" +
                        "border-radius: 10px; /*将轨道设为圆角的*/" +
                        "box-shadow: 0 1px 1px #def3f8, inset 0 .125em .125em #0d1112; /*轨道内置阴影效果*/" +
                    "}" +
                    "input[type=range]::-webkit-slider-thumb {" +
                        "-webkit-appearance: none;" +
                        "height: 18px;" +
                        "width: 18px;" +
                        "margin-top: -5px; /*使滑块超出轨道部分的偏移量相等*/" +
                        "background: #fff; " +
                        "border-radius: 50%; /*外观设置为圆形*/" +
                        "border: solid 0.125em rgba(205, 224, 230, 0.5); /*设置边框*/" +
                        "box-shadow: 0 .125em .125em #3b4547; /*添加底部阴影*/" +
                    "}" +
                    // 导入
                    "#importingBox{" +
                        "position:fixed;" +
                        "width:350px;" +
                        "top:50%;" +
                        "left:50%;" +
                        "transform:translate(-50%,-50%);" +
                        "padding: 15px 30px;" +
                        "border-radius: 4px;" +
                        "background:#1D1D1D;" +
                        "color:#fff;" +
                    "}" +
                    "#importingBox li{" +
                        "margin:5px;" +
                        "border-bottom:1px solid #3ACBDD;" +
                    "}" +
                    "#importingBox li p{" +
                        "white-space: nowrap;" +
                        "overflow: hidden;" +
                        "text-overflow: ellipsis;" +
                        "margin-top:0;" +
                        "margin-bottom:0;" +
                    "}" +
                    ".xin-importing-item{" +
                        "cursor:pointer;" +
                    "}" +
                    "";
                head = document.getElementsByTagName('head')[0];
                style = document.createElement('style');
                style.type = 'text/css';
                style.innerHTML = css;
                head.appendChild(style);
            }
        };

        // 增加设置按钮
        if (getSettingData.setBtnOpacity>=0){
            var setBtn = document.createElement("span");
            setBtn.id = "setBtn";
            GM_addStyle("#setBtn{" +
                            "opacity:"+getSettingData.setBtnOpacity+";"+
                            "transition:0.5s;"+
                        "}"+
                        "#sej-container:hover span#setBtn{" +
                            "opacity:1;" +
                        "}" +
                        "");
            setBtn.innerHTML = "<img style='margin:0 0 -3px 6px;width:16px;vertical-align: baseline;display:inline-block;cursor:pointer;' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACSklEQVR4nGNkIAPYy8tzhLS2f0cWy42JYiTHLLI0TV6y7D82cXIcwUSqhr658/bhkaaeAyYvWfZ/0qLFW9HVs7JzOOLR8w+bObhCjIEBh4vxaaAEYIsijBCgleW4zGYipIDawEpYVgqnA8jNSqSAY28fP8PpgIEALORoUlWQwyp++8Ejks0iKQQYGRlxWs7AgNth+ABKCLRPmhqHT7GKvCwDAwMDQ11gxMRTr58UIMtNmzbjuZKejoSqghyhkGBkYGD4j8xhYGAgnANgvmvyj5RGT0gwYC4mU9y4bkUPAwPh6IAleEZisx7MAR42Nnhzyo4jR/4T4wAYICoNIFlOUH1dULglAwMDg7S4GPUcgAQIhtapV09PMDAwMHBxchBlIMvHj++JUEZ86tbnlxdgYGBg+PL1KwMxZhMVAmcuXmRgYEDELz7QuXXpewYGBoYbd+4QYzQDU012NuOmxvZJRKkmDIguyjc2dfrWZGczomhomToVrw9N9PUZGBiw54T1O3emc3Jzz2BgQIQYLlCTnQ3Xj2EQPkcYaGszsLDgL71JsZyBgcRccOHqVbwWELIcGyCrMiLHIlxgwKtjFAeYSkkJD6gD/Kur39DaQjNxmWScDkBPodQGWxrbU0+9fDIXpwNwOWJTQ8eSzY3tC4m1aHNje8mmhvY+FLGG9qQTr57MQVeL08cW4jJmJ14+OYUuTqiwwuYBczFpvZOvnl7Cpp7kIPdQUWG3KSz8QazlhADJ2XDHnTs/SdVDVQcwMDAwLJs6lR1djNwEDAB1JMSK2b7KxQAAAABJRU5ErkJggg=='>"
            document.querySelector("#sej-container").appendChild(setBtn);
            var sejSet = null;

            setBtn.addEventListener("click",setBtnStart);
        };

        // 注册菜单
        GM_registerMenuCommand("search jump 搜索跳转设置",setBtnStart);

        function setBtnStart(){
            if(!document.querySelector("#settingLayerMask")){
                sejSet = new SEJsetting();

                var sej_save = document.querySelector("#xin-save");
                // var sej_close = document.querySelector("#xin-close");
                // var sej_reset = document.querySelector("#xin-reset");
                var sej_addDel = document.querySelector("#xin-addDel");
                var sej_edit = document.querySelector("#xin-modification");

                // sej_save.addEventListener("click",function(){sejSet.saveData();sejSet.hide();if(!getSettingData.debug)window.location.reload();});
                sej_save.addEventListener("click",function(){sejSet.saveData();sejSet.hide();sejSet.reloadSet();});
                // sej_close.addEventListener("click",function(){sejSet.hide();});
                // sej_reset.addEventListener("click",function(){sejSet.reset();sejSet.hide();window.location.reload();});
                sej_addDel.addEventListener("click",function(e){sejSet.addDel(e);});
                // sej_edit.addEventListener("click",function(e){sejSet.addEdit(e);});
                sej_edit.addEventListener("click",function(){sejSet.editCodeBox();});

                //
                window.addEventListener("resize",sejSet.windowResize.bind(sejSet));
            }
            sejSet.show();
        }

        // 获取存储的数据信息
        function get_data(){
            setData = GM_getValue("searchEngineJumpData");
        }
        var setData = null;
        // get_data();
    }

    // 从此处开始执行
    var debug;
    function reloadDebug(bool) {
        debug = bool ? console.info.bind(console) : function() {};
    }

    // 消息提示框
        // 目前只是为了给用户一个反馈。 - 成功了么 - 嗯,成功了
    var iqxinTimerGlobalTip = null
    function iqxinShowTip(text,duration){
        console.log("iqxin -- 消息提示框: ", text);
        var odom = document.querySelector("#iqixn-global-tip");
        if(!odom){
            odom = document.createElement("iqxinDiv");
            odom.id = "iqixn-global-tip";
            odom.style.cssText = "" +
                "opacity: 0;" +
                "height: 25px;" +
                "line-height: 25px;" +
                "letter-spacing: 1px;" +
                "font-size: 1em;" +
                "color: #fff;" +
                "padding: 5px 20px;" +
                "border-radius: 5px;" +
                "background-color: #666;" +
                "position: fixed;" +
                "z-index: 200000001;" +
                "left: 50%;" +
                "bottom: 5%;" +
                "transform: translate(-50%);" +
                "transition: .4s;" ;
            document.body.appendChild(odom);
        }

        odom.innerHTML=text;
        odom.style.opacity=1;

        duration = duration?duration:1500;
        //防止持续时间内多次触发提示
        if(!iqxinTimerGlobalTip){
            iqxinTimerGlobalTip = setTimeout(function(){
                odom.style.opacity=0;
                iqxinTimerGlobalTip = null;
            },duration);
        }
    }

    // hash-query  不刷新页面的搜索
        // hashchange 和 popstate 都无法检测到谷歌和百度搜索时网址的变化,不理解
    if (window.self != window.top) return;
    // 下面这种方法百度一直报错无法使用,遂用定时器
    // if (true) {
    //     console.log('iqxin添加标题节点监视器: title');

    //     var watch = document.querySelector('title');
    //     console.log("titile: ",watch);
    //     console.log("titile: ",document.title);
    //     new (window.MutationObserver || window.WebKitMutationObserver)(function(mutations){
    //         console.log('iqxin标题发生了变化', document.title);
    //         if(!document.querySelector('sejspan')){
    //          runInPageContext(contentScript);
    //         }
    //     }).observe(watch, {childList: true, subtree: true, characterData: true});
    // }
    // 给谷歌和百度搜索的主页单独加个列表
    var url = window.location.href;
    var hashList = [
        /^https?:\/\/www\.baidu\.com\/$/i,
        /^https?:\/\/www\.google(?:\.[A-z]{2,3}){1,2}\/$/i,
        /^https?:\/\/www\.google(?:\.[A-z]{2,3}){1,2}\/[^#]*#(?:&?q=|.+?&q=).+/,
        /^https?:\/\/www\.youtube\.com\/results/,
        // /^https?:\/\/searx\.me\//i,
    ];
    // 部分网站或内因或外因的原因加载缓慢，所以推迟插入
    var delayList = [
        /^https?:\/\/google\.infinitynewtab\.com\/\?q/,
        /^https?:\/\/www\.zhihu\.com\/search\?/,
    ]

    var hashListTag = hashList.some(function hashUrl(element, index, array){
            return ~url.search(element);
        });
    var delayListTag = delayList.some(function hashUrl(element, index, array){
            return ~url.search(element);
        });

    if (hashListTag){
        var oldTitle = document.title;
        var newTitle = "";
        var timer = setInterval(function(){
            // console.log("循环中",newTitle,oldTitle);
            newTitle = document.title;
            if (document.querySelector("#appbar") && !document.querySelector("sejspan")){
                // console.log("new");
                iqxinstart();
            } else if (document.querySelector("sejspan")){
                // console.log("已存在");
                clearInterval(timer);
            }else if (oldTitle!=newTitle){
                // console.log("不存在开始插入");
                iqxinstart();
            }
        },1000)
    } else if (delayListTag){
        // console.log("延时运行");
        setTimeout(function(){iqxinstart();},2000);
    } else {
        // console.log("普通插入");
        iqxinstart();
    }

})();


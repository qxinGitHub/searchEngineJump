// ==UserScript==
// @name           searchEngineJump 搜索引擎快捷跳转
// @author         NLF&锐经(修改) & iqxin(再修改)
// @contributor    iqxin
// @description    方便的在各个搜索引擎之间跳转,增加可视化设置菜单，能更友好的自定义设置，修复百度搜索样式丢失的问题
// @version        5.15.13
// @created        2011-7-2
// @lastUpdated    2018-06-25

// @namespace      https://greasyfork.org/zh-CN/scripts/27752-searchenginejump
// @homepage       https://github.com/qxinGitHub/searchEngineJump

// @icon           data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFSElEQVR4nMWXX4hdVxXGf2vfe89kJg61ia0DYzMTMWnoQ0FJtKmtJsFixT8DBSmYtGMLgq0PCqMEKwmxYzSGyUPBB7XRNi0FC6JtwYovgcS0klJD8SHakoExYhLQFkwn9/aeOfv7fDi3SStJ5o4muN4O7L32b33rz94H/s8WS10cvR3yVQaY++wnkESkwDK2sMy1EwXDtzRRziBhu+dGDG48smSA5kUP//wmAFIkrNwiGMOsBzYAQwTzEEeBY8BJO1fYtF+4laGPv/i/Afz1C1sAYwngZiKmsDcDI0DrHUtL4DRwMGAmUnVcCtpHPsrQbS/1DZDe+VFHblKziIjYBjwD3Iu5ARBwBjgJnAkwMAa+z+ZZqXEX8VZg0T784aUDzH3uk0DtVQvlVsMjwGpMB3gauAu8ieB2YDPwxR5gF/gQ+MeoNUFzACI4d+imvgDOp0BVRWo2AW62eRi8wvY/wNtrgGhDL+7a/gIcBLYBu4HrsPdSzr8K/JlcLk2BaCQstSxN2VptuYO93an7WES0UyORGg1Wfu0QKivyQhfb56yhn4B3Ynew1kD1oDTfJF20vi8NYBvjMVubbWHrOdtPhwaAYPVvfs8Hf1u32bJbDtXVbgFvAj4AOgTGzhPhGMdV/wCvbtmAJSyttzRiuWv7CdttAlY/f/iimwdvfQGiAfmtczg/jnOJ8/txtRbnvgAu6FSPtg1AC3wGPAvgWGRYqiSowLwC1Ru4GoFyFPc3ZM8DfGPLB1jZXlhe74sS6AAc+O6vL+tg6LaX2LP/SSA6tkpcYeee36/0D/C7Ve9BwZs97iLMEMDAE5N07z1wSQebvl/y3KkAGDIUsrHpRp8ACeDGw38kZdPMPtrILhvZ1yZ5TZJxvnwuW40GzSSaDa1vJq1oJXVbKZ9qpv5qoO6Cqr5ULB+zfNrygOX7LS+PlCgeu+eimz/1w0yWaTTScIqYTEERcDoiXovFauddAAA22CeRDyKD/Bnkbd32PNgUj09S/GwrUMt+x14hiWVFI1LEVyPidggi4hfOnuv3nr8AEGC5sj1j+4TtAcu7i4HlDwLLqRawMmtmnidn6JYLGIa7C/mbwHeAgYATQexPjVCVxcZd7SUACDCEfRyznXoMr8Sawf4lcDdwI7AKWAdss/0r2dOyr6kFpCn7hiyPRlDY5mM7z10W4F1KFT+/p6ZwDkgT2HuN19Tz3yXWG+NnJ8uR9h0FSStSRAFBwAmbpu3xbP/T9rzkp2zvtt2RzcvfG15EAaC8/8m6FkgmpWdsTyD/COtv9esnj1haZXvEtiXP2d5jc6es+3qHv8/2uO1v2d4hedA2H/n2vxZX4LwS+78E1PcDqprAOPZao9Gxs5PNkc6dXUKnIuI1Z8+lRijLo8AR2+OWqeeBS8n7bE8bd2x4Zc97FwcAaP307vqyiXi7QzBi7OyXGel8GkJEBAFUWUREIXlnL/LCvgBheZ9h2lLHyvxp5rrFAZZiG3e16zliBm3vsD0lu6i5ja0awppWrjrKmeOPjAL/UQP/rf1h11BPJHckT/dkL+vDjeXC0pRy3qGcB22x9oHZKwcAcPTh5UimzrWnexGXlrCFlAvlakq5eiiX3eLtSXnFAABe3j1c/0PgTp1z77NUKmesjHMulKuttq9X/eq+sgAAx35wTZ0OqWNrWqr2KVelqoqcF3DOL1r5dStfHQCoW03K9ApuWrnam/PCnHN+StZDRHSK1jLgCnXBpeymr/8dS+SFbmH7eiu/TkQnNRrkqmL20XVXFwBg7QOzRASSsDJFaxndssPso+uu9tH92b8BowSyPc/iZtEAAAAASUVORK5CYII=

// @include        *google*
// @include        *baidu.com*
// @include        *bing.com*
// @include        *duckduckgo.com*
// @include        *youdao.com*
// @include        *so.com*
// @include        *soku.com*
// @include        *bilibili.tv*
// @include        *bilibili.com*
// @include        *acfun.tv*
// @include        *acfun.cn*
// @include        *youtube.com*
// @include        *so.tv.sohu.com*
// @include        *so.letv.com*
// @include        *so.1ting.com*
// @include        *xiami.com*
// @include        *music.163.com*
// @include        *music.qq.com*
// @include        *so.yinyuetai.com*
// @include        *pixiv.net*
// @include        *flickr.com*
// @include        *huaban.com*
// @include        *www.nicovideo.jp*
// @include        *cn.picsearch.com*
// @include        *deviantart.com*
// @include        *jpg4.info*
// @include        *yyets.com*
// @include        *baiduyun.me*
// @include        *oabt.org*
// @include        *ktxp.com*
// @include        *dmhy.org*
// @include        *shooter.cn*
// @include        *simplecd.me*
// @include        *ed2000.com*
// @include        *taobao.com*
// @include        *list.tmall.com*
// @include        *search.jd.com*
// @include        *search.suning.com*
// @include        *search.dangdang.com*
// @include        *search.yhd.com*
// @include        *amazon.cn*
// @include        *s.mall.360.cn*
// @include        *iciba.com*
// @include        *dict.cn*
// @include        *dict.hjenglish.com*
// @include        *zdic.net*
// @include        *wikipedia.org*
// @include        *zhihu.com*
// @include        *so.hudong.com*
// @include        *docin.com*
// @include        *ishare.iask.sina.com.cn*
// @include        *s.weibo.com*
// @include        *douban.com*
// @include        *search.t.qq.com*
// @include        *twitter.com*
// @include        *facebook.com*
// @include        *runoob.com*
// @include        *pinterest.com*
// @include        *github.com*
// @match          *://*/*

// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_deleteValue
// @grant       GM_setClipboard
// @grant       GM_registerMenuCommand
// @run-at      document-end

// ==/UserScript==

(function () {
    'use strict';

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
                // 若固定到顶栏，是否给一个高度
                // fixedTop: 100,
                // 给引擎列表的样式
                style: '\
                    margin-left: 142px;\
                    z-index: 100;\
                    margin-top:5px;\
                ',

                // 插入文档,相关
                // target 将引擎跳转工具栏插入到文档的某个元素
                    // (请使用xpath匹配,比如: '//*[@id="subform_ctrl"]'  或者 css匹配(请加上 'css;' 的前缀),比如: 'css;#subform_ctrl' );
                // keyword 使用 xpath 或者 css选中一个form input元素 或者 该项是一个函数，使用返回值
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
                fixedTop:56,
                style: '\
                    margin-top:8px;\
                    margin-bottom: -5px;\
                    z-index: 99;\
                    margin-left: 113px;\
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
                style: "top:100px;padding-left:114px;z-index:99;",
                insertIntoDoc: {
                    keyword: "css;#upquery",
                    target: "css;.header",
                    where: "afterEnd",
                },
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
                insertIntoDoc: {
                    keyword: 'css;.SearchBarExperiment input',
                    target:"css;.Search-container",
                    where: 'beforeBegin', //beforeBegin
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
            {name: "bilibili",
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
            {name: "acfan",
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
            {name: "youtube",
                url: /^https?:\/\/www\.youtube\.com\/results/,
                enabled: true,
                engineList: "video",
                fixedTop:56,
                style: "\
                    padding-left: 240px; \
                    margin-top: 62px;\
                    margin-bottom: -80px;\
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
            {name: "iqiyi",
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
                style:"\
                    text-align: center;\
                    padding-top:8px;\
                    ",
                insertIntoDoc: {
                    keyword: (function(){return decodeURI(document.URL.match(/s=(.+?)(&|$)/)[1]);}),
                    target: 'css;.shadow',
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
                    ',
                insertIntoDoc: {
                    keyword: 'css;input[name=q]',
                    target: 'css;#ucs',
                    where: 'afterEnd',
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

            // 回家没网，用8090端口离线测试使用。
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

        // engineList.web[0] 中间的数字表示排序(数字不能重复，否则后面的会覆盖掉前面的)，越小数字越靠前，小于0该引擎不会显示在页面上
        engineList.web[0] = {
            // 搜索引擎名称
            name: 'Google',
            // 搜索引擎地址，关键字变量用%s代替
            url: 'https://www.google.com/search?q=%s&ie=utf-8&oe=utf-8',
            // 搜索引擎的站点图标
            // favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACyElEQVQ4jXWT72tTdxTGv4yN+cY/oMFGqQpD7ZjtsAF/oPEXGFhtbUEn4mSTatSJVua0UNNSEG/01UAH0m6dN1hdW5SbrE3sgkr1hb9lRTFW3Upqcy1NzE1yc/Prfvaia7dM+7w853keznM4R4h38aHdbt8gSZJbURSv3++/Jsuyp6GhwWm1Wsvew/8XNptteTAYvMEMiKjquMvlahVCzHpHXFdXV69pWhLAHHtNSm7nbdMhYo170U61kLkZnDZSFMUrhJg9La6qqrLpum4A6FcuM+5YReRTK5HyUiLlViJLSolULiB2eA+mFgdAlmWPEOIDIYT4aHBw8DaA3tODavuESMV8orvqSZ7/Af1XD/HW71HXVKKdbsPUU9OT1NTU1Aq73b4BgPhLJrYtY2zxQuKtxzATWlH+/MvnYJpFtUAgMCDcbvcZAHOkjXSHIH50LYW3iZn2WIRoNBoTiqJ4AfIPq8n1CwrDB4pIPw5kcP6k0+hJ0+hJ8+0vaU5eNdCzk30RCAQGAPL311PwCnjVXGSw+7zOvIMa5UcTVDQl+Ox4Aoc7yfg/QwpZlj0A5pNvML2Cp/d2FhmExgrceZHn0Z952q9nqGhKsONsCiMP2Ww2J5xO534A481V3N1lLL24md/Dd96b2dWdZfF3Gi29xqR5KDQsSkpK5kaj0ZhhFtgVbKOkfTUru7+kK+RjNKkSzyR4FgvRHOzn8+YJVrakefxXHgBJkk4LIYRwuVytAOHUG7b2H8basZr5netY2/sVm737WHZpC3M6VrDk3Aku3Jq8g9HR0TGLxWKdOsaPfT7fbwBaLsWZBx1svPI1i+RNlP28jsquLWz3H8E3cg0AwzAyDofji/+/w+zOzs4LU3mTZprHE8+4q/7BcGJkeg/hcPh1dXV1zYwfWVtbW9fX1+dXVXV8SpTL5fJDQ0NPJElyWyyW0v/y/wbuo60BpWkyAAAAAABJRU5ErkJggg==',
            favicon: icon.google,
            // 搜索引擎编码（默认utf-8）如果跳转后乱码可以填写 'gbk'
            encoding: 'utf-8',
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
            favicon: 'data:image/x-icon;base64,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',
            disable:true,
        };
        engineList.web[6] = {
            name: '搜狗',
            url: 'https://www.sogou.com/web?query=%s',
            favicon: 'data:image/png;base64,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',
            disable:true,
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
            name: 'acfan',
            url: 'http://www.acfun.cn/search/?#query=%s',
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
            name: 'javlibrary',
            url: 'http://www.ja14b.com/cn/vl_searchbyid.php?keyword=%s',
            favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIAA3AQAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAP5JREFUeJylkzFKBDEUhr+3SQZdF8vFxmobwT2AtXgHCzsbQbyANuJVbLyAnR7BTlFBrGwUsRBcGdckz2JFd5zMzA7+Vf6Q9+XPSyIfc2fKP9RJznYNZncZpBkgpQQC2fvGjx3Pn7dLIP2seds6gD6N0YccgHj63AiwpQSrPbCC374injy2BHQN7mJtMnbp/v5VYZXZXPo1ruIKsg6yspAGYKeKTBpgj4fo7WgGQEUAffksllQC+g73uk7YukRHAfGKRiXs3dQApurtwYBwdI8Me4gAi5a4f1c+UjroROZwUPAhASj2II/w5iEP4PXbB/zOdeWTLv+FlprttdToC7F9R7urpLwHAAAAAElFTkSuQmCC',
            blank:true,
        };
        engineList.mine[9] = {
            name: 'airav',
            url: 'http://airav.cc/avgirlInfo.aspx?Search=%s',
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSklEQVR4nJWRQUrDQBSGv5m2mWhasCKVotQ0iCh002rqFQRBTyPoLdx4C3eudCF4Aim4EV2IrgpFFNSa1DYuQicdk0Kd1cyb/315+Ub0Ts4jspYQlI/2iMIhb6dXmREAOe3C2lhGLsyTq5QouEv/Byi/nuzb9WmxbIAs2Vib1WSaxipizpodoLZdkEKfRV6iWrUZAUJg+y4AX5d3umz73myAwnoFWXYA6N/ca8g0mSmA7ZvCJiFZMg2ALCqsrWoqFH0PgGyZBkC11iBnDmXvejgHTSBbZpIWoNpedrOYqP2RqQEFr0Ju0TEunUOzGdIy83r8HVcXh6+fRMGP+SU7r19HtesMnnoJQDgK1ViJk6OI97Nron5oAoqK8vE+SBHLvOgQ9cP4F+xmTcsLH7qpZoDRR8DgsQuYMmU8UiIm7LykmscruH3W+7HMX4w3TDVyAQKXAAAAAElFTkSuQmCC',
            blank:true,
        };



        var settingData = {
            "status":1,
            "message":"$相关说明$(status: 这个在将来或许很重要)..."+
                    "(version: 若有新功能加入，靠这个版本号识别)..." +
                    "(addSearchItems: 允许更新时，添加新的搜索到你的搜索列表，将来更新使用)..." +
                    "(modifySearchItems: 允许更新时，修改你的搜索列表中的项目,将来更新使用)..." +
                    "(connectToTheServer: 允许连接到我的服务器(更新列表，将图标转换为base64等),将来更新使用或永不使用)..." +
                    "(closeBtn: 设置页面右上角的“关闭圆圈”是否显示。true显示，false隐藏)..." +
                    "(newtab: 0为默认设置，1为新标签页打开)..." +
                    "(foldlist: 折叠当前搜索分类列表。true为折叠，false为展开。)..." +
                    "(settingOpacity: 设置按钮的透明度，值为0-1之间的数，0为透明，1为完全显示，中间值半透明。注：-1为直接关闭按钮，关闭之前请确定自己知道如何再次打开它)..." +
                    "(debug: debug模式，开启后，控制台会输出一些信息，“关闭并保存”按钮将不会在刷新页面)..." +
                    "(fixedTop: 将搜索栏固定到顶端。 true开启，false关闭)..." +
                    "(baiduOffset: 在百度页面二级菜单会出现位移，若有使用其他的style样式，可以修改这个来修复二级菜单的偏移)..." +
                    "(engineDetails: 第一个值为分类列表标题名称，第二个值与enginelist相关联，必须匹配,第三个值true为显示列表，false为禁用列表。可以用它将分类列表按自己喜欢排序)..." +
                    "(engineList: 各个搜索的相关信息)" +
                    "(rules: 将搜索样式插入到目标网页，同脚本中的rules设置相同，优先级高于。自带了360搜索，可仿写)...",
            "version":1.96,
            "addSearchItems":true,
            "modifySearchItems":true,
            "connectToTheServer":true,
            "closeBtn":true,
            "newtab":0,
            "foldlist":true,
            "setBtnOpacity":0.8,
            "debug":false,
            "fixedTop":true,
            "baiduOffset":-120,
            "engineDetails":[['网页', 'web',true],['翻译', 'translate',true],['知识', 'knowledge',true],['图片', 'image',true],['视频', 'video',true],['音乐', 'music',true],['学术', 'scholar',false],  ['社交', 'sociality',true],['购物', 'shopping',true],["下载","download",true],['mine', 'mine',false]],
            "engineList":{},
            "rules":[{"name": "360", "url": "/^https?:\\/\\/www\\.so\\.com\\/s\\?/", "enabled": true, "engineList": "web","fixedTop":50, "style": "padding: 10px 0 0 120px;margin-bottom:-10px;z-index:3001;", "insertIntoDoc": {"keyword": "//input[@name='q']", "target": "css;#tabs-wrap", "where": "afterEnd"}}]
        }
        // GM_deleteValue("searchEngineJumpData");
        var getSettingData = GM_getValue("searchEngineJumpData");
        if(getSettingData){
            // console.log("本地存在列表：",getSettingData);
            if(!getSettingData.status && confirm("设置发生错误，脚本将会复原出厂设置")){
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

            // 获取版本，用于搜索列表更新
                // console.log("当前版本号和目标版本号: ",getSettingData.version,settingData.version);
            if(parseFloat(getSettingData.version) < settingData.version){
                console.log("版本过低，开始更新,当前版本号和目标版本号: ",getSettingData.version,settingData.version);
                // 1.91更新 添加海词; 版本号已蹦，应该从1.01而不是1.1开始计算。
                // if(getSettingData.addSearchItems && getSettingData.engineList.hasOwnProperty("translate")){
                //     engineList.translate[7].disable = true; // 对于老用户，默认禁用的状态添加
                //     getSettingData.engineList["translate"].push(engineList.translate[7])
                // }

                // 1.92更新 优酷搜索变动
                // if(getSettingData.modifySearchItems){
                //     getSettingData.engineList = modifySearchItemsFun(getSettingData.engineList,"http://www.soku.com/v?keyword=%s","http://www.soku.com/search_video/q_%s")
                //     //  5.11.0(2017.8.18) 的变动，但从未主动去修复它
                //     getSettingData.engineList = modifySearchItemsFun(getSettingData.engineList,"http://www.jav11b.com/cn/vl_searchbyid.php?keyword=%s","http://www.ja14b.com/cn/vl_searchbyid.php?keyword=%s")
                // }

                // 1.93更新 360界面变动
                // if(getSettingData.modifySearchItems){
                //     modifySearchItemsRuleFun("360",{"name": "360", "url": "/^https?:\\/\\/www\\.so\\.com\\/s\\?/", "enabled": true, "engineList": "web","fixedTop":50, "style": "padding: 10px 0 0 120px;margin-bottom:-10px;z-index:3001;", "insertIntoDoc": {"keyword": "//input[@name='q']", "target": "css;#tabs-wrap", "where": "afterEnd"}});
                //     getSettingData.engineList = modifySearchItemsFun(getSettingData.engineList,"https://www.facebook.com/search/results.php?q=%s","https://www.facebook.com/search/top/?q=%s")

                // }
                // 1.93更新 360界面变动
                // if(getSettingData.modifySearchItems){
                //     getSettingData.engineList = modifySearchItemsFun(getSettingData.engineList,"https://www.google.com/cse?q=%s&newwindow=1&cx=006100883259189159113%3Atwgohm0sz8q","https://cse.google.com/?q=%s&newwindow=1&cx=006100883259189159113%3Atwgohm0sz8q")
                // }

                // 1.95更新 添加搜狗搜索
                // if(getSettingData.addSearchItems && getSettingData.engineList.hasOwnProperty("web")){
                //     engineList.web[6].disable = true; // 对于老用户，默认禁用的状态添加
                //     getSettingData.engineList["web"].push(engineList.web[6])
                // }
                // 1.96 更新 修改a站搜索链接
                if(getSettingData.modifySearchItems){
                    getSettingData.engineList = modifySearchItemsFun(getSettingData.engineList,"http://www.acfun.tv/search.aspx#query=%s","http://www.acfun.cn/search/?#query=%s")
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
            // console.log(value,value[2]);
            return value[2]?index:-index;
        })

        // 列表分类的key value
        var getDetailsL = getDetails.length;
        var details = [];
        for(let i=0;i<getDetailsL;i++){
            details[getDetails[i]] =  engineDetails[i];
        };
        engineList.details = details;

        // debug
        // getSettingData.debug = true;
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

        function getElementLeft(element){
            var actualLeft = element.offsetLeft;
            var current = element.offsetParent;
            while (current !== null){
                actualLeft += current.offsetLeft;
                current = current.offsetParent;
            }
            console.log(actualLeft);
            return actualLeft;
        };
        // --------------------可设置项结束------------------------
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
        // 需要 eventSupported， data函数支持
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
                add : function (type, ele, callback) { //事件类型，元素，监听函数
                    if (support[type]) {
                        ele.addEventListener(type, callback, false); //mouseleave,enter不冒泡，所以在冒泡阶段监听事件，不要担心子孙元素进出发生的事件冒泡上来。
                    } else {
                        var listener = data(callback, 'mouseELListener');
                        if (!listener) {
                            listener = function (e) {
                                var relatedTarget = e.relatedTarget; //mouseout，去往的元素；mouseover，来自的元素
                                // 当mouseout（离开ele）去往的元素不是自己的子孙元素
                                // 当mouseover（进入ele）来自的元素不是自己的子孙元素
                                if (!ele.contains(relatedTarget)) { // contains函数，自己.contains(自己) 返回true
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

            // // @name     searchEngineJump-NextStage
            if (document.characterSet != "UTF-8") value = encodeURIComponent(value);

            var targetURL = target.getAttribute('url');
            // console.log(targetURL);
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
                console.log(value);
                target.href = target.getAttribute('url').replace('%s', value);
            }
        };
         //获取  POST 的表单的 HTML
        function getPostFormHTML(url, value, newTab) {
            console.log(url,value,newTab)
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

        // console.log(matchedRule);
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
                    display: inline-block;
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
                    border: 1px solid #FAFAFA;
                    padding: 5px 0;
                    text-align: left;
                    font-size: 13px;
                    -moz-box-shadow: 2px 2px 5px #ccc;
                    -webkit-box-shadow: 2px 2px 5px #ccc;
                    box-shadow: 2px 2px 5px #ccc;
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
            showDelay: 233,
            hideDelay: 233,
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
                    left += getSettingData.baiduOffset;
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
        var aPattern = '<a href="" class="sej-engine" target="$blank$" encoding="$encoding$" url="$url$"><img src="$favicon$" class="sej-engine-icon" />$name$</a>';
        var container = document.createElement('sejspan');
        container.id = 'sej-container';
        container.className = "rwl-exempt";

        container.addEventListener('mousedown', mousedownhandler, true);

        if (matchedRule.style) {
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
                    .replace('$name$', engine.name);

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

        // todo: 此处与上面重复，在百度页面会插入两次
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

        // 由于与要插入网页的样式无法很好的兼容，更改源网页的样式
        if(matchedRule.stylish){GM_addStyle(matchedRule.stylish);};
        //固定搜索栏
        if(getSettingData.fixedTop){
            window.onscroll = function(){
                fixedTopFun(matchedRule.fixedTop);
            };
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
                // console.log("obj.offsetLeft",obj.offsetLeft);

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
                    
                    // 如果之前未设置颜色，则默认设置为白色
                    if(objstyle.backgroundColor === "rgba(0, 0, 0, 0)" || objstyle.backgroundColor === "transparent"){
                        obj.style.background = '#fff'; 
                    }
                    // obj.style.zIndex = '999';

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
                // 若根据数组长度获取，负数引导的为属性，不再length长度之内，所以来个大体的数字，当都为空时，结束循环
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
                var debug_checked = getSettingData.debug?"checked":"";
                var foldlist_checked = getSettingData.foldlist?"checked":"";

                // var setBtnOpacity_value = getSettingData.setBtnOpacity;
                var btnStr2 = "<div>" +
                            "<span id='xin-reset' title='慎点，出厂重置'>清空设置</span>" +
                            "<span id='xin-modification' title='edit 分享自己的配置或清空配置'>配置文件</span>" +
                            "<span id='iqxin-debugS' title='对设置菜单有一定的影响'>" +
                                "<label>debug<input id='iqxin-debug' type='checkbox' name='' " +
                                    debug_checked +
                                " style='vertical-align:middle;'></label>" +
                            "</span>" +
                            "<span id='xin-foldlists'>" +
                                "<label>折叠当前搜索分类<input id='iqxin-foldlist' type='checkbox' name='' " +
                                    foldlist_checked +
                                " style='vertical-align:middle;'></label>" +
                            "</span>" +
                            "<span id='iqxin-fixedTopS' title='fixedTop 当滚动页面时，固定到页面顶端。某些页面的样式存在问题'>" +
                                "<label>固定到顶端<input id='iqxin-fixedTop' type='checkbox' name='' " +
                                    fixedTop_checked +
                                " style='vertical-align:middle;'></label>" +
                            "</span>" +
                            "<span id='xin-setBtnOpacity' title='设置按钮透明度'>设置按钮透明度 <input type='range' step='0.01'  min='0' max='1' value='"+ (getSettingData.setBtnOpacity<0?-getSettingData.setBtnOpacity:getSettingData.setBtnOpacity) +"' id='setBtnOpacityRange'><i style='display:inline-block;width:3em;text-align:center;' class='iqxin-setBtnOpacityRangeValue' title='按钮 显示/隐藏(非透明))，请确定知道自己如何再次打开; 火狐非高级玩家建议别禁用'></i></span>" +

                            "</div>";
                btnEle2.innerHTML = btnStr2;
                this.ele.appendChild(btnEle2);


                // 添加按钮
                var btnEle = document.createElement("div");
                btnEle.id = "btnEle"

                var btnStr = "<div class='btnEleLayer'>" +
                            "<span class='feedback'><a target='_blank' href='https://greasyfork.org/zh-CN/scripts/27752-searchenginejump'>反馈 greasyfork</a></span>" +
                            "<span class='feedback'><a target='_blank' href='https://github.com/qxinGitHub/searchEngineJump'>反馈 GitHub</a></span>" +
                            "<span id='moreSet' title='more set'>更多设置</span>" +
                            "<span id='xin-newtab' title='open newtab 是否采用新标签页打开的方式'>打开方式：" +
                                "<select id='iqxin-globalNewtab'>" +
                                    "<option value='globalDef'>默认页面 ▽</option>" +
                                    "<option value='globalNewtab'" + (getSettingData.newtab?"selected":"")  + ">新标签页 ▽</option>" +
                                "</select>" +
                            "</span> " +
                            "<span id='xin-addDel' title='add & del 增加新的或者删除现有的搜索'>增加 / 删除</span> " +
                            "<span id='xin-save' title='save & close'>保存并关闭</span>" +
                            "<span id='xin-ad' title='由于一些原因, 需要打个广告, 望海涵'>广告" +
                                "<span id='xin-ad-pics'>" +
                                    "<img id='xin-ad-pic' alt='黄金油桃5斤整装' src='data:image/jpeg;base64,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' >"+
                                    "<span id='xin-ad-code' title='二维码'>" +
                                        "<p>新店开张，还望多多支持</p>" +
                                        "<p>清晨采摘，立马发货，保证新鲜</p>" +
                                        "<p>请使用微信扫一扫</p>" +
                                        "<img id='xin-ad-code-pic' alt='二维码' src='data:image/jpeg;base64,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'>" +
                                        "<p>精神上支持下</p>" +
                                        "<p>收藏下店铺也是极好的</p>" +
                                    "</span>" +
                                "</span>" +
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
                    // console.log("不存在，增加增加");
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

            // 界面，框：添加新的搜索
            addItemBox: function(bool){
                this.isOnline();
                this.addItemBoxRemove();

                var newDiv = document.createElement("div");
                newDiv.id= "newSearchBox";
                newDiv.innerHTML=""+
                    "<span>标&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp题 : </span><input id='iqxin-newTitle' placeholder='必填' onfocus='this.select()' /> <br/><br/>" +
                    "<span>链&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp接 : </span><input id='iqxin-newLink' placeholder='必填' onfocus='this.select()' /> <br/><br/>" +
                    "<span>图&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp标 : </span><input id='iqxin-newIcon' placeholder='选填，留空则自动获取' onfocus='this.select()' /> <br/><br/>" +
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
            // 内部逻辑，：添加新的搜索
            addItemEnger: function(){
                var otitle,olink,oimg,oblank;
                otitle = document.querySelector("#iqxin-newTitle").value;
                olink = document.querySelector("#iqxin-newLink").value;
                oimg = document.querySelector("#iqxin-newIcon").value;
                oblank = document.querySelector("#iqxin-newTarget").selectedIndex;

                if (!oimg){
                    var uri = parseUri(olink);
                    var ohttp = uri.protocol?uri.protocol:"http";
                    debug("能否连接至google：",this.online);
                    if (this.online){
                        oimg = 'https://www.google.com/s2/favicons?domain=' + uri.host;
                    } else {
                        oimg =  ohttp + "://" + uri.host + "/favicon.ico";
                    }
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

                // 添加完成，移除添加框
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

            // 界面， 框: 添加新的搜索列表
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
                    "<span>图&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp标 : </span><input id='iqxin-newIcon' placeholder='选填，留空则自动获取' onfocus='this.select()' value='"+ oicon +"' /> <br/><br/>" +
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

                // 修改完成，移除添加框
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
                    //  存在编辑的标题，但与点击的不是同一个节点
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

            // 高级菜单，配置文件编辑界面
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
                    "此处有更多的设置选项，自由度更高，</br>"+
                    "但设置错误会导致脚本无法运行"+
                    "</p>" +
                    "<textarea wrap='off' cols='45' rows='20' style='overflow:auto;border-radius:4px;'>" + JSON.stringify(userSetting,false,4) + "</textarea>" +
                    "<br>" +
                    "<button id='xin-reset'>清空设置</button> &nbsp;&nbsp;&nbsp;" +
                    "<button id='xin-copyCode'>复制</button> &nbsp;&nbsp;&nbsp;" +
                    "<button id='codeboxclose' class='iqxin-closeBtn'>关闭</button> &nbsp;&nbsp;&nbsp;" +
                    "<button id='xin-codeboxsave' class='iqxin-enterBtn'>保存</button>" +
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
                    iqxinShowTip("抱歉，目前只支持chrome类浏览器",2500);
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
                    // console.log("此处会有个弹框添加新搜索");
                    this.parentNode = e.target.parentNode;
                    this.addItemBox();
                    // console.log(this);
                };
                if(e.target.className==="sej-engine"){
                    console.log("sej-engine 被点击");
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
                    // console.log(e);
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
                } else if( targetid === "xin-copyCode"){
                    // this.copyCode();
                    GM_setClipboard(JSON.stringify(getSettingData,false,4));
                    iqxinShowTip("复制成功");
                }

                //  点击更多菜单
                if(targetid ==="moreSet"){
                    document.querySelector("#btnEle2").classList.toggle("btnEle2active");
                    // iqxin-btn-active
                    e.target.classList.toggle("iqxin-btn-active");
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
                    console.info("start");
                    console.info(e.target);

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
                    console.log("移动对象 之前，现在: ", dragEl.className);
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
                        // that.online = "哈哈";
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
                // console.log(this);
                console.log(bool);
                // if(bool){
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

                // 以防不测，重新获取本地配置文件
                var getData = GM_getValue("searchEngineJumpData");
                getData.newtab = onewtab;
                getData.foldlist = foldlist;
                getData.setBtnOpacity = getSettingData.setBtnOpacity;
                getData.debug = document.querySelector("#iqxin-debug").checked;;
                getData.fixedTop = document.querySelector("#iqxin-fixedTop").checked;;
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
                    // 广告
                    "#xin-ad-pics{" +
                        "position: absolute;" +
                        "border:none !important;" +
                        "padding:0 !important;" +
                        "bottom:0px;" +
                        "right:100px;" +
                    "}" +
                    "#xin-ad:hover #xin-ad-pics{" +
                        "bottom:220px;" +
                        "right:200px;" +
                    "}" +
                    "#xin-ad:hover #xin-ad-pic{" +
                        "display:block;" +
                        "transform:scale(1);" +
                        "opacity:1;" +
                    "}" +
                    "#xin-ad-pic{" +
                        "position:absolute;" +
                        "transform:scale(0.01);" +
                        "opacity:0;" +
                        "transition:0.4s;" +
                        "overflow:hidden;" +
                        "padding:4px;" +
                        "bottom:-242px;" +
                        "right:-200px;" +
                        "background:#3ACBDD;" +
                        "border-radius:2px;" +
                    "}" +
                    "#xin-ad-code:hover," +
                    "#xin-ad-pic:hover+span{" +
                        "display:block !important;" +
                        "transform:scale(1);" +
                        "opacity:1;" +
                        "bottom:-148px;" +
                        "right:200px;" +
                    "}" +
                    "#xin-ad-code{" +
                        "text-align:center;" +
                        "position:absolute;" +
                        "transform:scale(0.01);" +
                        "opacity:0;" +
                        "right:0;" +
                        "bottom:0;" +
                        "transition:0.2s;" +
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
        // 目前只是为了给用户一个反馈。 - 成功了么 - 嗯，成功了
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
        // hashchange 和 popstate 都无法检测到谷歌和百度搜索时网址的变化，不理解
    if (window.self != window.top) return;
    // 下面这种方法百度一直报错无法使用，遂用定时器
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
        // /^https?:\/\/searx\.me\//i,
    ];
    var hashtag = hashList.some(function hashUrl(element, index, array){
            return ~url.search(element);
        });
    if (hashtag){
        var oldTitle = document.title;
        var newTitle = "";
        var timer = setInterval(function(){
             // console.log("循环中",newTitle,oldTitle);
            newTitle = document.title;
            if (document.querySelector("#appbar") && !document.querySelector("sejspan")){
                console.log("new");
                iqxinstart();
            } else if (document.querySelector("sejspan")){
                // console.log("已存在");
                clearInterval(timer);
            }else if (oldTitle!=newTitle){
                // console.log("不存在开始插入");
                iqxinstart();
            }
        },1000)
    } else {
        // console.log("普通插入");
        iqxinstart();
    }

})();

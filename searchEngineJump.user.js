// ==UserScript==
// @name           searchEngineJump
// @author         NLF&锐经(修改)&iqxin(再修改)
// @description    方便的在各个搜索引擎之间跳转,增删部分搜索网站，修复百度搜索样式丢失的问题
// @version        4.1.1.12
// @created        2011-7-2
// @lastUpdated    2017-04-09
// @grant          none
// @run-at         document-start
// @namespace      https://greasyfork.org/zh-CN/scripts/27752-searchenginejump
// @homepage       https://github.com/qxinGitHub/searchEngineJump
// @include        *google*
// @include        *baidu.com*
// @include        *bing.com*
// @include        *youdao.com*
// @include        *soso.com*
// @include        *soku.com*
// @include        *bilibili.tv*
// @include        *acfun.tv*
// @include        *acfun.cn*
// @include        *youtube.com*
// @include        *so.tv.sohu.com*
// @include        *so.letv.com*
// @include        *so.1ting.com*
// @include        *xiami.com*
// @include        *so.yinyuetai.com*
// @include        *pixiv.net*
// @include        *flickr.com*
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
// @include        *search.jd.com*
// @include        *search.suning.com*
// @include        *search.dangdang.com*
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
// ==/UserScript==

(function () {
	'use strict';
	
	
	function contentScript(messageID) {
		'use strict';
		
		// console.log(messageID);
		
		var runAt = {
			DOMContentLoaded: function (callback) {
				if (/interactive|complete/.test(document.readyState)) {
					callback();
				} else {
					var listener = function () {
						window.removeEventListener('load', listener, true);
						document.removeEventListener('DOMContentLoaded', listener, true);
						
						callback();
					};
				
					document.addEventListener('DOMContentLoaded', listener, true);
					window.addEventListener('load', listener, true);
				};
			},
			
			load: function (callback) {
				if (document.readyState == 'complete') {
					callback();
				} else {
					var listener = function () {
						window.removeEventListener('load', listener, true);
						
						callback();
					};
					window.addEventListener('load', listener, true);
				};
			},
		};

		runAt.DOMContentLoaded(function () {
			// 2017-02-28 弃用, 将在搜索引擎里单独设置是否后台打开,不再设总开关
			// var prefs = {
			// 	openInNewTab: false,// 是否在新页面打开.
			// };
			
			// 根据规则把搜索引擎列表插入到指定网站
			var rules = [
				// 网页搜索/////////////第一个可以当模板看
				{name: "google网页搜索",// 你要加载的网站的名字(方便自己查找)
					// 是否启用.
					enabled: true,
					// 在哪个网站上加载,正则.
					url: /^https?:\/\/www\.google(?:\.[A-z]{2,3}){1,2}\/[^?]+\?(?:&?q=|(?:[^#](?!&tbm=))+?&q=)(?:.(?!&tbm=))*$/,
					// url: /^https?:\/\/www\.google(?:\.[A-z]{2,3}){1,2}\/[^?]+\?(?:&?q=|(?:[^#](?!&tbm=))+?&q=)(?:.(?!&tbm=))*$/,
					// 加载哪个类型的列表:
					// ['web'|'music'|'video'|'image'|'download'|'shopping'|'translate'|'knowledge'|'sociality']
					engineList: 'web',
					// 给引擎列表的样式
					style: '\
						border-bottom: 1px solid #E5E5E5;\
						border-top: 1px solid #E5E5E5;\
						margin-left: 150px;\
					',
					// padding-left: 127px;\

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
	/* 					keyword: function () {
							var input = document.getElementById('lst-ib');
							if (input) return input.value;
						}, */
						keyword: '//input[@name="q"]',
						where: 'beforeBegin',
					},
				},
				{name: "google-hash-query",// 不刷新页面显示搜索结果的google
					enabled: true,
					url: /^https?:\/\/www\.google(?:\.[A-z]{2,3}){1,2}\/[^#]*#(?:&?q=|.+?&q=).+/,
					engineList: 'web',
					style: '\
						position: absolute;\
						left: 5px;\
						top: 150px;\
						z-index: 9999;\
						margin-left: 150px;\
					',
				 	// 	style: '\
					// 	border: 1px solid #E5E5E5;\
					// 	position: absolute;\
					// 	left: 5px;\
					// 	top: 150px;\
					// 	z-index: 9999;\
					// 	width: 80px;\
					// 	margin-left: 150px;\
					// ',
					insertIntoDoc: {
						target: 'css;body',
						keyword: function () {
							var input = document.getElementById('lst-ib');
							if (input) return input.value;
				  	    },
						where: 'afterBegin',
					},
				},
				{name: "百度网页搜索",
					url: /^https?:\/\/www\.baidu\.com\/(?:s|baidu)/,
					enabled: true,
					engineList: "web",
					style: '\
						border-top:1px solid #e5e5e5;\
						margin-top:0px;\
						border-bottom: 1px solid #e5e5e5;\
						margin-bottom: 1px;\
						z-index: 99;\
						margin-left: 121px;\
					',
					insertIntoDoc: {
						keyword: 'css;input#kw',
						//target: 'css;#head',  //覆盖掉百度自带跳转
				        target: 'css;#s_tab',
				        where: 'afterEnd',
						//where: 'beforeEnd',  //覆盖百度自带跳转
					},
				},
				{name: "必应网页搜索",
					url: /^https?:\/\/[^.]*\.bing\.com\/search/,
					enabled: true,
					engineList: "web",
					style: '\
                        padding-left:15px;\
						border-top: 1px solid #E6E6E6;\
						border-bottom: 1px solid #E6E6E6;\
                        margin-top:-20px;\
                        margin-left: 100px;\
                        margin-bottom:15px;\
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
                        padding-left:15px;\
						border-top: 1px solid #E6E6E6;\
						border-bottom: 1px solid #E6E6E6;\
                        margin-top:0px;\
					',
					insertIntoDoc: {
						keyword: '//input[@name="q"]',
				        target: 'css;#header_wrapper',
				        where: 'afterEnd',
					},
				},


                // 知识				
				{name: "百度百科词条",
					url: /^https?:\/\/baike\.baidu\.com\/(?:sub)?view\//,
					engineList: "knowledge",
					enabled: true,
					style: "\
						border-top: 1px solid #2B6DAE;\
						text-align: center;\
						z-index: 999999;\
						border-bottom: 1px solid #2B6DAE;\
						margin-bottom: 10px;\
					",
					insertIntoDoc: {
						keyword: 'css;#query',
						target: 'css;.navbar-wrapper',
						where: 'beforeBegin',
					},
				},
				{name: "百度百科搜索",
					url: /^https?:\/\/baike\.baidu\.com\/search\?word/i,
					engineList: "knowledge",
					enabled: true,
					style: "\
						border-top: 1px solid #e5e5e5;\
						text-align: center;\
						border-bottom: 1px solid #e5e5e5;\
						margin-bottom: 1px;\
						margin-top: -10px;\
					",
					insertIntoDoc: {
						keyword: 'css;#query',
				        target: 'css;.headTab',
				        where: 'afterEnd',
					},
				},
				{name: "百度文库",
					url: /^https?:\/\/wenku\.baidu\.com\/search/i,
					engineList: "knowledge",
					enabled: true,
					style: "\
						border-top: 1px solid #e5e5e5;\
						text-align: center;\
						border-bottom: 1px solid #e5e5e5;\
						margin-bottom: 1px;\
					",
					insertIntoDoc: {
						keyword: 'css;#kw',
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
						text-align: center;\
						border-bottom: 1px solid #e5e5e5;\
						margin-bottom: 1px;\
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
						border-top: 1px solid #e5e5e5;\
						text-align: center;\
						border-bottom: 1px solid #e5e5e5;\
						margin-bottom: 1px;\
					",
					insertIntoDoc: {
				// 		keyword: (function() {
				// 	return document.getElementById('firstHeading').getElementsByTagName('span')[0].lastChild.nodeValue;
				// }),
						keyword: function(){
							var url = window.location.href.substring(window.location.href.lastIndexOf("/")+1);
							return decodeURIComponent(url);
							}, 
				        target: 'css;#firstHeading',
				        where: 'beforeBegin',
					},
				},
                {name: "知乎",
					url: /^https?:\/\/www\.zhihu\.com\/search\?/i,
					engineList: "knowledge",
					enabled: true,
					style: "\
						border-top: 1px solid #e5e5e5;\
						text-align: center;\
						border-bottom: 1px solid #e5e5e5;\
						margin-bottom: 1px;\
					",
					insertIntoDoc: {
						// keyword: 'css;#q',
						keyword: 'css;#q',
                        // target: 'css;.zu-top',
                        target:"css;body",
                        // where: 'afterEnd',
                        where: 'afterBegin',
					},
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
				
				
				
				// 视频网站
				{name: "优酷",
					url: /^https?:\/\/www\.soku\.com\/v\?/,
					engineList: "video",
					enabled: true,
					style: "\
						padding-left: 10px;\
						border-bottom: 1px solid #EEEEEE;\
						border-top: 1px solid #EEEEEE;\
						text-align: center;\
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
					// http://search.bilibili.com/all?keyword=%s
					url: /^https?:\/\/search\.bilibili\.com\/all/,
					enabled: true,
					engineList: "video",
					style: "\
						border-top: 1px solid #E7E7E7;\
						border-bottom: 1px solid #E7E7E7;\
						text-align:center;\
					",
					insertIntoDoc: {
						keyword: 'css;#search-keyword',
                        target: 'css;.nav-sub',
                        where: 'afterBegin',
					},
				},
				{name: "acfan",
					url: /^https?:\/\/www\.acfun\.cn\/search/,
					enabled: true,
					engineList: "video",
					style: "\
						border-top: 1px solid #FFFFFF;\
						border-bottom: 1px solid #FFFFFF;\
						margin-bottom: 5px;\
					",
					insertIntoDoc: {
						keyword: 'css;#search-text',
						target: 'css;.search-box-bg',
						where: 'beforeBegin',
					},
				},
				{name: "youtube",
					url: /^https?:\/\/www\.youtube\.com\/results/,
					enabled: true,
					engineList: "video",
					style: "\
						border-top: 1px solid #E8E8E8;\
						border-bottom: 1px solid #E8E8E8;\
						margin-left: 240px; \
					",
					insertIntoDoc: {
						keyword: 'css;#masthead-search-term',
						target: 'css;#page-container',
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
		                margin-bottom:4px;\
		                ",
		            insertIntoDoc: {
		                keyword: (function(){return decodeURI(location.href.match(/s=(.*?$)/)[1])}),
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
						// keyword: '//input[@name="keyword"]',
						keyword:function(){
							var url = window.location.href.substring(window.location.href.lastIndexOf("=")+1);
							// console.log(url,decodeURIComponent(url));
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
					style: '\
						padding-left: 0px;\
						border-top: 1px solid #ccc;\
						border-bottom: 1px solid #ccc;\
						text-align: center;\
						',
					insertIntoDoc: {
						keyword: 'css;input#kw',
						target: 'css;#search',
						where: 'afterEnd',
					},
				},
				{name: "谷歌图片",
				    url: /^https?:\/\/\w{2,10}\.google(?:\.\D{1,3}){1,2}\/[^?]+\?.*&tbm=isch/i,
				    enabled: true,
				    engineList: "image",
				    style: '\
					    border-bottom: 1px solid #E5E5E5;\
					    border-top: 1px solid #E5E5E5;\
		                padding-left:0px;\
					    margin-top:-1px;\
					    text-align: center;\
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
					style: '\
						border-bottom: 1px solid #E5E5E5;\
						border-top: 1px solid #E5E5E5;\
		                padding-left:0px;\
						margin-top:-6px;\
						text-align: center;\
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
		                // target: 'css;body',
		                target: 'css;.using-slender-advanced-panel',
		                where: 'afterBegin'
						},
				},
                {name: "pixiv",
					url: /^http:\/\/www\.pixiv\.net\/search\.php/,
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
	            {name: '百度网盘',
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
						border-top:1px solid #D9E1F7;\
						border-bottom:1px solid #D9E1F7;\
						margin-top:-1px;\
                        text-align:center;\
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
						border-top:1px solid #D9E1F7;\
						border-bottom:1px solid #D9E1F7;\
						margin-top:-1px;\
					',
					insertIntoDoc: {
						keyword: 'css;#baidu_translate_input',
				        target: 'css;.header',
				        where: 'afterEnd',
					},
				},
				{name: "必应翻译",
					url: /^https?:\/\/.*\.bing\.com\/dict\/search\?q\=/i,
					enabled: true,
					engineList: "translate",
					style: '\
						padding-left:1px;\
						border-top:1px solid #D9E1F7;\
						border-bottom:1px solid #D9E1F7;\
						margin-top:-1px;\
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

					
				// 购物
				{name: "淘宝搜索",
					url: /^https?:\/\/s\.taobao\.com\/search/,
					enabled: true,
					engineList: "shopping",
					style: "\
						border-bottom: 1px solid #E5E5E5;\
						border-top: 1px solid #E5E5E5;\
						text-align:center;\
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
				        target: 'css;body',
				        where: 'beforeBegin',
					},
				},
				{name: "天猫搜索",
					url: /^https?:\/\/list\.tmall\.com\/search_product\.htm/i,
					enabled: true,
					engineList: "shopping",
					style: "\
						border-bottom: 1px solid #E5E5E5;\
						border-top: 1px solid #E5E5E5;\
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
						border-bottom: 1px solid #E5E5E5;\
						border-top: 1px solid #E5E5E5;\
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
					style: "\
						border-bottom: 1px solid #E5E5E5;\
						border-top: 1px solid #E5E5E5;\
						text-align: center;\
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
						border-top:1px solid #D9E1F7;\
						border-bottom:1px solid #D9E1F7;\
		                text-align: center;\
						margin:0px;\
		                top:0px;\
						z-index:99999;\
						',
					insertIntoDoc: {
						keyword: 'css;input#kw',
						target: 'css;#topnav',
						where: 'afterEnd',
					},
			    },
				{name: "谷歌学术",
		            enabled: true,
		            url: /^https?:\/\/scholar\.google(?:\.\D{1,3}){1,2}\/scholar\?/,
		            engineList: "scholar",
		            style: '\
		                border-bottom:1px solid #E5E5E5;\
		                border-top:1px solid #E5E5E5;\
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
        			// http://www.runoob.com/?s=padding
        			url:/^https?:.*?runoob\.com\//i,
        			engineList:"htmls",
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
		                // keyword:'css;input#s', 
		                // keyword:'//input[@name="s"]', 
		                target:'css;.navigation',
		                where:'afterEnd',
		            }
        		},
        		{
        			name: "GitHub",
        			enabled:true,
        			url:/^https?:\/\/github\.com\/search/,
        			engineList:"htmls",
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
	                   // keyword:'css;input#s', 
	                   keyword:'//input[@name="s"]', 
	                   // target:'css;.codesearch-head',
	                   // target:'css;.mb-4',
	                   target:'css;body',
	                   // where:'afterEnd',
	                   where:'afterBegin',
	               }
        		},
        		{
        			name: "MDN",
        			enabled:true,
        			// https://developer.mozilla.org/zh-CN/search?q=mdn
        			url:/^https?:\/\/developer\.mozilla\.org\/.{2,5}\/search/,
        			engineList:"htmls",
        			style:'\
		                border-bottom:1px solid #E5E5E5;\
		                border-top:1px solid #E5E5E5;\
		                position:relative;\
		                text-align:center;\
		               ',
	               insertIntoDoc: {
	                   // keyword:'css;input#s', 
	                   keyword:function(){
		                			var url = window.location.href.substring(window.location.href.lastIndexOf("=")+1);
									return decodeURIComponent(url);
								}, 
	                   target:'css;.results-search-form',
	                   where:'afterEnd',
	               }
        		},
			];
			
			
			// 搜索引擎列表
			var engineList = {};
			
			// 有些图标需要重复使用
			// engineList.icon = {};
			engineList.icon = {
				google:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD1klEQVR4nMWXbWhbVRjHf+cmTZq3hU67tcvmaql2L2q3FdTqkEodTESZ+GEKExX3YTrRyhCmMnDgCkP8EHwBnV+UMRyIiGLZLG7TMq22MsegOErrSmnarFub0CbN6z1+KLnNzb1JbmLF59M5T57z/H835zlvQkopqcCklBQbIoRACFFJOoQVgJyooiiWkqqqahmmJEClwtWAFAVQVbVq4UpymQIUG5CdmiR5/gfSl4bIjI+hRiMgJcoqP7aNzTjaduDs2o0tsMEyhAHALDA7HSL26Qck+89BuZIRAueDnXgOvIatYV1ZCB2AWUCir5eF4HFkYrG0cCGHy43v0Ns4O3eVhNBaZsUW//Jz5o+/U7E4gFyMkxr81eBXFEW3jO35APnVmujrJfbZR6bJ7c0tOO59AFtjAIQgG5okNfgLmdERLab2sSfxdR82h8vTEnLJdOLZqUnm9j+DTCZ0A22NAbzdh3G032eaODU0wPz7x3Du7MR78JBpTCGEkFLKwnmJBV8l/t2AbkDN5rvw9wQRPl/pxPEYwu0pGQPLtWBYBXJxjGz/FuLnGkkO1QOgrL6FuhOnUPx1ZRNXakrhNiDDp8Gm4t41iWfPNYRD4nnx4H8iLqXEXjj/cvaC1nZsjmAPeHF07V5xcQ3A4IwN6/q2O+4HuyFMs66emGXBI3ucdG7R5zLujekZXVe4WiwLlLNQxLiLrsxpY9FSGSsANfW6royPGEKqNY/TeCwbJld4tyJnw1p/OjLMGjVDjWJeBz++Zb7m/55R2X9Cv4Wv9RsBlMLLgqh7WGufSa7n6VAzvdd+MhUpZb+PZg2+Oxttei0hTADW7iWNnfcW7uHo/A4S2Pj4yiluJiKWxRcSkq9+S+t8t92q0FDwDwghlmpAVdVlp6uJTzxv8nWiSfPNJqJ0/9xDNDVfVjydhXe/STIb0xfco236KcxpKjmSfNt79wHc9lqd76+5MfadfYP+0B9FxUci47z0/WkGx1I6/2qP4PHtegDdaZgjyj+Qzoz3c2QgaCrUtCpAR8N2NngbEEJwffEml64Pc/nGVSQSW6IFd/gVRGZp+z76VC07W5fnP19LAyjckgFOXv2W4J9fFP3iUiayPlzhl3mhvY3nH3LofsvX0j5ZCKGrBYB9rU9wrON13HZXxQCKPc6zj0wZxHNXdU3XyqV0On6DDy+fpG/iIqqFh1T7mq10b3uOTXXNBvGSl9JSgQBTsRn6Ji4yGL7CaHSCuWQUKcHv9LHRt45t9ZvoWt9Ba93thrGWr+XlBlRjFT9Mcva/Ps3+DciKPU5LwZgmq+J5/g/N4OUGvdHwnQAAAABJRU5ErkJggg==",
				baidu:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABpElEQVR4nKWTvUtbURjGfzcf5prqEBFMBpWCHUIVISKRoIgQ3QQRRNBM1UHqX+AiLg4uQpeCiKigIkIkf4DgYAmVQBDEL2iHVIsfaGpi1Nxrck+HaGLMzSB5xuec9znP+5z3lYQQghJgKKW4qMDW9gPNbaf4AwkA5hbiTE1HSWuFd016AhubCZ6eBEurdzgcJr59vwXA45bp8VqLO4j+yzxhtWboKpuB8/NU9vyF13UQ3lPwjVzibpWZnLAhWySGByupqzWxG1JoaizjU4OZ4G4Sj1vOKYhnzMxGhdMVEU5XRPz6rQo9dHSfCacrIlbW41ku68lhz5iRLRLV1UYOjlT6hy4Y8F1w9jdFUhFc36QBODxSC1sYGqzEZjPwsd5MLKbxZeyKu0Qmk9HxK9YW7XjcMqGwgrcrF6T0dpCub9L4Ri75c5p6TdP0uYzl+Rpki1T8F2JxTbcYYP9AZfRrzpWugD+Q0C1+QXhPwR+4Ly5gNufb04Om5a9O3iT29X5gJ/jIj2CSuloTne3lGI3wM6RwfKLS2mJhoL8iT6AgxPei5G38Dx7mvwaRBxETAAAAAElFTkSuQmCC",
				bing:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5ElEQVQ4jZ2Tv0sbYRyHX5Uzl8bLVNrSToUOHbr0T2gHqf1Baf8AvcUruNcpd5e75BK9H0Q9gptCogZKh6J2kWtDhkpxkmCwOIidijpYECoI5unQNo0QauwHnuUD78PL9/2+on9w0ItrWiSraiSNjER9w8NRTFUjuQvimhaJuKZ9ThaLJHyfGzMz3AxDRC6H7LooQYDi+50JApJhiJBVNVJ8nx7TZKhU4svhIYX1dW4XCsRsm4FstjOOg+K6fwXCMHiysMCfvKhUELp+OcHjcrkleL60hEil/l/wslKhxzAQuk6vaRLPZC5/g9dra5jVKvdnZ5FtG5FKIVkWSjeCB3NzvFpeBuD7yQnvd3YYW13lztQUsm1fLHhUKnE1n6e+v0973mxtIaXTJDKZLoY4Ps71yUneNhqt/uPuLrJlceUiwcP5ea5NTJCt1fh2fNzq321vI6XT/xacNZuUNzdpHBy0Dp41m1Tqde4Vi/RbVucZPG1bpPbU9vZ4triIlE7TZ5qdXyFmWdzyfYobG/w4PQXg69ERYysrKI6D0PXzu9Am+KAEAYrjELNthGEwVC5jVqvcDUOErv/6E45znlwOxfMQ8ujop2QYorguiueRcF16HQeRzSLl8wz87hXXPY/nkZye5icfi28JEi0cegAAAABJRU5ErkJggg==',
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
				favicon: engineList.icon.google,
				// 搜索引擎编码（默认utf-8）如果跳转后乱码可以填写 'gbk'
				encoding: 'utf-8',
				// 是否新建网页搜索,默认当前页,如果需要在新的标签页打开 增加下面的属性
				// blank:true,
			};	
			engineList.web[1] = {
				name: '百度',
				url: 'https://www.baidu.com/s?wd=%s&ie=utf-8',
				favicon: engineList.icon.baidu,
			};
			engineList.web[2] = {
				name: '必应',
				url: 'https://cn.bing.com/search?q=%s',
				favicon: engineList.icon.bing,
			};
			engineList.web[-3] = {
				name: 'DDG',
				url: 'https://duckduckgo.com/?q=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADiElEQVQ4jXWTfVDTBRjHn+uyi8KAbWz7/TbeNzeUeNkLCljGS3hrspDUsC7vqivz5cI/OtQ7vSxNrpvdkQx0k10M5FYgztECgfOoM7kurs6IFx1ja7xsgMiLAySDffvDtLrs8/fz+T7PH8+X6BFIQymxOGb1WyWy8COH13LL9svCSgtEoTt4RMyj5h/CIRKfSImsMKu4NrOKZ6vZwDafz2Tbajaw9ur1wibzemHj+7Lwo0S06j9yYtgqRX0m216lFDS0FCR3Obcl3/FvFmJCFwt/0Rr0aOPGrVlsuymduVShEljDiCL+3hxCUbWZTLtBwfuqXyeZCThqsTTUj0BrPUZ2psGTE4mxQilmt8twLT/WVaUSXvgsjW8hoseJiOhYUuTpSqWw8YYmPjC6JQ5TtXqsLAYAAMu3fLj9eSk8eQw8OimmXpGjMzfWaU5nv94RvfodkoQ+se6cmm2+tDGqe1Ijxm+HXsd4IIi5+WUAQBDA6MRdePdq4c4Xw12wBlNFifginW0tTxN8Sa9Gh+02qlh7v0ayOJTNh8d4Ev7AMq4P+BAM3g/4rm8KvdVn4H6exWCOHMMaOTqzY1wGJXORDkg5H1ermZYRnQyubCEG9R/Av7CCsnOd+P3eCgCg68YCbnZ0YGyXCLf0AowfjML1PMm8UcHaqVTOO1WjFnWMFMjgyhWjZ48OC3/cPx9YRnD6POArAoZSsfT9k7jTEIHR/THoyZXerVYzLfReQvjRs0qRw7NFBmd+HH4pTMXk6Mhf/jTg4WDGRBjex4f33Th43ojHoEaG7nzJXKWSsdHLwmd2VSmE9h9flMwNaqT4NSca3mudeMCs4xDGj4fgdiUfc1YOJssF8OpkcGTF9FUomIvEIRIb0li7RSX+dqxAjt6NAgxYDA8Dpq116E+JhHdzPJxaKfpyZBjWymFQsPZPkvgWIiLancA9Up7C2K5sivd6XxCh98MS+JYmMDzvxqJ7AN2FctSVKtC9dS18LyWiXh3dZVKK257jPaV98IxPn0oWNpYlCera1cxN/55itLpt2H45A3uvbMObjiy89pMWP7ydioZk0dXyFNZWIuGW/asLoUR8fZLQenod325MlzsuXLVMHnMeRIXrLC67G4OHP8roPZ4hajI9y7YdSOB9+n+FfKw4KmLfSUlEbdPOvJ9dJv3sUnMTZmqM9yypsd+ckHLNm7ghW/8p/Alp3+8i87OHIgAAAABJRU5ErkJggg==',
			};


			// 视频搜索列表
			engineList.video = [];
			
			engineList.video[0] = {
				name: 'youtube',
				url: 'http://www.youtube.com/results?search_query=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAByElEQVR4nO2WTy/EQBjGf1M9ES4rQSzdlkVw2KtIcMBdfB1fQ3wWXEQiTtgI4k8k/gbBRdzYjkO33VUz7WyWuuwzeZPp9O37PH3ft52BFlr4Z4j6i7vJUZkFaf7oLOKNJjcTI5mQhxg8PheRgKvxbMlDFE7OhQ0gZTL/p9+8PtsSynXrcqwofQlJJgmsc2k5mjdqqriXY0Vp+ylvDxC6yM8PiqcXPL688DY91VAGfNQ8lpQBgakB9HZ3M3J2QcfqWkPPqsxKS39QgtqoR//8PF3rG7SvrHzzUQ1dbLMSxEpRjz7XBdflaXaO18UF8H1lDKEpgW3S31EPJDj3OA5sbALwVCrRlsvFFagF+CafmOZhpQiAchmAh0IBe8gDQKoTg61Z/84fZsBMBz2Ow/P7O22eV8uextdO+wlVJQRBDBUcekM/1uINHAkwq4CsCkh2Lrue9p42AyZfgSVEqESJgwTiEDoewwwEiMfYL6QT1wSo122TuspqF4aue94w+BVjctD3j9jNO6kSop1MCPNOjEG3owqAnf5kEbqttFkB0/fXZueBj8rfnVeiV9vuG8z0VDTzcFM7koXY6h3IRMTc423zNW2hhd/CF3jZLaCW4/+vAAAAAElFTkSuQmCC',
			};
			engineList.video[1] = {
				name: 'bilibili',
				// url: 'http://www.bilibili.tv/search?keyword=%s',
				url: 'http://search.bilibili.com/all?keyword=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACTElEQVQ4jY2QMUsbcRjGH7n73z+m4g0OblkDpkOgRT/AKeRCYvwHzxDBBOLUzU/gF+gkjlLoKlTBxQvxCqe5u4iFkw6CATfddLPSCIWnU8/E1rYP/Jbnfd/f8ALPIqUsj4+Pe1LK8lCXBeAB8AzDeP38JokQ4u309PSP2dlZmqbZByANw8iZpvm1UCgwn88znU5/+pvgzcTExGB/f5+O4xDAewC5hYUFPj4+cn5+/huA+osCADAMw8lms8zlcpycnPySTqff2bbNVqtFALWX7kpSSk8I4aVSqVDXdY6NjdE0TU5NTVHXdQJgKpWKhBCelNLTNO0DAAkAlVar9T0MQ/Z6PYZhyDAMGUURgyBgt9tNul/96ekpd3d3mclkDqDrenR+fs7t7W0qpVitVhOUUgnD/fLyMm9ubri2tkYIIT73ej0Wi0Vubm7S930GQcBOp8N2u50w3M/MzNB1XTabTUII4UVRRKUUz87OuLOzQ8dxeH19zeFsbW1xZWWFd3d3rNVqPDw8ZKPReBJUq1WGYUilFAHw+Ph4RGBZFgEwjmPW63W6rjsqUEqx0+mw3+/T930OBoMRweXlJX3f5/39Pcvl8p8F7XY7OdjY2ODc3FzCxcVFMisUCr8LlpaW6Pt+shTH8cgTHx4eklmpVHr6ga7rQRzHrFQqzOfztG2btm3TcRzW6/WExcVF2rbNYrFI0zTZ7Xa5vr5OaJr2cW9vj1dXVzw6OqLruv/k5OSEt7e3tCxrAACvMpnMwerqKhuNxn/RbDZpWdZA07TKT3uI/eaBFtmBAAAAAElFTkSuQmCC',
			};
			engineList.video[2] = {
				name: '优酷',
				url: 'http://www.soku.com/v?keyword=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABnElEQVQ4jZ2Sv2vCUBDHv4OFYEAeRrFihjeYLl3eILRDhkcXKQg6tWAHs4W6WBAq2CWCFLe4CS7ZOhWyuHTK4uDmpKtD/4As3dOhOYk/SrGBg3fc+37u7vsCAOztPud/DXhEseoUN7cX6Qbi7/Yi3Vh1ihuqT+pZDwADAIyqzE2KKWatfEDiY/W5XVgCAGatfEBdm0K1mkK1+pI5NAF1jgWsKVSLIE2hWr92GFWZCwCUJ1ea24Xl14BHfckcAIDJFTmpZz0qUJhckX8CyINRlbnnDDw5kckVmVzB5Ip8vMo87ayw/wIUnz093AceMxkAWF8yh8z87Onh233Ov8yfCbpgckVSo7ldWMa7s1h+zjV77Gfunl0SKNcNS+t6AUqGUG8enuhMdc0e+5o99gEAqXJF6tN1pE/XEYkpz9Tajtb1AjoTgOqpckXuAJLiorsIUTLESYB9MQD8C5B/eV+SSScBNHvs70MIwFpD78CzkiEOTGStoZcEZmptZ5t3vaDoLkJ9uo4Krx+bn3lKhtjuTT9GDImfliWhW3Hs0Tdk6pGCP1WKswAAAABJRU5ErkJggg==',
			};
			engineList.video[-3] = {
				name: '土豆',
				url: 'http://www.soku.com/t/nisearch/%s/',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABnElEQVQ4jZ2Sv2vCUBDHv4OFYEAeRrFihjeYLl3eILRDhkcXKQg6tWAHs4W6WBAq2CWCFLe4CS7ZOhWyuHTK4uDmpKtD/4As3dOhOYk/SrGBg3fc+37u7vsCAOztPud/DXhEseoUN7cX6Qbi7/Yi3Vh1ihuqT+pZDwADAIyqzE2KKWatfEDiY/W5XVgCAGatfEBdm0K1mkK1+pI5NAF1jgWsKVSLIE2hWr92GFWZCwCUJ1ea24Xl14BHfckcAIDJFTmpZz0qUJhckX8CyINRlbnnDDw5kckVmVzB5Ip8vMo87ayw/wIUnz093AceMxkAWF8yh8z87Onh233Ov8yfCbpgckVSo7ldWMa7s1h+zjV77Gfunl0SKNcNS+t6AUqGUG8enuhMdc0e+5o99gEAqXJF6tN1pE/XEYkpz9Tajtb1AjoTgOqpckXuAJLiorsIUTLESYB9MQD8C5B/eV+SSScBNHvs70MIwFpD78CzkiEOTGStoZcEZmptZ5t3vaDoLkJ9uo4Krx+bn3lKhtjuTT9GDImfliWhW3Hs0Tdk6pGCP1WKswAAAABJRU5ErkJggg==',
			};
			engineList.video[4] = {
				name: 'acfan',
				url: 'http://www.acfun.tv/search.aspx#query=%s',
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
				// favicon: 'http://www.nicovideo.jp/favicon.ico',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAASUlEQVQ4jWNgoCYwMTH5b2Ji8p9ceZwKidZIsY2kYhQDSAW0MYAUg8h2AbJltA8DWGiTZQB6lJHlApK8QFFCghlCMMmSoZYgAAAvUMVwhox/egAAAABJRU5ErkJggg==',
			};

			
			// 音乐搜索列表
			engineList.music = [];
			
			engineList.music[0] = {
				name: '网易音乐',
				url: 'http://music.163.com/#/search/m/?s=%s',
				// favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB/UlEQVQ4jZ2TPUsjURSGhxm4ibGRaJcioEVKuwj2wcafICgIomJj61amENdqbeyMChIsFERBbVQsbMRGBKOdKAScL2M+djLJnftsMZglJsKyF251znnue895j6Zpmsjq+vqDYTimEPzLLRiGm9X1dU3ThLas67++TY7F+L2xgapWkc/PlGdn2+JLur6qdXu5ND5O/fCQ8vw8AP7pKc27O1SphBmNtvIeDMPR2op7e/FyOQCU41BbWQHASaUwo1GsgYEOlW2Az2JvawsrHqeazYYKjo8pT09j9fV9D3jPZACo5/OYQmAnk3w9wesrbjrdHVA/OEB5HnYigSkE/skJSIl/cYGqVPiYmCCwbZTrYg8OdgKCtzf883NMIbD6+0EpvJ0dKouLALxnMrijoyAlXi7XCUAp6nt7ofxEIuzF5ialsTEAynNzmELQuLoisKwuCopFGtfXrUDz9haaTZr39yAlzvBw+NX9fQiCToC3vQ1SYg8NYQqBk0qFjTNNylNTYUEkgiwUkE9PnQA3nYYgwD87w+zpCXvxZWwfk5MAVJeXu/ugtroajvLoCDuZbDNYZWEBfB/5+IgVj/8FtFk5EqG2tgZKoTwP+fJCPZ8nKBYBaN7ctMbcsnK3ZXJHRvB2d0NLuy6Ny0vKMzOYsVhb3g9d/6l9rnPBMNz/Wec//7qAp1Pb2H8AAAAASUVORK5CYII=',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAGF0lEQVR4nK1XSW8cxxl9X1cvMz0LZ+FwGZIjU4Y2G1kMSaAAH5xLFCCXALGTU46Bz0Fy8A8Ikpvhg/+Bk4MBI0EM5GAocRApgBJDkbwQshjIorgMzX1IzkzP1l39fBiyydEMRSrWd+kGvqrvvXr1qvpr4DkHSXneNU8GXfZm3nvzF3w4nmE1meTiSJF/Ll3kaeY+F7bLudGBYCoUuA8/Rqbw8rE4xrcF/yj1Qg+4iERPX2k8vvzaU+efioDHPc4WC9xJZblm5yLADZKlZA1FrwbPDeCYAbZUHguVDnbzChAbU53cs6/qaGzFpuklhrkwMsKF3CQXh9J864fXIxLzo8NcyY/w8ejhNlDvkh65/Ol/uEkWn1b/2L0haX0xPd7J1wChgh1qtCdzKCzU4dSXonlfZwtsKwtjDRPxxtIze2rgFrC8eaGcy3cSje6i/FgAxsYx8dn9HnAA8I0QscCHZ/rgZvnCcyFQvvTSHMSCEwCeqbH6k9cxsvapiNl12IGsZZKaCQSGgZZFzH73+3O8eZdLZPy0BPokuzF1nmf8TbgdGyKCiXu3PpMz5195ctwHr/+UP/j4Fgx20FDxruthwlc+UmEdC4kEvj57DVf/8aFbEmmeikCLLbJwDtUgwE4shP2z6zj77h+iMSTlvq6H+eJFBEEAEQHJ6BlCoOCDMAEAbRMIGwas5dvZ6ez07okEtosvshLWkPEMhG4So+tf9Sm0mC3RkPZhgX1wANAGYFtxIOhAaw1FoOYESFgOJuYfQKyhvno9HvAbu4j73f0cBP5lcYwW2tDKRNM20FQNTHxxE4pAIDEQgmZLY3xjxZrfrcEXQaplAXWNhdKlQQIcErjzu9/Ss8xoVfuS9xDMNoiOApTuILvjoLBRBUYm8a/pKaTbPhIdQOk6RCR4LWxI6cE9hLYBGIJYO8R64cW+KzsCOPv7d+GEAmgTa6/OHBAJD/J/S09TK4FJgRE3MVx7jJTW0OLg5zdvo+5oNB2AoUTEZbQomfVZxP0mmsqB1WqhzlUOJOBbPsxQ4OomLn/4l77j+UIiUgWaJirWoQ9gAoFdhQoIFbPx13OX9EEqKXl5lJlC3vOxEw/hDV8brEDbUvCUgm8KRKRPqry3FTn+YSWADRXlOrYBay8JGAKDwLWdVs/cq4uzajvVgaOJdth7IvtWeuDoJ8NzVZR/KWVBwYSIQETgGQEMKxPlVUc/2ZhwpFEDEJ0aq4+AsgwEyocdqoFdTXN65rCaCkF4ADXqBrEBBwlUo/yGsEdFEeEeU1G+7c1f7yOQqQDpToAAJlbfeTsy30Gc//dHcrCChg6wnT6Dty6fxwdXXoUVG0bV1pF6+b0HfQoaporyjthbEbmDlzmMMJG1IUYAAJjcXutRYYmMT738o8b66icIjHjPDXjwbJshCvYUhsr3+hRczY0xAPdr33FFSs0eBS50ynCCLstBPiiJNOXLG7KQPjcwLyJIJ4sDwQHA2Tdf1zelyIkRAbFtCY1D9/69dHWgG2cW7qjJ7bnsZCWEYghLgFYxg7GNWYzMfz4Q/NaP3+CemYDSDnK+OWhI99bj+39iOT/G5dwotzK5U3W1AEBdOXZss13h3QvjXMyWuDQ8xs9vvN/bQz45oYIcK4UYUn6IpkkYm2tP/ZyeFHOxApOJ7hGOtw3kNr+CxN0It+8eqHPbdVs+mmaXaHXIbvy/4NXSDJNu950kcsu3sRIzLh4d00egJNL85/degRt0MNS0kHLyoFEktx/98rTA9MhduNyrL4AwULU1wj0L25kpTErsfycXIK3t37zJB4U8K6kCl3JnuZ5wuWOl+cdf/frY/f7kvzfZlnFuFItcyxS4nBtlOT/Gpjt57JyndrHUddaGJlB1ui2eEOj4LeiUIFkzUIsJqEOkKKhKC0kj3XOMXT/EvLZxxSsbg74vwAk/JqKSkq7vyb4qqFsaMRVDzTBBEzAhcEShZlkY9t2+OyR3/657tbEix4GfqECkBGkAy86jwpVG2icgAbRhQWmBCoGaAwy1O6g6gKUyGJ+7l0UmUz3aT3wrAkeIWCLikzTQXjmH2ZU5OAC+M+4evd2eJb4BbtLzYTTAjpAAAAAASUVORK5CYII=',
				// encoding:'gbk',
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
				// url: 'http://so.yinyuetai.com/mv?keyword=%s',
				url: 'http://so.yinyuetai.com/?keyword=%s',
				favicon: 'data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC10lEQVR4nH2QX2iVdRjHP8/z/N73Pec929TZwmrdtEltOupCTGZ/bMbqIopVjGqQwSS7iBGBCV0EgTKsROiP2aIu+ne1AodFlOkKyiLUi63QrDCULoTcVs2d857znqeLMxdB+IXvxfOH5/l+v9w3mvqhM/t8YHeT75vc6qMfD/i9o0U/cnbM79kV+/YPev3dY8/4Ay+2+GdnXvX7X2j2h/e2+cHTL/nA7uYjYWRoD6aBdWv66O5cj4pRzTNEhMG7Ruho76Fay1jR0kYcEp4dfouFyjx5vUaeVzfJg3uW+bquzRw7eZgoRFSqFRTj5p5+vp3+lGpWpq31Gub+vkBPZy8nTn1JrZaxtmMDP5+bQs2MEz9NsjJtZ3jDGDde1Y8afP/j55gahUKJvy7OkpOxuriZ4fVjJMUSv/7+A6qKqgmrr+jl9W1TdHWsoee6tTy28TnMBF1kLhnvP3GBwb6nkFXfsOXOLcjS3IS7u0cAGP/6ZULs1HSOrF7BTDAT+jufpFBMmD1/EWoJhWKECo0nGhQRB0DFKOd/EiWw9Y4daFDMAo9u2gnA9oluTIQQFA2CBkXNFITGARUOHH+HuODEaY0srxCHlCQ1yvM5HmpEkRIixazBoGZcgoiSJAXipFEP3jLExtbG9/2Ht6GmWGzEkaFmjRCDKrooQU0Iqrx96A2SArSvWsbKK5vJsgpTMxMEVSwoFilBLzH8a0EENChJSFjekjJfhgU5y8lT50iiFIDIhMikkYEuZjD5234W5nKmZw4uedv70WuUSgl/2DhvTj+y1J+dmaeWgUUBM0VGxjvcWRJxWfzfXuhq76X72tv58OguBnufR0T45Pgr9N/0ON+dPsCtNzxENc9476sdDN02yvm5X1heupo4FBk/uhNtKrbi7sRRkTpVHKcQp7g7pUILKkrda4QQ4V4nTVZQsBT3OqqCPD1x/Re494n8V5y7c/me01QOyT8DBfBJpwjHJQAAAABJRU5ErkJggg==',
			};
			engineList.music[5] = {
				name: 'QQ音乐',
				url: 'http://s.music.qq.com/fcgi-bin/yqq_search_v8_cp?&w=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADMklEQVQ4jY2TbVATdADG/3cBDgkNN2QyZWMhoKQwtLIyQ/DgaPvAAUVddUjU2UUdd3Z1vmR2B3VxUWhJqyBS0vAlDo7VImCWsPM4KcC0BtgYgzFjzcmY42Uovz7lnZ3n+Xx+fs+X53mEuDvJ1E+G7L5LrwjaqFmed6D8ibqaU6mdpd8s78ozLrny6M7FvUKIkDuSccrwRyy/Vg14ffUcdmt56aKcp87cR/a3S9C3rsHavcG2Pl6ScVtYs06ePePpmMXXQs/km1Q4tlDQJiOrPpw3GlR4/9JyfSwd34UH5rc8GPL0LXBoqFh11WmYXPC1sHC1lsnxfZRZNLzbloitL4fZoXwCl3TMDaXjP6/hsil6WhouEm8GfFyeU7vgbeaG+3OuT1Qwb99J9wUdr55O4FJvJtO/a/H3Z+HvS2OqW4PHFEPNW6GN//GLPMOHfPOuagLj+wmM7WFmoJhr/fkc6XmMyva1TJ3NwNuVxuSZzXg6NLgMSuwnlwaEEBFCtjQ4dW78IHP2t5m1ljBj3YH/z2K85ixGTI+zz6yh58dU3MZNuL5/iImmZJzHVYwfW4YySqQLdYxk2/TQbvyWHfgtz+MfLGDGVsKVjnRchof5uXUD77UmcPmUBufxZBxHkxitUzJaKyVJIfKFTBa80XtuO96eAqb6c7k2kIt/5FncYyX8NFDE4T+0lJoTaWuIY/TrNYzUxGOrXsXwp1JipGKbEEJI7E1b/f+0Z+ExZ+I9r8PhLmLM/xpn/36R0l+SeO6HFbx+MhLbF3EM69VYDyqwVETMCyGkQggh3i9eWe/Qr8ZaqeBcUwodzjw6HTmcHtFR99tm8uojyPwqlL4aJbYvVQx/puDQC2EtN2uUSIT6YlWsz/aRgoY6OYVGBbvaV3PAnMIHpiT2t8ZR0hzJ4LFYRo+qGNSvmI0IE+tuGVOqOiTXUrky0FUVRXbtYtKqF6HV38srJ+Tsao+m2RTLhDEBR+P9N9LWBxfeds7qqKCMznfk9u8+jOSZcglby4LY/kkYBoMSl2kt/UdUzmT1Pbo7HkoIIdkUH1xYWbTsRMteea+xLLqvujSyMT1F8rIQIuz/5n8BdBDOUVi5DnwAAAAASUVORK5CYII=',
				// encoding: 'gbk',
			};
			engineList.music[6] = {
				name: '百度音乐',
				url: 'http://music.baidu.com/search?ie=utf-8&oe=utf-8&key=%s',
				favicon: engineList.icon.baidu,
			};
			
			
			// 图片搜索列表
			engineList.image = [];
			
			engineList.image[0] = {
				name: '谷歌图片',
				url: 'https://www.google.com/search?q=%s&tbm=isch',
				favicon: engineList.icon.google,
			};
			engineList.image[1] = {
				name: '百度图片',
				url: 'http://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=%s',
				favicon: engineList.icon.baidu,
			};
			engineList.image[2] = {
				name: '必应图片',
				url: 'https://www.bing.com/images/search?q=%s',
				favicon: engineList.icon.bing
			};		
			engineList.image[4] = {
				name: 'pixiv',
				url: 'http://www.pixiv.net/search.php?word=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACaElEQVQ4jY2TS0iUYRSGjwupXYsIAqFdDl13tclNd6WgZVQULZrB6ddsbhA1FwkyNQOjCMz805nxMiM6ajq/OkjZxQElLS0sK6NQI7QkCCrTnhbfmBMatXj54PDxfO97zvlERERM245IlqbLXut/StNlj7VM0kzbRdZlHBVfJ+LtQDzGgtwGci6KuKN/1ueVH0Nc9bMi+3KD4u1AnGHEHkK0IHIyiNhDLD/TQIozrGpaEHGE1D1nGHGGEF8nIpnZt8QdRaxBUh0hDvl70HtHaR4ao/XZBLHn72kcHONwoAc5XYucqkFcCYjHQGSHRRdXC8eCcQbHp3kwOsnxQBxTQRurPBHSL7Ria3jE568zdL/6wGp3REHmASv3a3rkxRTfZ+cAWHsxipyoVK/Z69RpriK9oI0fcz/pH/vEMkdIxfUYSHlFhd40Mo29aQCATZc6kNyapKxhZdlchaPlMQCW+j7EGkg0s+SqnlZ8F0u4D4DNJUsAnGEkt4b1RQYAxvAEolWrCaVmaXqKsxlngv5XQF4taedvA9D39iOSV6sAssuiiy2C618ArZqtpTEA6p+8U2N1RxHZa9XF3vQbsKG4fTHAFkLMVfj73gCQVd6tIniMxYAtpTE1BWtAKduP5FTjbR8C4Nr9l0hOddIeJAD2ZjWFh6OTlPe8xmcMYWse4HLXMIPj00x9+YYt0q/c2euSAJnZlckOdl6/w4GybrztT7lyb4TCrmEO+uOsONuoHCWvswJoleJsxZFwYCoyEHPVQgRrQOW11S1ubH4MkTUbd4tWM1MYnwAg42Yv4mpZ+gcmyxdDrDcmfgF4QGAxnLBCrgAAAABJRU5ErkJggg==',
			};
			engineList.image[5] = {
				name: 'flickr',
				url: 'http://www.flickr.com/search/?q=%s',
				// favicon: 'http://www.flickr.com/favicon.ico',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVQ4jWNgGAUIIKBqwKCfUMSgGZXJwCklhy6twSCoW8BpUZTFaZIjz8CviCprXtbFkHX3PxynXPrGoBIQC5Ou57Fv/C/Z+B+Gf4jV/szgMs6EyMq7BqJoRjaEQ1zRmUXRFVkzsiEaDIK6DAwuE1ZgNSDr7n8Gvbj8Wfy+c7AZ8F+y8X8tl30dA4PrlNU4DdBPKFrCH7QUlwGNPE4tDAzqoclYNaff+MMgoGoQwaYdhcsAGxY5G0g4eExZh2GAUVY1LBCX8wevQNfcyevShRoTim4hDHZNMxls6yczSJjao0ejP5ta4Axe35mT+DwnO7MoupKfXoYfAABPvsL2GuU3QwAAAABJRU5ErkJggg==',
			};
			engineList.image[7] = {
				name: '花瓣',
				url: 'http://huaban.com/search/?q=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC1klEQVQ4jYXOyU+TeQDG8Z//gIkxXogxXky8TTIeRhMzcSEdoKW0SIFibYuJLFbZVGyxlLbQFoqoBEhEBSlbA4xxNwq9zMXMeTLO0b4vWOhGoSKBUfHrAZdEEZ/kOT6fPMJtNLVPelpD92yNobv1ttCd2vNTI5aqhx0lxpv6/ftNO3fs2LN7+/a95Qd/r75VZBgPGsyTE0ZzaMJ4MvTQXBYSU772v/nrOdx/zIeJe6wF/+Td4CjvAqOsdl/n3xNlqf+Kjellh4dVfycrrVdY8XWw2noFOnoQD5yuEE8mWQyOsxAYJdU3SKovQMJ/lZmSUiK5OiI5Bcg5BUQqqom7fcScXuJOL288lzcAAsMkr/UwXVyKpMxHyitEUuqQFBrCmbnMmMqIubzEXb4NgMEgqdtDRMqr10d5RV+BrHwkhYaXh3OYKa0g0dxG2uNHjDU0PvoCjIwT93Uga/TIGv33wB9awpkqXh5Rkqi5iORoeSM6LZbedWCCheExIpZzSOpiZE3JxoBCTfhwNvPHDIwbzCGhP3TItPb4GYtjd0jdHGDGVI6k0W8OZOaSVORxYd9vzSJj27Zd8sDwwsrdB8z33GBaX4qsPf7zBwUGBtX5j4QQQnRVWvp5OkWy6zrTRSbk/E2AI0qkbC3Js+d5cbomKYQQYndGxt7ZoZH0cm8/8o8AhYbwURWyupDZs+eIXbATr7UiPqcsW3Xmfd8QEZ0RSV2EpCokrDy23iwtsqqQV+YK5i46mLM6iNbZWKyzfQWEEMKr03WtNraQqKonUlnDq/IqIqdrma21ErO7ibl8RC+5mau3E62zkf4WEEJsadLrfcuBEd4ODJPq7iVxtZuE/xrxFj8xRwvRBuemgBBCiKxfftU+t7v++b+3n7c9N0i3dzLf3Ea8yUOswUm03k6szsbrHwGfsrX4wMGTwVOVT144XHPznnaWmttYcnp5bXezZG1izdrER/CEaFr9QFrRAAAAAElFTkSuQmCC',
			};
			engineList.image[8] = {
				name: 'easyicon',
				url: 'http://www.easyicon.net/iconsearch/%s/',
				favicon: 'data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACOElEQVR4nH2T30vTYRTGP1txcttXU77DpQmbyVIpKLELhxdJYBE2MyIiasWUHOzP6Cb7cbcQotSL6raigTUpo8QLozQoAyEXUpJSqV/TWbvwdCEu54YPvPA+vO95znMeOLABp9tOam9vnwIkk5M6NvZek8lJBYjH4yoiyibYN5KGQADVVSzL0h0OF76qPZimG8uy9NXgIA67fXN9Lhrq6zQaiahlWTr+8ZOKiFqWleFbOrgVi+noh3FmZ2cAePL4IQBnTrUCMPJmZOvuA4mEiog2NQY0GomoaTi1qTGgtX5/xkVPT0+Wi+3rl+nvM2o4HUxMfCbSEeJuXx+vh4ZYTv2h0lvBqs2GXZXS0lLyCgCMvnvL/O9Frly9TqGrkOnpr/xNp/ky9Q3TdAOwaC3kz2B32S6br9KP1+cDYMGax2UYANTUVAPQHYtx/kLItlEgi7SHwzr38xcdnZdZWk4BsJJKobrKza4uJqemSKfTWTWZEQYSCT0RDFJulvDIbVJbU43D6eLli+fE+58CsC2dJh6PazAYzBIBQES0LdiaSXvzOXrksK7/yZtBlddLf+IZS6mVHHGAcGd0LZu5H/lDrCgvA+DO7e68ApcuhgA4drwl97G2eq86QEVEH9y/l2M/dO6sioi2NDerp7hI28Ph/2PsLChQ03Cqz+NW03Bq3f59WcXr+xCNRLSpMaAioiKiN651rYk01NepaTjVU1ykIqKHDh7IcTA8PKyekmIVEfV53Oor82RW+x9KpTd/hADUEAAAAABJRU5ErkJggg==',
				blank:true,
			};
			engineList.image[9] = {
				name: 'Pinterest',
				url: 'https://www.pinterest.com/search/pins/?q=%s&rs=typed&term_meta',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACD0lEQVR4nO1WsW4UMRB9sxsECAmlpbrbRKwpKE4nk0i0/AQSogGlSInID/ABKegoEimioCC/kJYiySKCkE7aC8rtUdKgSClQyHlSBN95N/batyQVN5U9nnnvzazXNjCz/92oSVKWiPcAnlfcR3KQL16rgCwRHBKn1Ki7NPz+5coEhBJXTQ5yL350XeShubUKnQDMZ7Lo3zBdH4F4IRFntvC6TjgXsnb6B0Rz04CNcy3CXXluARWQW7fjmw97vVPXesSq0y0OvzpFUNySR70fVR7rHthPxK+qT5NnbbFhq1BRdGD6L1XMo6GNyyqAgHlzrsE+L6RPQHhpy9GWJWL8+7HCal2sU0DJmD9MhrRzMcCxHOTk+K4dPXg0zN+VxLXFrldAlqRb5lwW/WcAkLXSBxNfPj8OUPzKV8PYCEteAcz01Joc4a0dlN4EC7DCVvGA39ZIxje7ANy9UgEAts3Jbut+BwBk0V/7F6JgAbLIV8x5HEWTXQ1+7QM0N+Z+kp6UFhl7XgE20/83gdZNv+6Oywh0pySuyJeDBDDjp0vESMX3tG95eHgwyeFTs/rQSyz4KNYWchfsLYrHkcKnMtMURzFwUVEdietIzhLBl8gB2MiBBtex7sA074S6rtVuwmqiryvTknsFWADWnYENyIMEaCA5yIn+/h2+9is16oaQA02f5e10E0QvKu5Gz/KZzewcjEjYbJKZwQoAAAAASUVORK5CYII=',
			};


			// 下载资源
			engineList.download = [];
			
			engineList.download[5] = {
				name: '射手字幕',
				url: 'http://sub.makedie.me/sub/?searchword=%s',
				//favicon: 'http://sub.makedie.me/favicon.ico',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADeklEQVQ4jW2TfUjUdxzH35xZlpJHNczZtRNhrdQSC64Nw9Ya9EdjS5K2gcGkNEZImUNDc8mYpTnLh3l6nmg171LcMsGWcUete8CH65azrOYoyWVat9Dp7uH3+36+n/2xLWj0/v/1/uv1Al6x2KiotYlRUe8mLVr0fhZgfBNIAxAGAK8BKa9iXuyT1NRD5Rs3Xq1OS7t2HPAYgblSwNuYnW23trfbuk+e7P88MtLyBvD2S2CyVpv+MVDfFB8/Oe1285TTyW3h4dwGcDPAnqNHmZl5yuHg76KjuQbwfajRFAMAEhYseMdrNv9xv7mZz61cGRzv61MURVGHSkqECaBGQB0oLlaCwaB6LTtbrQFCLYDsNRgYAJABVA2Xl7Pf7w94T5wQfZmZ4tmtW3R52zY2A2QG2FNaKolIOnJzpWXVKtkSHq78sGGDAADkATbb7t0UDASU52NjNGG302hDAxkBaQKkEZC/VFSwEIL+fPiQA7Oz5K2oUDvWrVMAADlA1+WtW2UwGFT6CwrEUFmZGK6slGcjI/l6VpZ80NHB80+fSlUISUTy+d278uquXaJ382YGAO0+4EKvwcBzPp9yz2ym4epqMX3zppx2uVgIQczMwZkZFkLI0YYGPrtsGTUD0rJ+vQ+vA28dAC5d3LRJnX38WB2urKQJu52eOByyx2Dgni1bZGdCAt8+fZqJSNr37JF1gGpdsYJy09K+gh5I/3Lx4qF7VmvoL59PjHd3S6Eo7Dl2TF5MSWFnTg5bdToeqapiIpKO/fulEZDnY2PnAUQgFfisbefO0fEbN+av791Lv9tsNDc5KX0jI9I/NcVEJEdra3nk1CkmIunOzycTwC1a7QyAMMQA7xUuXdpXm5Q08sTlkmNWKw0cOSKnBwbkYFGR7E1PZ0tMDN85c4aFEOTKzycjIJsSEh79pzf2AZaf6+v9E06n0rJkifQUFfH9tjbqP3iQf9y+nesAvv3PgXQXFqqNgCxZs+bSC41TgMzzq1f7mzSagBEITbrd4reuLtGu09HElSvy19ZWfubxsBCCBsvKgiaAv0lO/umlFg7rdO3f6/XcGhHBnsJCvlNTwyaAL8TF8YPOThaqyiIU4sGCAjYtXBhau3z5R/8PMfpwRsbXB+Ljv/0UMB8KC+s5DnjrtNpHHXFxPJCXxw07dri+SEy0fKDX5/7LaP4Gg4AFwSni4+YAAAAASUVORK5CYII=',
			};
			engineList.download[8] = {
				name: '人人影视',
				url: 'http://www.zimuzu.tv/search/index?keyword=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADQUlEQVQ4jS2SS2hcdRTGDwW789FUNFCRihtB3YoLNy6mKGJFbBeCgtqdKKh1J4SK0NZFFxEVgiSahy1im2Zim0wSG/ImadBkknY6mZjHzGSm87xz79z3vf87PxeTxbf8ft855zsiZ893HR0u+C9Oabw3bzBfDii7EVVXkch7XNmwuZy0+G3boWAr8nbEbDXg5FjRl7Pnu0T+PPCfSWi8NaczV/apuBF1T5GsBQxkHAYzDomcR9VVVN2IDS3kgyWDFyY1jtw48OXorTqvTDe4U/IpO21zw4vQvYjlUsByKUD3I3Q/YrcZcilp8dGSwWvTDR4fqyNPJTRGiz5FJ6LiKhZLPgVLYQYtnLAtK2hRtBW/b7t8n7T4bKXJGzM6JxIaMpj32Lciio7ids6jL+0wlvVoeBFRq0XUaqH7EZN5j6GMw5VNm69WTU7P6Tw3oSFbpmLfUgzsuFxct+hNOyw+9LGCCBW1UK0WdtBeZ/AQ8OVdk7dndU5OaMgDM+RiyubjJYML/1qMHqabQYuaG1FzI6ygPcV4zuNS0uLTlSanZnQ6ExryyZrJS1MaZ+YNerYcKm77iAVLMZb1GM96FCyF7rer7cs4fLho8OqdBo/eriMyUqNzvM7X6xZ5S1E+TN03Q65uu/yadujfcvjPCKm4EQe24psNi+cnNY6M1hC5XuXNZYN0U5G1IzYbIQVbUXEjto2Q7ns2361ZfLtusa6F5OyIjKk4vdJEhmtIbEYnqYc8MBV/VwLemde5sGmRsxRFp/04X6yavL9gcGbBYLoSkDYVSSMkNqsjSS0gZYTEiz5PT2h0JjRentL4fM1kx1RkrYjFasDrszrPTmicmNQYKfqkjJBkI0BSDZ943qVjuIZcryIjNR75q85jY3XevdvkfjMkbSpulXyeHK8jw1U6btYYybukGgES32tyfHAf6c8jV0vIH5U2aLiK3KwRWzBI6iEpQxEv+HTcqCIDBTqGsozsmcix7lVffryH9GSQvj2k/wAZetiGXSsj18qcmtZINgJSekA853B8YBf5OcUTP/zji8TOdcnlJV+615Gf7iM9W8gvO0jvHtK331bvHrHxIsm6R0rziO8aHOte9SV2rut/2AZGwaMpOBUAAAAASUVORK5CYII=',
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
			engineList.shopping[5] = {
				name: '亚马逊',
				url: 'http://www.amazon.cn/s/ref=nb_sb_noss?field-keywords=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACHklEQVQ4jY3QT0jTYRzH8a9d0m1M8rbMZklQbjRDOpSnHXSTjpFHvVgH0UODwShJWn8gGXXRi6Q1lIpfWYwCYZkQwWqHdhrYH/UwgxmzGU5sv7Hf3h3CJ3U5+sJzeL58ntfzfR4REbHZbPZgMHhL+8+ampp61Nvbe0lE9ondbj+SSqWW2VWRSIRAIED/wABjY2Osrq7ujhAOhyclFArd3d5cWFzE4XQiIjuWtbaWN3NzZYhMT08/39qUSiU6PB5EBLPFwp3hYYaGhqgxmRARvJ2d5YCmadrWxjAMfD4f7e3t3B8fVyG3242I4GppwTCMvYHtFYvFGBkd5bLPx2G7HRHhRHMzuq5XBpLJJGfb2tTbzRYLFqsVEaHZ4agM5PN5TrW2IiIcrK8nGo2ysbGB1+tFRHA4nZWBRCKhbvb7/Sp00uVSE1T8xA/xuAI6PB4ymQzjExOICFVVVVRXV/N6dnZvYD2X42hTk0JqzGZEhEMNDap3PXjzX0BJNeLxOG63mwN1dTQ2NnJ1cJB0Os2Fri4CgQCGnoO1edhcUcBT9Hn4dA8K6wrK/syhF4plb+b7W4hdhPc9CngGRfg8AjNnIHEF1j4Chb+HjCJsLsPSQ3h3HpK34cvoH6Cvr69fBX8kYO4cPDGBZoaXx+DVcXhRD5oVZk7DtwjoWeAX+XxeFxHZHw6HJ3fNCZnHsHQDFq7BygMwvu5IZLPZte7u7p7fLX31eStakCQAAAAASUVORK5CYII=',
			};
			engineList.shopping[7] = {
				name: '天猫',
				url: 'http://list.tmall.com/search_product.htm?q=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAQElEQVQ4jWNgYGBg2MzA8J8czADTvIOB4f9+EvEOmCGbydAMwxgGEAtoZwA6RtdA0AujBgxLA4hOyhRlJkqzMwCOOAUjv7eE+gAAAABJRU5ErkJggg==',
			};
			engineList.shopping[8] = {
				name: '1号店',
				url: 'http://search.yhd.com/c0-0/k%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4UlEQVQ4jaWTMQqEMBBF03iAxcLCzspTCJ5B8AYWsnfYYi+gVxFyh1SKIKQTCw/gkiYWwt/KoCZmA/shTSbzBn7+kMUP0T8C42HEQ/8IIGmDdZ5OtcUPsfghiK15yDNI3gIAJG2M7zTAPnWuKxwlaaNqtwBGPHRpoqbu2oRwA1ynHjXX1T2AR7EySvIWmxAa4PN62wE8itWlCTAWpbsHJg155gYYi9II6NLEDXBnZJcmv3PAiAdJG615E+LkkTVI1wwA0GJsBazzpAEkb90Adz9gBezbyIgHUTydAWob/wV8ARTCpDZEwN5jAAAAAElFTkSuQmCC',
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
			};
		  engineList.translate[3] = {
				name: '必应翻译',
				url: 'http://cn.bing.com/dict/search?q=%s',
				favicon: engineList.icon.bing
			}; 
			engineList.translate[-7] = {
				name: '汉典',
				url: 'http://www.zdic.net/sousuo/?q=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJElEQVQ4jY2TMWrEMBBFdQYJuU23BsM2gbQBFSl0AEsEs+CzxClETpALpEwbttjGJ9hiwXLh1uf4W81EcpRNBgTfo9HTeDQjlnmCk7q4xrbP1joErEPIfGJsezipsbWPt5eiTo0BJfOqwjJPAAAnNevUorE54Hw6ZoCSzmN2ENFY3jifjlkNurpBNDbTFAcAl/0DRFc3DEhrkeptNgRwUkNQ4H8BTurfAV5V6OoGz4/3nHZXN3BSIxrL+ibgryIWAVQY+r9bOo1nwOvB/6j+Vqc+ryrWwqsdtrbME74+3/l7HUKxkZzUEJf9U+ZMe2Eb7O9UBnJSf/fBMk/cLOntqa1DgJOaZ4NrQJNXSrMEoUszAL01vXc0FusQ+BCNL+1FYzG2Pa51VtKhEx+TOgAAAABJRU5ErkJggg==',
			};
			engineList.translate[-8] = {
				name: 'CNKI翻译',
				url: 'http://dict.cnki.net/dict_result.aspx?searchword=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB3klEQVQ4jaXSMUhqURzH8YuBrSbiIIKIS4vo4ORQgyJCBg5Fuuqgsyh3tKFwUsjFycEIwq0lBMc7RLQFIl4RnLxXzqbe4Yp0v28I6vle+F70h99y4Hw45///S9SO+Ukkasf8XovFgkKhgCzLrFYrdtZXgBCCw8NDbDYbnU7n+4Cu67hcLlKpFEKI7wOPj4/Y7Xaen595eXmhUqmg6/r/AUIIQqEQBwcH5PN5HA4HTqcTVVW37mma9t6fP4GrqyskSfqIx+Oh1+sBsNlseHp6olwuE4lEuLy8/BsYj8fc3NwQCATw+/0Mh0NM0+Tu7o5Go0GhUKBerxMOh4nFYl/3wDAMms0mPp+P+/t7ptMpXq+XYrGIaZqs12vOzs5QFGUbGAwG9Pt9FEUhm80iSRJHR0dMJhNOTk6oVCoAtNttzs/P2Ww2n4CmabjdbhwOB7FYDL/fjyzLCCGwLItSqUQwGKRarbK3t0c6nWa5XH4Cs9mM09NTcrkco9GIWq3G7e0tlmUBMJ1OiUajxONxWq0Wqqry9va2/YXFYvExynQ6zfX1NZlMhvF4/HFuGMbuPdA0jWQySbVaRdd19vf3ubi4YL1e/3uRXl9fyefzJBIJ5vM5AN1ul4eHh/fn7gR+kF/ZQQ/WnEhepgAAAABJRU5ErkJggg==',
			};
			engineList.translate[9] = {
				name: 'Forvo发音',
				url: 'https://zh.forvo.com/search/%s',
				// favicon: 'https://static00.forvo.com/_presentation/img/forvo_og.png',
				favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIAAAAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAcdJREFUeJyFkk9rE1EUxX/3pZMJxtCRuim01k03IkKJCI0E9Bu4VgxxpZaKurf+ofEDqHUhFCKKuuwHUCiKBgRL24WloVZd1KIVTFprMQ2d6yKZzEsZ07u6575zzpw7XCGi+gula6AjIIMAKNO+7lz/djM7v5srNugbL10R4X6UaVB/67XUzzunNwNsgubog7k3oB3FAMmk99sbmRxoMxguLp7vTu3LHvCSqGrjRXVKIA3+GaAMEHMSVL7MQCz+tW2FTLGswaC6scXC1aG21QDSjz44S7Oz28ZxQRVFN9cn8imTKZbzNjFKDDBz8Xhd3K4hmgkF2Q9gVBkNafqi0/7r9y7M2dgbfZwzIqRbct8872TQZH1qdTBsVHUnGBjRw3vrORS0AltGkJeW4+09DUTiITBPjHFrZ8NHerJPF3r/p+2+PPnextWJ3Lx5e+5YJRjE410sf/612l8o5XaL+8ZLrxJe7wlVv5lW7zbXaNSpZ8u6uLRK3IkR3hI1EVwrP9t/KtQ21qg+zAtYp7z2/UePLW6sa4sb33VTB1vitgRh1HcfReRI1D9Q1bGVsZMFexZ5dQO3phO+415CGVShDrxeuZGZiuL+A2DYnV2Yre6zAAAAAElFTkSuQmCC',
				blank:true,
			};			
			
			
			//知识列表
			engineList.knowledge = [];
			engineList.knowledge[0] = {
				name: '知乎',
				url: 'http://www.zhihu.com/search?q=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACk0lEQVQ4jY2SS0hUcRTGzyLcRI9Nm8BlbaqFm9xFi+hhm9EgrVZBUETOI3VsUGeiN/RGAqFyGmcRFCFUFJRFWCs1k3LunZnGbOb+73W0ssfo3HEG+7W4E4iBtPjg4xz48Z2PI7J+Z4Psj/ZJ/Z0+qQ//v/ZH+2TX+YjIvmi/nJtBQhNIu4UETMcHraUVyiKnvyPSEHkhQQtpjlN5JkXrw0mkSUcaNcSjI81xxKc7fqFaEkjQRKQ+3CdBC3FrnHv2hUS2wPauDDXditqoSeXZMTZeGWd3WOHqMXH1mGy7abD6ZAppM8qADotlLXGG0nmGzQL54jyTv0oMpPPsDRv0j82ifpR4a9iMKBuAmrCJNKfLgFbFnogipmwqWuI8iuXwPMgiR2KIT2fEtKmNmMjRGOLVGVY2e6LWAkC7SfW1cdaeSiGHPvAiOcPBuxZyaBRx67xTNq4e0+nleJy3yqZuMWBV6CM7bitc3QptskDn62lqbxlUXR5nIJOnLmoibg1pijP8D+CEwhU2GMjYDBo2dvE3+tQcA2mbM8+/8ObTLLU9SwGCFuJPIG6NFW1JdNNmw6Vx5PAo4nVOWDpB0EJaE4hHZ8uNDKXiPPeGfrI8kETcGu+UTU1YOSUe1RjM5BeV+Bfg1rg//JMnsRxPYzl63/+iwqujT87R9HiKNYEErrBiKldyEjQtBDRq7L5lAFDdmWZlIMn7TJ7N1z9z8eU3coV5UtkCI2aBV6lZqq6nEX+mDAiYbOlM8yNXorN/2nldn866C2NUnk0hxzQuvvyKpzfr7LzlV+5QiByI9kvHBJuufmZrl+Es/AnkRBJpXuD9CcQXR/xJpLWsUBaRXecjcnoaCRhOpHbDIS/W4nkoi7TEi38AwHibcZoJerYAAAAASUVORK5CYII=',
				// blank:true,
			};
			engineList.knowledge[1] = {
				name: '维基(ZH)',
				url: 'http://zh.wikipedia.org/wiki/%s',
				favicon: 'data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACKklEQVR4nM2Xva3yMBSG3xPdBai8Ah0WS1iUiCYbeINITBAWyApImSAjuKOgSUYwFRv43ILryCR2IN8VN58lGr/E5zm/TgiR5Zzj2P5vV5ZlNNzrNz5l9BVMtoTx0Gb214aHa3EAWiL84Vo8AosDfAHAbrfD7XaDEAKr1aoXu64DAFwuF2y326R+PB5RluWTfr/fsdlscDqdRs92XYf1eo3z+fxoB/8rioIBMBExEbG1lkO9rmsWQvR6qDnnWErJRMRVVY20siyZiFgp9bT/BGCt5TzPkwZCSAAjzT87BA/h27ZNA3gIb6BpmiiEBxx6CoDruh7931rLSik2xoy0EYBzjoUQDICllFEAKSUDYCFE760xhpVSUe+bpolGLAlQVVXv5TBnzjlu27aHFEKwMSaZMh+xPM/fB7DW9l6myLXWPWSe5yyEmASIpSYJ4L1MdUOYcyKKFlcYzVhXvAQIi01rPamHtRCrp5T2EsD3NRFxWZaTaYgVrFJqMjUvAZqmYSJKdoQ3npobAJLRewvA5zBWjMaY/nCvh1Fq2zZZ+bMAvKfDIRP2fJgGX4xa62RhzgYY9rxS6iklfg54CD/33zn7LYBw/vvDw2hYa0cFmZqi/wQwvKRid0R4h0gpJ1tvNsAwzFO1krqOfw3g3KPai6JI6v4OmXPm15zXp6IosN/vk/rhcMD1ep1z5OPL6Me7P19ZltHiL6X/B0Dsq/Xjhn9sRg1/qiZijn4DhUA2yPD/DEEAAAAASUVORK5CYII=',
			};
			engineList.knowledge[2] = {
				name: '百度百科',
				url: 'http://baike.baidu.com/search/word?pic=1&sug=1&word=%s',
				favicon: engineList.icon.baidu,
			};
			engineList.knowledge[-4] = {
				name: '互动百科',
				url: 'http://so.hudong.com/s/doc/%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABVUlEQVQ4jaWSwSvDYRjHn79AkmhFW1vT0Gb90k5ujv4BVwcn5Q+QRn5tbUVZP6GtlJbk4ECRi5tcXLg5yg5yQw7Y+Dg87+ttlGne+vQ+z/d9P8/h7RUAdjvaAxB2OvkPQrWLP1F/BoCPuu4mF7a7+ZWzGRUaLy6Dr1rY6kHp/cmFr5cvfJfZZTyhEoJKCMrf2BvTi/vj2h9POrlsnEoIYbMPNvtgo78ZgJtTVwOcTLtz4wlrYVgLQxBxvJuHCiJQO4ePd3i8hZcHuL/S3HhCKQqlKKzGlGBI5Q3PZZbHmp6txrCesBKHlTgsDyh22d7ydKf54az2xhOKCSgmoDCoAARjrr+/dkNtVhjEekJ+GPLDkEvCq/ksuaSjOgXrE81ZLon1BD8FfgqWRlS+PNC6FcYTFtOwmIajgg5Y8P6G8YSsB1kPGm86YH60NdkM1hMA5jLtAXwCyK3ufWEwzWsAAAAASUVORK5CYII=',
			};
			engineList.knowledge[5] = {
				name: '百度文库',
				url: 'http://wenku.baidu.com/search?word=%s&ie=utf-8',
				favicon: engineList.icon.baidu,
			};
			engineList.knowledge[6] = {
				name: '豆丁文档',
				url: 'http://www.docin.com/search.do?searchcat=2&searchType_banner=p&nkey=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACsklEQVQ4jZ3SWUgTcBwH8H+QeDCpLUXR2vKGyZzHFuq8ErMi1PBK01LSBKdplgeYCPWQZWFgGV2GQhbpQ4XNSs3l0XRTZ+pm6hRiTtnmXOKZZfv2EstSevD3/P18H778CNnmOfmYHSSE7NquJylVjq1O3pTQbWH3Y7YpZcNBhn1uFpz/5SzNdhOGOZXQTa2Ji60XJdgr3ibndBWjtXKSi7Ju33lCCHWTsnY28Uoud3tyo5Oruv/Jb/VO/4Hlsj7Pn8VSD5SM+KB83Ae3J5lIr2Z2bcLc41YZtYrAtc7FaPTqz6JPx4dkNg3CmRjUjnFRKHZFUgcb2SNchJ13ufUXZvJMj76a8YfmRwOWvg9ANlcE2VwhZPqLGNJloXM6ETWjQeB3s5Eg9Qcz1D5uozcpf+0+Il6IhELfhKn5z5BqL6BPm4ZeTSrE6kQIp6LwXBGJq4P+yO7mGWh0mrtRO3ma8xpVAeiYiYZcVwOFXoCB2TyoV5qhXHwG3eoHKBcFqFdE4NqwF3JbuF8pFIq1sSD0BDWzeS4EzcrD0K/JAAASdS4AYG19HdolFQCgS12BkgF7ZApYGkIIzVgQdoqW16jh4eUkD+plMdYNK2hTpQIAZLoGNCjifxfcQ26PHfhNbL2lJbH6M2CgRVTtBAvVI87QrkoAAIIvcQCAIV0d6sajAABC1SOc6WCAX++tIITs3Dgi7fJbx/kK+V50Td+FfFaIx6MHMarrxouJK7gpDYdcK8HDwUvg97ERUeBSuekHAk7uKbo+xkKByAH5H+koFrsgt8sBWe1uyGhlIaHRFSltbOQLgxaodub0rV53R2yp3dNSOReZIi5S33OQ9I6D2CYOYgTeSBP5oUh06Jt7kE3kVth4wcmMgrw3Icr8/iPI6Q9HVk8gzrUHGNIfhLTs97Dx/Tf/C0aUi3kge/guAAAAAElFTkSuQmCC',
			};
			engineList.knowledge[7] = {
				name: '爱问知识',
				url: 'http://iask.sina.com.cn/search?searchWord=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACRElEQVQ4jY2SzUvTcRzHv5dunjqEHWJrzqVGPqxLeUkR/4PPd79Nk/QgFV6GWmhRoCAooWaSumUpiVD0DBVIUkqkl/UA5W/zYU0z0HBqkaZzk1d/gM56nz+f1+X1UmqXuYwKXFKCFhdaG7g9Hna727Hs7Gyn6DKczsbA7T4z9mzoY/jp8MRcXcODgEjVvyEilRQXt5Nmuc6pwkG6+r/iG1ikoPgRx080BUXOJoeIlGM/VB8+mt6J2rcfW0YP+YUvOFn0kvyCYWw2PwcPFvm0W3aHiFSSmV6NRwz+RHrxiMbiuIXD8RBLVhei3YgW3JIMoDWlWlgPPyFu3mBj1o/WgiEajwi/pvtILNxLDnBpIRr2EzebYLIDgq2shduJB30Q7gSzjVioA3ElARjiIREdgm8DEGwmMeljfbaD7Zl2CHYRMx9DdBwxkii1plqthgjxpS/E5rrhczeEOtkONcNEB6yEcGsh1Wq1JjWhlEoREe70XBr4NP586udyID4RGJzq7akb0FqjlErZ61kppZTdbs9yiUaLUCpChQjiLvm/EpVSSotws3WY2JEstmzHiOTk4a/xzYih94ZUVXm92lVOS0v/+shohLHRIAlbLuNvTMbemjRcu78ucm6vEktpbevn9Yi5NT2zycz3BVbTclic/0FkbpOh0RCNV+9GzkgSC2II7z68Z2p+kd8J2EhzQmYqK/ZcVteWmV2aZuKViXiSpix4vV5qay9QerqMhQOO6ELe4e1ZS0b04pVaLtecp766bkdIfwF25n38sMbXHQAAAABJRU5ErkJggg==',
				// encoding: 'gbk',
			};
			engineList.knowledge[8] = {
				name: '百度知道',
				url: 'http://zhidao.baidu.com/search?word=%s',
				favicon: engineList.icon.baidu,
			};

			//社交列表
			engineList.sociality = [];
			
			engineList.sociality[0] = {
				name: 'Twitter',
				url: 'https://twitter.com/search/%s',
				// favicon: 'https://twitter.com/favicon.ico',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABR0lEQVQ4jWNgGEyAH5e4bXhCgX1ibqOVb2gCklpU9ealvRuRFMCBau3cCwxTzvxnmHbhP8PEk//1yyfvl6xb9sDGLywJRaFh/+ZTDBNP/rfOrZ8PM11VW9uAYcnj/wxr3iHwwvv/eZfc/mxkZeeEYoBvdnkdw5p3/xnm3PjP37TunXVu/XyH3LopKJqhODCrtIKBgYEHxQCDliVH4YpWvvrPMOfGf4aZVzA0M6x595+Xl1cEI6RcfIPDeFc8/oxNAzLWWHjuNq5Y4PFvmT6fkCH++dWNuAxgcPAJCteYc+Y2PttFRUUlcBrAwMDA7x4UEWUzbcchbJotbW3tcWq0zq2fz1+38h1D597/DPNvo2h2nrBmG1QzMy4DmNXU1DR8I2IT/FtnLYThkPKWTs+g0HA1NTUNfJqRAY+kpKQ8DEP9y06MxoEDAKUW4Kpi1NnUAAAAAElFTkSuQmCC',
			};
			engineList.sociality[4] = {
				name: '新浪微博',
				url: 'http://s.weibo.com/weibo/%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACpElEQVQ4jb2SXUiTcRTGH9CZNmeyvXO+2163tSWaFWmsMmtpSpC1EBNDJaiky0AEL6S0D4pKHVFpXmTaB5FdtIuEqBslBCMqKyNDUFKpLQ2rOb9y/s/pIlYUeBFBz+U55wfnBw/wHxO7zowNa4zIAKD6a3pPOkpG6zA+WoeJ50fwJi8VOxc91gLKzpjYwjUq1cbwLA7QbluJHVuSkespxsWpywi5HNj+JxtToZWOv7As980kp3G/1T4pAXJ42VCCpp5q9KZbkHmhFC091ej7JQgk3JLND4LJK3nckcJ+Rwr3W+yTOUuW5rvV6pIqrXRib6L6QI0bp7uq8NRlx7aRs/gc5uO9RqU76EjlUZOF3+llGjGYaECSZ/t0CV8+KTaeSU7jLr190GWM3N68H9d2rEaB34PZH6/pE9umbCt42GBmX3YezRytJXH9JoVaWjlQWcUfMjfzmKzwsySrzwDYAGCtAmdDEZqRGR2d609azr6UVRy40kJibo7eDg/Tw+5uGvT5SAhB8z4/TVRW0ZCshO4ZlccZkdFbfro36PVtAesKnrrrZSEEnfF4CAABIJ1OR16vl4QQtDA/Tx93FfC02cbdim1IA0gAgDvx0qPpfDcLIehJby9pNBoqKioit9tNKpWKnE4nCSFICEHjhyvIn2DkfqtjMqyCGrXG8y07j5mYOzo7aavLRYFAgLKysggAHSwvJyEEhfx+8m1y8YzFwU16QzuAiHBpzA+khFd88hQvBINcW1/P63NyOE6WqXDfPhqbnubQ4BB/LS7loMnC90yWHgkw/tYeCZDr1eqW97sLJ7ntBr++1MgDV1uZO+4zHzvBX9Od/FJv8FfrpHMA4hetsAVILYuIOOSREi+3GpX2xrhlt2tUMed3R0WVGYGkRcF/yXdyajYEKzT4iQAAAABJRU5ErkJggg==',
			};
			engineList.sociality[1] = {
				name: '豆瓣',
				url: 'http://www.douban.com/search?source=suggest&q=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACOElEQVQ4jZXST0jTYRjA8UfQNd2w3DqERIQQBmFQNPFgHVwI2SHokKTQpaB/RJvZ/JPLhWWkCcq2lCIhFILyEHaoYEr9LE1/bXMzqYOYTmeUOT2olWjfDjYV+qcvfC4vL194eR6R7Zqjkqf3SK5ubfL0HslJuCeSr1ekciNSmoAUa1bPvh6pMCJyRNcmJVqqntehjvhXLa02EynSIpKr80iJlmrFSceHLtoHlP/qGfGxs3ZvNKD3yGUDYtWw5XoaJqeZzPoD7Gs4+JsMdzYmZxYxxQakUIfYjdFAEnI+lpa+VgCmv88QmZ1k6uvUkonZSaIn3WVGLLGI3bAiYInjYfARAObbh0i+ksLmyh1Lkh1bud/bAoDJmYVY4v4e2HQ1FTkhyNkVjgt1L+v/FYil9d1TANydd6hsu0mN4qZGcVGjuHA8u4Z3tBeADHf2H75QoKX0iYPP0+MADEaGCX7sp//TewJjb/k2PwdAz4iP1KrdSIF2ZcCAFCUhZwTr40sAHG46hpyLQQr1iC0R/1gfEzMREsqSEeu6xffLASNSEI+cFrZV72F+YZ5GtRk5JchJIeXGLhZ+LNDse7B4Z4lFLiZGx7i4SLe67qKGvPSO9S2NSw15UYd7GIqEABif/oI6rKKO+jG5zIhNsxxoeN2ILxzgzaif9oEOXgx24gsH8IWDdIe8tA8ovBrqxhcO4gsHSHft/xXI1ytSbkQuxCNWzerZEhGHEZEcXZNUGBF7ElK2BuUGxLZh7icJ8DyZ0CDAawAAAABJRU5ErkJggg==',
			};
			engineList.sociality[2] = {
				name: '百度贴吧',
				url: 'http://tieba.baidu.com/f?kw=%s&ie=utf-8',
				favicon: engineList.icon.baidu,
			};
			engineList.sociality[3] = {
				name: '腾讯微博',
				url: 'http://search.t.qq.com/index.php?k=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADd0lEQVQ4jXXMaUyTBxzH8SfbK98sMjXAoEAB0YHLRuCNjnMLMxhissQd2RYPZgzOuBcsWbIsmbAwNhG6FaaAlhadghzLmFAw8MxyFCiUlkMOW+5SEChFwvGUcn33QvTNsn/yyf/36isIgrBXfvJcdnyGRoz/SSPGpReJMbui0orEY2nP/4t9NK1IPJZeLEak5lQdCIs4I8g/PK/80uTmvHmDZJObs13rfGKQ+NQgkWx0cdYo8VG7xKk2ic87XbvW+cK8zQcavUuITtc0nu50cbx2mgStnfdqpkg3LWByuLCvbjK1uknHnIvvOx3E1UxxvHaaEw+nSWqY50StHeHoDyrxVMsysQ8mift7Au3kCu6tHUT7Cjk9Cyh6F9DZV1nf2ub+8BJRVRO8X20joW6G+KoxhMjvCsSkR4u8XT6MZsjJ9g5cbp4mrNRKyD0LIfcshJVa+UY/w84OKHochJePEFNt490KC8Jb314Xo7WzJFaNIG1uk9k5i0zdT2ylFUX3PDnmOaIrrMjUA/xqnmNe2iC20kp4+QgRJQMIb6bmikdKLKT+M8qCtEFksZngQiPi+DNeXN2oE3l+J1F3e3CsbZCstRBw00SYqgsh8OscMfCmiR8bhxlxruGj0BFeoGduxfUysCi5eadAj1zZhG1J4nLtAAdyGgnKa0Hwu5QtyvI7uVD9mOX1TUJvNBOtbmdJcr8MVPTP4HFVJPJWK07JzccV3ezPfoSfsgnhja+yxACVmfBb7fTNLXPyvpmmcSdKwwQp2gFS6y3I81p4JaOBa23jTCxJBF1vwTtXj6+yCcEzJUs8WNyPV24rhwsNZOpHMU4vslfRgpCpQ/hZx55rTVyse8Lm9g4XH1p4TdGMb34H3soWhP0pWWLwXSueN4zICoz0zM5xWjvIEY2ZjDYbVw02dJPPWHZvcaXVhkeeAZ8CIzJVN96/tz8PHCwbZ19hL59p++maGcVX1c25+gn6HBK9DonbgwskVll5Pb8bWVEf/uo+Am4P4pNvRNh36Tfd4b+e4qWx8EtHF2VDJrzUFvzvPMFbPYi3ehBP9SDemiEC/7AQtCu4dBQ/VR+Cx5krdaH1a8jL7ZQMNVDwuBW/smkOVU4RsuvQf9gIrXHip+pBeNU3KNEz/c+n8pIxEh70EVPVT0DJOIGlY/8rqGwS/6Je9iRduPMvGb/OaZ8pffkAAAAASUVORK5CYII=',
			};
			engineList.sociality[5] = {
				name: 'Facebook',
				url: 'https://www.facebook.com/search/results.php?q=%s',
				// favicon: 'https://www.facebook.com/favicon.ico',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAl0lEQVQ4jWNgoAbQtE48bOXX9J8UrGmdeBhugEvs7P8eSYtJwi6xs//DDcCnMCx31f9j5x79//X7z//3H7//v3H3NVyOKAP2n7j3Hx2QZMDXbz///////39+3RK4/0kyAAZcYmdhyOE1ABd4/PwjZQYsWXecOANg/oUBGN8hYhJ5YYBNbjgZYOJRdZhUA8w9a48QmVfxAwATIfnUl6gLIAAAAABJRU5ErkJggg==',
			};
			engineList.sociality[6] = {
				name: 'Google+',
				url: 'https://plus.google.com/s/%s',
				// favicon: 'https://plus.google.com/favicon.ico',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACnUlEQVQ4jX2Sy08TURjF+z8Yd27QVI2iwAhT24pIy9CWTkVrMRgxUTQRYuJKQly4UIOJMUYlcWHCxsdGYWPSxqhRF7IxMRGDEejcmU55P20FBQpDfy4KKI+4OIubfPd3zz3ns+lBJ6sKuRFBJ0KREL5ihF9G+EoQvmLWzP0j2+pBdSEUCT3oJHnuOOapAIkTHsxaH+bpILrq+g9AdSMUiYFLdcx2feZntIP5+HeyloWVTpFuf4bwyznIOpBNV13oAQdGdSlWaopUx1P65DyS9WGWZn8z1/0ldzngyLn0y+sAoUNo5fsZuX4FgNGWqwhFQivLJ9X+BIBkfRjhK0E/eohExIsecq86sekhN5q3kKHmRgBSLx4Td9qJO+1MtrUCWRInFTTPfowaL5l+EyPiQVMkdNX1N0Thl/n9qROAsbs3MOtU5nu6mXh4B81bSKJGIXk+gjU1QfJ8BOOEF111r4ToQgQcGMfKGL/fwsz7V8tuntBbtA2z1kdmwMRK/yC7uIiVTpFJGiQi3rU1akfy6XPsYPRmMwAZQ6P/Yi2ioug/DpZbEAGZyUf3mPvWxUznO6bfRslm5ln6NcPApTrih/eQOFmxSQaqC6EcYObDaxZHBum/EEGvcqIdyWeoqQGA6TdRNE8BRnXpxhaEX8YIlwMw2dZKz96t6FW5L/Xs3kL65XN+ffqIVpafW3W/Y90eBBwYR0tZGB3GSk0xdvsa5hkVsy7I+INbLAwmGWpqQPMUrHl5FWCobvTKAwxePktG64WlJaypCazJcea/f2W4uRHhKcAIuTGCzg2yxQMHiVc56fMWEq8sRoTLETUKokahr0Kit3wfWtBFPHBwU9miJXaiJXZijl3EZDtRaTtRKY+olEdM3knMsYuVmc30B6Utqs/wm281AAAAAElFTkSuQmCC',
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
				favicon: engineList.icon.baidu,
			};
			engineList.scholar[2] = {
				name: '知网',
				url: 'http://epub.cnki.net/kns/brief/default_result.aspx?txt_1_value1=%s&dbPrefix=SCDB&db_opt=CJFQ%2CCJFN%2CCDFD%2CCMFD%2CCPFD%2CIPFD%2CCCND%2CCCJD%2CHBRD&singleDB=SCDB&action=scdbsearch',
				//url: 'http://scholar.cnki.net/result.aspx?q=%s',
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

			// html
			engineList.htmls = [];
			
			engineList.htmls[0] = {
				name: 'w3c',
				url: 'http://www.runoob.com/?s=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACHklEQVR4nIWTX0jTURTHP+fu59xUCJLGCgp0IIPSIvLPg9JTvZq+RBj5WJGySWVPKSH0ZCSWD/ZiFAQVqQUVBulbaQT2IkVEUhISPrTptE23e3pYm26t+sLlHrjnfL/3fM+9Qh4Gp5ubVOSmqlSLIACqGkUY8bp83acP3drYmi+ZYGSq3RP1RudFxJ9PmgOVU6GG0bs5BCNT7Z7lkuUVwPlncZaEi6GGsf4swcD0sUW14p954S6cryAoKoJ/j6VybxLEHAzVPZp1Bl63HBHB//2bYe6N2dLUJhqD68xKgANflpj7GCewL4m1qQnAJwPTLZ9ECJS7K2ja3gFogRuneRX4mYowsdSHIKRc7HJECAAYceEu2rRARECV6Ooa28pKUU0Tp0xRNseVpNXkqxljeDz5ig/zC0RiqywsLnGhf5jYWryQO00mv/j4+T6qqyoJVuzm3tNJaqoquN59ls6rN3j/+WtuubDgqJIQoRjAWsv9a5eZmnmHqiWyHAOgd+gOw71duIsc1lKRTUExE0aE51tZrbUcrq1h545yzp1oJmUtPWfacvzJoLN29KWzXhw76U6UxRJ2BSOu7GGZtyQnOTNdVft757YImn5IMy1XBHoKjfAP29JbPFw/7gUwAOH6sV5Fh9I6/1vEExvWl/UhE4TrxzvUchRl9a/qyoMfdftLLzU+WclvLQeDb1uDNqltiAZREgIPPY7vWf5XBvgFMS/Jw/yUPqwAAAAASUVORK5CYII=',
			};
			engineList.htmls[1] = {
				name: 'Can I Use',
				url: 'http://caniuse.com/#search=%s',
				blank:true,
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAADAFBMVEXRa1hIvVUBriaErG7//vzQx7e116nq4M2Dy4FmYktwx3Tt48/y6NQXsTH+7uK2fGBhwmhoxW7Wg3HEMxe8EAD78Nqn0plRvluZ0ZLKQizNs6qupZZ0zX/9/+3669vM5cUxt0QlszpQqV6HhoPP3L1YwWKYooEQujB9ynxWUTgly0Tp38yhlIhAkEAldSRdOC706tbw5dL/8ezInXD169iK1JO7u6n+9ODAJQSY2J+Wrc+z4bLluKpnkcWbyYz/++CMzYcAqQz25dd90Yn90/ll020qwEPk28j5/OjhueEstkDfoo7k2NP+68n/5+CmSj3i2MX85dI6ukzx+ufhqp7+8/r39er29uP77NU0kjgvvEQ4LBc8nEFOzVqQvY0evzvN+f/m+drt8uHpxbnb5s7s7dpwomfb0cA3p0Ti7tfB473n3bzc7dDe3szr//9SZH0Avij37tng1ssttT7dk4Xf4t6U4ZOm3Kh81ntaelrv6Os/WC6I3Ik+iDvuzr/z2M6AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7O0tLS1tbW2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjJycnKysrLy8vMzMzNzc3Ozs7Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7////XnzsNAAAAmklEQVR4nF3KQQuCMADF8U2EQT1hklJCQSIhbIdCCtepRodgpxB26eKxj+ChL99mhOm7/OHHI8AdD+AFeZzXRXEhTLKKSuZyYD49xFM4T+E0hpttprAeQ2x5YAZYJEsb6KgHHweN3f6DSnL/iLTa/B5lWOq21SpMdZum5Cn4nguTi+ydCWMEAVZVR/mOAqAd8AWgBz8H12qGYR9XXh8E2WsxgQAAAABJRU5ErkJggg==',
			};
			engineList.htmls[2] = {
				name: 'GitHub',
				url: 'https://github.com/search?utf8=✓&q=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADLElEQVR4nM1Xz2sTQRT+dpNScqhJW7ZJ9mx706RJ0/SHbRHR/8Cz9ORBBBEUEfwjBJVePHhQFPUiIi09SNqkSbtJU70p6dH+IOChQmpNss9Ddqezu7NJmgT0LQPZN/O+75s3bzI7wD826QxjPURUawtUktrGbWfggK7rR3bnxWjc8v51p+AIlGVZBkAdC9B1nQXbCZuZXYwsy648bh1yvV6vA8D9Bw+xvLLSNrlFSPFUiMfjEXKJnJ5arVYDgMj4REfEdvtSzAMAvF6vg8/hqFWrBACRWKIn5EzEttYQ0ddn4bS8VE3yHs3cIaKYR6VSOfD7/WHTJ3P9YSJykCuKgp1tDTvGDNoxt/FEBJ/PF+J9LAMnJycEAFFb6s9CbDc7Fo/X398vAYDX8A+ACJH4pBOFmm7jpiaMtOHJAPD7+PiIiBqdthaJJUBEHbVmeKqqjjEBLMhQzbdifrNjAcX8phCTiLBbKn1jS0BEGJ9IOrJlkndlgngeUwbQ11AsylhnM+fbtpZzxTUF+BrpFzw9ECDCXrhyjQlgSyAq2a7TDyC1tu7AHvT7LQKO+ZT0WsCdu/ccvvdvX1uWoEq6LlyC8cQUSNe7a6LH6DMFgIhQyGUE+6W7QoxNzjTFtAhwK8RYcqYj8pu3botnbxR3YGjoPBMwODx8jhWi0fLZNPsdT84inpxti/jxk2eIJ2ehaQXh7PPZtDn7XYA7jH6WywQA8alLrFgKuTSm5y7jT7VqKaJCLi0sOD7WzczYIUWRWAYMh0oAVpc/WgA31j87QIR/ry2pgXwuDeLIgdPTEAD2iQgBbo8CjfrQsutWAS7bs9m2fffmJYgINxYXr/N+xydZ+fCQACAxPcd8dgFuxsfYzcRQgkH3TzLDPOWDgxoATMzMOzpfvXiOsdFRIYlo/OqnDxgMBBrkoZCDT7Y7ANSVUMhDRNAyKWiZlOUk+bG377oD7KeOlkmxJRWRuwkAAH0kHJbM4traWMPWxhoAYGF+rmURmuMJwNOlpUcj4fCZLya8DRzu7TmuZu1YUFVbXs3cMsDbr6CqSkFV9X4vlbJuszfbhWj0qjFeakX+X9hfKwNpwLLdyLQAAAAASUVORK5CYII=',
				blank:true,
			};
			engineList.htmls[3] = {
				name: 'MDN',
				url: 'https://developer.mozilla.org/zh-CN/search?q=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEUAAAAEgb8AWKIAbbMHk8wAeLwBUJUAYqsAV6IBbK8DXqECWJsAi8sEZ6YAgsQAXaYDYqYAlNEAZa0AbLIIf7kGdLAFbqwBVJwAcrcAgsQHebUJhL0AVZwAeLwAktAAjcwBVJsBVJwAfcABUZYAVJsAiMgBUZYBm9YAWKMAVJsBUZUKjsUAnNgAnNgAnNgBVJsBnNgAltQJiMEAVp4KjsUKjsUAndkAWaMKjcQBTZEKjcQBUJUKjcQAmtYAmtYAmtYAntkAntoKkMcKkcgKkskLkMcAntoLkMcKi8MKjcUKi8MKjcT////x8vIJg7wKisIDWZwEX6EDW50Jhb4AktAIfbcJh8ADYaIAXKYDY6QIf7kDXZ8AldMCVpkAlNIAXqcCVZgAkc8CUZYAjMsAbrQAWqQCV5oAisoHd7MAYakAl9QGb60FZqYCU5cAm9gAY6sAX6gAh8gAmNUAjs0Aa7IKjMMAmdYAYqoKjcQAg8QIerYEZaUAhcYFaKgAj84AWaMFbKsIgbsFaqkAe74AZKwAabAAdLgAZq0AaK8KjsUGca8AgMIAZ64Gc7AAfcAAdroLkMcAb7UHebUAcrcGdbEAWKIBT5QAndkAeLwAcLbv8PEAVqEAgsP19vYATpMJgrsAgcMAVaD///oAn9vw8fL///z//Pj09PMAWaAAU5v5+PUAXqT8+vYAYab39fQAZagAV50AT5kAZqsBaa0AcbEEh8QEjcgAba4Fl9EEk84ATZ8Ag8kEisYEkMu51OPM3uhOkr8Lkciwzt8tfrXY5evE2eWnyNzg6u4+jb4AWKhspckAecOJttN5qs0AR5Kaxd6Sv9gAcbw9lcZgnsZWmcQferQxj8L7/f7l8vjo7vFwsNNWo8wAergXca6cwNcAUaLt9/vZ6/Y8hrhhqdEida4ihbwuh7sASZ30+v19tNNJm8kDgcDR5O5XtN6nz+at2e2Hvdk5p9jJ5POZ0etvveEPa6u93O5+x+YonNEjkMcVZ6V8udoYf7uPxuQXiMP////1D5bdAAAATHRSTlMABoCAJYCbgO4MmpuAm4DuGoDu7pubm0Xu7pubJ+7u7mZX7sk17uAv0ozx5WLLwHRW7puph1rrulD+kLK6jvSblPDrfkm/iLTuxsXvPlPBYgAAATdJREFUeJy90z1Lw1AYxfEMfitH13ubVGnBlvrSqvhCEyQisSqIRSUKKmiWDhZLLRRcBBdHv5MfwHPveVKTpoiTvyHcA3+yPY7zf+7z8zM/F+I48n0/nXNxHGemExnuoTGZ0WQ6LlV3SaYrE0GVllZIZlUmghL110lmSSaCPtXC8EOB7g9GZoeEoEaVlrK0gd0iBBV6V5kAe58QdKyRzga60zkhBNuG1oNcoHtfRxaCR0vrqUCp7g0guDb0azFQt4Bgz5rxB9UFBGdWb0ZwBwjOrZdicGkgOLXGb4XgwUBwTD/B2O4NQrBMwzSQfUAIylRPA9kXhKAuriRIJyFYJC8IAhOUZQeEwKOtHZLpyUTQoLVVktmQiaBt4bFpTU08ms3mfHoASZJgtjMT36fcCT1Pzd+O8Y++AcqvFc1FTPj9AAAAAElFTkSuQmCC',
				// blank:true,
			};

			// 自用 该列表默认隐藏,
			engineList.mine = [];
			// engineList.mine[0] = {
			// 	name: "",
			// 	url: "",
			// }
			engineList.mine[1] = {
				name: '电影-人生05',
				url: 'http://www.rs05.com/search.php?s=%s',
				favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIACBAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAkhJREFUeJytk19IU2EYxp9z5s40ZzSRkWOQJIog0dzmH2aECFEIhiSCoN2oECJYYUI3QjqlQdqdF6bYRcwLUQhRxBBkXgQqKaKRjWFYMmnmyMN2FMzv6SI9FnXRvwe+m4f3+/G+L88rCSGIf1ACAEiS9NcA+VfmdjiMT1tbv0cQQpAkhRD8sL7OOxUVdAB0JyXx3doajxVaWWG1w8Eal4s1Lhdr3W7OTU9TB7ycmmKJ1UonwFKrlbfLy+ltbCRJxlWVFTk5zAPoPHqXLRZGIxEmAMBGMIj2hgbg8BCdfj8uejzY0zT0d3VhX9Nwt6oKqenpuNfTA0mWQQDnsrNxJi0NeLO4yCs2GwtMJr4KBPSWnw8O0tvUxIVAgBcMBo729fFxayuf+nyMqapeh/b6ejolif2dnbqpRqMssdk47vdzZmyMTlnWW88D2FJZeQK4npnJktRURiMR3ez3+VhgNvN9KMTPOzt82NzMF8PD/Li5ydDqKmuKini8O+QbjXzW3a1/nh0fZ57RyJ6WFr3oWEII9ra1sbaw8ARwKSWFb5eW+OXggKMDAyw2m3nT4+GepnF2YoJPOjoYU1W+np/n/epquo1G9nm9OlS6VVrKpORkaLEYFmZmcDYjA72Tk1ASE3EjNxfns7KgxePYDIUgGQwoLivDo5ERKIryLUjB5WVes9vpkmU+qKvjdjhMktwIBpmvKPryrtrtnBwa4r6m/TCWdDQL9jUNp8zm7xOKlbk5xHd3cdpiQbbDAcVk+inJkhCC//2Y/kRfASoRrtb2v2kbAAAAAElFTkSuQmCC',
				blank:true,
			};
			engineList.mine[10] = {
				name: '字幕-射手网(伪)',
				url: 'http://assrt.net/sub/?searchword=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADfElEQVR4nF2TQUxTdxzHv7//e319pH3QEi3MAYMpqWZj1c1lESIz0WwLXmZl7CAXjCYzuyCJJPVgPAy8zZglEuRA5sLJiIlm4ExmQtDilmVgQrDCsq2WuRRKoX20tO+9//vtglni9/z5fk7fLzEzXs+T8+f3rTx6VItSSV2fn4/qVVVjX25szACQ3xLt72Oee8XS64LfYrHe9bm5Do/P50mOjxvEHJZESx8MDKzv6O5mZ3bWHz9z5s8t0/wOzDPqq+JPx49/nJqY+CIYDkcPj46+wa6L5N27YNuGZD5gmyZ21dcjnUxCWtZHKJU+8er6VQEAP9TUtIZ7esbbR0a+lqZZLUslu6atzYlcvCgl4BLgCE2zXdd1lm7edMxcziKgOhCJfKMCQGFlJZpfWqp+LxYrldfXPc9u3IC+cyf9Oz0tBOBKQAURCyEgVBXBhgbFSqcdaVlCAAAB+7Nzcy67rvJWZyftO3eOVuNxpB4+ZAmQBFitqCAA3NLfT9GFBT4wOEiObbvqtmCjnMkQiLA0PMyKYUDVdaH7fNTU2cl1HR1Ue/Qou8xkNDZybnGRVuNx8vr9qjpFFCDAkYUC2ZubqNq7l6x8nkPt7fjs0CGEWlsZAJVzOSKAnw0N0e+XLrnlTEbUHjy4JjKVlbUuUOEyO7JUonI2i2AkQm6xiF/6+vDjkSN0a88e/DE6CiJCenqazUzGNUIhrj12bEj8VSjU6Iax693+flfRNKpsbqZQa6v458EDyHIZgXCYpGWBpQQAaJWVEIAiNG3r/StXBgRL+XbTiRM+f1OT/WtvL3kMg8vZLDd2deHT+/fRNjzMkQsXgO3BqYbBBJAsFh1zcdFW5xXlxZuTkykzkZAfXrv2TiGV4uWJCTR2dWFhbIzTjx9TLpFAJBYDtjUMsDcUyq/OzEB87zg/b62urjWfPbubhHCmTp8mUhTKJRLs5PMkPB6spdNgAMxMiqa5BEAJBmdnL1+WKgDYwJ2ng4OfF1MpKR2HG6JRpfjyJf6+d889PDJCu0+domBLC4iINb9fAlB9qhooAxAA8BXzLW8gcMeoq9MVXdde3L6tFJJJJZ9MiumeHlJ9PgQjEUjLEuVs1uvRdeuppl3VAoH/37g8OVllZbP9ievXA8l43OvXtJDrOHV6MLiDdL2+8eRJ2KYZ31xeTnoDgalCd/dw3fPn4j+2Ya+YXX1PBgAAAABJRU5ErkJggg==',
				blank:true,
			};
			engineList.mine[11] = {
				name: '字幕-字幕库',
				url: 'http://www.zimuku.net/search?ad=1&q=%s',
				blank:true,
			};
			engineList.mine[20] = {
				name: '游戏-3dm',
				url: 'http://so.3dmgame.com/?type=4&keyword=%s',
				favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIAALAwAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAtJJREFUeJydU0tIVGEU/v57r3dmdJzG0a6T6UyaM6GZYkJhBRZE9EJcCEVpVIuIyGhRi6hNBC5bBBJRqxgiopoWlVZoVvQgUsuaIZPyNabzuukd5zre199CMaMk6IPDgXP4vvNxDgdYBKET/GKt30D+Vrx8alu5JCn5Jl4Mfg9zwpoyy7j2JjV8qLXr3wLnfV4UBB2bSyqXt7gKM0vtdjMkSUU0nOzu7Qqfbjj3tGNRgRgFHl3YsnPL7iK/IJh4EIBQAkoMEINC/KFrT+8N7Nmf77yrHvb9KXC7qdxaVlfe7/EucRJQTM9oYBiCkYEEXEWZmJY1RKOK+OROYFVZrTDR91At4n7zn2evdzgtzgedI1BUQJI0yLKKowe8aO2IYGhEQoaVOIrLlx1LDbPipu2OSvK5dS9vzx5XfIEhVGulfq+k14VjMzDVuBAKxUAjERjTMsCxYCzpyF2aA9PzyLh130p71MB1LqkzXSSRb1ufln0rN8+01ZyYgduVicl0DY6cJdCyV0FTOBAiw2KKw11iQzzP6szyZmGsW4xwUJRXxZXOI6mUcsq92g4GAAWFyVyBZenrAMLO75tSBUbyLXjpLQwdCA2IPczHz+GW4cGplKdklgwQUL4YbMYGEMKBAQEDgAEFQ9LAWjdCT3Ojv18KMkZOGxPrSxpiVJbkpA5Np0ilVMCyBoQuPBEBQEDmMjWvfRVIjFUNVbfJJD4R53wndzmFwoymAo/tIM9DqNpxBoQxzRF+wQCgGxSBZ88bK3c2+QCAybJlofHivXFLw46zr9vHaghLBg2qzk4C5sMAoGoaPrx8eTN4tfnGvDdKKQcAycQM7sff4X3zJVt1he3KikJPvUVwgbAsdINO/fgaYEY7/Wb7asG99Xh7aKEAAwC6rmM0JqJv8hp6H6s297cXtZMOjyhDmKAZrGymiplXk+kjSfZLz6evMb/fL//xWf+Dnxs2M3yo2q6nAAAAAElFTkSuQmCC',
				blank:true,
			};
			engineList.mine[30] = {
				name: 'av-javlibrary',
				url: 'http://www.jav11b.com/cn/vl_searchbyid.php?keyword=%s',
				favicon: 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIAA3AQAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAP5JREFUeJylkzFKBDEUhr+3SQZdF8vFxmobwT2AtXgHCzsbQbyANuJVbLyAnR7BTlFBrGwUsRBcGdckz2JFd5zMzA7+Vf6Q9+XPSyIfc2fKP9RJznYNZncZpBkgpQQC2fvGjx3Pn7dLIP2seds6gD6N0YccgHj63AiwpQSrPbCC374injy2BHQN7mJtMnbp/v5VYZXZXPo1ruIKsg6yspAGYKeKTBpgj4fo7WgGQEUAffksllQC+g73uk7YukRHAfGKRiXs3dQApurtwYBwdI8Me4gAi5a4f1c+UjroROZwUPAhASj2II/w5iEP4PXbB/zOdeWTLv+FlprttdToC7F9R7urpLwHAAAAAElFTkSuQmCC',
				blank:true,
			};
			engineList.mine[31] = {
				name: 'av-airav',
				url: 'http://airav.cc/avgirlInfo.aspx?Search=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSklEQVR4nJWRQUrDQBSGv5m2mWhasCKVotQ0iCh002rqFQRBTyPoLdx4C3eudCF4Aim4EV2IrgpFFNSa1DYuQicdk0Kd1cyb/315+Ub0Ts4jspYQlI/2iMIhb6dXmREAOe3C2lhGLsyTq5QouEv/Byi/nuzb9WmxbIAs2Vib1WSaxipizpodoLZdkEKfRV6iWrUZAUJg+y4AX5d3umz73myAwnoFWXYA6N/ca8g0mSmA7ZvCJiFZMg2ALCqsrWoqFH0PgGyZBkC11iBnDmXvejgHTSBbZpIWoNpedrOYqP2RqQEFr0Ju0TEunUOzGdIy83r8HVcXh6+fRMGP+SU7r19HtesMnnoJQDgK1ViJk6OI97Nron5oAoqK8vE+SBHLvOgQ9cP4F+xmTcsLH7qpZoDRR8DgsQuYMmU8UiIm7LykmscruH3W+7HMX4w3TDVyAQKXAAAAAElFTkSuQmCC',
				blank:true,
			};

			
			
			//控制列表的具体细节
			//engineList.details[排序(从小到大,小于0不显示相应列表)]=['显示在网页上的名字',列表名称(别改这个)]
			engineList.details = [];
			
			engineList.details[0] = ['网页', 'web'];
			engineList.details[1] = ['翻译', 'translate'];
			engineList.details[2] = ['知识', 'knowledge'];
			engineList.details[3] = ['图片', 'image'];
			engineList.details[4] = ['视频', 'video'];
			engineList.details[5] = ['音乐', 'music'];
			engineList.details[6] = ['学术', 'scholar'];
			engineList.details[-7] = ['下载', 'download'];
			engineList.details[8] = ['社交', 'sociality'];
			engineList.details[10] = ['购物', 'shopping'];
			engineList.details[11] = ['html', 'htmls'];
			// engineList.details[20] = ['mine', 'mine']; 	// 隐藏
			
			
			///test -------------- 测试 start
			// console.log("searchEngineJump test: ",window.location.href)
			///test -------------- 测试 end

			// --------------------可设置项结束------------------------

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
				
				var encoding = target.getAttribute('encoding');
				if (encoding == 'utf-8') {
					value = encodeURIComponent(value);
				}
				
				// console.log(value);
				target.href = target.getAttribute('url').replace('%s', value);
			};
			
			// iframe 禁止加载
			if (window.self != window.top) return;

			var url = location.href;
			var matchedRule;

			 // console.log(url);
			// if(/^https?:\/\/www\.baidu\.com\/(?:s|baidu)/.test(url)){
			// 	// console.log("fuckBD");
			// 	document.getElementById("su").addEventListener("click",function(){
			// 		var fuckBD = null;
			// 		if (typeof iInput == 'function') {
			// 			fuckBD = iInput();
			// 		} else {
			// 			if (iInput.nodeName == 'INPUT') {
			// 				fuckBD = iInput.value;
			// 			} else {
			// 				fuckBD = iInput.textContent;
			// 			};
			// 		};
			// 		window.location.href="https://www.baidu.com/s?wd=" + fuckBD + "&ie=utf-8";
			// 	});
			// 	document.getElementById("page").addEventListener("click",function(e){
			// 		var target = e.target,
			// 			targetName = target.nodeName.toLowerCase();
			// 		if(targetName === "span"){
			// 			window.location.href = target.parentNode.href;
			// 		}else if(targetName === "a"){
			// 			window.location.href = target.href;
			// 		}else if(targetName === "i"){
			// 			window.location.href = target.parentNode.parentNode.href;
			// 		}
			// 	});
			// 	document.getElementById("rs").addEventListener("click",function(e){
			// 		var target = e.target;
			// 			if(target.nodeName.toLowerCase() == "a"){
			// 				window.location.href = target.href;
			// 			}
			// 	})
			// }

			rules.some(function (rule) {
				if (rule.url.test(url)) {
					matchedRule = rule;
					return true;
				};
			});
			
			// console.log(matchedRule);
			if (!matchedRule || !matchedRule.enabled) return;
		
			
			var iTarget = getElement(matchedRule.insertIntoDoc.target);
			var iInput = typeof matchedRule.insertIntoDoc.keyword == 'function' ? matchedRule.insertIntoDoc.keyword : getElement(matchedRule.insertIntoDoc.keyword);
			
			// console.log("searchEngineJump test: ",iTarget, iInput);

			if (!iTarget || !iInput) return;
			
			// 添加全局样式
			var globalStyle = document.createElement('style');
			globalStyle.type = 'text/css';
			globalStyle.textContent = getMStr(function () {
				
				var cssText;
				/*
					#sej-container {
						display: block;
						position: relative;
						z-index: auto;
						padding: 1px 0 1px 5px;
						line-height: 1.5;
						font-size: 13px;
					}
					
					
					#sej-expanded-category {
						font-weight: bold;
					}
					

					.sej-engine {
						line-height: 2;
						display: inline-block;
						margin: 0 0px 0 0;
						border: none;
						padding: 0 8px;
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
						top -= 90;
						left -= 120;
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
					
				},
			};
			
			var pageEncoding = (document.characterSet || document.charset).toLowerCase();
			
			// 创建dom
			var aPattern = '<a href="" class="sej-engine" target="$blank$" encoding="$encoding$" url="$url$"><img src="$favicon$" class="sej-engine-icon" />$name$</a>';
			// var aPattern = '<a href="" class="sej-engine"' + (prefs.openInNewTab ? ' target="_blank" ' : ' ') + 
				// 'encoding="$encoding$" url="$url$"><img src="$favicon$" class="sej-engine-icon" />$name$</a>';			
			var container = document.createElement('sejspan');
			container.id = 'sej-container';
			
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
					if (matchedRule.url.test(engine.url)) return;// 去掉跳转到当前引擎的引擎
					
					var a = aPattern.replace('$encoding$', (engine.encoding || 'utf-8').toLowerCase())
						.replace('$url$', engine.url)
						.replace('$name$', engine.name);
					
					if (engine.favicon) {
						a = a.replace('$favicon$', engine.favicon);
					} else {
						a = a.replace('src="$favicon$"', '');
					};
					if (engine.blank) {
						a = a.replace('$blank$', "_blank");
					} else {
						a = a.replace('target="$blank$"', '');
					};
					
					engines.push(a);
				});
				
				// 非空列表
				if (!engines.length) return;
				
				engines = engines.join('');
				
				if (category == matchedRule.engineList) {
					container.innerHTML = engines;
					// container.innerHTML = '<sejspan id="sej-expanded-category">'+ cName +'</sejspan>' + engines;
				} else {
					var dropList = document.createElement('sejspan');
					dropList.className = 'sej-drop-list';
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
				// var sej = document.getElementsByTagName("sejspan")[0];
				// sej.appendChild(item[1]);
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
			}

		});

	};
	


	// 如果发生通信的话，需要一个独一无二的ID
	var messageID = Math.random().toString();
	
	// console.log("messageID: ",messageID);
	// 把指定函数丢到真实环境中执行，规避一切脚本管理器乱七八糟的执行环境产生的奇葩Bug，
	// 特别是chrome上的那个坑爹tampermonkey。。。
	function runInPageContext(fn) {
		if (typeof fn !== 'function') {
			return;
		};
		
		// 创建一个脚本插入到pageContext执行
		var script = document.createElement('script');
		script.type = 'text/javascript';
		
		// 去掉函数名，防止污染全局环境。
		var sContent = ';(' + fn.toString().replace(/[^(]+/, 'function ') + ')(' + JSON.stringify(messageID) + ');';
		
		// console.log('执行的脚本实际内容\n', sContent);
		
		script.textContent = sContent;

		// 检测html元素是否可访问
		// scriptish @run-at document-start时，html元素在第一时间不可访问
		var de = document.documentElement;
		
		if (de) {
			de.appendChild(script);
			de.removeChild(script);
		} else {
			new (window.MutationObserver || window.WebKitMutationObserver)(function (ms, observer) {
			
				var de = document.documentElement;
				if (de) {
					// console.log(de.outerHTML);
					observer.disconnect();
					
					de.appendChild(script);
					de.removeChild(script);
				};
			}).observe(document, {
				childList: true,
			});
		};
		
	};

	// runInPageContext(contentScript);

	// 使用了 Content Security Policy (CSP) 安全策略的网站
	var CSPList = [
		"www.zhihu.com",
		"github.com",
	]
	var hostname = window.location.hostname;

	for(let i=0;i<CSPList.length;i++){
		if(~hostname.indexOf(CSPList[i])){
			contentScript();
			// console.log('SEJ: black list');
			return
		}
	}

	// console.log("run");
	runInPageContext(contentScript);



})();

// ==UserScript==
// @name           searchEngineJump
// @author         NLF&锐经(修改)&iqxin(再修改)
// @description    方便的在各个搜索引擎之间跳转,修改自脚本4.0.5.5,版本号改为4.1.0.0
// @version        4.1.1.3
// @created        2011-7-2
// @lastUpdated    2017-03-20
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
						border: 1px solid #E5E5E5;\
						position: absolute;\
						left: 5px;\
						top: 150px;\
						z-index: 9999;\
						width: 80px;\
						margin-left: 150px;\
					',
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
						z-index: 99999;\
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
						keyword: (function() {
					return document.getElementById('firstHeading').getElementsByTagName('span')[0].lastChild.nodeValue;
				}),
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
						keyword: 'css;#q',
                        // target: 'css;.zu-top',
                        target:"css;.search-tabs",
                        where: 'afterEnd',
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
					url: /^https?:\/\/www\.bilibili\.tv\/search\?/,
					enabled: true,
					engineList: "video",
					style: "\
						border-top: 1px solid #E7E7E7;\
						border-bottom: 1px solid #E7E7E7;\
					",
					insertIntoDoc: {
						keyword: 'css;#search_keyword',
                        target: 'css;.search-main-inner',
                        where: 'beforeBegin',
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
				keyword: '//input[@name="keyword"]',
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
				position:fixed;\
                top:44px;\
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
                target: 'css;body',
                where: 'beforeBegin'
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
						keyword: 'css;#keyword',
						target: 'css;.middle-box',
						where: 'beforeBegin',
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
        			url:/^https?:.*?runoob.com\//i,
        			engineList:"htmls",
        			style: '\
		                border-bottom:1px solid #E5E5E5;\
		                border-top:1px solid #E5E5E5;\
		                position:relative;\
		                text-align:center;\
		               ',
		            insertIntoDoc: {
		                keyword:function(){return window.location.href.substring(window.location.href.lastIndexOf("=")+1);}, 
		                // keyword:'css;input#s', 
		                // keyword:'//input[@name="s"]', 
		                target:'css;.navigation',
		                where:'afterEnd',
		            }
        		},
        		{
        			name: "GitHub",
        			enabled:true,
        			url:/^https?:\/\/www\.github\.com\/search\//,
        			engineList:"htmls",
        			style:'\
		                border-bottom:1px solid #E5E5E5;\
		                border-top:1px solid #E5E5E5;\
		                position:relative;\
		                text-align:center;\
		               ',
	               insertIntoDoc: {
	                   // keyword:'css;input#s', 
	                   keyword:'//input[@name="s"]', 
	                   target:'css;.codesearch-head',
	                   where:'afterEnd',
	               }
        		}
			];
				 
			
			// 搜索引擎列表
			var engineList = {};
			
			// 网页搜索列表
			engineList.web = [];
			
			// engineList.web[0] 中间的数字表示排序(数字不能重复，否则后面的会覆盖掉前面的)，越小数字越靠前，小于0该引擎不会显示在页面上
			engineList.web[0] = {
				// 搜索引擎名称
				name: 'Google',
				// 搜索引擎地址，关键字变量用%s代替
				url: 'https://www.google.com/search?q=%s&ie=utf-8&oe=utf-8',
				// 搜索引擎的站点图标
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACyElEQVQ4jXWT72tTdxTGv4yN+cY/oMFGqQpD7ZjtsAF/oPEXGFhtbUEn4mSTatSJVua0UNNSEG/01UAH0m6dN1hdW5SbrE3sgkr1hb9lRTFW3Upqcy1NzE1yc/Prfvaia7dM+7w853keznM4R4h38aHdbt8gSZJbURSv3++/Jsuyp6GhwWm1Wsvew/8XNptteTAYvMEMiKjquMvlahVCzHpHXFdXV69pWhLAHHtNSm7nbdMhYo170U61kLkZnDZSFMUrhJg9La6qqrLpum4A6FcuM+5YReRTK5HyUiLlViJLSolULiB2eA+mFgdAlmWPEOIDIYT4aHBw8DaA3tODavuESMV8orvqSZ7/Af1XD/HW71HXVKKdbsPUU9OT1NTU1Aq73b4BgPhLJrYtY2zxQuKtxzATWlH+/MvnYJpFtUAgMCDcbvcZAHOkjXSHIH50LYW3iZn2WIRoNBoTiqJ4AfIPq8n1CwrDB4pIPw5kcP6k0+hJ0+hJ8+0vaU5eNdCzk30RCAQGAPL311PwCnjVXGSw+7zOvIMa5UcTVDQl+Ox4Aoc7yfg/QwpZlj0A5pNvML2Cp/d2FhmExgrceZHn0Z952q9nqGhKsONsCiMP2Ww2J5xO534A481V3N1lLL24md/Dd96b2dWdZfF3Gi29xqR5KDQsSkpK5kaj0ZhhFtgVbKOkfTUru7+kK+RjNKkSzyR4FgvRHOzn8+YJVrakefxXHgBJkk4LIYRwuVytAOHUG7b2H8basZr5netY2/sVm737WHZpC3M6VrDk3Aku3Jq8g9HR0TGLxWKdOsaPfT7fbwBaLsWZBx1svPI1i+RNlP28jsquLWz3H8E3cg0AwzAyDofji/+/w+zOzs4LU3mTZprHE8+4q/7BcGJkeg/hcPh1dXV1zYwfWVtbW9fX1+dXVXV8SpTL5fJDQ0NPJElyWyyW0v/y/wbuo60BpWkyAAAAAABJRU5ErkJggg==',
				// 搜索引擎编码（默认utf-8）如果跳转后乱码可以填写 'gbk'
				encoding: 'utf-8',
				// 是否新建网页搜索,默认当前页,如果需要在新的标签页打开 增加下面的属性
				// blank:true,
			};	
			engineList.web[1] = {
				name: '百度',
				url: 'https://www.baidu.com/s?wd=%s&ie=utf-8',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACiUlEQVQ4jXWSXUiTYRTHd9eFCaVic35kTdIFGk7LbhQvot2pEIxYpDlTayoKCoJQQQTeeBdEF0mGSfhR60Poxq4q0zRNZWrQtvd1Tl8/0tzeN137+HUxTebqwOF5znP+53d4zvOojsRfKNWcfDEUp+mO8PgDcXS+byglvaNTpUnvH37QCaPj+z4+CbZ5mLaF46/TMDsPYxP7muFRKDOBKk7T/W7aRoSFgLvtGwxYvQAoSpDpGR8HrbpBQRWn6R4aHY9MdD/zEJNoJ7/Qxdw3HyazxNEUB4+feiJ0ZoscBoyM7XYOhddHXVvEHLNztsjFq0EZnV4kVm3n9r0f/waMT0IgAC1ta5jMEp9GtzFeXaa9Y4MtTxBjuUSRYZHJqR2klUA0wDYHDudvUjOdxKrtdD7Z+ivy+0Ns74SQVgO03lrnzPkFrK9lAKrqdgEzs+Be8pORIxCbZGfgpZfNzSAVNRIXS918HNnGKwfJLhA5rLZjqpQiAZ+/hLv1W73cf/iTzc0g5dUSCWkO1BkO8gtdvB/e5tKVZQ7Ff6ftznok4OArNLSskpThJEsvossTSc0SMJS6GXwrY30js7oWiJzBHsDjDXdWa51k5opk6fc9+ZQTQ5kbQfRHD3EP0PvcS2K6I6o4Sy+i04skpjuoqFkhGPoPoKfXS0KaA222gDZb4PhpgTRdeJ+ZK6LWOikxLkUDxibCB2vrAS5fk9DlieQXujCUuSkxLlFQ7CJNJ5CRI9DTu/8bq+pkVEc1fR8ODlFYCLAsBfHvXnd1LcjUjA9xIRChq7zpQ5V8oqOrzBTCbJGpssjUNio0tCjUNyvcaFKobVSoa1Zoav1FQ4vC9XoZs0Wm0uLjXPHizh+9o/XugzOJqwAAAABJRU5ErkJggg==',
			};
			engineList.web[2] = {
				name: '必应',
				url: 'https://cn.bing.com/search?q=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5ElEQVQ4jZ2Tv0sbYRyHX5Uzl8bLVNrSToUOHbr0T2gHqf1Baf8AvcUruNcpd5e75BK9H0Q9gptCogZKh6J2kWtDhkpxkmCwOIidijpYECoI5unQNo0QauwHnuUD78PL9/2+on9w0ItrWiSraiSNjER9w8NRTFUjuQvimhaJuKZ9ThaLJHyfGzMz3AxDRC6H7LooQYDi+50JApJhiJBVNVJ8nx7TZKhU4svhIYX1dW4XCsRsm4FstjOOg+K6fwXCMHiysMCfvKhUELp+OcHjcrkleL60hEil/l/wslKhxzAQuk6vaRLPZC5/g9dra5jVKvdnZ5FtG5FKIVkWSjeCB3NzvFpeBuD7yQnvd3YYW13lztQUsm1fLHhUKnE1n6e+v0973mxtIaXTJDKZLoY4Ps71yUneNhqt/uPuLrJlceUiwcP5ea5NTJCt1fh2fNzq321vI6XT/xacNZuUNzdpHBy0Dp41m1Tqde4Vi/RbVucZPG1bpPbU9vZ4triIlE7TZ5qdXyFmWdzyfYobG/w4PQXg69ERYysrKI6D0PXzu9Am+KAEAYrjELNthGEwVC5jVqvcDUOErv/6E45znlwOxfMQ8ujop2QYorguiueRcF16HQeRzSLl8wz87hXXPY/nkZye5icfi28JEi0cegAAAABJRU5ErkJggg==',
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
				// favicon: 'http://www.youtube.com/favicon.ico',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABcUlEQVQ4jc3Tv0tCURjG8RfyXs852rlX+6Eg0l8QBP0VDQ3RFkFDS1uDLRJEQWBDBQ5FKYa/GsogCKIhyIoGo7NUXAjCWXGR6xKC8LRk3K7U0FIvfKbnu75E/+H4qk87zEqubgOiXQn68JOi4X3KSq5WuJ4nIqIFpifuAj78xgLTE5SSTF0HBJxuQiZqhwXcj4/CvTmlJFNUMljjMiDgdDUSRrvdxluzicf5Obj3rpLBGnRm8M65KfBFNAzbtmHbNlqtFl4zaVyEg3B3Zwbv0Kkp0CMaQq1W+1Sv1/Gc2uvtTAE6NjjcjiLDqFarn1S5jO2x0Z7u2OCgnGSdosHhVIgMwbIsWJaFk61NLA6a2JMM7i4nWYeSfm/jQHI4ZUIDeKhUsDE9hSXhRdq1dyX93gbFhab2JYfTruSYZRrW/AzuzSkuNEWTuiexIxl+Y1L3JIiI+Azry8eEpmJCU8l+hu8sc/2l203onnUi0v/wBT/uHRErZcny4qMNAAAAAElFTkSuQmCC',
			};
			engineList.video[1] = {
				name: 'bilibili',
				url: 'http://www.bilibili.tv/search?keyword=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACTElEQVQ4jY2QMUsbcRjGH7n73z+m4g0OblkDpkOgRT/AKeRCYvwHzxDBBOLUzU/gF+gkjlLoKlTBxQvxCqe5u4iFkw6CATfddLPSCIWnU8/E1rYP/Jbnfd/f8ALPIqUsj4+Pe1LK8lCXBeAB8AzDeP38JokQ4u309PSP2dlZmqbZByANw8iZpvm1UCgwn88znU5/+pvgzcTExGB/f5+O4xDAewC5hYUFPj4+cn5+/huA+osCADAMw8lms8zlcpycnPySTqff2bbNVqtFALWX7kpSSk8I4aVSqVDXdY6NjdE0TU5NTVHXdQJgKpWKhBCelNLTNO0DAAkAlVar9T0MQ/Z6PYZhyDAMGUURgyBgt9tNul/96ekpd3d3mclkDqDrenR+fs7t7W0qpVitVhOUUgnD/fLyMm9ubri2tkYIIT73ej0Wi0Vubm7S930GQcBOp8N2u50w3M/MzNB1XTabTUII4UVRRKUUz87OuLOzQ8dxeH19zeFsbW1xZWWFd3d3rNVqPDw8ZKPReBJUq1WGYUilFAHw+Ph4RGBZFgEwjmPW63W6rjsqUEqx0+mw3+/T930OBoMRweXlJX3f5/39Pcvl8p8F7XY7OdjY2ODc3FzCxcVFMisUCr8LlpaW6Pt+shTH8cgTHx4eklmpVHr6ga7rQRzHrFQqzOfztG2btm3TcRzW6/WExcVF2rbNYrFI0zTZ7Xa5vr5OaJr2cW9vj1dXVzw6OqLruv/k5OSEt7e3tCxrAACvMpnMwerqKhuNxn/RbDZpWdZA07TKT3uI/eaBFtmBAAAAAElFTkSuQmCC',
			};
			engineList.video[2] = {
				name: '优酷',
				url: 'http://www.soku.com/v?keyword=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABnElEQVQ4jZ2Sv2vCUBDHv4OFYEAeRrFihjeYLl3eILRDhkcXKQg6tWAHs4W6WBAq2CWCFLe4CS7ZOhWyuHTK4uDmpKtD/4As3dOhOYk/SrGBg3fc+37u7vsCAOztPud/DXhEseoUN7cX6Qbi7/Yi3Vh1ihuqT+pZDwADAIyqzE2KKWatfEDiY/W5XVgCAGatfEBdm0K1mkK1+pI5NAF1jgWsKVSLIE2hWr92GFWZCwCUJ1ea24Xl14BHfckcAIDJFTmpZz0qUJhckX8CyINRlbnnDDw5kckVmVzB5Ip8vMo87ayw/wIUnz093AceMxkAWF8yh8z87Onh233Ov8yfCbpgckVSo7ldWMa7s1h+zjV77Gfunl0SKNcNS+t6AUqGUG8enuhMdc0e+5o99gEAqXJF6tN1pE/XEYkpz9Tajtb1AjoTgOqpckXuAJLiorsIUTLESYB9MQD8C5B/eV+SSScBNHvs70MIwFpD78CzkiEOTGStoZcEZmptZ5t3vaDoLkJ9uo4Krx+bn3lKhtjuTT9GDImfliWhW3Hs0Tdk6pGCP1WKswAAAABJRU5ErkJggg==',
			};
			engineList.video[3] = {
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
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB/UlEQVQ4jZ2TPUsjURSGhxm4ibGRaJcioEVKuwj2wcafICgIomJj61amENdqbeyMChIsFERBbVQsbMRGBKOdKAScL2M+djLJnftsMZglJsKyF251znnue895j6Zpmsjq+vqDYTimEPzLLRiGm9X1dU3ThLas67++TY7F+L2xgapWkc/PlGdn2+JLur6qdXu5ND5O/fCQ8vw8AP7pKc27O1SphBmNtvIeDMPR2op7e/FyOQCU41BbWQHASaUwo1GsgYEOlW2Az2JvawsrHqeazYYKjo8pT09j9fV9D3jPZACo5/OYQmAnk3w9wesrbjrdHVA/OEB5HnYigSkE/skJSIl/cYGqVPiYmCCwbZTrYg8OdgKCtzf883NMIbD6+0EpvJ0dKouLALxnMrijoyAlXi7XCUAp6nt7ofxEIuzF5ialsTEAynNzmELQuLoisKwuCopFGtfXrUDz9haaTZr39yAlzvBw+NX9fQiCToC3vQ1SYg8NYQqBk0qFjTNNylNTYUEkgiwUkE9PnQA3nYYgwD87w+zpCXvxZWwfk5MAVJeXu/ugtroajvLoCDuZbDNYZWEBfB/5+IgVj/8FtFk5EqG2tgZKoTwP+fJCPZ8nKBYBaN7ctMbcsnK3ZXJHRvB2d0NLuy6Ny0vKMzOYsVhb3g9d/6l9rnPBMNz/Wec//7qAp1Pb2H8AAAAASUVORK5CYII=',
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
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAD4UlEQVQ4jQXBC1DTBRwH8H91eYJ4FIYgmJ4alnnemSh4WoBAHXrKo20J8nJwYzy8gE0hYUxEeQ1kIOgYDggYz2DGYzKCAQLymPHfUCIqwizkzuMSubxOm//vr8+H+fhThxih4pA5KMPFHJjuwkbl72f9Je+wZ67sZXmyXWyA9D1WWODOBkg3sYJsNzYsZw/7Raq9WVh00Ox/dqeKERV7zjx41UoNllTSmBJparWBio18Mj4pp475S1QxGk2mVS2Vj0RSz+8FZHh8jYqNfDK/aKVbk2JiQrK2W7QzEspoPwZpswdUYyIk1uxFxXAs8vVfQqL1RO1UKpLrDyJXfwr5vcEQV3+IuvsSkul8iPGV2LK80vV0usQRGfXHkVbrB0GxA4IK1yOkyA4hig0IVtggsHA9UjRHUayLxTn1IQQX2RC/xI4YX4kNK9LspHuzPVh9voK+iUoUtoQirHQz+CUbIVDaI0ixDjf0yXi+9gxPV/5Ay4AcSep9JCjbSIy35A22oItPnJXDwpIZWqMUulE5vqn3Al9pB57SFqLK3Vh6uojXVg5td3NwezwDhR3BFFphT4yP9E22pDecOCuH8bluXG7zp55pOWqM8RStcqZg5VuoNKSA4zhMzhmQ1exDdyxZUOp5FK56lxi/9LdZpSGcuP84TM3fgVizC02T8eify0Za0wGE33TEzMIIOCuH6z0JSG/ej6HfclDRz6PIqk3EfJ65ji0biCTOyuHHX39AdNUWKug9hqkneaQZ+4oKvj8N6ysrHi//AnG1Gy53HaGJpRxUjfLpbI0jMQEyW7Z8MIo4K4fphX7E1rxPidrt6F9MoXvLF+nhX33gOA7t40UIVW2Aos+HzH/noNYkoJg6J2KOZ9uyN+/GEPeag2VxCPH1OxBV7YCqyVOYfSHHsrUTK2uPkNnhhXCNPUoG/TD/MhdNM6EkanAhJvCKPXvNKKC11X8wMtsBsXYbYuqdcF63B0PLSZh7mY1GSwTitK6IqXNGbt9hTK5IoZ4KIHHTVmL4+ZvZ5Ns7SN7pi/Ptn0DU6ARxkytEWmek6j6ATL8PCS0uiGvcgrhGF8Q3u0Kq241zbdsooW0rMcKyj9jqmViS9x6F3PAZVBNCZHR74PpYGPIGTuBilydU40Jk6Y+geDgEpSMCpHW6Q22KpbxBP2Iu1PnOPfhXR9/9LKPmhxfItNJKapOQhpeqqHshn741J5FppY1q2QQyPFLSwJ8VpL4vpOlnHdQyLyHm5NduqluWKLo66E1Xjd50Y+oMZRoOUNkEjxQjAXSp/zCpTBGU1edBRaMnSDkeQjKDO1WZI0hS6/XT/6yhkUqSt5KtAAAAAElFTkSuQmCC',
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
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACiUlEQVQ4jXWSXUiTYRTHd9eFCaVic35kTdIFGk7LbhQvot2pEIxYpDlTayoKCoJQQQTeeBdEF0mGSfhR60Poxq4q0zRNZWrQtvd1Tl8/0tzeN137+HUxTebqwOF5znP+53d4zvOojsRfKNWcfDEUp+mO8PgDcXS+byglvaNTpUnvH37QCaPj+z4+CbZ5mLaF46/TMDsPYxP7muFRKDOBKk7T/W7aRoSFgLvtGwxYvQAoSpDpGR8HrbpBQRWn6R4aHY9MdD/zEJNoJ7/Qxdw3HyazxNEUB4+feiJ0ZoscBoyM7XYOhddHXVvEHLNztsjFq0EZnV4kVm3n9r0f/waMT0IgAC1ta5jMEp9GtzFeXaa9Y4MtTxBjuUSRYZHJqR2klUA0wDYHDudvUjOdxKrtdD7Z+ivy+0Ns74SQVgO03lrnzPkFrK9lAKrqdgEzs+Be8pORIxCbZGfgpZfNzSAVNRIXS918HNnGKwfJLhA5rLZjqpQiAZ+/hLv1W73cf/iTzc0g5dUSCWkO1BkO8gtdvB/e5tKVZQ7Ff6ftznok4OArNLSskpThJEsvossTSc0SMJS6GXwrY30js7oWiJzBHsDjDXdWa51k5opk6fc9+ZQTQ5kbQfRHD3EP0PvcS2K6I6o4Sy+i04skpjuoqFkhGPoPoKfXS0KaA222gDZb4PhpgTRdeJ+ZK6LWOikxLkUDxibCB2vrAS5fk9DlieQXujCUuSkxLlFQ7CJNJ5CRI9DTu/8bq+pkVEc1fR8ODlFYCLAsBfHvXnd1LcjUjA9xIRChq7zpQ5V8oqOrzBTCbJGpssjUNio0tCjUNyvcaFKobVSoa1Zoav1FQ4vC9XoZs0Wm0uLjXPHizh+9o/XugzOJqwAAAABJRU5ErkJggg==',
			};
			
			
			// 图片搜索列表
			engineList.image = [];
			
			engineList.image[0] = {
				name: '谷歌图片',
				url: 'https://www.google.com/search?q=%s&tbm=isch',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACyElEQVQ4jXWT72tTdxTGv4yN+cY/oMFGqQpD7ZjtsAF/oPEXGFhtbUEn4mSTatSJVua0UNNSEG/01UAH0m6dN1hdW5SbrE3sgkr1hb9lRTFW3Upqcy1NzE1yc/Prfvaia7dM+7w853keznM4R4h38aHdbt8gSZJbURSv3++/Jsuyp6GhwWm1Wsvew/8XNptteTAYvMEMiKjquMvlahVCzHpHXFdXV69pWhLAHHtNSm7nbdMhYo170U61kLkZnDZSFMUrhJg9La6qqrLpum4A6FcuM+5YReRTK5HyUiLlViJLSolULiB2eA+mFgdAlmWPEOIDIYT4aHBw8DaA3tODavuESMV8orvqSZ7/Af1XD/HW71HXVKKdbsPUU9OT1NTU1Aq73b4BgPhLJrYtY2zxQuKtxzATWlH+/MvnYJpFtUAgMCDcbvcZAHOkjXSHIH50LYW3iZn2WIRoNBoTiqJ4AfIPq8n1CwrDB4pIPw5kcP6k0+hJ0+hJ8+0vaU5eNdCzk30RCAQGAPL311PwCnjVXGSw+7zOvIMa5UcTVDQl+Ox4Aoc7yfg/QwpZlj0A5pNvML2Cp/d2FhmExgrceZHn0Z952q9nqGhKsONsCiMP2Ww2J5xO534A481V3N1lLL24md/Dd96b2dWdZfF3Gi29xqR5KDQsSkpK5kaj0ZhhFtgVbKOkfTUru7+kK+RjNKkSzyR4FgvRHOzn8+YJVrakefxXHgBJkk4LIYRwuVytAOHUG7b2H8basZr5netY2/sVm737WHZpC3M6VrDk3Aku3Jq8g9HR0TGLxWKdOsaPfT7fbwBaLsWZBx1svPI1i+RNlP28jsquLWz3H8E3cg0AwzAyDofji/+/w+zOzs4LU3mTZprHE8+4q/7BcGJkeg/hcPh1dXV1zYwfWVtbW9fX1+dXVXV8SpTL5fJDQ0NPJElyWyyW0v/y/wbuo60BpWkyAAAAAABJRU5ErkJggg==',
			};
			engineList.image[1] = {
				name: '百度图片',
				url: 'http://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACiUlEQVQ4jXWSXUiTYRTHd9eFCaVic35kTdIFGk7LbhQvot2pEIxYpDlTayoKCoJQQQTeeBdEF0mGSfhR60Poxq4q0zRNZWrQtvd1Tl8/0tzeN137+HUxTebqwOF5znP+53d4zvOojsRfKNWcfDEUp+mO8PgDcXS+byglvaNTpUnvH37QCaPj+z4+CbZ5mLaF46/TMDsPYxP7muFRKDOBKk7T/W7aRoSFgLvtGwxYvQAoSpDpGR8HrbpBQRWn6R4aHY9MdD/zEJNoJ7/Qxdw3HyazxNEUB4+feiJ0ZoscBoyM7XYOhddHXVvEHLNztsjFq0EZnV4kVm3n9r0f/waMT0IgAC1ta5jMEp9GtzFeXaa9Y4MtTxBjuUSRYZHJqR2klUA0wDYHDudvUjOdxKrtdD7Z+ivy+0Ns74SQVgO03lrnzPkFrK9lAKrqdgEzs+Be8pORIxCbZGfgpZfNzSAVNRIXS918HNnGKwfJLhA5rLZjqpQiAZ+/hLv1W73cf/iTzc0g5dUSCWkO1BkO8gtdvB/e5tKVZQ7Ff6ftznok4OArNLSskpThJEsvossTSc0SMJS6GXwrY30js7oWiJzBHsDjDXdWa51k5opk6fc9+ZQTQ5kbQfRHD3EP0PvcS2K6I6o4Sy+i04skpjuoqFkhGPoPoKfXS0KaA222gDZb4PhpgTRdeJ+ZK6LWOikxLkUDxibCB2vrAS5fk9DlieQXujCUuSkxLlFQ7CJNJ5CRI9DTu/8bq+pkVEc1fR8ODlFYCLAsBfHvXnd1LcjUjA9xIRChq7zpQ5V8oqOrzBTCbJGpssjUNio0tCjUNyvcaFKobVSoa1Zoav1FQ4vC9XoZs0Wm0uLjXPHizh+9o/XugzOJqwAAAABJRU5ErkJggg==',
			};
			engineList.image[2] = {
				name: '必应图片',
				url: 'https://www.bing.com/images/search?q=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5ElEQVQ4jZ2Tv0sbYRyHX5Uzl8bLVNrSToUOHbr0T2gHqf1Baf8AvcUruNcpd5e75BK9H0Q9gptCogZKh6J2kWtDhkpxkmCwOIidijpYECoI5unQNo0QauwHnuUD78PL9/2+on9w0ItrWiSraiSNjER9w8NRTFUjuQvimhaJuKZ9ThaLJHyfGzMz3AxDRC6H7LooQYDi+50JApJhiJBVNVJ8nx7TZKhU4svhIYX1dW4XCsRsm4FstjOOg+K6fwXCMHiysMCfvKhUELp+OcHjcrkleL60hEil/l/wslKhxzAQuk6vaRLPZC5/g9dra5jVKvdnZ5FtG5FKIVkWSjeCB3NzvFpeBuD7yQnvd3YYW13lztQUsm1fLHhUKnE1n6e+v0973mxtIaXTJDKZLoY4Ps71yUneNhqt/uPuLrJlceUiwcP5ea5NTJCt1fh2fNzq321vI6XT/xacNZuUNzdpHBy0Dp41m1Tqde4Vi/RbVucZPG1bpPbU9vZ4triIlE7TZ5qdXyFmWdzyfYobG/w4PQXg69ERYysrKI6D0PXzu9Am+KAEAYrjELNthGEwVC5jVqvcDUOErv/6E45znlwOxfMQ8ujop2QYorguiueRcF16HQeRzSLl8wz87hXXPY/nkZye5icfi28JEi0cegAAAABJRU5ErkJggg==',
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
				url: 'http://www.easyicon.net/iconsearch/%s',
				favicon: 'http://cdn-img.easyicon.net/favicon.ico',
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
				url: 'https://translate.google.com.hk/?q=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC/UlEQVQ4jYWTT0ybdRyH34MH4wVjovG2ZIl60IMXNTgoDtlG/wAy49bt4r+8XSFm2SZGox6WWNnal45SbKAbygKbShAT38yMNC9LMGyQsS5OdGtpOwqNvNkLLbwv76+KJns8lES9jG/yXJ98kidf6bGn6vY42tWEo/2SVutXtZotHEcT2o5q33vSdlfbpk68OQSH4uCNw8F+ONAPhwbhlQ9mbkuS9NADBY72S1e8cXg9ItgfEbR2bxH5k5aw+PuRJ5994YGCGr+qeePQ2i1whQRuReAMCZq6BC0992k6+nVCfuetE7J8pEOW5Q6fz/e+LMsdbW1tH7pcrgNSjV/V3uiD5rAgNr7BzB2TyzdM3u63aThVxjcgSGcKCNvCtm0sy8I0TWzbZm1tDellv6o1RSE2bpGcX+fjbzcIjG1w+AvBvqDApQhGxlMsZNOsrhgY9+6h6zq6rmNZFlL1EVVr7oXrKZOOCzbeXpvLSZPxpIl81sYR+IPPLi6RufMr0aERpm/ewiwV0fXlyoJqn6p5eiBx02RgwmJfUBBSLQr6Ov4vbeo7NzkYXiZ6foxPzvQRHvyGyPAo/SM/kM0vVQTNUfCds5lNrzM5ZzKT+lfmCpVxKwLl/E9cvXaNxORVOuNDpLM5VovFimB/DPaeFnh7BSe/2+D4sE1jsFLDrQj2hjY53jdHOP4VysAFrkxNoy//TqlUQnrRp2qtMfB0CRqDgvrPBQ2dW0lDNq5QpYbcV+IjJc6xUz2kUmmWFhcxDAOp2p+YqgjKeLrKuJXKZNcWzpCNMyioD6wTvTjFqPojp88NM/fbbVYMA+kZd6C7JQaeHvBEwNN9H/d/cHZt0qiUcXT+RXB0maVcmu/HNSanr7OyYiBJkvTwozt27a7aufvVqp21/+Pxp+uddd6xhYZ3b7Dr8BRnBn8ml02zcDdHLpdF13W2fbbnX2o/W/faBJ8GJpi79QvpdIr5+XkymQzF4ur2gqonnttzUkmSSmXJ5++Szy9SKBQwDIPZ2eTaP/p6Y/2tPjpQAAAAAElFTkSuQmCC',
			};
			engineList.translate[1] = {
				name: '百度翻译',
				url: 'http://fanyi.baidu.com/#auto/zh/%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC/klEQVQ4jYWSW2gcZRiGB0Iw5rS72Zk0se0GbSioRfBeBZVAwQPeeOOJyDa1NO2FFLGiMW32kNk4yc6a04XYktIqXnhIM21aXBMjpKEpBkHQCzGxIbnQYGzM/P/szM7M40UaLaHgxQMfLx8PvB+foiiKsvexV15XO768XJu0ipH/oTZpFSOHLxcTLw+OVu1quV/Z+/ir7XsGQSuAZkI8D6q5Ne8kNgD1/dBYAG0YWt+eXVC0jq+uqAVQdUFcF9RnBLHeLe7psbk3JahLC2pSgt2G4MEPJZGMQM05NBdAqU1OTmkm1GUEDw1Kbqz6HL/kcmBYkp5xeedrl+4pl65vPOaWfVY2Qh4dldSlJWoelEjSKqom1KQE+wuSqUWfIxMuTTlBZsbj2rLPEx87nJ72ADizUCbRL4j2SrRtQWMBmvoEjTlBVY9NfUYQyQqULpvuKY/vlnzW7JCR+TLKu5so79s06JLGPCgVr00Un/wUZn7zmV7yubEa8PwFh4pum1ZTMDLvsSZCNl24vuJjzHp0WiX2mQ4xA5Sadqv4wCi0jTk8e97h71JIp1Xi6bMOQ9c9TlxxGZkv0z/rce6HMjdvhXz+U5lEvyRq3K7QkIfK0zbRrM0vfwZ0Wi4PD0le/KxE25jD4nrI4nrI8Usu2RmP3YagNn27QiRpFTUTolnBfR8IFtcDjlx0qei2OWa5vHXVZWUj5MffA567UOLgOYe4LojdecSdgsMXXQ4MSd4Ydzk0XuLmrZCf1wKOWS7mnEfPtx67+iTxgbsI/rADjk6UeGRY8uakS/sXJZb+Cvl+NaBtzOGZ8w5PnXVoNnYIYllBU5/gzEKZFz5xqDxlU3nKRumy+XU9YG45QHnPpiolqEkL4vp2hY7Jac3cemVVF1SnBNGsQNMFDb2CeK8gf83j0LhLXVr8u6fmJJoJSstLQx9pwxDXHVRdEtclqi5Rc/9RnZZUpwXadqZLYga0GJu+Uq/tad13cna+uQBqHrS7oA6ANnBHZkLC2LATB0+c/AeyG7ZNYGTtAwAAAABJRU5ErkJggg==',
			};
			engineList.translate[2] = {
				name: '有道词典',
				url: 'http://dict.youdao.com/search?q=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2ElEQVQ4jWNgGFQggps34Y2i2v83imr/78gpvZdgYFBgYGBg8OXkCUMWx2sITOEbRbX/MAMYGBgEkMVxahZiYJCBKTonLX+fkDgG0GNlNYIpnCQsOh8mbsjCYgkTXy8uvR+nAcgK0/gECmDifpw8oTDxMgGhBpwGOLKzu8MU7peSOW/BweFgyMJimc4rUAQT9+TiCiDKC7gwUsBiBezIzoUFGrKr8GnGBgSQDYjg5k3Aq7pFSKTfgoPDwYKDwyGNT6CAZNtx+RuqWYCgAXfklN6jayTo7AEHAIjTnaHLaQtfAAAAAElFTkSuQmCC',
			};
		  engineList.translate[3] = {
				name: '必应翻译',
				url: 'http://cn.bing.com/dict/search?q=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5ElEQVQ4jZ2Tv0sbYRyHX5Uzl8bLVNrSToUOHbr0T2gHqf1Baf8AvcUruNcpd5e75BK9H0Q9gptCogZKh6J2kWtDhkpxkmCwOIidijpYECoI5unQNo0QauwHnuUD78PL9/2+on9w0ItrWiSraiSNjER9w8NRTFUjuQvimhaJuKZ9ThaLJHyfGzMz3AxDRC6H7LooQYDi+50JApJhiJBVNVJ8nx7TZKhU4svhIYX1dW4XCsRsm4FstjOOg+K6fwXCMHiysMCfvKhUELp+OcHjcrkleL60hEil/l/wslKhxzAQuk6vaRLPZC5/g9dra5jVKvdnZ5FtG5FKIVkWSjeCB3NzvFpeBuD7yQnvd3YYW13lztQUsm1fLHhUKnE1n6e+v0973mxtIaXTJDKZLoY4Ps71yUneNhqt/uPuLrJlceUiwcP5ea5NTJCt1fh2fNzq321vI6XT/xacNZuUNzdpHBy0Dp41m1Tqde4Vi/RbVucZPG1bpPbU9vZ4triIlE7TZ5qdXyFmWdzyfYobG/w4PQXg69ERYysrKI6D0PXzu9Am+KAEAYrjELNthGEwVC5jVqvcDUOErv/6E45znlwOxfMQ8ujop2QYorguiueRcF16HQeRzSLl8wz87hXXPY/nkZye5icfi28JEi0cegAAAABJRU5ErkJggg==',
			}; 
			engineList.translate[-4] = {
				name: '爱词霸',
				url: 'http://www.iciba.com/%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADGUlEQVQ4jY3QTUybBRzH8T8WB44Xg8DKoFsgrRMXvc2LOofEl4OaGNnBxAuLM5luuOiEYRbcskOzILoZx2CF6OABm/VlLXtk2cZsWaNbhvNgFBZYfVvkRQLsafu0fUppvx7EzRgPHj6HX37J7/CT/EfrnrEccvurDnqHK9vc6v9lOayeL9th/1CqDnnOPfItbA7+pforqLwEtau5NggPB+/2d1yGzaMg69s8ww8FwKomKfVBw0iIY1faqB2aptSbYoNfx+zVsfjjbFLjPPi34SSbLqwg5gNu1TYCFb4MTYF+YpPFJMeFnZcncN+CcS2D85dltl6MY/bo2IZ0rH4d69kEti+XkfJWl1p+Dt4J9EBY4IaQ/LmeeDrO0K1lDlzXGZ1NsWBkqbugs84do/pMjGpfnBo1hZS1utRiFbq+3gthITtuAiNI5xSs6de4T9EoVBYZ+d0gMJvmAWcUiyfGBm+cjf4UUtLsVAt8cDS0H24KTJrJpmeoP5+hQIlgcUXJ69N4PRRlNpFhoyvCOmeUSpdOlddAivc51XwPfDTaAjeFzMRaSE+w6yqIY4nCfg05ucjH38cZm09TomiUD0YwO2NUuJJI0btONfc0dARbICxkfhQys3uIpFd4I6Szxa3RclUH4P1rCaR7iXJFo2wgSpkzgRTsHVRzvoD2QPOdExdv5PFJOMz1LIwDV1Jw6g/4IQ2Pn40ifTr3K1FKBnQk7+1BVfrhyKXVgWkhObaW/Ts+5b1GH8eb3OxrPE3jdoXwqQDzwFvt31F6bJoCJYms2T2oyudw5GIzzAnZsXyMLU+CPAuyjZRsA6kDeYqIPA27O1jY2kxF+6/kKgaS++aAKr3QEWqCa0LW9gRpeYkVee5fngepB3mMna+5EcUgrzeGmHYNqOKAD75pZbFzPXO5rzJX9AozRQ3MFG2/q7CB+cIXOfiCA+kzMHXf5l5HBJE9npF7PstQ6vgN24kJrPYprPYpauxhauw//UOYGnsY6daQrtuYTixh6jUQefnw0ZyeFHI8gXSmkJ7kqsR/64qS06mRczKB2CcX/gSYuKvltGQ7kgAAAABJRU5ErkJggg==',
			};
			engineList.translate[-5] = {
				name: '海词',
				url: 'http://dict.cn/%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADBklEQVQ4jX2T20+TBxjGv4slu+CCq5koogWiNCi0HItQyiEBL/aXbDHZLob320y4VdFxQ5yO1QoFtINCv56+HtPj1/aDIiLnArrRQnWwiK7JbxdQjYnuuX/eX573eV9BEAShVGfoaxgec+t96b0eZZvu5BZdiQyd8iaG+Dod0TXaIyu0hZZptIb3qm/dc5c06vqEY3N7b3ciU+hRduhJFc2bGOIbdMTW0UdWaQ8vcyX4nNbAM1p8T2n2pKm3JwslWl2voB02Sz3KNt2pz1NbA0vo/Is0exdoktI0uOaod6RQDQy5BL2UyhapnfIGd+Q08cwO0sYOi7l9sof/sLKb42ZEQe9SaHAqaO1J6kQZtcmeFbqSH6jfBRQA1nL77wfk3xxR1NKfu3SKUepscS7PRKmZDiN0yidZo6sMyWkANvfyXLP5ue4K86MvzvjcIrmDQwDcz9e4ZI1QMxVCbQkgdMTW0EdWaQst80t8HoCt/TxNUppG9xz1zhRau8yAFCKx9QKAr6d9VD8JcHHSh9AeXqEtdLzh2xGFN/8WWNndo8GloHUk0YgytbMxei0eEi+zLLz8ix8cQS5MeqkalxCuBJfQ+Z/R4n3KDW+U9fxrQhtbaO2Jk6wxLk1HuGrxkHl9QObV31x3BKgyu6kYdSHofMV65ukX/fg2XzAxv0TtbJzL1ig1U2HUliB3gzKHb99x+PYd3eMOKkadnDfZEZo8H7J+b/NjSi5wL6bwrT3IN2KAa6KfR6mF9034ltdRPXJw/qFIudGGUDwKjZhgMJzk/7S9/4rWMTvnjCLlv89SNjKDUGN25+psMrUzMQZDnx5wcHTEcCSJxmSn3Gjj7MgsZb9ZOXXbmBVUA0NS8Sha/vDTZfFgeOLBMCnRMeGiecxJpUnk3MNj6tmRGc48sHL6/hSl/TckoUSj66t+7C+oLQEuPvZxYcJLlVmicsx1kvVj6pkH05y+P8Wp4cnCF2rN8Ud+qWm5WvbTTUn1qyVfaXZTMepEZXJ8RC07oX41aMyX9v8sFc3/Aa4D09aP1wcPAAAAAElFTkSuQmCC',
			};
			engineList.translate[-6] = {
				name: '沪江日语',
				url: 'http://dict.hjenglish.com/jp/jc/%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACu0lEQVQ4jY3LTWgTCQCG4bm5Oo1K/SF4Egp686LGdUFL2cUiPXmQICIeBE96kWUPBhdBRVet2q1iWmj9a9U0LZK2sUJIsmtjkiqU1L9ka2vL1KRrN9tOJjOTTjMzr4dgvBUPz+l7P0HPp1zqdIBcsAHp0QY+3hWXJT3aQC7YgDodQM+nXIIy6Sfrq0MLN2InjmC/PLa8xBG0cCNZXx3KpB9BCtSjhfdjx49i/XX4u9jxo2jh/UiBeoSMtxYr5saMHsKMuFlKnKT8/hbm+D2s8bssvb7GYvwkZsT9TfQQVsxNxluLkG5ZgzV8kKXQgYp/OjGXFGzbxrYtyvocxmyM8ujZb03oANbwQdItaxDSNxxYkSaMYCNGsJHypB/TNMllgkyPXOLzZASzvIjxbwL9+fFqZ0WaSN9wIKSaHVihfRiDv1SMP8YwDHLJs0z3bCft283sRIhFdY7F19ernRXaR6rZgTB6RcTqd6H37kLv3UUp/QDDMJhLelD6fmS+Zycf/v6NUklHe9tZ7ax+F6NXRITkBRErsAPdX6G+6URVVT4nz6A+2YMWbEKZGqTwfw555FK1swI7SF4QEeLnRMp929AfbkV/uBU15aVYLPLf+25KIx4KHweR5XlymWdIPT9Xu3LfNuLnRISopwatewtaVx1aVx3zifPM53PIsowsy+RnJ5h595TxXjezbRurnda9hainBiHqEVHvb0a5swnlziamun4i1f8rY0PnK/zHedPpYurPtRQ6nNVOvb+ZqEdECJ9eR6HDyUL7ehba1/OpdS1v/1jF2MWKzGUH2Zurq/tXhQ4n4dPrEF4070VqFSm21bBw2/Fdim01SK0iL5r3IkivfAz/XovUsgLFu5JS+w/LUrwrkVpWVD6vfAj5mZQrOzZA7GoDQ6ecDJxwLGvolJPY1QayYwPkZ1KuL71o6GHfjdN6AAAAAElFTkSuQmCC',
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
				favicon: 'https://static00.forvo.com/_presentation/img/forvo_og.png',
				blank:true,
			};			
			
			
			//知识列表
			engineList.knowledge = [];
			engineList.knowledge[0] = {
				name: '知乎',
				url: 'http://www.zhihu.com/search?q=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACk0lEQVQ4jY2SS0hUcRTGzyLcRI9Nm8BlbaqFm9xFi+hhm9EgrVZBUETOI3VsUGeiN/RGAqFyGmcRFCFUFJRFWCs1k3LunZnGbOb+73W0ssfo3HEG+7W4E4iBtPjg4xz48Z2PI7J+Z4Psj/ZJ/Z0+qQ//v/ZH+2TX+YjIvmi/nJtBQhNIu4UETMcHraUVyiKnvyPSEHkhQQtpjlN5JkXrw0mkSUcaNcSjI81xxKc7fqFaEkjQRKQ+3CdBC3FrnHv2hUS2wPauDDXditqoSeXZMTZeGWd3WOHqMXH1mGy7abD6ZAppM8qADotlLXGG0nmGzQL54jyTv0oMpPPsDRv0j82ifpR4a9iMKBuAmrCJNKfLgFbFnogipmwqWuI8iuXwPMgiR2KIT2fEtKmNmMjRGOLVGVY2e6LWAkC7SfW1cdaeSiGHPvAiOcPBuxZyaBRx67xTNq4e0+nleJy3yqZuMWBV6CM7bitc3QptskDn62lqbxlUXR5nIJOnLmoibg1pijP8D+CEwhU2GMjYDBo2dvE3+tQcA2mbM8+/8ObTLLU9SwGCFuJPIG6NFW1JdNNmw6Vx5PAo4nVOWDpB0EJaE4hHZ8uNDKXiPPeGfrI8kETcGu+UTU1YOSUe1RjM5BeV+Bfg1rg//JMnsRxPYzl63/+iwqujT87R9HiKNYEErrBiKldyEjQtBDRq7L5lAFDdmWZlIMn7TJ7N1z9z8eU3coV5UtkCI2aBV6lZqq6nEX+mDAiYbOlM8yNXorN/2nldn866C2NUnk0hxzQuvvyKpzfr7LzlV+5QiByI9kvHBJuufmZrl+Es/AnkRBJpXuD9CcQXR/xJpLWsUBaRXecjcnoaCRhOpHbDIS/W4nkoi7TEi38AwHibcZoJerYAAAAASUVORK5CYII=',
				blank:true,
			};
			engineList.knowledge[1] = {
				name: '维基(ZH)',
				url: 'http://zh.wikipedia.org/wiki/%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB9klEQVQ4jZ2SsWpiURCGhwTEdFqIRbazsxLBvIJYpvBuE7ayuKSIqKDFbdKJEIj4AJIEXY6XTVAhKGKTFCGNIlikuG4jKCQsBEKUKEm+LRbvGrPFJgNTnGHmO+ef/4iIyObm5pdEIpFQSpn/kycnJyVN0zRZDFuW9ZNPRLFYPJJ0Op0BeH19/VAuQs7Ozqqfud0GlMtlUymFruvs7e2hlKLdbqPrOslkklarRa1WQ9d1Dg8P6XQ6GIbB7u4uvV4PMU3TvL+/JxwOIyKMx2MmkwmaprG2tsZ0OsWyLILBIP1+n5eXF3RdJ5VKMZvNEKWUCTAYDFhfX6fZbAJwe3vLxsYG9XqdSqXC6ekpAE9PT6TTaR4eHv5IWAAAIpEIW1tbtr54PI7X68UwDObzOQCNRoODg4O/O1gGXF5eIiJcX1/brxAR8vm8PZDJZBgMBv8GAPj9fra3twEYjUZ4PB4CgQAAvV6P/f39ty4sAAtvlVKICMPhkEKhQK1Ww+FwUK1WKRQKdLtdlvvfAZ6fn/H5fIRCIY6PjwGIxWK43W6y2aw9bANM0/yxWszlcrhcLnvTNzc3OJ1Orq6u3gNKpdL31eJoNOLi4uKN1vPzc9uJN4BoNPp10bT6z1fPy1IBHh8fpyIizmKxeDSbzeZ8IO7u7n7t7Ox8+w249UPDZbmSNwAAAABJRU5ErkJggg==',
			};
			engineList.knowledge[2] = {
				name: '百度百科',
				url: 'http://baike.baidu.com/search/word?pic=1&sug=1&word=%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACiUlEQVQ4jXWSXUiTYRTHd9eFCaVic35kTdIFGk7LbhQvot2pEIxYpDlTayoKCoJQQQTeeBdEF0mGSfhR60Poxq4q0zRNZWrQtvd1Tl8/0tzeN137+HUxTebqwOF5znP+53d4zvOojsRfKNWcfDEUp+mO8PgDcXS+byglvaNTpUnvH37QCaPj+z4+CbZ5mLaF46/TMDsPYxP7muFRKDOBKk7T/W7aRoSFgLvtGwxYvQAoSpDpGR8HrbpBQRWn6R4aHY9MdD/zEJNoJ7/Qxdw3HyazxNEUB4+feiJ0ZoscBoyM7XYOhddHXVvEHLNztsjFq0EZnV4kVm3n9r0f/waMT0IgAC1ta5jMEp9GtzFeXaa9Y4MtTxBjuUSRYZHJqR2klUA0wDYHDudvUjOdxKrtdD7Z+ivy+0Ns74SQVgO03lrnzPkFrK9lAKrqdgEzs+Be8pORIxCbZGfgpZfNzSAVNRIXS918HNnGKwfJLhA5rLZjqpQiAZ+/hLv1W73cf/iTzc0g5dUSCWkO1BkO8gtdvB/e5tKVZQ7Ff6ftznok4OArNLSskpThJEsvossTSc0SMJS6GXwrY30js7oWiJzBHsDjDXdWa51k5opk6fc9+ZQTQ5kbQfRHD3EP0PvcS2K6I6o4Sy+i04skpjuoqFkhGPoPoKfXS0KaA222gDZb4PhpgTRdeJ+ZK6LWOikxLkUDxibCB2vrAS5fk9DlieQXujCUuSkxLlFQ7CJNJ5CRI9DTu/8bq+pkVEc1fR8ODlFYCLAsBfHvXnd1LcjUjA9xIRChq7zpQ5V8oqOrzBTCbJGpssjUNio0tCjUNyvcaFKobVSoa1Zoav1FQ4vC9XoZs0Wm0uLjXPHizh+9o/XugzOJqwAAAABJRU5ErkJggg==',
			};
			engineList.knowledge[-4] = {
				name: '互动百科',
				url: 'http://so.hudong.com/s/doc/%s',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABVUlEQVQ4jaWSwSvDYRjHn79AkmhFW1vT0Gb90k5ujv4BVwcn5Q+QRn5tbUVZP6GtlJbk4ECRi5tcXLg5yg5yQw7Y+Dg87+ttlGne+vQ+z/d9P8/h7RUAdjvaAxB2OvkPQrWLP1F/BoCPuu4mF7a7+ZWzGRUaLy6Dr1rY6kHp/cmFr5cvfJfZZTyhEoJKCMrf2BvTi/vj2h9POrlsnEoIYbMPNvtgo78ZgJtTVwOcTLtz4wlrYVgLQxBxvJuHCiJQO4ePd3i8hZcHuL/S3HhCKQqlKKzGlGBI5Q3PZZbHmp6txrCesBKHlTgsDyh22d7ydKf54az2xhOKCSgmoDCoAARjrr+/dkNtVhjEekJ+GPLDkEvCq/ksuaSjOgXrE81ZLon1BD8FfgqWRlS+PNC6FcYTFtOwmIajgg5Y8P6G8YSsB1kPGm86YH60NdkM1hMA5jLtAXwCyK3ufWEwzWsAAAAASUVORK5CYII=',
			};
			engineList.knowledge[5] = {
				name: '百度文库',
				url: 'http://wenku.baidu.com/search?word=%s&ie=utf-8',
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACiUlEQVQ4jXWSXUiTYRTHd9eFCaVic35kTdIFGk7LbhQvot2pEIxYpDlTayoKCoJQQQTeeBdEF0mGSfhR60Poxq4q0zRNZWrQtvd1Tl8/0tzeN137+HUxTebqwOF5znP+53d4zvOojsRfKNWcfDEUp+mO8PgDcXS+byglvaNTpUnvH37QCaPj+z4+CbZ5mLaF46/TMDsPYxP7muFRKDOBKk7T/W7aRoSFgLvtGwxYvQAoSpDpGR8HrbpBQRWn6R4aHY9MdD/zEJNoJ7/Qxdw3HyazxNEUB4+feiJ0ZoscBoyM7XYOhddHXVvEHLNztsjFq0EZnV4kVm3n9r0f/waMT0IgAC1ta5jMEp9GtzFeXaa9Y4MtTxBjuUSRYZHJqR2klUA0wDYHDudvUjOdxKrtdD7Z+ivy+0Ns74SQVgO03lrnzPkFrK9lAKrqdgEzs+Be8pORIxCbZGfgpZfNzSAVNRIXS918HNnGKwfJLhA5rLZjqpQiAZ+/hLv1W73cf/iTzc0g5dUSCWkO1BkO8gtdvB/e5tKVZQ7Ff6ftznok4OArNLSskpThJEsvossTSc0SMJS6GXwrY30js7oWiJzBHsDjDXdWa51k5opk6fc9+ZQTQ5kbQfRHD3EP0PvcS2K6I6o4Sy+i04skpjuoqFkhGPoPoKfXS0KaA222gDZb4PhpgTRdeJ+ZK6LWOikxLkUDxibCB2vrAS5fk9DlieQXujCUuSkxLlFQ7CJNJ5CRI9DTu/8bq+pkVEc1fR8ODlFYCLAsBfHvXnd1LcjUjA9xIRChq7zpQ5V8oqOrzBTCbJGpssjUNio0tCjUNyvcaFKobVSoa1Zoav1FQ4vC9XoZs0Wm0uLjXPHizh+9o/XugzOJqwAAAABJRU5ErkJggg==',
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
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACiUlEQVQ4jXWSXUiTYRTHd9eFCaVic35kTdIFGk7LbhQvot2pEIxYpDlTayoKCoJQQQTeeBdEF0mGSfhR60Poxq4q0zRNZWrQtvd1Tl8/0tzeN137+HUxTebqwOF5znP+53d4zvOojsRfKNWcfDEUp+mO8PgDcXS+byglvaNTpUnvH37QCaPj+z4+CbZ5mLaF46/TMDsPYxP7muFRKDOBKk7T/W7aRoSFgLvtGwxYvQAoSpDpGR8HrbpBQRWn6R4aHY9MdD/zEJNoJ7/Qxdw3HyazxNEUB4+feiJ0ZoscBoyM7XYOhddHXVvEHLNztsjFq0EZnV4kVm3n9r0f/waMT0IgAC1ta5jMEp9GtzFeXaa9Y4MtTxBjuUSRYZHJqR2klUA0wDYHDudvUjOdxKrtdD7Z+ivy+0Ns74SQVgO03lrnzPkFrK9lAKrqdgEzs+Be8pORIxCbZGfgpZfNzSAVNRIXS918HNnGKwfJLhA5rLZjqpQiAZ+/hLv1W73cf/iTzc0g5dUSCWkO1BkO8gtdvB/e5tKVZQ7Ff6ftznok4OArNLSskpThJEsvossTSc0SMJS6GXwrY30js7oWiJzBHsDjDXdWa51k5opk6fc9+ZQTQ5kbQfRHD3EP0PvcS2K6I6o4Sy+i04skpjuoqFkhGPoPoKfXS0KaA222gDZb4PhpgTRdeJ+ZK6LWOikxLkUDxibCB2vrAS5fk9DlieQXujCUuSkxLlFQ7CJNJ5CRI9DTu/8bq+pkVEc1fR8ODlFYCLAsBfHvXnd1LcjUjA9xIRChq7zpQ5V8oqOrzBTCbJGpssjUNio0tCjUNyvcaFKobVSoa1Zoav1FQ4vC9XoZs0Wm0uLjXPHizh+9o/XugzOJqwAAAABJRU5ErkJggg==',
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
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACiUlEQVQ4jXWSXUiTYRTHd9eFCaVic35kTdIFGk7LbhQvot2pEIxYpDlTayoKCoJQQQTeeBdEF0mGSfhR60Poxq4q0zRNZWrQtvd1Tl8/0tzeN137+HUxTebqwOF5znP+53d4zvOojsRfKNWcfDEUp+mO8PgDcXS+byglvaNTpUnvH37QCaPj+z4+CbZ5mLaF46/TMDsPYxP7muFRKDOBKk7T/W7aRoSFgLvtGwxYvQAoSpDpGR8HrbpBQRWn6R4aHY9MdD/zEJNoJ7/Qxdw3HyazxNEUB4+feiJ0ZoscBoyM7XYOhddHXVvEHLNztsjFq0EZnV4kVm3n9r0f/waMT0IgAC1ta5jMEp9GtzFeXaa9Y4MtTxBjuUSRYZHJqR2klUA0wDYHDudvUjOdxKrtdD7Z+ivy+0Ns74SQVgO03lrnzPkFrK9lAKrqdgEzs+Be8pORIxCbZGfgpZfNzSAVNRIXS918HNnGKwfJLhA5rLZjqpQiAZ+/hLv1W73cf/iTzc0g5dUSCWkO1BkO8gtdvB/e5tKVZQ7Ff6ftznok4OArNLSskpThJEsvossTSc0SMJS6GXwrY30js7oWiJzBHsDjDXdWa51k5opk6fc9+ZQTQ5kbQfRHD3EP0PvcS2K6I6o4Sy+i04skpjuoqFkhGPoPoKfXS0KaA222gDZb4PhpgTRdeJ+ZK6LWOikxLkUDxibCB2vrAS5fk9DlieQXujCUuSkxLlFQ7CJNJ5CRI9DTu/8bq+pkVEc1fR8ODlFYCLAsBfHvXnd1LcjUjA9xIRChq7zpQ5V8oqOrzBTCbJGpssjUNio0tCjUNyvcaFKobVSoa1Zoav1FQ4vC9XoZs0Wm0uLjXPHizh+9o/XugzOJqwAAAABJRU5ErkJggg==',
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
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACiUlEQVQ4jXWSXUiTYRTHd9eFCaVic35kTdIFGk7LbhQvot2pEIxYpDlTayoKCoJQQQTeeBdEF0mGSfhR60Poxq4q0zRNZWrQtvd1Tl8/0tzeN137+HUxTebqwOF5znP+53d4zvOojsRfKNWcfDEUp+mO8PgDcXS+byglvaNTpUnvH37QCaPj+z4+CbZ5mLaF46/TMDsPYxP7muFRKDOBKk7T/W7aRoSFgLvtGwxYvQAoSpDpGR8HrbpBQRWn6R4aHY9MdD/zEJNoJ7/Qxdw3HyazxNEUB4+feiJ0ZoscBoyM7XYOhddHXVvEHLNztsjFq0EZnV4kVm3n9r0f/waMT0IgAC1ta5jMEp9GtzFeXaa9Y4MtTxBjuUSRYZHJqR2klUA0wDYHDudvUjOdxKrtdD7Z+ivy+0Ns74SQVgO03lrnzPkFrK9lAKrqdgEzs+Be8pORIxCbZGfgpZfNzSAVNRIXS918HNnGKwfJLhA5rLZjqpQiAZ+/hLv1W73cf/iTzc0g5dUSCWkO1BkO8gtdvB/e5tKVZQ7Ff6ftznok4OArNLSskpThJEsvossTSc0SMJS6GXwrY30js7oWiJzBHsDjDXdWa51k5opk6fc9+ZQTQ5kbQfRHD3EP0PvcS2K6I6o4Sy+i04skpjuoqFkhGPoPoKfXS0KaA222gDZb4PhpgTRdeJ+ZK6LWOikxLkUDxibCB2vrAS5fk9DlieQXujCUuSkxLlFQ7CJNJ5CRI9DTu/8bq+pkVEc1fR8ODlFYCLAsBfHvXnd1LcjUjA9xIRChq7zpQ5V8oqOrzBTCbJGpssjUNio0tCjUNyvcaFKobVSoa1Zoav1FQ4vC9XoZs0Wm0uLjXPHizh+9o/XugzOJqwAAAABJRU5ErkJggg==',
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
				favicon: 'data:application/octet-stream;base64,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3f+loJP/dGpS/42Fcv/FxcD/4OPk/+Pm6P/S493/Y8yb/1DJkP9RyZH/UcmR/1HJkf1RyZFxUcmRqFHJkf9RyZH/UcmR/0/JkP910Kb/3eXk/+To6f+9u7T/Z1tA/3NpUf/KysX/5err/+Pn6P/i5ub/lY9+/6qnm//k6Or/4+fo/+Xp6//Dw73/bWJI/2xgR//ExL7/5ejq/9Lj3f9jzJv/UMmQ/1HJkf9RyZH/UcmR/1HJkYtRyZGqUcmR/1HJkf9RyZH/T8mQ/3XQpv/d5eT/4+bo/9zf3v+vrKD/e3Fa/4F4Y/+5t6//3+Li/+Tp6v+7ubH/h35r/93g3//e4eH/tLKo/350X/9/dWD/tbKp/97h4f/j5+j/0uPd/2PMm/9QyZD/UcmR/1HJkf9RyZH/UcmRqlHJkapRyZH/UcmR/1HJkf9PyZD/ddCm/93l5P/i5uf/4ubo/+To6f/Y2tj/qKSY/3tyW//GxsD/5Onq/9fa2P98clv/w8K8/769tv98c1z/r6uh/9rc2//k6On/4ubn/+Pm6P/S493/Y8yb/1DJkP9RyZH/UcmR/1HJkf9RyZGoUcmRpFHJkf9RyZH/UcmR/0/JkP910Kb/3eXk/+Lm5//i5uf/4ubn/+Pn6P/k6On/0dPQ/9ja2f/j5+j/4ubo/52Yif+opJj/1tnX/9TV0//k6Or/4+fo/+Lm5//i5uf/4+bo/9Lj3f9jzJv/UMmQ/1HJkf9RyZH/UcmR/1HJkYNRyZF9UcmR/1HJkf9RyZH/T8mQ/3XQpv/d5eT/4ubn/+Lm5//i5uf/4ubn/+Lm5//j5+j/4+fo/+Lm5//i5uj/3N7e/9jb2f/j5+j/4+fo/+Lm5//i5uf/4ubn/+Lm5//j5uj/0uPd/2PMm/9QyZD/UcmR/1HJkf9RyZH8UcmRa1HJkVlRyZH4UcmR/1HJkf9PyZD/ddCm/93l5P/j5uj/4ubn/+Lm5//i5uf/4ubn/+Lm5//i5uf/4ubn/+Lm5//j5+j/4+fo/+Lm5//i5uf/4ubn/+Lm5//i5uf/4ubn/+Pn6P/S493/Y8yb/1DJkP9RyZH/UcmR/1HJke9RyZFAUcmRJVHJkdxRyZH/UcmR/0/JkP9yz6T/2ODd/97h4f/d4eH/3eHh/93h4f/d4eH/3eHh/93h4f/d4eH/3eHh/93h4f/d4eH/3eHh/93h4P/d4OD/3eHh/93g4f/d4eD/3uHh/83e1/9izJr/UMmQ/1HJkf9RyZH/UcmR0VHJkRlRyZEDUcmRoFHJkf9RyZH/UMqS/1qzg/95dV7/fHJd/3xzXf98c13/fHNd/3xzXf98c13/fHNd/3xzXf98c13/fHNd/3xzXf98c13/fHVg/3t5Zv9+dF3/gHdc/3xzX/99c2T/eH1j/1e+iv9RypH/UcmR/1HJkf9RyZGPU8mTAFHJkQBRyZFFUcmR8lHJkf9Ry5L/U6t5/1lQMf9ZSi3/WUst/1lLLf9ZSy3/WUst/1lLLf9ZSy3/WUst/1lLLf9ZSy3/WUst/1lJK/9Tc2n/TKKx/3Z0OP+ViCD/YVVo/1tRof9ZWkT/U7mE/1HKkv9RyZH/UcmR6lHJkTRRyZEAUcmRAFHJkQhRyZGpUcmR/1HKkv9Tt4P/Wlk6/1tKLv9bSy7/W0su/1tLLv9bSy7/W0su/1tLLv9bSy7/W0su/1tLLv9bSy7/W0ot/1hhT/9Tfnv/a2Iz/35vJv9fUE7/XU5x/1pfQ/9SvIf/UcqS/1HJkf9RyZGeUsmSBFLJkgAAAAAAUcmRAFHJkTtRyZHnUcmR/1HGj/9Vmmz/V4BY/1eAWP9XgFj/V4BY/1eAWP9XgFj/V4BY/1eAWP9XgFj/V4BY/1eAWP9XgFj/V39X/1d+Vv9Wf1j/Vn9Y/1eAV/9XgFX/VZ5v/1HIkP9RyZH/UcmR3VHJkTFRyZEAAAAAAAAAAABRyZEAU8mRAVHJkW1RyZH3UcmR/1HKkv9RypL/UcqS/1HKkv9RypL/UcqS/1HKkv9RypL/UcqS/1HKkv9RypL/UcqS/1HKkv9RypL/UcqS/1HKkv9RypL/UcqS/1HKkv9RypL/UcmR/1HJkfJRyZFeUMmRAFLJkQAAAAAAAAAAAAAAAABRyZEAUcmRCFHJkY5RyZH7UcmR/1HJkf9RyZH/UcmR/1HJkf9RyZH/UcmR/1HJkf9RyZH/UcmR/1HJkf9RyZH/UcmR/1HJkf9RyZH/UcmR/1HJkf9RyZH/UcmR/1HJkf9RyZH3UcmRdFHJkQRRyZEAAAAAAAAAAAAAAAAAAAAAAAAAAABRyZEAUcmRDVHJkY5RyZH3UcmR/1HJkf9RyZH/UcmR/1HJkf9RyZH/UcmR/1HJkf9RyZH/UcmR/1HJkf9RyZH/UcmR/1HJkf9RyZH/UcmR/1HJkf9RyZH/UcmR8lHJkXRSyZEJUcmRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRyZEAUcmRCFHJkWxRyZHnUcmR/1HJkf9RyZH/UcmR/1HJkf9RyZH/UcmR/1HJkf9RyZH/UcmR/1HJkf9RyZH/UcmR/1HJkf9RyZH/UcmR/1HJkd5RyZFdUcmRBVHJkQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRyZEAUsmSAlHJkTdRyZGfUcmR7VHJkf9RyZH/UcmR/1HJkf9RyZH/UcmR/1HJkf9RyZH/UcmR/1HJkf9RyZH/UcmR/1HJketRyZGeUcmRMFLJkABRyZEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUcmRAFHJkQVRyZE9UcmRmFHJkdFRyZHxUcmR/lHJkf9RyZH/UcmR/1HJkf9RyZH8UcmR8FHJkdJRyZGPUcmRNFLJkQVRyZEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFHJkQBRyZECUcmRGVHJkURRyZFxUcmRjFHJkatRyZGoUcmRhFHJkWtRyZFAUcmRGVHJkQJRyZEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8AD//8AAP/8AAA/+AAAH/AAAA/gAAAHwAAAB8AAAAOAAAABgAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAGAAAABwAAAA8AAAAfgAAAH8AAAD/gAAB/8AAA//wAA///AA/8=',
			};
			engineList.htmls[1] = {
				name: 'Can I Use',
				url: 'http://caniuse.com/#search=%s',
				blank:true,
				favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgTWFjaW50b3NoIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk4NTM0QjA3NEQ3NzExRTQ5RjJDQkZEQTMwQkRENURBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk4NTM0QjA4NEQ3NzExRTQ5RjJDQkZEQTMwQkRENURBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTg1MzRCMDU0RDc3MTFFNDlGMkNCRkRBMzBCREQ1REEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTg1MzRCMDY0RDc3MTFFNDlGMkNCRkRBMzBCREQ1REEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6jL4ZwAAABgFBMVEXRa1hI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',
			};
			engineList.htmls[2] = {
				name: 'GitHub',
				url: 'https://github.com/search?utf8=✓&q=%s',
				blank:true,
				favicon: 'data:application/octet-stream;base64,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F/8VFRf/FRUX/xMTFKsAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRMTFKsVFRf/FRUX/xUVF/8VFRf/FRUX/xUVF/8TExT1AAAADQ4OFFkVFRf/FRUX/xUVF/8VFRf/FRUX/xUVF/8TExOPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMTE48VFRf/FRUX/xUVF/8VFRf/FRUX/xUVF/8ODhRZExMTnRUVF/8VFRf/FRUX/xUVF/8VFRf/EREU0QAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBERFNEVFRf/FRUX/xUVF/8VFRf/FRUX/xMTE50RERTQFRUX/xUVF/8VFRf/FRUX/xUVF/8SEhJeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEhISXhUVF/8VFRf/FRUX/xUVF/8VFRf/EREU0BISFPIVFRf/FRUX/xUVF/8VFRf/FRUX/wAAABYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFRUX/xUVF/8VFRf/FRUX/xUVF/8SEhTyFRUX/xUVF/8VFRf/FRUX/xUVF/8SEhTyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASEhTyFRUX/xUVF/8VFRf/FRUX/xUVF/8VFRf/FRUX/xUVF/8VFRf/FRUX/xMTFNsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMTFNwVFRf/FRUX/xUVF/8VFRf/FRUX/xMTFPYVFRf/FRUX/xUVF/8VFRf/FBQU4QAA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AAAAAAAADAwMFA8PD2MRERSkFBQU0hMTFPMVFRf/FRUX/xMTFPMUFBTSEREUpA8PD2MMDAwUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
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
			if(/^https?:\/\/www\.baidu\.com\/(?:s|baidu)/.test(url)){
				// console.log("fuckBD");
				document.getElementById("su").addEventListener("click",function(){
					var fuckBD = null;
					if (typeof iInput == 'function') {
						fuckBD = iInput();
					} else {
						if (iInput.nodeName == 'INPUT') {
							fuckBD = iInput.value;
						} else {
							fuckBD = iInput.textContent;
						};
					};
					window.location.href="https://www.baidu.com/s?wd=" + fuckBD + "&ie=utf-8";
				});
				document.getElementById("page").addEventListener("click",function(e){
					var target = e.target,
						targetName = target.nodeName.toLowerCase();
					if(targetName == "span"){
						window.location.href = target.parentNode.href;
					}else if(targetName == "a"){
						window.location.href = target.href;
					}else if(targetName == "i"){
						window.location.href = target.parentNode.parentNode.href;
					}
				});
				document.getElementById("rs").addEventListener("click",function(e){
					var target = e.target;
						if(target.nodeName.toLowerCase() == "a"){
							window.location.href = target.href;
						}
				})
			}

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
			console.log(iTarget, iInput);

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
						margin: 0 8px 0 0;
						border: none;
						padding: 0 4px;
						text-decoration: none;
						color: #120886 !important;
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
				hideDelay: 266,
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
							list.style.opacity = 0.3;
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
						
						list.style.opacity = 0.3;
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
					style.opacity = 0.3;
					
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

		});

	};
	
	
	
	// 如果发生通信的话，需要一个独一无二的ID
	var messageID = Math.random().toString();
	
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

	runInPageContext(contentScript);
})();
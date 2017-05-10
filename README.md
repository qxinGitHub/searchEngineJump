# searchEngineJump
搜索引擎跳转脚本,修改自[searchEngineJump modified version from NLF 4.0.5.3](https://greasyfork.org/zh-CN/scripts/18315-searchenginejump-modified-version-from-nlf)

在线安装 [Greasy Fork](https://greasyfork.org/zh-CN/scripts/27752-searchenginejump)

__说明__
> 5.0.0.0
> 增加设置，可以自行打开关闭搜索列表，两个搜索之间拖动进行排序.随之而来的问题:  在百度页面中的设置样式有问题，最好在谷歌搜索页面(或必应)进行相关设置; 拖动排序和有些拖拽手势插件冲突(原因未知), 拖拽手势插件一般按ctrl忽视手势; 排序实质上是交换，两个搜索进行交换。
![例图](http://odp4cbmbx.bkt.clouddn.com/setting.png)


已知问题： 与脚本[网页解除限制](https://greasyfork.org/zh-CN/scripts/14146-%E7%BD%91%E9%A1%B5%E9%99%90%E5%88%B6%E8%A7%A3%E9%99%A4)有[冲突](https://greasyfork.org/zh-CN/forum/discussion/21298/x)，开启后，无法进行跳转。可以暂时先用我修改后的[网页解除限制](https://greasyfork.org/zh-CN/scripts/28497-%E7%BD%91%E9%A1%B5%E9%99%90%E5%88%B6%E8%A7%A3%E9%99%A4),大刀阔斧的修改，与原脚本使用上有较大的变化。或者自己修改下原作者的脚本(最简单的修改方式是将unhook_eventNames中的 "mousedown|mouseup" 替换成"click"即可，~~暂时还不知道有什么副作用~~在知乎打开评论列表会跳转到顶部)。


### 更新历史

> version 5.1.1  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-05-10 
- 添加动画效果
- 将设置改为弹性布局(测试)


> version 5.1.0  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-05-10 
- 开始修改源网页的样式以兼容脚本
- 与Google Variety样式不兼容的问题
- google搜索页面中样式微调
- 本地数据存储的版本无法自动更新问题

> version 5.0.5  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-05-10 
- 添加搜狗知乎搜索 [感谢建议](https://greasyfork.org/zh-CN/forum/discussion/23140/x)
- 添加搜狗微信搜索 (在分类 mine 中)
- 本地数据存储版本升级为 1.1

> version 5.0.4  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-05-9 
- 5.0.0.2中与样式“Google Variety”不兼容问题修改后弊大于利，暂时改回去

> version 5.0.3  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-05-09 
- 设置中无法保存新标签页打开的问题
- 修复因为5.0.0版本导致谷歌、百度从主页搜索无法显示跳转栏的问题
- 添加名为“rwl-exempt”的class，为解决与脚本【网页解除限制】做准备
- 版本由 5.x.x.x 改为 5.x.x

> version 5.0.0.2  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-05-09 
- 更改字体设置后会造成错位 [感谢反馈](https://greasyfork.org/zh-CN/forum/discussion/23109/x)
- 与Google Variety样式不兼容 

> version 5.0.0.1  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-05-08 
- 注释掉 console.log

> version 5.0.0.0  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-05-08 
- __添加设置菜单(测试)__ 自定义开关搜索列表，排序，无法自己添加。测试版本
- 添加果壳搜索
- 修复 duckduckgo 样式


> version 4.1.1.17  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-05-1 
- 添加脚本图标
- 百度音乐样式不居中 [感谢反馈](https://greasyfork.org/zh-CN/forum/discussion/22341/x)
- 名称从 “searchEngineJump” 改为 “searchEngineJump 搜索引擎快捷跳转”

> version 4.1.1.16  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-04-23 
- 修复从百度，谷歌主页搜索时没样式的问题

> version 4.1.1.15  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-04-23 
- acfun 样式不居中 [感谢反馈](https://greasyfork.org/zh-CN/forum/discussion/22066/x)

> version 4.1.1.14  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-04-21 
- 修复上个版本导致的搜索栏遮挡联想词的问题

> version 4.1.1.13  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-04-20 
- 谷歌搜索工具被遮挡的问题 [感谢反馈](https://greasyfork.org/zh-CN/forum/discussion/22006/x?locale=zh-CN)

> version 4.1.1.12  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-04-09 
- 修复上一个版本更改动画造成列表偏移的问题

> version 4.1.1.11  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-04-07 
- 更改退出动画，使看上去更流畅

> version：4.1.1.10  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-04-05 
- 谷歌翻译改hk为com
- 百度搜索改为他们自己ajax请求，不再强制刷新网页

> version：4.1.1.9  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-04-03 
- 修复b站样式，调整搜索连接
- 样式小调

> version：4.1.1.8  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-03-31 
- 修复flickr样式
- 修复维基百科无法获取搜索词的问题
- 百度联想搜索后样式丢失的问题，虽然样式不再丢失，但是鼠标划过后详细搜索列表依旧没有，可以修复，但是扯得地方太多，以后版本搞，此版本上的修复更大意义上是面子工程。
- 图标微调：youtube 网易云音乐 维基百科

> version:4.1.1.7  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-03-31 
- 可以在部分开启 Content Security Policy (CSP) 安全策略的网站上使用，知乎可以，github依旧不行
![知乎开启成功](http://odp4cbmbx.bkt.clouddn.com/%E7%9F%A5%E4%B9%8E20170331174102.png)

> version:4.1.1.6  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-03-29 
- 添加 Pinterest, MDN 搜索
- 部分图标改为 32x32 ，16X16锯齿太明显,图标微调：百度

> version:4.1.1.5  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-03-21 
- 统一图标 16x16 base64编码,为此专门写个工具 [img2base64](http://iqingxin.cn/tool/)

> version:4.1.1.4  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-03-20 
- 修复个别网页搜索关键字编码问题
- 修复样式盖过百度搜索框的问题
- 字体颜色改为 #333

> version:4.1.1.3  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-03-20 
- 修复音悦tai搜索连接

> version:4.1.1.2  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-03-10 
- 修复百度 "相关搜索" 样式丢失的问题
- 添加 GitHub 搜索

> version:4.1.1.1  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-03-06 

- 修复百度搜索页面,翻页后样式丢失的问题
- 修复 youtube 页面,左侧遮挡的问题
- 修复 acfun 样式丢失的问题
- 还有好多问题, 慢慢来
![youtube遮挡](http://odp4cbmbx.bkt.clouddn.com/youtube3-6.png)


> version:4.1.1.0  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017-03-05: 
- 修复使用百度搜索后,页面丢失样式的问题,方法较粗暴
![问题图片](http://odp4cbmbx.bkt.clouddn.com/%E9%97%AE%E9%A2%98.png)


> 2017-2-28:upload version:4.1.0.0

![例图](http://odp4cbmbx.bkt.clouddn.com/searchEngineJump.png)

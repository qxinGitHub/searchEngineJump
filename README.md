# searchEngineJump
搜索引擎跳转脚本,修改自[searchEngineJump modified version from NLF 4.0.5.3](https://greasyfork.org/zh-CN/scripts/18315-searchenginejump-modified-version-from-nlf)

在线安装 [Greasy Fork](https://greasyfork.org/zh-CN/scripts/27752-searchenginejump)

已知问题： 与脚本[网页解除限制](https://greasyfork.org/zh-CN/scripts/14146-%E7%BD%91%E9%A1%B5%E9%99%90%E5%88%B6%E8%A7%A3%E9%99%A4)有[冲突](https://greasyfork.org/zh-CN/forum/discussion/21298/x)，开启后，无法进行跳转。可以暂时先用我修改后的[网页解除限制](https://greasyfork.org/zh-CN/scripts/28497-%E7%BD%91%E9%A1%B5%E9%99%90%E5%88%B6%E8%A7%A3%E9%99%A4),或者自己修改下原作者的脚本(最简单的修改方式是将unhook_eventNames中的 "mousedown|mouseup" 替换成"click"即可，暂时还不知道有什么副作用)。

> 2017-03-29 version:4.1.1.6
- 添加 Pinterest, MDN 搜索

> 2017-03-21 version:4.1.1.5
- 统一图标 16x16 base64编码,为此专门写个工具 [img2base64](http://iqingxin.cn/tool/)

> 2017-03-20 version:4.1.1.4
- 修复个别网页搜索关键字编码问题
- 修复样式盖过百度搜索框的问题

> 2017-03-20 version:4.1.1.3
- 修复音悦tai搜索连接

> 2017-03-10 version:4.1.1.2
- 修复百度 "相关搜索" 样式丢失的问题
- 添加 GitHub 搜索
>


> 2017-03-06 version:4.1.1.1

- 修复百度搜索页面,翻页后样式丢失的问题
- 修复 youtube 页面,左侧遮挡的问题
- 修复 acfun 样式丢失的问题
- 还有好多问题, 慢慢来
![youtube遮挡](http://odp4cbmbx.bkt.clouddn.com/youtube3-6.png)


> 2017-03-05: version:4.1.1.0
- 修复使用百度搜索后,页面丢失样式的问题,方法较粗暴
![问题图片](http://odp4cbmbx.bkt.clouddn.com/%E9%97%AE%E9%A2%98.png)


> 2017-2-28:update

![例图](http://odp4cbmbx.bkt.clouddn.com/searchEngineJump.png)

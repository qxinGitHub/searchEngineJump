// ==UserScript==
// @namespace         https://greasyfork.org/zh-CN/users/106222-qxin-i

// @name              网页限制解除(改)
// @name:en           Remove web limits
// @name:zh           网页限制解除
// @name:ja           ウェブの規制緩和

// @author            Cat73&iqxin(修改)

// @description       通杀大部分网站，可以解除禁止复制、剪切、选择文本、右键菜单的限制。原作者cat73，因为和搜索跳转脚本冲突，遂进行了改动，改为黑名单制。
// @description:en    Pass to kill most of the site, you can lift the restrictions prohibited to copy, cut, select the text, right-click menu.
// @description:zh    通杀大部分网站，可以解除禁止复制、剪切、选择文本、右键菜单的限制。原作者cat73，因为和搜索跳转脚本冲突，遂进行了改动，改为黑名单制。
// @description:zh-CN 通杀大部分网站，可以解除禁止复制、剪切、选择文本、右键菜单的限制。原作者cat73，因为和搜索跳转脚本冲突，遂进行了改动，改为黑名单制。
// @description:zh-TW 通殺大部分網站，可以解除禁止復制、剪切、選擇文本、右鍵菜單的限制。
// @description:ja    サイトのほとんどを殺すために渡し、あなたは、コピー切り取り、テキスト、右クリックメニューを選択することは禁止の制限を解除することができます。

// @description       原作者https://www.github.com/Cat7373/，因为和搜索跳转脚本冲突，遂进行了改动
// @homepageURL       https://cat7373.github.io/remove-web-limits/
// @supportURL        https://greasyfork.org/zh-CN/scripts/28497

// @icon               data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAABpElEQVR4nO3Vv2uUQRDG8c/ebSMWqay0trATAxrUSi1S2AiWFoJYpNCgoBjURsHWJKeNRfAvsDgFixQqKdPZ2ViEiCJYBOQu8f1hEXO59713j7MUfLZ6d2a/O8vMO0OzDnin9Ku2Mjvuaw07xgSAYEVXe2indMhj92zpKJLnBhF8MDeye9hn6zbN70eRiqCw02Bra3up8BBLu1FEBxsBucXqW4csz0ULe4jorSCMuPU89boRELDMHiI6Y8V65bbCUTccc70RkaOwKLOg0IkyXa9qTjOu2LAs6NZuD86hrdTyxRNTkUqqdhXlHrngGRVEZsMpJwex9DxIZSHYclesIb65LCoHgIs66UJq6btDBZHZrPh8V6YBOX66LbOkTGckBYimBW2FVTNeuOZNyrFJ236Yl4NSy5SbVm1PDvhodqgyMledTdRlAtDzqfL9tfkwUtyaRkv9LwFj9B/w7wPycXOhqlJ0yZHKPChMi5MCiM47XhsopbVJAUHfrYbmN/EToN+02eLPfz9OYyZhFJzW1Jn3lTsxaKQjCkp52jy45r1ZvSbTb9M0d4PBozGZAAAAAElFTkSuQmCC

// @version           2.2.2
// @license           LGPLv3

// @compatible        chrome Chrome_46.0.2490.86 + TamperMonkey + 脚本_1.3 测试通过
// @compatible        firefox Firefox_42.0 + GreaseMonkey + 脚本_1.2.1 测试通过
// @compatible        opera Opera_33.0.1990.115 + TamperMonkey + 脚本_1.1.3 测试通过
// @compatible        safari 未测试

// @match             *://*/*
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_deleteValue
// @run-at      document-end
// ==/UserScript==
(function() {
    'use strict';



//-------------------------------------------------------------------添加 start
    function test(){
        var black_list_user = GM_getValue("list_user");
        console.log(black_list_user);
    }

  // 检查
    function black_check(bool){
        var hostname = window.location.hostname;
        var check = check_black_list(list.black_list_user,hostname);
        if (bool && !check) {
            list.black_list_user = list.black_list_user.concat(hostname);
            // console.log("选中 不在黑名单",hostname,list.black_list_user);
        }else if(!bool && check){
            // console.log(check-1);
            list.black_list_user.splice(check-1,1);
            // console.log("未选中 在黑名单",list.black_list_user);
        }else{
            // console.log("返回false");
            return false;
        }
        // console.log("储存用户数据");
        // console.log(typeof(list.black_list_user),list.black_list_user);
        list.black_list_user = list.black_list_user.join("|");
        // console.log(list.black_list_user);
        GM_setValue("list_user",list.black_list_user);
        // test();
        // 刷新页面
        window.location.reload(true);
    }
    // 获取黑名单
    function get_black_list(){
        var black_list_user = GM_getValue("list_user");
        if(!black_list_user){
            black_list_user = [];
            black_list = black_list_default;
        }else{
            // typeof(black_list_user);
            black_list_user = black_list_user.split("|");
            var black_list = black_list_default.concat(black_list_user);
        }
        return {
            "black_list":black_list,
            "black_list_user":black_list_user,
        };
    }
   // 检查是否存在于黑名单中
    function check_black_list(list,host){
        for(let i=0;i<list.length;i++){
            if(hostname===list[i]){
            return i+1;  //万一匹配到第一个，返回0
            }
        }
        return false;
    }
//---------------------------------------------------------------------添加 end
  // 域名规则列表
    var rules = {
        black_rule: {
            name: "black",
            hook_eventNames: "",
            unhook_eventNames: ""
        },
        default_rule: {
            name: "default",
            hook_eventNames: "contextmenu|select|selectstart|copy|cut|dragstart",
            unhook_eventNames: "keydown|keyup|mousedown|mouseup",
            dom0: true,
            hook_addEventListener: true,
            hook_preventDefault: true,
            hook_set_returnValue: true,
            add_css: true
        },
        rule_plus: {
            name: "default",
            hook_eventNames: "contextmenu|select|selectstart|copy|cut|dragstart|mousedown|mouseup",
            unhook_eventNames: "keydown|keyup",
            dom0: true,
            hook_addEventListener: true,
            hook_preventDefault: true,
            hook_set_returnValue: true,
            add_css: true
        }
    };


  // 要处理的 event 列表
    var hook_eventNames, unhook_eventNames, eventNames;
    // 储存名称
    var storageName = getRandStr('qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM', parseInt(Math.random() * 12 + 8));
    // 储存被 Hook 的函数
    var EventTarget_addEventListener = EventTarget.prototype.addEventListener;
    var document_addEventListener = document.addEventListener;
    var Event_preventDefault = Event.prototype.preventDefault;

    // Hook addEventListener proc
    function addEventListener(type, func, useCapture) {
        var _addEventListener = this === document ? document_addEventListener : EventTarget_addEventListener;
        if(hook_eventNames.indexOf(type) >= 0) {
            _addEventListener.apply(this, [type, returnTrue, useCapture]);
        } else if(unhook_eventNames.indexOf(type) >= 0) {
            var funcsName = storageName + type + (useCapture ? 't' : 'f');

            if(this[funcsName] === undefined) {
                this[funcsName] = [];
                _addEventListener.apply(this, [type, useCapture ? unhook_t : unhook_f, useCapture]);
            }

            this[funcsName].push(func);
        } else {
            _addEventListener.apply(this, arguments);
        }
    }

  // 清理循环
  function clearLoop() {
    var elements = getElements();

    for(var i in elements) {
      for(var j in eventNames) {
        var name = 'on' + eventNames[j];
        if(elements[i][name] !== null && elements[i][name] !== onxxx) {
            if(unhook_eventNames.indexOf(eventNames[j]) >= 0) {
                elements[i][storageName + name] = elements[i][name];
                elements[i][name] = onxxx;
          } else {
                elements[i][name] = null;
          }
        }
      }
    }
  }

  // 返回true的函数
    function returnTrue(e) {
        return true;
    }
    function unhook_t(e) {
        return unhook(e, this, storageName + e.type + 't');
    }
    function unhook_f(e) {
        return unhook(e, this, storageName + e.type + 'f');
    }
    function unhook(e, self, funcsName) {
        var list = self[funcsName];
        for(var i in list) {
            list[i](e);
        }

        e.returnValue = true;
        return true;
    }
    function onxxx(e) {
        var name = storageName + 'on' + e.type;
        this[name](e);

        e.returnValue = true;
        return true;
    }

  // 获取随机字符串
    function getRandStr(chs, len) {
        var str = '';

        while(len--) {
            str += chs[parseInt(Math.random() * chs.length)];
        }

        return str;
    }

  // 获取所有元素 包括document
    function getElements() {
        var elements = Array.prototype.slice.call(document.getElementsByTagName('*'));
        elements.push(document);

        return elements;
    }


  //添加按钮
    function addBtn(){
        var node = document.createElement("remove-web-limits-iqxin");
        node.id = "rwl-iqxin";
        // node.innerHTML = '<label><input type="checkbox" name="" id="black_node">黑名单</label><button id="delete">delete</btton>';
        node.innerHTML = '<label>限制解除 <input type="checkbox" name="" id="black_node"></label>';
        if(window.self === window.top){
            if (document.querySelector("body")){
                document.body.appendChild(node);
            } else {
                document.documentElement.appendChild(node);
            }
        }
        node.addEventListener("mouseover",function(){
            node.classList.add("rwl-active-iqxin");
            list = get_black_list();
        });
        node.addEventListener("mouseleave",function(){
            node.classList.remove("rwl-active-iqxin");
            black_check(black_node.checked);
        });
        // 删除本地存的黑名单
        // document.getElementById("delete").addEventListener("click",function(){
        //  GM_deleteValue ("list_user");
        //  test();
        // }); 
        GM_addStyle(
            "#rwl-iqxin{" +
                "position:fixed;" +
                "top:0;" +
                "left:-62px;" +
                "width:58px;" +
                "height:25px;" +
                "font-size:12px;" +
                "font-weight: 500;" +
                "font-family:Verdana, Arial, '宋体';" +
                "color:#fff;" +
                "background:#333;" +
                "z-index:2147483647;" +
                "margin: 0;" +
                "opacity:0.05;" +
                "transition:0.3s;" +
                "overflow:hidden;" +
                "user-select:none;" +
                "text-align:center;" +
                "white-space:nowrap;" +
                "line-height:25px;" +
                "padding:0 16px;" +
                "border:1px solid #ccc;" +
                "border-width:1px 1px 1px 0;" +
                "border-bottom-right-radius:5px;" +
                "box-sizing: content-box;" +
            "}" +
            "#rwl-iqxin input{" +
                "margin: 0;" +
                "padding: 0;" +
                "vertical-align:middle;" +
                "-webkit-appearance:checkbox;" +
                "-moz-appearance:checkbox;" +
            "}" +
            "#rwl-iqxin.rwl-active-iqxin{" +
                "top: 10px;" +
                "left: 0px;" +
                "opacity: 0.9;" +
                "height: 32px;" +
                "line-height: 32px" +
            "}" +
            "#rwl-iqxin label{" +
                "margin:0;" +
                "padding:0;" +
            "}"
        );
    };

    // 部分网站采用了其他的防复制手段
    function clear(){
        // console.log(hostname);
        switch (hostname){
            case "www.z3z4.com": clear_z3z4(); break;
            // case "news.ifeng.com":
            // case "www.15yan.com": rule = clear_15yan();break;
        }
        return rules.rule_plus;
    }
    // www.z3z4.com 再三再四, 文字上面覆盖一层透明的div
    function clear_z3z4(){
        var oDiv = document.querySelector(".moviedownaddiv");
        if (oDiv) {
            oDiv.parentNode.removeChild(oDiv);
        }
    }
    // www.15yan.com 15言， 监控 mousedown
    function clear_15yan(){
        return rules.rule_plus;
    }


    // 初始化
    function init() {
        //console.log("使用规则-------------------------------------------------iqxin");
        // 针对个别网站采取不同的策略
        var rule = clear();
        // 设置 event 列表
        hook_eventNames = rule.hook_eventNames.split("|");
        // TODO Allowed to return value
        unhook_eventNames = rule.unhook_eventNames.split("|");
        eventNames = hook_eventNames.concat(unhook_eventNames);

        // 调用清理 DOM0 event 方法的循环
        if(rule.dom0) {
            setInterval(clearLoop, 30 * 1000);
            setTimeout(clearLoop, 2500);
            window.addEventListener('load', clearLoop, true);
            clearLoop();
        }

        // hook addEventListener
        if(rule.hook_addEventListener) {
            EventTarget.prototype.addEventListener = addEventListener;
            document.addEventListener = addEventListener;
        }

        // hook preventDefault
        if(rule.hook_preventDefault) {
            Event.prototype.preventDefault = function() {
                if(eventNames.indexOf(this.type) < 0) {
                    Event_preventDefault.apply(this, arguments);
                }
            };
        }

        // Hook set returnValue
        if(rule.hook_set_returnValue) {
            Event.prototype.__defineSetter__('returnValue', function() {
                if(this.returnValue !== true && eventNames.indexOf(this.type) >= 0) {
                    this.returnValue = true;
                }
            });
        }

    // console.debug('url: ' + url, 'storageName：' + storageName, 'rule: ' + rule.name);

    // 添加CSS
        if(rule.add_css) {
            GM_addStyle('html, * {-webkit-user-select:text!important; -moz-user-select:text!important;}');
        }

    }

//--开始执行---------------------------------------------------------------iqxin
    
    var black_list_default = [
        "www.360doc.com",
        "www.zhihu.com",
    ];

    addBtn();   //页面左上角按钮，不想要按钮可以把这行注释掉
    var black_node = document.getElementById("black_node");

    var list = get_black_list();

    var hostname = window.location.hostname; 
    if(check_black_list(list.black_list,hostname)){
        // 如果注释掉按钮，此处会获取不到
        if(black_node){
            black_node.checked = true;
        }
        //console.log("位于黑名单中----------------revove_web_limits------iqxin");
        init();
    }
})();
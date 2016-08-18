Ext.Loader.setConfig({
    enabled: true
});
/*
*请自行添加模拟数据
*这里涉及到了
*路由:controller.Main
*List:view.img.List
*历史记录支持、自动销毁、自定义消息提示：view.img.util.CardPanel
*登录、注册：controller.User和view.user
*Carousel:view.img.List和controller(除开user)
*如有问题请联系qq：534502520 @魔狼再世 欢迎交流
*此版本已在安卓中打包测试
*/
Ext.application({
    name: 'app',
    appFolder: 'app',
    controllers: ['Main', 'User','Img'],
    views: ['util.CardPanel'],
    //过期时间
    sessionTimeout: 1000 * 60 * 60 * 24 * 30,
    launch: function () {
        Ext.Msg.defaultAllowedConfig.showAnimation = false;
        Ext.Msg.defaultAllowedConfig.hideAnimation = false;

        //默认的月份是英文的
        //Ext.Date.monthNames = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];//日期控件的月份初始化成中文
        (function() {
            if (Ext.DateExtras) {
                Ext.DateExtras.dayNames = [
                    '星期日',
                    '星期一',
                    '星期二',
                    '星期三',
                    '星期四',
                    '星期五',
                    '星期六'
                ];
                Ext.DateExtras.monthNames = [
                    '一月',
                    '二月',
                    '三月',
                    '四月',
                    '五月',
                    '六月',
                    '七月',
                    '八月',
                    '九月',
                    '十月',
                    '十一月',
                    '十二月'
                ];
                Ext.DateExtras.defaultFormat = 'Y-m-d';
                var utilDate = Ext.DateExtras;
                Ext.apply(Ext.Date, utilDate);
//
                Ext.ns("Ext.util");
                Ext.apply(Ext.util.Date, utilDate);
//
            }
            if (Ext.picker.Date) {
                Ext.override(Ext.picker.Date, {
                    'dayText': '日',
                    'monthText': '月',
                    'yearText': '年',
                    'slotOrder': ['year', 'month', 'day']
                });
            }
            if(Ext.util.Format){
                Ext.util.Format.defaultDateFormat = 'Y-m-d';
            }

            if(Ext.NestedList){
                Ext.override(Ext.NestedList, {
                    'backText': '返回',
                    'loadingText': '加载...',
                    'emptyText': '没有数据.'
                });
            }

// 验证消息
            if (Ext.data.Validations) {
                Ext.data.Validations.setPresenceMessage('必填项');
                Ext.data.Validations.setLengthMessage('超出长度');
                Ext.data.Validations.setFormatMessage('格式错误');
                Ext.data.Validations.setInclusionMessage('格式超出限定');
                Ext.data.Validations.setExclusionMessage('格式被禁止使用');
                Ext.data.Validations.setEmailMessage('错误的email');
            }
// 消息按钮
            if(Ext.MessageBox) {
                Ext.MessageBox.OK.text = '确定';
                Ext.MessageBox.YES.text = '是';
                Ext.MessageBox.NO.text = '否';
                Ext.MessageBox.CANCEL.text = '取消';
                Ext.each(Ext.MessageBox.OKCANCEL, function(item, index, allItems) {
                    if ('cancel' == item.itemId) {
                        item.text = Ext.MessageBox.CANCEL.text;
                    } else if ('ok' == item.itemId) {
                        item.text = Ext.MessageBox.OK.text;
                    }
                });
                Ext.each(Ext.MessageBox.YESNOCANCEL, function(item, index, allItems) {
                    if ('cancel' == item.itemId) {
                        item.text = Ext.MessageBox.CANCEL.text;
                    } else if ('yes' == item.itemId) {
                        item.text = Ext.MessageBox.YES.text;
                    } else if ('no' == item.itemId) {
                        item.text = Ext.MessageBox.NO.text;
                    }
                });
                Ext.each(Ext.MessageBox.YESNO, function(item, index, allItems) {
                    if ('no' == item.itemId) {
                        item.text = Ext.MessageBox.NO.text;
                    } else if ('yes' == item.itemId) {
                        item.text = Ext.MessageBox.YES.text;
                    }
                });
            }
        })();

        //去除打开的欢迎动画
        Ext.fly('appLoadingIndicator').destroy();
        //Ext.Viewport.add({
        //                        xtype: "main"
        //                    });
        ////接收请求参数
        //var strings;
        //var url = location.search; //获取url中"?"符后的字串
        //var theRequest = new Object();
        //if (url.indexOf("?") != -1) {
        //    var str = url.substr(1);
        //    strings = str.split("&");
        //    for(var i = 0; i < strings.length; i ++) {
        //        theRequest[strings[i].split("=")[0]] = unescape(strings[i].split("=")[1]);
        //    }
        //}
        //var id=theRequest["openId"];
        //constant.userSession.openId=id;
        //if(id){
        //    var url=constant.url.getUserInfoUrl;
        //    utils.jsonPRequest(url,{},function(result){
        //        if(result.Result){
        //            constant.userSession.name=result.Data.Name;
        //            constant.userSession.phone=result.Data.PhoneNum;
        //            constant.userSession.coupon=result.Data.CouponBalance;
        //        }else{
        //            constant.userSession.userTag=result.Message;
        //        }
        //        var type=theRequest["type"];
        //        //  拼搭客 ,类型一为主页列表，类型二为定制页面，类型三为“我的”页面
        //        if(type==1){
        //            Ext.Viewport.add({
        //                xtype: "listPage"
        //            });
        //        }else if(type==2){
        //            Ext.Viewport.add({
        //                xtype: "customMade"
        //            });
        //        }else if(type==0){
        //            Ext.Viewport.add({
        //                xtype: "mine"
        //            });
        //        }else if(type==3){
        //            Ext.Viewport.add({
        //                xtype: "ticket"
        //            });
        //        }
        //    })
        //}
    }
});
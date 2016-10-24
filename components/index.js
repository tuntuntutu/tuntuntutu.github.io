require.config({
    paths: {
        text: "../lib/text"
    }
});
require([
    '../lib/vue.min',
    'text!./tpl.html'
    , 'text!./widgets/button.html'
    , 'text!./widgets/filterBox.html'
    , 'text!./widgets/tab.html'
    , 'text!./widgets/AUModal.html'
], function (Vue, tpl, Button, FilterBox, Tab, AUModal) {
    var widgets = [
        {
            name: "按钮",
            desc: "根据不同场景准确使用不同颜色不同大小的button有助于使用者快速理解button的含义，比如删除就用btn-danger。虽然按钮类能用在诸如a、span等标签上，但强烈建议尽可能使用 button 元素来获得在各个浏览器上获得相匹配的绘制效果",
            html: Button,
            current: true
        }
        , {
            name: "列表筛选",
            wName: "filterBox",
            desc: "作为列表上方用于筛选：" +
            "<ul>" +
            "<li>外层的navbar-form类可以替换成form-inline，前者会有一些margin、padding的变化，后者是空白样式，只影响子元素。</li>" +
            "<li>如果想不显示label内容可以为其加上sr-only类</li>" +
            "<li>两种有label视觉效果的文本输入框，感觉第一种漂亮</li>" +
            "</ul>",
            html: FilterBox
        }
        , {
            name: "tab切换",
            wName: "tab",
            desc: "简单的tab切换：" +
            "<ul>" +
            "<li>左右结构</li>" +
            "<li>上下结构</li>" +
            "</ul>",
            html: Tab
        }
        , {
            name: "弹窗布局",
            wName: "auModal",
            desc: "",
            html: AUModal
        }
    ];
    widgets.forEach(function (item) {
        item.code = hljs.highlight('html', item.html).value;
    });
    Vue.component('filterBox', Vue.extend({
        template: FilterBox,
        props: ['provinces']
    }));
    Vue.component('tab', Vue.extend({
        template: Tab,
        props: ['provinces'],
        data(){
            return {
                tabList: [
                    {
                        title: 'APP',
                        isShowSub: true,
                        subList: [
                            {
                                type: 1,
                                name: "资源位设置",
                                tpl: "这是模板一"
                            }, {
                                type: 4,
                                name: "资源位设置2",
                                tpl: "这是模板三"
                            }
                        ]
                    },
                    {
                        title: 'PC',
                        isShowSub: true,
                        subList: [
                            {
                                type: 5,
                                name: "小广告设置",
                                tpl: "这是模板二"
                            }
                        ]
                    }
                ],
                tab1_type: 1,
                tab1_tpl: "",
                tab2_type: 1,
                tab2_tpl: "",
                tab3_type: 1,
                tab3_tpl: ""
            }
        },
        methods: {
            tabChange(item, currentTab, currentTpl){
                this._data[currentTpl] = item.tpl;
                this._data[currentTab] = item.type;
            }
        }
    }));
    Vue.component('auModal', Vue.extend({
        template: AUModal,
        props: ['provinces'],
        data(){
            return {
                auModal: {list: []}
            }
        },
        methods: {
            addItem(list){
                list.push({});
            },
            removeItem(list, index){
                list.splice(index, 1);
            }
        }
    }));
    new Vue({
        el: "#app",
        template: tpl,
        data(){
            return {
                widgets: widgets,
                provinces: [
                    {name: "北京市", id: "test1"},
                    {name: "上海市", id: "test2"}
                ]
            }
        },
        ready(){
            hljs.initHighlighting();
        },
        methods: {
            nav(wt){
                location.href = '#' + wt.name;
                this.widgets.forEach(function (item) {
                    item.current = false;
                });
                wt.current = true;
            }
        }
    })
});
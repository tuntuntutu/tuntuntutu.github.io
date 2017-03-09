require.config({
    paths: {
        text: "../lib/text"
    }
});
require([
    '../lib/vue.min',
    'text!./tpl.html'
    , 'text!./widgets/button.html'
    , 'text!./widgets/rippleButton.html'
    , 'text!./widgets/toggle.html'
    , 'text!./widgets/filterBox.html'
    , 'text!./widgets/tab.html'
    , 'text!./widgets/AUModal.html'
], function (Vue, tpl, Button,RippleButton,Toggle, FilterBox, Tab, AUModal) {
    var widgets = [
        {
            name: "普通按钮",
            wName: "buttonBox",
            html: Button,
            current: true
        }
        , {
            name: "涟漪按钮",
            wName: "rippleButton",
            html: RippleButton,
            current: false
        }, {
            name: "切换开关",
            wName: "toggle",
            html: Toggle,
            current: false
        }
        , {
            name: "列表控件",
            wName: "filterBox",
            html: FilterBox,
            current: false
        }
        , {
            name: "tab",
            wName: "tab",
            html: Tab,
            current: false
        }
        , {
            name: "列表增删",
            wName: "auModal",
            html: AUModal,
            current: false
        }
    ];
    widgets.forEach(function (item) {
        item.code = hljs.highlight('html', item.html).value;
    });
    Vue.component('buttonBox', Vue.extend({
        template: Button
    }));
    Vue.component('rippleButton', Vue.extend({
        template: RippleButton,
        data(){
            return {
                location: {
                    x: 0,
                    y: 0
                },
                isShowAnimate:false,
                class:'btn btn-primary'
            }
        },
        methods:{
            clickRButton(e){
                var ripple = this.$els.ripple;
                this.isShowAnimate=false;
                this.location.x = parseInt(e.layerX) - (ripple.offsetWidth / 2);
                this.location.y = parseInt(e.layerY) - (ripple.offsetHeight / 2);
                setTimeout(function(){
                    this.isShowAnimate=true;
                    this.$emit('click');
                }.bind(this),100)
            }
        }
    }));
    Vue.component('toggle', Vue.extend({
        template: Toggle,
        data(){
            return {
                value: true
            }
        }
    }));
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
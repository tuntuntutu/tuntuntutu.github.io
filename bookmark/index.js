require.config({
    paths: {
        text: "../lib/text"
    }
});
require(['../lib/vue.min', 'text!./bookmark.html', 'util', 'text!./cache.json'], function (Vue, bookmark, util, cache) {
    var config = {
        version: '1.0.2',
        nest: true,
        storeLocal: false,
        showType: 'flow' //展示效果，是切换面板还是锚点
    };
    var data = config.nest && cache  && JSON.parse(cache) ? JSON.parse(cache).bookmarks : util.$getBookmarkData(bookmark, config);
    new Vue({
        el: "#bookmark",
        data: {
            bookmarks: data.bookmarks,
            anchors: data.anchors,
            loading: false,
            showType: config.showType,
            currentAnchor: "",
            isNest: config.nest
        },
        created: function () {
            if (data.anchors && data.anchors.length) {
                this.$data.anchors[0].selected = true;
                this.$data.currentAnchor = data.anchors[0].title;
            }
        },
        methods: {
            select: function (anchor) {
                this.$data.anchors.map(item => {
                    item.selected = false
                });
                anchor.selected = true;
                this.$data.currentAnchor = anchor.title;
            }
        }
    })
});
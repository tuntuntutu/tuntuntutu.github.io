require.config({
    paths: {
        text: "../lib/text"
    }
});
require(['../lib/vue.min', 'text!./bookmark.html', 'util', 'text!./cache.json'], function (Vue, bookmark, util, cache) {
    var config = {
        version: '1.0.4',
        nest: true,
        storeLocal: false,
        showType: 'anchor' //展示效    果，是切换面板还是锚点
    }, data;
    var storage = util.$getLocalStorage('bookmark');
    if (storage && storage.nest == config.nest && config.version == storage.version) {
        data = storage;
    } else {
        util.$setLocalStorage('bookmark', null);
        var result = cache && JSON.parse(cache);
        data = config.nest && result ? result.bookmarks : util.$getBookmarkData(bookmark, config.nest);
        data.version=config.version;
        data.nest=config.nest;
        util.$setLocalStorage('bookmark', JSON.stringify(data));
    }
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
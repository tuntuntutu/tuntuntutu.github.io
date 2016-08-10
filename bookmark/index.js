require.config({
    paths: {
        text: "../lib/text"
    }
});
define(['../lib/vue.min', 'text!./bookmark.html'], function (Vue, bookmark) {
    var father = '', bookmarks = [], anchors = [];
    var util = {
        getBookmarkData: function (html) {
            html.replace(/\<H3[^>]*\>\s*?([^<]*)\<\/H3\>|\<A[^>]*\>\s*?([^<]*)\<\/A\>/gi, function (item, title, name) {
                if (title) {
                    if (father != title)anchors.push({title: title, selected: false});
                    father = title;
                    bookmarks.push({father: '', name: title});
                    return;
                }
                if (name) {
                    var json, icon = '', url = '';
                    item.replace(/ICON+=\"(.+?)\"/, function (a, b) {
                        icon = b || '';
                    });
                    item.replace(/HREF+=\"(.+?)\"/, function (a, b) {
                        url = b || '';
                    });
                    name = name.replace(/\n/, '');
                    name = name.replace(/\s{2,10}/, ' ');
                    json = {url: url, father: father, name: name, icon: icon};
                    bookmarks.push(json);
                }
            });
            return {bookmarks: bookmarks, anchors: anchors}
        }
    };
    var data = util.getBookmarkData(bookmark);
    new Vue({
        el: "#bookmark",
        data: {
            bookmarks: data.bookmarks,
            anchors: data.anchors,
            hasReady: true,
            showType: 1,
            currentAnchor:data.anchors[0].title
        },
        created:function(){
          this.$data.anchors[0].selected=true;
        },
        methods: {
            select: function (anchor) {
                this.$data.anchors.map(item => {item.selected = false})
                anchor.selected = true;
                this.$data.currentAnchor = anchor.title;
            }
        }
    })
});
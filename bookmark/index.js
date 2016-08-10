require.config({
    paths: {
        text: "../lib/text"
    }
});
define(['../lib/vue.min', 'text!./bookmark.html'], function (Vue, bookmark) {
    var father = '', bookmarks = [], json, anchors = [];
    bookmark.replace(/\<H3[^>]*\>\s*?([^<]*)\<\/H3\>|\<A[^>]*\>\s*?([^<]*)\<\/A\>/gi, function (item, title, name) {
        if (title) {
            if (father != title)anchors.push(title);
            father = title;
            bookmarks.push({father:'',name:title});
            return;
        }
        if (name) {
            var icon = '',url='';
            item.replace(/ICON+=\"(.+?)\"/, function (a, b) {
                icon = b;
            });
            item.replace(/HREF+=\"(.+?)\"/, function (a, b) {
                url = b;
            });
            if (icon && icon.length)json.icon = icon;
            json = {url: url, father: father, icon: icon, name: name};
            bookmarks.push(json);
        }
    })
    new Vue({
        el: "#bookmark",
        data: {bookmarks: bookmarks, anchors: anchors},
        methods: {}
    })
});
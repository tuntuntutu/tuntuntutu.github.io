define(function () {
    return {
        $getBookmarkData: function (html, config) {
            var version = config.version, isNest = config.nest, storeLocal = config.storeLocal;
            var storage = JSON.parse(localStorage.getItem('bookmarks'));
            if (storeLocal && storage && version == storage.version)return storage.bookmarks;
            var data = isNest ? this.getNestBookmark(html) : this.getBookmarkJson(html);
            localStorage.setItem('bookmarks', JSON.stringify({version: version, bookmarks: data}));
            return data;
        },
        getBookmarkJson: function (html) {
            var father = '', bookmarks = [], anchors = [];
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
            return {bookmarks: bookmarks, anchors: anchors};
        },
        getNestBookmark: function (html) {
            var father = '', bookmarks = [], anchors = [], f_Json={};
            html.replace(/\<H3[^>]*\>\s*?([^<]*)\<\/H3\>|\<A[^>]*\>\s*?([^<]*)\<\/A\>/gi, function (item, title, name) {
                if (title) {
                    if (father != title) {
                        if (f_Json) bookmarks.push(f_Json);
                        anchors.push({title: title, selected: false});
                        f_Json = {father: title, children: []};
                    }
                    father = title;
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
                    json = {url: url, father: father, name: name, icon: icon};
                    f_Json.children.push(json);
                }
            });
            bookmarks.push(f_Json);
            return {bookmarks: bookmarks, anchors: anchors};
        }
    }
});

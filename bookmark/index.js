require.config({
    paths: {
        text: "../lib/text"
    }
});
define(['../lib/vue.min', 'text!./cache.html'], function (Vue, bookmark) {
    var father = '', array = [], json;
    bookmark.replace(/\<H3[^>]*\>\s*?([^<]*)\<\/H3\>|\<A[^>]*\>\s*?([^<]*)\<\/A\>/gi, function (a, title, name) {
        if (title) {
            father = title;
            return;
        }
        if (name) {
            json = {url: a.match(/HREF+=\".+?\"/)[0], father: father, name: name};
            array.push(json);
        }
    })
    console.log(array)
})
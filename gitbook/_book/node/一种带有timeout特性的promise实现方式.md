# 一种带有timeout特性的的promise实现方式
### 说明

- 自从Fetch出现，基本上告别Ajax式写法已经是大势所趋，然而，已经习惯了Ajax的timeout属性，会发现在Fetch中找不到该属性，这样已经习惯了Ajax操作的同学很是不爽...jQuery用的溜的同学尤甚

- 查阅[Fetch的API](https://fetch.spec.whatwg.org/)，会发现该返回值其实是一个promise的实例。然而，promise的设计是，一旦启动，就不可取消，不可中断，更别说主动设置timeout，详见[阮一峰关于Promise的说明](http://es6.ruanyifeng.com/#docs/promise#Promise的含义) 
- 可以考虑从promise自身出发，去解决这个问题，比如以下代码，用了一种取巧的方式，外层用一个promise来控制目标promise的取消，详情见代码： 


代码：

    /**
     * 给一个promise设置一个执行timeout，超时就结束
     * @param {Number} t (ms)
     * @param {Promise} promise
     * @returns {Promise}
     * @description
     * 备注：
     *   这个写法比较鬼畜，建议少用!!!
     *   因为已经违背了promise的设计初衷（promise被设计出来的初衷就是一旦执行，不可中断，不可取消）
     * 参见：
     *   https://github.com/github/fetch/issues/175
     */
    timeoutPromise: function(t, promise) {

        t = parseInt(t) || 0;//默认不设限制

        console.warn("Warning: u r using a promise with timeout-feature via DIY,timeout=" 
        + ( t ? (t+"ms") : "noLimit" ) + ".  :( orz..." );

        return new Promise((resolve, reject) => {

            var toutId = !t ? 0 : window.setTimeout(function(){
                reject(new Error("promise timeout with "+t+"ms."))
            }, t);

            promise.then(
                res => {
                    toutId && window.clearTimeout(toutId);
                    resolve(res);
                },
                err => {
                    toutId && window.clearTimeout(toutId);
                    reject(err);
                }
            );
        })
    }

    
使用姿势：
    
    timeoutPromise(3000,fetch("http://kaola.com",{test:"helloworld"})).then(
        res => {
            res.json();
        },
        err => {
            console.error(err);
        }
    );
    
    
引用：
- [Fetch-standard](https://fetch.spec.whatwg.org/)
- [阮一峰关于Promise的说明](http://es6.ruanyifeng.com/#docs/promise#Promise的含义) 
- [Fetch-Github](https://github.com/whatwg/fetch)

欢迎补充...
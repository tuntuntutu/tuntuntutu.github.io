# 实用npm包

# react 周边

 - react动画库 ReactCSSTransitionGroup
 - Enzyme react dom测试

# 文档
 - [css速查表](https://juejin.im/entry/5981c69251882534b44dee5f/detail?utm_source=gold_browser_extension)


# 安全方面
## XSS
- CSP（Content Security Policy），限制src加载域名
```html
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src 'self' img.alicdn.com;">
```
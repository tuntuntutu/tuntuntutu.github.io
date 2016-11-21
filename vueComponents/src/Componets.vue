<template>
  <div id="app">
    <menu-top></menu-top>
    <div class="container">
      <div class="col-md-9" role="main">
        <div class="bs-docs-section" v-for="wt in widgets">
          <h1 class="page-header" id="{{wt.name}}">{{wt.name}}</h1>

          <p v-html="wt.desc"></p>

          <component :is="wt.wName" :provinces="provinces"></component>

          <div class="u-highlight" v-highlight>
            <pre><code class="html" v-html="wt.html"></code></pre>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="tt-nav">
          <ul class="list-group">
            <a v-for="wt in widgets" class="list-group-item" @click="nav(wt,widgets)"
               :class="{'active':wt.current}">
              {{wt.name}}
            </a>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Hljs from 'highlight.js';
  import menuTop from './wrap/head';
  import rButton from './components/rippleButton';
  import toggle from './components/toggle';

  const w = [
    {
      name: '涟漪按钮',
      wName: 'rButton',
      html: rButton.template,
      current: true,
    }, {
      name: '切换开关',
      wName: 'toggle',
      html: toggle.template,
      current: false,
    },
  ];
  w.forEach((item) => {
    item.code = item.html;
  });
  export default {
    data() {
      return {
        widgets: w,
      };
    },
    components: {
      rButton,
      menuTop,
      toggle,
    },
    methods: {
      nav(wt, widgets) {
        widgets.forEach((item) => {
          item.current = false;
        });
        wt.current = true;
      },
    },
    directives: {
      highlight: function () {
        const blocks = this.el.querySelectorAll('pre code');
        Array.prototype.forEach.call(blocks, Hljs.highlightBlock);
      },
    },
  }
  ;
</script>

<style scoped>
  .tt-nav {
    position: fixed;
    top: 100px;
  }

  .tt-nav .list-group-item.active, .tt-nav .list-group-item.active:focus, .tt-nav .list-group-item.active:hover {
    background: #5dd46d;
    border-color: #5dd46d;
  }
</style>

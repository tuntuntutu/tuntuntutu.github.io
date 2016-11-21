<template>
  <div id="app">
    <menu-top></menu-top>
    <div class="container">
      <div class="col-md-9" role="main">
        <div class="bs-docs-section" v-for="wt in widgets">
          <h1 class="page-header" id="{{wt.name}}">{{wt.name}}</h1>

          <p v-html="wt.desc"></p>

          <component :is="wt.wName" :provinces="provinces"></component>

          <div class="u-highlight">
            <pre><code class="html " v-html="wt.code"></code></pre>
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
  require('./assets/solarized_dark.min.css');


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
    item.code = Hljs.highlight('html', item.html).value;
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

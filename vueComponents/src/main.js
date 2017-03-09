import Vue from 'vue';
import VueRouter from 'vue-router';
import componets from './Componets.vue';
import home from './Home.vue';

const App = Vue.extend({});

Vue.use(VueRouter);
const router = new VueRouter();
router.map({
  '/index': {
    name: 'index',
    component: home,
  },
  '/components': {
    name: 'new',
    component: componets,
  },
});
//  定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
router.redirect({
  '*': '/index', //  重定向任意未匹配路径到/index
});


router.start(App, '#app');

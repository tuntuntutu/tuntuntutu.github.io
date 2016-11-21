<template>
  <div class="tt-menu" v-bind:class="{'navbar-static-top':isTop,'navbar-fixed-top':!isTop}">
    <div class="container">
      <div class="navbar-header logo">
        <a href="/htm/index.html" class="navbar-brand">TT-C</a>
      </div>
      <nav>
        <ul class="nav navbar-nav">
          <li>
            <a v-link="{path:'/'}">TUNTUN</a>
          </li>
          <li>
            <a v-link="{path:'/recruit'}">Recruit</a>
          </li>
          <li>
            <a v-link="{path:'/components'}">Components</a>
          </li>
          <li>
            <a v-link="{path:'/2048'}">2048</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        isTop: true,
      };
    },
  };
</script>
<style scoped>
  .tt-menu {
    text-align: center;
    text-shadow: 0 1px 0 rgba(0, 0, 0, .1);
    background-color: #5dd46d;
    color: #fff;
  }

  .tt-menu .navbar-brand {
    font-weight: 500;
    color: #fff;
    font-size: 30px;
    margin-left: -15px;
  }

  .tt-menu .navbar-nav > li > a,
  .tt-menu .navbar-nav > li > a:hover,
  .tt-menu .navbar-nav > .active > a:hover {
    color: #fff;
    background: #5dd46d;
  }

  .tt-menu .navbar-nav > .active > a, .tt-menu .navbar-nav > li > a:hover, .tt-menu .navbar-nav > .active > a:hover {
    background: #4ac94a;
  }
</style>

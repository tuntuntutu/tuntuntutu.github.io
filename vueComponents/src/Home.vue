<template>
  <div>
    <headtop></headtop>
    <main class="tt-banner">
      <div class="container">
        <span class="tt-icon tt-lg">Tuntun&Tutu</span>
        <p class="line describe">Just show some demo and breeds an product for my unborn baby Named Tuntun</p>
        <p class="line bookmark">
          <a href="./bookmark/index.html" class="btn btn-lg tt-inline">Bookmark</a>
        </p>
        <p class="line pull-right"><span class="glyphicon glyphicon-btc"></span>Tutu will be the 2rd baby</p>
      </div>
    </main>
  </div>
</template>

<script>
  import headtop from './wrap/head';
  export default {
    components: {
      headtop,
    },
  };
</script>

<style scoped>
  .tt-banner {
    position: relative;
    min-height: 200px;
    padding: 30px 0;
    color: #a5e6ab;
    text-align: center;
    text-shadow: 0 1px 0 rgba(0, 0, 0, .1);
    background-color: #5dd46d;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#07712c), to(#5dd46d));
    background-image: -webkit-linear-gradient(top, #07712c 0, #5dd46d 100%);
    background-image: -o-linear-gradient(top, #07712c 0, #5dd46d 100%);
    background-image: linear-gradient(to bottom, #07712c 0, #5dd46d 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#07712c', endColorstr='#5dd46d', GradientType=0);
    background-repeat: repeat-x;
  }

  .tt-banner .line {
    line-height: 1.4;
    font-weight: 300;
    margin: 0 auto 30px;
  }

  .tt-banner .btn {
    padding: 15px 30px;
    font-size: 20px;
  }

  .tt-banner .describe {
    font-size: 30px;
    width: 80%;
    text-align: center;
  }

  .tt-banner .bookmark a {
    z-index: 2;
    position: relative;
    color: #fff;
    background-color: transparent;
    border-color: #c2e3bf;
  }

  .tt-banner .bookmark a:hover {
    color: #07712c;
    text-shadow: none;
    background-color: #fff;
    border-color: #fff;
  }

  .tt-banner:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
    background: #fff;
    opacity: 0.2;
    transform: scale(0, 1);
    transition: transform 0.5s ease;
  }

  .tt-banner:hover:after {
    transform: scale(1);
  }
  .tt-lg {
    height: 144px;
    font-size: 108px;
    line-height: 140px;
  }

  .tt-icon {
    display: block;
    font-weight: 500;
    color: #fff;
    text-align: center;
    cursor: default;
    border-radius: 15%;
  }
</style>

<template>
  <div id='hello' class="u-rButton {{className}}" @click="clickRButton" v-el:rButton>
    <span class="buttonText">{{text||'请点击我'}}</span>
    <span class="ripple" v-el:ripple v-bind:class="{'animate':isShowAnimate}"
          v-bind:style="{left:location.x+'px',top:location.y+'px'}" ref="ripple"></span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        location: {
          x: 0,
          y: 0,
        },
        isShowAnimate: false,
        className: 'btn btn-success',
      };
    },
    methods: {
      clickRButton(e) {
        const ripple = this.$els.ripple;
        this.isShowAnimate = false;
        this.location.x = parseInt(e.layerX, 10) - (ripple.offsetWidth / 2);
        this.location.y = parseInt(e.layerY, 10) - (ripple.offsetHeight / 2);
        setTimeout(() => {
          this.isShowAnimate = true;
          this.$emit('click');
        }, 100);
      },
    },
  };
</script>

<style scoped>
  /*涟漪按钮*/
  .u-rButton {
    overflow: hidden;
    position: relative;
    transition: 0.1s ease-in;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .u-rButton .ripple {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 100%;
    height: 100px;
    width: 100px;
    position: absolute;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  .u-rButton .animate {
    -webkit-animation: ripple 0.4s linear;
    animation: ripple 0.4s linear;
  }

  @-webkit-keyframes ripple {
    100% {
      -webkit-transform: scale(4);
      transform: scale(4);
      background-color: transparent;
    }
  }

  @keyframes ripple {
    100% {
      -webkit-transform: scale(4);
      transform: scale(4);
      background-color: transparent;
    }
  }
</style>

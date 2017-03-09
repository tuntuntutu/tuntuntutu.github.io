<template>
  <div class="u-toggle btn" @click="value =! value"
       v-bind:class="{'btn-success':value,'btn-default':!value,'off':!value}">
    <div class="toggleGroup">
      <label class="btn btn-success toggleOn">On</label>
      <label class="btn btn-default active toggleOff">Off</label>
      <span class="btn btn-default toggleHandle"></span>
    </div>
  </div>
</template>
<style scoped>
  .u-toggle {
    /*width: 66px;*/
    /*height: 34px;*/
    position: relative;
    overflow: hidden;
  }

  .u-toggle .toggleGroup {
    position: absolute;
    width: 200%;
    top: 0;
    bottom: 0;
    left: 0;
    transition: left 0.35s;
    -webkit-transition: left 0.35s;
    -moz-user-select: none;
    -webkit-user-select: none;
  }

  .u-toggle.off .toggleGroup {
    left: -100%;
  }

  .u-toggle .toggleOn, .u-toggle .toggleOff {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    right: 0;
    margin: 0;
    border: 0;
    border-radius: 0;
  }

  .u-toggle .toggleOn {
    left: 0;
    right: 50%;
  }

  .u-toggle .toggleHandle {
    position: relative;
    margin: 0 auto;
    padding-top: 0px;
    padding-bottom: 0px;
    height: 100%;
    width: 0px;
    border-width: 0 1px;
  }

  .u-toggle.btn {
    min-width: 66px;
    min-height: 34px;
  }

  .toggleOn.btn {
    padding-right: 24px;
  }

  .toggleOff.btn {
    padding-left: 24px;
  }

  .u-toggle.btn-lg {
    min-width: 79px;
    min-height: 45px;
  }

  .toggleOn.btn-lg {
    padding-right: 31px;
  }

  .toggleOff.btn-lg {
    padding-left: 31px;
  }

  .toggleHandle.btn-lg {
    width: 40px;
  }

  .u-toggle.btn-sm {
    min-width: 50px;
    min-height: 30px;
  }

  .toggleOn.btn-sm {
    padding-right: 20px;
  }

  .toggleOff.btn-sm {
    padding-left: 20px;
  }

  .u-toggle.btn-xs {
    min-width: 35px;
    min-height: 22px;
  }

  .toggleOn.btn-xs {
    padding-right: 12px;
  }

  .toggleOff.btn-xs {
    padding-left: 12px;
  }
</style>
<script>
  export default{
    data() {
      return {
        value: true,
      };
    },
  };
</script>

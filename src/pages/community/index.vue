<template>
  <div class='communicate-content'>
   <div class="top-banner">
    <img src="../../img/temp.png" class='banner-img'>
   </div>
   <div class="middle-list" v-for='(item,index) in list'>
        <div class="list-item">
           {{item}}
        </div>
   </div>
  </div>
</template>

<script>
  import indexScript from "./index.js";
  export default indexScript;
</script>
<style lang='less' scoped>
  @import '../../style/common.less';
  @import './index.less';
</style>

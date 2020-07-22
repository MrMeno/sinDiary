<template>
  <div class='index-content'>
    <div class='card-list'>
      <navigator class='card-cell' hover-class='card-cell__hover'>
        <i class="icon iconfont icon-search"></i>
        <label class='cell-title'>百科</label>
      </navigator>
      <navigator class='card-cell' hover-class='card-cell__hover'>
        <i class="icon iconfont icon-custom"></i>
         <label class='cell-title'>家庭</label>
      </navigator>
      <navigator class='card-cell' hover-class='card-cell__hover'>
        <i class="icon iconfont icon-like"></i>
         <label class='cell-title'>商店</label>
      </navigator>
      <navigator class='card-cell' hover-class='card-cell__hover'>
        <i class="icon iconfont icon-menu"></i>
         <label class='cell-title'>信息</label>
      </navigator>
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

<template>
    <div class='user-content'>
      <div class="user-item double">
        <div class="user-item-cell">
              {{userInfo.nickName}} 
        </div>
        <div class="user-item-cell">
            <img :src="userInfo.avatarUrl">
        </div>
         <div class="user-item-arrow">
            <i class="iconfont icon-next"></i>
        </div>
      </div>
       <div class="user-item">
          <div class="user-item-cell">
           
        </div>
      </div>
    </div>
</template>
<script>
import indexScript from "./index.js"; 
export default indexScript;
</script>
<style lang="less" scoped>
@import "../../../static/icon/iconfont.css";
 @import './index.less';
</style>

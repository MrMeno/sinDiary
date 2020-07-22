<template>
   <div class='user-content'>
      <div class="user-item double">
         <div class="user-item-cell title">
            <img :src="userInfo.avatarUrl">
         </div>
         <div class="user-item-cell content">
            <div class="cell-line">
               <label class="bold-font">
                    <open-data type='userNickName'></open-data>
                 </label>
            </div>
            <div class="cell-line">
               <label class="light-font">
                   当前地区：<open-data type='userProvince' lang="zh_CN"></open-data>-<open-data type='userCity' lang="zh_CN"></open-data>
                 </label>
            </div>
         </div>
         <div class="user-item-cell arrow">
            <i class="iconfont icon-next"></i>
         </div>
      </div>
      <navigator class="user-item auto" url="../setting/main" hover-class="user-item__hover">
         <div class="user-item-cell title">
            <div class="cell-line">
               <i class="icon iconfont icon-setting"></i>
               <label class="normal-font">
                   设置
                 </label>
            </div>
         </div>
         <div class="user-item-cell content">
         </div>
         <div class="user-item-cell arrow">
            <i class="iconfont icon-next"></i>
         </div>
      </navigator>
      <div class="user-item-list">
         <navigator class="user-item auto">
            <div class="user-item-cell title">
               <div class="cell-line">
                  <i class="icon iconfont icon-guarantee"></i>
                  <label class="normal-font">
                    支付
                 </label>
               </div>
            </div>
            <div class="user-item-cell content">
            </div>
            <div class="user-item-cell arrow">
               <i class="iconfont icon-next"></i>
            </div>
         </navigator>
         <navigator class="user-item auto">
            <div class="user-item-cell title">
               <div class="cell-line">
                  <i class="icon iconfont icon-child"></i>
                  <label class="normal-font">
                    宠物团
                 </label>
               </div>
            </div>
            <div class="user-item-cell content">
            </div>
            <div class="user-item-cell arrow">
               <i class="iconfont icon-next"></i>
            </div>
         </navigator>
         <navigator class="user-item auto">
            <div class="user-item-cell title">
               <div class="cell-line">
                  <i class="icon iconfont icon-info"></i>
                  <label class="normal-font">
                    订单
                 </label>
               </div>
            </div>
            <div class="user-item-cell content">
            </div>
            <div class="user-item-cell arrow">
               <i class="iconfont icon-next"></i>
            </div>
         </navigator>
         <navigator class="user-item auto">
            <div class="user-item-cell title">
               <div class="cell-line">
                  <i class="icon iconfont icon-camera"></i>
                  <label class="normal-font">
                    大师球
                 </label>
               </div>
            </div>
            <div class="user-item-cell content">
            </div>
            <div class="user-item-cell arrow">
               <i class="iconfont icon-next"></i>
            </div>
         </navigator>
      </div>
      <navigator class="user-item auto">
         <div class="user-item-cell title">
            <div class="cell-line">
               <i class="icon iconfont icon-address"></i>
               <label class="normal-font">
                   地址
                 </label>
            </div>
         </div>
         <div class="user-item-cell content">
         </div>
         <div class="user-item-cell arrow">
            <i class="iconfont icon-next"></i>
         </div>
      </navigator>
   </div>
</template>
<script>
   import indexScript from "./index.js";
   export default indexScript;
</script>
<style lang="less" scoped>
   @import '../../style/common.less';
   @import './index.less';
</style>

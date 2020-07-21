<script>
import { resolve,reject } from 'q';
let that = null;
export default {
  created () {
  that=this;
   wx.cloud.init({
     env: 'sinorita-test',
     traceUser: true
    })
    that.login();
  },
  methods: {
    getUserInfo: function(e) {
    return new Promise((resolve,reject)=>{
      wx.getSetting({
      success(res) {
       if (res.authSetting['scope.userInfo']) {
          console.log("已授权=====")
          wx.getUserInfo({
            success(res) {
              resolve(res.userInfo);
            },
            fail(res) {
              reject(res);
            }
          })
        } else {
          that.showSettingToast("请授权")
            reject('未授权=====');
        }
      }
    })
    })
  },
  login(){
   wx.cloud.callFunction(
      {
        name:'getOpenId',
        complete:result=>{
            if(result.errMsg=='cloud.callFunction:ok'){
               that.getUserInfo().then((res)=>{
                if(res){
                  let appid=result.result.appid||'';
                let openid=result.result.openid||'';
                wx.setStorageSync('appid', appid);
                wx.setStorageSync('openid', openid);
                }
                else{
                   that.showSettingToast("获取用户信息失败，请重试")
                }
             })
         }
      }}
    );
  },
  showSettingToast: function(e) {
    wx.showModal({
      title: '提示！',
      confirmText: '去设置',
      showCancel: false,
      content: e,
      success: function(res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/setting/main',
          })
        }
      }
    })
  }
  },
}
</script>

<style lang='less'>
 @import './style/common.less';
</style>

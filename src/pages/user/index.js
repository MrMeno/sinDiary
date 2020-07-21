let self=null;

export default{
    data(){
        return {
          userInfo: {}
        }
      },
      methods:{
 
      },
      created () {
        self=this;
        wx.getUserInfo({
          success(res) {
            self.userInfo=res.userInfo;
          },
          fail(error) {
            console.log(error)
          }
        })
      
      },
      mounted(){
        
      }
};
let self=null;
export default{
    data(){
        return {
          motto: 'Hello miniprograme',
          userInfo: {}
        }
      },
      methods:{
     
      },
      created () {
        self=this;
        if (mpvuePlatform === 'my') {}
        else{
        self.userInfo= mpvue.getStorageSync('userInfo') || []
        console.log(self.userInfo)
        }
      }
};
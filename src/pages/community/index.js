import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default{
  components: {
    card
  },

  data () {
    return {
      imgUrls: [
       "../../../static/images/temp.png"
      ],
      list:[1,2,3,4,5,6,7,8]
    }
  },

  created () {
    
  }
}
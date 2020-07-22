import card from '@/components/card';
let self=null;
export default{
  data () {
    return {
    }
  },
  components: {
    card
  },

  methods: {
    showDialog(){
          
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
    }
  },

  created () {
    self=this;
     
  }
}
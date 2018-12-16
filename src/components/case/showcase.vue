<template>
  <div class="showcase">
      <div>{{lists}}</div>
      <div class="show">
          <p>详情展示</p>
          <div class="hrs"></div>
      </div>
      <img v-if='imgurl' :src="$url+imgurl" alt="">
  </div>
</template>

<script>
import { detailed } from './../../utils/baseUrl.js'
export default {
  data() {
    return {
        lists:'',
        imgurl:''
    }
  },
  mounted() {
      detailed({id:Number(this.$route.query.name)})
      .then(res=>{
          this.lists = res.data.data[0].item_name;
          this.imgurl = res.data.data[0].imgurl;
      })
      
  },
  components: {

  }
}
</script>

<style scoped >
.showcase{
    box-sizing: border-box;
    padding-top: 18vh;
    font-size: 26px;
    color:#0B94A7;
    text-align: center;
}
.show{
    width:100%;
    font-size: 26px;
    color:#535354;
    text-align:center;
    position: relative;
    margin-top: 16px;
}
.hrs{
    position: absolute;
    top:0;
    left:0;
    height:17px;
    width:100%;
    border-bottom: 1px dashed #39A8B8;
}
p{
    position: absolute;
    z-index: 20;
    width:130px;
    left:50%;
    margin-left:-65px;
    background-color: white;
    padding:0;
    text-align: center;
}
img{
    margin-top: 105px;
    width:100%;
}
</style>

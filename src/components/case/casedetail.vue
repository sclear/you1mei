<template>
  <div @click="toshowd" class="casedetail">
      <img :src="$url+item.img" alt="">
      <p class="title">{{item.item_name}}</p>
      <p class="m2614"><span>{{item.type | choseTpye}}</span>   <span>{{item.hour | toTime}}</span></p>
      <p>{{item.text}}</p>
  </div>
</template>

<script>
import { toTime } from './../../utils/tool.js'
export default {
    props:{
        index:Number,
        item:Object
    },
    methods: {
        toshowd() {
            this.$emit('toshow',this.item.id)
        }
    },
    filters: {
        choseTpye(val) {
            if(val === 1){
                return 'APP案例'
            } else if(val === 2){
                return '网站案例'
            } else {
                return '后台案例'
            }
        },
        toTime(val) {
            return toTime(val,'y-m-d')
        }
    }
}
</script>

<style lang='less' scoped >
p{
    margin:0;
    padding:0;
    font-size: 14px;
    text-align: center;
}
span{
    margin:0 10px;
}
.casedetail{
    color:#535354;
    height:389px;
    width:286px;
    background-color: #F2F5F5;
    margin-top: 15px;
    margin-left: 2.2%;
    float: left;
    & > img{
        width:100%;
        height:205px;
    }
    .title{
        font-size: 21px;
        margin-top: 44px;
        font-weight: bold;
        text-align: center;
    }
    .m2614{
        margin:20px 0 14px 0;
    }
}
</style>

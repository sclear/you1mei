<template>
  <div class="money" @mouseover="getBgY($event)">
    <ul class="flow">
      <li class="hSline">
        <i class="iconfont setFlow1">&#xe613;</i> 选择项目类型
      </li>
      <li>
        <i class="iconfont" :class="nexs > 0?'setFlow2':''">&#xe60c;</i>功能评估
      </li>
      <li>
        <i class="iconfont" :class="nexs >1?'setFlow2':''">&#xe603;</i>计算结果
      </li>
    </ul>
    <!-- 选择 端口 -->
    <div v-if="nexs === 0" class="continear">
      <div
        @click="chose(index)"
        v-for="(item,index) in list"
        :key="index"
        class="xms"
        :class="item.chose?'chose':''"
      >
        <div>{{item.port_name}}</div>
        <i class="iconfont">{{item.port_img}}</i>
      </div>
    </div>
    <!-- table -->
    <div v-if=" nexs === 1 || nexs === 2 " class="table_continear">
      <table class="table_d">
        <tr class="thead">
          <td class="w20">分类</td>
          <td class="w20">模块</td>
          <td class="w60">功能点</td>
        </tr>

        <tbody v-for="(item,index) in NOWLIST.zi" :key="index">
          <tr v-for="(items,indexs) in item.zi" :key="indexs">
            <td v-if="indexs === 0" :rowspan="items.zi.length" class="text_center">{{item.web_type}}</td>
            <td>
              <label class="custom-checkbox">
                <input @click="chosemk(items)" :checked="items.choses" type="checkbox">
                <i></i>
                <span>{{items.level_name}}</span>
              </label>
            <td>
              <!-- chckbox -->
              <label @mouseout="showDetail" @mouseover="showTalk(items_d,$event)" class="custom-checkbox"  v-for="(items_d,indexs_d) in items.zi" :key="indexs_d">
                <input @click="chosegn(items_d,items)" :checked="items_d.choses" type="checkbox">
                <i></i>
                <span>{{items_d.function_name}}</span>
              </label>

            </td>
          </tr>
        </tbody>

      </table>



      <div ref="explan" class="explan">
        <p class="title">{{explan.function_name}}</p>
        <p class="content">{{explan.introduce}}</p>
        <p class="prize" v-if="explan.scope">
          参考价格:
          <span class="color_text">￥{{explan.scope}}</span>
        </p>
      </div>
    </div>
    <div v-if=" nexs === 3" class="comtedOver">
      <div class="comted_title">此报价仅为参考，最终报价请按照服务方给予的报价酌情考虑</div>
      <div class="comted_money">¥{{saleMoney}}</div>
      <div class="comted_fn">共 <span>{{arrFn.length}}</span> 个功能模块</div>
      <div @click="backHome" class="next chosenext comtedOvers">重新选择</div>
    </div>

    <div v-if="nexs === 0" @click="nextserch" class="next" :class="nextBtn?'chosenext':''">下一步</div>
    <div v-else-if="nexs === 1" class="parentsx">
      <div class="next chosenext sx" @click="pred">上一步</div>
      <div class="next chosenext sx" @click="nexted">下一步</div>
    </div>
    <div v-else-if="nexs === 2" class="parentsx">
      <div class="next chosenext sx" @click="pred">上一步</div>
      <div class="next chosenext sx" @click="comted">计算项目报价</div>
    </div>
    <foot class="mt100"></foot>
  </div>
</template>

<script>
import { getOffer, getPort,sums } from "./../../utils/baseUrl.js";
import foot from './../common/footer'
export default {
  data() {
    return {
      list: [],                //端口信息
      tablelist: [],    //操作表单数据
      NOWLIST: [],      //当前表单
      tableIndex:0,     //当前操作表单 索引(index + 1)
      explan: {
        function_name: "功能点描述",
        introduce: "鼠标移动到对应的功能点上，此处会显示功能点说明",
        scope: ""
      },                //右侧默认轻提示
      nexs: 0,          //判断流程 所在位置
      CLIENTY:'',       //高度
      arrFn:[],         //选择的功能
      saleMoney:''
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    //加载端口
    getInfo() {
      getPort().then(res => {
        for (let i = 0; i < res.data.data.length; i++) {
          res.data.data[i].chose = false;
        }
        this.list = res.data.data;
        // console.log(this.list)
      });
    },
    //选中端口
    chose(res) {
      this.list[res].chose = !this.list[res].chose;
    },
    //下一步 获取选中端口数据
    nextserch() {
      if(this.nextBtn <= 0){
        return
      }
      // this.nexs = 1;
      let arr = [];
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].chose) {
          arr.push(this.list[i].port_id);
        }
      }
      //获取多个表单数据  为判断选中 模块 功能 添加choses = false;
      getOffer({ data: JSON.stringify(arr) }).then(res => {
        let obj = res.data.data;
        try{
          for (let i = 0; i < obj.length; i++) {
          for (let j = 0; j < obj[i].zi.length; j++) {
            for (let k = 0; k < obj[i].zi[j].zi.length; k++) {
              obj[i].zi[j].zi[k].choses = false;
              for (let l = 0; l < obj[i].zi[j].zi[k].zi.length; l++) {
                obj[i].zi[j].zi[k].zi[l].choses = false;
              }
            }
          }
        }
        }
        catch(err){
          this.$toast('数据完善中,请稍后...')
          return
        }
        this.tablelist = obj;
        this.NOWLIST = this.tablelist[this.tableIndex];
        if(this.nextBtn === this.tableIndex+1){
          this.nexs = 2;
        } else{
          this.nexs = 1;
        }
      });
    },
    //下一步 判断是否到最后表单 true => 计算  false => 继续操作
    nexted() {
      if(this.nextBtn === this.tableIndex+1){
        this.nexs = 2;
      } else if(this.nextBtn > this.tableIndex+1){
        this.tablelist.splice(this.tableIndex,1,JSON.parse(JSON.stringify(this.NOWLIST)));
        this.tableIndex++;
        this.NOWLIST = this.tablelist[this.tableIndex];
        if(this.nextBtn === this.tableIndex+1){
          this.nexs = 2;
        }
      }
    },
    //上一步 判断是否到表头
    pred() {
      if(this.tableIndex >= 1){
        this.tableIndex--;
        this.tablelist.splice(this.tableIndex+1,1,JSON.parse(JSON.stringify(this.NOWLIST)));
        this.NOWLIST = this.tablelist[this.tableIndex];
        this.nexs = 1;
      } else{
        this.nexs = 0;
        this.NOWLIST = [];
        this.getInfo()
      }
    },
    //计算 提交表单
    comted() {
      this.tablelist.splice(this.tableIndex,1,JSON.parse(JSON.stringify(this.NOWLIST)))
      let arr = new Array;
      let obj = this.tablelist;
        for (let i = 0; i < obj.length; i++) {
          for (let j = 0; j < obj[i].zi.length; j++) {
            for (let k = 0; k < obj[i].zi[j].zi.length; k++) {
              for (let l = 0; l < obj[i].zi[j].zi[k].zi.length; l++) {
                if(obj[i].zi[j].zi[k].zi[l].choses){
                  arr.push(obj[i].zi[j].zi[k].zi[l].id)
                }
              }
            }
          }
        }
        
        this.arrFn = arr;
        if(!arr.length){
          this.$toast('请选择功能');
          return
        }
        sums({data:JSON.stringify(arr)})
        .then(res=>{
          if(res.status === 200){
            this.nexs = 3;
            this.saleMoney = res.data.data;
          }
        })
    },
    //鼠标移入 出现提示
    showTalk(res,event) {
      this.explan = res;
      // this.$refs.explan.style.position = 'fixed';
      // this.$refs.explan.style.top = '50%';
    },
    //鼠标移出 恢复默认
    showDetail() {
      let obj = {
        scope:'',
        introduce:'鼠标移动到对应的功能点上，此处会显示功能点说明',
        function_name:'功能点描述'
      }
      this.explan = obj;
      // this.$refs.explan.style.position = 'absolute';
      // this.$refs.explan.style.top = 'auto';
    },
    //选中模块时 ！全选以下的功能功能
    chosemk(res) {
      res.choses = !res.choses;
      for(let i = 0;i < res.zi.length;i++){
        res.zi[i].choses = res.choses;
      }
    },
    //选中功能 ！改变全选状态
    chosegn(res,req) {
      /**
       * @param {Object} res '单功能'
       * @param {Array}  req '单模块{包含以下所有功能}'
       */
      res.choses = !res.choses;
      let tarr = [];
      let farr = [];
      for(let i = 0;i < req.zi.length;i++){
        if(req.zi[i].choses === true){
          tarr.push(1);
        }
        else{
          farr.push(1)
        }
      }
      if(tarr.length === req.zi.length){
        req.choses = true;
      } else if(farr.length === req.zi.length){
        req.choses = false;
      } else{
        req.choses = false;
      }
    },
    getBgY(event) {
      this.CLIENTY = event.clientY;
    },
    //清空数据
    backHome() {
      this.nexs = 0;
      this.NOWLIST = [];
      this.getInfo();
      this.arrFn = [];
      this.saleMoney = '';
      this.tableIndex = 0;
    }
  },
  components: {
    foot
  },
  computed: {
    //过滤选中条数 => 是否高亮下一步
    nextBtn() {
      if(!this.list.length){
        return 0
      }
      let obj = this.list.filter(val => {
        return val.chose === true;
      });
      return obj.length;
    }
  },
  filters: {
    iconft(val) {
      return val
    }
  }
};
</script>

<style lang='less' scoped >
//顶层样式
.money {
  height: 100%;
  box-sizing: border-box;
  padding-top: 20vh;
  .flow {
    width: calc(~"100% - 200px");
    margin: 40px 100px;
    padding: 0;
    display: flex;
    justify-content: space-around;
    li {
      list-style: none;
      text-align: center;
      line-height: 60px;
      position: relative;
      i {
        font-size: 30px;
        position: absolute;
        top: 5%;
        height: 60px;
        width: 60px;
        left: -70px;
        display: inline-block;
        background: #999;
        border-radius: 50%;
        color: white;
      }
      .setFlow1 {
        background: #ff7466;
      }
      .setFlow2 {
        background: #8fcb7c;
      }
      .setFlow3 {
        background: #ffd21d;
      }
    }
    .hSline {
      // color:#ff6600;
    }
  }
  .continear {
    width: 90%;
    margin: 0 auto;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .xms {
      height: 200px;
      width: 30%;
      box-sizing: border-box;
      padding: 50px 0 0 0;
      border: solid 1px #e0e0e0;
      text-align: center;
      margin-top: 20px;
      color: #666666;
      cursor: pointer;
      &:hover {
        border: 1px #ff6600 solid;
        color: #ff6600;
      }
      div {
        margin-bottom: 20px;
      }
      i {
        font-size: 50px;
      }
    }
  }
}
//选中样式
.chose {
  border: 1px #ff6600 solid !important;
  color: #ff6600 !important;
}
.next {
  padding: 12px 52px;
  font-size: 16px;
  background: #999;
  letter-spacing: 2px;
  border-radius: 5px;
  width: 230px;
  text-align: center;
  margin: 50px auto;
  margin-top: 100px !important;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: 100px;
  color: white;
  cursor: pointer;
}
.chosenext {
  background: #ff6600;
}

.parentsx{
  display: flex;
  justify-content: center;
}
.sx{
  margin:0 20px;
}

// 正文表单
.table_continear {
  overflow: hidden;
  width: 90%;
  height: auto;
  backface-visibility: red;
  margin: 0 auto;
  .explan {
    position: absolute;
    left:80%;
    top:auto;
    height: auto;
    width: 170px;
    padding: 15px 10px;
    float: left;
    border-radius: 6px;
    margin-left: 15px;
    border: solid 1px #e0e0e0;
    transition: all .3s linear;
    .title {
      font-size: 15px;
      color: #ff6600;
      font-weight: bold;
    }
    .content {
      font-size: 12px;
      line-height: 20px;
      color: #999999;
    }
    .prize {
      font-size: 12px;
      color: #999999;
      .color_text {
        color: #ff6600;
      }
    }
  }
  .table_d {
    border: 1px solid rgba(0, 0, 0, 0.068);
    width: 80%;
    // height: 400px;
    float: left;
  }
}
.thead{
  td{
    font-size: 17px;
    font-weight: 400;
    text-align: center;
  }
}
.text_center{
  text-align: center;
}



.w20 {
  width: 20%;
}
.w60 {
  width: 60%;
}
.choseBox {
  float: left;
  padding: 10px 14px;
  border: 1px solid black;
  font-size: 14px;
  input {
    vertical-align: middle;
  }
  span {
    vertical-align: middle;
    color: #999;
  }
}

//计算结果
.comtedOver{
  text-align:center;
  margin-top: 150px;
  // position: relative;
  .comted_title{
    font-size: 24px;
    color:#666;
  }
  .comted_money{
    color: #ff6600;
    font-size: 20px;
    margin:15px 0;
  }
  .comted_fn{
    color:#666;
    font-size: 20px;
    span{
      color:#ff6600;
    }
  }
  .comtedOvers{
    margin:0 auto;
    position: absolute;
    left:50%;
    margin-left: -115px;
  }
}
.mt100{
  margin-top: 260px;
}
</style>

<template>
  <div class="connect">
    <div class="banner">
      <img class="imgs" src="./../../assets/connet/bg1.png" alt>
      <img class="imgd" src="./../../assets/connet/contactus.png" alt>
      <img class="imgy" src="./../../assets/connet/yx.png" alt>
      <div class="btn">联系我们</div>

      <a class="Textdirec" href="tencent://message/?uin=909912651&Menu=yes& Service=300&sigT=42a1e5347953b64c5ff3980f8a6e644d4b31456cb0b6ac6b27663a3c4dd0f4aa14a543b1716f9d45">
        <div class="btn">联系我们</div>
      </a>
    </div>
    <div class="connect_s">
      <div class="companyMsg">
        <p class="title">公司基本信息</p>
        <p>成都优易美网络科技有限公司</p>
        <p>地址:蓝润ISC 3-1710</p>
        <p>邮编:610000</p>
        <p>电话:18030505899</p>
        <p>投诉与建议:kexikui@yeah.net</p>
        <p>人才招聘：hr. you1mei.com</p>
      </div>
      <div class="connectOurs">
        <textarea v-model="txt" placeholder="请大致描述下您的需求"></textarea>
        <input class="name" v-model="name" type="text" placeholder="你的姓名">
        <input class="text" v-model="tel" type="text" placeholder="你的电话">
        <input v-model="email" type="text" placeholder="你的邮箱">
        <div @click="connectOurs">联系我们</div>
      </div>
    </div>
    <div class="public">
      <div>公交路线</div>
      <div>195路、501路、504路、506路、509路、514路、517路、 544路、G123路、G31路, G50路、T1路、T108路都到达 地铁华府大道站，步行460米可到达公司</div>
    </div>
    <div class="maps">
      <!-- <div class="marImg" id="container" style="width: 100%;height: 100%"></div> -->
      <div class="marImg" id="map" style="width: 100%;height: 100%"></div>
    </div>
    <j-footer></j-footer>
  </div>
</template>

<script>
import { upFrom } from "./../../utils/baseUrl.js";
import { isEmail, isPhone } from "./../../utils/tool.js";
import jFooter from "./../common/footer";
// import { toast } from './../../utils/tool.js'
export default {
  data() {
    return {
      txt: "",
      name: "",
      tel: "",
      email: ""
    };
  },
  mounted() {
    var map = L.map('map', {
        minZoom: 3,
        maxZoom: 17,
        center: [30.528501407995766, 104.06507945098055],
        zoom: 15,
        attributionControl: false
    });
    var url = "http://a.tile.openstreetmap.org/{z}/{x}/{y}.png";
    L.tileLayer(url).addTo(map);
    var marker = L.marker([30.528501407995766, 104.06507945098055],).addTo(map);

    marker.bindPopup(
             "地址:四川省成都市天府新区华府大道 \n" +
            "        一段一号蓝润ISC二栋1710" +
            "<br>" +
            "电话:18030505899",
    )
    .openPopup();



    // var map = L.map('map', {
    //     minZoom: 3,
    //     maxZoom: 17,
    //     center: [30.532258,104.074038],
    //     zoom: 14,
    //     attributionControl: false
    // });
    // var url = "http://a.tile.openstreetmap.org/{z}/{x}/{y}.png";
    // L.tileLayer(url).addTo(map);
    // L.marker([30.532258,104.074038],{title:'成都优易美网络有限公司'}).addTo(map);

    // var map = new BMap.Map("container");
    // // 创建地图实例
    // var point = new BMap.Point(104.074189, 30.532117);
    // // 创建点坐标
    // map.centerAndZoom(point, 15);
    // // 初始化地图，设置中心点坐标和地图级别
    // map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    // var opts = {
    //     width: 250, // 信息窗口宽度
    //     height: 100, // 信息窗口高度
    //     title: "成都优易美网络有限公司" // 信息窗口标题
    // };
    // var infoWindow = new BMap.InfoWindow(
    //     "地址:四川省成都市天府新区华府大道 \n" +
    //         "        一段一号蓝润ISC二栋1710" +
    //         "<br>" +
    //         "电话:18030505899",
    //     opts
    // ); // 创建信息窗口对象
    // map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
  },
  methods: {
    connectOurs() {
      if (!this.name || !this.tel || !this.email || !this.txt) {
        this.$toast("请填写完整信息");
        return;
      }
      if (!isEmail(this.email)) {
        this.$toast("请确认邮箱是否正确");
        return;
      }
      if (!isPhone(this.tel)) {
        this.$toast("请确认电话是否正确");
        return;
      }
      let obj = {
        name: this.name,
        telephone: this.tel,
        Email: this.email,
        content: this.txt
      };
      upFrom({ data: JSON.stringify(obj) }).then(res => {
        if (res.status === 200) {
          this.$toast("提交成功");
        }
      });
    }
  },
  components: {
    jFooter
  }
};
</script>

<style lang='less' scoped >
p {
  padding: 0;
  margin: 0;
  font-size: 17px;
  margin-top: 16px;
}
p:first-child {
  margin: 0;
  margin-bottom: 21px;
}
.connect {
  color: #535354;
  padding-top: 15vh;
  box-sizing: border-box;
  .banner {
    height: 85vh;
    width: 100%;
    background: url("./../../assets/connet/bg.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    .imgs {
      width: 457px;
      position: absolute;
      left: 50%;
      margin-left: -228.5px;
      margin-top: 80px;
    }
    .imgd {
      width: 252px;
      position: absolute;
      left: 50%;
      margin-left: -126px;
      margin-top: 66px;
    }
    .imgy {
      width: 428px;
      position: absolute;
      left: 50%;
      margin-left: -214px;
      margin-top: 156px;
    }
    .btn {
      width: 201px;
      height: 63px;
      background: url("./../../assets/connet/btn.png") no-repeat;
      background-size: 100% 100%;
      line-height: 63px;
      text-align: center;
      color: #eff5ff;
      position: absolute;
      left: 50%;
      margin-left: -100.5px;
      bottom: 50px;
      cursor: pointer;
    }
  }
  .connect_s {
    display: flex;
    justify-content: space-between;
    margin-top: 169px;
    margin-bottom: 78px;
    & > div {
      float: left;
      // margin: 0 10%;
    }
    .companyMsg {
      margin-left: 15%;
      .title {
        font-size: 20px;
        font-weight: bold;
      }
    }
    .connectOurs {
      width: 420px;
      margin-right: 15%;
      .name {
        width: 48%;
      }
      .text {
        width: 48%;
        float: right;
      }
      textarea {
        width: 100%;
        height: 139px;
        background-color: #f6f6f6;
        border: none;
        box-sizing: border-box;
        padding: 32px 0 0 41px;
        resize: none;
        color: black;
      }
      input {
        height: 31px;
        width: 100%;
        margin-top: 17px;
        border: none;
        box-sizing: border-box;
        background-color: #4e9bdd;
        padding-left: 20px;
      }
      div {
        height: 33px;
        width: 204px;
        background-color: #4e9bdd;
        margin: 0 auto;
        line-height: 33px;
        font-size: 17px;
        text-align: center;
        margin-top: 17px;
        color: white;
        cursor: pointer;
      }
    }
  }
}
input::-webkit-input-placeholder {
  color: white;
}
.public {
  overflow: hidden;
  & > div {
    float: left;
  }
  padding: 0 15%;
  div:first-child {
    font-size: 17px;
    font-weight: bold;
    width: 10%;
  }
  div:last-child {
    font-size: 17px;
    width: 90%;
  }
}
.maps {
  margin: 88px 15% 141px 15%;
  height: 398px;
  background-color: #4e9bdd;
}
</style>

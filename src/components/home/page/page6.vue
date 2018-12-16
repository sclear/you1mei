<template>
  <div class="page6">
    <div class="foter-title">成都优易美网络科技有限公司</div>
    <div class="aboutMe">
      <div class="fs17">关于优易美</div>
      <div class="fs17">商务合作</div>
    </div>
    <img class="wxImg" src="./../../../assets/wx.jpg" alt>
    <div class="group">
      <div class="worko detail1">
        <ul>
          <li>案例介绍</li>
          <li>关于我们</li>
          <li>联系我们</li>
          <li>帮助中心</li>
        </ul>
      </div>
      <div class="worko detail2">
        <ul>
          <li>服务热线：18018018011</li>
          <li>工作时间： 周一到周五 9：00--18：00</li>
          <li>地址：四川省成都市天府新区华府大道</li>
          <li>一段一号蓝润ISC二栋1710</li>
        </ul>
      </div>
      <div class="fr">
        <textarea v-model="name" placeholder="姓名" class="msg"></textarea>
        <textarea v-model="tel" placeholder="电话" class="msg"></textarea>
        <textarea v-model="email" placeholder="邮箱" class="msg"></textarea>
        <textarea v-model="demand" placeholder="您的需求" class="detailmsg"></textarea>
        <div @click="comit" class="comit">提交</div>
      </div>

      <div class="centerTxt">蜀ICP备：18031383号</div>
    </div>
  </div>
</template>

<script>
import { upFrom } from "./../../../utils/baseUrl.js";
import { isEmail, isPhone } from "./../../../utils/tool.js";
export default {
  data() {
    return {
      name: "",
      tel: "",
      email: "",
      demand: ""
    };
  },
  components: {},
  methods: {
    comit() {
      if (!this.name || !this.tel || !this.email || !this.demand) {
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
        content: this.demand
      };
      // console.log(obj);
      upFrom({ data: JSON.stringify(obj) }).then(res => {
        if (res.status === 200) {
          this.$toast("提交成功");
        }
      });
    }
  },
};
</script>

<style lang='less' scoped >
.page6 {
  font-size: 13px;
  height: 100%;
  width: 100%;
  position: relative;
  background: url("./../../../assets/img/footer/bg.png") no-repeat;
  background-size: 100% 100%;
  padding-left: 7%;
  box-sizing: border-box;
  color: #fff;
  padding-top: 8%;
  .wxImg {
    position: absolute;
    left: 7%;
    top: 70vh;
    width: 150px;
    @media (min-width: 1920px) {
      left: 15%;
    }
    @media (min-width: 1680px) and (max-width: 1919px) {
      left: 15%;
      top:79vh;
    }
  }
  @media (min-width: 1920px) {
    padding-top: 17%;
    padding-left: 15%;
  }
  @media (min-width: 1680px) and (max-width: 1919px) {
    padding-top: 17%;
    padding-left: 15%;
  }

  .foter-title {
    font-size: 25px;
  }
  .aboutMe {
    width: 100%;
    overflow: hidden;
    margin-top: 53px;
    div {
      float: left;
    }
    div:last-child {
      margin-left: 44px;
    }
  }
}
.group {
  width: 100%;
  overflow: hidden;
}
.group > div {
  float: left;
}
.worko {
  ul {
    margin: 0;
    padding: 0;
    margin-top: 61px;
    li {
      list-style: none;
      margin-top: 27px;
    }
  }
}
.detail1 {
}
.detail2 {
  margin-left: 60px;
}
.fs17 {
  font-size: 17px;
}
textarea {
  resize: none;
}
.msg {
  height: 68px;
  width: 221px;
  margin-left: 55px;
  padding-left: 42px;
  line-height: 68px;
  box-sizing: border-box;
  overflow: hidden;
}
.fr {
  float: left;
  width: 850px;
  position: absolute;
  right: 30px;
  margin-top: 60px;
  @media (min-width: 1920px) {
    right: 200px;
  }
}
.msg:first-child {
  margin-left: 0;
}
.detailmsg {
  height: 142px;
  width: 785px;
  margin: 19px 0 26px 0;
  line-height: 142px;
  padding-left: 42px;
  box-sizing: border-box;
  overflow: hidden;
}
.comit {
  height: 68px;
  width: 125px;
  background-color: white;
  line-height: 68px;
  text-align: center;
  color: black;
  float: right;
  margin-right: 62px;
  font-size: 18px;
  color: #535354;
  cursor: pointer;
}
.centerTxt {
  position: absolute;
  bottom: 20px;
  width: 88%;
  text-align: center;
}
</style>

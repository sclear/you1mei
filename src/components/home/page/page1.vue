<template>
  <div class="page1">
    <!-- <bar></bar> -->
    <div class="border_radius">
      <div class="borders" @click="active_class(1)" :class="num === 1?'chck':''"></div>
      <div class="borders" @click="active_class(2)" :class="num === 2?'chck':''"></div>
      <div class="borders" @click="active_class(3)" :class="num === 3?'chck':''"></div>
    </div>
    <!-- <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">&nbsp;
                    <div class="bannero">
                        <div class="box animated" :class="flipInX">
                            <img class="img1" src="./../../../assets/img/banner/banner1/zzkf.png" alt="">
                            <img class="img2" src="./../../../assets/img/banner/banner1/SPCIALTY.png" alt="">
                            <img class="img3" src="./../../../assets/img/banner/banner1/text.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="bannert">
                        <img  :class="rotateIn" class="animated img1" src="./../../../assets/img/banner/banner2/nl.png" alt="">
                        <img  :class="rotateIn" class="img2 animated" src="./../../../assets/img/banner/banner2/elsh.png" alt="">
                        <img  :class="rotateIn" class="img3 animated" src="./../../../assets/img/banner/banner2/linear.png" alt="">
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="banner">&nbsp;
                        <div  :class="imgthree" class="box animated">       
                            <img  :class="imgthree" class="img1 animated" src="./../../../assets/img/banner/banner3/top.png" alt="">
                            <img  :class="imgthree" class="img2 animated" src="./../../../assets/img/banner/banner3/DEVELOP.png" alt="">
                            <img  :class="imgthree" class="img3 animated" src="./../../../assets/img/banner/banner3/mid.png" alt="">
                            <img  :class="imgthree" class="img4 animated" src="./../../../assets/img/banner/banner3/bot.png" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <div class="swiper-pagination"></div>

    </div>-->
    <div class="swiperDIY">
      <div class="swiper-DIYLONG">
        <div class="items">&nbsp;
          <div class="bannero">
            <div class="box animated" :class="flipInX">
              <img class="img1" src="./../../../assets/img/banner/banner1/zzkf.png" alt>
              <img class="img2" src="./../../../assets/img/banner/banner1/SPCIALTY.png" alt>
              <img class="img3" src="./../../../assets/img/banner/banner1/text.png" alt>
            </div>
          </div>
        </div>
        <div class="items">
          <div class="bannert">
            <img
              :class="rotateIn"
              class="animated img1"
              src="./../../../assets/img/banner/banner2/nl.png"
              alt
            >
            <img
              :class="rotateIn"
              class="img2 animated"
              src="./../../../assets/img/banner/banner2/elsh.png"
              alt
            >
            <img
              :class="rotateIn"
              class="img3 animated"
              src="./../../../assets/img/banner/banner2/linear.png"
              alt
            >
          </div>
        </div>
        <div class="items">
          <div class="banner">&nbsp;
            <div :class="imgthree" class="box animated">
              <img
                :class="imgthree"
                class="img1 animated"
                src="./../../../assets/img/banner/banner3/top.png"
                alt
              >
              <img
                :class="imgthree"
                class="img2 animated"
                src="./../../../assets/img/banner/banner3/DEVELOP.png"
                alt
              >
              <img
                :class="imgthree"
                class="img3 animated"
                src="./../../../assets/img/banner/banner3/mid.png"
                alt
              >
              <img
                :class="imgthree"
                class="img4 animated"
                src="./../../../assets/img/banner/banner3/bot.png"
                alt
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bar from "./../../common/bar";
export default {
  data() {
    return {
      changeL: "",
      num: 1,
      chcks: "chck",
      choseId: "", //swiper回调
      flipInX: "",
      rotateIn: "",
      imgthree: "",
      Indexs: 1,
      timeOt: ""
    };
  },
  mounted() {
    this.flipInX = "fadeInDown";

    this.times();
    console.clear();
  },
  watch: {
    num(val) {
      switch (val) {
        case 0:
          this.changeL = "changeLeft1";
          break;
        case 1:
          this.changeL = "changeLeft2";
          break;
        case 2:
          this.changeL = "changeLeft3";
          break;
      }
    },
    Indexs(val) {
      if (val === 1) {
        this.flipInX = "fadeInDown";
      }
      if (val === 2) {
        this.rotateIn = "fadeInDown";
      }
      if (val === 3) {
        this.imgthree = "fadeInDown";
      }
      setTimeout(() => {
        this.flipInX = "";
        this.rotateIn = "";
        this.imgthree = "";
      }, 900);
    }
  },
  methods: {
    //激活按钮
    active_class(res) {
      this.num = res;
      if (res - this.Indexs > 0) {
        // console.log(res);
        // console.log(this.Indexs);
        this.next();
      } else if (res === this.Indexs) {
      } else {
        this.pre();
      }
      this.tiemsOut();
    },
    //pre()
    pre() {
      let content = document.getElementsByClassName("swiper-DIYLONG")[0];
      let item = document.getElementsByClassName("items");
      content.insertBefore(item[2], content.firstChild);
      item[0].style.marginLeft = "-100vw";
      setTimeout(() => {
        item[0].style.marginLeft = "0px";
      }, 0);
      if (this.Indexs > 1) {
        this.Indexs--;
      } else {
        this.Indexs = 3;
      }
    },
    //next()
    next() {
      try {
        let content = document.getElementsByClassName("swiper-DIYLONG")[0];
        let item = document.getElementsByClassName("items");
        item[0].style.marginLeft = "-100vw";
        setTimeout(() => {
          item[0].style.marginLeft = "0px";
          content.appendChild(item[0]);
        }, 300);
        if (this.Indexs >= 3) {
          this.Indexs = 1;
        } else {
          this.Indexs++;
        }
        this.num = this.Indexs;
      } catch (err) {}
    },
    //autoplay
    times() {
      this.timeOt = setInterval(() => {
        this.next();
      }, 5000);
    },
    //主动点击 延时5s 继续autoplay
    tiemsOut() {
      clearInterval(this.timeOt);
      setTimeout(() => {
        this.times(), 5000;
      });
    }
  },
  components: {
    bar
  }
};
</script>

<style lang='less' scoped >
.page1 {
  height: 100%;
  overflow: hidden;
  position: relative;
  top: 15%;
  .border_radius {
    background-color: balck;
    position: absolute;
    left: 50%;
    top: 80vh;
    margin-left: -115px;
    z-index: 999;
    .borders {
      //   bottom: 1px;
      left: 1px;
      height: 8px;
      width: 50px;
      border-radius: 7px;
      background-color: #fff;
      float: left;
      margin-left: 27px;
      cursor: pointer;
    }
  }
}
.left_btn {
  width: 27px;
  height: 33px;
  position: fixed;
  top: 57.5%;
  left: 81px;
  cursor: pointer;
}
.right_btn {
  width: 27px;
  height: 33px;
  position: fixed;
  right: 81px;
  top: 57.5%;
  margin-top: -16px;
  transform: rotate(180deg);
  cursor: pointer;
}
.chck {
  background-color: #4e9bdd !important;
}
.bannergroup {
  height: 85%;
  width: 300%;
  transition: all 0.3s linear;
}
.bannergroup > div {
  float: left;
}
.bannero {
  height: 100%;
  width: 100vw;
  background-image: url("./../../../assets/img/banner/banner1/banner1bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  .box {
    width: 519px;
    height: 273px;
    position: absolute;
    top: 76px;
    left: 159px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url("./../../../assets/img/banner/banner1/content-area.png");
    .img1 {
      width: 230px;
      height: 33px;
      margin: 36px 0 0 37px;
    }
    .img2 {
      width: 280px;
      height: 51px;
      margin: 33px 0 0 95px;
    }
    .img3 {
      width: 274px;
      height: 25px;
      margin: 50px 0 0 202px;
    }
  }
}
.bannert {
  height: 100%;
  width: 100vw;
  background-image: url("./../../../assets/img/banner/banner2/banner2bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  img {
    display: block;
    position: absolute;
    left: 50%;
  }
  .img1 {
    margin-left: -130px;
    width: 261px;
    height: 33px;
    top: 72px;
  }
  .img2 {
    margin-left: -121px;
    width: 243px;
    height: 49px;
    // margin-top: 33px;
    top: 140px;
  }
  .img3 {
    margin-left: -379px;
    width: 758px;
    // margin-top: 103px;
    top: 296px;
  }
}
.banner {
  height: 100%;
  width: 100vw;
  background-image: url("./../../../assets/img/banner/banner3/banner3bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  .box {
    width: 674px;
    height: 296px;
    position: absolute;
    margin-left: -377px;
    left: 50%;
    top: 134px;
    background-image: url("./../../../assets/img/banner/banner3/box.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .img1 {
      width: 263px;
      height: 33px;
      margin: 27px 0 0 107px;
    }
    .img2 {
      width: 295px;
      height: 59px;
      display: block;
      top: 93px;
      left: 90px;
      position: absolute;
    }
    .img3 {
      width: 163px;
      height: 28px;
      display: block;
      position: absolute;
      top: 159px;
      left: 438px;
    }
    .img4 {
      position: absolute;
      width: 218px;
      height: 28px;
      top: 223px;
      left: 378px;
    }
  }
}

.border_radius {
}

.changeLeft1 {
  margin-left: 0;
}
.changeLeft2 {
  margin-left: -100vw;
}
.changeLeft3 {
  margin-left: -200vw;
}

// swiper
.swiper-container {
  font-size: 0;
  width: 100%;
  height: 85%;
}

.swiper-pagination-bullet {
  width: 50px !important;
  height: 20px !important;
}

.swiper-pagination-customs-active {
  opacity: 1;
  background-color: #f78e00;
}

//SWEIPER
.swiperDIY {
  font-size: 0;
  width: 100%;
  height: 85%;
  overflow: hidden;
}
.swiper-DIYLONG {
  width: 300%;
  height: 100%;
  .items {
    width: 100vw;
    height: 100%;
    float: left;
    transition: all 0.3s linear;
  }
}
</style>

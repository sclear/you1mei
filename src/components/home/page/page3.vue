<template>
  <div class="page3">
    <div class="serve">
      <div>服务流程</div>
      <div>PROCESS</div>
    </div>
    <div class="menu animated" :class="bounceInLeft">
      <div @click="swicher(0)" class="clearBoth">
        <div class="sw01">
          <div class="serial">01</div>
          <div class="logos" :class="swichers === 0?'borders':''">
            <div class="logosImg">
              <img src="./../../../assets/img/fw/a.png" alt="">
            </div>
            <div class="ml31">商务阶段</div>
          </div>
        </div>
      </div>

      <div @click="swicher(1)" class="clearBoth">
        <div class="sw01">
          <div class="serial">02</div>
          <div class="logos" :class="swichers === 1?'borders':''">
            <div class="logosImg">
              <img src="./../../../assets/img/fw/b.png" alt="">
            </div>
            <div class="ml31">ui设计</div>
          </div>
        </div>
      </div>

      <div @click="swicher(2)" class="clearBoth">
        <div class="sw01">
          <div class="serial">03</div>
          <div class="logos" :class="swichers === 2?'borders':''">
            <div class="logosImg">
              <img src="./../../../assets/img/fw/c.png" alt="">
            </div>
            <div class="ml31">程序开发</div>
          </div>
        </div>
      </div>

      <div @click="swicher(3)" class="clearBoth">
        <div class="sw01">
          <div class="serial">04</div>
          <div class="logos" :class="swichers === 3?'borders':''">
            <div class="logosImg">
              <img src="./../../../assets/img/fw/d.png" alt="">
            </div>
            <div class="ml31">产品测试</div>
          </div>
        </div>
      </div>

      <div @click="swicher(4)" class="clearBoth">
        <div class="sw01">
          <div class="serial">05</div>
          <div class="logos" :class="swichers === 4?'borders':''">
            <div class="logosImg">
              <img src="./../../../assets/img/fw/f.png" alt="">
            </div>
            <div class="ml31">提交上线</div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <img :class="bounceInLeft" class="ljImg animated" src="./../../../assets/img/fw/lianjie.png" alt="">
    </div>


    <div v-if="typeof swichers==='number'" class="detail animated" :class="rubberBand">
      <div class="sw">
        <div>
          <p>{{detailtext1}}</p>
          <p>{{detailtext2}}</p>
        </div>
        <div>
          <p>{{detailtext3}}</p>
          <p>{{detailtext4}}</p>
        </div>
        <div>
          <p>{{detailtext5}}</p>
          <p>{{detailtext6}}</p>
        </div>
        <div>
          <p>{{detailtext7}}</p>
          <p>{{detailtext8}}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
    data() {
        return {
            swichers: "",
            detailtext1: "",
            detailtext2: "",
            detailtext3: "",
            detailtext4: "",
            detailtext5: "",
            detailtext6: "",
            detailtext7: "",
            detailtext8: "",
            rubberBand: "",
            bounceInLeft: "",

            timeOt:'',
            setTime:'',
            ljImg:'',     //链接img动画
        };
    },
    props: {
        m_num: Number
    },
    watch: {
        m_num(val) {
            var that = this;
            if (val === 2) {
                this.setTime = setTimeout(() => {
                    this.swichers = 0;
                }, 1000);
                that.timeOt = setInterval(() => {
                    if (typeof this.swichers === "number") {
                        if (this.swichers === 4) {
                            this.swichers = 0;
                        } else {
                            this.swichers++;
                        }
                    } else {
                        this.swichers = 0;
                    }
                }, 5000);
                this.rubberBand = "fadeIn";
                this.bounceInLeft = "bounceInLeft";
                setTimeout(() => {
                    this.rubberBand = "";
                }, 500);
            } else {
                clearInterval(this.timeOt);
                clearTimeout(this.setTime);
                this.rubberBand = "";
                this.bounceInLeft = "";
                this.swichers = '';
            }
        },
        swichers(val) {
            if (val === 0) {
                this.detailtext1 = "30秒响应";
                this.detailtext2 = "即时回应，随时在线";
                this.detailtext3 = "精细合作内容";
                this.detailtext4 = "全文位了解合作需求";
                this.detailtext5 = "制订合作方案";
                this.detailtext6 = "详细的方案计划，减少差错发生";
                this.detailtext7 = "签订合同";
                this.detailtext8 = "专业的技术服务，更好的回报";

                this.rubberBand = "fadeIn";
                setTimeout(() => {
                    this.rubberBand = "";
                }, 500);
            }
            if (val === 1) {
                this.detailtext1 = "确定原型";
                this.detailtext2 = "产品经历谈论框架,制定原型";
                this.detailtext3 = "风格确立";
                this.detailtext4 = "设计师确定产品风格";
                this.detailtext5 = "视觉设计";
                this.detailtext6 = "设计师进行视觉设计";
                this.detailtext7 = "页面效果图";
                this.detailtext8 = "修改细节,确定效果图";
                this.rubberBand = "fadeIn";
                setTimeout(() => {
                    this.rubberBand = "";
                }, 500);
            }
            if (val === 2) {
                this.detailtext1 = "文档需求开发";
                this.detailtext2 = "开发工程分组整理需求";
                this.detailtext3 = "框架构建";
                this.detailtext4 = "后台框架搭建";
                this.detailtext5 = "代码编写";
                this.detailtext6 = "整洁代码解构编写界面";
                this.detailtext7 = "整理打包";
                this.detailtext8 = "细节检查,整理上线";
                this.rubberBand = "fadeIn";
                setTimeout(() => {
                    this.rubberBand = "";
                }, 500);
            }
            if (val === 3) {
                this.detailtext1 = "测试计划";
                this.detailtext2 = "测试工程师指定测试计划";
                this.detailtext3 = "专业测试";
                this.detailtext4 = "专业测试软件测试";
                this.detailtext5 = "全方位检查";
                this.detailtext6 = "全力查出页面BUG";
                this.detailtext7 = "整理测试结果";
                this.detailtext8 = "整理文档结果,再次修改";
                this.rubberBand = "fadeIn";
                setTimeout(() => {
                    this.rubberBand = "";
                }, 500);
            }
            if (val === 4) {
                this.detailtext1 = "部署服务器";
                this.detailtext2 = "在服务器上全面上线";
                this.detailtext3 = "线上实测";
                this.detailtext4 = "实测中不断修改细节";
                this.detailtext5 = "交付客户";
                this.detailtext6 = "让客户检查成果";
                this.detailtext7 = "客户满意";
                this.detailtext8 = "不断修改,直到客户满意";
                this.rubberBand = "fadeIn";
                setTimeout(() => {
                    this.rubberBand = "";
                }, 500);
            }
        }
    },
    components: {},
    methods: {
        swicher(rm) {
            this.swichers = rm;
        }
    }
};
</script>

<style lang='less' scoped >
.page3 {
    height: 100%;
    width: 100%;
    background: url("./../../../assets/img/fw/bg3.png") no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    padding-top: 8%;
    position: relative;
}
.page3 > div {
}
.serve {
    height: 25px;
    font-size: 26px;
    text-align: left;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    position: absolute;
    left: 6%;
    div:first-child {
        font-size: 26px;
    }
    div:last-child {
        font-size: 17px;
    }
}
.sw01 {
    height: 64px;
    color: white;
    float: left;
    margin-top: 20px;
}
.sw01 > div {
    text-align: left;
    float: left;
    height: 100%;
    line-height: 64px;
    font-size: 26px;
}
.logos {
    box-sizing: border-box;
    padding-left: 20px;
    height: 64px;
    width: 204px;
    line-height: 64px;
    margin-left: 20px;
    font-size: 17px !important;
    border: 1px solid rgba(0, 0, 0, 0);
    transition: all 0.5s linear;
    .ml31 {
        margin-left: 29px;
    }
    div {
        float: left;
    }
    .logosImg {
        height: 40px;
        width: 40px;
        margin-top: 12px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            height: 60%;
            width: 60%;
        }
    }
}
.menu {
    position: absolute;
    top: 25%;
    left: 10%;
    @media (min-width: 1680px) {
        top: 30%;
        left: 16%;
    }
}

.clearBoth {
    width: 400px;
    cursor: pointer;
    margin: 0 0 0 100px;
}
.borders {
    border: 1px dashed white !important;
}
.ljImg{
  position: absolute;
  top:55%;
  left:39%;
}
.detail {
    width: 606px;
    height: 277px;
    border: 1px dashed white !important;
    position: absolute;
    top: 38%;
    right: 10%;
    @media (min-width: 1680px) {
        right: 19%;
    }
    .sw {
        color: white;
        height: 100%;
        width: 100%;
        div {
            float: left;
            width: 50%;
            height: 50%;
            p {
                margin-left: 60px;
                margin-top: 10px;
            }
            p:first-child {
                font-size: 17px;
                margin-top: 34px;
            }
            p:last-child {
                font-size: 14px;
            }
        }
    }
}
.logos:hover {
    border: 1px dashed white !important;
}
</style>

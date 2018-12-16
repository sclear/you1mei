<template>
    <div class="page2">
        <div class="banner">
            <div class="shodow">
                <div class="hoty">热门业务
                    <br><span class="fs15">OPERATION</span>
                </div>
                <div class="works animated" :class="bounceInLeft">APP开发|小程序开发</div>
                <div class="workMore animated" :class="bounceInRight">网站建设开发|系统开发</div>
                <a class="Textdirec" href="tencent://message/?uin=909912651&Menu=yes& Service=300&sigT=42a1e5347953b64c5ff3980f8a6e644d4b31456cb0b6ac6b27663a3c4dd0f4aa14a543b1716f9d45">
                    <div @click="connct" class="connact animated" :class="bounceInUp">立即沟通</div>
                </a>
            </div>
            <div class="fourSwork animated" :class="slideInDown">
                <div class="animated" :class="slideInDown">
                    <img src="./../../../assets/img/hot/a1.png" alt="">
                    <div class="fs13">微信小程序</div>
                    <div>基于HTML5+微信原生</div>
                    <div class="mt5">能力的产品形态</div>
                    <div v-if="m_num === 1" class="showde">
                        <div @click="toD_tail(0)">点击查看</div>
                    </div>
                </div>
                <div class="animated" :class="slideInDown">
                    <img src="./../../../assets/img/hot/b1.png" alt="">
                    <div class="fs13">APP开发</div>
                    <div class="mt5">原生APP，新闻资讯类AP，</div>
                    <div>社交类APP，电商APP</div>
                    <div v-if="m_num === 1" class="showde">
                        <div @click="toD_tail(1)">点击查看</div>
                    </div>
                </div>
                <div class="animated" :class="slideInRight">
                    <img src="./../../../assets/img/hot/c1.png" alt="">
                    <div class="fs13">系统开发</div>
                    <div>基于各类系统，专业开发团队</div>
                    <div v-if="m_num === 1" class="showde">
                        <div @click="toD_tail(2)">点击查看</div>
                    </div>
                </div>
                <div class="animated" :class="slideInRight">
                    <img src="./../../../assets/img/hot/d1.png" alt="">
                    <div class="fs13">网站建设</div>
                    <div>专业技术打造，一对一量身定制</div>
                    <div v-if="m_num === 1" class="showde">
                        <div @click="toD_tail(3)">点击查看</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bounceInDown: "",
            bounceInLeft: "",
            bounceInRight: "",
            bounceInUp: "",
            slideInDown: "",
            slideInRight: ""
        };
    },
    props: {
        m_num: Number
    },
    watch: {
        m_num(val) {
            if (val === 1) {
                this.bounceInDown = "bounceInDown";
                this.bounceInLeft = "bounceInLeft";
                this.bounceInRight = "bounceInRight";
                this.bounceInUp = "bounceInUp";
                this.slideInDown = "slideInDown";
                this.slideInRight = "slideInRight";
            } else {
                this.bounceInDown = "";
                this.bounceInLeft = "";
                this.bounceInRight = "";
                this.bounceInUp = "";
                this.slideInDown = "";
                this.slideInRight = "";
            }
        }
    },
    components: {},
    methods: {
        //为人工客服做准备
        connct() {},
        toD_tail(res) {
            if(res === 0){
                this.$router.push({path:'/wx'})
            }
            if(res === 1){
                this.$router.push({path:'/app_d'})
            }
            if(res === 2){
                this.$router.push({path:'/sys'})
            }
            if(res === 3){
                this.$router.push({path:'/web'})
            }
        }
    }
};
</script>

<style lang='less' scoped >
.page2 {
    height: 100%;
}
.nav {
    height: 15%;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    div {
        height: 50px;
        width: 18%;
        line-height: 50px;
        text-align: center;
    }
}
.checkNav {
    color: white;
    background-color: #4e9bdd;
}
.banner {
    height: 100%;
    width: 100%;
    background: url("./../../../assets/img/hot/bg2.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    .shodow {
        position: absolute;
        color: #f5f5f5;
        height: 100%;
        background: rgba(14, 14, 14, 0.62);
        width: 41%;
        box-sizing: border-box;
        padding-top: 194px;
        .Textdirec{
            text-decoration: none;
        }
        .hoty {
            position: absolute;
            text-align: left;
            font-size: 26px;
            left: 15%;
            top: 18%;
        }
        .works {
            font-size: 17px;
            text-align: center;
            margin-top: 80px;
            @media (min-width: 1680px) {
                margin-top: 230px;
            }
        }
        .workMore {
            font-size: 17px;
            text-align: center;
            margin-top: 40px;
        }
        .connact {
            width: 156px;
            height: 56px;
            margin: 0 auto;
            text-align: center;
            line-height: 56px;
            border-radius: 8px;
            background-color: #2c80c1;
            color: #ffffff;
            margin-top: 140px;
            cursor: pointer;
        }
    }
    .fourSwork {
        width: 58%;
        height: 80%;
        background-color: white;
        position: absolute;
        margin-left: 39%;
        bottom: 0;
    }
}
.fourSwork > div {
    font-size: 11px;
    height: 50%;
    width: 50%;
    float: left;
    color: #8b8b8c;
    text-align: center;
    &:hover .showde{
        // transform: scale(1) rotate(0deg);
        animation: shows 1s linear forwards;
    }
    .showde {
        background-color: #4e9bdd;
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 30;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: scale(0) rotate(180deg);
        transition: all .3s linear;
        div {
            cursor: pointer;
            font-size: 16px;
            height: 30px;
            width: 100px;
            line-height: 30px;
            border: 1px solid white;
            border-radius: 8px;
            color: white;
            margin-top: 200px;
        }
    }
    img {
        width: 75px;
        height: 83px;
        margin-top: 13%;
    }
}
.fs13 {
    font-size: 13px;
    margin: 9px 0 3px 0;
}
.fs15 {
    display: block;
    font-size: 15px;
    margin-top: -2px;
}
.mt5 {
    margin-top: 3px;
}

// DIY animation
@keyframes shows{
    0%{
        transform: scale(0);
        opacity: 0;
        background-color: #535354;
        color:black;
    }
    10%{
        transform: scale(1.1);
        opacity: 0.3;
    }
    100%{
        transform: scale(1);
        opacity: 0.6;
    }
}
</style>

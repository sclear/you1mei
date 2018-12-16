<template>
    <div class="bar downClass">
        <div class="logo">
            <img class="logs" src="./../../assets/logs.png" alt="">
            <div>成都优易美网络科技有限公司</div>
        </div>
        <div class="nav">
            <ul>
                <router-link to='/index' :class="navs===0?'choseCase':''" @click.native="chose(0)" tag="li" active-class="activeClass"> <i v-show="navs === 0" class="iconfont rotate1" id="rotates">&#xe620;</i> <span class="ml">首页</span> <i v-show="navs === 0" class="iconfont smallIcon">&#xe620;</i></router-link>
                <router-link to='/casel' :class="navs===1?'choseCase':''" @click.native="chose(1)" tag="li" active-class="activeClass"><i v-show="navs === 1" class="iconfont rotate1 routate2" id="rotates">&#xe620;</i> <span class="ml">案例介绍</span> <i v-show="navs === 1" class="iconfont smallIcon">&#xe620;</i></router-link>
                <router-link to='/about' @click.native="chose(2)" tag="li" active-class="activeClass"><i v-show="navs === 2" class="iconfont rotate1" id="rotates">&#xe620;</i> <span class="ml">关于我们</span> <i v-show="navs === 2" class="iconfont smallIcon">&#xe620;</i></router-link>
                <router-link to='/connect' @click.native="chose(3)" tag="li" active-class="activeClass"><i v-show="navs === 3" class="iconfont rotate1" id="rotates">&#xe620;</i> <span class="ml">联系我们</span> <i v-show="navs === 3" class="iconfont smallIcon">&#xe620;</i></router-link>
                <router-link to='/money' @click.native="chose(4)" tag="li" active-class="activeClass"><i v-show="navs === 4" class="iconfont rotate1">&#xe620;</i> <span class="ml">报价</span> <i v-show="navs === 4" class="iconfont smallIcon">&#xe620;</i></router-link>
            </ul>
        </div>
    </div>
</template>

<script>
import { getmsg } from "./../../utils/baseUrl.js";
export default {
    data() {
        return {
            navs: 0,
            routeMsg: this.$route.path
        };
    },
    watch: {
        '$route'(to,form,next){
            let toPath = to.path;
            if(toPath === '/index' || toPath === '/sys'){
                this.navs = 0
            }
            if(toPath === '/casel' || toPath === '/showcase'){
                this.navs = 1
            }
            if(toPath === '/about'){
                this.navs = 2
            }
            if(toPath === '/connect'){
                this.navs = 3
            }
            if(toPath === '/money'){
                this.navs = 4
            }


        }
    },
    mounted() {
        let toPath = this.$route.path;
            if(toPath === '/index' || toPath === '/sys'){
                this.navs = 0
            }
            if(toPath === '/casel' || toPath === '/showcase'){
                this.navs = 1
            }
            if(toPath === '/about'){
                this.navs = 2
            }
            if(toPath === '/connect'){
                this.navs = 3
            }
            if(toPath === '/money'){
                this.navs = 4
            }
        },
    methods: {
        chose(res) {

            this.navs = res;

        },
    },
    components: {}
};
</script>

<style lang='less' scoped >
@font-face {
    font-family: "iconfont";
    src: url("./../../../static/font/iconfont.woff") format("woff"),
        url("./../../../static/font/iconfont.ttf") format("truetype"),
        url("./../../../static/font/iconfont.svg#iconfont") format("svg");
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 12px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
.bar {
    height: 15%;
    width: 100%;
    background-color: #fff;
    transition: all .3s linear;
    position: fixed;
    top: 0;
    z-index: 999999;
    box-shadow: 1px 1px 11px #888;
    min-width: 1200px;
    .logo {
        box-sizing: border-box;
        padding:20px 0 0 51px;
        height: 100%;
        width: 30%;
        .logs{
            width:30%;
            padding-left: 20px;
        }
        div{
            font-size: 12px;
        }
    }
    .nav {
        width: 70%;
        height: 100%;
        ul {
            height: 100%;
            overflow: hidden;
            width: 100%;
        }
    }
}
ul > li {
    text-align: center;
    width: 18%;
    list-style: none;
    float: left;
    font-size: 18px;
    height: 36px;
    line-height: 36px;
    color: #535354;
    cursor: pointer;
    position: relative;
    top: 50%;
    margin-top: -18px;
    transition: all .4s linear;
}
.bar > div {
    float: left;
}
.activeClass {
    color: #0e6eb8;
}
.choseCase{
    color: #0e6eb8 !important;
}
.iconfont {
    height: 100%;
    display: inline-block;
    position: absolute;
    transform: scale(0.8) !important;
    transition: all .4s linear;
}
.rotate1 {
    transform: rotate(180deg) scale(0.8) !important;
    margin-left: -5px;
    @media (min-width: 1680px) {
        position: absolute;
        top: -1.5px;
        margin-left: -8px;
    }
}
.smallIcon {
    position: absolute;
    margin-left: 9px;
    // right:19px;
    @media (min-width: 1680px) {
        top: 0px;
        // left:6px;
        // margin-left: px;
    }
}
.smallIcon2 {
    position: absolute;
    margin-left: 3px;
}
.ml {
    margin-left: 16px;
}
.blueC {
    color: #0e6eb8;
}

.downClass {
}
</style>

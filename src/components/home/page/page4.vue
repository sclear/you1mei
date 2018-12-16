<template>
    <div class="page4">
        <div class="fs17">
            <div class="title">
                <div>经典案例</div>
                <div class="linkTodetail animated" :class="flash">
                    <div><span @click="toCase(1)" class="our_AL">APP案例</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div><span @click="toCase(2)" class="our_AL">网站案例</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div><span @click="toCase(3)" class="our_AL">后台管理系统</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div><span @click="toCase(4)" class="our_AL">更多案例</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                </div>
            </div>
            <div>CASES</div>
        </div>
        <div class="details">
            <div v-if="list.length>0" class="animated bg1" :class="addClass">
                <img @click="toDetail(0)" class="Bimg" :src='$url+list[0].img' alt="">
                <p class="p1">{{list[0].item_name}}</p>
                <p class="p2">{{list[0].type | choseTpye}}</p>
            </div>
            <div v-if="list.length>1" class="bg1 animated" :class="addClass_rm">
                <img @click="toDetail(1)" class="Bimg" :src='$url+list[1].img' alt="">
                <p class="p1">{{list[1].item_name}}</p>
                <p class="p2">{{list[1].type | choseTpye}}</p>
            </div>
            <div v-if="list.length>2" class="bg1 animated" :class="addClass">
                <img @click="toDetail(2)" class="Bimg" :src='$url+list[2].img' alt="">
                <p class="p1">{{list[2].item_name}}</p>
                <p class="p2">{{list[2].type | choseTpye}}</p>
            </div>
            <div v-if="list.length>3" class="bg1 animated" :class="addClass_rm">
                <img @click="toDetail(3)" class="Bimg" :src='$url+list[3].img' alt="">
                <p class="p1">{{list[3].item_name}}</p>
                <p class="p2">{{list[3].type | choseTpye}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { getCase } from "./../../../utils/baseUrl.js";
export default {
    data() {
        return {
            addClass: "",
            addClass_rm: "",
            flash: "",
            list: []
        };
    },
    watch: {
        m_num(val) {
            if (val === 3) {
                this.addClass = "fadeInDown";
                this.addClass_rm = "fadeInUpBig";
                this.flash = "fadeIn";
            } else {
                this.addClass = "";
                this.addClass_rm = "";
                this.flash = "";
            }
        }
    },
    props: {
        m_num: Number
    },
    mounted() {
        getCase().then(res => {
            this.list = res.data.data;
            // console.log(this.list)
            // console.log(this.list);
        });
    },
    filters: {
        choseTpye(val) {
            if (val === 1) {
                return "APP案例";
            } else if (val === 2) {
                return "网站案例";
            } else {
                return "后台案例";
            }
        }
    },
    methods: {
        toDetail(res) {
            // console.log(this.list[res].id);
            this.$router.push({
                path: "/showcase",
                query: {
                    name: this.list[res].id
                }
            });
        },
        toCase(res){
            this.$router.push({
                path: '/casel',
                query: {
                    name: res
                }
            })
        }
    },
    components: {}
};
</script>

<style lang='less' scoped >
.page4 {
    color: #fff;
    font-size: 17px;
    background: url("./../../../assets/img/al/bg.png") no-repeat;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
    position: relative;
}
.page4::before {
    display: block;
    content: "";
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.76);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
}
.title {
    width: 100%;
}
.title:last-child {
    font-size: 14px;
}
.title > div {
    font-size: 25px;
}
.linkTodetail {
    position: absolute;
    right: 8%;
}
.linkTodetail > div {
    float: left;
    font-size: 14px;
}
.fs17 {
    font-size: 21px;
    color: white;
    position: absolute;
    z-index: 1;
    box-sizing: border-box;
    padding-top: 8%;
    left: 6%;
    width: 100%;
}
.details {
    width: 90%;
    margin-left: 5%;
    color: #535354;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    position: absolute;
    top: 30%;
    z-index: 1;
}
.details > div {
    height: 434px;
    width: 299px;
    background-color: white;
    & > div {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #4e9bdd;
        height: 434px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 20;
        transform: scale(0);
        transition: all 0.3s linear;
        color: white;
        div {
            height: 30px;
            width: 100px;
            border: 1px solid white;
            border-radius: 7px;
            line-height: 30px;
            text-align: center;
            cursor: pointer;
        }
    }
    img {
        width: 100%;
        height: 364px;
    }
    p {
        text-align: center;
        width: 299px;
    }
    .p1 {
        font-size: 17px;
        position: absolute;
        bottom: 11%;
    }
    .p2 {
        font-size: 13px;
        position: absolute !important;
        bottom: 5%;
    }
}
.our_AL {
    cursor: pointer;
}
.bg1 {
    position: relative;
}
.Bimg {
    transition: all 0.5s linear;
    cursor: pointer;
    position: absolute;
    z-index: 1;
}
.Bimg:hover {
    transform: scale(1.05);
    z-index: 999;
}
</style>

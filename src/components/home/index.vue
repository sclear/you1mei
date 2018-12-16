<template>
    <div class="app">
        <div v-if="m_num > 0" class="po_radius">
            <div class="hr"></div>
            <div class="groups">
                <div @click="toDown(0)" :class="m_num === 0?'checkS':''"></div>
                <div @click="toDown(1)" :class="m_num === 1?'checkS':''">
                    <div :class="m_num === 1?'disBlock':''">热门业务</div>
                </div>
                <div @click="toDown(2)" :class="m_num === 2?'checkS':''">
                    <div :class="m_num === 2?'disBlock':''">服务流程</div>
                </div>
                <div @click="toDown(3)" :class="m_num === 3?'checkS':''">
                    <div :class="m_num === 3?'disBlock':''">经典案例</div>
                </div>
                <div @click="toDown(4)" :class="m_num === 4?'checkS':''">
                    <div :class="m_num === 4?'disBlock':''">服务需求</div>
                </div>
                <div @click="toDown(5)" :class="m_num === 5?'checkS':''">
                    <div :class="m_num === 5?'disBlock':''">联系我们</div>
                </div>
            </div>
        </div>

        <div class="continear" :class="mt">
            <div class="mybox1">
                <page1></page1>
            </div>
            <div class="mybox2">
                <page2 :m_num='m_num'></page2>
            </div>
            <div class="mybox3">
                <page3 :m_num='m_num'></page3>
            </div>
            <div class="mybox4">
                <page4 :m_num='m_num'></page4>
            </div>
            <div class="mybox5">
                <page5 :m_num='m_num'></page5>
            </div>
            <div class="mybox6">
                <page6 :m_num='m_num'></page6>
            </div>
        </div>

    </div>
</template>

<script>
import Swiper from "swiper";
import page1 from "./page/page1";
import page2 from "./page/page2";
import page3 from "./page/page3";
import page4 from "./page/page4";
import page5 from "./page/page5";
import page6 from "./page/page6";
export default {
    name: "index",
    mounted() {
        this.onWhiell();
    },
    data() {
        return {
            mt: "",
            m_rr: ["mt1", "mt2", "mt3", "mt4", "mt5"],
            m_num: 0,
            scollIndex:true
        };
    },
    watch: {
        m_num(val) {
            switch (val) {
                case 0:
                    this.mt = "mt1";
                    break;
                case 1:
                    this.mt = "mt2";
                    break;
                case 2:
                    this.mt = "mt3";
                    break;
                case 3:
                    this.mt = "mt4";
                    break;
                case 4:
                    this.mt = "mt5";
                    break;
                case 5:
                    this.mt = "mt6";
                    break;
            }
        },
        '$route'(to,from,next) {
            // console.log(to.path)
            if(to.path === '/index'){
                this.scollIndex = true;
            }
             else{
                this.scollIndex = false;
            }
        }
    },
    methods: {
        onWhiell() {
                window.addEventListener("mousewheel", this.scollto, false);
        },
        scollto() {
            let direction;
            window.removeEventListener("mousewheel", this.scollto);
            let event = event || window.event;
            event = event;
            // console.log(event.wheelDelta);
            direction =
                event.wheelDelta &&
                (event.wheelDelta > 0 ? "mouseup" : "mousedown");
            // console.log(direction);
            // if (direction === "mouseup") {
            //     if (this.m_num === 0) {
            //         this.m_num = 0;
            //     } else {
            //         this.m_num--;
            //     }
            // } else {
            //     if (this.m_num === 5) {
            //     } else {
            //         this.m_num++;
            //     }
            // }
            if(this.scollIndex){
                if (direction === "mouseup") {
                if (this.m_num === 0) {
                    this.m_num = 0;
                } else {
                    this.m_num--;
                }
            } else {
                if (this.m_num === 5) {
                } else {
                    this.m_num++;
                }
            }


            }
            setTimeout(() => {
                window.addEventListener("mousewheel", this.scollto, false);
            }, 500);
        },
        toDown(res) {
            this.m_num = res;
        }
    },
    components: {
        page1,
        page2,
        page3,
        page4,
        page5,
        page6
    }
};
</script>

<style lang='less' scoped>
.app {
    height: 100%;
    width: 100%;
    overflow: hidden;
}
.continear {
    width: 100%;
    height: 500%;
    transition: all 0.4s linear;
}
.continear > div {
    height: 100vh;
}
.mt1 {
    margin-top: 0;
}
.mt2 {
    margin-top: -100vh;
}
.mt3 {
    margin-top: -200vh;
}
.mt4 {
    margin-top: -300vh;
}
.mt5 {
    margin-top: -400vh;
}
.mt6 {
    margin-top: -500vh;
}
.mybox1 {
    width: 100%;
}
.mybox2 {
    width: 100%;
}
.mybox4 {
    width: 100%;
}
.mybox5 {
    width: 100%;
}
.mybox6 {
    width: 100%;
}
.mybox3 {
    width: 100%;
}
.border_radius {
    position: fixed;
    top: 50%;
    left: 30px;
    margin-top: -80px;
    z-index: 999;
    div {
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background-color: white;
        margin-top: 25px;
        cursor: pointer;
    }
    div:first-child {
        margin-top: 0;
    }
}
.choseClass {
    background: rgb(82, 78, 78) !important;
}

.po_radius {
    position: fixed;
    height: 220px;
    width: 14px;
    top: 38%;
    left: 1%;
    // background-color: white;
    z-index: 4;
    .hr {
        position: absolute;
        height: 100%;
        width: 50%;
        border-right: 1px solid rgba(146, 140, 140, 0.322);
        z-index: -1;
        margin-left: 0.6px;
    }
    .groups {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        & > div {
            height: 2px;
            width: 2px;
            background-color: rgb(168, 112, 112);
            margin-left: 5px;
            border-radius: 50%;
            border: 2px solid white;
            cursor: pointer;
            transition: all 0.3s linear;
            position: relative;
            div{
                position:absolute;
                width:70px;
                height:30px;
                left:20px;
                top:-2px;
                color: white;
                font-size: 12px;
                display: none;
            }
            &:hover {
                height: 12px !important;
                width: 12px !important;
                background-color: #53443c !important;
                margin-left: 0px !important;
            }
            &:hover div{
                display: block;
            }
        }
    }
}
.checkS {
    height: 12px !important;
    width: 12px !important;
    background-color: #2e2520 !important;
    margin-left: 0px !important;
}
.disBlock{
    display: block !important;
    z-index: 999;
    position: relative;
}
</style>



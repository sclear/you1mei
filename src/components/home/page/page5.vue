<template>
    <div class="page5">
        <div class="title-group animated fadeIn">
            <div>服务需求</div>
            <div>NEEDS</div>
        </div>
        <div class="chat">
            <div class="client animated fadeIn" v-if="firstD.length > 0">
                <div class="clen"></div>
                <div class="txt_rm">{{firstD}}</div>
            </div>
            <div class="ours  animated fadeIn" v-if="ours.length > 0">
                <div class="ourImg"></div>
                <div class="txt_rm">{{ours}}</div>

            </div>
            <div class="client  animated fadeIn" v-if="firstD1.length > 0">
                <div class="clen"></div>
                <div class="txt_rm">{{firstD1}}</div>
            </div>
            <div class="ours  animated fadeIn" v-if="ours1.length > 0">
                <div class="ourImg"></div>
                <div class="txt_rm">{{ours1}}</div>
            </div>

            <div @click="toConect" class="information animated fadeInUp" v-if="order === 4">立即咨询</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 0,
            firstD: "",
            ours: "",
            firstD1: "",
            ours1: "",
            ft1: "你好！上次我们合作的项目客户很满意",
            order: 0
        };
    },
    props: {
        m_num: Number
    },
    watch: {
        m_num(val) {
            if (val === 4) {
                setTimeout(() => {
                    this.ks1();
                }, 1000);
            } else {
                this.order = 0;
                this.num = 0;
                this.firstD = "";
                this.firstD1 = "";
                this.ours = "";
                this.ours1 = "";
                this.ks1(1);
                this.ft1 = "你好！上次我们合作的项目客户很满意";
                // console.log(this.ft1)
                
            }
        }
    },
    mounted() {

    },
    methods: {
        //文字顺序功能
        ks1(rm) {
            let timeout = setInterval(() => {
                if (this.num === this.ft1.length) {
                    clearInterval(timeout);
                    if (this.order < 4) {
                        this.order++;
                        if (this.order === 1) {
                            this.ft1 =
                                "满意就好呢！客户的满意一直是我们追求的动力";
                        }
                        if (this.order === 2) {
                            this.ft1 = "希望下次有机会再次合作呢！谢谢你们";
                        }
                        if (this.order === 3) {
                            this.ft1 = "好的呢。不客气";
                        }
                        this.num = 0;
                        this.ks1();
                    }
                    return;
                }
                if (this.order === 0) {
                    this.firstD += this.ft1[this.num];
                }
                if (this.order === 1) {
                    this.ours += this.ft1[this.num];
                }
                if (this.order === 2) {
                    this.firstD1 += this.ft1[this.num];
                }
                if (this.order === 3) {
                    this.ours1 += this.ft1[this.num];
                }
                this.num++;
            }, 100);
            if (rm) {
                clearInterval(timeout);
            }
        },
        toConect() {
            this.$router.push('connect')
        }
    },
    components: {}
};
</script>

<style lang='less' scoped >
.title-group{
    position: absolute;
    top:17%;
    left:5%;
    color:#fff;
    div:first-child{
        font-size: 26px;
    }
    div{
        font-size: 21px;
    }
}
.page5 {
    height: 100%;
    width: 100%;
    background: url("./../../../assets/img/hz/bg6.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    .chat {
        position: absolute;
        height: 80%;
        width: 48%;
        top: 20%;
        left: 26%;
        color: white;
         @media  (min-width: 1680px) {
             top:30%;
        }
        .client {
            height: 40px;
            width: 100%;
            line-height: 40px;
            div {
                float: left;
            }
            .clen {
                height: 40px;
                width: 40px;
                background: url("./../../../assets/img/hz/1.png") no-repeat;
                background-size: 100% 100%;
            }
            .txt_rm {
                width: 350px;
                border: 1px dashed rgba(78, 155, 221, 1);
                margin-left: 10px;
                padding-left: 10px;
                height: 42px;
            }
        }
        .ours {
            height: 40px;
            width: 100%;
            line-height: 40px;
            div {
                float: right;
            }
            .ourImg {
                height: 40px;
                width: 40px;
                background: url("./../../../assets/com.png") no-repeat;
                background-size: 100% 100%;
                border-radius: 50%;
            }
            .txt_rm {
                width: 350px;
                text-align: right;
                margin-right: 10px;
                padding-right: 10px;
                border: 1px dashed rgba(78, 155, 221, 1);
                height: 42px;
            }
        }
    }
}
.chat > div {
    margin-top: 40px;
}
.information {
    height: 46px;
    width: 308px;
    text-align: center;
    line-height: 46px;
    background-color: white;
    color:#2C80C1;
    border-radius: 7px;
    margin:0 auto;
    margin-top: 90px !important;
    font-weight: bold;
    cursor: pointer;
     @media  (min-width: 1680px){
         margin-top: 100px !important;
    }
}
.centerTxt{
    width:100%;
    position: absolute;
    bottom: 20px;
    font-size: 12px;
    text-align: center;
}
</style>

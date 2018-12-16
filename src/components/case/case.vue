<template>
    <div class="case">
        <div class="banner">
            <img class="img1" src="./../../assets/case/s.png" alt="">
            <img class="img2" src="./../../assets/case/ss.png" alt="">
            <img class="img3" src="./../../assets/case/cw.png" alt="">
        </div>
        <div class="group">
            <div class="caseNone" v-if="list.length == undefined">案例正在逐步更新中...</div>
            <case-detail v-if="list.length > 0" v-for="(item,index) in list" :key="index" :item='item' :index='index' @toshow="toshow"></case-detail>
        </div>
        <c-footer></c-footer>
    </div>
</template>

<script>
import { getAll, getAllCases } from "./../../utils/baseUrl.js";
import cFooter from "./../common/footer";
import caseDetail from "./casedetail";
export default {
    data() {
        return {
            list: []
        };
    },
    mounted() {
        // console.log(this.list.length)

        if (!this.$route.query.name || this.$route.query.name == 4) {
            getAll().then(res => {
                this.list = res.data.data;
                // console.log(this.list.length)
            })
            .catch(err=>{
            })
        } else{
            getAllCases({type:Number(this.$route.query.name)})
            .then(res=>{
                this.list = res.data.data;
            })
            .catch(err=>{
            })
        }
    },
    components: {
        caseDetail,
        cFooter
    },
    methods: {
        toshow(res) {
            this.$router.push({
                path: "/showcase",
                query: {
                    name: res
                }
            });
        }
    }
};
</script>

<style lang='less' scoped >
.case {
    box-sizing: border-box;
    padding-top: 15vh;
    cursor: pointer;
    .banner {
        height: 85vh;
        width: 100%;
        background: url("./../../assets/case/bg.png") no-repeat;
        background-size: 100% 100%;
        position: relative;
        img {
            position: absolute;
        }
        .img1 {
            width: 318px;
            left: 443px;
            top: 151px;
        }
        .img2 {
            width: 459px;
            left: 374px;
            top: 252px;
        }
        .img3 {
            width: 402px;
            left: 503px;
            top: 374px;
        }
    }
    .group {
        margin: 119px 0 161px 0;
        overflow: hidden;
        .caseNone{
            margin-left: 50px;
        }
    }
}
</style>

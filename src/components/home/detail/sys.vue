<template>
    <div class="showcase">
        <div class="colorTxt">系统定制开发</div>
        <div class="show">
            <p class="titles">详情展示</p>
            <div class="hrs"></div>
        </div>
        <div>
            <div class="t_head">&nbsp;
                <img class="t_headIMg" src="./../../../assets/fours/app2/bg.png" alt="">
                <p class="APP_WT">什么是系统定制开发</p>
                <div>
                    <div class="t_head_txt firt_txt">计算机系统开 发是根据计算机用户对应用系统的技术要求，分析原
                        系统，设计新的计算机系统的内部结构并加以实现和维护的过程。计算
                        机系统开发也是一个管理科学问题，自始至终贯穿着人员组织、工程化、标准化等管理工作，在很大程度上影响系统的性能和开发工作的效率。
                    </div>
                    <div class="t_head_txt">
                        在计算机高速发展的今天，系统开发已经融入了各行种业，而且系统开发也越来越多样化展示。
                    </div>
                </div>
            </div>
        </div>

        <div class="floows">
            <div class="floows_s">定制流程</div>
            <div class="floow_txt">我们能够为你提供一整套的服务流程，包括项目上线后的后期维护工作，我们相信只有不断完善服务品质</div>
            <div class="floow_txt">才能让我们走得更远。</div>
        </div>

        <div class="flows">
            <img class="lear" src="./../../../assets/fours/lear.png" alt="">
            <img class="a_s" src="./../../../assets/fours/a.png" alt="">
            <img class="b_s" src="./../../../assets/fours/b.png" alt="">
            <img class="c_s" src="./../../../assets/fours/c.png" alt="">
            <img class="d_s" src="./../../../assets/fours/d.png" alt="">
            <img class="e_s" src="./../../../assets/fours/e.png" alt="">
            <div class="a_t text-right">
                <div class="tils">商务沟通，了解您的需求</div>
                <div class="tilsTxt">需求整理、制定计划文档、确认要求、项目立项</div>
            </div>

            <div class="b_t text-left">
                <div class="tils">产品经理确认架构，设计原型图</div>
                <div class="tilsTxt">架构搭建、原型设计、UI设计、效果图</div>
            </div>

            <div class="c_t text-right">
                <div class="tils">专业技术团队讨论开发</div>
                <div class="tilsTxt">系统设计、程序开发、后台开发</div>
            </div>

            <div class="d_t text-left">
                <div class="tils">质检团队确保代码无问题、系统安全稳定</div>
                <div class="tilsTxt">代码检验、五重检验、逻辑检验</div>
            </div>

            <div class="e_t text-right">
                <div class="tils">追求客户百分百满意</div>
                <div class="tilsTxt">客户检验、项目通过、结清款项、成功上线</div>
            </div>
        </div>

        <div class="makeTpye">
            <div class="txt">定制类型</div>
            <img src="./../../../assets/fours/app2/1.png" alt="">
            <img src="./../../../assets/fours/app2/2.png" alt="">
            <img src="./../../../assets/fours/app2/3.png" alt="">
            <img src="./../../../assets/fours/app2/4.png" alt="">
        </div>
        <div class="useAd">应用场景</div>

        <div class="swiper-container">
            <div class="swiper-wrapper">
                <!-- <div class="swiper-slide">
                    <div>
                        <img src="./../../../assets/fours/app/lt.png" alt="">
                    </div>
                    <div>
                        <img src="./../../../assets/fours/app/rt.png" alt="">
                    </div>
                </div> -->
                <div class="swiper-slide">
                    <div>
                        <img src="./../../../assets/fours/app2/a.png" alt="">
                    </div>
                    <div>
                        <img src="./../../../assets/fours/app2/b.png" alt="">
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev"></div>
            <!--左箭头-->
            <div class="swiper-button-next"></div>
            <!--右箭头-->
            <!-- 如果需要导航按钮 -->
            <div class="swiper-pagination"></div>
        </div>
        <page6 class="page6"></page6>
    </div>
</template>

<script>
import Swiper from "swiper";
import page6 from "./../page/page6";
export default {
    data() {
        return {};
    },
    mounted() {
        var myswiper = new Swiper(".swiper-container", {
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                hideOnClick: true,
                hiddenClass: "my-button-hidden"
            }
        });
    },
    components: { page6 }
};
</script>

<style lang='less' scoped >
.showcase {
    box-sizing: border-box;
    padding-top: 18vh;
    overflow: hidden;
    // height:100vh;
}
.page6 {
    height: 100vh !important;
}
.colorTxt {
    font-size: 26px;
    color: #0b94a7;
    text-align: center;
}
.show {
    width: 100%;
    font-size: 26px;
    color: #535354;
    text-align: center;
    position: relative;
    margin-top: 16px;
}
.hrs {
    position: absolute;
    top: 0;
    left: 0;
    height: 17px;
    width: 100%;
    border-bottom: 1px dashed #39a8b8;
}
.titles {
    position: absolute;
    z-index: 20;
    width: 130px;
    left: 50%;
    margin-left: -65px;
    background-color: white;
    padding: 0;
    text-align: center;
}
// img {
//     margin-top: 105px;
//     width: 100%;
// }
/* //  */
.APP_WT {
    margin-top: 30px;
    text-align: center;
    color: #4e9bdd;
    font-size: 26px;
    margin-top: 14px;
}
.t_head {
    height: 408px;
    width: 100%;
    background: url("./../../../assets/fours/app/bg2.png") no-repeat;
    background-size: 100% 100%;
    color: #535354;
    font-size: 17px;
    margin-top: 97px;
    box-sizing: border-box;
    position: relative;
    .t_headIMg {
        position: absolute;
        bottom: 0;
        width: 350px;
        right: 15%;
    }
    .t_head_txt {
        text-align: left;
        width: 539px;
        text-indent: 30px;
        line-height: 40px;
        margin-left: 195px;
    }
    .firt_txt {
        margin-top: 51px;
    }
}

.floows {
    width: 100%;
    .floows_s {
        font-size: 26px;
        color: #0b94a7;
        text-align: center;
        margin-top: 65px;
    }
    .floow_txt:first-child {
        margin-top: 33px;
    }
    .floow_txt {
        text-align: center;
        margin-top: 21px;
    }
}

.tils {
    color: #535354;
    font-size: 17px;
}
.tilsTxt {
    font-size: 13px;
    color: #8b8b8d;
}
.text-right {
    text-align: right;
}
.text-left {
    text-align: left;
}
.flows {
    height: 320px;
    position: relative;
    width: 100%;
    margin: 86px 0 90px 0;
    img {
        position: absolute;
        width: 64px;
    }
    & > div {
        position: absolute;
    }
    .a_s {
        left: 44%;
        top: -8px;
    }
    .b_s {
        left: 51.4%;
        top: 65px;
    }
    .c_s {
        left: 44%;
        top: 132px;
    }
    .d_s {
        left: 51.4%;
        top: 200px;
    }
    .e_s {
        left: 44%;
        top: 273px;
    }
    .lear {
        width: 22px;
        top: 10px;
        left: 50%;
        margin: 0;
        margin-left: -11px;
    }
    & > div {
        width: 40%;
    }
    .a_t {
        left: 2%;
        top: -20px;
    }
    .b_t {
        left: 58%;
        top: 54px;
    }
    .c_t {
        left: 2%;
        top: 120px;
    }
    .d_t {
        left: 58%;
        top: 190px;
    }
    .e_t {
        left: 2%;
        top: 260px;
    }
}
.makeTpye {
    height: 442px;
    width: 100%;
    background: url("./../../../assets/fours/app/bg1.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    position: relative;
    .txt {
        font-size: 26px;
        color: #0e6eb8;
        text-align: center;
        width: 100%;
        position: absolute;
        top: 27px;
    }
    img {
        width: 255px;
        height: 296px;
        margin: 20px 0px 20px 20px;
        margin-top: 107px;
    }
}
.useAd {
    font-size: 26px;
    color: #4e9bdd;
    text-align: center;
    margin: 69px 0 96px 0;
}
.swiper-container {
    margin-bottom: 137px;
}
.swiper-slide {
    width: 100%;
    height: 100%;
    color: white;
}
.swiper-slide {
    display: flex;
    justify-content: center;
    & > div {
        float: left;
        height: 381px;
        width: 457px;
        margin: 0 84px 0 84px;
        img {
            height: 100%;
            width: 100%;
        }
    }
}
.swiper-button-prev {
    left: 7%;
}
.swiper-button-next {
    right: 7%;
}
</style>

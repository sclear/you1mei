<template>
    <div class="about">
        <div class="banner">
            <img class="IMGO" src="./../../assets/about/aboutme.png" alt="">
            <img class="IMGT" src="./../../assets/about/ABOUTUS.png" alt="">
            <img class="IMGS" src="./../../assets/about/txt.png" alt="">
        </div>
        <div class="merit">
            <p class="our-merit">服务优势</p>
            <div class="gourp-detail">
                <div>
                    <div class="titles">
                        <div class="imgP"><img width="65" src="./../../assets/about/a.png" alt=""></div>
                        <div class="texts">5分钟响应</div>
                    </div>
                    <div class="txt">客服人员即时回应,随时在线，了解您的需求，</div>
                    <div class="txt">实时解答你的疑问，全面介绍公司的服务流程，</div>
                    <div class="txt">让你可以放心大胆地交付项目</div>
                </div>
                <div>
                    <div class="titles">
                        <div class="imgP"><img width="55" height="59" src="./../../assets/about/b.png" alt=""></div>
                        <div class="texts">专注服务品质</div>
                    </div>
                    <div class="txt">客服人员即时回应,随时在线，了解您的需求，</div>
                    <div class="txt">实时解答你的疑问，全面介绍公司的服务流程，</div>
                    <div class="txt">让你可以放心大胆地交付项目</div>
                </div>
                <div>
                    <div class="titles">
                        <div class="imgP"><img width="50" src="./../../assets/about/c.png" alt=""></div>
                        <div class="texts">大量项目积累</div>
                    </div>
                    <div class="txt">客服人员即时回应,随时在线，了解您的需求，</div>
                    <div class="txt">实时解答你的疑问，全面介绍公司的服务流程，</div>
                    <div class="txt">让你可以放心大胆地交付项目</div>
                </div>
                <div>
                    <div class="titles">
                        <div class="imgP"><img width="63" src="./../../assets/about/d.png" alt=""></div>
                        <div class="texts">98%满意度</div>
                    </div>
                    <div class="txt">客服人员即时回应,随时在线，了解您的需求，</div>
                    <div class="txt">实时解答你的疑问，全面介绍公司的服务流程，</div>
                    <div class="txt">让你可以放心大胆地交付项目</div>
                </div>
            </div>
        </div>
        <div class="about_ours">
            <div class="company_name">成都优易美网络科技有限公司</div>
            <div class="about_company">成都优易美网络科技有限公司(简称优易美科技)是一家专业提供Andoid/iOS移动应用开发、微信平台程序开发，HTML5开发，直销分销系统设计等。为客户提供项目一站式解决方案的开发服务公司。公司坐落于“天府之国”美誉的成都市，开发产品涉足于O2O、智慧社区、智慧医疗、智慧教育、互联网金融、直播平台、共享平台等领域。</div>
            <div class="about_company">公司汇聚5-10年互联网经验高素质开发人员，高配合、高效率、高质量共同为您打造三优产品（优设计、优体验、优扩展），1000多个项目实战,已经沉淀有大量的成熟技术，从而保障为你提供高质量的软件;也正因为如此,我们的客户满意度在不断提高！这也是我们在软件定制行业成功的秘决!</div>
            <div class="about_company">我们致力用我们专业的项目开发能力将客户的产品理念充分体现并直击用户心灵，帮客户创造利益。</div>
        </div>
        <div class="team">
            <div class="letter">团队介绍</div>
            <div class="letter_detail">我们拥有一个年轻但富有激情的团队。公司成立以来，团队成员一直坚持创新，专研技术，不断的成长与进步。我们沉浸于用户体</div>
            <div class="letter_detail">验，努力做到让客户满意。我们一直坚持公司的发展理念，不断的和公司一起成长。我们尊重和珍惜每一次的合作机会，并不断的</div>
            <div class="letter_detail">精进，力求更好。团队一直坚信专业的技术支持能让我们不断地发掘出更大的商机和价值。</div>
        </div>
        <div class="oTeams">
            <!-- <img class="oursTeams" src="./../../assets/about/abt.png" alt=""> -->
        </div>
        <j-footer class="mt"></j-footer>
    </div>
</template>

<script>
import jFooter from "./../common/footer";
export default {
    data() {
        return {};
    },
    components: {
        jFooter
    }
};
</script>

<style lang='less' scoped >
.about {
    color: #535354;
    box-sizing: border-box;
    padding-top: 15vh;
    .banner {
        height: 85vh;
        width: 100%;
        background: url("./../../assets/about/bg.png") no-repeat;
        background-size: 100% 100%;
        position: relative;
        img {
            position: absolute;
        }
        .IMGO {
            width: 305px;
            left: 50%;
            top: 10vh;
            margin-left: -152.5px;
        }
        .IMGT {
            width: 202px;
            left: 60%;
            top: 23vh;
        }
        .IMGS {
            width: 263px;
            left: 60%;
            top: 40vh;
        }
    }
    .merit {
        width: 100%;
        height: 342px;
        .our-merit {
            margin: 37px 0 58px 0;
            color: #4e9bdd;
            font-size: 17px;
            text-align: center;
        }
    }
}
.gourp-detail {
    display: flex;
    justify-content: space-around;
    padding: 0 10%;
}
.gourp-detail > div {
    width: 320px;
    height: 164px;
}
.titles {
    height: 57px;
    width: 230px;
    margin-bottom: 24px;
    & > div {
        float: left;
    }
    .imgP {
        height: 57px;
        width: 65px;
        img {
            // height:100%;
            // width:100%;
        }
    }
    .texts {
        line-height: 57px;
        font-size: 21px;
    }
}
.txt {
    font-size: 11px;
    margin-top: 9px;
    // width:256px;
    &:first-child {
        margin-top: 24px !important;
    }
}
.about_ours {
    height: 411px;
    width: 100%;
    padding-left: 10%;
    box-sizing: border-box;
    background: url("./../../assets/about/bg2.png") no-repeat;
    background-size: 100% 100%;
    color: #ffffff;
    padding-top: 100px;
    .company_name {
        font-size: 17px;
        color: #4e9bdd;
    }
    .about_company {
        font-size: 13px;
        width: 60%;
        line-height: 30px;
        text-indent: 26px;
    }
}
.team {
    position: absolute;
    left: 50%;
    margin-left: -466px;
    margin-top: 93px;
    .letter {
        color: #4e9bdd;
        font-size: 17px;
        margin-bottom: 44px;
        text-align: center;
    }
    .letter_detail {
        margin-top: 23px;
        // position: absolute;
        // margin-left: -556px;
        // left:50%;
        // text-align: center;
        // padding-left: 50%;
    }
    .company_envri {
        color: #4e9bdd;
        font-size: 17px;
        margin: 59px 0 46px 0;
    }
}
.oTeams{
    position: relative;
    height:500px;
    width:100%;
    display: flex;
    justify-content: center;
    margin-top: 400px;
}
.oursTeams {
    width:912px;
}
.mt {
    margin-top: 200px;
}
</style>

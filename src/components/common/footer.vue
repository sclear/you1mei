<template>
  <div class="footer">
      <div class="firstTxt">优秀的文化铸造优秀的产品，优秀的产品依靠优秀的团队。</div>
      <hr>
      <div class="BAH">蜀ICP备：18031383号</div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped >
.footer{
    color:#FCFCFC;
    width:100%;
    height:176px;
    background: url('./../../assets/about/footer.png') no-repeat;
    background-size: 100% 100%;
    padding-top: 45px;
    box-sizing: border-box;
}
.firstTxt{
    font-size: 17px;
    text-align:center;
    margin-bottom: 32px;
}
hr{
    background-color:#535353;
    width:70%;
    margin:0 auto;
    margin-bottom:33px;
    border:none;
    height:1px;
}
.BAH{
    text-align: center;
    font-size: 13px;
    color:#FFFFFF;
}
</style>

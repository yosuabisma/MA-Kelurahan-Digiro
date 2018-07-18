<template>
  <div class="main-page">
    <div class="header-img">
      <div class="backTop spanLeft">
        <img v-bind:src="'src/assets/img/arrow_back_white.svg'" width="24px" height="24px"/>
      </div>
      <div class="info spanRight">
        <img v-bind:src="'src/assets/img/info_white.svg'" v-on:click="gotoPage('/tentang-kelurahan')" width="24px" height="24px"/>
      </div>
    </div>
    <div class="main-content">
      <div class="welcome">
        <center>
          <img v-bind:src="'src/assets/img/group_5.png'" width="234px" height="187px"/>
        </center>
      </div>
      <div class="welcomeFont">
        <center>
          Selamat Datang di Kelurahan Cikajang
        </center>
      </div>
      <center>
        <div class="nextBTN" v-on:click="gotoPage('/detail')"><font class="line24">Lanjutkan</font></div>
      </center>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      },
    }
  }
</script>
<style>
  /*Font*/
  .line24{
    line-height: 24px;
  }
  .header-img{
    padding: 16px 16px;
    background-image: url('headerImg.png');
    height: 180px;
    width: 360px;
    max-height: 180px;
    max-width: 360px;
  }
  .main-content{
    padding: 16px 16px;
  }
  .backTop{
    margin-top: 14px;
  }
  .info{
    margin-top: 114px;
  }
  .spanLeft{
    float: left;
  }
  .spanRight{
    float: right;
  }
  .welcome{
    margin-top: 30px;
  }
  .welcomeFont{
    margin-top: 20px;
    font-size: 20px;
    color:#222222;
    font-weight: bold;
    height: 72px;
  }
  .nextBTN{
    background-color: #4286f5;
    border-radius: 8px;
    width: 328px;
    height: 50px;
    font-size: 20px;
    color: #ffffff;
    padding: 11px;
    margin-top: 63px;
  }
</style>

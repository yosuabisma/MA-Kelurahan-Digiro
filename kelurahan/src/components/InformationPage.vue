<template>
  <div class="information-page">
    <!--div class="backTop">
      <img class="blackArrow" v-bind:src="'src/assets/img/arrow_back.svg'"  v-on:click="gotoPage('/')" width="24px" height="24px"/>
    </div-->
    <div class="titleInfo">
      Tentang Kelurahan
    </div>
    <div class="detailInfo">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in nunc urna. Morbi eget mauris nulla. Morbi nulla diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in nunc urna.
    </div>
    <div class="infoDev">
      <font class="size16 spanLeft2" style="line-height:22px;">Dibuat Oleh</font>
      <font class="size16 spanRight2" style="margin-right:55px;line-height:22px;"><b>PT Kelier Biru Warna</b></font><br/>
      <font class="size16 spanLeft2" style="line-height:22px;">Versi Terbaru</font>
      <font class="size16 spanRight2" style="margin-right:182px;line-height:22px;"><b>1.0</b></font><br/>
      <font class="size16 spanLeft2" style="line-height:22px;">Kontak</font>
      <font class="size16 spanRight2" style="margin-right:59px;line-height:22px;"><b>Kelurahan@digiro.in</b></font><br/>
    </div>
    <div class="btnSyarat">
      <font class="spanLeft2">Syarat & Ketentuan</font><img class="spanRight2" v-bind:src="'src/assets/img/arrow_purple.svg'" style="margin-left:178px;" width="16px" height="16px"/>
    </div>
    <br/>
    <div class="btnKebijakan">
      <font class="spanLeft2">Kebijakan Privasi</font><img class="spanRight2" v-bind:src="'src/assets/img/arrow_purple.svg'" style="margin-left:193px;" width="16px" height="16px"/>
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
  .size16{
    font-size: 16px;
  }
  .information-page{
    padding: 16px 16px;
  }
  .blackArrow{
    -webkit-filter: invert(100%); /* Safari/Chrome */
    filter: invert(100%);
  }
  .titleInfo{
    font-size: 30px;
    font-weight: bold;
    margin-top: 16px;
  }
  .detailInfo{
    margin-top: 16px;
    font-size: 16px;
  }
  .infoDev{
    margin-top: 37px;
  }
  .btnSyarat{
    margin-top: 53px;
    font-size: 16px;
  }
  .btnKebijakan{

    margin-top: 34px;
    font-size: 16px;
  }
  .spanLeft2{
    float: left;
  }
  .spanRight2{
    float: right;
  }
</style>

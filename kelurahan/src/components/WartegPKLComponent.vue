<template>
  <div>
    <div v-if="showDetail===false" class="list-page-2">
      <div class="backTop">
        <img class="blackArrow" v-bind:src="'src/assets/img/arrow_back.svg'"  v-on:click="gotoPage('/')" width="24px" height="24px"/>
      </div>
      <div class="titleInfo black">
        Daftar Warteg / PKL
      </div>
    </div>
    <div v-if="showDetail===false" class="det">
      <div v-if="showDetail===false" v-for="warteg in wartegs" class="warteg-component">
        <div v-on:click="selectWarteg(warteg.idWarteg)">
          <table>
            <tr>
              <td>
                <img class="icon-warteg" v-bind:src="'src/assets/img-warteg/'+warteg.gambar" />
              </td>
              <td class="warteg-ket">
                <b>{{warteg.nama}}</b>
                <div class="alamat">
                  {{warteg.alamat}}
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="warteg-full" v-if="showDetail===true">
      <div class="list-page-2">
        <div class="backTop">
          <img class="blackArrow" v-bind:src="'src/assets/img/arrow_back.svg'"  v-on:click="showDetail=false;isPause=false;" width="24px" height="24px"/>
        </div>
        <div class="titleInfo black">
          Detail Informasi
        </div>
      </div>
      <div class="overflow-detail">
        <div class="bg-img-warteg">
          <img height="180px" width="360px" v-bind:src="'src/assets/carousel-warteg/'+wartegs[selected].pic" />
          <center><h1 class="warteg-name">{{wartegs[selected].nama}}</h1></center>
        </div>
        <center>
          <div class="keterangan-warteg">
            {{wartegs[selected].deskripsi}}
          </div>
        </center>
        <div class="pelengkap">
          <table>
            <tr>
              <td><img v-bind:src="'src/assets/img/home_off.svg'" width="24px" height="24px"/></td>
              <td><font style="font-weight:bold;margin-left:3px;">Alamat</font></td>
            </tr>
          </table>
          <br/>
          <font class="gray">{{wartegs[selected].alamat}}</font>
          <table style="margin-top:20px;">
            <tr>
              <td><img v-bind:src="'src/assets/img/jam_off.svg'" width="24px" height="24px"/></td>
              <td><font style="font-weight:bold;margin-left:3px;">Jam Operasional</font></td>
            </tr>
          </table>
          <table class="gray">
            <tr>
              <td>
                <div style="margin-top:8px;" v-for="jam in wartegs[selected].jams">
                  {{jam.hari}}
                </div>
              </td>
              <td>
                <div style="margin-top:8px;margin-left:20.5px;" v-for="jam in wartegs[selected].jams">
                  {{jam.pukul}}
                </div>
              </td>
            </tr>
          </table>
          <!--font>{{wartegs[selected].alamat}}</font-->
          <div class="menu">
            <font class="black"><b>Menu</b></font>
            <div class="lifeline">
              <table>
                <tr>
                  <td>
                    <img v-bind:src="'src/assets/img/sound_on.svg'" width="24px" height="24px"/>
                  </td>
                  <td style="width:129px;padding-left:8px;">
                    <!--line audio-->
                    <vue-slider v-model="audio"
                    :value="audio"
                    :min="0"
                    :max="100"
                    :dotSize="8"
                    :width="129"
                    :height="4"
                    :tooltip=false
                    :sliderStyle="{backgroundColor:'#4286f5'}"
                    :processStyle="{backgroundColor:'#4286f5'}"
                    ></vue-slider>
                  </td>
                  <td style="padding-left:8px;">
                    <img v-if="isPause===false" @click="isPause=true;" v-bind:src="'src/assets/img/play_on.svg'" width="24px" height="24px"/>
                    <img v-if="isPause===true" @click="isPause=false;" v-bind:src="'src/assets/img/pause_on.svg'" width="24px" height="24px"/>
                  </td>
                </tr>
              </table>
            </div>
            <!--START - Bahan Baku-->
            <div class="baku gray">
              <table>
                <tr>
                  <td>Bahan Baku: </td>
                  <td>
                    <font v-for="(w,index) in wartegs[selected].bahanBaku">
                      {{" " + w.item}}<span v-if="index<wartegs[selected].bahanBaku.length-1">,</span>
                    </font>
                  </td>
                </tr>
              </table>
            </div>
            <div class="baku gray">
              <table>
                <tr>
                  <td>Bahan Baku Segar: </td>
                  <td>
                    <font v-for="(w,index) in wartegs[selected].bahanBakuSegar">
                      {{" " + w.item}}<span v-if="index<wartegs[selected].bahanBakuSegar.length-1">,</span>
                    </font>
                  </td>
                </tr>
              </table>
            </div>
            <!--END - Bahan Baku-->
            <div class="konsultan">
              <center>
                <p><b>Konsultan</b></p>
                <img v-bind:src="'src/assets/img-consultant/'+wartegs[selected].konsultan[0].foto" height="50px" width="50px" style="margin-top:16px;margin-bottom:16px;" />
                <p><b>{{wartegs[selected].konsultan[0].nama}}</b></p>
                <div @click="loginPopUp()" v-if="wartegs[selected].isKontrak===false" class="nextBTN" v-on:click="gotoPage('/detail')" style="margin-top:16px;"><font class="kontrakSaya">Kontrak Saya</font></div>
                <div @click="loginPopUp()" v-if="wartegs[selected].isKontrak===true" class="nextBTN" v-on:click="gotoPage('/detail')" style="margin-top:16px;"><font class="kontrakSaya">Sedang Dikontrak</font></div>
              </center>
            </div>
            <!--START Modal-->
            <pop-comp v-if="!showLogin">
                <div class="slot-header" slot="header" style="margin-top:-24px;">
                    <!-- <i class="icon-close" @click="!loginPopUp()"></i> -->
                    <span class="close" @click="!loginPopUp()">x</span><br/>
                    <center><font style="font-size:20px;color:#222222;"><b>How it Works</b></font></center>
                </div>
                <div class="slot-body" slot="body">
                    <div class="slot-body-text-container">
                      <center style="font-size:13px;color:#222222;padding:45px 45px;">
                        Lakukan langkah di bawah ini untuk melakukan
                        kontrak/putus kontrak dengan konsultan:<br/>
                        1. Buka MicroApps Polling pada link ini:
                        www.mapollingprodusen.id<br/>
                        2. Masuk dengan akun yang Anda miliki<br/>
                        3. Pilih menu “putus kontrak” untuk membatal
                        kan kontrak dengan konsultan<br/>
                        4. Jika Anda ingin melakukan Kontrak dengan
                        konsultan;<br/>
                        > silakan berkonsultasi secara langsung<br/>
                        > datang konsultan pada warteg yang menjadi
                        tanggung jawabnya
                      </center>
                    </div>
                </div>
                <div class="slot-footer" slot="footer">
                    <div class="slot-footer-text-container">
                        <center>
                          <div  v-if="wartegs[selected].isKontrak===false" style="width:100px;height:35px;padding:8px 8px;font-size:16px;color:#4286f5;border-radius:8px;border:1px solid #4286f5;" @click="showBerhasilFunc()">
                            OK
                          </div>
                          <div  v-if="wartegs[selected].isKontrak===true" style="width:100px;height:35px;padding:8px 8px;font-size:16px;color:#4286f5;border-radius:8px;border:1px solid #4286f5;" @click="!loginPopUp()">
                            OK
                          </div>
                        </center>
                    </div>
                </div>
            </pop-comp>
            <!--END Modal-->

            <!--START Modal Berhasil Dikontrak-->
            <success-comp v-if="!showBerhasil">
                <div class="slot-header" slot="header" style="margin-top:-24px;">
                    <!-- <i class="icon-close" @click="!loginPopUp()"></i> -->
                </div>
                <div class="slot-body" slot="body">
                    <div class="slot-body-text-container">
                      <center>
                        <font style="font-size:20px;color:#888888;"><b>Berhasil Kontrak</b></font>
                      </center>
                    </div>
                </div>
                <div class="slot-footer" slot="footer">
                    <div class="slot-footer-text-container">
                        <center>
                          <div style="float:right;margin-top:38px;padding:16px 16px;font-size:16px;color:#4286f5;" @click="isKontrakTrue(selected)">
                            OK
                          </div>
                        </center>
                    </div>
                </div>
            </success-comp>
            <!--END Modal-->

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import vueSlider from 'vue-slider-component';
  import PopComp from './PopUpComponent';
  import SuccessPopComp from './SuccessPopUpComponent';
  export default {
    data(){
      return{
        showDetail:false,
        selected:null,
        audio:0,
        isPause:false,
        showLogin:true,
        showBerhasil:true,
        wartegs: [
          {
            idWarteg:1,
            nama:"Warteg Bahari",
            konsultan:[
              {nama:"Yadi Komaladi", foto:"konsultan.png"}
            ],
            alamat:"Jl.Cikajang no.16, Jakarta Selatan",
            gambar:"group.png",
            pic:"1-1.png",
            isKontrak:false,
            jams:[
              {hari:"Senin-Jumat", pukul:"08.00 s.d. 20.00"},
              {hari:"Sabtu-Minggu", pukul:"10.00 s.d. 20.00"},
            ],
            bahanBaku:[
              {item:"Kecap"},
              {item:"Saos"},
              {item:"Minyak"},
            ],
            bahanBakuSegar:[
              {item:"Wortel"},
              {item:"Buncis"},
              {item:"Jagung"},
              {item:"Sawi"},
            ],
            deskripsi:"Warteg Bahari adalah lorem ipsum dolor sit amet asdasdawdawdawda asd asd as dasd as daae aefsfsdfsdfs dfs efsdfs s sf segsegs sf sefs seefs"
          },
          {
            idWarteg:2,
            nama:"Warteg Bahari 2",
            konsultan:[
              {nama:"Yadi Komaladi", foto:"konsultan.png"}
            ],
            alamat:"Jl.Cikajang no.16, Jakarta Selatan",
            gambar:"group.png",
            pic:"1-1.png",
            isKontrak:false,
            jams:[
              {hari:"Senin-Jumat", pukul:"08.00 s.d. 20.00"},
              {hari:"Sabtu-Minggu", pukul:"10.00 s.d. 20.00"},
            ],
            bahanBaku:[
              {item:"Kecap"},
              {item:"Saos"},
              {item:"Minyak"},
            ],
            bahanBakuSegar:[
              {item:"Wortel"},
              {item:"Buncis"},
              {item:"Jagung"},
              {item:"Sawi"},
            ],
            deskripsi:"Warteg Bahari 2 adalah lorem ipsum dolor sit amet asdasdawdawdawda asd asd as dasd as daae aefsfsdfsdfs dfs efsdfs s sf segsegs sf sefs seefs"
          },
          {
            idWarteg:3,
            nama:"Warteg Bahari 3",
            konsultan:[
              {nama:"Yadi Komaladi", foto:"konsultan.png"}
            ],
            alamat:"Jl.Cikajang no.16, Jakarta Selatan",
            gambar:"group.png",
            pic:"1-1.png",
            isKontrak:false,
            jams:[
              {hari:"Senin-Jumat", pukul:"08.00 s.d. 20.00"},
              {hari:"Sabtu-Minggu", pukul:"10.00 s.d. 20.00"},
            ],
            bahanBaku:[
              {item:"Kecap"},
              {item:"Saos"},
              {item:"Minyak"},
            ],
            bahanBakuSegar:[
              {item:"Wortel"},
              {item:"Buncis"},
              {item:"Jagung"},
              {item:"Sawi"},
            ],
            deskripsi:"Warteg Bahari 3 adalah lorem ipsum dolor sit amet asdasdawdawdawda asd asd as dasd as daae aefsfsdfsdfs dfs efsdfs s sf segsegs sf sefs seefs"
          },
          {
            idWarteg:4,
            nama:"Warteg Bahari 4",
            konsultan:[
              {nama:"Yadi Komaladi", foto:"konsultan.png"}
            ],
            alamat:"Jl.Cikajang no.16, Jakarta Selatan",
            gambar:"group.png",
            pic:"1-1.png",
            isKontrak:false,
            jams:[
              {hari:"Senin-Jumat", pukul:"08.00 s.d. 20.00"},
              {hari:"Sabtu-Minggu", pukul:"10.00 s.d. 20.00"},
            ],
            bahanBaku:[
              {item:"Kecap"},
              {item:"Saos"},
              {item:"Minyak"},
            ],
            bahanBakuSegar:[
              {item:"Wortel"},
              {item:"Buncis"},
              {item:"Jagung"},
              {item:"Sawi"},
            ],
            deskripsi:"Warteg Bahari 4 adalah lorem ipsum dolor sit amet asdasdawdawdawda asd asd as dasd as daae aefsfsdfsdfs dfs efsdfs s sf segsegs sf sefs seefs"
          },
          {
            idWarteg:5,
            nama:"Warteg Bahari 5",
            konsultan:[
              {nama:"Yadi Komaladi", foto:"konsultan.png"}
            ],
            alamat:"Jl.Cikajang no.16, Jakarta Selatan",
            gambar:"group.png",
            pic:"1-1.png",
            isKontrak:false,
            jams:[
              {hari:"Senin-Jumat", pukul:"08.00 s.d. 20.00"},
              {hari:"Sabtu-Minggu", pukul:"10.00 s.d. 20.00"},
            ],
            bahanBaku:[
              {item:"Kecap"},
              {item:"Saos"},
              {item:"Minyak"},
            ],
            bahanBakuSegar:[
              {item:"Wortel"},
              {item:"Buncis"},
              {item:"Jagung"},
              {item:"Sawi"},
            ],
            deskripsi:"Warteg Bahari 5 adalah lorem ipsum dolor sit amet asdasdawdawdawda asd asd as dasd as daae aefsfsdfsdfs dfs efsdfs s sf segsegs sf sefs seefs"
          },
        ],
      }
    },
    components: {
      vueSlider,
      'pop-comp': PopComp,
      'success-comp': SuccessPopComp
    },
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      },
      isKontrakTrue(selected){
        this.wartegs[selected].isKontrak = true;
        this.showBerhasil = !this.showBerhasil;
      },
      selectWarteg(idWarteg){
        this.selected=idWarteg-1;
        this.showDetail=true;
      },
      showBerhasilFunc(){
        this.showLogin = !this.showLogin;
        this.showBerhasil = !this.showBerhasil;
      },
      loginPopUp() {
        this.showLogin = !this.showLogin;
      },
    }
  }
</script>
<style>
  .kontrakSaya{
    font-size: 16px;
    line-height: 24px;
  }
  /*navigator*/
  .black{
    color:#222222;
  }
  .gray{
    color:#888888;
  }
  .list-page-2{
    padding: 16px 16px;
  }
  .backTop{
    margin-top: 14px;
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
  .det{
    overflow:auto;
    height: 517px;
  }
  .warteg-component{
    border-top: 2px solid #dddddd;
    padding: 16px 16px;
    font-size: 16px;
    color: #888888;
  }
  .alamat{
    margin-top: 5px;
    font-size: 12px;
  }
  .warteg-ket{
    padding-left: 16px;
  }
  .icon-warteg{
    height:70px;
    width:70px;
    border-radius: 8px;
  }
  .bg-img-warteg{
    margin-top: 8px;
    margin-left: -16px;
  }
  .warteg-name{
    font-size: 20px;
    margin-top: 16px;
    font-weight: bold;
  }
  .keterangan-warteg{
    width:277px;
    color:#888888;
    margin-top: 8px;
  }
  .pelengkap{
    margin-top: 39px;
    font-size:13px;
  }
  .menu{
    margin-top: 34px;
    font-size: 13px;
  }
  .lifeline{
    margin-top: 8px;
  }
  .baku{
    margin-top: 8px;
  }
  /*FOR OVERFLOW*/
  .overflow-detail{
    height: 520px;
    max-height: 520px;
    overflow: auto;
    padding: 16px 16px;
  }
  .konsultan{
    font-size: 13px;
    font-weight: bold;
    margin-top: 34px;
    color: #222222;
    padding-bottom: 16px;
  }
  .nextBTN{
    background-color: #4286f5;
    border-radius: 8px;
    width: 328px;
    height: 50px;
    font-size: 20px;
    color: #ffffff;
    padding: 11px;
    margin-top: 79px;
  }

  /* MODAL LOGIN POPUP */
  span.close {
      position: relative;
      /*right: -36em;*/
      float:right;
      padding-right: 16px;
      cursor: pointer;
  }

  i.icon-close {
  position: relative;
  /*right: -36em;*/
  cursor: pointer;
  }
  .slot-body {
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 30px;
      margin-top: -45px;
  }
  .slot-text-header {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 20px;
  }
  .slot-text-header + p {
      color: #888888;
      /*line-height: 16px;*/
  }
  .slot-text-body {
      width: 223px;
  }
  .slot-body-text-container {
    padding: 25px 0px;
  }
  .slot-footer {
      margin-top: -80px;
      padding: 16px 16px;
  }
  .slot-footer-text-container > p {
      margin-left: 0px;
      margin-bottom: 20px;
  }
  .daftar-container {
      display: flex;
      justify-content: space-between;
  }
  .daftar-container p {
      width: 306px;
      color: #888888;
      line-height: 16px;
  }


</style>

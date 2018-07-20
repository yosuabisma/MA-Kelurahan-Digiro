<template>
  <div>
    <div v-if="showDetail===false" class="list-page-2">
      <!--div class="backTop">
        <img class="blackArrow" v-bind:src="'src/assets/img/arrow_back.svg'"  v-on:click="gotoPage('/')" width="24px" height="24px"/>
      </div-->
      <div class="titleInfo black">
        Daftar UKM
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
        <!--div class="backTop">
          <img class="blackArrow" v-bind:src="'src/assets/img/arrow_back.svg'"  v-on:click="showDetail=false;isPause=false;" width="24px" height="24px"/>
        </div-->
        <div class="titleInfo black">
          Detail Informasi
        </div>
      </div>

      <div class="overflow-detail">
        <div style="margin-left:-16px;margin-right:-16px;">
          <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="360"
                img-height="180"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
          >
              <!-- Slides with image only -->
              <b-carousel-slide>
                <img slot="img" height="180px" width="360px" v-bind:src="'src/assets/carousel-warteg/'+wartegs[selected].pic[0].fotoPic" />
              </b-carousel-slide>
              <b-carousel-slide>
                <img slot="img"  height="180px" width="360px" v-bind:src="'src/assets/carousel-warteg/'+wartegs[selected].pic[1].fotoPic" />
              </b-carousel-slide>
              <b-carousel-slide>
                <img slot="img" height="180px" width="360px" v-bind:src="'src/assets/carousel-warteg/'+wartegs[selected].pic[2].fotoPic" />
              </b-carousel-slide>
          </b-carousel>

        </div>
        <div class="bg-img-warteg">
          <h1 class="warteg-name">{{wartegs[selected].nama}}</h1>
        </div>
        <div class="keterangan-warteg">
          {{wartegs[selected].deskripsi}}
        </div>
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
              <audio id="track" ontimeupdate="document.getElementById('tracktime').innerHTML = Math.floor(this.currentTime) + ' / ' + Math.floor(this.duration);" hidden>
                <source v-bind:src="'src/assets/sound/funny_sound.mp3'" type="audio/mpeg">
              </audio>
              <!--h6>Audio {{audio}} %</h6>
              <span id="tracktime">0 / 0</span-->
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
                    <div @click="timeUpdate()">
                      <div onclick="document.getElementById('track').play();">
                        <img v-if="isPause===false" @click="isPause=true;" v-bind:src="'src/assets/img/play_on.svg'" width="24px" height="24px"/>
                      </div>
                    </div>
                    <div onclick="document.getElementById('track').pause();">
                      <img v-if="isPause===true" @click="isPause=false;" v-bind:src="'src/assets/img/pause_on.svg'" width="24px" height="24px"/>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <!--START - Bahan Baku-->
            <div class="baku gray">
              <div style="padding-top:8px;">
                <font>Bahan Baku:</font>
              </div>
              <div style="padding-top:6px;">
                <font v-for="(w,index) in wartegs[selected].bahanBaku">
                  {{" " + w.item}}<span v-if="index<wartegs[selected].bahanBaku.length-1">,</span>
                </font>
              </div>
              <div style="padding-top:8px;">
                <font style="padding-top:8px;">Bahan Baku Segar:</font>
              </div>
              <div style="padding-top:6px;">
                <font v-for="(w,index) in wartegs[selected].bahanBakuSegar">
                  {{" " + w.item}}<span v-if="index<wartegs[selected].bahanBakuSegar.length-1">,</span>
                </font>
              </div>
            </div>
            <!--END - Bahan Baku-->
            <div class="konsultan">
              <center>
                <p><b>Konsultan</b></p>
                <img @click="showImagePic()" v-bind:src="'src/assets/img-consultant/'+wartegs[selected].konsultan[0].foto" height="50px" width="50px" style="margin-top:16px;margin-bottom:16px;border-radius:100%" />
                <p><b>{{wartegs[selected].konsultan[0].nama}}</b></p>
                <div @click="loginPopUp()" v-if="wartegs[selected].isKontrak===false" class="nextBTN" v-on:click="gotoPage('/detail')" style="margin-top:16px;"><font class="kontrakSaya">Kontrak Saya</font></div>
                <div @click="loginPopUp()" v-if="wartegs[selected].isKontrak===true" class="nextBTN" v-on:click="gotoPage('/detail')" style="margin-top:16px;"><font class="kontrakSaya">Sedang Dikontrak</font></div>
              </center>
            </div>
            <!--START Modal-->
            <pop-comp v-if="!showLogin">
                <div class="slot-header" slot="header" style="margin-top:-24px;">
                    <!-- <i class="icon-close" @click="!loginPopUp()"></i> -->
                    <!--span class="close" @click="!loginPopUp()"><img v-bind:src="'src/assets/img/close_off.svg'"/></span><br/-->
                    <center><font style="font-size:20px;color:#222222;"><b>How it Works</b></font></center>
                </div>
                <div class="slot-body" slot="body">
                    <div class="slot-body-text-container">
                      <center style="font-size:16px;color:#222222;padding:45px 45px;">
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
                          <div  v-if="wartegs[selected].isKontrak===false" style="margin-left:40px;margin-bottom:8px;float:left;width:100px;height:35px;padding:8px 8px;font-size:16px;color:#888888;border-radius:8px;border:1px solid #888888;" @click="!loginPopUp()">
                            Batal
                          </div>
                          <div  v-if="wartegs[selected].isKontrak===false" style="margin-right:40px;margin-bottom:8px;float:right;width:100px;height:35px;padding:8px 8px;font-size:16px;color:#4286f5;border-radius:8px;border:1px solid #4286f5;" @click="isKontrakTrue(selected);">
                            Lanjut
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
                  <div style="padding:10px 10px;float:right;" class="close" @click="!showBerhasilFunc()">
                    <img v-bind:src="'src/assets/img/close_off.svg'"/>
                  </div><br/>
                </div>
                <div class="slot-body" slot="body">
                    <div class="slot-body-text-container">
                      <center>
                        <img  style="margin-top:16px;" v-bind:src="'src/assets/img/group_8.svg'"/>
                        <div style="margin-top:22px;">
                          <p style="font-size:20px;color:#888888;padding-bottom:22px;"><b>Berhasil Kontrak</b></p>
                        </div>
                      </center>
                    </div>
                </div>
                <div class="slot-footer" slot="footer">
                </div>
            </success-comp>
            <!--END Modal-->

            <!--START Modal Image-->
            <img-comp v-if="!showImage">
                <div class="slot-header" slot="header">
                  <div class="close" >
                    <!--img style="float:right;padding-right:8px;" v-bind:src="'src/assets/img/close_off.svg'"/-->
                  </div>
                </div>
                <div class="slot-body" slot="body">
                    <div class="slot-body-text-container">
                      <img @click="!showImagePic()" style="float:right;padding-right:8px;position:relative;z-index:2;top:30px;" v-bind:src="'src/assets/img/close_on.svg'"/>
                      <center>
                        <img v-bind:src="'src/assets/img-consultant/'+wartegs[selected].konsultan[0].foto" height="200px" width="200px"/>
                      </center>
                    </div>
                </div>
                <div class="slot-footer" slot="footer">
                </div>
            </img-comp>
            <!--END Modal-->

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import vueSlider from 'vue-slider-component';
  // import Swiper from 'vue-swiper';
  import BootstrapVue from 'bootstrap-vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';
  import bCarouselSlide from 'bootstrap-vue/es/components/carousel/carousel-slide';
  /*import { Carousel, CarouselItem } from 'vue-l-carousel';*/
  import PopComp from './PopUpComponent';
  import SuccessPopComp from './SuccessPopUpComponent';
  import ImagePopComp from './ImagePopUpComponent';
  export default {
    data(){
      return{
        showDetail:false,
        selected:null,
        audio:0,
        isPause:false,
        showLogin:true,
        showBerhasil:true,
        showImage:true,
        slide: 0,
        sliding: null,
        interv:0,
        wartegs: [
          {
            idWarteg:1,
            nama:"Warteg Bahari",
            konsultan:[
              {nama:"Yadi Komaladi", foto:"konsultan.png"}
            ],
            alamat:"Jl.Cikajang no.16, Jakarta Selatan",
            gambar:"group.png",
            pic:[
              {fotoPic:"1-1.png"},
              {fotoPic:"1-2.png"},
              {fotoPic:"1-3.png"},
            ],
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
            pic:[
              {fotoPic:"1-1.png"},
              {fotoPic:"1-2.png"},
              {fotoPic:"1-3.png"},
            ],
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
            pic:[
              {fotoPic:"1-1.png"},
              {fotoPic:"1-2.png"},
              {fotoPic:"1-3.png"},
            ],
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
            pic:[
              {fotoPic:"1-1.png"},
              {fotoPic:"1-2.png"},
              {fotoPic:"1-3.png"},
            ],
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
            pic:[
              {fotoPic:"1-1.png"},
              {fotoPic:"1-2.png"},
              {fotoPic:"1-3.png"},
            ],
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
      'b-carousel': bCarousel,
      'b-carousel-slide': bCarouselSlide,
      // Swiper,
      /*'carousel': Carousel,
      'carousel-item': CarouselItem,*/
      vueSlider,
      'pop-comp': PopComp,
      'success-comp': SuccessPopComp,
      'img-comp': ImagePopComp,

    },
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      },
      isKontrakTrue(selected){
        this.wartegs[selected].isKontrak = true;
        this.showBerhasil = !this.showBerhasil;
        this.showLogin = !this.showLogin;
      },
      selectWarteg(idWarteg){
        this.selected=idWarteg-1;
        this.showDetail=true;
      },
      showBerhasilFunc(){

        this.showBerhasil = !this.showBerhasil;
      },
      loginPopUp() {
        this.showLogin = !this.showLogin;
      },
      showImagePic(){
        this.showImage = !this.showImage;
      },
      onSlideChangeStart (currentPage) {
        console.log('onSlideChangeStart', currentPage);
      },
      onSlideChangeEnd (currentPage) {
        console.log('onSlideChangeEnd', currentPage);
      },
      timeUpdate(){
        // this.audio= (100/Math.floor(document.getElementById('track').duration))*Math.floor(document.getElementById('track').currentTime);
        var self = this;
        if(self.audio==100){
          this.audio=0;
        }
        this.interv = setInterval(function(){
            if(self.audio == 100){
                this.audio = 0;
            }else{
              self.audio=(100/Math.floor(document.getElementById('track').duration))*Math.floor(document.getElementById('track').currentTime);
            }
        },500);
      },
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      }
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
    font-size: 16px;
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
  }
  .warteg-name{
    font-size: 20px;
    margin-top: 16px;
    font-weight: bold;
  }
  .keterangan-warteg{
    width:277px;
    color:#888888;
    font-size: 13px;
    margin-top: 8px;
  }
  .pelengkap{
    margin-top: 39px;
    font-size:16px;
  }
  .menu{
    margin-top: 34px;
    font-size: 16px;
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
    font-size: 16px;
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
  /*SWIPER*/
  .swiper .swiper-pagination .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #000;
    opacity: .2;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
}

</style>

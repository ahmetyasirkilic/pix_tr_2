<template>
<c-box 
    v-bind="mainStyles[colorMode]">
    <div id="app" style="z-index:5; background-color:gray; padding: 1em 0; margin-bottom:0px; 
    transition: background-image 1s ease-in-out;" :class="{ bg : toggleClicked }">
      <div id="nav">
      <CLink class="appLogoLink"  href="/">
          <img :src="appLogoSrc" class="appLogo" alt="instapix brand logo">
      </CLink>
      
      <c-box class="navbarRightList right">
        <CLink class="appLogoLink" href="/">Nedir?</CLink>
        <CLink class="appLogoLink" href="/">Sipariş Takip</CLink>
        <CLink class="appLogoLink" href="/"><font-awesome-icon icon="user" style="font-size:1.5em;" /></CLink>
        <CIconButton
            mr="3"
            :icon="colorMode === 'light' ? 'moon' : 'sun'"
            @click="toggleColorMode"
            :aria-label="`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`"
             ref="switchButton"
          />
      </c-box>
    </div>

    <c-box as="h1" class="nav" style="text-align: left; margin-left: 50px;">
      <CHeading style="font-size:3em; font-weight: bold; margin-top:2em;">
        <span style="color:#e81224;">Anılara dokun,</span> <br>
        Sosyal Yolculuğunun Kitabı ❤️</CHeading>
        <CHeading as="h2" size="md" class="nav" style="font-family:Nunito !important; line-height:27px; font-weight: normal; text-align: left; margin-top: 10px;">
          <span style="font-weight:bold;">Dünyada ilk ve tek,</span><br>
          Instagram paylaşımlarınla hazırlayabileceğin kitap<br>
          <c-list styleType="disc">
            <c-list-item>Eşsiz bir albüm 📕</c-list-item>
            <c-list-item>İyi ki varsın demenin en güzel yolu 🎁</c-list-item>
          </c-list>
        </CHeading>
    </c-box>


     </div>
     <!-- First Action -->
         <c-grid w="100%" template-columns="repeat(2, 1fr)" gap="0"
          style="z-index:4; margin-top:0px; position:relative; top: -2em;">
          <c-box w="100%" bg="blue.300">
            <img :src="appBg2" alt="instagram giriş" style="width: auto;">
          </c-box>
          
          <c-box w="100%" style="display: grid; padding-right:50px; font-weight:100;">
            <CHeading as="h3" style="text-align:right; align-self:center;">Fotoğraflarına nasıl <br>erişmek istersin?*
            </CHeading>
            <c-button-group :spacing="2">
              <c-button variant-color="blue" variant="ghost" style="float:right;margin-left:5px;">
                Instagram ile giriş
              </c-button>
              <c-button variant-color="blue" variant="ghost" style="float:right;">
                Kullanıcı adı
              </c-button>
            </c-button-group>  
            <c-stack>
              
              <c-alert status="info" variant="solid" style="max-width: 650px; margin-left:auto;">
                <c-alert-icon />
                  <c-alert-title style="font-weight:400;">
                    * Instapix gizliliğinize önem verir. Hiçbir şifre, fotoğraf, kişisel bilgileri depolamaz. 
                  </c-alert-title>
              </c-alert>
            </c-stack>
          </c-box>
    </c-grid>

    <!-- Second Action -->
         <c-grid w="100%" template-columns="repeat(1, 1fr)" gap="0" style="z-index:4; margin-top:0px;
          position:relative; top: -2em; align-self: center; margin-top:50px;">
          <c-box w="100%" style="display: grid; padding-left:50px;  font-weight:100;">
            
            <c-grid w="100%" template-columns="repeat(2, 2fr)">
              <c-box w="100%" style="margin-bottom:15px;">
                <CHeading as="h3" style="text-align:left; align-self:center;">Gönderileri seçmek ister misin?
                <CHeading as="h4" size="md" style="font-weight:100; margin-top:10px;"><font-awesome-icon icon="bookmark"/> 170/175 gönderiden seçili</CHeading>
              </CHeading>
              
            
              </c-box>
              <c-box w="100%" style="z-index:10; margin-top:15px;">
                 <div style="margin-right:50px; display:flex; float:right;">
                   <c-stack :spacing="4" mr="10" should-wrap-children is-inline>
                    <c-number-input :default-value="15" clamp-value-on-blur :max="30" style="max-width:90px;">
                    <c-number-input-field />
                    <c-number-input-stepper>
                      <c-number-increment-stepper />
                      <c-number-decrement-stepper />
                    </c-number-input-stepper>
                  </c-number-input>
                  <c-icon-button aria-label="Search database" icon="random" />
                  </c-stack>

                   <c-menu>
                      <c-menu-button right-icon="chevron-down">
                        Yıllar
                      </c-menu-button>
                      <c-menu-list>
                        <c-menu-item>2018</c-menu-item>
                        <c-menu-item>2019</c-menu-item>
                        <c-menu-item>2020</c-menu-item>
                      </c-menu-list>
                    </c-menu>
                 </div>
              </c-box>
            </c-grid>

            <div class="scrolling-wrapper">
            <carousel lazyLoad="true" :responsive="{0:{items:15,nav:false},600:{items:4,nav:false}}">
              <div class="card"><img src="./assets/hover.png"></div>
              <div class="card" style="display:none;"><img src="./assets/hover.png"></div>
              <div class="card"><img src="./assets/hover.png"></div>
              <div class="card"><img src="./assets/hover.png"></div>
              <div class="card"><img src="./assets/hover.png"></div>
              <div class="card"><img src="./assets/hover.png"></div>
              <div class="card"><img src="./assets/hover.png"></div>
              <div class="card"><img src="./assets/hover.png"></div>
              <div class="card"><img src="./assets/hover.png"></div>
              <div class="card"><img src="./assets/hover.png"></div>
              <div class="card"><img src="./assets/hover.png"></div>
              <div class="card"><img src="./assets/hover.png"></div>
              <div class="card"><img src="./assets/hover.png"></div>
              <div class="card"><img src="./assets/hover.png"></div>
              <div class="card"><img src="./assets/hover.png"></div>
              <div class="card"><img src="./assets/hover.png"></div>
              <div class="card"><img src="./assets/hover.png"></div>
              <div class="card"><img src="./assets/hover.png"></div>
            </carousel>
            </div>
          </c-box>
    </c-grid>

    <!--  -->
         <c-grid w="100%" template-columns="repeat(1, 1fr)" gap="0" style="z-index:4; margin-top:0px;
          position:relative; align-self: center;">
          <c-alert
            status="warning"
            variant="top-accent"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            height="200px"
            style="padding:7rem; box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);"
          >
            <font-awesome-icon icon="bolt" style="color:#fbbd08; font-size:3rem;" />
            <c-alert-title :mt="4" :mb="1" fontSize="3rem">
              Harika!
            </c-alert-title>
            <c-alert-description style="font-size:1.5rem;">
              Son bir adım kaldı
            </c-alert-description>
          </c-alert>
         </c-grid>

         <!-- Third Action -->
         <c-grid w="100%" template-columns="repeat(2, 1fr)" gap="0" style="padding-top:40px; padding-left:5rem;">
    
          <c-box w="100%" style="display: grid; padding-right:50px; font-weight:100;">
            <CHeading as="h3" style="align-self:center;">Hangi temayı seversin?
            </CHeading>
            <c-button-group :spacing="2">
              <c-button :_hover="{bg: 'blue.500', color: 'white'}" bg="gray.200" pl="20" pr="20" variant="solid" size="lg" style="">
                Açık
              </c-button>
              <c-button :_hover="{bg: 'blue.500', color: 'white'}" bg="gray.700" color="white" pl="20" pr="20" variant="solid" size="lg" style="">
                Koyu
              </c-button>
            </c-button-group>  
            <c-stack>
              
            </c-stack>
          </c-box>

          <c-box w="100%" bg="blue.300">
            <img :src="appBg3" alt="instapix tema seçim" style="width: auto;">
          </c-box>
    </c-grid>

    <Footer />
    <c-text fontSize="xs" color="rgba(0,0,0,.4)" textAlign="center" mb="2">© 2021 Insta-pix.com. Her Hakkı Saklıdır</c-text>
    </c-box> 
</template>

<script>
import { CBox, CGrid, CLink, CIcon,CButton,CCollapse,CIconButton,CList,CListItem, CListIcon,
CStack,CSwitch,CButtonGroup,CAlert,CAlertIcon,CAlertTitle,CText,CMenu, CNumberInput,
  CNumberInputField,
  CNumberInputStepper,
  CNumberIncrementStepper,
  CNumberDecrementStepper,
  CMenuButton,
  CMenuList,
  CMenuItem,
  CMenuGroup,
  CMenuDivider,
  CMenuOptionGroup,
  CMenuItemOption,
  CAvatarGroup,
  CAvatar,
  CAvatarBadge,
  CModal,
  CModalContent,
  CModalOverlay,
  CModalHeader,
  CModalFooter,
  CModalBody,
  CModalCloseButton,
  CFlex,
  CHeading } from '@chakra-ui/vue'
  import Footer  from "./components/Footer.vue";
import carousel from 'vue-owl-carousel'
export default {
  name: 'App',
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    CBox,
    CGrid, CLink, CIcon,CButton,CCollapse,CIconButton,CHeading,CList,CListItem, CListIcon,CStack,CSwitch,CButtonGroup,
    carousel, CAlert,CAlertIcon,CAlertTitle,Footer,CText,CMenu, CNumberInput,CIconButton,
  CNumberInputField,
  CNumberInputStepper,
  CNumberIncrementStepper,
  CNumberDecrementStepper,
  CMenuButton,
  CMenuList,
  CMenuItem,
  CMenuGroup,
  CMenuDivider,
  CMenuOptionGroup,
  CMenuItemOption,
  },
  data () {
    return {
      show: false,
      toggleClicked: false,
      appLogoSrc: require("./assets/logo.png"),
      appBg2: require("./assets/action-2-bg.png"),
      appBg3: require("./assets/action-3-bg.png"),
      mainStyles: {
        dark: {
          bg: "#1b1b1b",
          color: "whiteAlpha.900"
        },
        light: {
          bg: "white",
          color: "gray.900"
        }
      }
    }
  },
  computed: {
    colorMode() {
      this.toggleClicked = this.toggleClicked ? false : true;
      this.appLogoSrc = this.toggleClicked ? require("./assets/logo.png") : require("./assets/logo-2.png");
      this.appBg2 = this.toggleClicked ? require("./assets/action-2-bg.png") : require("./assets/action-2-bg-dark.png");
      this.appBg3 = this.toggleClicked ? require("./assets/action-3-bg.png") : require("./assets/action-3-bg-dark.png");
      return this.$chakraColorMode();
    },
    theme() {
      return this.$chakraTheme();
    },
    toggleColorMode() {
      return this.$toggleColorMode;
    }
  },
  created() {
   if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.$refs.switchButton.click();
      toggleColorMode();
    }else{
      alert("lightinesss")
    }
  }
}
</script>

<style>
@font-face {
        font-family: "SofiaPro";
        src: url("./assets/fonts/Sofia Pro Medium Az.otf");
    }
    body,
    html,
    a,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    button {
        font-family: 'SofiaPro' !important;
    }
body{
  line-height: 1.4285em;
  color: rgba(0,0,0,.87);
  
}
#app {
  font-family: Futura PT, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url(./assets/main-background.png);
  background-size: auto 100% !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  position: relative;
  display: block;
  min-height: 700px;
  padding: 1em 0em;
  
}

.bg{
  background-image: url(./assets/main-background2.png) !important;
  -webkit-transition: background-image 1s ease-in-out;
  transition: background-image 1s ease-in-out;
}

.bg2{
  background-image: url(./assets/main-background-3.png) !important;
  -webkit-transition: background-image 1s ease-in-out;
  transition: background-image 1s ease-in-out;
}

@media only screen and (min-width:1200px) {
  #nav{
      width: 1127px;
  }
}
@media only screen and (min-width:992px) and (max-width:1199px) {
  #nav{
      width:933px;
  }
}
@media only screen and (min-width:768px) and (max-width:991px) {
  #nav{
      width:723px;
  }
}
@media only screen and (max-width:767px) {
  #nav{
      width:auto !important;
      margin-left:1em!important;
      margin-right:1em!important
  }
  .navbarRightList {
    display: none !important;
  }
  .navbarRightListMobile {
    display: block !important;
  }
}
@media only screen and (min-width:767px) {
  .navbarRightListMobile {
    display: none !important;
  }
}
#nav {
  padding: 15px 30px 30px 30px;
  display: flex;
  font-weight: 400;
  min-height: 2.85714286em;
  align-items: center;
  margin-left: auto !important;
  margin-right: auto !important;
}

#nav a {
  text-decoration: none;
}

#nav a:focus, .navbarMobileButton:focus {
  box-shadow: none !important;
}

.appLogoLink{
  margin: 0 0 -2px;
  padding: .85714286em 1.14285714em;
  font-weight: 700;
}
.appLogo{
  width: auto;
  height: 45px;
}

.right{
  margin-left: auto !important;
  display: flex;
  align-items: center;
}

.card{
   border-radius: 15px;
        cursor: grab;
        overflow: clip;
        padding-top: 0 !important;
        transition: all .2s ease-out;
}
  .card:hover {
        transform: translateY(2px);
        box-shadow: inset 0 2px 5px 1px #ffffff, inset 0 -2px 10px rgba(173, 186, 204, 0.25), 0 1px 3px rgba(0, 21, 64, 0.14), 0 5px 10px rgba(0, 21, 64, 0.05);
    }

        .owl-stage {
        padding-bottom: 15px;
        padding-top: 15px;
        display: table;
    }
    .owl-item{
      display: table-cell;
      margin-right: 15px;
      margin-top: 15px;
      width: auto !important;
      max-height: 150px !important;

    }
        .scrolling-wrapper {
        overflow-x: scroll;
        overflow-y: hidden;
        
        flex-wrap: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;

    }
</style>

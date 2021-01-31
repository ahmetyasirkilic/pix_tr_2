<template>
<div>
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
</template>

<script>
import { CBox, CGrid, CLink, CIcon,CButton,CCollapse,CIconButton,
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

export default {
  name: 'Navbar',
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    CBox,
    CGrid, CLink, CIcon,CButton,CCollapse,CIconButton
  },
  data () {
    return {
      show: false,
      toggleClicked: false,
      appLogoSrc: require("../assets/logo.png"),
      mainStyles: {
        dark: {
          bg: "gray.700",
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
      this.appLogoSrc = this.toggleClicked ? require("../assets/logo.png") : require("../assets/logo-2.png");
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
body{
  line-height: 1.4285em;
  color: rgba(0,0,0,.87);
  
}
#app {
  font-family: Futura PT, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url(../assets/main-background.png);
  background-size: auto 100% !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  position: relative;
  display: block;
  min-height: 700px;
  padding: 1em 0em;
  
}

.bg{
  background-image: url(../assets/main-background2.png) !important;
  -webkit-transition: background-image 5s ease-in-out;
  transition: background-image 5s ease-in-out;
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

#nav a.router-link-exact-active {
  
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
</style>

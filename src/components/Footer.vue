<template>
 <!-- Third Action -->
         <c-grid w="100%" template-columns="repeat(1, 1fr)" gap="0" bg="gray.50" :class="{ footerBg : toggleClicked }" style="
         padding:5rem; padding-left:5rem; margin-bottom:1rem;
         border-top: 1px solid rgba(34,36,38,.15);">
            <c-grid w="100%" template-columns="repeat(2, 3fr)">
                    <c-grid w="100%" template-columns="repeat(2, 2fr)">
                        <c-box w="100%" style="display: flex;">
                            <a href="/">
                                <img src="../assets/logo.png" alt="instapix logo" style="width: auto; height:40px;
                            margin-top:8px;">
                            </a>
                            <a href="https:/instagram.com/instapix_tr" target="_blank">
                                 <img src="../assets/instagram-logo-3.svg" alt="" style="
                            width:3rem; heigth:auto; margin-left: 15px; color:#4183c4;">
                            </a>
                        </c-box>
                        <c-box w="100%" mb="5">
                            <c-heading size="md">Instapix Hakkında</c-heading>
                            <c-list mt="3" style="line-height:1.7rem;">
                                <c-list-item><c-link class="footerLinks" href="#">Instapix Nedir?</c-link></c-list-item>
                                <c-list-item><c-link class="footerLinks" href="#">Sık Sorular Sorular </c-link></c-list-item>
                                <c-list-item><c-link class="footerLinks" href="#">Sipariş Takibi </c-link></c-list-item>
                                <c-list-item><c-link class="footerLinks" href="#">İletişim </c-link></c-list-item>
                                <c-list-item><c-link class="footerLinks" href="#">Kullanım Koşulları </c-link></c-list-item>
                                <c-list-item><c-link class="footerLinks" href="#">Gizlilik Politikası </c-link></c-list-item>
                                </c-list>

                        </c-box>
                    </c-grid>
                    <c-box w="100%" >
                        <c-heading size="md">Bizimle iletişime geçmek istersen? 🥰🤩</c-heading>
                        <c-text size="sm" mt="5" style="">Bize Instagram üzerinden ve <c-link target="_blank" href="mailto:merhaba@instapix.com.tr">merhaba@instapix.com.tr</c-link> mail adresimiz üzerinden ulaşabilirsin.</c-text>
                        <c-heading size="sm" class="divider">Yeniliklerden haberdar olmak için</c-heading>
                        <c-pseudoBox
                            as="input"
                            placeholder="e-posta adresini buraya yazabilirsin"
                            py="2"
                            px="4"
                            bg="gray.200"
                            color="gray.900"
                            border-color="transparent"
                            border-width="2px"
                            rounded="md"
                            mt="5"
                            width="70%"
                            :_focus="{ bg: 'white', borderColor: 'blue.400' }"
                            />
                             <c-button variant-color="blue" variant="ghost" ml="2" mb="1">
                                Kaydol
                            </c-button>
                    </c-box>
            </c-grid>
         </c-grid>

</template>

<script lang="js">
import { CBox, CButton, CGrid, CHStack, CIcon,CList,CListItem,CHeading,CLink,CText,CPseudoBox  } from '@chakra-ui/vue'

export default {
  name: 'Footer',
  components: {
      CGrid, CBox,CHStack,CIcon,CList,CListItem,CHeading,CLink,CText,CPseudoBox, CButton
  },
  data() {
      return{
        toggleClicked : false
      }
  }
}
</script>

<style>
.footerBg{
    background-color: #1b1b1b;
}
.footerLinks{
    color: rgba(0,0,0,.4);
    font-size: 1em;
    text-decoration: none !important;
}
.footerLinks:hover{
    color: rgba(0,0,0,.7);
}
.divider{
    margin-top:20px;
    display: table;
white-space: nowrap;
height: auto;
margin: '';
line-height: 1;
text-align: center;
font-size: 1.07142857rem;
}
.divider:after,
.divider:before{
    background-image: url(../assets/divider.png);
        content: '';
    display: table-cell;
    position: relative;
    top: 50%;
    width: 50%;
    background-repeat: no-repeat;
    white-space: nowrap;
    line-height: 1;
    text-align: center;
}
.divider:before{
    background-position: right 1em top 50%;
}
.divider:after{
     background-position:left 1em top 50%;
}
</style>
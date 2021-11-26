<template>
  <div>
    <Header />

    <div class="content mt-5 mx-auto " style="width: 1440px">
      <MainScreen />

      <Price />

      <Contact />
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import MainScreen from '~/components/MainScreen'
import Price from '~/components/Price'
import Contact from '~/components/Contact'
import Footer from '~/components/Footer'

export default {
  components: { Header, MainScreen, Price, Contact, Footer }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Raleway:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400&display=swap');
</style>
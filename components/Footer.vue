<template>
  <footer class="footer mt-20 py-28 mx-auto" style="max-width: 1440px">
    <div class="contact flex justify-between mx-auto" style="max-width: 1100px">

      <div class="logo-light">
        <img src="~/assets/logo-light.png" alt="">
      </div>

      <div class="footer-contact" style="opacity: 0.75">
        <p class="mb-2 font-bold">8 800 700 6848</p>
        <p class="mb-2  font-bold">company@agbis.ru</p>
        <p class="mb-2 font-bold">Калининград, ул. А. Невского 59к1</p>
      </div>

      <nav>
        <p class="mb-5"><a href="#price">Цены</a></p>
        <p class="mb-5"><a href="#contact">Контакты</a></p>
      </nav>

      <nav>
        <p class="mb-5">Мы в соц. сетях</p>

        <div class="flex mb-5">

          <div class="social mr-5">
            <a target="_blank" href="https://www.instagram.com/">
              <img src="~/assets/instagram-light.png" alt="">
            </a>
          </div>

          <div class="social">
            <a target="_blank" href="https://ru-ru.facebook.com/">
              <img src="~/assets/facebook-light.png" alt="">
            </a>
          </div>

        </div>

        <p class="mb-5">Пишите нам:</p>

        <div class="flex">

          <div class="social">
            <a href="https://www.viber.com/ru/" target="_blank">
              <img src="~/assets/viber-light.png" alt="">
            </a>
          </div>

          <div class="social mx-5">
            <a href="https://www.whatsapp.com/?lang=ru" target="_blank">
              <img src="~/assets/whatsap-light.png" alt="">
            </a>
          </div>

          <div class="social">
            <a href="https://web.telegram.org/k/" target="_blank">
              <img src="~/assets/telegram-light.png" alt="">
            </a>
          </div>

        </div>

      </nav>

    </div>

    <div class="mt-24 mx-auto" style="max-width: 1100px">
      <div class="flex justify-between">
        <p style="opacity: 0.75">© 2005-2020 Все права защищены</p>
        <p>Пользовательское соглашение</p>
        <p>Политика конфиденциальности</p>
        <p>Дизайн и разработка сайта Агбис</p>
      </div>
    </div>

  </footer>
</template>

<script>
export default {}
</script>

<style>
.footer {
  background: #183355;
}

.footer * {
  color: #fff;
}
</style>
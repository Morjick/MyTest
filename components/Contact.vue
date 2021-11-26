<template>
  <section id="contact">
    <div class="relative ">
      <div id="map" style="height: 600px"></div>
      <div class="contact absolute top-0 left-0 bg-white my-12 py-20 px-32" style="width: 600px; height: 500px">
        <h2 class="text-3xl font-light font-raleway">Контакты</h2>

        <div class="my-16">

          <div class="flex my-5">
            <img class="mr-5" src="~/assets/location.png" alt="">
            <p>Калининград, ул. А. Невского 59к1</p>
          </div>

          <div class="flex my-5">
            <img class="mr-5" src="~/assets/phone-blue.png" alt="">
            <p>8 800 700 6848</p>
          </div>

          <div class="flex my-5 w-6">
            <img class="mr-5" src="~/assets/mail.png" alt="">
            <p>company@agbis.ru</p>
          </div>

          <div class="flex my-5">
            <img class="mr-5 w-6" src="~/assets/clock.png" alt="">
            <p>9:00-18:00</p>
          </div>

          <div class="flex mt-10">
            <div>
              <a href="https://www.viber.com/ru/" target="_blank">
                <img src="~/assets/viber.png" alt="">
              </a>
            </div>
            <div class="mx-5">
              <a href="https://www.whatsapp.com/?lang=ru" target="_blank">
                <img src="~/assets/whatsapp.png" alt="">
              </a>
            </div>
            <div>
              <a href="https://web.telegram.org/k/" target="_blank">
                <img src="~/assets/telegram.png" alt="">
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
import mapboxgl from 'mapbox-gl'

export default {
  methods: {
    initmap() {
      mapboxgl.accessToken = "pk.eyJ1IjoibW9yamljayIsImEiOiJja3NidWF0ajUwYWk1MndwZmk3c290czhyIn0.-QX4ZH14vyOVyO-2cCPh_w"
      new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [20.531242370624255, 54.732996052909044],
        zoom: 17,
      })
    }
  },
  mounted() {
    this.initmap()
  },
}
</script>

<style>

</style>
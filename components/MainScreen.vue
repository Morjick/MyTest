<template>
  <section id="main" class="main-screen relative">
    <div class="grad z-20" style="pointer-events: none;">
      <div class="mx-36 my-40" style="width: 800px">
        <h1 class="text-white text-7xl">Тестовая химчистка</h1>
        <p class="text-white text-2xl mt-5 mb-10">Отдыхайте, мы всё сделаем за вас!</p>
        <button class="btn-light">Оформить заказ</button>
      </div>
    </div>
    <img class="z-10" src="~/assets/main-screen.png" style="width: 1440px; pointer-events: none;" alt="">
    

    <nav class="absolute top-0 right-0 h-12 z-10 flex justify-end items-center mx-auto bg-gray-50 backdrop-filter backdrop-opacity-10" style="width: 1200px; padding: 0 100px;">
      <ul class="flex justify-between" style="width: 400px">
        <li>
          <a class="font-manrope font-normal text-primery" href="#price">Цены</a>
        </li>
        <li>
          <a class="font-manrope font-normal text-primery" href="#main">Химчистка для бизнеса</a>
        </li>
        <li>
          <a class="font-manrope font-normal text-primery" href="#contact">Контакты</a>
        </li>
      </ul>
    </nav>
    
  </section>
</template>

<script>
export default {

}
</script>

<style>
.grad {
  background: linear-gradient(90.27deg, #28C1CB 22.77%, rgba(40, 193, 203, 0) 66.13%);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  width: 1440px;
  height: 681px;
}
</style>
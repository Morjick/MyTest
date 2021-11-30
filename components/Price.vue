<template>
  <section id="price" class="relative py-20 mx-auto" style="max-width: 1200px">
    <h2 class="text-3xl font-light font-raleway">Цены</h2>

    <div v-if="loading" class="loading-page">
      <div class="loading"></div>
    </div>

    <div class="flex flex-wrap justify-between py-20 mx-auto" style="min-height: 600px; width: 1200px">

      <div v-for="product in products" :key="product.id" class="product bg-gray-100 mb-16" style="width: 260px; height: 260px">
        <div class="image">
          <img :src="require(`@/assets/products/${getProductImage(product.type)}`)" style="width: 150px; height: 150px" class="mx-auto my-7" alt="">
        </div>
        <div class="flex justify-between px-4 mt-10">
          <p class="font-normal font-opensans truncate" style="max-width: 100px">{{product.name}}</p>
          <p class="font-normal font-opensans">от {{ product.price}} ₽/шт</p>
        </div>
      </div>

    </div>

    <div class="flex">
      <button v-if="!loading" class="btn-primery mx-auto">Смотреть все цены</button>
    </div>

  </section>
</template>

<script>
export default {
  data: () => ({
    products: [],
    loading: false,

    productImage: {
      't-shirts': 't-shirt.png',
      'outerwear': 'outerwear.png',
      'carpet cleaning': 'cleaning.png',
      'household': 'household.png',
      'laundry': 'laundry.png',
      'pants': 'pants.png',
      'shoe shine': 'shoe.png',
      'skirts': 'skirts.png',
    }
  }),
  async mounted() {
    this.loading = true

    const prod = await this.$axios.get('/api/products')
    this.products = prod.data.data

    this.loading = false
  },
  methods: {
    getProductImage(productType) {
      return this.productImage[productType]
    }
  }
}
</script>

<style>
.loading-page {
    position: absolute;
    top: 45%;
    right: 42%;
    transform: translate(-50%, -50%);
    z-index: 10;
    padding: 1rem;
    text-align: center;
    font-size: 3rem;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .loading {
    display: inline-block;
    width: 5rem;
    height: 5rem;
    border: 4px solid rgb(229, 231, 235);
    border-radius: 50%;
    border-top-color: #446284;
    animation: spin 1s ease-in-out infinite;
  }
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
</style>
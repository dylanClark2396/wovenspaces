<template>
  <div class="bg-white text-gray-800 font-ui-sans">
    <UContainer class="pt-24 max-w-6xl mx-auto px-6 md:px-12">
      <header class="mb-16 text-center">
        <h1 class="text-5xl font-ui-serif font-bold text-primary mb-4">
          Our Weave
        </h1>
        <p class="text-gray-500 text-lg max-w-2xl mx-auto">
          A visual journal of our most loved spaces.
        </p>
      </header>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <img
          v-for="(img, index) in images"
          :key="index"
          :src="img"
          class="w-full h-auto rounded-xl shadow-md object-cover"
        />
      </div>

      <div class="py-20 text-center">
        <h2 class="text-3xl font-ui-serif font-bold mb-4 text-primary">
          Let’s design your space next.
        </h2>
        <UButton
          to="/contact"
          class="bg-primary text-white font-semibold px-6 py-3 rounded-md"
        >
          Contact Us
        </UButton>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const images = [
  '/images/living-room.jpg',
  '/images/living-room-2.jpg',
  '/images/kitchen.jpg',
  '/images/bedroom.jpg',
  '/images/living-room.jpg',
  '/images/living-room-2.jpg',
  '/images/kitchen.jpg',
  '/images/bedroom.jpg',
  '/images/living-room.jpg',
  '/images/living-room-2.jpg',
  '/images/kitchen.jpg',
  '/images/bedroom.jpg',
]
</script>

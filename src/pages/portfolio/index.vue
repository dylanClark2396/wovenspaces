<script setup lang="ts">
import { portfolio } from '../../data/portfolio'
</script>

<template>
  <div class="min-h-screen py-12 px-6 bg-bgLight text-text font-ui-sans">
    <div class="max-w-3xl mx-auto space-y-12">
      <h1 class="text-5xl font-ui-serif font-bold text-primary text-center">Portfolio</h1>

      <ul class="space-y-6">
        <li v-for="item in portfolio" :key="item.slug">
          <NuxtLink :to="`/portfolio/${item.slug}`" class="text-xl text-primary hover:underline">
            {{ item.title }}
          </NuxtLink>
          <p class="text-gray-500">{{ item.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<template>
  <div class="min-h-screen py-12 px-6 bg-bgLight text-text font-ui-sans">
    <div class="max-w-5xl mx-auto space-y-12">
      <div v-if="!project" class="text-center text-red-500">Project not found.</div>
      <div v-else>
        <!-- Moved Back Link to Top -->
        <div class="text-left">
          <NuxtLink to="/portfolio" class="text-primary hover:underline text-sm">← Back to Portfolio</NuxtLink>
        </div>

        <h1 class="text-5xl font-ui-serif font-bold text-primary text-center">
          {{ project.title }}
        </h1>
        <p class="text-center text-gray-600">{{ project.description }}</p>

        <PortfolioGallery :pairs="project.pairs"/>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { useRoute } from 'vue-router'
import { portfolio } from '../../data/portfolio'

const route = useRoute()
const slug = route.params.slug
const project = portfolio.find(p => p.slug === slug)
</script>
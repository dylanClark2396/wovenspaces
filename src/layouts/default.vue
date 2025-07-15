<template>
  <div class="bg-bgLight text-text font-ui-sans min-h-screen">
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <UContainer class="py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-ui-serif text-primary">Woven</NuxtLink>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex space-x-6 font-ui-sans">
          <NuxtLink to="/about" class="text-muted hover:text-primary font-medium transition-colors">
            About
          </NuxtLink>
          <NuxtLink to="/portfolio" class="text-muted hover:text-primary font-medium transition-colors">
            Portfolio
          </NuxtLink>
          <NuxtLink to="/contact" class="text-muted hover:text-primary font-medium transition-colors">
            Book a Consult
          </NuxtLink>
        </nav>

        <!-- Hamburger Icon for Mobile -->
        <button class="md:hidden" @click="isMobileNavOpen = !isMobileNavOpen" aria-label="Toggle navigation">
          <svg class="w-6 h-6 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </UContainer>

      <!-- Mobile Dropdown Nav -->
      <div v-if="isMobileNavOpen" class="md:hidden px-6 pb-4 space-y-2">
        <NuxtLink to="/portfolio" class="block text-muted hover:text-primary font-medium transition-colors">
          Portfolio
        </NuxtLink>
        <NuxtLink to="/portfolio3column" class="block text-muted hover:text-primary font-medium transition-colors">
          Portfolio 3 Column
        </NuxtLink>
        <NuxtLink to="/contact" class="block text-muted hover:text-primary font-medium transition-colors">
          Book a Consult
        </NuxtLink>
      </div>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isMobileNavOpen = ref(false)
</script>

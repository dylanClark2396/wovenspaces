<template>
  <div class="bg-wovenBgLight text-wovenText font-sans min-h-screen">
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <UContainer class="py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-serif text-wovenPrimary">Woven</NuxtLink>
        <nav class="space-x-6 font-sans">
          <NuxtLink to="/" class="text-wovenMuted hover:text-wovenPrimary font-medium transition-colors">Home</NuxtLink>
          <NuxtLink to="/contact" class="text-wovenMuted hover:text-wovenPrimary font-medium transition-colors">Contact</NuxtLink>
        </nav>
      </UContainer>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>


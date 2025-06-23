<template>
  <div class="bg-bgLight text-text font-ui-sans min-h-screen">
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <UContainer class="py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-ui-serif text-primary">Woven</NuxtLink>
        <nav class="space-x-6 font-ui-sans">
          <NuxtLink to="/portfolio" class="text-muted hover:text-primary font-medium transition-colors">
            Portfolio
          </NuxtLink>
          <NuxtLink to="/contact" class="text-muted hover:text-primary font-medium transition-colors">
            Book a Consult
          </NuxtLink>
        </nav>
      </UContainer>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

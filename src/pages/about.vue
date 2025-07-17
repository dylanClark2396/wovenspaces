<script setup>
useHead({
  title: 'About Us — Woven'
})
</script>

<template>
  <div class="min-h-screen bg-bgLight text-text font-ui-sans">
    <!-- Hero Banner -->
    <section class="relative py-20 bg-gradient-to-b from-white to-bgLight">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h1 class="text-5xl font-ui-serif font-bold text-primary mb-4">
          About Woven
        </h1>
        <p class="text-lg text-muted mb-6">
          We design thoughtful, human-centered experiences — blending form, clarity, and intention.
        </p>
        <div class="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>
    </section>

    <!-- Content Blocks -->
    <section class="py-16 px-6 max-w-4xl mx-auto space-y-16">
      <div class=" bg-secondary rounded-2xl p-10 space-y-6">
        <h2 class="text-3xl font-semibold text-primary flex items-center gap-3">
          <Icon name="mdi:lightbulb-on-outline" class="text-accent w-7 h-7" /> Our Mission
        </h2>
        <p class="text-base leading-relaxed text-muted">
          At Woven, we connect people and ideas through design. Every element is crafted with simplicity, clarity, and empathy.
        </p>
      </div>

      <div class=" bg-secondary rounded-2xl p-10 space-y-6">
        <h2 class="text-3xl font-semibold text-primary flex items-center gap-3">
          <Icon name="mdi:rocket-launch-outline" class="text-accent w-7 h-7" /> Our Process
        </h2>
        <p class="text-base leading-relaxed text-muted">
          From research to launch, we collaborate closely with clients — refining strategy and design every step of the way. Force Push
        </p>
      </div>

      <div class=" bg-secondary rounded-2xl p-10 space-y-6">
        <h2 class="text-3xl font-semibold text-primary flex items-center gap-3">
          <Icon name="mdi:account-group-outline" class="text-accent w-7 h-7" /> Our Team
        </h2>
        <p class="text-base leading-relaxed text-muted">
          We’re a nimble, curious group of designers and developers with deep experience crafting tools, brands, and interfaces.
        </p>
      </div>
    </section>
  </div>
</template>
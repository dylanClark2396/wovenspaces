<template>
  <div class="bg-bg-light text-text font-ui-sans">
    <UContainer class="pt-24 max-w-4xl mx-auto px-6 md:px-12">
      <header class="mb-16 text-center">
        <h1 class="text-5xl font-ui-serif font-bold text-primary mb-4">
          Dope Designing
        </h1>
        <p class="text-muted text-lg max-w-2xl mx-auto">
          A layered, light-filled interior for a young couple settling into their first home together.
        </p>
      </header>

      <div class="mb-16 space-y-6">
        <img
          src="/images/living-room-2.jpg"
          alt="Living Room"
          class="w-full rounded-xl shadow-md object-cover"
        />
        <p class="text-lg leading-relaxed text-muted">
          The living area welcomes guests with soft textures and warm woods, grounded by natural light and subtle contrast. We chose a muted palette to let the architecture shine.
        </p>
      </div>

      <div class="mb-16 space-y-6">
        <img
          src="/images/kitchen.jpg"
          alt="Dining Space"
          class="w-full rounded-xl shadow-md object-cover"
        />
        <p class="text-lg leading-relaxed text-muted">
          A custom banquette anchors the open kitchen and dining space, offering both functionality and intimacy. Clean lines and natural finishes keep the feel casual but elevated.
        </p>
      </div>

      <div class="mb-16 space-y-6">
        <img
          src="/images/bedroom.jpg"
          alt="Bedroom"
          class="w-full rounded-xl shadow-md object-cover"
        />
        <p class="text-lg leading-relaxed text-muted">
          The bedroom leans minimal and serene — a soft palette layered with linen, oak, and ceramic accents. Every corner was styled to feel restful and lived-in.
        </p>
      </div>

      <div class="py-20 text-center">
        <h2 class="text-3xl font-ui-serif font-bold mb-4 text-primary">
          Ready to design your space?
        </h2>
        <UButton
          to="/contact"
          class="bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-md"
        >
          Work With Us
        </UButton>
      </div>
    </UContainer>
  </div>
</template>

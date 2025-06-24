<template>
  <div class="font-ui-sans text-text bg-bgLight min-h-screen">
    <!-- Hero Section -->
    <UContainer class="py-24 text-center">
      <h1 class="text-5xl font-ui-serif font-bold mb-6 text-primary">
        Your Space, Thoughtfully Designed
      </h1>
      <p class="text-lg text-muted max-w-2xl mx-auto mb-8">
        At Woven, ut id est arcu. Nunc nec libero augue. Mauris cursus sem at mi feugiat, vitae bibendum dui elementum.
      </p>
      <UButton to="/contact" class="bg-primary text-secondary text-base font-medium px-6 py-3 rounded-md">
        Work With Us
      </UButton>
    </UContainer>

    <!-- Image + Text Section -->
    <UContainer class="py-20 grid md:grid-cols-2 gap-12 items-center">
      <img src="/images/living-room.jpg" alt="Modern Living Room" class="rounded-xl shadow-md" />
      <div>
        <h2 class="text-3xl font-ui-serif font-semibold mb-4 text-primary">
          Lorem ipsum
        </h2>
        <p class="text-muted text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id est arcu. Nunc nec libero augue. Mauris cursus
          sem at mi feugiat, vitae bibendum dui elementum. Vestibulum fringilla pharetra finibus. Curabitur leo nulla,
          ornare at dignissim sit amet, sagittis interdum diam.
        </p>
        <UButton to="/contact" variant="ghost" class="text-primary hover:underline hover:bg-transparent">
          Learn More
        </UButton>
      </div>
    </UContainer>

    <!-- Feature Grid -->
    <UContainer class="py-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-ui-serif font-bold text-primary">What We Offer</h2>
      </div>

      <div class="grid gap-8 md:grid-cols-3">
        <div class="bg-secondary border border-gray-200 rounded-xl p-6 text-center shadow-sm">
          <h3 class="text-xl font-ui-serif font-semibold mb-2 text-primary">
            Lorem ipsum
          </h3>
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id est arcu. Nunc nec libero augue. Mauris
            cursus
            sem at mi feugiat, vitae bibendum dui elementum. Vestibulum fringilla pharetra finibus. Curabitur leo nulla,
            ornare at dignissim sit amet, sagittis interdum diam.
          </p>
        </div>
        <div class="bg-secondary border border-gray-200 rounded-xl p-6 text-center shadow-sm">
          <h3 class="text-xl font-ui-serif font-semibold mb-2 text-primary">
            Lorem ipsum
          </h3>
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id est arcu. Nunc nec libero augue. Mauris
            cursus
            sem at mi feugiat, vitae bibendum dui elementum. Vestibulum fringilla pharetra finibus. Curabitur leo nulla,
            ornare at dignissim sit amet, sagittis interdum diam.
          </p>
        </div>
        <div class="bg-secondary border border-gray-200 rounded-xl p-6 text-center shadow-sm">
          <h3 class="text-xl font-ui-serif font-semibold mb-2 text-primary">
            Lorem ipsum
          </h3>
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id est arcu. Nunc nec libero augue. Mauris
            cursus
            sem at mi feugiat, vitae bibendum dui elementum. Vestibulum fringilla pharetra finibus. Curabitur leo nulla,
            ornare at dignissim sit amet, sagittis interdum diam.
          </p>
        </div>
      </div>
    </UContainer>

    <!-- Final CTA -->
    <UContainer class="py-24 text-center">
      <h2 class="text-4xl font-ui-serif font-bold mb-4 text-primary">
        Ready to Transform Your Space?
      </h2>
      <p class="text-lg text-muted mb-6">
        We'd love to hear your vision and help bring it to life.
      </p>
      <UButton to="/contact" class="bg-primary text-base text-secondary font-medium px-6 py-3 rounded-md">
        Let's Talk
      </UButton>
    </UContainer>
  </div>
</template>

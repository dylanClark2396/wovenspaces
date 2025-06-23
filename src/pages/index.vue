<template>
  <div class="font-sans text-text bg-bgLight min-h-screen">
    <!-- Hero Section -->
    <UContainer class="py-24 text-center">
      <h1 class="text-5xl font-serif font-bold mb-6 text-primary">
        Your Space, Thoughtfully Designed
      </h1>
      <p class="text-lg text-muted max-w-2xl mx-auto mb-8">
        At Woven, we help you create interiors that balance beauty and functionality. We tailor each space to reflect
        your lifestyle and values.
      </p>
      <UButton to="/contact" class="bg-primary hover:bg-primaryLight text-base font-medium px-6 py-3 rounded-md">
        Work With Us
      </UButton>
    </UContainer>

    <!-- Image + Text Section -->
    <UContainer class="py-20 grid md:grid-cols-2 gap-12 items-center">
      <img src="/images/living-room.jpg" alt="Modern Living Room" class="rounded-xl shadow-md" />
      <div>
        <h2 class="text-3xl font-serif font-semibold mb-4 text-secondary">
          Intentional Interiors
        </h2>
        <p class="text-muted text-lg mb-6">
          We believe a well-designed space can transform the way you live and feel. Our process starts with
          understanding how you move through your day and how your space can support it.
        </p>
        <UButton to="/contact" variant="ghost" class="text-primary hover:underline">
          Learn More
        </UButton>
      </div>
    </UContainer>

    <!-- Feature Grid -->
    <UContainer class="py-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-serif font-bold text-primary">What We Offer</h2>
      </div>

      <div class="grid gap-8 md:grid-cols-3">
        <div class="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
          <h3 class="text-xl font-serif font-semibold mb-2 text-secondary">
            Space Planning
          </h3>
          <p class="text-muted">
            Layouts that maximize flow, light, and function — tailored to your daily life.
          </p>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
          <h3 class="text-xl font-serif font-semibold mb-2 text-secondary">
            Interior Styling
          </h3>
          <p class="text-muted">
            Define your style through color, furniture, and finishes.
          </p>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
          <h3 class="text-xl font-serif font-semibold mb-2 text-secondary">
            Move-in Services
          </h3>
          <p class="text-muted">
            Thoughtful setups that feel like home on day one.
          </p>
        </div>
      </div>
    </UContainer>

    <!-- Final CTA -->
    <UContainer class="py-24 text-center">
      <h2 class="text-4xl font-serif font-bold mb-4 text-primary">
        Ready to Transform Your Space?
      </h2>
      <p class="text-lg text-muted mb-6">
        We’d love to hear your vision and help bring it to life.
      </p>
      <UButton to="/contact" class="bg-primary hover:bg-primaryLight text-base font-medium px-6 py-3 rounded-md">
        Let's Talk
      </UButton>
    </UContainer>
  </div>
</template>

<template>
  <UContainer class="py-16 font-sans">
    <div class="flex justify-center">
      <UCard class="w-full max-w-xl p-6 sm:p-10 shadow-xl rounded-3xl bg-white/90 backdrop-blur">
        <template #header>
          <div class="text-center">
            <h1 class="text-3xl font-semibold text-gray-800">Let's Connect</h1>
            <p class="mt-2 text-gray-600 text-base">
              We'd love to hear about your project. Fill out the form and we'll be in touch!
            </p>
          </div>
        </template>

        <form @submit.prevent="submitForm" class="space-y-6 mt-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1" for="name">What is your name?*</label>
            <UInput id="name" v-model="form.name" placeholder="Jane Doe" required />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1" for="email">What is your email address?*</label>
            <UInput id="email" v-model="form.email" type="email" placeholder="you@example.com" required />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1" for="phone">What is your phone number?</label>
            <UInput id="phone" v-model="form.phone" type="tel" placeholder="(123) 456‑7890" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1" for="location">Where is your project located?*</label>
            <UInput id="location" v-model="form.location" placeholder="City, state or full address" required />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1" for="goals">Tell us about your project goals in a snapshot.*</label>
            <UTextarea
              id="goals"
              v-model="form.goals"
              :rows="5"
              placeholder="E.g. a warm modern kitchen renovation with lots of natural light."
              required
            />
          </div>

          <div class="text-center pt-4">
            <UButton
              type="submit"
              color="primary"
              size="lg"
              :loading="isSubmitting"
              class="rounded-full px-6 flex items-center justify-center gap-2 mx-auto"
            >
              Submit Request
              <Icon name="mdi:send" class="w-5 h-5" />
            </UButton>
          </div>
        </form>
      </UCard>
    </div>
  </UContainer>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  location: '',
  goals: '',
})

const isSubmitting = ref(false)

function submitForm() {
  isSubmitting.value = true
  setTimeout(() => {
    console.log('Form submitted:', { ...form })
    alert('Thanks! We’ve received your request and will follow up shortly.')
    isSubmitting.value = false
    Object.keys(form).forEach((key) => (form[key] = ''))
  }, 1000)
}
</script>

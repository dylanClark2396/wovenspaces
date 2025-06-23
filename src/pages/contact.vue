<template>
  <UContainer class="py-24 max-w-7xl mx-auto px-6 md:px-12 font-sans text-wovenText bg-wovenBgLight">
    <div class="grid md:grid-cols-2 gap-16 items-start">
      <!-- Left side: Heading + description -->
      <div class="max-w-lg">
        <h1 class="text-5xl font-serif font-bold mb-6 leading-tight text-wovenPrimary">
          Get in touch with us
        </h1>
        <p class="text-lg text-wovenMuted leading-relaxed">
          Whether you’re ready to start a project or just want to say hello, we’re here to listen.
        </p>
      </div>

      <!-- Right side: Form -->
      <div>
        <UForm :state="form" @submit="submitForm" class="bg-white rounded-lg shadow-lg p-10 space-y-8">
          <UFormField label="Name" name="name" required>
            <template #default="{ id }">
              <UInput
                v-model="form.name"
                :id="id"
                placeholder="Your full name"
                class="bg-gray-50 border border-gray-300 text-wovenText placeholder-gray-400 rounded-md px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-wovenPrimary focus:border-wovenPrimary transition"
              />
            </template>
          </UFormField>

          <UFormField label="Email" name="email" required>
            <template #default="{ id }">
              <UInput
                v-model="form.email"
                type="email"
                :id="id"
                placeholder="you@example.com"
                class="bg-gray-50 border border-gray-300 text-wovenText placeholder-gray-400 rounded-md px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-wovenPrimary focus:border-wovenPrimary transition"
              />
            </template>
          </UFormField>

          <UFormField label="Message" name="message" required>
            <template #default="{ id }">
              <UTextarea
                v-model="form.message"
                :id="id"
                rows="6"
                placeholder="Write your message here..."
                class="bg-gray-50 border border-gray-300 text-wovenText placeholder-gray-400 rounded-md px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-wovenPrimary focus:border-wovenPrimary transition resize-y"
              />
            </template>
          </UFormField>

          <UButton type="submit" class="w-full py-4 text-lg font-semibold tracking-wide bg-wovenPrimary hover:bg-wovenPrimaryLight text-white rounded-md">
            Send Message
          </UButton>
        </UForm>
      </div>
    </div>
  </UContainer>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

function submitForm() {
  alert(`Thanks for reaching out, ${form.name}! We'll be in touch soon.`)
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

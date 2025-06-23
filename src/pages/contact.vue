<template>
  <UContainer class="py-24 max-w-7xl mx-auto px-6 md:px-12 font-sans text-text bg-bgLight">
    <div class="grid md:grid-cols-2 gap-16 items-start">
      <!-- Left side: Heading + description -->
      <div class="max-w-lg">
        <h1 class="text-5xl font-serif font-bold mb-6 leading-tight text-primary">
          Get in touch with us
        </h1>
        <p class="text-lg text-muted leading-relaxed">
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
                class="bg-transparent border-b-0 border-transparent focus:border-b-2 focus:border-primary
                  text-text placeholder-muted px-0 py-2 focus:outline-none transition"
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
                class="bg-transparent border-b-0 border-transparent focus:border-b-2 focus:border-primary
                  text-text placeholder-muted px-0 py-2 focus:outline-none transition"
              />
            </template>
          </UFormField>

          <UFormField label="Message" name="message" required>
            <template #default="{ id }">
              <UTextarea
                v-model="form.message"
                :id="id"
                :rows="6"
                placeholder="Write your message here..."
                class="bg-transparent border-b-0 border-transparent focus:border-b-2 focus:border-primary
                  text-text placeholder-muted px-0 py-2 focus:outline-none transition resize-y"
              />
            </template>
          </UFormField>

          <UButton
            type="submit"
            class="w-full py-4 text-lg font-semibold tracking-wide bg-primary hover:bg-primaryLight text-white rounded-md"
          >
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

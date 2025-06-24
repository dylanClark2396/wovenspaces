<template>
  <UContainer class="py-24 max-w-3xl mx-auto px-6 font-ui-sans text-text bg-bgLight">
    <div>
      <!-- Header section -->
      <div class="mb-12">
        <h1 class="text-5xl font-ui-serif font-bold mb-6 leading-tight text-primary">
          Get in touch with us
        </h1>
        <p class="text-lg text-muted leading-relaxed">
          Whether you’re ready to start a project or just want to say hello, we’re here to listen.
        </p>
      </div>

      <!-- Form section -->
      <UForm :state="form" @submit="submitForm" class="bg-white rounded-lg shadow-lg p-10 space-y-8">

        <UFormField label="Name" name="name" required :ui="{ label: 'text-ui-text' }">
          <template #default="{ id }">
            <UInput v-model="form.name" :id="id" placeholder="Your full name" class="w-full" variant="none" />
          </template>
        </UFormField>

        <UFormField label="Email" name="email" required :ui="{ label: 'text-ui-text' }">
          <template #default="{ id }">
            <UInput v-model="form.email" :id="id" type="email" placeholder="you@example.com" class="w-full" variant="none" />
          </template>
        </UFormField>

        <UFormField label="Phone Number" name="phone" required :ui="{ label: 'text-ui-text' }">
          <template #default="{ id }">
            <UInput v-model="form.phone" :id="id" placeholder="(123) 456-7890" class="w-full" variant="none" />
          </template>
        </UFormField>

        <UFormField label="Preferred method of contact" name="contactMethod" required :ui="{ label: 'text-ui-text' }">
          <template #default>
            <URadioGroup v-model="form.contactMethod" :items="contactMethods" :ui="{ label: 'text-ui-text' }" />
          </template>
        </UFormField>

        <UFormField label="Address" name="address" required :ui="{ label: 'text-ui-text' }">
          <template #default="{ id }">
            <UInput v-model="form.address" :id="id" placeholder="Street, City, State" class="w-full" variant="none" />
          </template>
        </UFormField>

        <UFormField label="Preferred consult method" name="consultMethod" required :ui="{ label: 'text-ui-text' }">
          <template #default>
            <URadioGroup v-model="form.consultMethod" :items="consultMethods" :ui="{ label: 'text-ui-text', indicator: 'after:bg-secondary' }"/>
          </template>
        </UFormField>

        <UFormField label="What space(s) are you interested in getting organized?" name="spaces" required :ui="{ label: 'text-ui-text' }">
          <template #default="{ id }">
            <UTextarea v-model="form.spaces" :id="id" :rows="3" placeholder="e.g., Kitchen, Garage, Closet..." class="w-full" variant="none" />
          </template>
        </UFormField>

        <UFormField label="What days/times work best for a 30-minute consult?" :ui="{ label: 'text-ui-text' }">
          <template #default>
            <div class="space-y-6">
              <div v-for="slot in timeSlots" :key="slot.value" class="space-y-2">
                <div class="font-semibold">{{ slot.label }}</div>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                  <div v-for="day in days" :key="`${slot.value}_${day}`">
                    <UCheckbox
                      :model-value="form.availability.includes(`${slot.value}_${day}`)"
                      @update:model-value="val => toggleAvailability(val, `${slot.value}_${day}`)"
                      :label="day" :ui="{ label: 'text-ui-text' }"
                    />
                  </div>
                </div>
              </div>
            </div>
          </template>
        </UFormField>

        <UFormField label="What budget do you have in mind for organizing your space(s)?" :ui="{ label: 'text-ui-text' }">
          <template #default>
            <URadioGroup v-model="form.budget" :items="budgetRanges" :ui="{ label: 'text-ui-text' }"/>
            <UInput v-model="form.budgetOther" placeholder="Other..." class="mt-2 w-full" variant="none" />
          </template>
        </UFormField>

        <UButton type="submit" class="py-4 text-lg font-semibold tracking-wide bg-primary hover:bg-primaryLight text-white rounded-md">
          Send Message
        </UButton>

      </UForm>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { RadioGroupItem } from '@nuxt/ui'

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const timeSlots = [
  { label: "Morning (9am - 12pm)", value: "morning" },
  { label: "Afternoon (12pm - 3pm)", value: "afternoon" },
  { label: "Evening (4pm - 6pm)", value: "evening" },
]

const contactMethods = ref<RadioGroupItem[]>([
  { label: 'E-mail', value: 'email' },
  { label: 'Text', value: 'text' },
  { label: 'Phone Call', value: 'call' },
  { label: 'No preference', value: 'none' }
])

const consultMethods = ref<RadioGroupItem[]>([
  { label: 'In-Person', value: 'in-person' },
  { label: 'FaceTime', value: 'facetime' },
  { label: 'No preference', value: 'no-preference' }
])

const budgetRanges = ref<RadioGroupItem[]>([
  { label: '$1500 - $2000', value: '$1500-$2000' },
  { label: '$2000 - $3000', value: '$2000-$3000' },
  { label: '$4000 - $5000', value: '$4000-$5000' },
  { label: '$5000+', value: '$5000+' },
  { label: 'Prefer not to answer', value: 'prefer-not' }
])

const form = reactive({
  name: '',
  email: '',
  phone: '',
  contactMethod: '',
  address: '',
  consultMethod: '',
  spaces: '',
  availability: [],
  budget: '',
  budgetOther: ''
})

function toggleAvailability(checked: boolean, value: string) {
  if (checked && !form.availability.includes(value)) {
    form.availability.push(value)
  } else if (!checked) {
    form.availability = form.availability.filter(v => v !== value)
  }
}

function submitForm() {
  alert(`Thanks for reaching out, ${form.name}! We'll be in touch soon.`)
  Object.keys(form).forEach(key => Array.isArray(form[key]) ? form[key] = [] : form[key] = '')
}
</script>

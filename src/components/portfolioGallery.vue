<template>
  <div class="grid md:grid-cols-2 gap-4 space-y-8 p-6">
    <div v-for="(pair, index) in pairs" :key="index" class="space-y-4">
      <div class="relative cursor-pointer" @click="toggleImage(index)">
        <img :src="flipped[index] ? pair.after : pair.before" :alt="flipped[index] ? 'After' : 'Before'"
          class="w-full h-92 rounded-xl object-cover shadow-md transition-transform duration-300 hover:scale-105" />

        <button class="absolute top-2 right-2 bg-white/80 hover:bg-white text-black px-3 py-1 rounded shadow-md text-xs"
          @click.stop="openModal(pair.before, pair.after)">
          More Details
        </button>
      </div>

    </div>
  </div>

  <!-- Modal -->
<div
  v-if="isModalOpen"
  class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
>
  <div class="relative bg-white max-w-6xl w-full rounded-lg overflow-hidden shadow-lg">
    <!-- Close Button -->
    <button
      @click="closeModal"
      class="absolute top-4 right-4 text-black bg-white px-3 py-1 rounded shadow hover:bg-gray-100 z-10"
    >
      ✕
    </button>

    <div class="grid md:grid-cols-2 gap-4 p-6">
      <img
        :src="modalImageBefore"
        alt="Before"
        class="w-full h-92 object-cover rounded-xl shadow-md"
      />
      <img
        :src="modalImageAfter"
        alt="After"
        class="w-full h-92 object-cover rounded-xl shadow-md"
      />
    </div>

    <div class="p-6 border-t text-center">
      <p class="text-gray-600">words here</p>
    </div>
  </div>
</div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  pairs: {
    before: string
    after: string
  }[]
}>()

// Track the flipped state per image pair
const flipped = ref<boolean[]>([])

const toggleImage = (index: number) => {
  flipped.value[index] = !flipped.value[index]
}

// Modal logic
const isModalOpen = ref(false)
const modalImageBefore = ref<string | null>('')
const modalImageAfter = ref<string | null>('')

const openModal = (before: string, after: string) => {
  modalImageBefore.value = before
  modalImageAfter.value = after

  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  modalImageBefore.value = null
  modalImageAfter.value = null
}
</script>

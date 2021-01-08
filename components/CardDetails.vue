<template>
  <div class="border border-gray-400 rounded w-full bg-white overflow-hidden">
    <div :class="`${borderColor} px-4 py-5`">
      <div class="flex space-x-3">
        <div class="w-1/3">
          <slot name="card-header"></slot>
        </div>
        <div class="w-2/3">
          <slot name="card-content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      borderColor: {
        type: String,
        required: true
      }
    }
  }
</script>
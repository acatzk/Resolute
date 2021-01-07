<template>
  <nav>
    <ul class="mt-4 text-sm">
      <div v-for="(link, i) in links" :key="i" :class="`${i === 7 ? 'border-b-2  border-gray-400' : ''}`">
        <slot :link="link"></slot>
      </div>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: {
      links: {
        type: Array
      }
    }
  }
</script>
<template>
  <div class="bg-gray-200 font-sans antialiased text-gray-900 min-h-screen h-full">
    <NavBar />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
  export default {
    components: {
      NavBar: () => import('@/components/NavBar')
    }
  }
</script>
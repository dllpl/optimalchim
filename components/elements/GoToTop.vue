<script setup>
const scrollTop = () => {
    if (location.hash && location.hash.length) {
        location.hash = ''
    } else {
        window.scrollTo(0, 0)
    }
}
</script>

<template>
  <button class="btn btn--go-to-top" @click="scrollTop">
      <svg-icon name="arrow-top" class="icon icon--go-to-top"></svg-icon>
  </button>
</template>
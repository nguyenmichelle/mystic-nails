<template>
  <div :class="[isOdd? 'bg-nude-200' : '']" :id="id">
    <div class="flex justify-content mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <span class="flex-1 flex items-center justify-center text-2xl font-bold font-heading text-black p-6">{{ title }}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['isOdd', 'title', 'id'],
  data () {
    return {}
  }
}
</script>

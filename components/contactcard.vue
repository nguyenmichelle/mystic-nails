<template>
  <div class="mx-10 mt-2">
    <div class="flex items-center justify-between border-2 border-purple-500 p-4 rounded-lg h-full">
      <div class="flex items-center space-x-2 w-full">
        <div class="flex-shrink-0 w-[10%] border-r-2 border-purple-600">
          <slot/>
        </div>
        <div class="w-[90%] pl-2">
          <a class="font-sans hover:cursor-pointer text-purple-600" v-html="text" :href="action" target="_blank"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['text', 'action']
  }
</script>

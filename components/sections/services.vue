<template>
  <div>
    <Section :isOdd="true" title="SERVICES & PRICING LIST" id="services">
      <div class="pb-10 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <div class="flex justify-center items-center bg-gray-200 w-full md:w-[80%] h-[500px]">
          <object
              data="mystic-nails-menu-1.pdf#view=FitH&toolbar=0&navpanes=0"
              type="application/pdf"
              class="w-full h-full"
          ></object>
        </div>
        <div class="flex justify-center items-center bg-gray-200 w-full md:w-[80%] h-[500px]">
          <object
              data="mystic-nails-menu-2.pdf#view=FitH&toolbar=0&navpanes=0"
              type="application/pdf"
              class="w-full h-full"
          ></object>
        </div>
      </div>
    </Section>
  </div>
</template>

<script>
export default {
  methods: {
    expandToFullScreen() {
      const iframe = this.$refs.iframe;
      if (iframe && iframe.requestFullscreen) {
        iframe.requestFullscreen(); // Enter fullscreen mode
      } else if (iframe && iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen(); // Safari support
      } else if (iframe && iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      } else {
        alert("Fullscreen mode is not supported in your browser.");
      }
    },
  },
};
</script>

<template>
  <div>
    <Section :isOdd="true" title="SERVICES & PRICING LIST" id="services">
      <div class="pb-10 flex items-center justify-center">
        <object data="mystic-nails-menu-1.pdf#view=FitH&toolbar=0&navpanes=0" type="application/pdf" width="80%" height="500px"></object>
        <object data="mystic-nails-menu-2.pdf#view=FitH&toolbar=0&navpanes=0" type="application/pdf" width="80%" height="500px"></object>
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

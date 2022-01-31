<script lang="ts">
  export let type = "bb";
  export let l = "100%";
</script>

<div
  class="bg-[url('/src/assets/img/{type}.svg')] "
  style="background: url('/src/assets/img/{type}.svg'); height: {l}; width: {l}; background-size: cover;"
  on:touchstart
  on:touchmove
  on:touchend
  on:mousedown
  on:mousemove
  on:mouseup
/>

<style>
  div {
    display: block;
    flex-shrink: 0;
  }

  div::before {
  }
</style>

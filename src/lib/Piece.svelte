<script lang="ts">
</script>

<div
  draggable
  on:touchstart
  on:touchmove
  on:touchend
  on:mousedown
  on:mousemove
  on:mouseup
/>

<style>
  div {
    position: absolute;
    display: block;
    background: url("/src/assets/img/bb.svg");
    height: 40px;
    width: 40px;
    flex-shrink: 0;
  }

  div::before {
    height: 40px;
  }
</style>

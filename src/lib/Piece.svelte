<script lang="ts">
  import { PieceType, Player } from "./state/model";

  export let type: PieceType = PieceType.BISHOP;
  export let owner: Player = Player.BLACK;
  export let l = "100%";
</script>

<div
  class="bg-cover"
  style="background: url('/src/assets/img/{owner[0] +
    type}.svg') 0% 0% / cover; height: {l}; width: {l};"
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
</style>

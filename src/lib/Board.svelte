<script lang="ts">
  export let board = Array.from(Array(64), (_, i) => i);
  let grid;

  const dark = "bg-red-100";
  const light = "bg-blue-100";

  // i 8 / 0 | i + 2 %
  const squareColor = (square: number) =>
    (square + ((square / 8) | 0)) % 2 ? dark : light;
</script>

<grid class="board grid grid-cols-8" bind:this={grid}>
  {#each board as square}
    <grid-item class="flex pb-full {squareColor(square)} w-full"
      >{square}</grid-item
    >
  {/each}
</grid>

<style>
  grid-item::before {
    content: "";
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
  grid > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
</style>

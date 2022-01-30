<script lang="ts">
  import Piece from "./Piece.svelte";

  export let board = Array.from(Array(64), (_, i) => i);
  let grid;
  let squares = [];
  let activeEvent = "";
  let endSquare = 0;

  const dark = "bg-red-100";
  const light = "bg-blue-100";
  // i 8 / 0 | i + 2 %
  const squareColor = (square: number) =>
    (square + ((square / 8) | 0)) % 2 ? dark : light;

  let movingObject: HTMLDivElement;

  function handleTouchStart(e: TouchEvent & { target: HTMLDivElement }) {
    movingObject = e.target;
    activeEvent = "start";
  }

  function handleTouchMove(e: TouchEvent & { target: HTMLDivElement }) {
    e.stopPropagation();
    e.preventDefault();
    if (e.touches.length === 0) return;
    let { pageX, pageY } = e.touches[0];
    e.target.style.position = "absolute";
    e.target.style.left = `${pageX - movingObject.offsetWidth / 2}px`;
    e.target.style.top = `${pageY - movingObject.offsetHeight / 2}px`;
    activeEvent = "move";
  }

  function handleTouchEnd(e: TouchEvent) {
    e.preventDefault();

    if (activeEvent === "move") {
      const { pageX, pageY } = e.touches[0];

      endSquare = getSquare(pageX, pageY);

      if (endSquare !== null) {
      }
    }
  }

  function handleMouseDown(e: MouseEvent & { target: HTMLDivElement }) {
    e.preventDefault();
    e.stopImmediatePropagation();
    movingObject = e.target;
    activeEvent = "start";
  }

  function handleMouseMove(e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    if (activeEvent === "start" || activeEvent === "move") {
      let { pageX, pageY } = e;
      movingObject.style.position = "absolute";
      movingObject.style.left = `${pageX - movingObject.offsetWidth / 2}px`;
      movingObject.style.top = `${pageY - movingObject.offsetHeight / 2}px`;
      activeEvent = "move";
    }
  }

  function handleMouseUp(e: MouseEvent & { target: HTMLDivElement }) {
    e.preventDefault();
    console.log("Mouse up");
    if (activeEvent === "move") {
      const { pageX, pageY } = e;

      endSquare = getSquare(pageX, pageY);

      if (endSquare !== null) {
      }
    }
    activeEvent = "";
    movingObject = null;
  }

  function getSquare(x, y) {
    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = grid;
    const [relX, relY] = [x - offsetLeft, y - offsetTop];
    console.log({ relX, relY });
    if (relX < 0 || relX > offsetWidth) return null;
    if (relY < 0 || relY > offsetHeight) return null;

    const squareLen = offsetHeight / 8;
    return (((relX / squareLen) | 0) % 8) + 8 * (((relY / squareLen) | 0) % 8);
  }
</script>

<div on:mousemove={handleMouseMove}>
  <Piece
    on:touchstart={handleTouchStart}
    on:touchmove={handleTouchMove}
    on:touchend={handleTouchEnd}
    on:mousedown={handleMouseDown}
    on:mouseup={handleMouseUp}
  />

  <grid class="board grid grid-cols-8" bind:this={grid}>
    {#each board as square, i}
      <grid-item
        class="flex pb-full {squareColor(square)} w-full"
        bind:this={squares[i]}>{square}</grid-item
      >
    {/each}
  </grid>

  {endSquare}
</div>

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

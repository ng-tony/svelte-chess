<script lang="ts">
  import Piece from "./Piece.svelte";
  import { isValidMove, applyMove } from "./state/game";
  import { startingState, State } from "./state/model";
  export let state: State = startingState;

  type MouchEvent = Event & Partial<TouchEvent & MouseEvent>;
  let grid: HTMLElement;
  let activeEvent = "";
  let endSquare = 0;

  const dark = "bg-red-100";
  const light = "bg-blue-100";

  // i 8 / 0 | i + 2 %
  const squareColor = (square: number) =>
    (square + ((square / 8) | 0)) % 2 ? dark : light;

  let movingObject: HTMLDivElement;
  let OgSquare: number;

  function start(e: MouchEvent) {
    e.preventDefault();
    activeEvent = "move";
    const { x, y } = getXY(e);
    const squareLength = `${grid.offsetWidth / 8}px`;
    OgSquare = getSquare(x, y);
    movingObject = e.target as HTMLDivElement;
    movingObject.style.position = "absolute";
    movingObject.style.height = squareLength;
    movingObject.style.width = squareLength;
  }

  function move(e: MouchEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (activeEvent === "move") {
      const { x, y } = getXY(e);
      movingObject.style.left = `${x - movingObject.offsetWidth / 2}px`;
      movingObject.style.top = `${y - movingObject.offsetHeight / 2}px`;
    }
  }
  function end(e: MouchEvent) {
    const { x, y } = getXY(e);
    if (activeEvent === "move") {
      movingObject.style.left = "0";
      movingObject.style.top = "0";
      movingObject.style.position = "relative";
      endSquare = getSquare(x, y);
      if (
        endSquare !== null &&
        isValidMove(state, { from: OgSquare, to: endSquare })
      ) {
        state = applyMove(state, { from: OgSquare, to: endSquare });
      }
      activeEvent = "";
      movingObject = null;
    }
  }

  function getXY(e: MouchEvent): { x: number; y: number } {
    const { pageX, pageY, touches, changedTouches } = e;
    const x = pageX ?? touches[0]?.pageX ?? changedTouches[0].pageX;
    const y = pageY ?? touches[0]?.pageY ?? changedTouches[0].pageY;
    return { x, y };
  }

  function getSquare(x: number, y: number) {
    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = grid;
    const [relX, relY] = [x - offsetLeft, y - offsetTop];
    console.log({ relX, relY });
    if (relX < 0 || relX > offsetWidth) return null;
    if (relY < 0 || relY > offsetHeight) return null;

    const squareLen = offsetHeight / 8;
    return (((relX / squareLen) | 0) % 8) + 8 * (((relY / squareLen) | 0) % 8);
  }
</script>

<div on:mousemove={move} class="max-w-[100vh]">
  <grid class="grid grid-cols-8 h-1px" bind:this={grid}>
    {#each state.board as { piece }, i}
      <grid-item class="flex {squareColor(i)}"
        >{#if piece}
          <Piece
            on:touchstart={start}
            on:touchmove={move}
            on:touchend={end}
            on:mousedown={start}
            on:mouseup={end}
            {...piece}
          />
        {/if}</grid-item
      >
    {/each}
  </grid>
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

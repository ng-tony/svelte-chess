<script lang="typescript">
  import Piece from "./Piece.svelte";
  import { defaultBoard, PieceData } from "./helpers";
  export let board: PieceData[] = defaultBoard;

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
    activeEvent = "start";
    const { pageX, pageY, touches } = e;
    const x = pageX ?? touches[0].pageX;
    const y = pageY ?? touches[0].pageY;

    OgSquare = getSquare(x, y);
    movingObject = e.target as HTMLDivElement;
  }

  function move(e: MouchEvent) {
    e.preventDefault();
    e.stopPropagation();
    const { pageX, pageY, touches } = e;
    if (activeEvent === "move" || activeEvent === "start") {
      activeEvent = "move";
      const x = pageX ?? touches[0].pageX;
      const y = pageY ?? touches[0].pageY;
      const squareLength = `${grid.offsetWidth / 8}px`;
      movingObject.style.position = "absolute";
      movingObject.style.height = squareLength;
      movingObject.style.width = squareLength;
      movingObject.style.left = `${x - movingObject.offsetWidth / 2}px`;
      movingObject.style.top = `${y - movingObject.offsetHeight / 2}px`;
    }
  }
  function end(e: MouchEvent) {
    const { pageX, pageY, changedTouches } = e;
    const x = pageX ?? changedTouches[0].pageX;
    const y = pageY ?? changedTouches[0].pageY;
    if (activeEvent === "move") {
      endSquare = getSquare(x, y);
      if (endSquare !== null) {
        // Do something
        movingObject.style.left = "0";
        movingObject.style.top = "0";
        movingObject.style.position = "relative";
        const temp = board[OgSquare];
        board[OgSquare] = null;
        board[endSquare] = temp;
      }
      activeEvent = "";
      movingObject = null;
    }
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

<div on:mousemove={move}>
  <grid class="board grid grid-cols-8" bind:this={grid}>
    {#each board as piece, i}
      <grid-item class="flex pb-full {squareColor(i)} w-full"
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

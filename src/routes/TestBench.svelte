<script>
  import logo from "../assets/svelte.png";
  import Counter from "../lib/Counter.svelte";
</script>

<main class="m-auto text-center p-4">
  <img class="m-auto h-64 w-64" src={logo} alt="Svelte Logo" />
  <h1
    class="font-thin mx-auto max-w-none my-8 text-[#ff3e00] text-6xl uppercase md:max-w-56 md:leading-5"
  >
    Hello world!
  </h1>

  <Counter />

  <p class="mx-auto max-w-none my-4 max-w-56 md:leading-5">
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>
  <p class="mx-auto max-w-none my-4 max-w-56 md:leading-5">
    Check out <a
      class="underline underline-dark-500"
      href="https://github.com/sveltejs/kit#readme">SvelteKit</a
    > for the officially supported framework, also powered by Vite!
  </p>
</main>

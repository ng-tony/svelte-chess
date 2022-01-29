<script>
  import { Router, Route } from "svelte-routing";
  import TestBench from "./routes/TestBench.svelte";
  import Home from "./routes/Home.svelte";

  export let url = "";
</script>

<Router {url}>
  <Route path="/" component={Home} />
  <Route path="/test" component={TestBench} />
</Router>

<style></style>

<script lang="ts">
  import { desktopDivider, diceSvg, mobileDivider } from "../assets/icons";
  import type { Advice } from "../types";
  import { ADVICESLIP_API } from "../api/adviceslip.api";
  import { fly } from "svelte/transition";
  import { quadInOut } from "svelte/easing";

  // Fetch once on page load from the "index.ts" GET method
  export let slip: Advice;

  let loading = false;

  const getRandomAdvice = async () => {
    loading = true;
    const response = await ADVICESLIP_API.getRandomAdvice();
    slip = response.slip;
    // Prevent spamming the API
    setTimeout(() => (loading = false), 1000);
  };
  let innerWidth = 0;
  $: src = innerWidth < 768 ? mobileDivider : desktopDivider;
</script>

<svelte:window bind:innerWidth />

<svelte:head>
  <title>Frontend Mentor | Advice Generator App</title>
</svelte:head>

<main class="bg-blue-dark text-cyan min-h-screen flex flex-col items-center p-4">
  <div
    class="relative bg-blue rounded-lg flex flex-col gap-6 text-center px-6 sm:px-12 pt-10 sm:pt-12 pb-16 sm:pb-[4.5rem] sm:max-w-[33.5em] my-auto"
  >
    <!-- Advice id -->
    <span class="text-green font-semibold text-xs sm:text-[0.8125rem] uppercase tracking-[0.25em]"
      >Advice #{slip.id}</span
    >
    <!-- Advice -->
    {#key slip.advice}
      <p in:fly={{ duration: 750, easing: quadInOut }} class="text-[1.75rem] font-extrabold">
        &ldquo;{slip.advice}&rdquo;
      </p>
    {/key}
    <!-- Divider -->
    <img {src} alt="" />
    <button
      on:click={getRandomAdvice}
      disabled={loading}
      type="button"
      aria-label="Get new advice"
      class="bg-green absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full p-5 transition-shadow duration-300 ease-in-out [@media(hover:hover)]:hover:shadow-glow-green focus-outline"
    >
      <img src={diceSvg} alt="" class={loading ? "animate-spin" : "animate-none"} />
    </button>
  </div>
  <div class="text-xs text-center tracking-wider">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by
    <a href="https://github.com/AntoineC-dev" class="text-[hsl(228,45%,44%)] font-extrabold">Antoine C</a>.
  </div>
</main>

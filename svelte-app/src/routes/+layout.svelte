<script lang="ts">
  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';

  let topAppBar: TopAppBar;

  let darkTheme: boolean | undefined = undefined;
  let clicked = 0;
  import Button from '@smui/button';

  // onMount(() => {
  //   darkTheme = window.matchMedia('(prefers-color-scheme: dark)');
  // });
</script>

<svelte:head>
  <!-- SMUI Styles -->
  {#if darkTheme === undefined}
    <link rel="stylesheet" href="/smui.css" media="(prefers-color-scheme: light)"/>
    <link rel="stylesheet" href="/smui-dark.css" media="screen and (prefers-color-scheme: dark)"/>
  {:else if darkTheme === true}
    <link rel="stylesheet" href="/smui.css"/>
    <link rel="stylesheet" href="/smui-dark.css" media="screen"/>
  {:else}
    <link rel="stylesheet" href="/smui.css"/>
  {/if}
</svelte:head>
<TopAppBar bind:this={topAppBar} variant="fixed">
  <Row>
    <Section>
      <IconButton on:click={() => clicked++} href="/" class="material-icons">home</IconButton>
      <Title>SelSolvID</Title>
    </Section>

    <Section>
      <Button on:click={() => clicked++} href="/aanvragen">aanvragen</Button>
      <Button on:click={() => clicked++} href="/aanvragen2">aanvragen 2</Button>
      <Button on:click={() => clicked++} href="/leeg">lege pagina</Button>
    </Section>

    <Section align="end" toolbar>
      <IconButton on:click={() => (darkTheme = !darkTheme)} class="material-icons"> 
        {#if darkTheme === undefined}nightlight{:else if darkTheme === true}nightlight{:else}sunny{/if} 
      </IconButton>
    </Section>
  </Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
  <slot></slot>
</AutoAdjust>

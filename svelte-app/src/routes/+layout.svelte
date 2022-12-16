<script lang="ts">
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import Button from '@smui/button';
	import { getContext } from 'svelte';

	let topAppBar: TopAppBar;

	let darkTheme: boolean | undefined = undefined;
	let clicked = 0;
	// let loggedIn = getContext("loginContext")
	let loggedIn = false;

	// onMount(() => {
	//   darkTheme = window.matchMedia('(prefers-color-scheme: dark)');
	// });
</script>

<svelte:head>
	<!-- SMUI Styles -->
	{#if darkTheme === undefined}
		<link rel="stylesheet" href="/smui.css" media="(prefers-color-scheme: light)" />
		<link rel="stylesheet" href="/smui-dark.css" media="screen and (prefers-color-scheme: dark)" />
	{:else if darkTheme === true}
		<link rel="stylesheet" href="/smui.css" />
		<link rel="stylesheet" href="/smui-dark.css" media="screen" />
	{:else}
		<link rel="stylesheet" href="/smui.css" />
	{/if}
</svelte:head>
<TopAppBar bind:this={topAppBar} variant="fixed">
	<Row>
		<Section>
			<IconButton on:click={() => clicked++} href="/" class="material-icons">home</IconButton>
			<Title>SelSovID</Title>
		</Section>

		<Section>
			<Button on:click={() => clicked++} href="/aanvragen">aanvragen</Button>
		</Section>

		<Section align="end" toolbar>
			{#if loggedIn === true}
				<Button color="secondary" on:click={() => clicked++} variant="raised" href="/account"
					>account</Button
				>
			{:else if loggedIn === false}
				<Button color="secondary" on:click={() => clicked++} variant="raised" href="/login"
					>login</Button
				>
				<!-- <Button color="secondary" on:click={() => clicked++} variant="raised" href="/registreer">registreer</Button>  -->
			{/if}
			<IconButton on:click={() => (darkTheme = !darkTheme)} class="material-icons">
				{#if darkTheme === undefined}nightlight{:else if darkTheme === true}sunny{:else}nightlight{/if}
			</IconButton>
		</Section>
	</Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
	<slot />
</AutoAdjust>

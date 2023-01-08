<script lang="ts">
	import Button from '@smui/button';

	let clicked = 0;
</script>

<main>
	<h1>Hallo</h1>

	<p>
		tekst
		<Button color="secondary" on:click={() => clicked++} variant="raised" href="/">logout</Button>
	</p>
</main>

<style>
	main {
		font-family: sans-serif;
		text-align: center;
	}
</style>

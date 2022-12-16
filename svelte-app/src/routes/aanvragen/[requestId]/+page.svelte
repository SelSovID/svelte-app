<script lang="ts">
	import Fab, { Label, Icon } from '@smui/fab';

	type Aanvraag = {
		id: number;
		fromUser: string;
		requestText: string;
		date: number;
	};

	let clicked = 0;
	export let data: { items: Aanvraag[] };
	const items = data.items;

	function unixConvertion(unixTimestamp: number) {
		const date: Date = new Date(unixTimestamp);
		return date;
	}
</script>

<br />

<div class="flexy">
	<div class="margins">
		<Fab on:click={() => clicked++} href="/aanvragen" extended>
			<Icon class="material-icons">arrow_back</Icon>
			<Label>terug</Label>
		</Fab>
	</div>
</div>

<main>
	<h1>{items.fromUser.email}</h1>
	<h3>{unixConvertion(items.date)}</h3>
	<br />
	<p>{items.requestText}</p>

	<Fab color="primary" on:click={() => alert(items.fromUser.email + ' goedgekeurd')} extended>
		<Icon class="material-icons">done</Icon>
		<Label>goedkeuren</Label>
	</Fab>
	<Fab color="primary" on:click={() => alert(items.fromUser.email + ' afgekeurd')} extended>
		<Icon class="material-icons">close</Icon>
		<Label>afkeuren</Label>
	</Fab>
</main>

<style>
	main {
		font-family: sans-serif;
		text-align: center;
	}
</style>

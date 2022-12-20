<script lang="ts">
	import { goto } from '$app/navigation';
	import Fab, { Label, Icon } from '@smui/fab';
	import axios from 'axios';

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

	async function handleRequest(id: number, accept: boolean) {
		const response = await axios.put(`/api/request/${items.id}`, { accept });
		if (response.status === 200) {
			goto('/aanvragen');
			return response;
		}
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
	<!-- "accept": false -->
	<Fab color="primary" on:click={() => handleRequest(items.id, true)} extended>
		<Icon class="material-icons">done</Icon>
		<Label>goedkeuren</Label>
	</Fab>
	<Fab color="primary" on:click={() => handleRequest(items.id, false)} extended>
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

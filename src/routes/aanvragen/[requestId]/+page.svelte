<script lang="ts">
	import { goto } from '$app/navigation';
	import Fab, { Label, Icon } from '@smui/fab';
	import axios from 'axios';
	import Textfield from '@smui/textfield';
	import Button from '@smui/button/src/Button.svelte';
	import Drawer, { AppContent, Content } from '@smui/drawer';
	import List, { Item, Text } from '@smui/list';
	import IconButton from '@smui/icon-button';
	import green_checkmark from '../../../lib/green_checkmark.png';

	type Aanvraag = {
		id: number;
		fromUser: string;
		requestText: string;
		date: number;
		attachedVCs: string;
	};

	let selectedVC = 'nothing selected yet';
	let clicked = 0;
	export let data: { items: Aanvraag[] };
	const items = data.items;
	let showForm = false;
	let value = '';

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
	console.log(items.attachedVCs);
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
	<p>{items.requestText}</p>

	<!-- <p>{items.attachedVCs}</p> -->
	<br />
	Meegeleverde VCs bij deze aanvraag:
	<div class="drawer-container">
		<Drawer>
			<Content>
				<List>
					<!-- de img is een green checkmark, deze staat hardcoded omdat de VCs al worden gechecked in de API -->
					{#each items as item (item.id)}
						<!-- moet nog automatisch items aangemaakt worden wanneer de attachedVCs geformat zijn -->
					{/each}
					<Item href="javascript:void(0)" on:click={() => (selectedVC = items.attachedVCs)}>
						<Text
							>aaaaaaa <img
								src={green_checkmark}
								alt="green checkmark"
								width="12px"
								height="12px"
							/></Text
						>
					</Item>
					<Item href="javascript:void(0)" on:click={() => (selectedVC = 'blablabla')}>
						<Text
							>bbbb <img
								src={green_checkmark}
								alt="green checkmark"
								width="12px"
								height="12px"
							/></Text
						>
					</Item>
				</List>
			</Content>
		</Drawer>

		<AppContent class="app-content">
			<main class="main-content">
				VC details:
				<br />
				<pre class="status">{selectedVC}</pre>
			</main>
		</AppContent>
	</div>

	<br />
	<!-- "accept": false -->
	<Fab color="primary" on:click={() => handleRequest(items.id, true)} extended>
		<Icon class="material-icons">done</Icon>
		<Label>goedkeuren</Label>
	</Fab>
	<Fab color="primary" on:click={() => (showForm = true)} extended>
		<!-- on:click={() => handleRequest(items.id, false)} -->
		<Icon class="material-icons">close</Icon>
		<Label>afkeuren</Label>
	</Fab>

	{#if showForm === true}
		<br />
		<br />
		<div class="margins">
			<Textfield
				style="width: 75%;"
				helperLine$style="width: 75%;"
				textarea
				bind:value
				label="reden van afkeuring"
			>
				<!-- <HelperText slot="helper">Helper Text</HelperText> -->
			</Textfield>
		</div>
		<br />
		<div>
			<Button
				color="primary"
				on:click={() => handleRequest(items.id, false)}
				variant="raised"
				type="submit">versturen</Button
			>
		</div>
	{/if}
</main>

<style>
	main {
		font-family: sans-serif;
		text-align: center;
	}

	/* These classes are only needed because the
	  drawer is in a container on the page. */
	.drawer-container {
		position: relative;
		display: flex;
		height: 350px;
		max-width: 600px;
		border: 1px solid var(--mdc-theme-text-hint-on-background, grey);
		overflow: hidden;
		z-index: 0;
		margin: auto;
	}

	* :global(.app-content) {
		flex: auto;
		overflow: auto;
		position: relative;
		flex-grow: 1;
	}

	.main-content {
		overflow: auto;
		padding: 16px;
		height: 100%;
		box-sizing: border-box;
	}
</style>

<script lang="ts">
	import { goto } from '$app/navigation';
	import Fab, { Label, Icon } from '@smui/fab';
	import axios from 'axios';
	import Textfield from '@smui/textfield';
	import Button from '@smui/button/src/Button.svelte';
	import Drawer, { AppContent, Content } from '@smui/drawer';
	import List, { Item, Text } from '@smui/list';
	import green_checkmark from '../../../lib/green_checkmark.png';

	type SSICertJSON = [
		{ parent: string | null },
		{ publicKey: string },
		{ credentialText: string },
		{ ownerSignature: string | null },
		{ parentSignature: string | null }
	];

	type Aanvraag = {
		id: number;
		fromUser: string;
		requestText: string;
		date: number;
		attachedVCs: string[];
	};

	let selectedVC = 'nothing selected yet';
	let clicked = 0;
	export let data: { items: Aanvraag };
	const items = data.items;
	let showForm = false;
	let value = '';
	let VCdata = items.attachedVCs.map((vc) => JSON.parse(vc) as SSICertJSON);

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
	<p>{items.requestText}</p>
	<br />
	Meegeleverde VCs bij deze aanvraag:
	<div class="drawer-container">
		<Drawer>
			<Content>
				<List>
					<!-- de img is een green checkmark, deze staat hardcoded omdat de VCs al worden gechecked in de API -->
					{#each VCdata as VC}
						<Item
							href="javascript:void(0)"
							on:click={() => (selectedVC = VC[2].credentialText.split('\n\n')[1])}
						>
							<Text
								>{VC[2].credentialText.split('\n\n')[0]}
								<img src={green_checkmark} alt="green checkmark" width="12px" height="12px" /></Text
							>
						</Item>
					{/each}
				</List>
			</Content>
		</Drawer>

		<AppContent class="app-content">
			<main class="main-content">
				{selectedVC}
			</main>
		</AppContent>
	</div>

	<br />
	<!-- "accept": false -->
	<Fab color="primary" on:click={() => handleRequest(items.id, true)} extended>
		<Icon class="material-icons">done</Icon>
		<Label>goedkeuren</Label>
	</Fab>
	<Fab color="primary" on:click={() => (showForm = !showForm)} extended>
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
		height: auto;
		max-width: 1200px;
		border: 1px solid var(--mdc-theme-text-hint-on-background, grey);
		z-index: 0;
		margin: auto;
		overflow-wrap: break-word;
	}

	* :global(.app-content) {
		flex: auto;
		position: relative;
		flex-grow: 1;
	}

	.main-content {
		padding: 16px;
		height: 100%;
		box-sizing: border-box;
		overflow-wrap: break-word;
	}
</style>

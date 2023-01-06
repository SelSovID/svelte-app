<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '@smui/button/src/Button.svelte';
	import Textfield from '@smui/textfield';
	import axios from 'axios';

	let email = '';
	let wachtwoord = '';
	let clicked = 0;
	let valid = true;

	$: submit = async () => {
		try {
			const response = await axios.post(
				'/api/token',
				{},
				{ withCredentials: true, headers: { Authorization: `Bearer ${wachtwoord}` } }
			);

			if (response.status === 201) {
				goto('/');
			}
		} catch (error) {
			let errorMessage = 'Failed to do something exceptional';
			if (error instanceof Error) {
				errorMessage = error.message;
			}
			console.log(errorMessage);
			valid = false;
			// if (error.status === 401) {
			// 	valid = false;
			// }
		}
	};
</script>

<main>
	<h1>Login</h1>

	<form on:submit|preventDefault={submit}>
		<br />
		<div>
			{#if valid === true}
				<Textfield variant="outlined" bind:value={email} label="email" />
			{:else if valid === false}
				<Textfield variant="outlined" invalid bind:value={email} label="email" />
			{/if}
			<!-- <pre class="status">Value: {email}</pre> -->
		</div>
		<br />
		<div>
			{#if valid === true}
				<Textfield variant="outlined" bind:value={wachtwoord} label="wachtwoord" />
			{:else if valid === false}
				<Textfield variant="outlined" invalid bind:value={wachtwoord} label="wachtwoord" />
			{/if}
			<!-- <pre class="status">Value: {wachtwoord}</pre> -->
		</div>
		<br />
		<div>
			<Button color="primary" on:click={() => clicked++} variant="raised" type="submit"
				>login</Button
			>
		</div>
		<!-- Geen account? registreer <a href="/registreer">hier</a> -->
	</form>
</main>

<style>
	main {
		font-family: sans-serif;
		text-align: center;
	}
</style>

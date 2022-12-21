<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '@smui/button/src/Button.svelte';
	import Textfield from '@smui/textfield';

	import axios from 'axios';

	let email = '';
	let wachtwoord = '';
	let clicked = 0;

	$: submit = async () => {
		const response = await axios.post(
			'/api/token',
			{},
			{ withCredentials: true, headers: { Authorization: `Bearer ${wachtwoord}` } }
		);

		if (response.status === 201) {
			goto('/');
		}
	};
</script>

<main>
	<h1>Login</h1>

	<form on:submit|preventDefault={submit}>
		<br />
		<div>
			<Textfield variant="outlined" bind:value={email} label="email" />
			<!-- <pre class="status">Value: {email}</pre> -->
		</div>
		<br />
		<div>
			<Textfield variant="outlined" bind:value={wachtwoord} label="wachtwoord" />
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

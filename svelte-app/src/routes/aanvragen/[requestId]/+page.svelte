<script lang="ts">
	type Aanvraag = {
		id: number;
		fromUser: string;
		requestText: string;
		date: number;
	};
	export let data: { items: Aanvraag[] };
	const items = data.items;

	function unixConvertion(unixTimestamp: number) {
		const date: Date = new Date(unixTimestamp);
		return date;
	}
</script>

<main>
	<h1>{items.fromUser.email}</h1>
	<h3>{unixConvertion(items.date)}</h3>
	<br />
	<p>{items.requestText}</p>
</main>

<style>
	main {
		font-family: sans-serif;
		text-align: center;
	}
</style>

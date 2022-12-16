<script lang="ts">
	type Aanvraag = {
		id: number;
		// fromUser: string;
		requestText: string;
		date: number;
	};
	export let data: { items: Aanvraag[] };
	const items = data.items;
</script>

<h1>{items.id}</h1>
<p>{items.requestText}</p>

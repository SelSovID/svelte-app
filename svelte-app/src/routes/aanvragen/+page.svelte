<!-- Naam: {item.voornaam} {item.achternaam} <br>
BSN: {item.bsn} <br>
<br>
{#each item.aanvragen as aanvraag}
    {aanvraag.titel}:<br>
    detail: {aanvraag.detail} <br>
    tijd: {aanvraag.tijd} | {aanvraag.datum} <br>
    <br>
{/each} -->
<script lang="ts">
	import DataTable, { Head, Body, Row, Cell, Label, SortValue } from '@smui/data-table';
	import IconButton from '@smui/icon-button';
	import item from '../../lib/data.json';

	type Aanvraag = {
		id: number;
		// fromUser: string;
		requestText: string;
		date: number;
	};
	let items: Aanvraag[] = [];
	let sort: keyof Aanvraag = 'date';
	let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending';

	if (typeof item !== 'undefined') {
		fetch(
			// 'https://gist.githubusercontent.com/hperrin/e24a4ebd9afdf2a8c283338ae5160a62/raw/dcbf8e6382db49b0dcab70b22f56b1cc444f26d4/users.json'
			// 'src/lib/data.json'
			'/api/request'
		)
			.then((response) => response.json())
			.then((json) => (items = json));
	}

	function handleSort() {
		items.sort((a, b) => {
			const [aVal, bVal] = [a[sort], b[sort]][
				sortDirection === 'ascending' ? 'slice' : 'reverse'
			]();
			if (typeof aVal === 'string' && typeof bVal === 'string') {
				return aVal.localeCompare(bVal);
			}
			return Number(aVal) - Number(bVal);
		});
		items = items;
	}

	function unixConvertion(unixTimestamp: number) {
		const date: Date = new Date(unixTimestamp / 1000);
		return date;
	}
</script>

<!-- <script>
  import item from '../../lib/data.json';
</script> -->

<!-- The "item" variable can be treated like a parsed object: -->

<main>
	<h1>Aanvragen</h1>

	<DataTable
		sortable
		bind:sort
		bind:sortDirection
		on:SMUIDataTable:sorted={handleSort}
		table$aria-label="Aanvraag list"
		style="width: 50%;"
	>
		<Head>
			<Row>
				<!-- <Cell numeric columnId="id">
					<IconButton class="material-icons">arrow_upward</IconButton>
					<Label>Aanvraag ID</Label>
				</Cell> -->
				<Cell columnId="requestText" style="width: 100%;">
					<Label>Aanvraag</Label>
					<IconButton class="material-icons">arrow_upward</IconButton>
				</Cell>
				<Cell numeric columnId="date">
					<Label>Datum</Label>
					<IconButton class="material-icons">arrow_upward</IconButton>
				</Cell>
			</Row>
		</Head>

		<Body>
			{#each items as item (item.id)}
				<Row>
					<!-- <Cell numeric>{item.id}</Cell> -->
					<Cell on:click={() => alert('details van: ' + item.requestText)}>{item.requestText}</Cell>
					<Cell numeric>{unixConvertion(item.date)}</Cell>
					<!-- <Cell>{item.website}</Cell> -->
				</Row>
			{/each}
		</Body>
	</DataTable>
</main>

<style>
	main {
		font-family: sans-serif;
		text-align: center;
	}
</style>

<!-- <script>
  import item from '../../lib/data.json';
</script> -->

<!-- The "item" variable can be treated like a parsed object: -->

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
  import DataTable, {
    Head,
    Body,
    Row,
    Cell,
    Label,
    SortValue,
  } from '@smui/data-table';
  import IconButton from '@smui/icon-button';

  import item from '../../lib/data.json';

  type Aanvraag = {
    aanvraagID: number;
    aanvraagType: string;
    datum: string;
    tijd: string;
  };
  let items: Aanvraag[] = [];
  let sort: keyof Aanvraag = 'aanvraagID';
  let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending';

  if (typeof item !== 'undefined') {
    fetch(
      'src/lib/data.json'
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
</script>

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
      <!--
          Note: whatever you supply to "columnId" is
          appended with "-status-label" and used as an ID
          for the hidden label that describes the sort
          status to screen readers.

          You can localize those labels with the
          "sortAscendingAriaLabel" and
          "sortDescendingAriaLabel" props on the DataTable.
      -->
      <Cell numeric columnId="id">
          <!-- For numeric columns, icon comes first. -->
          <IconButton class="material-icons">arrow_upward</IconButton>
          <Label>Aanvraag ID</Label>
      </Cell>
      <Cell columnId="aanvraagType" style="width: 100%;">
          <Label>Aanvraag</Label>
          <!-- For non-numeric columns, icon comes second. -->
          <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <Cell columnId="datum">
          <Label>Datum</Label>
          <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <Cell columnId="tijd">
          <Label>Tijd</Label>
          <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <!-- You can turn off sorting for a column. -->
      <!-- <Cell sortable={false}>Website</Cell> -->
      </Row>
  </Head>
  <Body>
      {#each items as item (item.aanvraagID)}
      <Row>
          <Cell numeric>{item.aanvraagID}</Cell>
          <Cell>{item.aanvraagType}</Cell>
          <Cell>{item.datum}</Cell>
          <Cell>{item.tijd}</Cell>
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
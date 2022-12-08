<script lang="ts">
    import List, {Item, Graphic, Meta, Text, PrimaryText, SecondaryText,} from '@smui/list';
    import IconButton from '@smui/icon-button';

    let clicked = 0;

    let options = [
        {name: 'Bruce Willis'},
        {name: 'Austin Powers'},
        {name: 'Thomas Edison'},
        {name: 'Stephen Hawking'},
        {name: 'Wouter de Boer'},
        {name: 'Hylbren Rijnders'},
        {name: 'Mees van Dijk'},
        {name: 'Daniel Hofman'},
        {name: 'Henk Tatje'},
    ];
    let selection = 'Stephen Hawking';
    // This value is updated when the component is initialized, based on the
    // selected Item's `selected` prop.
    let selectionIndex: number | undefined = undefined;

    let selectionStatus: number | undefined = undefined;
</script>

<h1>Aanvragen (2e manier)</h1>

<div>
    <List class="demo-list"
        avatarList
        singleSelection
        bind:selectedIndex={selectionIndex}
    >
        {#each options as item}
        <Item
            on:SMUI:action={() => (selection = item.name)}
            selected={selection === item.name}
        >
            <Graphic
            style="background-image: url(https://place-hold.it/40x40?text={item.name
                .split(' ')
                .map((val) => val.substring(0, 1))
                .join('')}&fontsize=14);"
            />
            <Text>
            <PrimaryText>{item.name}</PrimaryText>
            </Text>
            <Meta>
                <IconButton 
                    on:click=
                    {() => alert(selection + " goedgekeurd")} 
                    
                    class="material-icons">done</IconButton>
                <IconButton on:click={() => alert(selection + " afgewezen")} class="material-icons">close</IconButton>
                <IconButton on:click={() => alert("*informatie van " + selection + "*")} class="material-icons">info</IconButton>
            </Meta>

        </Item>
        {/each}
    </List>
</div>
  
<pre 
class="status">Selected: {selection}, value of selectedIndex: {selectionIndex}
</pre>
  
<style>
    * :global(.demo-list) {
        max-width: 600px;
    }
</style>
  

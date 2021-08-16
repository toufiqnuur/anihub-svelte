<script>
  import AppHeader from './lib/AppHeader.svelte'
  import CardGroup from './lib/CardGroup.svelte'
  import CardItem from './lib/CardItem.svelte'
  import apiReq from './service'
  
  const promises = Promise.all([
    apiReq.getTrending,
    apiReq.getAiring,
    apiReq.getUpcoming,
    apiReq.getBest,
    apiReq.getPopular
  ])
  
  const title = [
    "Trending",
    "Top Airing",
    "Top Upcoming",
    "Highest Rated",
    "Most Popular"
  ]
  
  let defaultView = null
  
  let searchQuery = ''
  function setQuery(query) {
    searchQuery = query
    defaultView.remove()
  }
</script>

<AppHeader {setQuery} />
<div class="container-lg py-4">
  {#if searchQuery}
    {#await apiReq.search(searchQuery) then res}
      <CardGroup 
        title={`Results for "${searchQuery}"`}
        expand="vertikal">
        {#each res.data.data as data}
          <CardItem {data} />
        {/each}
      </CardGroup>
    {/await}
  {/if}
  <div bind:this={defaultView}>
  {#await promises then res}
    {#each res as data, index}
      <CardGroup 
        title="{title[index]}"
        expand="horizontal">
        {#each data.data.data as data}
          <CardItem {data} />
        {/each}
      </CardGroup>
    {/each}
  {/await}
  </div>
</div>

<style>
</style>
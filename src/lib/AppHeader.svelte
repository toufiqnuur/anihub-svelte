<script>
  export let setQuery 
  
  let query = ''
  let field = null
</script>

<nav class="navbar navbar-dark bg-gradient bg-dark position-relative py-5">
  <div class="container justify-content-center">
    <a class="navbar-brand fs-1 fw-bold me-0" href="/">
      Ani<span class="text-dark bg-warning rounded px-1 ms-1">hub</span>
    </a>
    <form class="d-flex shadow rounded position-absolute"
      on:submit|preventDefault={() => { 
          if(query.trim().length) {
            setQuery(query)
          }
          field.blur()
        }
      }>
      <input class="border-0 rounded-start px-3" type="text" placeholder="Search (e.g. naruto)"
        bind:this={field}
        bind:value={query}/>
      <input class="bg-warning border border-3 border-white rounded-end px-3" type="submit" value="Cari"/>
    </form>
  </div>
</nav>

<style>
  .navbar,
  .navbar-brand {
    margin-bottom: 1.325rem;
  }
  .navbar form {
    height: 2.75rem;
    bottom: -1.325rem;
  }
  .navbar form * {
    outline: none;
  }
  .navbar form [type="submit"]:active {
    border-color: rgb(255,193,7)!important;
  }
</style>
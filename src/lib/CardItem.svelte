<script>
  export let data
</script>

<div class="col-6 col-md-2">
  <div class="card border-0 bg-secondary position-relative overflow-hidden">
    <img src="{data.attributes.posterImage.small}" width="100%" alt="{data.attributes.titles.en_jp}" />
    <div class="bg-ovarlay position-absolute bottom-0 w-100 p-3">
      <h5 class="text-light overflow-hidden mb-0">{data.attributes.titles.en_jp}</h5>
    </div>
  </div>
</div>


<style>
  .card {
    aspect-ratio: 2/3;
  }
  .card img {
    transform: scale(1.25);
    object-position: center;
  }
  .card h5 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .bg-ovarlay {
    background: -webkit-linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.9));
    background: -moz-linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.9));
    background: -o-linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.9));
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.9));
  }
</style>
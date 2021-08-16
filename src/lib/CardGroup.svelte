<script>
  export let title, expand
</script>

<h3 class="mb-3">{ title }</h3>
<div class="row mb-4 { expand==='horizontal' ? 'gx-3 flex-nowrap overflow-auto' : 'g-3' }">
  <slot></slot>
</div>

<style>
</style>
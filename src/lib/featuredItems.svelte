<script>
    import Plant from '$lib/plant.svelte'
    export let SectionTitle;
</script>
 
 <div class="plantGridCon">
      <h3 class="catTitle">{SectionTitle}</h3>
      <div class="plantGrid">
        <Plant />
        <Plant />
        <Plant />
        <Plant />
      </div>
    </div>
    
<style>
    .plantGridCon {
  margin: 0 1rem;
  padding: 1rem 0;
}

.plantGrid {
  padding-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}


@media screen and (min-width: 660px) { .plantGridCon {
    margin-left: 2rem;
  }

  .plantGrid {
    display: flex;
    flex-direction: row;
  }
}
</style>
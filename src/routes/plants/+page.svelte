<script>
  import '$lib/styles.css';
  import plant from '$lib/images/plantHolder.png';
  export let data;

  $: {
    console.log(data);
  }
</script>
 
 <div class="plantGridCon">
      <h3 class="catTitle">Our Plants</h3>

        {#if data.plants}
          <div class="plantGrid">
            {#each data.plants as { name, subtitle, price, slug, image }}
              <a href={`/collection/${slug}`}>
                <div class="plantCon">
                  <img src={image[0]} alt="plant" />
                  <h4 class="plantConTitle plantConText">{name}</h4>
                  <h5 class="PlantConSub plantConText">{subtitle}</h5>
                  <h5 class="plantDollars plantConText">${price}</h5>
                </div>
              </a>
            {/each}
          </div>
        {/if}

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

.plantConText {
  margin: 0.5rem 0 0;
}


@media screen and (min-width: 660px) { 
  
  .plantGridCon {
    margin: 0 2rem;
  }

  .plantGrid {
    padding-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  }
}

img{
  aspect-ratio: 5/6;
  transition: .3s;
}

img:hover{
  cursor: pointer;
  transform: scale(1.02);
}
</style>


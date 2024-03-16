<script>
    import '$lib/styles.css';
    import BigFeature from '$lib/bigFeature.svelte';
    import '$lib/styles.css';
    export let data;

  $: {
    console.log(data);
  }
</script>



  <div class="hero">
      <div class="heroCon">
      <h2 class="heroText">Bloom where you're planted</h2>
        <a href="/collection">
          <div class="shopNow">
          <p class="shopNowText">Shop Now</p>
          </div>
        </a>
      </div>
    </div>

<div class="plantGridCon">
    <h3 class="catTitle">Featured Items</h3>
    <div class="plantGrid">

       {#each data.plants.slice(0, 4) as { name, subtitle, price, slug, image }}
  <a href="/collection/{slug}">
    <div class="plantCon">
      <img src={image[0]} alt="plant" />
      <h4 class="plantConTitle plantConText">{name}</h4>
      <h5 class="PlantConSub plantConText">{subtitle}</h5>
      <h5 class="plantDollars plantConText">${price}</h5>
    </div>
  </a>
{/each}
      
    
    </div>
</div>

<div class="plantGridCon two">
    <h3 class="catTitle">Best Sellers</h3>
    <div class="plantGrid">

       {#each data.plants.slice(5, 9) as { name, subtitle, price, slug, image }}
  <a href="/collection/{slug}">
    <div class="plantCon">
      <img src={image[0]} alt="plant" />
      <h4 class="plantConTitle plantConText">{name}</h4>
      <h5 class="PlantConSub plantConText">{subtitle}</h5>
      <h5 class="plantDollars plantConText">${price}</h5>
    </div>
  </a>
{/each}
    </div>
</div>

<BigFeature FeatureTitle='See our plant collection'  shopNow='shopNowAlt' href='/plants' hrefClass='white' plant='/images/spider-plant-2.webp' />
<BigFeature FeatureTitle='See our ceramic collection' altColor='altColor' shopNow='shopNow' href='/ceramics' hrefClass='black' plant='/images/roma-planter-2.webp'/>


<style>
.hero {
  height: 80vh;
  background-image: url(../lib/images/hero.jpeg);
  background-position: 80% -10%;
  background-size: 325%;
  background-repeat: no-repeat;
  background-attachment: scroll, scroll;
  padding-left: 1rem;
}

.heroText {
  padding-top: 2rem;
  font-family: "encodeSansLight";
}

.shopNow {
  border: black solid 1px;
  border-radius: 34px;
  width: 8rem;
  text-align: center;
  margin-top: 1rem;
  transition: .3s;
}

.shopNowText {
  margin: 0.5rem;
}

.shopNow:hover {
  background-color: var(--dark-green);
  cursor: pointer;
  color: white !important;
}



@media screen and (min-width: 660px) {
  .hero {
    background-position: 80% 60%;
    background-size: 150%;
    padding-left: 2rem;
  }

  .heroText {
    font-family: "encodeSansLight";
    max-width: 30rem;
    padding-top: 8rem;
  }
}

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

.two{
  margin-bottom: 3rem;
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
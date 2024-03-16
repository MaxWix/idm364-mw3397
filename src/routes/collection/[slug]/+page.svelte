<!-- src/routes/[slug]/+page.svelte -->
<script lang="js">
   import '$lib/styles.css';
   import { page } from '$app/stores';
    import FeaturedItems from '$lib/featuredItems.svelte';
    import Plant from '$lib/plantSingle.svelte';
    import OrderOptions from '$lib/orderOptions.svelte';
    import Paragraphs from '$lib/singlePageParagraph.svelte';
    import { cart } from '../../../stores/cartStore.js';

    let potStyleSelectedOption = null;
    let sizeSelectedOption = null;
    let colorSelectedOption = null;

    let itemAdded = false; // Variable to track if item has been added to cart
    function addToCart() {
            cart.addItem(plant, additionalPrice);
            itemAdded = true;
            setTimeout(() => (itemAdded = false), 3000);
    }    
    
  /**
   * @typedef {Object} Plant
   * @property {string} name - The name of the team.
   * @property {string} subtitle - The city of the team.
   * @property {intiger} price - The mascot of the team.
   * @property {string} description - The record of the team.
   */

  /**
   * @typedef {Object} Data
   * @property {Plant[]} plants - The team data.
   */

  /** @type {Data} */
  export let data;

    let plant = data.plants;

  $: {
    const { slug } = $page.params;
    plant = data.plants.find((plant) => plant.slug === slug);
  }
  
  let additionalPrice = 0;

    $: {
    additionalPrice = 0;  // Start with a base additional price of 0

    // Check the pot style and adjust the additional price
    if (potStyleSelectedOption == 'Ceramic') {
        additionalPrice += 20;  // Add 15 if the pot style is Ceramic
    }

    // Check the pot size and adjust the additional price
    if (sizeSelectedOption == 'Medium') {
        additionalPrice += 30;  // Add 30 if the size is Medium
    } else if (sizeSelectedOption == 'Large') {
        additionalPrice += 50;  // Add 50 if the size is Large
    }
}

    $: totalPrice = plant.price + additionalPrice;

    $: canAddToCart = potStyleSelectedOption !== null &&
                      sizeSelectedOption !== null &&
                      (potStyleSelectedOption !== 'Ceramic' || colorSelectedOption !== null);

</script>
 
{#if plant}
  <div class="imageHeaderPriceCon">
    <div class="imageCon">
        <Plant images={plant.image}/>
    </div>
    <!-- Remainder of your layout -->
    <div class="priceCon">
        <h3 class="plantConTitle plantConText">{plant.name}</h3>
        <h4 class="plantDollars plantConText">${totalPrice.toFixed(2)}</h4>
    {#if !plant.isCeramic}
        <div class="orderOptions"> 
            {#if plant.potStyle}
            <OrderOptions optionTitle='Pot Style' options={plant.potStyle} bind:selectedOption={potStyleSelectedOption}/>
            {/if}
            {#if plant.potStyle === null}
                <br>
            {/if}
            {#if potStyleSelectedOption === 'Ceramic'}
                <OrderOptions optionTitle='Pot Color' options={plant.colorOptions} bind:selectedOption={colorSelectedOption}/>
            {/if}
            {#if plant.sizeOptions  === null}
                <br>
            {/if}
            {#if plant.colorOptions === null}
                <br>
            {/if}
            {#if plant.sizeOptions}
            <OrderOptions optionTitle='Plant size' options={plant.sizeOptions} bind:selectedOption={sizeSelectedOption} />
            {/if}
            {#if plant.sizeOptions === null}
                <br>
            {/if}
            </div>
      
  

    <button class='addToCart' on:click={addToCart} disabled={!canAddToCart}>
    Add To Cart
    </button>
    {:else}
        <div class="orderOptions"> 
            {#if plant.colorOptions}
                <OrderOptions optionTitle='Pot Color' options={plant.colorOptions} bind:selectedOption={colorSelectedOption}/>
            {/if}
            {#if plant.colorOptions === null}
                <br>
            {/if}
        </div>

        <button class='addToCart' on:click={addToCart} >
            Add To Cart
        </button>
    {/if}

    {#if itemAdded}
        <p class="addedToCartMessage">{plant.name} added to cart!</p>
    {/if}


    <!-- <div class="guides">
            <a href="">
            <p class='guideText'>Light Guide</p>
            </a>

            <a href="">
            <p class='guideText'>Size Guide</p>
            </a>
    </div> -->
        
    <hr> 

    {#if plant.description}
    {#each plant.description as paragraph}
        <Paragraphs Paragraphs={paragraph}/>
    {/each}
    {/if}

    <!-- <Paragraphs Paragraphs='Lorem ipsum dolor sit amet consectetur. Praesent fermentum pellentesque velit velit. Pretium venenatis ipsum viverra feugiat neque a'/>
    <Paragraphs Paragraphs='enean sagittis. Quam sapien arcu libero ligula. Faucibus cras ultrices tortor eget commodo enim.'/>
    <Paragraphs Paragraphs='Nullam elit lacus senectus massa. Ut massa cum amet.'/> -->

  </div> 
</div>
{:else}
  <p>No plant found</p>
{/if}

<style>
    .imageHeaderPriceCon {
        margin: 2rem 2rem;
    }

    .orderOptions{
        margin: 2rem 0;
    }

    button{
        border: 1px black solid;
        background-color:var(--light-green) ;
        padding: 0.5rem 1rem;
        border-radius: 34px;
        font-size: 20px;
        color: white;
        width:100%;
    }

    button:disabled {
    background-color: grey;
    color: #ccc;
    cursor: default;
}

    .guides{
        display: flex;
        justify-content: flex-start;
        gap: 1rem;
        margin: 1rem 0;
        color: grey;
    }

    hr {
        text-align:center;
        margin: 2rem 0rem;
    }

    h3{
        font-family: playfairRegular;
        font-weight: 400;
    }

    h4{
        font-family: "encodeSansReg";
        font-weight: 400;
    }

    .plantConText {
        margin: 0.5rem 0 0;
    }

    @media screen and (min-width: 801px) {
        .imageHeaderPriceCon{
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 4rem;
            margin: 2rem auto;
            padding: 0 2rem;
            max-width: 1000px;
        }

        

        h3{
            font-size:4rem;
        }

    }

    button:not(:disabled):hover {
    background-color: var(--dark-green); /* Change to a darker green on hover */
    cursor: pointer;
}

    .addedToCartMessage{
        color: var(--light-green);
        font-size: 1;
        margin: 0;
    }


</style>
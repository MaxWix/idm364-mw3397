<script>
  import { cart } from '../stores/cartStore.js';

  let cartReset = false;

  function handleCheckout() {
    cart.reset();
    cartReset = true;
    setTimeout(() => (cartReset = false), 5000);
  }

  $: console.log($cart);
</script>

<section>
  <h2>Shopping Cart</h2>
  <div class="bigGrid">
  <div class="bigGridLeft">
    <ul>
      {#each $cart.items as item (item.name)}
        <li>
          <div class="right">
            <h4>{item.name}</h4>
            <div class="details">
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
              <button class="remove" on:click={() => cart.removeItem(item.name)}>Remove</button>
            </div>
          </div>
          <div class="left">
          <img src="{item.image[0]}" alt="">
          </div>
        </li>
      {/each}
    </ul>
  </div>
  <div class="bigGridRight">
    <p>Subtotal: ${$cart.total.toFixed(2)}</p>
    <button class="addToCart" on:click={handleCheckout}>Check Out</button>
    {#if cartReset}
              <p class="reset">Your order has been placed! Shipping details to come </p>
  {/if}
  </div>
  </div>
</section>

<style>
  section{
    max-width: 900px;
    margin: 0 2rem;
    min-height: 70vh;
  }

  .addToCart {
        border: 1px black solid;
        background-color:var(--light-green) ;
        padding: 0.5rem 1rem;
        border-radius: 34px;
        font-size: 20px;
        color: white;
        width:50%;
        margin-top: 1rem;
  }

  .remove{
     border: 1px black solid;
        background-color:var(--light-green) ;
        padding: 0.3rem .75rem;
        border-radius: 5px;
        font-size: 16px;
        color: white;
  }

  .remove:hover{
    background-color: var(--dark-green);
    cursor: pointer;
  }

  .addToCart:hover{
    background-color: var(--dark-green);
    cursor: pointer;
  }

  li {
    list-style: none;
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: 175px 1fr;
  }

  .left{
    grid-column: 1/2;
    grid-row: 1/2;
    text-align: left;
  }

  .right{
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;    
  }

  img{
    max-width: 150px;
    aspect-ratio: 4/5;
  }

  ul{
    padding: 0;
  }

  .details{
    margin-top: auto;
  }

  p{
    margin-bottom: .5rem;
  }

  .bigGrid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 4rem;
  }

  .bigGridLeft{
    grid-column: 1/2;
  }

  .bigGridRight{
    grid-column: 2/3;
    margin-top: 1rem;
  }

  .reset{
    margin-top: 1rem;
    color: var(--light-green);
  }


</style>
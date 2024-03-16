<script>
	import cart from '$lib/assets/ei_cart.svg'
</script>

<div class="header">
	<div class="headerAndMenu">
	<div class="title">
		<a href="/">
		<h1>Plant Bay</h1>
		</a> 
	</div>
	<nav class="menu">
		<a href="/"
              ><p>Home</p></a
            >
		<a href="/collection"
              ><p>Our Collection</p></a
            >
		<a href="/plants"
              ><p>Plants</p></a
            >
		<a href="/ceramics"
              ><p>Ceramics</p></a
            >
			<a href="#"
              ><p>Our Story</p></a
            >
	</nav>
	</div>
	<div class="cart">
		<a href="/cart">
		<img src={cart} alt="cart" />
		</a>
	</div>
</div>

<style>
	.header{
		display: flex;
		padding: 1rem 2rem;
		justify-content: space-between;
		flex-direction: row;
		align-items:baseline
	}

	.headerAndMenu{
		display: flex;
		align-items: center;
		width: 100%;
		gap: 1rem;
	}

	.menu{
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.cart{
		display: flex;
		align-items: flex-end;
	}

	.cart:hover{
		cursor: pointer;
	}
</style>
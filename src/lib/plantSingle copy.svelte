<script>
    export let images = [];
    export let initialImgId = 1;

    let imgId = initialImgId;

    import plant from '$lib/assets/plantHolder.png'
    import plant2 from '$lib/assets/plant2.webp'
    import plant3 from '$lib/assets/plant3.webp'
    import plant4 from '$lib/assets/plant4.webp'

    import { onMount } from 'svelte';

    function slideImage() {
        const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
        document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    }

    onMount(() => {
        const imgs = document.querySelectorAll('.img-select a');
        const imgBtns = [...imgs];

        imgBtns.forEach((imgItem) => {
            imgItem.addEventListener('click', (event) => {
                event.preventDefault();
                imgId = parseInt(imgItem.dataset.imgId);
                slideImage();
            });
        });
    });
</script>

<div class="card-wrapper">
    <div class="card">
        <!-- card left -->
        <div class="product-imgs">
            <div class="img-display">
                <div class="img-showcase">
                    {#each images as img, index}
                        <img src={img} alt={`Plant image ${index + 1}`}>
                    {/each}
                </div>
            </div>
            <div class="img-select">
                {#each images as img, index}
                    <div class="img-item">
                        <a href="#top" data-img-id={index + 1}>
                        <img src={img} alt={`Plant thumbnail ${index + 1}`}>
                        </a> 
                    </div>
                {/each}
            </div>
            <!-- card right -->
        </div>
    </div>
</div>

<style>
   .card-wrapper{
    max-width: 1000px;
   }

   img{
    width: 100%;
   }

   .img-display{
    overflow: hidden;
   }

   .img-showcase{
    display: flex;
    width: 100%;
    transition: all 0.5s ease;
   }

   .img-showcase img{
    min-width: 100%;
   }
   
   .img-select{
    display: flex;
   }

   .img-item{
    margin: 0.3rem 0.3rem 0.3rem 0;
    width: 6rem;
    border: 1px solid #000;
   }

   .img-item:nth-child(1), .img-item:nth-child(2), .img-item:nth-child(3){
    margin-right: 1rem;
   }

   .img-item:hover {
    opacity: 0.8;
   }

   @media screen and (min-width: 820px) {
    .card-wrapper{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .product-imgs{
        text-decoration-skip: flex;
        flex-direction: column;
        justify-content: center;
    }
   }

</style>


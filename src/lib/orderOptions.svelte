<script>
    export let optionTitle = '';
    export let options = []; // Array of option labels
    export let selectedOption = null;

    function selectOption(option) {
        selectedOption = option;
    }
</script>

<div class="orderOptionsCon">
    <p>{optionTitle}</p>
    <div class="options">
        {#each options as option}
            <button on:click={() => selectOption(option)} 
                class:selected={option === selectedOption}>{option}</button>
        {/each}
    </div>
</div>

<style>
    p{
        font-size: 14px;
        color: grey;
        margin: 1.25rem 0 .5rem;
    }

    .options{
        display: flex;
        justify-content: flex-start;
        gap: 1rem;
        flex-direction: row;
    }

    button {
        border: 1px black solid;
        background-color: var(--tan) ;
        padding: 0.5rem 1rem;
        border-radius: 34px;
        font-size: 14px;
        color: black;
        transition: color 0.3s, background-color 0.3s;
    }

    button:hover, button.selected{
        background-color: var(--dark-green);
        color: white;
        cursor: pointer;
    }

    button.selected{
        cursor: default;
    }

</style>
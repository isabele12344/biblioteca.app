<script lang="ts">
    import Header from '$lib/componentes/Header.svelte';
    import Footer from '$lib/componentes/Footer.svelte';
    import { goto } from '$app/navigation';
</script>
<Header />
<nav class="botão">
    <button on:click={() => goto('/')}>Livros mais vendidos</button>
</nav>
<slot />
<Footer />
<style>
    .botão{
        text-align: center;
        margin: 1rem 0;
    }
</style>
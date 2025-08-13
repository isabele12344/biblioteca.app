<script lang="br">
	import Destaques from "$lib/componentes/Destaques.svelte";
    import { goto } from '$app/navigation';

    const livros = [
        { titulo: "A Menina que Roubava Livros", autor: "Markus Zusak" },
        { titulo: "O Alquimista", autor: "Paulo Coelho" },
        { titulo: "Dom Casmurro", autor: "Machado de Assis" }
    ];
</script>

<Destaques/>
<nav class="botão">
    <button on:click={() => goto('/')}>Livros mais vendidos</button>
</nav>

<ul>
    {#each livros as livro}
        <li>
            <strong>{livro.titulo}</strong> — {livro.autor}
        </li>
    {/each}
</ul>
<button on:click={() => goto('/mais-vendidos')}>Mais vendidos</button>
<style>
    .botão{
        position: relative;
        top: -25px;
        text-align: center;
        margin: 1rem 0;
    }
</style>




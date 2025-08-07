<script lang="br">
	import Destaques from "$lib/componentes/Destaques.svelte";

    const livros = [
        { titulo: "A Menina que Roubava Livros", autor: "Markus Zusak" },
        { titulo: "O Alquimista", autor: "Paulo Coelho" },
        { titulo: "Dom Casmurro", autor: "Machado de Assis" }
    ];
</script>

<Destaques/>

<h1>Livros Mais Vendidos</h1>
<ul>
    {#each livros as livro}
        <li>
            <strong>{livro.titulo}</strong> — {livro.autor}
        </li>
    {/each}
</ul>



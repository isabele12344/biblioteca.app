<script>
    // Exemplo de dados de livros mais vendidos
    let livros = [
        { titulo: "Dom Casmurro", autor: "Machado de Assis" },
        { titulo: "O Alquimista", autor: "Paulo Coelho" }
    ];
    import { goto } from '$app/navigation';
</script>

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
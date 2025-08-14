<script>
  import { onMount } from 'svelte';
  import { listarLivros } from '$lib/api';
  import { goto } from '$app/navigation';

  /**
	 * @type {any[]}
	 */
  let livros = [];

  onMount(async () => {
    livros = await listarLivros();
  });
</script>

<nav class="botão">
  <button on:click={() => goto('/mais-vendidos')}>Livros mais vendidos</button>
</nav>

<ul>
  {#each livros as livro}
    <li>
      <strong>{livro.titulo}</strong> — {livro.autor}
    </li>
  {/each}
</ul>

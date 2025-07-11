<script lang="ts">
	import Menu from '$lib/componentes/Menu.svelte';
	import Rodape from '$lib/componentes/Rodape.svelte';
	import '../app.css';

	let { children } = $props();
</script>
<Menu/>
{@render children()}
<Rodape/>
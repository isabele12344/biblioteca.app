<script lang="ts">
	import Menu from '$lib/componentes/Menu.svelte';
	import Footer from '$lib/componentes/Footer.svelte';
	import Header from '../lib/componentes/Header.svelte';
	import '../app.css';
	

	let { children } = $props();
</script>
<Menu/>
{@render children()}
<Rodape/>
<Header/>
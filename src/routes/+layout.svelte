<script lang="ts">
	import Header from '$lib/componentes/Header.svelte';
	import Footer from '$lib/componentes/Footer.svelte';
	import Header from '../lib/componentes/Header.svelte';
	import Menu from '$../lib/componentes/Menu.svelte';
	

	let { children } = $props();
</script>
<slot />
<Header/>
<Footer/>
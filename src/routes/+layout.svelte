<script lang="ts">
	import Header from '$lib/componentes/Header.svelte';
	import Footer from '$lib/componentes/Footer.svelte';
	import '../app.css';
	

	let { children } = $props();
</script>
<slot />
<Header/>
<Footer/>
<script lang="ts">
    import Header from '$lib/componentes/Header.svelte';
    import Menu from '$lib/componentes/Menu.svelte';
    import Footer from '$lib/componentes/Footer.svelte';
</script>

<Header />
<slot />
<Menu />
<Footer />
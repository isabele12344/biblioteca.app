<script lang="ts">
    import Header from '$lib/componentes/Header.svelte';
    import Footer from '$lib/componentes/Footer.svelte';
    import { goto } from '$app/navigation';
</script>
<Header />

<slot />
<Footer />

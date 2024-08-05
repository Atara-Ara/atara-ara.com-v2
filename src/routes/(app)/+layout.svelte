<script>
	import Navbar from '../../lib/components/Navbar.svelte';
	import Footer from '../../lib/components/Footer.svelte';
</script>

<div class="app">
	<Navbar />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
</style>

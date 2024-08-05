<script>
	import Navbar from '../../lib/components/Navbar.svelte';
	import Footer from '../../lib/components/Footer.svelte';
	import '../../app.sass';
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

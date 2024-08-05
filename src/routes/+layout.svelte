<script>
	import Navbar from '../lib/components/Navbar.svelte';
	import '../app.sass';
</script>

<div class="app">
	<Navbar />
	<main>
		<slot />
	</main>
</div>

<style>
</style>

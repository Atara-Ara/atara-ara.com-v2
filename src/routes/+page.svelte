<script>
	import Footer from '../lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Atara Ara</title>
	<meta name="description" content="Offical website for Atara Ara." />
</svelte:head>

<main>
	<h1>Atara Ara</h1>

	<h2>TALK TO ME</h2>
	<h3>OUT NOW</h3>

	<nav>
		<ul>
			<li>
				<a href="/music">Music</a>
			</li>
			<li>
				<a href="/shows">Shows</a>
			</li>
			<li>
				<a
					href="https://atara-ara.bandcamp.com/"
					target="_blank"
					rel="noopener noreferrer">Store</a
				>
			</li>
			<li>
				<a href="/gallery">Gallery</a>
			</li>
		</ul>
	</nav>

	<img id="follow" src="../images/home/follow.svg" alt="Follow" />
	<div>
		<a
			href="https://open.spotify.com/artist/14OyPLu62THKH6fGLtjowq?si=F8Ka9GxPRheSR2fRNXQkKQ"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img class="socials" src="../images/home/spotify.svg" alt="Spotify" />
		</a>
		<a
			href="https://www.instagram.com/atara_ara/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img class="socials" src="../images/home/instagram.svg" alt="Instagram" />
		</a>
		<a
			href="https://www.tiktok.com/@atara_ara"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img class="socials" src="../images/home/tiktok.svg" alt="TikTok" />
		</a>
		<a
			href="https://www.youtube.com/channel/UCRQ8erI1G9Ubp-v1nFBsrbA"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img class="socials" src="../images/home/youtube.svg" alt="Youtube" />
		</a>
		<a href="https://atara-ara.bandcamp.com/" target="_blank" rel="noreferrer">
			<img class="socials" src="../images/home/bandcamp.svg" alt="Bandcamp" />
		</a>
		<a
			href="https://music.apple.com/us/artist/atara-ara/1644218162"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img
				class="socials"
				src="../images/home/apple-music.svg"
				alt="Apple Music"
			/>
		</a>
		<a href="https://soundcloud.com/atara_ara" target="_blank" rel="noreferrer">
			<img
				class="socials"
				src="../images/home/soundcloud.svg"
				alt="Soundcloud"
			/>
		</a>
		<a
			href="https://music.amazon.com.au/artists/B0BDR9KLBG/atara-ara?marketplaceId=A39IBJ37TRP1C6&musicTerritory=AU&ref=dm_sh_GVkt6RXZgimhHKejFX0B3KcXK"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img
				class="socials"
				src="../images/home/amazon-music.svg"
				alt="Amazon Music"
			/>
		</a>
	</div>

	<Footer />
</main>

<style>
	main {
		margin: 0;
		padding: 0;
		background-image: url('../images/home/background.jpeg');
		background-size: cover;
		background-position: center;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#follow {
		width: 200px;
	}

	.socials {
		width: 20px;
		height: 20px;
	}
</style>

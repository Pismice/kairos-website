<script lang="ts">
	function connectToServer() {
		// Method 1: Using steam:// protocol (recommended)
		window.location.href = 'steam://connect/91.99.14.212:27015';
	}
</script>

<!-- Hero Section -->
<section id="home" class="hero min-h-screen" style="background-image: url(/cscz.jpg);">
	<div class="hero-overlay backdrop-brightness-40"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-4xl">
			<h1
				class="mb-5 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-6xl font-bold text-transparent"
			>
				CS Zombie Plague
			</h1>
			<img src="/logo_transp.png" alt="Logo" class="mx-auto h-64 w-auto" />
			<p class="mx-auto mb-8 max-w-2xl text-xl">
				Revive the clasic Counter-Strike Zombie Plague experience with modern features
			</p>
			<div class="flex justify-center gap-4">
				<button class="btn btn-lg btn-primary" on:click={connectToServer}
					>Connect to the server</button
				>
				<button class="btn btn-outline btn-lg">Watch Trailer</button>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section id="features" class="bg-base-200 py-20">
	<div class="container mx-auto px-4">
		<h2 class="mb-12 text-center text-4xl font-bold">Features</h2>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			<div class="card bg-base-100 shadow-xl">
				<div class="card-body text-center">
					<div class="mb-4 text-4xl">👨‍💻</div>
					<h3 class="card-title justify-center">Active Development</h3>
					<p>Our developers are actively engaged and listening to the community feedback</p>
				</div>
			</div>
			<div class="card bg-base-100 shadow-xl">
				<div class="card-body text-center">
					<div class="mb-4 text-4xl">🏆</div>
					<h3 class="card-title justify-center">Ranking System</h3>
					<p>Progress through ranks and unlock exclusive rewards and abilities</p>
				</div>
			</div>
			<div class="card bg-base-100 shadow-xl">
				<div class="card-body text-center">
					<div class="mb-4 text-4xl">💬</div>
					<h3 class="card-title justify-center">Living Community</h3>
					<p>Join our active Discord community to connect with other players and stay updated</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Intelligent Bots Section -->
<section id="modes" class="py-20">
	<div class="container mx-auto px-4">
		<h2 class="mb-12 text-center text-4xl font-bold">The most loved plugins in history</h2>
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
			<div class="card bg-base-100 shadow-xl lg:card-side">
				<figure class="lg:w-1/2">
					<div
						class="flex h-48 w-full items-center justify-center bg-gradient-to-br from-green-500 to-blue-600"
					>
						<span class="text-6xl">🤖</span>
					</div>
				</figure>

				<div class="card-body lg:w-1/2">
					<h3 class="card-title">Modern eBot Plugin</h3>
					<p>
						Advanced AI-powered bots with intelligent decision making and realistic gameplay
						behavior
					</p>
					<div class="card-actions justify-end">
						<div class="badge badge-primary">Latest Technology</div>
					</div>
				</div>
			</div>
			<div class="card bg-base-100 shadow-xl lg:card-side">
				<figure class="lg:w-1/2">
					<div
						class="flex h-48 w-full items-center justify-center bg-cover bg-center"
						style="background-image: url(/skins.jpg);"
					></div>
				</figure>
				<div class="card-body lg:w-1/2">
					<h3 class="card-title">Custom Weapon Skins</h3>
					<p>
						Discover a vast collection of unique weapon skins to personalize your gameplay
						experience
					</p>
					<div class="card-actions justify-end">
						<div class="badge badge-secondary">Customization</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Community Section -->
<section id="community" class="bg-base-200 py-20">
	<div class="container mx-auto px-4">
		<h2 class="mb-12 text-center text-4xl font-bold">Join Our Community</h2>
		<div class="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
			<div class="stat">
				<div class="stat-figure text-primary">
					<span class="text-4xl">👥</span>
				</div>
				<div class="stat-title">Active Players</div>
				<div class="stat-value text-primary">5+</div>
			</div>
			<div class="stat">
				<div class="stat-figure text-secondary">
					<span class="text-4xl">🗺️</span>
				</div>
				<div class="stat-title">Maps supported by eBot</div>
				<div class="stat-value text-secondary">2+</div>
			</div>
			<div class="stat">
				<div class="stat-figure text-accent">
					<span class="text-4xl">⚡</span>
				</div>
				<div class="stat-title">Server Uptime</div>
				<div class="stat-value text-accent">99.9%</div>
			</div>
		</div>
		<div class="mt-12 text-center">
			<button class="btn btn-lg btn-primary" on:click={connectToServer}>
				Connect: 91.99.14.212:27015
			</button>
		</div>
	</div>
</section>

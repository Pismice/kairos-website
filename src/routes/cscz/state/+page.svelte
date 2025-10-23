<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>Kairos-Project | State of the Counter Strike Zombie Plague server.</title>
	<link rel="canonical" href="https://kairos-project.com/cscz/state" />
	<meta
		name="description"
		content="Kairos-Project | State of the Counter Strike Zombie Plague server."
	/>
	<meta
		name="keywords"
		content="old games, game mods, revive games, gaming community, counter-strike, half-life, zombie, zombie plague, condition zero, 1.6, kairos project"
	/>
	<meta property="og:title" content="Kairos-Project" />
	<meta
		property="og:description"
		content="Project that aims to revive old games and games mods so that they can be enjoyed again !"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://kairos-project.com/" />
	<meta name="twitter:card" content="https://kairos-project.com/logo.png" />
	<meta name="twitter:title" content="Kairos-Project" />
	<meta
		name="twitter:description"
		content="Project that aims to revive old games and games mods so that they can be enjoyed again !"
	/>
</svelte:head>

<div class="container mx-auto p-6">
	<h1 class="mb-6 text-3xl font-bold">State of the Server</h1>

	{#if data.serverStatus === 'up'}
		<div class="card bg-success text-success-content">
			<div class="card-body">
				<h2 class="card-title">Server Online</h2>
				<div class="stats stats-vertical lg:stats-horizontal">
					<div class="stat">
						<div class="stat-title">Address</div>
						<div class="stat-value text-sm">{data.serverInfo?.address}</div>
					</div>
					<div class="stat">
						<div class="stat-title">Players</div>
						<div class="stat-value">{data.serverInfo?.players}</div>
					</div>
					<div class="stat">
						<div class="stat-title">Map</div>
						<div class="stat-value text-sm">{data.serverInfo?.map}</div>
					</div>
				</div>
				<p class="mt-4"><strong>Server Name:</strong> {data.serverInfo?.name}</p>
			</div>
		</div>
	{:else if data.serverStatus === 'down'}
		<div class="alert alert-error">
			<h2 class="text-xl font-bold">Server is Down</h2>
			<p>The server is currently offline or not responding.</p>
		</div>
	{:else if data.serverStatus === 'error'}
		<div class="alert alert-warning">
			<h2 class="text-xl font-bold">Error Checking Server</h2>
			<p>Unable to check server status at this time.</p>
		</div>
	{/if}
</div>

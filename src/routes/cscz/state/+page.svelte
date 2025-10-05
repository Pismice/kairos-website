<script>
	let { data } = $props();
</script>

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

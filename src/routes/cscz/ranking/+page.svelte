<script lang="ts">
	import type { PageData } from './$types';

	const { data } = $props<{ data: PageData }>();
</script>

<svelte:head>
	<title>Kairos-Project | Ranking of the Counter Strike Zombie Plague server.</title>
	<link rel="canonical" href="https://kairos-project.com/cscz/ranking" />
	<meta
		name="description"
		content="Kairos-Project | Ranking of the Counter Strike Zombie Plague server."
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

<ul class="list rounded-box bg-base-100 shadow-md"></ul>

<div class="overflow-x-auto">
	<table class="table">
		<!-- head -->
		<thead>
			<tr>
				<th>Rank</th>
				<th>Name</th>
				<th>Country</th>
				<th>Points</th>
				<th>Kills</th>
				<th>Played Time (min)</th>
				<th>Ammo packs</th>
			</tr>
		</thead>
		<tbody>
			{#each data.players as player, index}
				<tr>
					<th>{index + 1}</th>
					<td>
						<div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask h-12 w-12 mask-squircle">
									<img src={player.avatar || '/logo.png'} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">{player.name}</div>
								<div class="text-sm opacity-50">{player.user_type}</div>
							</div>
						</div>
					</td>
					<td>
						{#if player.country}
							<img
								src={`https://flagcdn.com/16x12/${player.country.toLowerCase()}.png`}
								alt={player.country}
								width="16"
								height="12"
								class="mr-2 inline-block"
							/>
						{:else}
							{'-'}
						{/if}
					</td>
					<td>
						{player.kills}
					</td>
					<td>{player.kills}</td>
					<th>
						{Math.round(player.total_played_time / 60)}
					</th>
					<th>
						{player.ammo_packs}
					</th>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

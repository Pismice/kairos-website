<script lang="ts">
	import type { PageData } from './$types';

	const { data } = $props<{ data: PageData }>();
</script>

<h1>Player ranking</h1>

<ul class="list rounded-box bg-base-100 shadow-md"></ul>

<div class="overflow-x-auto">
	<table class="table">
		<!-- head -->
		<thead>
			<tr>
				<th>Rank</th>
				<th>Name</th>
				<th>Points</th>
				<th>Kills</th>
				<th>Played Time</th>
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
									<img
										src="https://img.daisyui.com/images/profile/demo/2@94.webp"
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
							</div>
							<div>
								<div class="font-bold">{player.name}</div>
								<div class="text-sm opacity-50">Normal Player</div>
							</div>
						</div>
					</td>
					<td>
						{player.kills}
					</td>
					<td>{player.kills}</td>
					<th>
						{player.total_played_time}
					</th>
					<th>
						{player.ammo_packs}
					</th>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

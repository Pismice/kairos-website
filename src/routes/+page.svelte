<script lang="ts">
	import type { PageData } from './$types';

	const { data } = $props<{ data: PageData }>();
</script>

<h1>Welcome to SvelteKit</h1>
{#each data.players as player}
	<p>{player.name} with {player.kills} kills</p>
{/each}

<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/home');
	});
</script>

<svelte:head>
	<title>Kairos-Project</title>
	<meta
		name="description"
		content="Project that aims to revive old games and games mods so that they can be enjoyed again !"
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

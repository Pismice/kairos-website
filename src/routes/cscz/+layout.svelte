<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="navbar bg-base-100 shadow-sm">
	<div class="flex-1">
		<a class="btn text-xl btn-ghost">daisyUI</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li><a>Description</a></li>
			<li><a>State of the server</a></li>
			<li><a>Player ranking</a></li>
			<li><a>Socials</a></li>
		</ul>
	</div>
</div>
{@render children?.()}

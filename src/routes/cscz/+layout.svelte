<script lang="ts">
	let { children } = $props();
</script>

<div class="navbar bg-base-100 shadow-sm">
	<div class="flex-1">
		<a class="btn text-xl btn-ghost">CS:CZ Zombie Plague</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/cscz">Description</a></li>
			<li><a href="/cscz/state">State of the server</a></li>
			<li><a href="/cscz/ranking">Player ranking</a></li>
			<li><a href="/cscz/socials">Socials</a></li>
		</ul>
	</div>
</div>
{@render children?.()}

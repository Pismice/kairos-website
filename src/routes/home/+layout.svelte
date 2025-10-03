<script lang="ts">
	import '../../app.css';
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
			<li><a>Project philosophy</a></li>
			<li>
				<details>
					<summary>Games</summary>
					<ul class="right-0 w-100 rounded-t-none bg-base-100 p-2">
						<li><a>Conter Strike Condition Zero: Zombie Plague</a></li>
					</ul>
				</details>
			</li>
		</ul>
	</div>
</div>
{@render children?.()}

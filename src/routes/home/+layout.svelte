<script lang="ts">
	let { children } = $props();
</script>

<div class="navbar bg-base-100 shadow-sm">
	<div class="navbar-start">
		<a class="btn flex items-center text-xl btn-ghost" href="/">
			<img src="/transp.png" alt="Logo" class="mt-6 h-32 w-auto" />
		</a>
	</div>
	<div class="navbar-end">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/home/socials">Socials</a></li>
			<li>
				<details>
					<summary>Games</summary>
					<ul class="right-0 w-100 rounded-t-none bg-base-100 p-2">
						<li><a href="/cscz">Conter Strike Condition Zero: Zombie Plague</a></li>
					</ul>
				</details>
			</li>
		</ul>
	</div>
</div>
{@render children?.()}

<script lang="ts">
	let { children } = $props();
</script>

<div class="navbar bg-base-100 shadow-sm">
	<div class="flex-1">
		<a class="btn text-xl btn-ghost">Kairos Project</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li><a>Project philosophy</a></li>
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

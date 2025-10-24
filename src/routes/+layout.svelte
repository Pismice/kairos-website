<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<footer class=" bg-gray-900 py-6 text-center text-sm text-gray-400">
	<p>
		&copy; {new Date().getFullYear()} Kairos-Project. All rights reserved. | Developped by
		<a
			href="https://atum-soft.com"
			class="font-semibold text-indigo-600 underline decoration-2 underline-offset-4 transition-all duration-200 hover:text-indigo-800 hover:decoration-indigo-800"
			>Atum-Soft</a
		>
	</p>
</footer>

<script>
	import { createEventDispatcher } from 'svelte';
	export let id;
	export let name;
	export let priority;
	const dispatch = createEventDispatcher();
</script>

<button
	class="card card-hover variant-ghost text-center bg-gradient-to-br variant-gradient-primary-secondary"
	on:click={() => dispatch('card-click', id)}
>
	<header class="card-header">{name}</header>
	<section class="p-4">(content)</section>
	<footer class="card-footer flex gap-2 items-center">
		<button type="button" class="btn-icon variant-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-full h-full"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		</button>
		<div>{priority}</div>
		<button type="button" class="btn-icon variant-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-full h-full"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		</button>
	</footer>
</button>

<script>
	import { createEventDispatcher } from 'svelte';
	export let id;
	export let name;
	export let priority;
	export let weight;
	export let dueDate;
	export let hoursPerWeek;
	const dispatch = createEventDispatcher();

	const dateOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
</script>

<button
	class="card card-hover variant-ghost text-center flex flex-col items-center bg-gradient-to-br variant-gradient-primary-secondary"
	on:click={() => dispatch('card-click', id)}
>
	<header class="card-header font-bold text-2xl">{name}</header>
	<section class="p-4 flex flex-col gap-2">
		<div>Weight: {weight}</div>
		{#if dueDate}
			<div>{dueDate.toLocaleString(undefined, dateOptions)}</div>
		{/if}
		{#if hoursPerWeek}
			<div>{hoursPerWeek} hours per week</div>
		{/if}
	</section>
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

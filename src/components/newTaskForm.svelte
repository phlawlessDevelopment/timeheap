<script>
	import { modalStore } from '@skeletonlabs/skeleton';
	let name;
	let dueDate;
	let hoursPerWeek;
	let errors = [];

	function validate() {
		if (!name) {
			errors.push('"Task Name" required');
		}
		if (!dueDate && !hoursPerWeek) {
			errors.push('Need at least one of "Due Date" or "Hours per week"');
		}
	}

	function cancelModal() {
		modalStore.close();
		errors = [];
	}
	function createTask() {
		errors = [];
		validate();
		console.log(errors);
		if (errors.length > 0) return;
		modalStore.close();
		errors = [];
	}
</script>

<form class="card p-8 flex flex-col gap-2 text-center">
	Create a new task
	{#if errors.length > 0}
		<aside class="alert variant-filled-error text-start">
			<!-- Icon -->
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-8 h-8"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
					/>
				</svg>
			</div>
			<div class="alert-message">
				<h3 class="h3">Invalid Task</h3>
				{#each errors as error}
					<p>{error}</p>
				{/each}
			</div>
		</aside>
	{/if}
	<div class="flex flex-col gap-2 text-start">
		<label class="label">
			<span class="px-2">Task Name</span>
			<input type="text" class="input" bind:value={name} placeholder="New task" />
		</label>
		<label class="label">
			<span class="px-2">Due Date (optional)</span>
			<input type="date" class="input" bind:value={dueDate} placeholder="Task Name" />
		</label>
		<label class="label">
			<span class="px-2">Hours per week (optional)</span>
			<input type="number" class="input" bind:value={hoursPerWeek} placeholder="2.5" />
		</label>

		<div class="flex gap-4 justify-between pt-2">
			<button type="submit" on:click={createTask} class="btn variant-filled-primary">Create</button>
			<button type="submit" on:click={cancelModal} class="btn variant-filled-secondary"
				>Cancel</button
			>
		</div>
	</div>
</form>

<script>
	import { modalStore } from '@skeletonlabs/skeleton';
	let name;
	let priority;

	function cancelModal() {
		modalStore.close();
	}
	function createTask() {
		modalStore.close();
	}
</script>

<form class="card p-8 flex flex-col gap-2 text-center">
	Create a new task
	<input type="text" class="input" bind:value={name} placeholder="Task Name" />
	<input type="number" class="input" bind:value={priority} placeholder="Default Priority" />
	<div class="flex gap-4 justify-between pt-2">
		<button type="submit" on:click={createTask} class="btn variant-filled-primary">Create</button>
		<button type="submit" on:click={cancelModal} class="btn variant-filled-secondary">Cancel</button
		>
	</div>
</form>

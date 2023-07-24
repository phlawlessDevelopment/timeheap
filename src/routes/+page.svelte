<script>
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import Task from '../components/task.svelte';
	import MaxHeap from '../data/Heap.js';
	import TaskDetail from '../components/taskDetail.svelte';

	let schedule = new MaxHeap();

	schedule.push({
		id: 0,
		name: 'Time Heap',
		priority: 0,
		weight: 1,
		dueDate: new Date(Date.now() + Math.floor(Math.random() * 1000000000)),
		hoursPerWeek: 0,
		hoursThisWeek: 0
	});

	for (let i = 0; i < 10; i++) {
		let due = Math.random();
		if (due < 0.5) {
			schedule.push({
				id: i + 1,
				name: `Task ${i}`,
				priority: 0,
				weight: 1,
				hoursPerWeek: Math.floor(Math.random() * 10),
				hoursThisWeek: 0
			});
		} else {
			schedule.push({
				id: 0,
				name: 'Time Heap',
				priority: 99,
				weight: 1,
				dueDate: new Date(Date.now() + Math.floor(Math.random() * 1000000000)),
				hoursPerWeek: 0,
				hoursThisWeek: 0
			});
		}
	}

	function openModal(id_) {
		const { id, name, priority } = schedule.find(id_);
		console.log(id, name, priority);
		let modalComponent = {
			ref: TaskDetail,
			slot: 'content'
		};
		let modal = {
			type: 'component',
			component: modalComponent,
			props: {
				id,
				name,
				priority
			}
		};
		modalStore.trigger(modal);
	}
	let showHeap = false;
</script>

<Modal />
<div class="flex justify-center pb-8">
	<Task
		on:card-click={(e) => openModal(e.detail)}
		id={schedule.head().id}
		name={schedule.head().name}
		priority={schedule.head().priority}
		weight={schedule.head().weight}
		dueDate={schedule.head().dueDate}
		hoursPerWeek={schedule.head().hoursPerWeek}
	/>
</div>
<div class="flex flex-row justify-center w-full pb-12">
	<button class="btn btn-lg variant-ringed-warning" on:click={() => (showHeap = !showHeap)}>
		{showHeap ? 'Hide heap' : 'Show heap'}
	</button>
</div>
{#if showHeap}
	<div class="flex flex-wrap gap-4 justify-center">
		{#each schedule.rest() as task}
			<Task
				on:card-click={(e) => openModal(e.detail)}
				id={task.id}
				name={task.name}
				priority={task.priority}
				weight={task.weight}
				dueDate={task.dueDate}
				hoursPerWeek={task.hoursPerWeek}
			/>
		{/each}
	</div>
{/if}

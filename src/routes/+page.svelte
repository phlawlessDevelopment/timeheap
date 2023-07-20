<script>
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import Task from '../components/task.svelte';
	import MaxHeap from '../data/Heap.js';
	import TaskDetail from '../components/taskDetail.svelte';
	let schedule = new MaxHeap();
	schedule.push({ id: 0, name: 'Time Heap', priority: 99 });
	for (let i = 0; i < 10; i++) {
		schedule.push({ id: i + 1, name: `Task ${i}`, priority: Math.floor(Math.random() * 100) });
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
</script>

<Modal />
<div class="flex justify-center pb-8">
	<Task
		on:card-click={(e) => openModal(e.detail)}
		id={schedule.head().id}
		name={schedule.head().name}
		priority={schedule.head().priority}
	/>
</div>
<div class="flex flex-wrap gap-4 justify-center">
	{#each schedule.rest() as task}
		<Task
			on:card-click={(e) => openModal(e.detail)}
			id={task.id}
			name={task.name}
			priority={task.priority}
		/>
	{/each}
</div>

<script>
	import { modalStore } from '@skeletonlabs/skeleton';
	const { id, name, priority } = $modalStore[0].props;
</script>

<div class="card p-6">
	<h1>{name}</h1>
	<h2>{priority}</h2>
	<p>id: {id}</p>
</div>

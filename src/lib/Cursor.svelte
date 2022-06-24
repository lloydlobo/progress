<script lang="ts">
	import { spring } from 'svelte/motion';

	let coords = spring({ x: -0, y: -0 }, { stiffness: 0.1, damping: 0.25 });
	let size = spring(10);
</script>

<div class="hidden absolute right-4">
	<label for="">
		<div>stiffness ({coords.stiffness})</div>
		<input bind:value={coords.stiffness} type="range" min="0" max="1" step="0.01" />
	</label>
	<label for="">
		<div>damping ({coords.damping})</div>
		<input bind:value={coords.damping} type="range" min="0" max="1" step="0.01" />
	</label>
</div>

<svg
	class="absolute left-1"
	on:mousemove={(e) => coords.set({ x: e.clientX, y: e.clientY })}
	on:mousedown={() => size.set(30)}
	on:mouseup={() => size.set(10)}
>
	<circle class="" cx={$coords.x} cy={$coords.y} r={$size} />
</svg>

<style>
	svg {
		width: 100%;
		height: 100%;
		margin: -8px;
	}

	circle {
		fill: #ff3e00;
	}
</style>

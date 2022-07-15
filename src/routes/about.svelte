<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script>
	import { sortProjects, projects, loadSupaProjects } from '$lib/store/creations';
	import { onMount } from 'svelte';

	onMount(loadSupaProjects);
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About Evocreation" />
</svelte:head>

<div class="content">
	<h1>About Evocreation</h1>
	<sub>Progress timeline</sub>
	<p>
		This website act as a quick overview to affirm that one can value progress more than perfection.
		Looking back at the projects built and how the style and workflow changes is interesting. Keeps
		one grounded and also optimistic for goals in mind.
	</p>
</div>

<!-- <article>
	{#await $projects}
		<p>Loading</p>
	{:then}
		{#each $sortProjects as project}
			<p>{project.name}</p>
		{/each}
	{:catch error}
		<p>Something went wrong {error}</p>
	{/await}
</article> -->
<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>

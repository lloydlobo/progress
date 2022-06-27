<script context="module" lang="ts">
	import { StoreCreations } from '$lib/store';
	import { createEventDispatcher } from 'svelte';
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';

	const dispatch = createEventDispatcher();
	let inputSearchText = '';
	$: inputSearchText;
	let projects = new Array();
	let projectTitle = '';
	let projectBody = '';
	$: projects;
	$: projectTitle = '';
	$: projectBody = '';
	// async function awaitData() {
	const url = `https://jsonplaceholder.typicode.com/posts`;

	// fetch(url) .then((res) => res.json()) .then((data) => data.forEach((project: any) => { projects.push(project); projectTitle = project.title; projectBody = project.body; }));

	const searchProjects = async (event) => {
		if (!event.target.value) return;
		const searchText: string = event.target.value.toLowerCase();
		const searchInputHasNoText = searchText === '';

		const res = await fetch(url); // ok: true
		const data = await res.json();

		// Get matches to current text input
		let matches = data.filter((project: any) => {
			const regex = new RegExp(`^${searchText}`, 'gi'); // ^ ==> Starts with || g ==> global i==> case-insensitive flags
			return project.title.match(regex) || project.body.match(regex);
		});

		if (searchInputHasNoText) {
			matches = []; // clear out the results when we're done
		}
		console.log(matches);

		outputHtml(matches);
	};

	// Show results in HTML
	const outputHtml = async (matches: any[]) => {
		if (matches.length > 0) {
			matches.map(async (match) => {
				projects = [...projects, { title: await match.title, body: await match.body }];
			});
		}
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Project Progress" />
</svelte:head>

<section class="grid gap-y-10 ">
	<div class="hero-title text-center">
		<h1 class="title mb-0 font-serif text-8xl">The Evocreation</h1>
	</div>

	<super class=" text-center text-4xl tracking-wide text-gray-600 ">
		A collection of projects built along the way while focussing on <b>progress</b> than perfection.
	</super>
</section>

<section class="search-feature z-50">
	<div class="search-wrapper z-10 mx-auto p-4 py-6">
		<form action="" class="form-search grid items-center justify-center gap-1 text-center ">
			<label for="search" class="search-label hidden text-slate-500">Search for Apps</label>
			<!-- SEARCH BAR -->
			<input
				on:input={searchProjects}
				bind:value={inputSearchText}
				type="search"
				placeholder="Search projects or any category"
				name=""
				id="search"
				class="search-input rounded-full px-4 py-2 font-bold placeholder:text-sm  placeholder:font-light "
			/>
		</form>
	</div>

	<div class="project-cards  grid gap-2">
		{#each projects as project}
			{#if inputSearchText.length > 0}
				<div id="card" class="card grid gap-2 bg-slate-50 p-4 shadow-lg ">
					<h3 class="title text-md font-serif font-light capitalize text-slate-700">
						{project.title}
					</h3>
					<p class="body grid justify-between text-sm">
						{project.body}
					</p>
					<a href="/" class="place-self-start text-xs font-bold text-rose-500"> View Live </a>
				</div>
			{/if}
		{/each}
	</div>
</section>

<section class="counter mx-auto">
	<Counter />
</section>

<!-- {#each $StoreCodepen as { id, html }} {#if id >= 0} {trimStringTemplateLiterals(html)} {/if} {/each} -->
<section>
	<div class="timeline">
		{#each $StoreCreations as { id, year, srcBg, live, alt, month, name, href, content }}
			{#if id % 2 != 0}
				<!-- inline styles but no variables for property names -->
				<div class="left container ">
					<div class="project content overflow-hidden bg-cover bg-blend-multiply">
						<!-- style="background-image: url({srcBg});" -->
						<div class="project-content p-4 backdrop-blur-sm  ">
							<h2 class="mb-3 font-serif text-xl font-bold">
								<a class="text-2xl font-thin text-neutral" {href}>{name}</a>
							</h2>
							<p class="">{content}</p>
							<sub>{month} {year}</sub>
							<div class="show-me-the-code align-center flex items-center justify-start gap-2 py-2">
								<a {href} {alt}>
									<div class="icon-github">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											stroke="currentColor"
											stroke-width="0"
											viewBox="0 0 1024 1024"
											><path
												stroke="none"
												d="M512 76a447 447 0 0 0-148 870c23 6 20-11 20-22v-78c-136 16-141-74-151-89-18-31-61-39-48-54 30-16 62 4 98 58 27 39 78 32 104 26 6-24 18-45 35-61-141-25-199-111-199-213 0-49 16-95 48-132-20-60 2-112 5-120 58-5 119 42 123 46a435 435 0 0 1 226 0c12-9 68-49 122-44 3 8 25 58 5 118 33 37 49 83 49 132 0 103-59 189-200 213a128 128 0 0 1 38 91v113c1 9 0 18 15 18A448 448 0 0 0 512 76z"
											/></svg
										>
									</div>
								</a>
								<a
									href={live}
									class="btn-outline btn-ghost rounded-2xl border-slate-400 bg-white p-1 px-4 text-xs hover:no-underline "
									>Live</a
								>
							</div>
						</div>
					</div>
				</div>
			{/if}

			{#if id % 2 == 0}
				<!-- inline styles but no variables for property names -->
				<div class="right container">
					<div class="project content bg-blend-luminosity">
						<!-- style="background-image: url({srcBg}); -->
						<div class="project-content p-4 backdrop-blur-sm">
							<h2 class="mb-3 font-serif text-xl font-bold">
								<a class="text-neutral-600 text-2xl font-light text-neutral" {href}>{name}</a>
							</h2>
							<p class=" ">{content}</p>
							<sub>{month} {year}</sub>
							<div class="show-me-the-code align-center flex items-center justify-start gap-3 py-2">
								<a {href} {alt}>
									<div class="icon-github">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											stroke="currentColor"
											stroke-width="0"
											viewBox="0 0 1024 1024"
											><path
												stroke="none"
												d="M512 76a447 447 0 0 0-148 870c23 6 20-11 20-22v-78c-136 16-141-74-151-89-18-31-61-39-48-54 30-16 62 4 98 58 27 39 78 32 104 26 6-24 18-45 35-61-141-25-199-111-199-213 0-49 16-95 48-132-20-60 2-112 5-120 58-5 119 42 123 46a435 435 0 0 1 226 0c12-9 68-49 122-44 3 8 25 58 5 118 33 37 49 83 49 132 0 103-59 189-200 213a128 128 0 0 1 38 91v113c1 9 0 18 15 18A448 448 0 0 0 512 76z"
											/></svg
										>
									</div>
								</a>
								<a
									href={live}
									class="btn-outline btn-ghost rounded-2xl border-slate-400 bg-white p-1 px-4 text-xs hover:no-underline "
									>Live</a
								>
							</div>
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</section>

<style>
	.project {
		background-image: var(--background-image);
		background-size: var(--background-size);
		background-position: var(--background-position);
		width: var(--width);
		height: var(--height);
	}

	section {
		/* display: flex; */
		/* flex-direction: column; */
		justify-content: center;
		align-items: center;
		/* flex: 1; */
	}

	* {
		box-sizing: border-box;
	}

	.title {
		font-family: Georgia, 'Times New Roman', Times, serif;
	}

	/* https://www.w3schools.com/howto/howto_css_timeline.asp */
	/* The actual timeline (the vertical ruler) */
	.timeline {
		position: relative;
		max-width: 1200px;
		margin: 0 auto;
	}

	/* The actual timeline (the vertical ruler) */
	.timeline::after {
		content: '';
		position: absolute;
		width: 6px;
		background-color: white;
		top: 0;
		bottom: 0;
		left: 50%;
		margin-left: -3px;
	}

	/* Container around content */
	.container {
		padding: 10px 40px;
		position: relative;
		background-color: inherit;
		width: 50%;
	}

	/* The circles on the timeline */
	.container::after {
		content: '';
		position: absolute;
		width: 25px;
		height: 25px;
		right: -17px;
		background-color: white;
		/* border: 4px solid rgb(255, 62, 0); */
		@apply border-4 border-solid border-orange-600;
		top: 15px;
		border-radius: 50%;
		z-index: 1;
	}

	/* Place the container to the left */
	.left {
		left: 0;
	}

	/* Place the container to the right */
	.right {
		left: 50%;
	}

	/* Add arrows to the left container (pointing right) */
	.left::before {
		content: ' ';
		height: 0;
		position: absolute;
		top: 22px;
		width: 0;
		z-index: 1;
		right: 30px;
		border: medium solid white;
		border-width: 10px 0 10px 10px;
		border-color: transparent transparent transparent white;
	}

	/* Add arrows to the right container (pointing left) */
	.right::before {
		content: ' ';
		height: 0;
		position: absolute;
		top: 22px;
		width: 0;
		z-index: 1;
		left: 30px;
		border: medium solid white;
		border-width: 10px 10px 10px 0;
		border-color: transparent white transparent transparent;
	}

	/* Fix the circle for containers on the right side */
	.right::after {
		left: -16px;
	}

	/* The actual content */
	.content {
		/* padding: 20px 30px; */
		background-color: white;
		position: relative;
		border-radius: 6px;
	}

	/* project wrapper hosts background image */
	.project {
		/* background-position: center; */
		background-clip: border-box;
		height: auto;
		background-repeat: no-repeat;
	}
	.project-cards {
		/* grid-template-columns: repeat(auto-fit, minmax(30%, 1fr)); */
		grid-template-columns: repeat(auto-fit, minmax(clamp(333px, 1vw + 1rem, 40vw), 1fr));
	}
	/* Media queries - Responsive timeline on screens less than 600px wide */
	@media screen and (max-width: 600px) {
		/* Place the timelime to the left */
		.timeline::after {
			left: 31px;
		}

		/* Full-width containers */
		.container {
			width: 100%;
			padding-left: 70px;
			padding-right: 25px;
		}

		/* Make sure that all arrows are pointing leftwards */
		.container::before {
			left: 60px;
			border: medium solid white;
			border-width: 10px 10px 10px 0;
			border-color: transparent white transparent transparent;
		}

		/* Make sure all circles are at the same spot */
		.left::after,
		.right::after {
			left: 15px;
		}

		/* Make all right containers behave like the left ones */
		.right {
			left: 0%;
		}
	}

	/* icons */
	.icon-github {
		width: 3ch;
		height: auto;
	}
</style>

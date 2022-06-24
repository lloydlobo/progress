<script context="module" lang="ts">
	import { StoreCreations } from '$lib/store';
	export const prerender = true;

	// function trimStringTemplateLiterals(str: string) { const div = document.createElement('div'); div.innerHTML = str.trim().slice(0, str.length); document.body.appendChild(div); }
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Project Progress" />
	<!-- <link rel="preconnect" href="https://fonts.googleapis.com" /> -->
	<!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" /> -->
</svelte:head>

<section class="grid gap-y-10 ">
	<div class="hero-title text-center">
		<h1 class="title font-serif mb-0 text-8xl">
			<span class="welcome">
				<!-- <picture> <source srcset="svelte-welcome.webp" type="image/webp" /> <img src="svelte-welcome.png" alt="Welcome" /> </picture> -->
			</span>
			The Evocreation
		</h1>
		<!-- <sub class="subtitle text-center"> Progress <strong>rather than</strong> perfection.  </sub> -->
	</div>

	<super class="text-4xl tracking-wide font- text-center text-neutral-600">
		A collection of projects built along the way while focussing on <b>progress</b> than perfection.
	</super>

	<section class="flex">
		<Counter />
	</section>
</section>

<!-- {#each $StoreCodepen as { id, html }} {#if id >= 0} {trimStringTemplateLiterals(html)} {/if} {/each} -->
<section>
	<div class="timeline">
		{#each $StoreCreations as { id, year, srcBg, live, alt, month, name, href, content }}
			{#if id % 2 != 0}
				<!-- inline styles but no variables for property names -->
				<div class="container left ">
					<div class="project bg-cover overflow-hidden content bg-blend-multiply">
						<!-- style="background-image: url({srcBg});" -->
						<div class="project-content p-4 backdrop-blur-sm  ">
							<h2 class="font-serif font-bold text-xl">
								<a class="text-neutral-600 font-thin text-2xl" {href}>{name}</a>
							</h2>
							<p class="">{content}</p>
							<sub>{month} {year}</sub>
							<div class="show-me-the-code">
								<a href={live}>Live Preview</a>
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
							</div>
						</div>
					</div>
				</div>
			{/if}

			{#if id % 2 == 0}
				<!-- inline styles but no variables for property names -->
				<div class="container right">
					<div class="project content bg-blend-luminosity">
						<!-- style="background-image: url({srcBg}); -->
						<div class="project-content p-4 backdrop-blur-sm">
							<h2 class="font-serif font-bold text-xl">
								<a class="text-neutral-600 font-thin text-2xl" {href}>{name}</a>
							</h2>
							<p class=" ">{content}</p>
							<sub>{month} {year}</sub>
							<div class="show-me-the-code">
								<a href={live}>Live Preview</a>
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
		@apply border-orange-600 border-solid border-4;
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
	.show-me-the-code {
		display: flex;
		gap: 0.8rem;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}

	.icon-github {
		width: 3ch;
		height: auto;
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
</style>

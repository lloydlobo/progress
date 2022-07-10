<script lang="ts">
	import { page } from '$app/stores';
	// import logo from './svelte-logo.svg';
	import logo from '$lib/images/progress-logo-txt.png';
</script>

<header
	class="sticky top-0 z-50 mx-auto flex max-w-7xl items-center justify-center py-4 px-8 drop-shadow-md backdrop-blur-sm"
>
	<div class="corner flex-1">
		<div class="logo mb-0 font-serif text-lg  hover:text-gray-900">
			<a href="/" class="flex gap-0 tracking-widest text-neutral hover:text-gray-900"
				><span class="bold">ev<span class=" font-bold text-red-700">o</span></span><span class=""
					>creat<span class="">i</span><span class="font-bold text-red-700">o</span>n</span
				></a
			>
		</div>
	</div>

	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<a sveltekit:prefetch href="/todos">Todos</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		justify-content: center;
		// align-items: flex-end;
		/* --background: rgba(255, 255, 255, 0.7); */
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
	.logo a:hover {
		@apply animate-pulse text-gray-900 no-underline shadow-sm transition-all duration-200 ease-in-out;
	}
</style>

<script lang="ts">
	import { page } from '$app/stores';
	// import logo from './svelte-logo.svg';
	import logo from '$lib/images/progress-logo-txt.png';
</script>

<header class="flex py-4 sticky top-0 px-8 drop-shadow-md backdrop-blur-sm">
	<div class="corner flex-1">
		<a href="https://kit.svelte.dev">
			<img class="object-contain bg-opacity-95 rounded w-16 h-auto" src={logo} alt="Progress" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<a sveltekit:prefetch href="/todos">Todos</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
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

	// .corner {
	// 	width: 3em;
	// 	height: 3em;
	// }

	// .corner a {
	// 	display: flex;
	// 	align-items: center;
	// 	justify-content: center;
	// 	width: 100%;
	// 	height: 100%;
	// }

	.corner img {
		// width: 2em;
		// height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		// align-items: flex-end;
		/* --background: rgba(255, 255, 255, 0.7); */
	}

	/* svg {
		width: 2em;
		height: 3em;
		display: block;
	} */

	/* path {
		fill: var(--background);
	} */

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
</style>

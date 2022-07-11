<script lang="ts">
	import { page } from '$app/stores';
	// import logo from './svelte-logo.svg';
	import logo from '$lib/images/progress-logo-txt.png';

	export const userAccountSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg>`;
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
		</ul>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->

		<li class:active={$page.url.pathname === '/account'}>
			<a
				sveltekit:prefetch
				href="/account"
				class="account hover:[var(--heading-color)] relative  h-2 font-bold uppercase"
				><div class="account-svg">{@html userAccountSVG}</div></a
			>
		</li>
	</div>
</header>

<style lang="scss">
	.account-svg {
		// background-color: #fff;
		display: flex;
		width: 1ch;
		height: 100%;
		object-fit: cover;
		top: -14px;
		right: -6px;
		position: relative;
	}
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

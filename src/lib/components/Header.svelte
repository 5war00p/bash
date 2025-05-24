<script>
	import { aboutData } from 'data'
	import { valuesOfCommands } from 'utils/constants'
	import SearchBar from './SearchBar.svelte'
	import { query } from 'store'

	// ! Ignoring this message as svelte can understand and handles reactive variable
	// @ts-ignore
	$: path = !$query
		? defaultPath
		: valuesOfCommands.includes($query)
		? $query === defaultPath
			? defaultPath
			: `/${$query}`
		: path

	const defaultPath = '~'
	const { username, hostname } = aboutData
</script>

<div class="flex m-2 items-center text-center">
	<h1 class="text-xl sm:text-2xl text-green">
		{username}@{hostname}
	</h1>
	<span class="flex text-lg sm:text-2xl gap-px">
		<h2 class="text-white">:</h2>
		<h2 class="text-blue font-semibold mr-1">{path}</h2>
		<h2 class="text-white">$</h2>
	</span>

	<SearchBar />
</div>

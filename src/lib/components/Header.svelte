<script>
	import { valuesOfCommands } from 'utils/constants'
	import SearchBar from './SearchBar.svelte'
	import { query } from 'store'
	// ! Ignoring this message as svelte can handle understands reactive variable
	// @ts-ignore
	$: path = !$query
		? '~'
		: valuesOfCommands.includes($query)
		? `/${$query}`
		: path
</script>

<div class="flex m-2 items-center text-center">
	<h1 class="text-4xl text-green">5war00p@dev</h1>
	<span class="flex text-3xl gap-px">
		<h2 class="text-white">:</h2>
		<h2 class="text-blue font-semibold mr-1">{path}</h2>
		<h2 class="text-white">$</h2>
	</span>

	<SearchBar />
</div>

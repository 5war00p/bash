<script>
	import SearchBar from './SearchBar.svelte'
	import { query } from 'store'

	$: path = !!$query ? `/${$query}` : '~'
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

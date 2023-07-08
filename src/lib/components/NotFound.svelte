<script>
	import { query } from 'store'

	let queryValue = ''
	query.subscribe((val) => (queryValue = val))
</script>

<span class="px-2 text-white text-3xl">{queryValue}: comand not found</span>

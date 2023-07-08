<script lang="ts">
	import '../app.css'
	import { query } from 'store'
	import NotFound from 'components/NotFound.svelte'
	import Header from '../lib/components/Header.svelte'
	import { COMMANDS } from 'utils/constants'

	let queryValue = ''
	query.subscribe((val) => (queryValue = val))

	$: isCommandExits = (Object.values(COMMANDS) as string[]).includes(queryValue)
</script>

<Header />
{#if isCommandExits}
	<slot />
{:else}
	<NotFound />
{/if}

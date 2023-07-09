<script lang="ts">
	import '../app.css'
	import NotFound from 'components/NotFound.svelte'
	import Header from '../lib/components/Header.svelte'
	import { valuesOfCommands } from 'utils/constants'
	import { query } from 'store'

	$: isCommandExits = (valuesOfCommands as string[]).includes($query)
</script>

<Header />
{#if isCommandExits}
	<slot />
{:else}
	<NotFound />
{/if}

<script>
	import { query } from 'store'
	import Social from 'components/Social.svelte'
	import { COMMANDS } from 'utils/constants'
	import Contact from 'components/Contact.svelte'
</script>

{#if $query === COMMANDS.SOCIAL}
	<Social />
{:else if $query === COMMANDS.CONTACT}
	<Contact />
{/if}

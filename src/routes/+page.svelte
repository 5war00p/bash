<script>
	import { query } from 'store'
	import Social from 'components/Social.svelte'
	import { COMMANDS } from 'utils/constants'
	import Contact from 'components/Contact.svelte'
	import Academics from 'components/Academics.svelte'
	import About from 'components/About.svelte'
	import Help from 'components/Help.svelte'
	import Work from 'components/Work.svelte'
</script>

{#if $query === COMMANDS.SOCIAL}
	<Social />
{:else if $query === COMMANDS.ABOUT}
	<About />
{:else if $query === COMMANDS.CONTACT}
	<Contact />
{:else if $query === COMMANDS.ACADEMICS}
	<Academics />
{:else if $query === COMMANDS.HELP}
	<Help />
{:else if $query === COMMANDS.WORK}
	<Work />
{:else if $query === COMMANDS.EMPTY || $query === COMMANDS.ROOT}
	<!-- Home -->
{/if}

<script>
	import { query } from 'store'
	import Social from 'components/social/Social.svelte'
</script>

{#if $query === 'social'}
	<Social />
{/if}

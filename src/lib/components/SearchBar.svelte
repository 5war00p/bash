<script lang="ts">
	import { onMount } from 'svelte'
	import Cursor from './Cursor.svelte'
	import IconKeyReturn from 'icons/IconKeyReturn.svelte'
	import { query } from 'store'
	import rotatePlaceholders from 'utils/rotatePlaceholders'

	let textSpan: string
	let cursor: HTMLSpanElement
	let queryInput: HTMLInputElement
	let placeholder: HTMLSpanElement
	let isHighlighted = false
	let isTyping = false

	const onSelectHandler = (e: Event) => {
		if (e.target instanceof HTMLInputElement) {
			e.target.selectionStart = e.target.selectionEnd
		}
	}

	onMount(() => {
		queryInput.focus()

		queryInput.addEventListener('select', onSelectHandler, false)

		const cursorInterval = setInterval(
			() => {
				const isVisibile = cursor.style.visibility == 'visible'
				cursor.style.visibility = isVisibile && !isTyping ? 'hidden' : 'visible'
			},
			isTyping ? 1500 : 750
		)

		return () => {
			clearInterval(cursorInterval)

			queryInput.removeEventListener('select', onSelectHandler)
		}
	})

	$: rotatePlaceholders(placeholder)
</script>

<div class="flex items-center ml-3">
	{#if textSpan}
		<span
			class={`${
				isHighlighted
					? 'text-aubergine-dark bg-white'
					: 'text-white bg-transparent'
			} text-lg sm:text-2xl`}
		>
			{textSpan}
		</span>
		<Cursor bind:cursor />

		<div class="absolute right-0 sm:flex py-1.5 pr-1.5 hidden">
			<IconKeyReturn className={'w-8 h-8'} />
		</div>
	{:else}
		<Cursor bind:cursor />
		<span
			bind:this={placeholder}
			class="italic text-lg sm:text-2xl text-gray-500"
		>
			query here...
		</span>
	{/if}
</div>
<input
	bind:this={queryInput}
	type="text"
	placeholder="query"
	value=""
	class="w-0 h-0 opactity-0 text-transparent bg-transparent pl-0 pt-1 placeholder:italic border-0 focus:ring-0 focus:outline-none placeholder:text-2xl caret-transparent"
	maxlength="80"
	tabindex="0"
	on:keyup={() => (isTyping = false)}
	on:keydown={(e) => {
		isTyping = true
		if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
			isHighlighted = true
		} else {
			isHighlighted = false
		}

		if (e.key === 'Enter' || e.key === 'Return') {
			if (textSpan) query.set(textSpan.trim())

			// resetting input field on query submission
			textSpan = ''
			e.currentTarget.value = ''
		}
	}}
	on:blur={() => {
		queryInput.focus()
	}}
	on:input={(e) => {
		textSpan = e.currentTarget.value
	}}
/>

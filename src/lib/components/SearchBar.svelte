<script lang="ts">
	import { onMount } from 'svelte'
	import IconKeyReturn from 'icons/IconKeyReturn.svelte'
	import { query } from 'store'
	import rotatePlaceholders from 'utils/rotatePlaceholders'

	let searchInput: HTMLInputElement
	let cursor: HTMLSpanElement
	let measureEl: HTMLSpanElement
	let placeholderEl: HTMLSpanElement

	let textWidth = 0
	let isTyping = false
	let searchInputValue = ''

	$: rotatePlaceholders(placeholderEl)
	$: updateTextWidth()

	function updateTextWidth() {
		if (measureEl) {
			measureEl.textContent = searchInputValue || ''
			textWidth = measureEl.offsetWidth + 12
		}
	}

	onMount(() => {
		searchInput.focus()

		const selectionHandler = () => {
			searchInput.selectionStart = searchInput.selectionEnd
		}

		// To disable text selection
		// inputEl.addEventListener('select', selectionHandler, false)

		const cursorInterval = setInterval(
			() => {
				const isVisibile = cursor.style.visibility == 'visible'
				cursor.style.visibility = isVisibile && !isTyping ? 'hidden' : 'visible'
			},
			isTyping ? 1500 : 500
		)

		return () => {
			clearInterval(cursorInterval)
			// inputEl.removeEventListener('select', selectionHandler, false)
		}
	})
</script>

<div class="flex items-center ml-3 relative w-full">
	<input
		bind:this={searchInput}
		type="text"
		bind:value={searchInputValue}
		maxlength="80"
		tabindex="0"
		class="text-lg sm:text-2xl bg-transparent border-0 focus:ring-0 focus:outline-none text-white placeholder:italic placeholder:text-gray-500 placeholder:text-2xl caret-transparent w-full pr-12 selection:bg-white selection:text-gray-500"
		on:input={() => {
			searchInputValue = searchInputValue.trim().toLowerCase()
			updateTextWidth()
		}}
		on:keydown={(e) => {
			isTyping = true

			if (e.key === 'Enter' || e.key === 'Return') {
				if (searchInputValue) query.set(searchInputValue)
				searchInputValue = ''
				updateTextWidth()
			}
		}}
		on:keyup={() => (isTyping = false)}
		on:blur={() => searchInput.focus()}
	/>

	<!-- Custom Caret -->
	<!-- svelte-ignore element_invalid_self_closing_tag -->
	<span
		bind:this={measureEl}
		class="invisible absolute left-0 top-0 whitespace-pre pointer-events-none text-lg sm:text-2xl font-inherit"
		aria-hidden="true"
	/>
	<span
		class="absolute top-1/2 -translate-y-1/2 z-30"
		style="left:{textWidth}px;"
	>
		<!-- Thicker caret -->
		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<span
			bind:this={cursor}
			class="bg-white inline-block w-2.5 h-6 align-middle"
		/>
	</span>

	<!-- Dynamic placeholder overlay -->
	{#if !searchInputValue && !isTyping}
		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<span
			bind:this={placeholderEl}
			class="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 italic pointer-events-none text-lg sm:text-2xl px-0.5 select-none ml-3"
		/>
	{/if}
	{#if searchInputValue}
		<div class="absolute right-0 sm:flex py-1.5 pr-1.5 hidden">
			<IconKeyReturn className="w-8 h-8" />
		</div>
	{/if}
</div>

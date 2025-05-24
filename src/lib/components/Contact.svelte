<script>
	import { contactDetails } from 'data'
	import IconCopySimple from 'icons/IconCopySimple.svelte'
</script>

<div
	class="mx-4 my-8 flex flex-col space-y-4 sm:mx-8 sm:my-12 md:mx-20 md:my-20"
>
	{#each contactDetails as { icon, title, value }, index (index)}
		{@const Icon = icon}
		{@const href = title === 'Email' ? `mailto:${value}` : `tel:${value}`}
		<div
			class="relative flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-5 rounded-lg border border-slate-100 px-3 py-4 hover:border-slate-400"
		>
			<div class="flex-shrink-0 mb-2 sm:mb-0">
				<Icon className="w-10 h-10 sm:w-12 sm:h-12" />
			</div>
			<div class="min-w-0 flex-1">
				<a
					{href}
					target="_blank"
					class="group focus:outline-none text-white block"
				>
					<p class="text-xl sm:text-2xl font-semibold truncate">{title}</p>
					<span class="flex gap-2 sm:gap-4 items-center">
						<p class="text-lg sm:text-xl font-medium truncate">{value}</p>
						<button
							class="sm:hidden group-hover:block"
							on:click={async (e) => {
								e.preventDefault()
								await navigator.clipboard.writeText(value)
							}}
						>
							<IconCopySimple className="w-4 h-4 sm:w-5 sm:h-5" />
						</button>
					</span>
				</a>
			</div>
		</div>
	{/each}
</div>

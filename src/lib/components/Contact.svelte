<script>
	import { contactDetails } from 'data'
	import IconCopySimple from 'icons/IconCopySimple.svelte'
</script>

<div class="m-20 flex flex-col space-y-4">
	{#each contactDetails as { icon, title, value }, index (index)}
		{@const Icon = icon}
		{@const href = title === "Email" ? `mailto:${value}` : `tel:${value}`}
		<div
			class="relative flex items-center space-x-5 rounded-lg border border-slate-100 px-3 py-4 hover:border-slate-400"
		>
			<div class="flex-shrink-0">
				<Icon className="w-12 h-12" />
			</div>
			<div class="min-w-0 flex-1">
				<a href={href} target="_blank" class="group focus:outline-none text-white">
					<p class="text-2xl font-semibold truncate">{title}</p>
					<span class="flex gap-4">
						<p class="text-xl font-medium truncate">{value}</p>
						<button class="hidden group-hover:block" on:click={async (e) => {
							e.preventDefault()
							await navigator.clipboard.writeText(value);
						}}>
							<IconCopySimple className="w-5 h-5" />
						</button>
					</span>
				</a>
			</div>
		</div>
	{/each}
</div>

<script>
	import { socialProfiles } from 'data'
</script>

<div
	class="my-10 mx-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:mx-5 md:my-20 lg:mx-20 xl:mx-40"
>
	{#each socialProfiles as { icon, brand, url, handler } (brand)}
		{@const Icon = icon}
		<div
			class="relative flex items-center space-x-5 rounded-lg border border-slate-100 px-3 py-4 hover:border-slate-400"
		>
			<div class="flex-shrink-0">
				<Icon className="w-10 h-10 sm:w-12 sm:h-12" />
			</div>
			<div class="min-w-0 flex-1">
				<a href={url} target="_blank" class="focus:outline-none text-white">
					<span class="absolute inset-0" aria-hidden="true" />
					<p class="text-xl sm:text-2xl font-semibold">{brand}</p>
					<p class="text-base sm:text-xl font-medium">{handler}</p>
				</a>
			</div>
		</div>
	{/each}
</div>

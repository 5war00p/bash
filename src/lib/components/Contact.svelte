<script>
	import { contactDetails } from 'data'
</script>

<div class="my-20 mx-80 grid grid-cols-1 gap-4 sm:grid-cols-3">
	{#each contactDetails as {icon, title, value}, index (index)}
	{@const Icon = icon}
		<div
			class="relative flex items-center space-x-5 rounded-lg border border-slate-100 px-3 py-4 hover:border-slate-400"
		>
			<div class="flex-shrink-0">
				<Icon className="w-12 h-12" />
			</div>
			<div class="min-w-0 flex-1">
				<a href={'#'} target="_blank" class="focus:outline-none text-white">
					<span class="absolute inset-0" aria-hidden="true" />
					<p class="text-2xl font-semibold">{title}</p>
					<p class="text-xl font-medium">{value}</p>
				</a>
			</div>
		</div>
	{/each}
</div>

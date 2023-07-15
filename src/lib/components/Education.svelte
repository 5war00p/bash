<script>
	import academics from '$lib/data/academics'
</script>

<div class="m-auto pt-10 w-5/6">
	<ul role="list" class="space-y-16">
		{#each academics as { title, institute, duration }, index (index)}
			<li class="relative flex gap-x-4">
				{#if index < academics.length - 1}
					<div
						class="absolute left-2 top-12 flex w-6 justify-center -bottom-14"
					>
						<div class="w-1 rounded-lg bg-gray-100" />
					</div>
				{/if}
				<div
					class="relative flex h-10 w-10 flex-none items-center justify-center bg-aubergine-dark"
				>
					<div class="h-6 w-6 rounded-full bg-gray-200 ring-1 ring-gray-400" />
				</div>
				<span class="flex-auto text-4xl text-gray-500 space-y-4">
					<p class="font-medium text-red-700 truncate">{title}</p>
					<p>{institute}</p>
				</span>
				<p class="flex-none py-1 font-bold text-3xl leading-5 text-gray-500">
					{duration}
				</p>
			</li>
		{/each}
	</ul>
</div>

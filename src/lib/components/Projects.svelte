<script>
	import { projects } from 'data'
</script>

<div class="mx-auto py-10 w-11/12 sm:w-5/6">
	<ul role="list" class="space-y-16">
		{#each projects as { icon, title, description, skills }, index (index)}
			<li class="relative flex gap-x-4">
				<div
					class="flex-auto text-gray-500 space-y-3 sm:space-y-4 py-1.5 sm:py-1"
				>
					<div class="flex items-center gap-4">
						<div class="h-6 w-6 rounded-full bg-gray-200 ring-1 ring-gray-400">
							<div class="flex items-center justify-center h-full w-full">
								{icon}
							</div>
						</div>
						<p
							class="font-medium text-red-700 truncate col-start-1 row-start-1 text-lg sm:text-xl"
						>
							{title}
						</p>
					</div>
					<p class="text-base sm:text-lg">{description}</p>
					<div class="flex flex-wrap gap-1">
						{#each skills as skill}
							<span
								class="inline-flex items-center rounded-full bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
								>{skill}</span
							>
						{/each}
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>

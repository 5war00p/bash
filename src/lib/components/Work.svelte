<script>
	import { work } from 'data'
</script>

<div class="m-auto py-10 w-5/6">
	<ul role="list" class="space-y-16">
		{#each work as { jobTitle, companyName, duration, employmentType, locationType, description, skills, isCurrentlyWorking }, index (index)}
			<li class="relative flex gap-x-4">
				{#if index < work.length - 1}
					<div
						class="absolute left-2 top-12 flex w-6 justify-center -bottom-14"
					>
						<div class="w-1 rounded-lg bg-gray-100" />
					</div>
				{/if}
				<div
					class="relative flex h-10 w-10 flex-none items-center justify-center bg-aubergine-dark"
				>
					{#if isCurrentlyWorking}
						<span
							class="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-gray-400 opacity-75"
						/>
					{/if}
					<div
						class="flex justify-center text-gray-400 h-6 w-6 rounded-full bg-gray-200 ring-1 ring-gray-400"
					>
						{work.length - index}
					</div>
				</div>
				<div class="flex-auto text-gray-500 space-y-4 py-1.5 sm:py-1">
					<div class="flex items-center gap-2 justify-between">
						<div>
							<p class="font-medium text-2xl text-red-700 truncate">
								{jobTitle}
							</p>
							<p class="text-xl font-semibold">
								{`@${companyName}`}
							</p>
						</div>
						<div>
							<span
								class="inline-flex items-center rounded-full bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
							>
								{duration}
							</span>
							<span
								class="inline-flex items-center rounded-full bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
								>{locationType}
							</span>
							<span
								class="inline-flex items-center rounded-full bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
								>{employmentType}
							</span>
						</div>
					</div>
					<p class="text-lg">{description}</p>
					<div class="flex flex-wrap gap-1">
						{#each skills as skill}
							<span
								class="inline-flex items-center rounded-full bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
							>
								{skill}
							</span>
						{/each}
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>

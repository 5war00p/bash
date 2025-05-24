<script>
	import { ossData } from 'data'
</script>

<div class="mx-auto py-10 w-11/12 sm:w-5/6">
	<ul role="list" class="sm:space-y-12 space-y-8">
		{#each ossData as { company, description, website, logoUrl, projects }}
			<li class="relative flex gap-x-4">
				<div
					class="flex-auto text-gray-500 space-y-3 sm:space-y-4 py-1.5 sm:py-1"
				>
					<div class="flex items-center gap-4">
						<img
							src={logoUrl}
							alt="{company} logo"
							class="h-6 w-6 rounded-md bg-gray-200 ring-1 ring-gray-400 object-cover"
						/>
						<button
							class="font-medium text-red-700 truncate col-start-1 row-start-1 text-xl sm:text-2xl hover:underline hover:underline-offset-1"
							on:mousedown|preventDefault={() => window.open(website, '_blank')}
						>
							{company}
						</button>
					</div>
					<p class="text-lg sm:text-xl">{description}</p>
					{#each projects as { title, description: projDesc, url, skills }, index}
						<div class="mb-6">
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								class="font-semibold text-blue-700 hover:underline text-lg sm:text-xl"
							>
								{index + 1}. {title}
							</a>
							<p class="text-base sm:text-lg text-gray-600">{projDesc}</p>
							<div class="flex flex-wrap gap-1 my-2">
								{#each skills as skill}
									<span
										class="inline-flex items-center rounded-full bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
										>{skill}</span
									>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</li>
		{/each}
	</ul>
</div>

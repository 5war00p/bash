<script>
	import { workData } from 'data'
</script>

<div class="mx-auto py-10 w-11/12 sm:w-5/6">
	<ul role="list" class="space-y-10 sm:space-y-16">
		{#each workData as { jobTitle, companyName, duration, employmentType, locationType, description, skills, isCurrentlyWorking, descriptionStart, noBullets, website }, index (index)}
			<li class="relative flex flex-col sm:flex-row gap-y-4 gap-x-4">
				{#if index < workData.length - 1}
					<div
						class="absolute left-2 top-12 w-6 justify-center -bottom-14 hidden sm:flex"
					>
						<div class="w-1 rounded-lg bg-gray-200" />
					</div>
				{/if}
				<div
					class="relative h-10 w-10 flex-none items-center justify-center mx-auto sm:mx-0 hidden sm:flex"
				>
					{#if isCurrentlyWorking}
						<span
							class="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-gray-400 opacity-75"
						/>
					{/if}
					<div
						class="flex justify-center text-gray-400 h-6 w-6 rounded-full bg-gray-200 ring-1 ring-gray-400"
					>
						{workData.length - index}
					</div>
				</div>
				<div
					class="flex-auto text-gray-500 space-y-3 sm:space-y-4 py-1.5 sm:py-1"
				>
					<div
						class="flex flex-col sm:flex-row items-start sm:items-center gap-2 justify-between"
					>
						<div>
							<p class="font-medium text-xl sm:text-2xl text-red-700 truncate">
								{jobTitle}
							</p>
							{#if website}
								<button
									class="text-lg sm:text-xl font-semibold hover:underline-offset-1 hover:underline"
									on:mousedown|preventDefault={() =>
										window.open(website, '_blank')}
								>
									{companyName}
								</button>
							{:else}
								<p class="text-lg sm:text-xl font-semibold">
									{companyName}
								</p>
							{/if}
						</div>
						<div class="flex flex-wrap gap-1">
							<span
								class="inline-flex items-center rounded-full bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
								>{duration}</span
							>
							<span
								class="inline-flex items-center rounded-full bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
								>{locationType}</span
							>
							<span
								class="inline-flex items-center rounded-full bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
								>{employmentType}</span
							>
						</div>
					</div>
					{#if descriptionStart}
						<p class="text-base sm:text-lg">{descriptionStart}</p>
					{/if}
					{#if Array.isArray(description)}
						<ol
							class={`text-base sm:text-lg space-y-1 ${
								noBullets ? '' : 'list-decimal list-inside'
							} ${descriptionStart ? 'pl-4' : ''}`}
						>
							{#each description as desc}
								<li>{desc}</li>
							{/each}
						</ol>
					{:else}
						<p class="text-base sm:text-lg">{description}</p>
					{/if}
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

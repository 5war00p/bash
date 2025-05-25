<script>
	import { academicsData } from 'data'
</script>

<div class="mx-auto py-10 w-11/12 sm:w-5/6">
	<ul role="list" class="space-y-16">
		{#each academicsData as { title, institute, duration, cgpa, icon }, index (index)}
			<li class="relative flex gap-x-4">
				{#if index < academicsData.length - 1}
					<div
						class="absolute left-2 top-12 w-6 justify-center -bottom-14 hidden sm:flex"
					>
						<div class="w-1 rounded-lg bg-gray-200" ></div>
					</div>
				{/if}
				<div
					class="relative h-10 w-10 flex-none items-center justify-center hidden sm:flex"
				>
					<div class="h-6 w-6 rounded-full bg-gray-200 ring-1 ring-gray-400">
						<div class="flex items-center justify-center h-full w-full">
							{icon}
						</div>
					</div>
				</div>
				<div
					class="flex-auto w-full grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-x-2 gap-y-1 text-xl sm:text-2xl text-gray-500 py-1.5 sm:py-1"
				>
					<p
						class="font-medium text-red-700 truncate col-start-1 row-start-1 text-lg sm:text-xl"
					>
						{title}
					</p>
					<p
						class="font-bold leading-5 text-gray-500 sm:col-start-2 row-start-1 text-base sm:text-lg text-right"
					>
						{duration}
					</p>
					<p class="col-start-1 row-start-2 text-base sm:text-lg">
						{institute}
					</p>
					<p class="sm:col-start-2 row-start-2 text-base sm:text-lg text-right">
						{cgpa}
					</p>
				</div>
			</li>
		{/each}
	</ul>
</div>

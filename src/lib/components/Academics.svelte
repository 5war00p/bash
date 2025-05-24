<script>
	import { academics } from 'data'
</script>

<div class="m-auto py-10 w-5/6">
	<ul role="list" class="space-y-16">
		{#each academics as { title, institute, duration, cgpa }, index (index)}
			<li class="relative flex gap-x-4">
				{#if index < academics.length - 1}
					<div
						class="absolute left-2 top-12 flex w-6 justify-center -bottom-14"
					>
						<div class="w-1 rounded-lg bg-gray-100" />
					</div>
				{/if}
				<div
					class="relative flex h-10 w-10 flex-none items-center justify-center bg-aubergine-dark sm:h-10 sm:w-10"
				>
					<div
						class="h-6 w-6 rounded-full bg-gray-200 ring-1 ring-gray-400 sm:h-6 sm:w-6"
					/>
				</div>
				<div
					class="flex-auto w-full grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-1 text-2xl sm:text-4xl text-gray-500 py-1.5 sm:py-1"
				>
					<p
						class="font-medium text-red-700 truncate col-start-1 row-start-1 text-xl sm:text-2xl"
					>
						{title}
					</p>
					<p
						class="font-bold leading-5 text-gray-500 col-start-2 row-start-1 text-base sm:text-xl text-right"
					>
						{duration}
					</p>
					<p class="col-start-1 row-start-2 text-base sm:text-xl">
						{institute}
					</p>
					<p class="col-start-2 row-start-2 text-sm sm:text-base text-right">
						{cgpa}
					</p>
				</div>
			</li>
		{/each}
	</ul>
</div>

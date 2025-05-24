<script>
	import { aboutData } from 'data'
</script>

<div
	class="py-16 sm:py-20 flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 lg:gap-16"
>
	<div class="mx-auto max-w-7xl px-4 lg:px-6 flex-1">
		<div class="flex flex-col mx-auto max-w-2xl lg:mx-0 gap-8">
			<h2 class="text-4xl font-bold tracking-tight text-warm-grey sm:text-6xl">
				I'm <br />
				{aboutData.name}
			</h2>
			<p class="text-lg leading-8 text-gray-600 text-justify">
				{aboutData.bio}
			</p>
		</div>
	</div>
	<img
		alt="profile-pic"
		src={aboutData.avatarUrl}
		class="w-40 h-40 sm:w-64 sm:h-64 lg:w-[550px] lg:h-[550px] object-cover rounded-full mb-8 lg:mb-0"
	/>
</div>

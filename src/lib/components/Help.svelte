<script>
	import { aboutData } from 'data'
	const { username } = aboutData
</script>

<div class="text-green-400 rounded p-6 font-mono text-gray-500">
	<div class="mb-4">
		<span class="text-white font-bold">Command List</span>
	</div>
	<pre class="whitespace-pre-wrap">
	<span class="text-green-500">$</span> whoami
		About {username}

	<span class="text-green-500">$</span> academics
		List academic qualifications

	<span class="text-green-500">$</span> work
		List work experiences

	<span class="text-green-500">$</span> oss
		List open-source contributions

	<span class="text-green-500">$</span> projects
		List projects and contributions

	<span class="text-green-500">$</span> social
		List social media links

	<span class="text-green-500">$</span> contact
		Contact information

	<span class="text-green-500">$</span> help
		List available commands
	</pre>
</div>

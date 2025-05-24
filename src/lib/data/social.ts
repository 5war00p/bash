import socialData from './social.json'

import IconDiscord from 'icons/IconDiscord.svelte'
import IconGithub from 'icons/IconGithub.svelte'
import IconInstagram from 'icons/IconInstagram.svelte'
import IconLearnWeb3 from 'icons/IconLearnWeb3.svelte'
import IconLinkedin from 'icons/IconLinkedin.svelte'
import IconReddit from 'icons/IconReddit.svelte'
import IconStackOverflow from 'icons/IconStackOverflow.svelte'
import IconTelegram from 'icons/IconTelegram.svelte'
import IconX from 'icons/IconX.svelte'
import IconWhatsapp from 'icons/IconWhatsapp.svelte'

type Icon =
	| typeof IconGithub
	| typeof IconStackOverflow
	| typeof IconLinkedin
	| typeof IconDiscord
	| typeof IconReddit
	| typeof IconX
	| typeof IconInstagram
	| typeof IconTelegram
	| typeof IconWhatsapp
	| typeof IconLearnWeb3

interface SocialProfile {
	brand: string
	handler: string
	url: string
	icon: Icon
}

const getIcon = (brand: string): Icon => {
	switch (brand) {
		case 'Github':
			return IconGithub
		case 'StackOverflow':
			return IconStackOverflow
		case 'Linkedin':
			return IconLinkedin
		case 'Discord':
			return IconDiscord
		case 'Reddit':
			return IconReddit
		case 'Twitter':
			return IconX
		case 'Instagram':
			return IconInstagram
		case 'Telegram':
			return IconTelegram
		case 'WhatsApp':
			return IconWhatsapp
		case 'LearnWeb3':
			return IconLearnWeb3
		default:
			throw new Error(`Unknown brand: ${brand}`)
	}
}

/**
 * Interface representing a social profile record.
 * Makes sure imported JSON matches this structure.
 */
const social: Array<SocialProfile> = socialData.map((profile) => ({
	...profile,
	brand: profile.brand,
	icon: getIcon(profile.brand)
}))

export default social

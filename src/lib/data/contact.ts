import contactData from './contact.json'

import IconAt from 'icons/IconAt.svelte'
import IconPhone from 'icons/IconPhone.svelte'

type Icon = typeof IconAt | typeof IconPhone

interface Contact {
	title: string
	value: string
	icon: Icon
}

const getIcon = (title: string): Icon => {
	if (title.startsWith('Phone')) {
		return IconPhone
	}
	if (title === 'Email') {
		return IconAt
	}
	throw new Error(`Unknown contact title: ${title}`)
}

/**
 * Interface representing an academic record.
 * Makes sure imported JSON matches this structure.
 */
const contact: Array<Contact> = contactData.map((detail) => ({
	...detail,
	icon: getIcon(detail.title)
}))

export default contact

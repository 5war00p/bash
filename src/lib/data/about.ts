import aboutData from './about.json'

interface About {
	username: string
	hostname: string
	name: string
	bio: string
	avatarUrl: string
}

/**
 * Interface representing an academic record.
 * Makes sure imported JSON matches this structure.
 */
const about: About = aboutData

export default about

import ossData from './oss.json'

interface OpenSourceProject {
	company: string
	description: string
	website: string
	logoUrl: string
	projects: Array<{
		title: string
		description: string
		url: string
		skills: string[]
	}>
}

/**
 * Interface representing an OSS project record.
 * Makes sure imported JSON matches this structure.
 */
const oss: Array<OpenSourceProject> = ossData

export default oss

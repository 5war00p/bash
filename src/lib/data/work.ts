import workData from './work.json'
interface Work {
	jobTitle: string
	employmentType: string
	companyName: string
	location: string
	locationType: string
	duration: string
	isCurrentlyWorking: boolean
	website?: string
	description?: string | string[]
	skills: string[]
	noBullets?: boolean
	descriptionStart?: string
}

/**
 * Interface representing a work experience record.
 * Makes sure imported JSON matches this structure.
 */
const work: Array<Work> = workData

export default work

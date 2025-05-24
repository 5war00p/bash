import academicsData from './academics.json'

interface Academics {
	icon: string
	title: string
	institute: string
	duration: string
	cgpa: string
}

/**
 * Interface representing an academic record.
 * Makes sure imported JSON matches this structure.
 */
const academics: Array<Academics> = academicsData

export default academics

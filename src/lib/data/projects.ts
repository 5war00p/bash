import projectData from './projects.json'

interface Project {
	emoji: string
	title: string
	description: string
	skills: string[]
}

/**
 * Interface representing a project record.
 * Makes sure imported JSON matches this structure.
 */
const projects: Array<Project> = projectData

export default projects

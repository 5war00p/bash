import { valuesOfCommands } from './constants'

const extendedPlaceholders = ['query here...', ...valuesOfCommands]

/**
 *
 * @param HTMLSpanElement
 * Updates textContent of a given span tag in a regular interval
 */
const rotatePlaceholders = (element: HTMLSpanElement): void => {
	if (!element) return
	const loop = (i = 0) => {
		if (i < extendedPlaceholders.length) {
			element.textContent = extendedPlaceholders[i]
			i++
		} else {
			i = 0
		}
		setTimeout(loop, 1000, i)
	}

	loop()
}

export default rotatePlaceholders

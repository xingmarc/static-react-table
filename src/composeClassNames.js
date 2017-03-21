/**
 * @params {string} classnames, 
 */
export default function composeClassNames() {
	var classNamesArray = []
	for (const arg of arguments) {
		if (typeof arg === 'string') {
			classNamesArray = classNamesArray.concat(arg.split(' '))
		}
	}
	return classNamesArray.join(' ')
}

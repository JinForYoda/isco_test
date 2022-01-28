export const getFullDate = () => {
	const today = new Date()
	return today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear().toString().substring(2)
}


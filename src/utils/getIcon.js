import Complete from '@/components/Icons/Complete'

export const getIcon = iconName => {
	switch (iconName) {
		case 'complete':
			return Complete

		default:
			break
	}
}

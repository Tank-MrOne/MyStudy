import ajax from './ajax'


export const getIndex = () => ajax({
	url: '/getIndexData'
})


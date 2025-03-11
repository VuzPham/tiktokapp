import * as httpRequest from '~/utils/httpRequest' // tất cả import bao gồm default và riêng lẻ

export const search = async (q, type = 'less')  => {
    try {
        const res = await httpRequest.get('users/search', {
            params:{
                q: q,
                type: type,
            }
        })
        return res.data
    }
    catch(error){
        console.log(error)
    }
}
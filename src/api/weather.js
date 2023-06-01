import request from '@/utils/request.js'

export const getCity = ()=>{
   return request({
        url:'https://restapi.amap.com/v3/ip',
        method:'post',
        data:'key=e17802d541158928bbe8cce0b35a5133'
    })
}
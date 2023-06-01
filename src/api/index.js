import request from '@/utils/request.js'

//获取城市
export const getCity = ()=>{
   return request({
        url:'https://restapi.amap.com/v3/ip',
        method:'post',
        data:'key=e17802d541158928bbe8cce0b35a5133'
    })
}

//获取天气
export const getWeather = (data)=>{
    return request({
        url:'https://restapi.amap.com/v3/weather/weatherInfo',
        method:'post',
		data: "key=e17802d541158928bbe8cce0b35a5133&city=" + data,
    })
}

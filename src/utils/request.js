import axios from "axios";

const myAxios = axios.create({
    url:'https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf'
})

export default myAxios 
import wyRequest from "../request";

//获取城市
export const getCity = (data) => {
  return wyRequest.get({
    url: `https://geo.datav.aliyun.com/areas_v3/bound/${data}_full.json`,
    data: "key=e17802d541158928bbe8cce0b35a5133",
  });
};

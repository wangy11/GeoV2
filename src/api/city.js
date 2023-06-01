import request from "@/utils/request.js";

export const getCity = (data) => {
  return request({
    url: `/auth/auth/thirdParty/one?code=${data}`,
    method: "get",
  });
};

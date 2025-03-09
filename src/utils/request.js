import axios from "axios";

 const request = axios.create({
    baseURL: `https://tiktok.fullstack.edu.vn/api/`,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export const get = async (path, option = {}) => {
  const res = await request.get(path,option) // request naỳ là request axios
  return res.data // custom get
}
export default request
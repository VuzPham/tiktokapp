import axios from "axios";

console.log(process.env.REACT_APP_BASE_URL)
// hiển  thị ở môi trường development qua file .env.development

 const httpRequest = axios.create({
    baseURL: `https://tiktok.fullstack.edu.vn/api/`,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export const get = async (path, option = {}) => {
  const res = await httpRequest.get(path,option) // request naỳ là request axios
  return res.data // custom get
}
export default httpRequest

// Local / development

//Test/ staging

// UAT

// Production 
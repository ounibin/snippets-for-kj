import axios from 'axios'

const BASE_URL_DEV = 'https://api-dev.typhur.cn/web'
const BASE_URL_TEST = 'https://api-test.typhur.cn/web'
const BASE_URL_PRD = 'https://api.iot.typhur.com/web'

const axiosIns = axios.create()

// Add a request interceptor
axiosIns.interceptors.request.use(function (config) {
  // Do something before request is sent
  const headersInfo = {
    'Content-Type': 'application/json',
    'Token': 'YOUR_TOKEN_HERE'
  }

  // let baseUrl = BASE_URL_PRD
  // if (location.hostname.includes('myshopify.dev')) {
  //   baseUrl = BASE_URL_TEST
  // } else if (location.hostname.includes('localhost')) {
  //   baseUrl = BASE_URL_DEV
  // }
  // console.log('baseUrl===', baseUrl)
  // config.baseURL = baseUrl
  config.headers = headersInfo
  config.timeout = 10000
  return config

}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axiosIns.interceptors.response.use(function (response) {
  const res = response.data
  const { code, data, msg } = res
  if (String(code) === '0') {
    return data
  } else {
    throw (res)
  }
}, function (error) {
  return Promise.reject(error)
})

export default axiosIns
import axios from 'axios'

export function request(config) {
  // 封装一个axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 500
  })
  // 拦截器
  // 请求拦截器
  instance.interceptors.request.use(
    config => {
      // console.log(config);
      return config
    }, 
    err => {
      // console.log(err);
    })

  // 响应拦截器
  instance.interceptors.response.use(
    res => {
      // console.log(res)
      return res.data
    },
    err => {
      // console.log(err)
    }
  )

  // 发送网络请求,返回的本身就是Promise，可以直接调用
  return instance(config)
}

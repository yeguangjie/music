import axios from 'axios'
import {
  BannerResource
} from './resource'

export default {
  // 获取banner首页轮播图
  getBannerResource () {
    return axios.get(BannerResource)
  }
}

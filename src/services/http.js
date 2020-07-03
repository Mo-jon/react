import axios from 'axios'
import Qs from 'qs'
// import LocalStorage from "@/store/localStorage";

export default class HttpClass {
  constructor() {
    this.http = axios;
    this.qs = Qs;
    // this.base = `${process.env.VUE_APP_SERVE}TianDiTuAPI/`;
    this.base = `http://guiqiang.net/TianDiTuAPI/`;
    this.defaultPath = 'API.php';
  }

  /** 请求配置 */
  requestConfig(){
    return {
      headers: {
        // "Token": LocalStorage.user ? LocalStorage.user.token : '',
      },
      baseURL: this.base
    }
  }

  /**
   * get请求
   * @param {string} url url路径
   * @param {object} params url参数
   */
  get(url, params) {
    return new Promise((resolve, reject) => {
      const path = this.joinPath(url, params);
      const requestConfig = this.requestConfig();
      this.http.get(path, requestConfig).then((response) => {
        this.power(response.data.code);
        resolve(response.data);
      }).catch((error) => {
        console.error(error);
        reject(error);
      })
    })
  }

  /**
   * post请求
   * @param {string} url url路径
   * @param {object} data body参数
   * @param {object} params url参数
   */
  post(url, data, params) {
      console.log('[post请求]', data);
      
    return new Promise((resolve, reject) => {
      const path = this.joinPath(url, params);
      const requestConfig = this.requestConfig();
      this.http.post(path, this.qs.stringify(data), requestConfig).then((response) => {
        this.power(response.data.code);
        resolve(response.data);
      }).catch((error) => {
        console.error(error);
        reject(error);
      })
    })
  }

  // 并接path
  joinPath(url, params) {
    let param = [];
    for (let key in params) {
      if (params[key] !== undefined) {
        param.push(`${key}=${params[key]}`);
      }
    }
    const path = url ? url + '?' + param.join('&') : this.defaultPath + '?' + param.join('&');
    return path;
  }

  // 检查权限
  power(code) {
    if (code === 1) {
      // 权限无效,清除登录信息
    //   LocalStorage.logout();
    }
  }
}
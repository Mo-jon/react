import HttpClass from './http';
import Hash from "./hash";

class ApiClass extends HttpClass {
  constructor() {
    super()
    console.log('this is a apiFile');
  }

  /**
   * 登录
   * @param {string} account 账号
   * @param {string} password 密码
   */
  login(account, password) {
    return this.post(
      'controller/login.php',
      {
        "name": account,
        "psw": Hash.hex_sha1(password)
      }
    );
  }
}

export default new ApiClass()
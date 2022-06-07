import axios from "axios";

const BASE_URL = 'http://localhost:3333/api/';

class AuthService {
  #axiosInstance;

  constructor() {
    this.#axiosInstance = axios.create({
      baseURL: `${BASE_URL}/auth/`
    })
  }

  signUp(userData) {
    return this.#axiosInstance.post('signup', userData);
  }

  login(loginData) {
    return this.#axiosInstance.post('login', loginData);
  }
}

export default new AuthService();
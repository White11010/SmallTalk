import axios from "axios";

constBASE_URL = 'http://localhost:3333/api/';

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: BASE_URL
    })
  };

  post(path, data) {
    return this.service
      .post(path,
        {
          data
        })
  }
}

export default new Service();
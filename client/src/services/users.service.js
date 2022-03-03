import axios from "axios";

import authHeader from "src/services/auth-header";

class UsersService {
  search(login) {
    return axios.get(`http://localhost:3333/users/search/` + login, {headers: authHeader()})
      .then(response => {
        return response.data;
      });
  }
  getUsersChats() {
    return axios.get(`http://localhost:3333/chat/conversation/`, {headers: authHeader()})
      .then(response => {
        return response.data;
      });
  }
  createNewChat(receiverId) {
    return axios.post(`http://localhost:3333/chat/conversation/`, { receiverId: receiverId }, {headers: authHeader()})
      .then(response => {
        return response.data;
      });
  }
}
export default new UsersService();

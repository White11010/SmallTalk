import axios from "axios";

import authHeader from "src/services/auth-header";

class MessagesService {
  send(receiverId, text) {
    return axios.post(`http://localhost:3333/chat/messages`,
      {
        receiverId: receiverId,
        text: text
      },
      {
        headers: authHeader()
      })
      .then(response => {
        return response.data;
      });
  }
  get(userId) {
    return axios.get(`http://localhost:3333/chat/messages/${userId}`,
      {
        headers: authHeader()
      })
      .then(response => {
        return response.data;
      });
  }
}
export default new MessagesService();

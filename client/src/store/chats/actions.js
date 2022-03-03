import UsersService from "src/services/users.service";
import MessagesService from "src/services/messages.service";

export function saveChats({commit}) {
  return UsersService.getUsersChats().then(
    chats => {
      commit('saveChats', chats);
      return Promise.resolve(chats);
    },
    error => {
      return Promise.reject(error);
    }
  );

}

export function addChat({commit}, receiverId) {
  return UsersService.createNewChat(receiverId).then(
    chat => {
      commit('addChat', chat);
      return Promise.resolve(chat);
    },
    error => {
      return Promise.reject(error);
    }
  )
}

export function setActiveChat({commit}, payload) {
  commit('setActiveChat', payload);
}

export function getMessagesInActiveChat({commit}, payload) {
  return MessagesService.get(payload).then(
    messages => {
      commit('getMessagesInActiveChat', messages);
      return Promise.resolve(messages);
    },
    error => {
      return Promise.reject(error);
    }
  )
}
export function addNewMessage({commit}, payload) {
  commit('addNewMessage', payload);
}






export function saveChats ({ commit }, chats) {
  commit('saveChats', chats);
}

export function setActiveChat ({ commit }, payload) {
  commit('setActiveChat', payload);
}




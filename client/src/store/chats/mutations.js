export function saveChats (state, chats) {
  state.chatsList = chats;
}

export function setActiveChat (state, payload) {
  console.log(payload)
  state.activeChat = payload;
}


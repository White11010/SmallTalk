export function saveChats (state, chats) {
  state.chatsList = chats;
}

export function addChat (state, chat) {
  state.chatsList.push(chat);
}

export function setActiveChat (state, payload) {
  state.activeChat = payload;
}

export function getMessagesInActiveChat (state, payload) {
  state.activeMessages = payload;
}
export function addNewMessage (state, payload) {
  state.activeMessages.push(payload);
}



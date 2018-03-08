import { composeP } from 'ramda';

import * as service from './service';

async function fetchLastMessages(messagesInStore) {
  const newMessages = await service.getLastMessages(messagesInStore);
  return { messages: [ ...messagesInStore, ...newMessages] };
}

async function createMessage({ currentUser: { name }, messageContent }) {
  await service.createMessage(name, messageContent);
}

function clearMessageContent() {
  return { messageContent: '' };
}

export default (store) => ({
  fetchMessages: state => fetchLastMessages(state.messages),
  createMessage: composeP(clearMessageContent, createMessage),
  setMessageContent: (state, content) => ({ messageContent: content }),
});

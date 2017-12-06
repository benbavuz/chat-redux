// TODO: add and export your own actions
export const SET_MESSAGES = 'SET_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';

// action for setting messages
export function setMessages (channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());

  return {
    type: SET_MESSAGES,
    payload: promise
  };
}

// action for submitting
export function createMessage(channel, author, content) {
  const body = { author: author, content: content, channel: channel};
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(r => r.json());

  return {
    type: CREATE_MESSAGE,
    payload: promise
  };
}

export function selectChannel (channel) {
  return {
    type: SELECT_CHANNEL,
    payload: channel
  };
}

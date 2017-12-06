import { SET_MESSAGES } from '../actions';
import { CREATE_MESSAGE } from '../actions';
import {SELECT_CHANNEL} from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload.messages
    case SELECT_CHANNEL:
      return []
    case CREATE_MESSAGE:
      let newMessages = state.slice(0);
      newMessages.push(action.payload);
     return newMessages
    default:
      return state;
  }
}

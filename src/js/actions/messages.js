import { RECEIVE_MESSAGES } from '../consts/actionTypes';

export const handleMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});
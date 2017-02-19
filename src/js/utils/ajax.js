import axios from 'axios';
import { map, resolveThrough, rejectThrough } from 'fun-util';
import { handleMessages } from '../actions/messages';

axios.interceptors.response.use(
  ({ data }) => Promise.resolve(data),
  ({ data }) => Promise.reject(data)
);

const methods = { delete: '', get: '', patch: '', post: '', put: '', options: '' };

export default dispatch => {
  const handler = ({ messages }) => dispatch(handleMessages(messages));
  return map(methods, (_, method) => {
    return (...args) => axios[method](...args)
      .then(resolveThrough(handler), rejectThrough(handler));
  });
};
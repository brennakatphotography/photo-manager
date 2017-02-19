const loggerMiddleware = ({ getState }) => next => action => {
  log('Dispatched action:', action);
  let nextAction = next(action);
  log('State after dispatching:', getState());
  return nextAction;
};

const log = (...args) => {
  if (window.getEnv && window.getEnv().ENV === 'development') {
    console.debug(...args);
  }
}

const dispatchAsync = ({ dispatch }) => next => action => {
  return typeof action === 'function' ? action(dispatch) : next(action);
};

export default [
  dispatchAsync,
  loggerMiddleware
];

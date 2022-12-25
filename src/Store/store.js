import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import loggerMiddleware from './middlewares/logger';

export default function configureAppStore(preloadedState) {
  const bindMiddleware = (middleware) => {
    const addedMiddleware = [...middleware()];
    if (process.env.NODE_ENV === 'development') {
      addedMiddleware.push(loggerMiddleware);
    }
    return addedMiddleware;
  };

  const store = configureStore({
    reducer: rootReducer,
    middleware: bindMiddleware(getDefaultMiddleware),
    preloadedState,
  });
  return store;
}

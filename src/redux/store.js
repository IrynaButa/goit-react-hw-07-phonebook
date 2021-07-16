import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  //persistStore,
  //persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

export default store;

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter '],
// };
// const persistContacts = persistReducer(persistConfig, contactsReducer);

//  export const store = configureStore({
//   reducer: {
//     contacts: persistContacts,
//   },
//   middleware: getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   devTools: process.env.NODE_ENV === 'development',
// });

//  export const persistor = persistStore(store);


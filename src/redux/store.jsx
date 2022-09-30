import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contentSlice from "./slices/contentSlice";
import selectedProductSlice from "./slices/selectedProductSlice";
import cartSlice from "./slices/cartSlice";
import storage from "redux-persist/lib/storage";
// import rootReducer from "./reducers";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const rootReducer = combineReducers({
  contentSlice,
  selectedProductSlice,
  cartSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

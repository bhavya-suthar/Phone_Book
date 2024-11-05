import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ContactReducer from "../redux/ContactSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "contactsecrate",
  storage,
};

const rootReducer = combineReducers({
  contact: ContactReducer,
});

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: ['persist/PERSIST','persist/REHYDRATE'],
        }
    })
});

export const persistor = persistStore(store)
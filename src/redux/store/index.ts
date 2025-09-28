import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from '@redux/slices/exampleSlice';
import { todoApi } from '@redux/services/todoApi';

export const store = configureStore({
    reducer: {
        example: exampleReducer,
        [todoApi.reducerPath]: todoApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

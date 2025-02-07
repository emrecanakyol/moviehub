import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slice/moviesSlice';

const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

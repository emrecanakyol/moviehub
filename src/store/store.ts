import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './slice/moviesSlice';

const store = configureStore({
    reducer: {
        movies: moviesSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

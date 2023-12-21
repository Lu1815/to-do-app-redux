import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./TodosSlice";
import { mockApi } from "./MockAPI";

export const store = configureStore({
    reducer: {
        todos: todosSlice,
        [mockApi.reducerPath]: mockApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mockApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
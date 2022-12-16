import { createReducer } from "@reduxjs/toolkit";

export const loadUserReducer = createReducer({}, (builder) => {
    builder.addCase("LOAD_USER", (action, state) => {
        state.loading = true
    })
        .addCase("LOAD_USER_SUCCESS", (action, state) => {
            state.loading = false
            state.isAuthenticated = true
            state.user = action.payload
        })
        .addCase("LOAD_USER_FAILED", (action, state) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload
        })
})

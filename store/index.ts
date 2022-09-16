import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

interface EmailState {
    value: string
}

const initialState: EmailState = {
    value: "",
}

const emailSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        changeEmail: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    },
})

const store = configureStore({
    reducer: {
        email: emailSlice.reducer
    },
})


export const { changeEmail } = emailSlice.actions
export default store

// export type AppDispatch = typeof store.dispatch




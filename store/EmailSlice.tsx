import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: string
}

const initialState: CounterState = {
    value: "",
}

export const emailSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        changeEmail: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    },
})

export const { changeEmail } = emailSlice.actions

export default emailSlice.reducer
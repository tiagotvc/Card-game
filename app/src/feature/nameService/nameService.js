import { createSlice } from '@reduxjs/toolkit';

export const nameServiceSlice = createSlice({
    name: 'data',
    initialState: {
        data:'',
    },
    reducers: {
        changeName(state, { payload }) {
            return { ...state, data: payload }
        }
    }
}) 

export const { changeName } = nameServiceSlice.actions
export default nameServiceSlice.reducer
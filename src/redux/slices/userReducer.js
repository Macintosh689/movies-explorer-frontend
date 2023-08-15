import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   token:''
}

export const userSlice = createSlice({
   name: 'user',
   initialState: initialState,
   reducers: {
      setToken: (state, action) => {
         state.token=action.payload
      } 
   }
})

export default userSlice.reducer

export const{setToken} = userSlice.actions
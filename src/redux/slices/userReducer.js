import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   token:'',
   userInfo: {},
}

export const userSlice = createSlice({
   name: 'user',
   initialState: initialState,
   reducers: {
      setToken: (state, action) => {
         state.token=action.payload
      },
      setUserInfo: (state, action) => {
         state.userInfo=action.payload
      },
      clearUser:(state, action) => {
         state.token='';
         state.userInfo= {};
      }
   }
})

export default userSlice.reducer

export const{setToken, setUserInfo,clearUser} = userSlice.actions
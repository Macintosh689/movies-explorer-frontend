import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   token:'',
   userInfo: false,
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
      } 
   }
})

export default userSlice.reducer

export const{setToken, setUserInfo} = userSlice.actions
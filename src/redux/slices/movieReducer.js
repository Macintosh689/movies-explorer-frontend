import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   allMovies: [],
   search: '',
   error : false,
   short : false,
   saveSearch: '',
   saveShort: false
}

export const moviesSlice = createSlice({
   name: 'movies',
   initialState: initialState,
   reducers: {
      setAllMovies: (state, action) => {
         state.allMovies=action.payload
      },
      setSearch: (state, action) => {
         state.search=action.payload
      },
      setError: (state, action) => {
         state.error=action.payload
      },
      setShort: (state, action) => {
         state.short=action.payload
      },
      setSaveSearch: (state, action) => {
         state.saveSearch=action.payload
      },
      setSaveShort: (state, action) => {
         state.saveShort=action.payload
      },

   }
})


export default moviesSlice.reducer

export const{setAllMovies, setSearch, setError, setShort, setSaveSearch, setSaveShort} = moviesSlice.actions
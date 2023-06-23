import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState:{
    name:"gustavo",
    age:90,
    token:true
  },
  reducers:{
    setName: (state, action) =>{
      state.name = action.payload
    },
    setAge: (state, action) =>{
      state.age = action.payload
    },
    setToken: (state, action) =>{
      state.token = action.payload
    }
  }

})

export const {setName, setAge, setToken} = slice.actions
export default slice.reducer;
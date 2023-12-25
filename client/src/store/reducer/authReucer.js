import {createSlice,createAsyncThunk} from'@reduxjs/toolkit'
import api from '../../api/api'
 
export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async(info,{rejectWithValue,fulfillWithValue})=>{
   
        try {
            const {data} = await api.post('/api/admin-login',info,{withCredentials:true})
            localStorage.setItem('accesstoken',JSON.stringify(data.token))
            return fulfillWithValue(data)
        } catch (error) {
          
           return rejectWithValue(error.response.data)
        }
    }
)

 
export const authReducer = createSlice({
    name:'auth',
   initialState: { 
    successMessage:'',
    errrorMessage:'', 
    loader:false,
    userInfo:''
},
reducers:{
    messageClear:(state,_)=>{
        state.errrorMessage = ''
        state.successMessage = ''
    }
},
   extraReducers: function(builder){
      builder.addCase(admin_login.pending,(state,_)=>{
            state.loader=true
      })
      builder.addCase(admin_login.rejected,(state,action)=>{
        state.loader=false 
        state.errrorMessage=action.payload.error
  })
  builder.addCase(admin_login.fulfilled,(state,action)=>{
    state.loader=false 
    state.successMessage=action.payload.message
})
   }
 
   

})

export const {messageClear} = authReducer.actions
export default authReducer.reducer

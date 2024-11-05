import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    contacts:[]
}

const ContactSlice = createSlice({
    name:"contact",
    initialState,
    reducers:{
        addContact:(state,action)=>{
        }
    }
})

export const {addContact} = ContactSlice.actions
export default ContactSlice.reducer 
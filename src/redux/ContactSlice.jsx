import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    contacts:[]
}

const ContactSlice = createSlice({
    name:"contact",
    initialState,
    reducers:{
        addContact:(state,action)=>{
            state.contacts.push({...action.payload,id:nanoid()})
        }
    }
})

export const {addContact} = ContactSlice.actions
export default ContactSlice.reducer 
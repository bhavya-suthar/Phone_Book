import { createSlice, nanoid } from "@reduxjs/toolkit";
// import EditContact from "../Components/EditContact";

const initialState = {
  contacts: [],
};

const ContactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push({ ...action.payload, id: nanoid() });
    },
    deleteContact: (state, action) => {
      const deletedData = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      console.log("🚀 ~ state.contacts:", state.contacts);
      state.contacts = deletedData;
    },
    EditContactSlice:(state,action)=>{
      const {id,name,phone,email}= action.payload
      const existingContact = state.contacts.find((con)=>con.id === id)
      if(existingContact){
        existingContact.name = name
        existingContact.phone = phone
        existingContact.email = email
      }
    }
  },
});

export const { addContact, deleteContact ,EditContactSlice} = ContactSlice.actions;
export default ContactSlice.reducer;

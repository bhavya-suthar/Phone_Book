import { createSlice, nanoid } from "@reduxjs/toolkit";

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
  },
});

export const { addContact, deleteContact } = ContactSlice.actions;
export default ContactSlice.reducer;

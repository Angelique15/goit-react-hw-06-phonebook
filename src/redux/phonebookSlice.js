import { createSlice } from '@reduxjs/toolkit';

const phonebookSlice = createSlice({
    name: 'phonebook',
    initialState: {
        contacts: [],
        filter: '',
    },
    reducers: {
        setContacts: (state, action) => {
            state.contacts = action.payload;
        },
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { setContacts, addContact, deleteContact, setFilter } = phonebookSlice.actions;

export default phonebookSlice.reducer;


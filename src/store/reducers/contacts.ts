import ContactClass from '../../models/Contact'
import Contact from '../../models/Contact'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ContactsState = {
  items: Contact[]
}

const initialState: ContactsState = {
  items: [
    {
      id: 1,
      contactName: 'Marcos Mantovani',
      phone: '5548900000000',
      email: 'email@gmail.com'
    },
    {
      id: 2,
      contactName: 'Pedro Souza',
      phone: '5511900000000',
      email: 'email12312@gmail.com'
    },
    {
      id: 3,
      contactName: 'Antonio Rosa',
      phone: '22900000000',
      email: 'email212345@gmail.com'
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      )
    },
    add: (state, action: PayloadAction<Omit<ContactClass, 'id'>>) => {
      const ContactAlreadyExists = state.items.find(
        (contact) =>
          contact.contactName.toLowerCase() ===
          action.payload.contactName.toLowerCase()
      )

      if (ContactAlreadyExists) {
        alert('Já existe um contato com esse nome')
      } else {
        const lastContact = state.items[state.items.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.items.push(newContact)
      }
    },
    edit: (state, action: PayloadAction<ContactClass>) => {
      const Contactindex = state.items.findIndex(
        (contact) => contact.id === action.payload.id
      )

      if (Contactindex >= 0) {
        state.items[Contactindex] = action.payload
      }
    }
  }
})

export const { remove, add, edit } = contactsSlice.actions
export default contactsSlice.reducer

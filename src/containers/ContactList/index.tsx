import { useSelector } from 'react-redux'

import ContactCard from '../../components/ContactCard'
import { Titulo } from '../../styles'
import { MainContainer } from './styles'
import { RootReducer } from '../../store'

const ContactList = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)

  return (
    <MainContainer>
      <Titulo>Contatos</Titulo>
      <ul>
        {items.map((contact) => (
          <li key={contact.contactName}>
            <ContactCard
              contactName={contact.contactName}
              phone={contact.phone}
              email={contact.email}
              id={contact.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ContactList

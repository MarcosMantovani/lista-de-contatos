import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Titulo } from '../../styles'
import { Aside, Campo, ConfirmButton, FormLabel } from './styles'
import { add } from '../../store/reducers/contacts'

const Sidebar = () => {
  const dispatch = useDispatch()

  const [contactName, setContactName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const addContact = (event: FormEvent) => {
    event.preventDefault()

    dispatch(add({ contactName, phone, email }))
  }

  return (
    <Aside>
      <Titulo>Novo contato</Titulo>
      <form onSubmit={addContact}>
        <FormLabel htmlFor="name">Nome</FormLabel>
        <Campo
          value={contactName}
          onChange={(event) => setContactName(event.target.value)}
          type="text"
          id="name"
          required
        />
        <FormLabel htmlFor="email">E-mail</FormLabel>
        <Campo
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          id="phone"
          required
        />
        <FormLabel htmlFor="phone">Telefone</FormLabel>
        <Campo
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          type="number"
          id="phone"
          required
        />
        <ConfirmButton type="submit">Adicionar</ConfirmButton>
      </form>
    </Aside>
  )
}

export default Sidebar

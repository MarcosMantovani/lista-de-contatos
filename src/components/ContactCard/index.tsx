import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import ContactClass from '../../models/Contact'
import * as S from './styles'
import { edit, remove } from '../../store/reducers/contacts'

type Props = ContactClass

const ContactCard = ({
  contactName,
  phone: originalPhone,
  email: originalEmail,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (originalPhone.length > 0) {
      setPhone(originalPhone)
    }
  }, [originalPhone])

  useEffect(() => {
    if (originalEmail.length > 0) {
      setEmail(originalEmail)
    }
  }, [originalEmail])

  function cancellEditing() {
    setIsEditing(false)
    setPhone(originalPhone)
    setEmail(originalEmail)
  }

  return (
    <S.Card>
      <S.ContactIcon src="/contact_Icon.png" alt="Contact Icon" />
      <div>
        <S.ContactHeader>
          <div>
            <S.ContactName>{contactName}</S.ContactName>
            {!isEditing ? (
              <S.HeaderButton onClick={() => setIsEditing(true)}>
                <img src="/editing_icon.png" />
              </S.HeaderButton>
            ) : (
              <div>
                <S.HeaderButton
                  onClick={() => {
                    dispatch(
                      edit({
                        contactName,
                        phone,
                        email,
                        id
                      })
                    )
                    setIsEditing(false)
                  }}
                >
                  <img src="/confirm_icon.png" />
                </S.HeaderButton>
                <S.HeaderButton onClick={cancellEditing}>
                  <img src="/decline_icon.png" />
                </S.HeaderButton>
              </div>
            )}
          </div>
          {!isEditing && (
            <S.HeaderButton>
              <img
                src="/removing_icon.png"
                onClick={() => dispatch(remove(id))}
              />
            </S.HeaderButton>
          )}
        </S.ContactHeader>
        <S.InfoContainer>
          <S.ContactInfo
            disabled={!isEditing}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
            type="number"
          ></S.ContactInfo>
          <S.ContactInfo
            disabled={!isEditing}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            type="text"
          ></S.ContactInfo>
        </S.InfoContainer>
      </div>
    </S.Card>
  )
}

export default ContactCard

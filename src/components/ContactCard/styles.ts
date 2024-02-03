import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 16px;
  display: grid;
  grid-template-columns: 72px auto;
  column-gap: 16px;
`

export const ContactHeader = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
  }
`

export const ContactIcon = styled.img`
  height: 72px;
  width: 72px;
`

export const ContactName = styled.h2`
  color: ${(props) => props.theme.textColor};
`

export const HeaderButton = styled.button`
  border: none;
  cursor: pointer;
  margin-left: 8px;
  background-color: transparent;

  img {
    height: 30px;
    width: 30px;
    object-fit: cover;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContactInfo = styled.input`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.secondaryTextColor};
  border: none;
  background-color: transparent;
`

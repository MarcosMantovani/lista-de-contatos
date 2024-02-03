import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 0 16px;
  height: 100vh;
  background-color: ${(props) => props.theme.sidebarColor};
`

export const FormLabel = styled.label`
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
`

export const Campo = styled.input`
  padding: 8px;
  border-radius: 8px;
  fonte-weight: bold;
  color: ${(props) => props.theme.secundaryTextColor};
  border-color: transparent;
  width: 100%;
`

export const ConfirmButton = styled.button`
  background-color: ${(props) => props.theme.confirmButtonColor};
  padding: 8px;
  border-radius: 8px;
  border: none;
  color: ${(props) => props.theme.ButtonTextColor};
  font-weight: bold;
  margin-top: 16px;
`

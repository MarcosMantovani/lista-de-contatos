import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
    list-style: none;
    font-family: 'Inter', sans-serif;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  background-color: ${(props) => props.theme.backgroundColor};
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 16px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
`

export default GlobalStyle

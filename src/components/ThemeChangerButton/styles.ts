import styled from 'styled-components'

export const ThemeButton = styled.button`
  height: 64px;
  width: 64px;
  background-color: ${(props) => props.theme.themeButtonColor};
  border-radius: 50%;
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  cursor: pointer;

  img {
    height: 60px;
    width: 60px;
    object-fit: cover;
  }
`

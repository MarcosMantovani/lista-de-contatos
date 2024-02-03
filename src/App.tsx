import { Provider } from 'react-redux'
import { useState } from 'react'

import ContactList from './containers/ContactList'
import Sidebar from './containers/Sidebar'
import GlobalStyle, { Container } from './styles'
import store from './store'
import { ThemeProvider } from 'styled-components'
import temaLight from './theme/light'
import temaDark from './theme/dark'
import ThemeChangerButton from './components/ThemeChangerButton'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  function changeTheme() {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeProvider theme={isDarkMode ? temaDark : temaLight}>
      <Provider store={store}>
        <GlobalStyle />
        <Container>
          <Sidebar />
          <ContactList />
          <ThemeChangerButton
            changeTheme={changeTheme}
            isDarkMode={isDarkMode}
          />
        </Container>
      </Provider>
    </ThemeProvider>
  )
}

export default App

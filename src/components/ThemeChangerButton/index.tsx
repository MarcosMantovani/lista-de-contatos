import { ThemeButton } from './styles'

type Props = {
  changeTheme: () => void
  isDarkMode: boolean
}

const ThemeChangerButton = ({ changeTheme, isDarkMode }: Props) => (
  <div>
    <ThemeButton type="button" onClick={changeTheme}>
      {isDarkMode ? (
        <img src="/light_theme_icon.png" alt="" />
      ) : (
        <img src="/dark_theme_icon.png" alt="" />
      )}
    </ThemeButton>
  </div>
)

export default ThemeChangerButton

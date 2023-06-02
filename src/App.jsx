import Footer from './components/Footer'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/Global'
import LandingPage from './pages/LandingPage'
const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    text: '#fff',
  },
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <LandingPage />
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { CommonPovider } from '../src/context/CommonContext'

const GlobalStyle = createGlobalStyle`
/* Reset Básico de CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: #bdbdbd;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <CommonPovider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CommonPovider>
    </>
  )
}

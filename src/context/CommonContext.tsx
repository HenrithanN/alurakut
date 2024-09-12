import { createContext, useState } from 'react'
export const CommonContext = createContext(null)


export const CommonPovider = ({ children }) => {

  const [darkTheme, setDarkTheme] = useState(false)

  const theme = {
    dark:{
      nav:{
        bgColor: '#424242',
        primary: '#ffffff',
      },
      body: {
        bgColor: '#424242',
        primary: '#ffffff',
      }
    },
    light:{
      nav:{
        bgColor: '#308bc5',
        primary: '#ffffff',
      },
      body: {
        bgColor: '#ffffff',
        primary: '#000000',
      }
    }
  }

  const [selectedTheme, setSelectedTheme] = useState(darkTheme? theme.dark : theme.light)


  const changeTheme = () => {
    setDarkTheme(!darkTheme)
    setSelectedTheme(darkTheme? theme.light : theme.dark)
  }

  return (
    <CommonContext.Provider
      value={{
        darkTheme,
        selectedTheme,
        changeTheme
      }}
    >
      {children}
    </CommonContext.Provider>
  )
}

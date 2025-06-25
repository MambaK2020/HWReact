import React, { useState } from 'react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { Typography, Button } from '@mui/material'
import { styled } from '@mui/system'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  })

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: '12px',
    padding: '10px 20px',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  }));
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      

      <div>
        <Typography variant='h4'>
          {isDarkMode ? 'Dark Thema active': "Light Thema active"}
        </Typography>
        <CustomButton onClick={toggleTheme}>Change thema</CustomButton>
      </div>
    </ThemeProvider>
  )
}

export default App

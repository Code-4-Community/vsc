import { extendTheme } from "@chakra-ui/react"

const Theme = extendTheme({
  colors: {
    darkPink: {
      500: '#A40854',
    },
    lightPink: {
      500: '#C00074',
    }
  },
  fonts: {
    body: 'Poppins, sans-serif'
  },
  textStyles: {
    body: { fontWeight: 400 }
  },
})

export default Theme;

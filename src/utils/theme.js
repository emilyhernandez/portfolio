import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ['Work Sans', 'Oswald'].join(','),
    fontSize: '20',
    h1: {
      textAlign: 'center',
      fontFamily: 'Oswald',
      fontSize: '5rem',
    },
    h2: {
      textAlign: 'left',
      fontFamily: 'Oswald',
    },
    h3: {
      textAlign: 'center',
      fontFamily: 'Oswald',
    },
    h4: {},
    h5: {
      textTransform: 'uppercase',
      fontSize: '1.2rem',
    },
    h6: {
      textTransform: 'uppercase',
      fontSize: '1rem',
    },
    body2: { lineHeight: '2rem' },
  },
  palette: {
    type: 'light',
    primary: {
      light: '#F1F1F1',
      main: '#FFFFFF',
      contrastText: '#292929',
    },
    secondary: {
      light: '',
      main: '#ff00e6',
      dark: '',
      contrastText: '#ffffff',
    },
  },
  themeName: 'Ultrahack theme',
  shadows: Array(25).fill('none'),
  overrides: {
    MuiPaper: {},
    MuiButton: {
      text: {
        background: 'linear-gradient(45deg, #ff9900, #fd8095)',
        color: 'white',
        padding: '10px 30px',
        borderRadius: '30px',
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

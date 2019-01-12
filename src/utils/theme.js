import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ['Work Sans', 'Oswald'].join(','),
    fontSize: '20',
    h1: {
      textAlign: 'center',
      fontFamily: 'Oswald',
      fontSize: '5rem'
    },
    h2: {
      textAlign: 'left',
      fontFamily: 'Oswald'
    },
    h3: {},
    h4: {},
    h5: {},
    body2: { lineHeight: '2rem' }
  },
  palette: {
    type: 'light',
    primary: {
      light: '#F1F1F1',
      main: '#FFFFFF',
      contrastText: '#292929'
    },
    secondary: {
      light: '',
      main: '#ff00e6',
      dark: '',
      contrastText: '#ffffff'
    }
  },
  themeName: 'Ultrahack theme',
  shadows: ['none'],
  overrides: {
    MuiPaper: {},
    MuiButton: {
      text: {
        background: 'linear-gradient(45deg, #ff9900, #fd8095)',
        color: 'white',
        padding: '10px 30px',
        borderRadius: '30px'
      }
    }
  }
});

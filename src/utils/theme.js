import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ['Work Sans', 'Oswald'].join(','),
    fontSize: '18',
    h1: {
      textAlign: 'center',
      fontFamily: 'Oswald',
      fontSize: '5rem',
    },
    h2: {
      textAlign: 'left',
      fontFamily: 'Oswald',
    },
    h3: {},
    h4: {},
    h5: {},
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
      main: '#CF3141',
      dark: '',
      contrastText: '#ffffff',
    },
  },
  themeName: 'Ultrahack theme',
  shadows: ['none'],
  overrides: {
    MuiPaper: {},
    MuiAppBar: {},
  },
});


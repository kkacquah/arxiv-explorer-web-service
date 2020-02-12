import {
  red
} from '@material-ui/core/colors';
import {
  createMuiTheme
} from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  zIndex: {
    appBar: 20000,
    textField: 0
  },
  palette: {
    default: {
      main:'#3C64B1',
    },
    primary: {
      main:'#e1e7f3',
    },
    secondary: {
      main: '#3C64B1',
    },
    text: {
      primary: "#373F41",
      secondary: "#373F41"
    },
    button: {
      primary: "#3C64B1",
      secondary: "#373F41"
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#e1e7f3',
      paper:'#F4F5F4'
    },
  },

  typography: {
    button: {
      textTransform: "none"
    },
    fontFamily: [
      'Lato',
      'Muli'
    ].join(','),
  },
  shadows: ["none"],
  background: {
    default: '#fff',
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
      },
    }
  }
});

export default theme;

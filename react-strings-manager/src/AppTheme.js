import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const palette = {
  blue: '#043f93',
  lemon: '#f7d031',
  mint: '#44bfb8',
  orange: '#f37d53',
  paper: '#e5d2c1',
  peach: '#f3d3c3',
  slate: '#9a9ba3',
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: palette.blue,
    },
    secondary: {
      main: palette.mint,
    },
  },
});

export default function AppTheme(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <props.app />
    </ThemeProvider>
  );
}

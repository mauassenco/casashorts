import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Home</h1>
    </ThemeProvider>
  );
}

export default App;

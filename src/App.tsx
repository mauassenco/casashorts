import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globals';

import { theme } from './styles/theme';

import Home from './pages/Home';
import Footer from './layout/Footer';
import Header from './layout/Header';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MyLinks from './pages/MyLinks';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Router>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/my-links" element={<MyLinks />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

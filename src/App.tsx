import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globals';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { theme } from './styles/theme';

import PrivateRoute from './pages/PrivateRoute';
import Home from './pages/Home';
import Footer from './layout/Footer';
import Header from './layout/Header';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MyLinks from './pages/MyLinks';

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />

          <Router>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route element={<PrivateRoute />}>
                  <Route path="/my-links" element={<MyLinks />} />
                </Route>
              </Routes>
            </main>
            <Footer />
          </Router>
        </ThemeProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;

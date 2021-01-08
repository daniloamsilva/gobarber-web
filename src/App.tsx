import React from 'react';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

// import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />

    <GlobalStyle />
  </>
);

export default App;

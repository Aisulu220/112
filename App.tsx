import React, { useState } from 'react';

import SplashScreen from './src/screens/SplashScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import HelloScreen from './src/screens/HelloScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import PasswordScreen from './src/screens/PasswordScreen';

export default function App() {

  const [screen, setScreen] = useState('splash');

  switch (screen) {

    case 'splash':
      return <SplashScreen navigation={setScreen} />;

    case 'welcome':
      return <WelcomeScreen navigation={setScreen} />;

    case 'login':
      return <LoginScreen navigation={setScreen} />;

    case 'hello':
      return <HelloScreen navigation={setScreen} />;

    case 'signup':
      return <SignUpScreen navigation={setScreen} />;

    case 'password':
      return <PasswordScreen navigation={setScreen} />;

    default:
      return <WelcomeScreen navigation={setScreen} />;
  }
}
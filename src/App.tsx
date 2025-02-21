import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen';
import Stack from './navigators/Stack';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  }, []);

  return (
    <Provider store={store}>
      <Stack />
    </Provider>
  )
}

export default App
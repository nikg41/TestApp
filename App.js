import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './App/index';

function App() {
  return (
    <NavigationContainer>
      {<RootStack />}

    </NavigationContainer>
  );
}


export default App;
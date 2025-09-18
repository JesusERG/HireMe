/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StackNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;

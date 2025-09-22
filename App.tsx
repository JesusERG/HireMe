/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaProvider>
          <StackNavigator />
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  );
}

export default App;

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/types/NavigationTypes';
import Splash from '../screens/Splash';
import Feed from '../screens/Feed';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

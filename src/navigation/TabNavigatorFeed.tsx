import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed';
import Wordle from '../screens/Wordle';
import Ecomerce from '../screens/Ecomerce';
import User from '../screens/User';
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

function TabNavigatorFeed() {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Wordle" component={Wordle} />
      <Tab.Screen name="Ecommerce" component={Ecomerce} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
}
export default TabNavigatorFeed;

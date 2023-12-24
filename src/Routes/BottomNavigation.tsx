import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../Screens/Home';
import { About } from '../Screens/About';

const Tab = createBottomTabNavigator();

export const BottomNavigation = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};

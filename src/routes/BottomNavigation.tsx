import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home } from '@screens/Home';
import { About } from '@screens/About';
import { Progress } from '@screens/Progress';
import { colors } from '@styles/paletteColors';
import { Arcs } from '@screens/Arcs';
import { Settings } from '@screens/Settings';
import { Episode } from '@screens/Episode';
import { GoBackButton } from '@components/GoBackButton';

const Tab = createBottomTabNavigator();

export const BottomNavigation = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, ...rest }) => {
          let name = '';

          if (route.name === 'Início') {
            name = focused ? 'menu' : 'menu-outline';
          }

          if (route.name === 'Progresso') {
            name = focused ? 'analytics-sharp' : 'analytics-outline';
          }

          if (route.name === 'Sobre') {
            name = focused ? 'information-circle-sharp' : 'information-circle-outline';
          }

          if (route.name === 'Arcos') {
            name = focused ? 'compass' : 'compass-outline';
          }

          if (route.name === 'Ajustes') {
            name = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={name} {...rest} />;
        },
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderColor: colors.primary,
        },
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.text.primary,
        headerTintColor: colors.text.primary,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colors.primary,
          borderColor: colors.primary,
        },
      })}
    >
      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Progresso" component={Progress} />
      <Tab.Screen name="Arcos" component={Arcs} />
      <Tab.Screen name="Ajustes" component={Settings} />
      <Tab.Screen name="Sobre" component={About} />
      <Tab.Screen
        name="Episódio"
        component={Episode}
        options={{
          headerTitle: '',
          headerLeft: () => <GoBackButton onPress={() => null} />,
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

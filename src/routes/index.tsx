import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation } from './BottomNavigation';

export const Routes = (): JSX.Element => {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
};

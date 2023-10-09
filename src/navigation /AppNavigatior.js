import {createNativeStackNavigator} from '@react-navigation/native-stack';

import NavigationString from '../constants/NavigationString';
import BottomTabs from './BottomNavigation';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={NavigationString.LOGIN}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationString.MAIN}
          component={BottomTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

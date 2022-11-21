import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from './src/screens/splash'
import { Home } from './src/screens/home'
import { History } from './src/screens/history'
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Raleway: require('./assets/Raleway-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" 
      screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
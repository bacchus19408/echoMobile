// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// Navigation
import AppStack from './src/navigation/AppStack';
// Screens
import LoginScreen from './src/screens/LoginScreen';
import SignUp from './src/screens/SignUpScreen';
import OnboardScreen04 from './src/screens/OnboardScreen04';

import Config from 'react-native-config';

const Stack = createStackNavigator();

const App = () => {
  const API_URL = Config.API_URL;

  return <AppStack />;
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       {/* Add other screens here */}
  //       {/*         <Stack.Screen
  //         name="SplashScreen"
  //         component={SplashScreen}
  //         options={{headerShown: false}}
  //       />
  //       <Stack.Screen
  //         name="OnboardScreen01"
  //         component={OnboardScreen01}
  //         options={{headerShown: false}}
  //       />
  //       <Stack.Screen
  //         name="OnboardScreen02"
  //         component={OnboardScreen02}
  //         options={{headerShown: false}}
  //       />
  //       <Stack.Screen
  //         name="OnboardScreen03"
  //         component={OnboardScreen03}
  //         options={{headerShown: false}}
  //       /> */}
  //       <Stack.Screen
  //         name="OnboardScreen04"
  //         component={OnboardScreen04}
  //         options={{headerShown: false}}
  //       />
  //       <Stack.Screen name="Login" component={LoginScreen} />
  //       <Stack.Screen
  //         name="SignUp"
  //         component={SignUp}
  //         options={{headerTitle: 'Sign Up'}} // Set the header title for SignUpScreen
  //       />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
};

export default App;

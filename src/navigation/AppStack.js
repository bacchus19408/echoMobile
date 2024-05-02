// AppStack.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import OnboardScreen04 from '../screens/OnboardScreen04';
import SignUpScreen from '../screens/SignUpScreen'; // Ensure correct import path
import SignUpSuccessModal from '../screens/SignUpSuccessModal'; // Ensure correct import path
import HomeScreen from '../screens/HomeScreen';
import UserProfileScreen from '../screens/UserProfilerScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnboardScreen04"
          component={OnboardScreen04}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen
            name="SignUpSuccessModal"
            component={SignUpSuccessModal}
            options={{headerShown: false}}
          />
        </Stack.Group>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfileScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;

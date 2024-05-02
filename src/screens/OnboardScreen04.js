import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
  SafeAreaView, // Use SafeAreaView for better spacing on devices with notches
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Import your image file
import echoLogo from '../assets/Image/echoLogo.jpg';

const OnboardScreen04 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Grouped Image and Texts */}
      <View style={styles.content}>
        <Image source={echoLogo} style={styles.onboardingImage} />
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>Let’s get started!</Text>
          <Text style={styles.descriptionText}>
            Login to enjoy the features we’ve provided, and stay healthy!
          </Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.buttonLogin}>
          <Text style={styles.buttonLoginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          style={styles.buttonSignUp}>
          <Text style={styles.buttonSignUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Adjusts spacing
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    alignItems: 'center', // Center content horizontally
    marginTop: 50, // Adjust top margin as needed
  },
  onboardingImage: {
    width: 400,
    height: 300,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0A0E16',
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 16,
    color: '#707880',
    textAlign: 'center',
    marginTop: 10,
    letterSpacing: 0.5,
    width: 311,
  },
  buttonContainer: {
    marginBottom: 30, // Adjust bottom margin as needed
  },
  buttonLogin: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 6,
    width: 327,
    marginBottom: 10, // Add space between buttons
  },
  buttonSignUp: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 6,
    width: 327,
    borderWidth: 1,
    borderColor: 'rgba(0.9, 0.91, 0.92, 1)',
  },
  buttonLoginText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
  buttonSignUpText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'blue',
  },
});

export default OnboardScreen04;

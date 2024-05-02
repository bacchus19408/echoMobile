import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';

const OnboardScreen01 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our App!</Text>
      <Image
        source={require('../assets/Image/Onboarding3.jpg')}
        style={styles.image}
      />
      <Text style={styles.description}>
        Get connect our Online Consultation
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('OnboardScreen04')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width, // Use the device's width
    height: Dimensions.get('window').height, // Use the device's height
    backgroundColor: 'white', // Set the background color to white
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
});

export default OnboardScreen03;

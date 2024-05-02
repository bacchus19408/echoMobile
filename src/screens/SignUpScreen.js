import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Switch,
  Alert,
} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';

import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

// import {useNavigation} from '@react-navigation/native';
import SignUpSuccessModal from './SignUpSuccessModal';
import {createStackNavigator} from '@react-navigation/stack';

const SignUpScreen = ({navigation}) => {
  // State declarations
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSignUp = async () => {
    if (!acceptTerms) {
      Alert.alert(
        'Terms Required',
        'Please accept the terms of service to proceed.',
      );
      return;
    }

    // Encrypt the user data
    const encryptedName = AES.encrypt(name, 'secret key').toString();
    const encryptedEmail = AES.encrypt(email, 'secret key').toString();
    const encryptedPassword = AES.encrypt(password, 'secret key').toString();

    try {
      const response = await axios.post(
        `http://localhost:3000/api/users/register`,
        {
          name: encryptedName,
          email: encryptedEmail,
          password: encryptedPassword,
          termsAccepted: acceptTerms,
        },
      );

      console.log('Response Status:', response.status);
      if (response.status === 200 || response.status === 201) {
        // Navigate to SignUpSuccessModal after successful registration
        navigation.navigate('SignUpSuccessModal');
        setModalVisible(true);
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response?.data?.message || 'Could not complete sign up.';
      Alert.alert('Sign Up Failed', errorMessage);
    }

    const navigateToLogin = () => {
      navigation.navigate('Login');
      setModalVisible(true); // Also close the modal
    };
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      <View style={styles.termsContainer}>
        <Switch value={acceptTerms} onValueChange={setAcceptTerms} />
        <Text
          style={styles.termsText}
          onPress={() => setAcceptTerms(!acceptTerms)}>
          I accept the Terms of Service and Privacy Policy
        </Text>
      </View>
      <TouchableOpacity onPress={handleSignUp} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      {/* Form inputs and the Sign Up button */}
      <SignUpSuccessModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: Dimensions.get('window').width - 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    width: Dimensions.get('window').width - 50,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  termsText: {
    marginLeft: 5,
  },
});

export default SignUpScreen;

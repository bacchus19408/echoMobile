import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import bcrypt from 'react-native-bcrypt';

import {createStackNavigator} from '@react-navigation/stack';
import OnboardScreen04 from './OnboardScreen04';
import {useNavigation} from '@react-navigation/native';

// Import your image file
import chevronLeft from '../assets/Icon/ChevronLeft.png';
import eyeSlashIcon from '../assets/Icon/Eye_Slash.png';
import passwordIcon from '../assets/Icon/Password.png';
import emailIcon from '../assets/Icon/Email.png';
import googleIcon from '../assets/Button/Google.png';
import facebookIcon from '../assets/Button/Facebook.png';
import appleIcon from '../assets/Button/Apple.png';
import eyeIcon from '../assets/Icon/eyeIcon.png';

const {width, height} = Dimensions.get('window');

const LoginScreen = () => {
  const navigation = useNavigation(); // Moved inside the component

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Navigate to UserProfileScreen with email
  navigation.navigate('UserProfileScreen', {email});

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Login', // Hides the default title
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('OnboardScreen04')}>
          <Image
            source={chevronLeft}
            style={{width: 24, height: 24, marginLeft: 15}}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleLogin = () => {
    // Handle login logic
    console.log(email, password);
    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailPattern.test(email);

    // Password minimum length criteria, adjust as needed
    const minPasswordLength = 6;
    const isPasswordValid = password.length >= minPasswordLength;

    // Validate email and password
    if (!isEmailValid) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!isPasswordValid) {
      alert(`Password must be at least ${minPasswordLength} characters long.`);
      return;
    }

    // If both email and password are valid, proceed with login
    try {
      // Hash the password
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      // Simulate login validation...
      // If validation is successful:
      console.log(
        'Login successful with email:',
        email,
        'and password:',
        password,
      );
      navigation.navigate('Home'); // Navigate to Home screen on successful login
    } catch (error) {
      // Handle login error
      console.error('Login failed', error);
      alert('Login failed. Please try again.');
    }
  };

  const handleGoogleLogin = () => {
    // Google login implementation
  };

  const handleFacebookLogin = () => {
    // Facebook login implementation
  };

  const handleAppleLogin = () => {
    // Apple login implementation
  };

  const [passwordVisibility, setPasswordVisibility] = useState(true); // Initially password is hidden

  const [showSignupSuccessModal, setShowSignupSuccessModal] = useState(false);

  const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
      {/*<Text style={styles.title}>Login</Text>*/}

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Image source={emailIcon} style={styles.inputIconLeft} />
        <TextInput
          placeholder="Enter your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.textInput}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Image source={passwordIcon} style={styles.inputIconLeft} />
        <TextInput
          placeholder="Enter your Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={styles.textInput}
        />

        {/* Password Visibilit */}
        <TouchableOpacity
          onPress={() => setPasswordVisibility(!passwordVisibility)}
          style={styles.iconTouchable}>
          <Image
            source={passwordVisibility ? eyeSlashIcon : eyeIcon}
            style={styles.inputIconRight}
          />
        </TouchableOpacity>
      </View>

      {/* Forgot Password Link */}
      <TouchableOpacity
        onPress={() => {
          /* Navigate to Forgot Password Screen or Function */
        }}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Don't have an account? Sign Up */}
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signUpText}>
          Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.dividerLine} />
      </View>

      {/* SSO Buttons (Example) */}
      {/* You can add Google, Facebook, and Apple login buttons here */}
      <View style={styles.ssoContainer}>
        <View style={styles.ssoButtonWrapper}>
          <TouchableOpacity
            style={styles.ssoButton}
            onPress={handleGoogleLogin}>
            <Image source={googleIcon} style={styles.ssoButtonImage} />
            <Text style={styles.ssoButtonText}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ssoButtonWrapper}>
          <TouchableOpacity
            style={styles.ssoButton}
            onPress={handleFacebookLogin}>
            <Image source={facebookIcon} style={styles.ssoButtonImage} />
            <Text style={styles.ssoButtonText}>Sign in with Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ssoButtonWrapper}>
          <TouchableOpacity style={styles.ssoButton} onPress={handleAppleLogin}>
            <Image source={appleIcon} style={styles.ssoButtonImage} />
            <Text style={styles.ssoButtonText}>Sign in with Apple</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.homeIndicator} />
    </View>
  );
};

// Your StyleSheet and export default LoginScreen remains unchanged

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  // title: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   marginBottom: 20,
  // },
  inputContainer: {
    backgroundColor: 'transparent',
    width: 327,
    height: 56,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(0.9, 0.91, 0.92, 1)',
    marginBottom: 15,
    justifyContent: 'flex-start',
    paddingLeft: 5,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    marginLeft: 0,
    color: '#000',
    paddingLeft: 30,
  },
  inputIconRight: {
    flex: 0,
    margin: 10,
  },
  inputIconLeft: {
    marginLeft: 10,
    marginRight: 5,
  },
  iconTouchable: {
    padding: 10, // Makes it easier to press
  },
  inputIconRight: {
    width: 24,
    height: 24,
    marginRight: 10, // Adjust based on your layout needs
  },
  forgotPasswordText: {
    color: 'blue',
    marginBottom: 15,
    marginTop: 10,
    marginLeft: 210,
  },
  signUpText: {
    color: '#000', // Primary text color
    marginTop: 15, // Adjust as needed
  },
  signUpLink: {
    color: 'blue', // Make "Sign Up" text stand out
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007bff', // Example button color
    padding: 15,
    borderRadius: 6,
    width: 315,
    fontSize: 16,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  // ...add any additional styles you might need
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginTop: 20,
  },
  dividerLine: {
    flex: 0,
    height: 2,
    width: 137,
    backgroundColor: 'gray',
  },
  dividerText: {
    marginHorizontal: 10,
    color: 'gray',
  },
  ssoTitle: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 10,
  },
  ssoContainer: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    width: '100%',
    marginTop: 1,
  },
  ssoButton: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(0.9, 0.91, 0.92, 1)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 327,
    height: 56,
    marginLeft: 10,
    flexDirection: 'row',
  },
  ssoButtonText: {
    color: '#000',
    marginLeft: 20,
    fontsize: 16,
  },
  ssoButtonImage: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 5,
  },
  ssoButtonWrapper: {
    padding: 5,
    fontSize: 16,
    alignItems: 'center',
  },
  signupLink: {
    color: 'blue', // Customize as needed
    fontWeight: 'bold',
  },
  homeIndicator: {
    position: 'absolute', // Position it at the bottom
    bottom: 0,
    height: 2, // Height of the indicator line
    width: '40%', // Width of the line, adjust as needed
    backgroundColor: 'rgba(0.9, 0.91, 0.92, 1)', // Semi-transparent black
    borderRadius: 2.5, // Rounded corners
    alignSelf: 'center', // Center it horizontally
    marginBottom: 20, // Margin from the bottom edge
  },
});

export default LoginScreen;

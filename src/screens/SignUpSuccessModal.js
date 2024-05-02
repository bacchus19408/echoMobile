import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import successCheckIcon from '../assets/Icon/Check_24px.png';
import successEllipseIcon from '../assets/Icon/Ellipse_15.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignUpSuccessModal = ({isVisible, onClose, onNavigateToLogin}) => {
  const navigation = useNavigation(); // Directly use the navigation hook

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.imageContainer}>
            <Image source={successEllipseIcon} style={styles.outerImage} />
            <Image source={successCheckIcon} style={styles.innerImage} />
          </View>
          <Text style={styles.modalText}>Success</Text>
          <Text style={styles.modalContext}>
            Your account has been successfully registered
          </Text>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              onClose(); // Close the modal
              // onNavigateToLogin(); // Navigate to the Login screen
              navigation.navigate('Login');
            }}>
            <Text style={styles.textStyle}>Go to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // For semi-transparent background
  },
  modalView: {
    width: 327,
    height: 401,
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 8,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 15,
    marginTop: 50,
  },
  outerImage: {
    width: 100, // Adjust the size of your outer image
    height: 100, // Adjust the size of your outer image
    // No marginBottom needed here
  },
  innerImage: {
    position: 'absolute',
    width: 50, // Adjust the size of your inner image
    height: 50, // Adjust the size of your inner image
    // Place it according to the outer image's dimensions
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 6,
    marginTop: 20,
    fontSize: 16,
    width: 200,
  },
  buttonClose: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 6,
    width: 250,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  modalContext: {
    textAlign: 'center',
    color: '#A1A8B0',
    marginBottom: 15,
  },
});

export default SignUpSuccessModal;

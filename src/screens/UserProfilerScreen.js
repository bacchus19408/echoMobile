import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import cameraIcon from '../assets/Icon/Camera.png';
import chevronLeft from '../assets/Icon/left-chevron.png';
import chevronRight from '../assets/Icon/ChevronRight.png';
import wallet from '../assets/Icon/wallet.png';
import calendar from '../assets/Icon/calendar.png';
import faq from '../assets/Icon/faq.png';
import ehr from '../assets/Icon/document.png';
import prescription from '../assets/Icon/prescription.png';
import setting from '../assets/Icon/gear.png';
import logout from '../assets/Icon/logout.png';
import {getUserData} from '../services/apiService';

const UserProfileScreen = ({navigation}) => {
  const route = useRoute();
  const [imageUri, setImageUri] = useState(null);
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'UserProfile',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image source={chevronLeft} />
        </TouchableOpacity>
      ),
    });

    const fetchData = async () => {
      try {
        const userId = route.params?.userId;
        const data = await getUserData(userId);
        setUserName(data.name);
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [navigation, route.params?.userId]);

  const pickImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.assets[0].uri};
        setImageUri(source);
      }
    });
  };

  const [bloodPressure, setBloodPressure] = useState({
    systolic: null,
    diastolic: null,
  });

  const [glucoseLevels, setGlucoseLevels] = useState(null);

  const getBloodPressure = () => {
    setBloodPressure({systolic: 120, diastolic: 80}); // simulate a fetched value
  };

  const getGlucoseLevels = () => {
    setGlucoseLevels(5.9); // simulate a fetched value
  };

  useEffect(() => {
    getBloodPressure();
    getGlucoseLevels();
  }, []);

  const handleLogout = () => {
    // Code to handle logout goes here
    navigation.navigate('LoginScreen'); // Example code to navigate to the login screen after logout
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTop}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Image style={styles.chevronLeft} source={chevronLeft} />
          </TouchableOpacity>
          <Image style={styles.setting} source={setting} />
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={pickImage}>
            <Image style={styles.profilePic} source={cameraIcon} />
          </TouchableOpacity>
          {imageUri && (
            <Image source={{uri: imageUri.uri}} style={styles.image} />
          )}
          {userName && <Text style={styles.userName}>{userName}</Text>}
        </View>
        <View style={styles.healthContainer}>
          <View style={styles.heartRateContainer}>
            <View style={styles.labalSensor}>
              <Text style={styles.labelTitleText}>Heart Rate</Text>
              <Text style={styles.labelTitleNumber}>80 BPM</Text>
            </View>
          </View>

          <View style={styles.caloriesContainer}>
            <View style={styles.labalSensor}>
              <Text style={styles.labelTitleText}>Calories</Text>
              <Text style={styles.labelTitleNumber}>756 cal</Text>
            </View>
          </View>

          <View style={styles.weightContainer}>
            <View style={styles.labalSensor}>
              <Text style={styles.labelTitleText}>Weight</Text>
              <Text style={styles.labelTitleNumber}>70 kg</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.rectangle}>
        <View style={styles.navlink}>
          <Image style={styles.navProfileIcon} source={wallet} />
          <Text style={styles.label}>Wallet</Text>
          <Image style={styles.chevronRight} source={chevronRight} />
        </View>
        <View style={styles.navlink}>
          <Image style={styles.navProfileIcon} source={calendar} />
          <Text style={styles.label}>Appointments</Text>
          <Image style={styles.chevronRight} source={chevronRight} />
        </View>
        <View style={styles.navlink}>
          <Image style={styles.navProfileIcon} source={ehr} />
          <Text style={styles.label}>Health Records</Text>
          <Image style={styles.chevronRight} source={chevronRight} />
        </View>
        <View style={styles.navlink}>
          <Image style={styles.navProfileIcon} source={prescription} />
          <Text style={styles.label}>Prescription Management</Text>
          <Image style={styles.chevronRight} source={chevronRight} />
        </View>
        <View style={styles.navlink}>
          <Image style={styles.navProfileIcon} source={faq} />
          <Text style={styles.label}>FAQs</Text>
          <Image style={styles.chevronRight} source={chevronRight} />
        </View>
        <View style={styles.navlink}>
          <Image style={styles.navProfileIcon} source={logout} />
          <Text style={styles.label}>Logout</Text>
          <Image style={styles.chevronRight} source={chevronRight} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#227DDE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 0.6,
    width: '100%',
    justifyContent: 'center',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  chevronLeft: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: 'white',
  },
  setting: {
    width: 15,
    height: 15,
    marginLeft: 10,
    tintColor: 'white',
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 20,
  },
  userName: {
    fontSize: 20,
    color: 'white', // Add this line to change the color to white
  },
  imageContainer: {
    alignItems: 'center',
  },
  labelContainer: {
    flexDirection: 'column',
  },
  labelText: {
    flexDirection: 'row',
  },
  labelTitleText: {
    fontSize: 10,
    color: 'white',
  },
  labelTitleNumber: {
    fontSize: 15,
    color: 'white',
  },
  healthContainer: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caloriesContainer: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'white',
    marginTop: 10,
    marginBottom: 10,
  },
  labalSensor: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  rectangle: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    width: '100%',
  },
  navlink: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'left',
    marginBottom: 20,
    marginTop: 10,
  },
  navProfileIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    resizeMode: 'contain',
    marginLeft: 10,
  },
  chevronRight: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 15,
    fontFamily: 'Raleway',
    marginLeft: 10,
  },
});

export default UserProfileScreen;

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import notification from '../assets/Iconly/Light/Notification.jpg';
import searchIcon from '../assets/Icon/searchIcon.png';
import rectangle from '../assets/Icon/Rectangle_12.png';
import doctor from '../assets/Icon/Doctor.png';
import pharmacy from '../assets/Icon/Pharmacy.jpg';
import hospital from '../assets/Icon/Hospital.jpg';
import recommended from '../assets/Icon/good.jpg';
import homeIcon from '../assets/Iconly/Bulk/Home.jpg';
import messageIcon from '../assets/Iconly/Light/Message.jpg';
import calendarIcon from '../assets/Iconly/Light/Calendar.jpg';
import userProfileIcon from '../assets/Iconly/Light/Profile.jpg';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // Here you would add your logic to search for physicians, pharmacies, and articles
  };

  const handleRectanglePress01 = () => {
    // Handle the rectangle press event here
  };

  const handleRectanglePress02 = () => {
    // Handle the rectangle press event here
  };

  const handleRectanglePress03 = () => {
    // Handle the rectangle press event here
  };

  const handleRectanglePress04 = () => {
    // Handle the rectangle press event here
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerUpper}>
        <Text style={styles.headerLeftText}>
          Find your desire{'\n'}health solution
        </Text>
        <Image
          source={notification}
          style={styles.headerImage}
          onPress={() => navigation.navigate('NotificationScreen')}
        />
      </View>
      <View style={styles.searchContainer}>
        <Image source={searchIcon} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          onChangeText={setSearchQuery}
          value={searchQuery}
          placeholder="Search physicians, pharmacies, articles..."
          onSubmitEditing={handleSearch}
        />
      </View>
      <View style={styles.imageIconContainer}>
        <View style={styles.imageIconRow1}>
          <TouchableOpacity onPress={handleRectanglePress01}>
            <Image source={rectangle} style={styles.outerImageRectangle1} />
            <Image source={doctor} style={styles.innerIconImage02} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageIconRow2}>
          <TouchableOpacity onPress={handleRectanglePress02}>
            <Image source={rectangle} style={styles.outerImageRectangle2} />
            <Image source={pharmacy} style={styles.innerIconImage02} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageIconRow3}>
          <TouchableOpacity onPress={handleRectanglePress03}>
            <Image source={rectangle} style={styles.outerImageRectangle3} />
            <Image source={hospital} style={styles.innerIconImage03} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageIconRow4}>
          <TouchableOpacity onPress={handleRectanglePress04}>
            <Image source={rectangle} style={styles.outerImageRectangle4} />
            <Image source={recommended} style={styles.innerIconImage04} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Image source={homeIcon} style={styles.bottomBarIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBarItem}
          onPress={() => navigation.navigate('MessageScreen')}>
          <Image source={messageIcon} style={styles.bottomBarIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBarItem}
          onPress={() => navigation.navigate('ScheduleScreen')}>
          <Image source={calendarIcon} style={styles.bottomBarIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBarItem}
          onPress={() => navigation.navigate('UserProfile')}>
          <Image source={userProfileIcon} style={styles.bottomBarIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Utilizing Dimensions to set up the frame size
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 50,
  },
  headerLeftText: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0A0E16',
    padding: 10,
  },
  headerImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  headerUpper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    margin: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 12,
  },
  imageIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Change to 'space-between' to evenly distribute the icons
    alignItems: 'center',
    marginTop: 10,
  },
  outerImageRectangle1: {
    width: 40,
    height: 40,
    marginRight: 20, // Reduced marginRight to 20
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    // Add inner image styles
    flexDirection: 'row',
  },
  innerIconImage02: {
    width: 30, // Decrease the width to make the image smaller
    height: 30, // Decrease the height to make the image smaller
    resizeMode: 'contain',
  },
  outerImageRectangle2: {
    width: 40,
    height: 40,
    marginRight: 20, // Reduced marginRight to 20
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    // Add inner image styles
    flexDirection: 'row',
  },
  innerIconImage03: {
    width: 30, // Decrease the width to make the image smaller
    height: 30, // Decrease the height to make the image smaller
    resizeMode: 'contain',
  },
  outerImageRectangle3: {
    width: 40,
    height: 40,
    marginRight: 20, // Reduced marginRight to 20
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    // Add inner image styles
    flexDirection: 'row',
  },
  outerImageRectangle4: {
    width: 40,
    height: 40,
    marginRight: 20, // Reduced marginRight to 20
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    // Add inner image styles
    flexDirection: 'row',
  },
  innerIconImage01: {
    position: 'absolute',
    width: 30, // Decrease the width to make the image smaller
    height: 30, // Decrease the height to make the image smaller
    resizeMode: 'contain',
    alignItems: 'center',
  },
  innerIconImage02: {
    position: 'absolute',
    width: 30, // Decrease the width to make the image smaller
    height: 30, // Decrease the height to make the image smaller
    resizeMode: 'contain',
    alignItems: 'center',
  },
  innerIconImage03: {
    position: 'absolute',
    width: 30, // Decrease the width to make the image smaller
    height: 30, // Decrease the height to make the image smaller
    resizeMode: 'contain',
    alignItems: 'center',
  },
  innerIconImage04: {
    position: 'absolute',
    width: 30, // Decrease the width to make the image smaller
    height: 30, // Decrease the height to make the image smaller
    resizeMode: 'contain',
    alignItems: 'center',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
  bottomBarItem: {
    alignItems: 'center',
  },
  bottomBarIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  bottomBarLabel: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default HomeScreen;

import React from 'react';
import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

const DoctorDetailScreen = () => {
  const [doctorDetails, setDoctorDetails] = useState(null);

  useEffect(() => {
    fetchDoctorDetails();
  }, []);

  const fetchDoctorDetails = async () => {
    try {
      const response = await fetch('your_api_endpoint_here');
      const data = await response.json();
      setDoctorDetails(data);
    } catch (error) {
      console.error('Error fetching doctor details:', error);
    }
  };

  return (
    <View>
      <Text>About</Text>
      {doctorDetails && <Text>{doctorDetails.about}</Text>}

      <Text>Rating</Text>
      {doctorDetails && <Text>{doctorDetails.rating}</Text>}

      <Text>Availability</Text>
      {doctorDetails && <Text>{doctorDetails.availability}</Text>}
    </View>
  );
};

export default DoctorDetailScreen;

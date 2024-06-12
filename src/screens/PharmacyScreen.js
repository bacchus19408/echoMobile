import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

const PharmacyScreen = () => {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    // Fetch medication data from CVS or Walgreens API
    // Update the 'medications' state with the fetched data
    // You can use libraries like axios or fetch to make the API request
  }, []);

  return (
    <View>
      <Text>Pharmacy Screen</Text>
      <FlatList
        data={medications}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default PharmacyScreen;

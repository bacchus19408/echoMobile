import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';

const NotificationScreen = () => {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  const registerForPushNotificationsAsync = async () => {
    const {status: existingStatus} = await Permissions.getAsync(
      Permissions.NOTIFICATIONS,
    );
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      return;
    }

    const token = await Notifications.getExpoPushTokenAsync();

    // TODO: Save the token to your server for sending notifications

    // TODO: Schedule notifications for upcoming appointments, medication reminders, etc.

    // TODO: Handle notification events

    // TODO: Clean up notifications when the component unmounts
  };

  return (
    <View>
      <Text>Notification Screen</Text>
    </View>
  );
};

export default NotificationScreen;

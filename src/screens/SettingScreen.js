import React from 'react';
import {View, Text, Button} from 'react-native';

const SettingScreen = () => {
  const handleChangeAccount = () => {
    // Logic to change user information
  };

  const handleChangePassword = () => {
    // Logic to change password
  };

  const handleDeactivateAccount = () => {
    // Logic to deactivate account
  };

  const handleDeleteAccount = () => {
    // Logic to delete account
  };

  const handleModifyNotifications = () => {
    // Logic to modify notification alerts
  };

  const handleModifyPrivacySettings = () => {
    // Logic to modify privacy settings
  };

  const handleManageSecurityPermissions = () => {
    // Logic to manage security and permissions
  };

  return (
    <View>
      <Text>Setting Screen</Text>
      <Button title="Change Account" onPress={handleChangeAccount} />
      <Button title="Change Password" onPress={handleChangePassword} />
      <Button title="Deactivate Account" onPress={handleDeactivateAccount} />
      <Button title="Delete Account" onPress={handleDeleteAccount} />
      <Button
        title="Modify Notifications"
        onPress={handleModifyNotifications}
      />
      <Button
        title="Modify Privacy Settings"
        onPress={handleModifyPrivacySettings}
      />
      <Button
        title="Manage Security and Permissions"
        onPress={handleManageSecurityPermissions}
      />
    </View>
  );
};

export default SettingScreen;

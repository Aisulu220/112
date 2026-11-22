
import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import ProfileHeader from '../components/ProfileHeader';
import ProfileMenuItem from '../components/ProfileMenuItem';
import { profileStyles as styles } from '../styles/profileStyles';

export default function SettingsScreen({ navigation }: any) {
  const items = [
    {
      title: 'Notification Setting',
      icon: 'notifications-outline',
      screen: 'NotificationSettings',
    },
    {
      title: 'Password Manager',
      icon: 'key-outline',
      screen: 'PasswordManager',
    },
    {
      title: 'Delete Account',
      icon: 'person-remove-outline',
      screen: 'DeleteAccount',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader
        title="Settings"
        onBack={() => navigation.goBack()}
      />

      <ScrollView>
        <View style={{ marginTop: 20 }}>
          {items.map((item) => (
            <ProfileMenuItem
              key={item.title}
              title={item.title}
              icon={item.icon}
              onPress={() => {
                if (item.screen === 'DeleteAccount') {
                  navigation.navigate('DeleteAccount');
                } else {
                  navigation.navigate(item.screen);
                }
              }}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


import React, { useState } from 'react';

import {
  View,
  Text,
  Switch,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import ProfileHeader from '../components/ProfileHeader';

import { profileStyles as styles } from '../styles/profileStyles';

const initialSettings = [
  { id: 'general', title: 'General Notification', value: true },
  { id: 'sound', title: 'Sound', value: true },
  { id: 'call', title: 'Sound Call', value: true },
  { id: 'vibrate', title: 'Vibrate', value: false },
  { id: 'offers', title: 'Special Offers', value: false },
  { id: 'payments', title: 'Payments', value: true },
  { id: 'promo', title: 'Promo And Discount', value: true },
  { id: 'cashback', title: 'Cashback', value: false },
];

export default function NotificationSettingsScreen({ navigation }: any) {
  const [settings, setSettings] = useState(initialSettings);

  const toggleSetting = (id: string, value: boolean) => {
    setSettings((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, value } : item
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader
        title="Notification Setting"
        onBack={() => navigation.goBack()}
      />

      <ScrollView style={{ paddingHorizontal: 18, marginTop: 15 }}>
        {settings.map((item) => (
          <View
            key={item.id}
            style={{
              minHeight: 52,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottomWidth: 0.5,
              borderBottomColor: '#F0F2FA',
            }}
          >
            <Text style={{
              fontSize: 13,
              color: '#333D59',
            }}>
              {item.title}
            </Text>

            <Switch
              value={item.value}
              onValueChange={(value) =>
                toggleSetting(item.id, value)
              }
              trackColor={{
                false: '#E1E6F5',
                true: '#B8C9FF',
              }}
              thumbColor={item.value ? '#365FF5' : '#FFFFFF'}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

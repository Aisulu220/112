import React from 'react';

import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

type Props = {
  onHome: () => void;
  onChat: () => void;
  onProfile: () => void;
  onAppointment: () => void;
  activeTab?: string;
};

export default function BottomNavigation({
  onHome,
  onChat,
  onProfile,
  onAppointment,
  activeTab = 'Calendar',
}: Props) {
  const tabs = [
    {
      name: 'Home',
      icon: 'home-outline' as const,
      action: onHome,
    },
    {
      name: 'Chat',
      icon: 'chatbubbles-outline' as const,
      action: onChat,
    },
    {
      name: 'Profile',
      icon: 'person-outline' as const,
      action: onProfile,
    },
    {
      name: 'Calendar',
      icon: 'calendar-outline' as const,
      action: onAppointment,
    },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.item}
          onPress={tab.action}
          activeOpacity={0.7}
        >
          <Ionicons
            name={tab.icon}
            size={24}
            color={
              activeTab === tab.name
                ? '#FFFFFF'
                : '#B9CCFF'
            }
          />

          {activeTab === tab.name && (
            <View style={styles.dot} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 57,
    marginHorizontal: 18,
    marginBottom: 5,
    borderRadius: 30,
    backgroundColor: '#365FF5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  item: {
    width: 55,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    marginTop: 2,
  },
});
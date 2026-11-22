import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  activeTab: string;
  onChange: (tab: string) => void;
};

const tabs = [
  { name: 'Home', icon: 'home-outline' },
  { name: 'Chat', icon: 'chatbubbles-outline' },
  { name: 'Profile', icon: 'person-outline' },
  { name: 'Calendar', icon: 'calendar-outline' },
];

export default function BottomNavigation({ activeTab, onChange }: Props) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.item}
          onPress={() => onChange(tab.name)}
        >
          <Ionicons
            name={tab.icon as any}
            size={24}
            color={activeTab === tab.name ? '#173DAF' : '#B9CCFF'}
          />
          {activeTab === tab.name && <View style={styles.dot} />}
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
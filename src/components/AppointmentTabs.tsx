
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AppointmentStatus } from '../types/appointment';
import { appointmentStyles as styles } from '../styles/appointmentStyles';

type Props = {
  activeTab: AppointmentStatus;
  onChange: (tab: AppointmentStatus) => void;
};

export default function AppointmentTabs({
  activeTab,
  onChange,
}: Props) {
  const tabs: AppointmentStatus[] = [
    'Complete',
    'Upcoming',
    'Cancelled',
  ];

  return (
    <View style={styles.tabs}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab}
          onPress={() => onChange(tab)}
          style={[
            styles.tab,
            activeTab === tab && styles.activeTab,
          ]}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === tab && styles.activeTabText,
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

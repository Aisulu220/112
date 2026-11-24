import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AppointmentCard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.doctor}>Dr. Olivia Turner, M.D.</Text>
        <View style={styles.icons}>
          <Ionicons name="checkmark-circle" size={16} color="#365FF5" />
          <Ionicons name="time-outline" size={16} color="#365FF5" />
        </View>
      </View>

      <Text style={styles.description}>
        Treatment and prevention of
      </Text>
      <Text style={styles.description}>
        skin and photodermatitis.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C3D0FF',
    borderRadius: 14,
    padding: 10,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  doctor: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3456B9',
  },
  icons: {
    flexDirection: 'row',
    gap: 5,
  },
  description: {
    fontSize: 10,
    color: '#52618C',
    marginTop: 2,
  },
});


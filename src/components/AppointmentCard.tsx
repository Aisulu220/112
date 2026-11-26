import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Appointment } from '../types/appointment';

type Props = {
  item: Appointment;
  onRebook: (appointment: Appointment) => void;
  onDetails: (appointment: Appointment) => void;
  onCancel: (appointment: Appointment) => void;
  onReview: (appointment: Appointment) => void;
};

export default function AppointmentCard({
  item,
  onRebook,
  onDetails,
  onCancel,
  onReview,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.doctor}>
          Dr. Olivia Turner, M.D.
        </Text>

        <View style={styles.icons}>
          <Ionicons
            name="checkmark-circle"
            size={16}
            color="#365FF5"
          />

          <Ionicons
            name="time-outline"
            size={16}
            color="#365FF5"
          />
        </View>
      </View>

      <Text style={styles.description}>
        Treatment and prevention of
      </Text>

      <Text style={styles.description}>
        skin and photodermatitis.
      </Text>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onDetails(item)}
        >
          <Text style={styles.buttonText}>Details</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => onCancel(item)}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => onReview(item)}
        >
          <Text style={styles.buttonText}>Review</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rebookButton}
          onPress={() => onRebook(item)}
        >
          <Text style={styles.rebookText}>Re-book</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C3D0FF',
    borderRadius: 14,
    padding: 12,
    marginBottom: 12,
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
    alignItems: 'center',
  },

  description: {
    fontSize: 10,
    color: '#52618C',
    marginTop: 3,
  },

  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
  },

  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginRight: 6,
    marginBottom: 5,
  },

  buttonText: {
    fontSize: 10,
    color: '#3456B9',
    fontWeight: '600',
  },

  rebookButton: {
    backgroundColor: '#365FF5',
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 5,
  },

  rebookText: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
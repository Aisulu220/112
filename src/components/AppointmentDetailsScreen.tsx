
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Appointment } from '../types/appointment';
import DetailRow from '../components/DetailRow';
import { appointmentStyles as styles } from '../styles/appointmentStyles';

type Props = {
  appointment: Appointment;
  onBack: () => void;
  onCancel: () => void;
};

export default function AppointmentDetailsScreen({
  appointment,
  onBack,
  onCancel,
}: Props) {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Ionicons name="chevron-back" size={25} color="#3561F5" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Appointment Details
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.detailContent}>
        <View style={styles.detailDoctor}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {appointment.initials}
            </Text>
          </View>

          <Text style={styles.detailDoctorName}>
            {appointment.doctor}
          </Text>

          <Text style={styles.specialty}>
            {appointment.specialty}
          </Text>

          <View style={styles.ratingRow}>
            <Ionicons name="star" size={15} color="#3561F5" />
            <Text style={styles.ratingText}>4.9 (125 Reviews)</Text>
          </View>
        </View>

        <View style={styles.separator} />

        <Text style={styles.sectionTitle}>
          Appointment Information
        </Text>

        <DetailRow
          label="Appointment Date"
          value={appointment.date}
        />

        <DetailRow
          label="Appointment Time"
          value={appointment.time}
        />

        <DetailRow
          label="Doctor Name"
          value={appointment.doctor}
        />

        <DetailRow
          label="Specialty"
          value={appointment.specialty}
        />

        <View style={styles.separator} />

        <Text style={styles.sectionTitle}>Problem</Text>

        <Text style={styles.problemText}>
          Please discuss your skin concerns, symptoms and
          treatment preferences with your dermatologist
          during the appointment.
        </Text>

        {appointment.status === 'Upcoming' && (
          <TouchableOpacity
            style={styles.fullButton}
            onPress={onCancel}
          >
            <Text style={styles.primaryButtonText}>
              Cancel Appointment
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}

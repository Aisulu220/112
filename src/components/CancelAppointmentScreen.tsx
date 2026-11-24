
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { appointmentStyles as styles } from '../styles/appointmentStyles';

type Props = {
  reason: string;
  comment: string;
  onReasonChange: (value: string) => void;
  onCommentChange: (value: string) => void;
  onConfirm: () => void;
  onBack: () => void;
};

const reasons = [
  'Rescheduling',
  'Weather Conditions',
  'Unexpected Work',
  'Others',
];

export default function CancelAppointmentScreen({
  reason,
  comment,
  onReasonChange,
  onCommentChange,
  onConfirm,
  onBack,
}: Props) {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Ionicons name="chevron-back" size={25} color="#3561F5" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Cancel Appointment
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.formContent}>
        <Text style={styles.instructionText}>
          Please select the reason why you want to cancel
          your appointment.
        </Text>

        <Text style={styles.sectionTitle}>
          Select Reason
        </Text>

        {reasons.map(item => (
          <TouchableOpacity
            key={item}
            style={styles.reasonRow}
            onPress={() => onReasonChange(item)}
          >
            <Ionicons
              name={
                reason === item
                  ? 'radio-button-on'
                  : 'radio-button-off'
              }
              size={20}
              color="#3561F5"
            />

            <Text style={styles.reasonText}>{item}</Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>
          Additional Information
        </Text>

        <TextInput
          style={styles.textArea}
          placeholder="Enter your reason here..."
          placeholderTextColor="#A7B3D5"
          multiline
          textAlignVertical="top"
          value={comment}
          onChangeText={onCommentChange}
        />

        <TouchableOpacity
          style={styles.fullButton}
          onPress={onConfirm}
        >
          <Text style={styles.primaryButtonText}>
            Cancel Appointment
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={onBack}
        >
          <Text style={styles.secondaryButtonText}>
            Go Back
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

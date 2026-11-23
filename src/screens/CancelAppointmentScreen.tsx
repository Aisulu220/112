import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const REASONS = [
  'Rescheduling',
  'Weather Conditions',
  'Unexpected Work',
  'Others',
];

export default function CancelAppointmentScreen({ navigation }: any) {
  const [selectedReason, setSelectedReason] = useState<string>('Rescheduling');
  const [comment, setComment] = useState<string>('');

  const handleConfirmCancel = () => {
    navigation?.goBack?.();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation?.goBack?.()}>
            <Text style={styles.backBtn}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Cancel Appointment</Text>
          <View style={{ width: 20 }} />
        </View>

        <Text style={styles.hint}>
          Please select a reason for cancelling your scheduled appointment:
        </Text>

        <View style={styles.reasonsList}>
          {REASONS.map((reason) => {
            const active = selectedReason === reason;
            return (
              <TouchableOpacity
                key={reason}
                style={styles.reasonRow}
                onPress={() => setSelectedReason(reason)}
              >
                <View style={[styles.radioOuter, active && styles.radioOuterActive]}>
                  {active && <View style={styles.radioInner} />}
                </View>
                <Text style={styles.reasonLabel}>{reason}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={styles.fieldLabel}>Enter Your Reason</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Write your comment here..."
          placeholderTextColor="#8A94A6"
          multiline
          value={comment}
          onChangeText={setComment}
        />

        <TouchableOpacity style={styles.submitBtn} onPress={handleConfirmCancel}>
          <Text style={styles.submitBtnText}>Cancel Appointment</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { padding: 16, paddingBottom: 28 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  backBtn: { fontSize: 20, color: '#2260FF', fontWeight: '700' },
  title: { fontSize: 18, fontWeight: '700', color: '#2260FF' },
  hint: { fontSize: 12.5, color: '#4B5563', lineHeight: 18, marginBottom: 14 },
  reasonsList: { gap: 12, marginBottom: 16 },
  reasonRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#2260FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterActive: { borderColor: '#2260FF' },
  radioInner: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    backgroundColor: '#2260FF',
  },
  reasonLabel: { fontSize: 13, color: '#1F2937', fontWeight: '500' },
  fieldLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2260FF',
    marginBottom: 8,
  },
  inputBox: {
    backgroundColor: '#EEF2FF',
    borderRadius: 16,
    padding: 12,
    minHeight: 110,
    fontSize: 12.5,
    color: '#1F2937',
    textAlignVertical: 'top',
  },
  submitBtn: {
    marginTop: 22,
    backgroundColor: '#2260FF',
    paddingVertical: 13,
    borderRadius: 24,
    alignItems: 'center',
  },
  submitBtnText: { color: '#FFFFFF', fontSize: 14, fontWeight: '700' },
});
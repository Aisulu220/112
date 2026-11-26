import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TreatmentDetailsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>HEALTH CARE</Text>
        <Text style={styles.title}>Treatment Details</Text>
        <Text style={styles.description}>
          Information about your treatment plan
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.mainCard}>
          <View style={styles.iconBox}>
            <Ionicons name="medkit-outline" size={35} color="#269B78" />
          </View>
          <Text style={styles.cardTitle}>Medication Treatment</Text>
          <Text style={styles.status}>Active Treatment</Text>
          <Text style={styles.cardDescription}>
            Follow your healthcare professional's instructions for your treatment.
          </Text>
        </View>

        <Text style={styles.heading}>Treatment Information</Text>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Treatment Type</Text>
          <Text style={styles.value}>Medication</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Start Date</Text>
          <Text style={styles.value}>November 20, 2026</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Doctor</Text>
          <Text style={styles.value}>Dr. Sarah Wilson</Text>
        </View>

        <Text style={styles.heading}>Important Reminders</Text>

        <View style={styles.reminder}>
          <Ionicons name="time-outline" size={23} color="#269B78" />
          <Text style={styles.reminderText}>
            Follow the schedule prescribed by your doctor.
          </Text>
        </View>

        <View style={styles.reminder}>
          <Ionicons name="document-text-outline" size={23} color="#269B78" />
          <Text style={styles.reminderText}>
            Keep track of your treatment progress.
          </Text>
        </View>

        <View style={styles.reminder}>
          <Ionicons name="alert-circle-outline" size={23} color="#269B78" />
          <Text style={styles.reminderText}>
            Contact your doctor if you experience unexpected side effects.
          </Text>
        </View>

        <View style={styles.note}>
          <Text style={styles.noteText}>
            This is sample information, not a real medical prescription.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F9F7',
  },
  header: {
    backgroundColor: '#269B78',
    padding: 25,
    paddingTop: 55,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  subtitle: {
    color: '#D5F5E8',
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 12,
  },
  description: {
    color: '#E5F8EF',
    marginTop: 8,
    fontSize: 14,
  },
  content: {
    padding: 20,
  },
  mainCard: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 25,
    elevation: 2,
  },
  iconBox: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#E5F5EF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#263B35',
    marginTop: 14,
    textAlign: 'center',
  },
  status: {
    color: '#269B78',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 7,
  },
  cardDescription: {
    fontSize: 13,
    color: '#777777',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#263B35',
    marginBottom: 15,
    marginTop: 5,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    elevation: 1,
  },
  label: {
    fontSize: 12,
    color: '#888888',
  },
  value: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#263B35',
    marginTop: 6,
  },
  reminder: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    gap: 12,
    elevation: 1,
  },
  reminderText: {
    flex: 1,
    fontSize: 13,
    color: '#47665B',
    lineHeight: 19,
  },
  note: {
    backgroundColor: '#E5F5EF',
    padding: 15,
    borderRadius: 14,
    marginTop: 10,
  },
  noteText: {
    color: '#47665B',
    fontSize: 12,
    textAlign: 'center',
  },
});
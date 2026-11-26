import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TreatmentScreen() {
  const treatments = [
    { title: 'Medication', description: 'Prescribed medicines', icon: 'medkit-outline' as const, status: 'Active' },
    { title: 'Physical Therapy', description: 'Exercises and rehabilitation', icon: 'fitness-outline' as const, status: 'Active' },
    { title: 'Regular Checkup', description: 'Routine medical examination', icon: 'clipboard-outline' as const, status: 'Upcoming' },
    { title: 'Rest and Recovery', description: 'Sleep and daily recovery', icon: 'bed-outline' as const, status: 'Active' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>HEALTH CARE</Text>
        <Text style={styles.title}>My Treatments</Text>
        <Text style={styles.description}>
          Manage your treatment plans
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.heading}>Treatment Plans</Text>

        {treatments.map((item, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.iconBox}>
              <Ionicons name={item.icon} size={28} color="#269B78" />
            </View>

            <View style={styles.info}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>
                {item.description}
              </Text>
              <Text style={[
                styles.status,
                item.status === 'Upcoming' && styles.upcoming
              ]}>
                {item.status}
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#999" />
          </View>
        ))}

        <View style={styles.note}>
          <Ionicons name="information-circle-outline" size={22} color="#269B78" />
          <Text style={styles.noteText}>
            These are sample treatment plans. Always follow your doctor's instructions.
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
  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#263B35',
    marginBottom: 18,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    elevation: 2,
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 15,
    backgroundColor: '#E5F5EF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    marginLeft: 14,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#263B35',
  },
  cardDescription: {
    fontSize: 12,
    color: '#777777',
    marginTop: 5,
  },
  status: {
    fontSize: 11,
    color: '#269B78',
    fontWeight: 'bold',
    marginTop: 7,
  },
  upcoming: {
    color: '#D18A32',
  },
  note: {
    flexDirection: 'row',
    backgroundColor: '#E5F5EF',
    padding: 15,
    borderRadius: 14,
    marginTop: 10,
    alignItems: 'center',
    gap: 10,
  },
  noteText: {
    flex: 1,
    color: '#47665B',
    fontSize: 12,
  },
});
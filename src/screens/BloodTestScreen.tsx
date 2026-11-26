import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BloodTestScreen() {
  const tests = [
    { name: 'Complete Blood Count', date: 'November 20, 2026', status: 'Completed', icon: 'water-outline' as const },
    { name: 'Blood Glucose Test', date: 'November 18, 2026', status: 'Completed', icon: 'fitness-outline' as const },
    { name: 'Cholesterol Test', date: 'December 05, 2026', status: 'Upcoming', icon: 'pulse-outline' as const },
    { name: 'Hemoglobin Test', date: 'November 10, 2026', status: 'Completed', icon: 'flask-outline' as const },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>HEALTH CARE</Text>
        <Text style={styles.title}>Blood Tests</Text>
        <Text style={styles.description}>
          Manage your laboratory test records
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.summaryCard}>
          <Ionicons name="flask-outline" size={32} color="#269B78" />
          <View style={styles.summaryInfo}>
            <Text style={styles.summaryTitle}>Laboratory Tests</Text>
            <Text style={styles.summaryText}>4 sample test records</Text>
          </View>
        </View>

        <Text style={styles.heading}>My Blood Tests</Text>

        {tests.map((item, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.iconBox}>
              <Ionicons name={item.icon} size={27} color="#269B78" />
            </View>

            <View style={styles.info}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.date}>{item.date}</Text>
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
            These are sample laboratory records. Consult your doctor about your test results.
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
  summaryCard: {
    backgroundColor: '#E5F5EF',
    padding: 18,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    gap: 14,
  },
  summaryInfo: {
    flex: 1,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#263B35',
  },
  summaryText: {
    fontSize: 12,
    color: '#47665B',
    marginTop: 5,
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
    fontSize: 14,
    fontWeight: 'bold',
    color: '#263B35',
  },
  date: {
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
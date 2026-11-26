import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TestResultsScreen() {
  const results = [
    { name: 'Hemoglobin', value: '14.2 g/dL', range: '12.0 - 16.0 g/dL', status: 'Normal' },
    { name: 'White Blood Cells', value: '7.5 K/uL', range: '4.0 - 11.0 K/uL', status: 'Normal' },
    { name: 'Red Blood Cells', value: '4.8 M/uL', range: '4.2 - 5.4 M/uL', status: 'Normal' },
    { name: 'Platelets', value: '250 K/uL', range: '150 - 400 K/uL', status: 'Normal' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>HEALTH CARE</Text>
        <Text style={styles.title}>Test Results</Text>
        <Text style={styles.description}>
          View your laboratory test results
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.summaryCard}>
          <Ionicons name="document-text-outline" size={32} color="#269B78" />
          <View style={styles.summaryInfo}>
            <Text style={styles.summaryTitle}>Blood Test Report</Text>
            <Text style={styles.summaryText}>November 20, 2026</Text>
          </View>
          <Ionicons name="checkmark-circle" size={25} color="#269B78" />
        </View>

        <Text style={styles.heading}>Test Parameters</Text>

        {results.map((item, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.cardTop}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <View style={styles.statusBox}>
                <Ionicons name="checkmark-circle" size={15} color="#269B78" />
                <Text style={styles.status}>{item.status}</Text>
              </View>
            </View>

            <Text style={styles.value}>{item.value}</Text>
            <Text style={styles.range}>
              Reference range: {item.range}
            </Text>
          </View>
        ))}

        <View style={styles.note}>
          <Ionicons name="information-circle-outline" size={22} color="#269B78" />
          <Text style={styles.noteText}>
            All results shown are fictional sample data. Actual reference ranges may vary by laboratory and patient.
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
    gap: 12,
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
    padding: 17,
    borderRadius: 16,
    marginBottom: 14,
    elevation: 2,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#263B35',
  },
  statusBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  status: {
    fontSize: 11,
    color: '#269B78',
    fontWeight: 'bold',
  },
  value: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#269B78',
    marginTop: 12,
  },
  range: {
    fontSize: 12,
    color: '#888888',
    marginTop: 6,
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
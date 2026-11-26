import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HealthOverviewScreen() {
  const healthData = [
    { title: 'Heart Rate', value: '72 BPM', icon: 'heart-outline' as const },
    { title: 'Blood Pressure', value: '120/80', icon: 'pulse-outline' as const },
    { title: 'Sleep', value: '8 hours', icon: 'moon-outline' as const },
    { title: 'Water Intake', value: '1.5 Liters', icon: 'water-outline' as const },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>HEALTH CARE</Text>
        <Text style={styles.title}>Health Overview</Text>
        <Text style={styles.description}>
          Your daily health information
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.heading}>Your Health Statistics</Text>

        {healthData.map((item, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.iconBox}>
              <Ionicons name={item.icon} size={28} color="#269B78" />
            </View>

            <View style={styles.info}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#999" />
          </View>
        ))}

        <View style={styles.note}>
          <Ionicons name="information-circle-outline" size={22} color="#269B78" />
          <Text style={styles.noteText}>
            These are sample health statistics. Update them with your own data.
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
    fontSize: 14,
    color: '#777777',
  },
  value: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#263B35',
    marginTop: 5,
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
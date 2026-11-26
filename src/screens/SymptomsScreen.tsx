import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SymptomsScreen() {
  const symptoms = [
    { title: 'Headache', description: 'Pain in the head area', icon: 'medical-outline' as const },
    { title: 'Fever', description: 'High body temperature', icon: 'thermometer-outline' as const },
    { title: 'Cough', description: 'Frequent coughing', icon: 'fitness-outline' as const },
    { title: 'Fatigue', description: 'Feeling tired or weak', icon: 'bed-outline' as const },
    { title: 'Nausea', description: 'Feeling sick', icon: 'sad-outline' as const },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>HEALTH CARE</Text>
        <Text style={styles.title}>My Symptoms</Text>
        <Text style={styles.description}>
          Track and monitor your symptoms
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.heading}>Common Symptoms</Text>

        {symptoms.map((item, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.iconBox}>
              <Ionicons name={item.icon} size={27} color="#269B78" />
            </View>

            <View style={styles.info}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>
                {item.description}
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#999" />
          </View>
        ))}

        <View style={styles.note}>
          <Ionicons
            name="information-circle-outline"
            size={22}
            color="#269B78"
          />
          <Text style={styles.noteText}>
            Select a symptom to learn more about it.
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
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DiagnosisDetailsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>HEALTH CARE</Text>
        <Text style={styles.title}>Diagnosis Details</Text>
        <Text style={styles.description}>
          Detailed health diagnosis information
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.mainCard}>
          <View style={styles.iconBox}>
            <Ionicons name="medical-outline" size={35} color="#269B78" />
          </View>
          <Text style={styles.diagnosisTitle}>Common Cold</Text>
          <Text style={styles.status}>Sample Record</Text>
          <Text style={styles.cardDescription}>
            A common cold is a mild viral infection affecting the nose and throat.
          </Text>
        </View>

        <Text style={styles.heading}>Diagnosis Information</Text>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Diagnosis Date</Text>
          <Text style={styles.value}>November 20, 2026</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Doctor</Text>
          <Text style={styles.value}>Dr. Sarah Wilson</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Symptoms</Text>
          <Text style={styles.value}>Cough, sore throat, runny nose</Text>
        </View>

        <Text style={styles.heading}>Recommendations</Text>

        <View style={styles.recommendation}>
          <Ionicons name="water-outline" size={23} color="#269B78" />
          <Text style={styles.recommendationText}>
            Drink enough fluids.
          </Text>
        </View>

        <View style={styles.recommendation}>
          <Ionicons name="bed-outline" size={23} color="#269B78" />
          <Text style={styles.recommendationText}>
            Get enough rest and sleep.
          </Text>
        </View>

        <View style={styles.recommendation}>
          <Ionicons name="alert-circle-outline" size={23} color="#269B78" />
          <Text style={styles.recommendationText}>
            Follow your doctor's advice.
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
  diagnosisTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#263B35',
    marginTop: 14,
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
  recommendation: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    gap: 12,
    elevation: 1,
  },
  recommendationText: {
    flex: 1,
    fontSize: 13,
    color: '#47665B',
  },
});
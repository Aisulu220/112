import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WeightTrackerScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Weight Tracker</Text>
        <Text style={styles.subtitle}>Салмақ бақылауы</Text>
        <Text style={styles.description}>
          Дене салмағының өзгерісін бақылаңыз
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.mainCard}>
          <Ionicons name="scale-outline" size={42} color="#269B78" />
          <Text style={styles.weight}>60.5 кг</Text>
          <Text style={styles.label}>Қазіргі салмақ</Text>
          <View style={styles.status}>
            <Text style={styles.statusText}>Соңғы өлшеу: бүгін</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Салмақ тарихы</Text>

        <View style={styles.card}>
          <Ionicons name="calendar-outline" size={24} color="#269B78" />
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Бүгін</Text>
            <Text style={styles.cardText}>26 қараша</Text>
          </View>
          <Text style={styles.value}>60.5 кг</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="calendar-outline" size={24} color="#269B78" />
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Өткен апта</Text>
            <Text style={styles.cardText}>19 қараша</Text>
          </View>
          <Text style={styles.value}>61.0 кг</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="calendar-outline" size={24} color="#269B78" />
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Екі апта бұрын</Text>
            <Text style={styles.cardText}>12 қараша</Text>
          </View>
          <Text style={styles.value}>61.3 кг</Text>
        </View>

        <View style={styles.tipCard}>
          <Ionicons name="information-circle-outline" size={24} color="#269B78" />
          <Text style={styles.tip}>
            Бұл экрандағы салмақ мәндері мысал ретінде берілген.
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
  title: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#D5F5E8',
    fontSize: 17,
    marginTop: 8,
  },
  description: {
    color: '#E5F8EF',
    fontSize: 14,
    marginTop: 8,
  },
  content: {
    padding: 20,
  },
  mainCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 30,
    alignItems: 'center',
    marginBottom: 25,
  },
  weight: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#263B35',
    marginTop: 12,
  },
  label: {
    color: '#789087',
    fontSize: 14,
    marginTop: 5,
  },
  status: {
    backgroundColor: '#E5F5EF',
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 20,
    marginTop: 18,
  },
  statusText: {
    color: '#269B78',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#263B35',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#263B35',
  },
  cardText: {
    fontSize: 13,
    color: '#789087',
    marginTop: 4,
  },
  value: {
    color: '#269B78',
    fontWeight: 'bold',
  },
  tipCard: {
    backgroundColor: '#E5F5EF',
    borderRadius: 15,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  tip: {
    flex: 1,
    color: '#47665B',
    fontSize: 13,
    marginLeft: 12,
    lineHeight: 19,
  },
});
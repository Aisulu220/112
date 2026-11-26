import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HeartRateScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Heart Rate</Text>
        <Text style={styles.subtitle}>Жүрек соғысы</Text>
        <Text style={styles.description}>
          Жүрек соғу жиілігін бақылау
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.mainCard}>
          <Ionicons name="heart" size={45} color="#E85D75" />
          <Text style={styles.heartRate}>76</Text>
          <Text style={styles.unit}>соғу / минут</Text>
          <View style={styles.status}>
            <Text style={styles.statusText}>Қалыпты көрсеткіш</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Жүрек соғысы туралы</Text>

        <View style={styles.card}>
          <Ionicons name="sunny-outline" size={25} color="#269B78" />
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Таңертең</Text>
            <Text style={styles.cardText}>08:00</Text>
          </View>
          <Text style={styles.value}>72 bpm</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="time-outline" size={25} color="#269B78" />
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Түсте</Text>
            <Text style={styles.cardText}>13:00</Text>
          </View>
          <Text style={styles.value}>76 bpm</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="moon-outline" size={25} color="#269B78" />
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Кешке</Text>
            <Text style={styles.cardText}>20:00</Text>
          </View>
          <Text style={styles.value}>74 bpm</Text>
        </View>

        <View style={styles.tipCard}>
          <Ionicons name="information-circle-outline" size={25} color="#269B78" />
          <Text style={styles.tip}>
            Бұл мысал ретінде берілген деректер. Нақты көрсеткіштерді медициналық құрылғы арқылы тексеріңіз.
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
  heartRate: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#263B35',
    marginTop: 10,
  },
  unit: {
    fontSize: 15,
    color: '#789087',
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
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WaterTrackerScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Water Tracker</Text>
        <Text style={styles.subtitle}>Су ішу бақылауы</Text>
        <Text style={styles.description}>
          Күнделікті су мөлшерін бақылаңыз
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.mainCard}>
          <Ionicons name="water" size={42} color="#269B78" />
          <Text style={styles.amount}>1.2 л</Text>
          <Text style={styles.goal}>Мақсат: 2.0 литр</Text>

          <View style={styles.progressBackground}>
            <View style={styles.progress} />
          </View>

          <Text style={styles.percent}>60% орындалды</Text>
        </View>

        <Text style={styles.sectionTitle}>Бүгінгі су ішу</Text>

        <View style={styles.card}>
          <Ionicons name="water-outline" size={24} color="#269B78" />
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Таңертең</Text>
            <Text style={styles.cardText}>08:00 · 300 мл</Text>
          </View>
          <Text style={styles.amountSmall}>300 мл</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="water-outline" size={24} color="#269B78" />
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Түскі уақыт</Text>
            <Text style={styles.cardText}>12:00 · 500 мл</Text>
          </View>
          <Text style={styles.amountSmall}>500 мл</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="water-outline" size={24} color="#269B78" />
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Түстен кейін</Text>
            <Text style={styles.cardText}>15:00 · 400 мл</Text>
          </View>
          <Text style={styles.amountSmall}>400 мл</Text>
        </View>

        <View style={styles.tipCard}>
          <Ionicons name="bulb-outline" size={24} color="#269B78" />
          <Text style={styles.tip}>
            Кеңес: Күні бойы суды аз-аздан ішіп отырыңыз.
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
    padding: 25,
    alignItems: 'center',
    marginBottom: 25,
  },
  amount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#263B35',
    marginTop: 12,
  },
  goal: {
    color: '#789087',
    fontSize: 14,
    marginTop: 5,
  },
  progressBackground: {
    width: '100%',
    height: 10,
    backgroundColor: '#E5F5EF',
    borderRadius: 10,
    marginTop: 22,
  },
  progress: {
    width: '60%',
    height: 10,
    backgroundColor: '#269B78',
    borderRadius: 10,
  },
  percent: {
    color: '#269B78',
    fontWeight: 'bold',
    marginTop: 10,
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
  amountSmall: {
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
    fontSize: 14,
    marginLeft: 12,
    lineHeight: 20,
  },
});
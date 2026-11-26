import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HealthGoalsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Health Goals</Text>
        <Text style={styles.subtitle}>Денсаулық мақсаттары</Text>
        <Text style={styles.description}>
          Салауатты өмір салтына арналған мақсаттар
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.mainCard}>
          <Ionicons name="trophy-outline" size={42} color="#269B78" />
          <Text style={styles.mainTitle}>Менің мақсаттарым</Text>
          <Text style={styles.mainText}>
            Күнделікті әдеттеріңізді бақылап, мақсаттарыңызға жетіңіз.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Күнделікті мақсаттар</Text>

        <View style={styles.card}>
          <Ionicons name="water-outline" size={28} color="#269B78" />
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Су ішу</Text>
            <Text style={styles.cardText}>1.2 / 2.0 литр</Text>
            <View style={styles.progressBackground}>
              <View style={[styles.progress, { width: '60%' }]} />
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Ionicons name="walk-outline" size={28} color="#269B78" />
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Қадам саны</Text>
            <Text style={styles.cardText}>6 000 / 10 000 қадам</Text>
            <View style={styles.progressBackground}>
              <View style={[styles.progress, { width: '60%' }]} />
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Ionicons name="moon-outline" size={28} color="#269B78" />
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Ұйқы</Text>
            <Text style={styles.cardText}>6 / 8 сағат</Text>
            <View style={styles.progressBackground}>
              <View style={[styles.progress, { width: '75%' }]} />
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Ionicons name="fitness-outline" size={28} color="#269B78" />
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Дене белсенділігі</Text>
            <Text style={styles.cardText}>20 / 30 минут</Text>
            <View style={styles.progressBackground}>
              <View style={[styles.progress, { width: '67%' }]} />
            </View>
          </View>
        </View>

        <View style={styles.tipCard}>
          <Ionicons name="star-outline" size={24} color="#269B78" />
          <Text style={styles.tip}>
            Кішкентай қадамдар үлкен нәтижеге жеткізеді!
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
  mainTitle: {
    color: '#263B35',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 12,
  },
  mainText: {
    color: '#789087',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 21,
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
    marginLeft: 14,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#263B35',
  },
  cardText: {
    fontSize: 13,
    color: '#789087',
    marginTop: 5,
  },
  progressBackground: {
    height: 7,
    backgroundColor: '#E5F5EF',
    borderRadius: 10,
    marginTop: 10,
  },
  progress: {
    height: 7,
    backgroundColor: '#269B78',
    borderRadius: 10,
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
  },
});
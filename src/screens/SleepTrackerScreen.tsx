import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SleepTrackerScreen() {
  const week = [
    { day: 'Дс', hours: 7 },
    { day: 'Сс', hours: 8 },
    { day: 'Ср', hours: 6 },
    { day: 'Бс', hours: 7 },
    { day: 'Жм', hours: 9 },
    { day: 'Сб', hours: 8 },
    { day: 'Жс', hours: 7 },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ұйқы бақылауы</Text>
        <Text style={styles.subtitle}>
          Ұйқы режиміңізді қадағалаңыз
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.mainCard}>
          <View style={styles.moonIcon}>
            <Ionicons name="moon" size={35} color="#FFFFFF" />
          </View>
          <Text style={styles.mainLabel}>Бүгінгі ұйқы ұзақтығы</Text>
          <Text style={styles.hours}>7 сағат 30 минут</Text>
          <Text style={styles.mainDescription}>Жақсы көрсеткіш!</Text>
        </View>

        <Text style={styles.sectionTitle}>Апталық статистика</Text>

        <View style={styles.chartCard}>
          <View style={styles.chart}>
            {week.map((item, index) => (
              <View style={styles.barColumn} key={index}>
                <Text style={styles.barValue}>{item.hours}с</Text>
                <View style={styles.barBackground}>
                  <View
                    style={[
                      styles.bar,
                      { height: `${(item.hours / 10) * 100}%` },
                    ]}
                  />
                </View>
                <Text style={styles.dayLabel}>{item.day}</Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={styles.sectionTitle}>Ұйқы туралы ақпарат</Text>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <Ionicons name="bed-outline" size={23} color="#269B78" />
            </View>
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>Ұйықтау уақыты</Text>
              <Text style={styles.infoValue}>22:30</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <Ionicons name="sunny-outline" size={23} color="#E9A832" />
            </View>
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>Ояну уақыты</Text>
              <Text style={styles.infoValue}>06:00</Text>
            </View>
          </View>
        </View>

        <View style={styles.tipCard}>
          <Ionicons name="bulb-outline" size={23} color="#269B78" />
          <Text style={styles.tipText}>
            Күніне 7–9 сағат ұйықтауға тырысыңыз. Тұрақты ұйқы режимі денсаулыққа пайдалы.
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
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#D5F5E8',
    fontSize: 14,
    marginTop: 8,
  },
  content: {
    padding: 20,
  },
  mainCard: {
    backgroundColor: '#269B78',
    padding: 25,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 25,
  },
  moonIcon: {
    width: 65,
    height: 65,
    borderRadius: 22,
    backgroundColor: '#52B797',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  mainLabel: {
    color: '#D5F5E8',
    fontSize: 14,
  },
  hours: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 8,
  },
  mainDescription: {
    color: '#E5F8EF',
    fontSize: 13,
    marginTop: 8,
  },
  sectionTitle: {
    color: '#263B35',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  chartCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 16,
    marginBottom: 25,
  },
  chart: {
    height: 180,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  barColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
  },
  barValue: {
    color: '#47665B',
    fontSize: 11,
    marginBottom: 7,
  },
  barBackground: {
    height: 125,
    width: 23,
    backgroundColor: '#E5F5EF',
    borderRadius: 10,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  bar: {
    width: '100%',
    backgroundColor: '#269B78',
    borderRadius: 10,
  },
  dayLabel: {
    color: '#8A9D95',
    fontSize: 12,
    marginTop: 8,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    padding: 17,
    borderRadius: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  infoIcon: {
    width: 45,
    height: 45,
    borderRadius: 13,
    backgroundColor: '#E5F5EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    marginLeft: 12,
  },
  infoTitle: {
    color: '#8A9D95',
    fontSize: 12,
  },
  infoValue: {
    color: '#263B35',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#EEF2F0',
    marginVertical: 10,
  },
  tipCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5F5EF',
    padding: 15,
    borderRadius: 14,
    marginTop: 18,
    marginBottom: 25,
  },
  tipText: {
    flex: 1,
    color: '#47665B',
    fontSize: 12,
    marginLeft: 10,
    lineHeight: 18,
  },
});
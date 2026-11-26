import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InsuranceDetailsScreen() {
  const details = [
    { label: 'Сақтандыру түрі', value: 'Міндетті медициналық сақтандыру' },
    { label: 'Сақтандыру нөмірі', value: 'MS-2026-001245' },
    { label: 'Мәртебесі', value: 'Белсенді' },
    { label: 'Басталу күні', value: '01.01.2026' },
    { label: 'Аяқталу күні', value: '31.12.2026' },
    { label: 'Сақтандыру ұйымы', value: 'Медициналық сақтандыру қоры' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Сақтандыру мәліметтері</Text>
        <Text style={styles.subtitle}>
          Сақтандыру туралы толық ақпарат
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.statusCard}>
          <View style={styles.statusIcon}>
            <Ionicons name="shield-checkmark" size={32} color="#FFFFFF" />
          </View>
          <Text style={styles.statusTitle}>Сақтандыру белсенді</Text>
          <Text style={styles.statusDescription}>
            Сақтандыру мәртебесі үлгі ретінде көрсетілген
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Негізгі мәліметтер</Text>

        <View style={styles.detailsCard}>
          {details.map((item, index) => (
            <View key={index}>
              <View style={styles.detailRow}>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={[
                  styles.value,
                  item.label === 'Мәртебесі' && styles.activeValue,
                ]}>
                  {item.value}
                </Text>
              </View>
              {index !== details.length - 1 && (
                <View style={styles.divider} />
              )}
            </View>
          ))}
        </View>

        <View style={styles.infoCard}>
          <Ionicons name="information-circle-outline" size={23} color="#269B78" />
          <Text style={styles.infoText}>
            Бұл экрандағы ақпарат — демонстрациялық деректер. Нақты сақтандыру мәліметтерін ресми ұйымнан тексеріңіз.
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
    fontSize: 25,
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
  statusCard: {
    backgroundColor: '#269B78',
    padding: 22,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 25,
  },
  statusIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#52B797',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  statusTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statusDescription: {
    color: '#D5F5E8',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
  },
  sectionTitle: {
    color: '#263B35',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  detailsCard: {
    backgroundColor: '#FFFFFF',
    padding: 17,
    borderRadius: 16,
  },
  detailRow: {
    paddingVertical: 12,
  },
  label: {
    color: '#8A9D95',
    fontSize: 13,
  },
  value: {
    color: '#263B35',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 6,
  },
  activeValue: {
    color: '#269B78',
  },
  divider: {
    height: 1,
    backgroundColor: '#EEF2F0',
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5F5EF',
    padding: 15,
    borderRadius: 14,
    marginTop: 18,
    marginBottom: 25,
  },
  infoText: {
    flex: 1,
    color: '#47665B',
    fontSize: 12,
    marginLeft: 10,
    lineHeight: 18,
  },
});
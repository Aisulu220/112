import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PharmacyDetailsScreen() {
  const details = [
    { label: 'Дәріхана атауы', value: 'Орталық дәріхана' },
    { label: 'Мекенжайы', value: 'Алматы қаласы' },
    { label: 'Жұмыс уақыты', value: '08:00 – 22:00' },
    { label: 'Байланыс нөмірі', value: '+7 727 000 00 00' },
    { label: 'Қызмет түрі', value: 'Дәрі-дәрмек сату және кеңес беру' },
    { label: 'Қолжетімділігі', value: 'Күн сайын' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Дәріхана туралы</Text>
        <Text style={styles.subtitle}>
          Дәріхананың толық мәліметтері
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.mainCard}>
          <View style={styles.mainIcon}>
            <Ionicons name="medkit-outline" size={36} color="#FFFFFF" />
          </View>
          <Text style={styles.pharmacyName}>Орталық дәріхана</Text>
          <Text style={styles.pharmacyType}>Медициналық дәріхана</Text>
          <View style={styles.statusBox}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>Ашық</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Негізгі ақпарат</Text>

        <View style={styles.detailsCard}>
          {details.map((item, index) => (
            <View key={index}>
              <View style={styles.detailRow}>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.value}>{item.value}</Text>
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
            Бұл экрандағы мәліметтер — үлгі ақпарат. Нақты мекенжай мен жұмыс уақытын дәріханадан тексеріңіз.
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
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 25,
  },
  mainIcon: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#269B78',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  pharmacyName: {
    color: '#263B35',
    fontSize: 21,
    fontWeight: 'bold',
  },
  pharmacyType: {
    color: '#8A9D95',
    fontSize: 13,
    marginTop: 7,
  },
  statusBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5F5EF',
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 13,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#269B78',
    marginRight: 7,
  },
  statusText: {
    color: '#269B78',
    fontSize: 13,
    fontWeight: 'bold',
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
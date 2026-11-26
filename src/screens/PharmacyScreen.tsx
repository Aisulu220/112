import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PharmacyScreen() {
  const pharmacies = [
    {
      name: 'Орталық дәріхана',
      address: 'Алматы қаласы',
      hours: '08:00 – 22:00',
      distance: '0.8 км',
    },
    {
      name: 'Денсаулық дәріханасы',
      address: 'Алматы қаласы',
      hours: '09:00 – 23:00',
      distance: '1.2 км',
    },
    {
      name: 'Фарма плюс',
      address: 'Алматы қаласы',
      hours: 'Тәулік бойы',
      distance: '2.0 км',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Дәріханалар</Text>
        <Text style={styles.subtitle}>
          Дәріханалар мен олардың ақпараты
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.searchCard}>
          <Ionicons name="search-outline" size={22} color="#269B78" />
          <Text style={styles.searchText}>Дәріхана іздеу</Text>
          <Ionicons name="options-outline" size={22} color="#8A9D95" />
        </View>

        <Text style={styles.sectionTitle}>Дәріханалар тізімі</Text>

        {pharmacies.map((item, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.cardTop}>
              <View style={styles.iconBox}>
                <Ionicons name="medkit-outline" size={27} color="#269B78" />
              </View>
              <View style={styles.info}>
                <Text style={styles.pharmacyName}>{item.name}</Text>
                <Text style={styles.address}>{item.address}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8A9D95" />
            </View>

            <View style={styles.divider} />

            <View style={styles.bottomRow}>
              <View style={styles.detail}>
                <Ionicons name="time-outline" size={16} color="#269B78" />
                <Text style={styles.detailText}>{item.hours}</Text>
              </View>
              <View style={styles.detail}>
                <Ionicons name="location-outline" size={16} color="#269B78" />
                <Text style={styles.detailText}>{item.distance}</Text>
              </View>
            </View>
          </View>
        ))}

        <View style={styles.noteCard}>
          <Ionicons name="information-circle-outline" size={22} color="#269B78" />
          <Text style={styles.note}>
            Бұл — үлгі тізім. Дәріханалардың нақты орналасуы мен жұмыс уақытын алдын ала тексеріңіз.
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
  searchCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  searchText: {
    flex: 1,
    color: '#8A9D95',
    fontSize: 14,
    marginLeft: 10,
  },
  sectionTitle: {
    color: '#263B35',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 17,
    borderRadius: 16,
    marginBottom: 15,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: '#E5F5EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  pharmacyName: {
    color: '#263B35',
    fontSize: 16,
    fontWeight: 'bold',
  },
  address: {
    color: '#8A9D95',
    fontSize: 12,
    marginTop: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#EEF2F0',
    marginVertical: 15,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    color: '#47665B',
    fontSize: 12,
    marginLeft: 6,
  },
  noteCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5F5EF',
    padding: 15,
    borderRadius: 14,
    marginTop: 5,
    marginBottom: 25,
  },
  note: {
    flex: 1,
    color: '#47665B',
    fontSize: 12,
    marginLeft: 10,
    lineHeight: 18,
  },
});
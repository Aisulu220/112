import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HospitalDetailsScreen() {
  const details = [
    { label: 'Мекеме атауы', value: 'Қалалық орталық аурухана' },
    { label: 'Мекеме түрі', value: 'Көпсалалы аурухана' },
    { label: 'Мекенжайы', value: 'Алматы қаласы' },
    { label: 'Жұмыс уақыты', value: 'Тәулік бойы' },
    { label: 'Байланыс нөмірі', value: '+7 727 000 00 00' },
    { label: 'Қызметтер', value: 'Терапия, диагностика, хирургия' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Аурухана туралы</Text>
        <Text style={styles.subtitle}>
          Медициналық мекеменің толық ақпараты
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.hospitalCard}>
          <View style={styles.mainIcon}>
            <Ionicons name="business-outline" size={36} color="#FFFFFF" />
          </View>
          <Text style={styles.hospitalName}>Қалалық орталық аурухана</Text>
          <View style={styles.ratingBox}>
            <Ionicons name="star" size={17} color="#E9A832" />
            <Text style={styles.rating}>4.8 / 5.0</Text>
          </View>
          <Text style={styles.hospitalType}>Көпсалалы медициналық мекеме</Text>
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
            Бұл экрандағы атау, мекенжай және байланыс мәліметтері — үлгі деректер. Нақты ақпаратты ауруханадан тексеріңіз.
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
  hospitalCard: {
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
  hospitalName: {
    color: '#263B35',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF6E4',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 12,
    marginTop: 12,
  },
  rating: {
    color: '#A87519',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  hospitalType: {
    color: '#8A9D95',
    fontSize: 13,
    marginTop: 10,
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
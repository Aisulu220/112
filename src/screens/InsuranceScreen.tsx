import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InsuranceScreen() {
  const insurance = [
    {
      name: 'Міндетті медициналық сақтандыру',
      shortName: 'МӘМС',
      status: 'Белсенді',
      date: '31.12.2026',
      icon: 'shield-checkmark-outline' as const,
    },
    {
      name: 'Ерікті медициналық сақтандыру',
      shortName: 'ЕМС',
      status: 'Белсенді',
      date: '15.06.2027',
      icon: 'heart-outline' as const,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Медициналық сақтандыру</Text>
        <Text style={styles.subtitle}>
          Сақтандыруларыңыз туралы ақпарат
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.mainCard}>
          <View style={styles.mainIcon}>
            <Ionicons name="shield-checkmark" size={32} color="#FFFFFF" />
          </View>
          <Text style={styles.mainTitle}>Сақтандыру мәртебесі</Text>
          <Text style={styles.mainStatus}>Белсенді</Text>
          <Text style={styles.mainDescription}>
            Сақтандыру туралы ақпаратты осы бөлімнен көре аласыз.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Менің сақтандыруларым</Text>

        {insurance.map((item, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.cardTop}>
              <View style={styles.iconBox}>
                <Ionicons name={item.icon} size={25} color="#269B78" />
              </View>
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.shortName}>{item.shortName}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8A9D95" />
            </View>

            <View style={styles.divider} />

            <View style={styles.bottomRow}>
              <View>
                <Text style={styles.label}>Мәртебесі</Text>
                <Text style={styles.active}>{item.status}</Text>
              </View>
              <View>
                <Text style={styles.label}>Жарамдылық мерзімі</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </View>
          </View>
        ))}

        <View style={styles.noteCard}>
          <Ionicons name="information-circle-outline" size={23} color="#269B78" />
          <Text style={styles.note}>
            Көрсетілген мәліметтер — үлгі деректер. Нақты сақтандыру мәртебесін ресми жүйеден тексеріңіз.
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
  mainCard: {
    backgroundColor: '#269B78',
    padding: 22,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 25,
  },
  mainIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#52B797',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  mainTitle: {
    color: '#E5F8EF',
    fontSize: 14,
  },
  mainStatus: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 7,
  },
  mainDescription: {
    color: '#D5F5E8',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 18,
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
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#E5F5EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    color: '#263B35',
    fontSize: 14,
    fontWeight: 'bold',
  },
  shortName: {
    color: '#8A9D95',
    fontSize: 12,
    marginTop: 4,
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
  label: {
    color: '#8A9D95',
    fontSize: 12,
  },
  active: {
    color: '#269B78',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  date: {
    color: '#263B35',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  noteCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
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
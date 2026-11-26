import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EmergencyContactsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Emergency Contacts</Text>
        <Text style={styles.subtitle}>Шұғыл байланыс нөмірлері</Text>
        <Text style={styles.description}>
          Қажетті қызметтермен жылдам байланысу
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.mainCard}>
          <Ionicons name="call" size={42} color="#269B78" />
          <Text style={styles.mainTitle}>Маңызды байланыстар</Text>
          <Text style={styles.mainText}>
            Төтенше жағдайда қажетті қызметтерге хабарласыңыз.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Шұғыл қызметтер</Text>

        <View style={styles.card}>
          <View style={styles.iconBox}>
            <Ionicons name="medical" size={27} color="#269B78" />
          </View>
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Жедел жәрдем</Text>
            <Text style={styles.cardText}>Медициналық көмек</Text>
          </View>
          <Text style={styles.number}>103</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.iconBox}>
            <Ionicons name="shield-checkmark" size={27} color="#269B78" />
          </View>
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Полиция</Text>
            <Text style={styles.cardText}>Қауіпсіздік қызметі</Text>
          </View>
          <Text style={styles.number}>102</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.iconBox}>
            <Ionicons name="flame" size={27} color="#269B78" />
          </View>
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Өрт сөндіру қызметі</Text>
            <Text style={styles.cardText}>Өрт және құтқару</Text>
          </View>
          <Text style={styles.number}>101</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.iconBox}>
            <Ionicons name="call" size={27} color="#269B78" />
          </View>
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Бірыңғай шұғыл қызмет</Text>
            <Text style={styles.cardText}>Төтенше жағдайлар</Text>
          </View>
          <Text style={styles.number}>112</Text>
        </View>

        <View style={styles.tipCard}>
          <Ionicons name="information-circle-outline" size={24} color="#269B78" />
          <Text style={styles.tip}>
            Нөмірлер Қазақстандағы шұғыл қызметтерге арналған. Қазір бұл экранда қоңырау шалу функциясы қосылмаған.
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
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 13,
    backgroundColor: '#E5F5EF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#263B35',
  },
  cardText: {
    fontSize: 12,
    color: '#789087',
    marginTop: 5,
  },
  number: {
    color: '#269B78',
    fontSize: 17,
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
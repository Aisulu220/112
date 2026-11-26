import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EmergencyScreen() {
  const services = [
    {
      title: 'Жедел жәрдем',
      number: '103',
      description: 'Медициналық шұғыл көмек',
      icon: 'medkit-outline' as const,
      color: '#E85D5D',
    },
    {
      title: 'Төтенше жағдай',
      number: '112',
      description: 'Бірыңғай шұғыл қызмет',
      icon: 'alert-circle-outline' as const,
      color: '#E89A35',
    },
    {
      title: 'Өрт сөндіру қызметі',
      number: '101',
      description: 'Өрт және құтқару қызметі',
      icon: 'flame-outline' as const,
      color: '#E85D5D',
    },
    {
      title: 'Полиция',
      number: '102',
      description: 'Құқық қорғау қызметі',
      icon: 'shield-outline' as const,
      color: '#4388D6',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Шұғыл көмек</Text>
        <Text style={styles.subtitle}>
          Қажет болған жағдайда жедел қызметтер
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.warningCard}>
          <Ionicons name="alert-circle" size={30} color="#D94B4B" />
          <View style={styles.warningText}>
            <Text style={styles.warningTitle}>Маңызды!</Text>
            <Text style={styles.warningDescription}>
              Өмірге немесе денсаулыққа қауіп төнген жағдайда тиісті жедел қызметке хабарласыңыз.
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Жедел қызмет нөмірлері</Text>

        {services.map((item, index) => (
          <View style={styles.card} key={index}>
            <View style={[styles.iconBox, { backgroundColor: `${item.color}18` }]}>
              <Ionicons name={item.icon} size={27} color={item.color} />
            </View>

            <View style={styles.serviceInfo}>
              <Text style={styles.serviceTitle}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>

            <View style={styles.numberBox}>
              <Text style={styles.number}>{item.number}</Text>
            </View>
          </View>
        ))}

        <View style={styles.tipCard}>
          <Ionicons name="information-circle-outline" size={23} color="#269B78" />
          <Text style={styles.tipText}>
            Қоңырау шалғанда мекенжайыңызды және жағдайды нақты түсіндіріңіз.
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
  warningCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FCEAEA',
    padding: 16,
    borderRadius: 16,
    marginBottom: 25,
  },
  warningText: {
    flex: 1,
    marginLeft: 12,
  },
  warningTitle: {
    color: '#B83F3F',
    fontSize: 16,
    fontWeight: 'bold',
  },
  warningDescription: {
    color: '#765454',
    fontSize: 13,
    marginTop: 5,
    lineHeight: 19,
  },
  sectionTitle: {
    color: '#263B35',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 15,
    marginBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceInfo: {
    flex: 1,
    marginLeft: 12,
  },
  serviceTitle: {
    color: '#263B35',
    fontSize: 15,
    fontWeight: 'bold',
  },
  description: {
    color: '#8A9D95',
    fontSize: 12,
    marginTop: 5,
  },
  numberBox: {
    backgroundColor: '#E5F5EF',
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 12,
  },
  number: {
    color: '#269B78',
    fontSize: 19,
    fontWeight: 'bold',
  },
  tipCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 14,
    marginTop: 8,
    marginBottom: 25,
  },
  tipText: {
    flex: 1,
    color: '#47665B',
    fontSize: 13,
    marginLeft: 10,
    lineHeight: 19,
  },
});
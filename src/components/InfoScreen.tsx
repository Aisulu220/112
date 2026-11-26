import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
  items: string[];
}

export default function InfoScreen({
  title,
  subtitle,
  icon,
  items,
}: Props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.smallTitle}>HEALTH CARE</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <View style={styles.iconBox}>
        <Ionicons name={icon} size={48} color="#269B78" />
      </View>

      <Text style={styles.sectionTitle}>
        Information
      </Text>

      {items.map((item, index) => (
        <View style={styles.card} key={index}>
          <Ionicons
            name="checkmark-circle"
            size={22}
            color="#269B78"
          />
          <Text style={styles.cardText}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FAF8',
  },
  header: {
    backgroundColor: '#269B78',
    padding: 25,
    paddingTop: 55,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  smallTitle: {
    color: '#D9F5E9',
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 12,
  },
  subtitle: {
    color: '#E5F8EF',
    fontSize: 14,
    marginTop: 8,
  },
  iconBox: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    padding: 25,
    borderRadius: 25,
    marginTop: 25,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    margin: 20,
    color: '#263B35',
  },
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 17,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardText: {
    color: '#344A43',
    fontSize: 14,
    flex: 1,
  },
});
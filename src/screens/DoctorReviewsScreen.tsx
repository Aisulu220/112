import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DoctorReviewsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Doctor Reviews</Text>
        <Text style={styles.subtitle}>Дәрігерлер туралы пікірлер</Text>
        <Text style={styles.description}>
          Дәрігерлердің бағалары мен пікірлері
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.mainCard}>
          <Ionicons name="star" size={42} color="#F2B544" />
          <Text style={styles.rating}>4.9 / 5.0</Text>
          <Text style={styles.mainText}>Орташа баға</Text>
        </View>

        <Text style={styles.sectionTitle}>Дәрігерлер пікірлері</Text>

        <View style={styles.card}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={25} color="#269B78" />
          </View>
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Айдана С.</Text>
            <View style={styles.stars}>
              <Ionicons name="star" size={14} color="#F2B544" />
              <Ionicons name="star" size={14} color="#F2B544" />
              <Ionicons name="star" size={14} color="#F2B544" />
              <Ionicons name="star" size={14} color="#F2B544" />
              <Ionicons name="star" size={14} color="#F2B544" />
            </View>
            <Text style={styles.review}>
              Дәрігер өте жақсы қабылдады. Барлығын түсінікті түсіндірді.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={25} color="#269B78" />
          </View>
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Мадина К.</Text>
            <View style={styles.stars}>
              <Ionicons name="star" size={14} color="#F2B544" />
              <Ionicons name="star" size={14} color="#F2B544" />
              <Ionicons name="star" size={14} color="#F2B544" />
              <Ionicons name="star" size={14} color="#F2B544" />
              <Ionicons name="star" size={14} color="#F2B544" />
            </View>
            <Text style={styles.review}>
              Қызмет көрсету сапасы ұнады. Рақмет!
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={25} color="#269B78" />
          </View>
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Нұрлан А.</Text>
            <View style={styles.stars}>
              <Ionicons name="star" size={14} color="#F2B544" />
              <Ionicons name="star" size={14} color="#F2B544" />
              <Ionicons name="star" size={14} color="#F2B544" />
              <Ionicons name="star" size={14} color="#F2B544" />
              <Ionicons name="star-outline" size={14} color="#F2B544" />
            </View>
            <Text style={styles.review}>
              Қабылдау жақсы өтті. Дәрігер мұқият қарады.
            </Text>
          </View>
        </View>

        <View style={styles.tipCard}>
          <Ionicons name="information-circle-outline" size={24} color="#269B78" />
          <Text style={styles.tip}>
            Пікірлер мен бағалар әзірге үлгі ретінде берілген.
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
  rating: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#263B35',
    marginTop: 10,
  },
  mainText: {
    color: '#789087',
    fontSize: 14,
    marginTop: 5,
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
    marginBottom: 12,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#E5F5EF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#263B35',
  },
  stars: {
    flexDirection: 'row',
    marginTop: 5,
  },
  review: {
    color: '#789087',
    fontSize: 13,
    marginTop: 8,
    lineHeight: 19,
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
  },
});
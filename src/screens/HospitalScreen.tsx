import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HospitalScreen() {
  const hospitals = [
    {
      name: 'Қалалық орталық аурухана',
      address: 'Алматы қаласы',
      type: 'Көпсалалы аурухана',
      rating: '4.8',
      icon: 'business-outline' as const,
    },
    {
      name: 'Жедел медициналық көмек орталығы',
      address: 'Алматы қаласы',
      type: 'Жедел медициналық көмек',
      rating: '4.9',
      icon: 'medkit-outline' as const,
    },
    {
      name: 'Балалар ауруханасы',
      address: 'Алматы қаласы',
      type: 'Балалар медицинасы',
      rating: '4.7',
      icon: 'heart-outline' as const,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ауруханалар</Text>
        <Text style={styles.subtitle}>
          Медициналық мекемелер тізімі
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.searchCard}>
          <Ionicons name="search-outline" size={22} color="#269B78" />
          <Text style={styles.searchText}>Аурухана іздеу</Text>
          <Ionicons name="options-outline" size={22} color="#8A9D95" />
        </View>

        <Text style={styles.sectionTitle}>Жақын медициналық мекемелер</Text>

        {hospitals.map((item, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.cardTop}>
              <View style={styles.iconBox}>
                <Ionicons name={item.icon} size={27} color="#269B78" />
              </View>
              <View style={styles.info}>
                <Text style={styles.hospitalName}>{item.name}</Text>
                <Text style={styles.type}>{item.type}</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.bottomRow}>
              <View style={styles.addressRow}>
                <Ionicons name="location-outline" size={17} color="#8A9D95" />
                <Text style={styles.address}>{item.address}</Text>
              </View>
              <View style={styles.ratingBox}>
                <Ionicons name="star" size={15} color="#E9A832" />
                <Text style={styles.rating}>{item.rating}</Text>
              </View>
            </View>
          </View>
        ))}

        <View style={styles.noteCard}>
          <Ionicons name="information-circle-outline" size={22} color="#269B78" />
          <Text style={styles.note}>
            Бұл тізім демонстрациялық мақсатта жасалған. Мекемелердің нақты мекенжайы мен қызметін алдын ала тексеріңіз.
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
    fontSize: 19,
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
  hospitalName: {
    color: '#263B35',
    fontSize: 15,
    fontWeight: 'bold',
  },
  type: {
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
    alignItems: 'center',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  address: {
    color: '#47665B',
    fontSize: 12,
    marginLeft: 5,
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF6E4',
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 10,
  },
  rating: {
    color: '#A87519',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 4,
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
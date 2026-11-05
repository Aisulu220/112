import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  // Күндер календары үшін мәліметтер
  const күндер = [
    { күн: '9', аты: 'Mon', белсенді: false },
    { күн: '10', аты: 'Tue', белсенді: false },
    { күн: '11', аты: 'Wed', белсенді: true },
    { күн: '12', аты: 'Thu', белсенді: false },
    { күн: '13', аты: 'Fri', белсенді: false },
  ];

  // Дәрігерлердің тізімі
  const дәрігерлер = [
    { аты: 'Dr. Stella Marissa, M.Med', мамандығы: 'Дерматология маманы', уақыты: '09:00 AM - 12.00 PM' },
    { аты: 'Dr. Brandon Michael, Sp.KK', мамандығы: 'Тері және эстетика сарапшысы', уақыты: '01:00 PM - 04.00 PM' },
    { аты: 'Dr. Sophie Henderson, Ph.D', мамандығы: 'Педиатриялық дерматология', уақыты: '10:00 AM - 01.00 PM' },
    { аты: 'Dr. David Benitez, Sp.D.V', мамандығы: 'Дерматовенерология', уақыты: '02:00 PM - 05.00 PM' },
  ];

  return (
    <SafeAreaView style={styles.контейнер}>
      {/* Жоғарғы бөлік (Профиль және хабарламалар) */}
      <View style={styles.жоғарғыБөлік}>
        <View style={styles.профильЖолы}>
          <View style={styles.аватарОрны} />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.қошКелдіңізМәтіні}>Қош келдіңіз,</Text>
            <Text style={styles.қолданушыАты}>Alex Morgan</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.белгішеБатырмасы}>
          <Ionicons name="notifications-outline" size={22} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.айналымМазмұны} showsVerticalScrollIndicator={false}>
        {/* Күнтізбе күндері */}
        <View style={styles.күнтізбеАумағы}>
          {күндер.map((item, index) => (
            <View
              key={index}
              style={[styles.күнКарточкасы, item.белсенді && styles.белсендіКүнКарточкасы]}
            >
              <Text style={[styles.күнСанМәтіні, item.белсенді && styles.белсендіМәтін]}>{item.күн}</Text>
              <Text style={[styles.күнАтМәтіні, item.белсенді && styles.белсендіМәтін]}>{item.аты}</Text>
            </View>
          ))}
        </View>

        {/* Бөлім тақырыбы */}
        <View style={styles.бөлімТақырыбыЖолы}>
          <Text style={styles.бөлімТақырыбы}>Алдағы уақыттар (Schedule)</Text>
          <TouchableOpacity>
            <Text style={styles.барлығынКөру}>Барлығын көру</Text>
          </TouchableOpacity>
        </View>

        {/* Дәрігерлер тізімі (Карточкалар) */}
        {дәрігерлер.map((doc, index) => (
          <View key={index} style={styles.дәрігерКарточкасы}>
            <View style={styles.дәрігерАватары} />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.дәрігерАты}>{doc.аты}</Text>
              <Text style={styles.дәрігерМамандығы}>{doc.мамандығы}</Text>
              <View style={styles.уақытЖолы}>
                <Ionicons name="time-outline" size={14} color="#1E6FFF" />
                <Text style={styles.уақытМәтіні}>{doc.уақыты}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Төменгі навигация панелі (Bottom Navigation Bar) */}
      <View style={styles.төменгіПанель}>
        <TouchableOpacity style={styles.навигацияЭлементі}>
          <Ionicons name="home" size={24} color="#1E6FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.навигацияЭлементі}>
          <Feather name="calendar" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.навигацияЭлементі}>
          <Ionicons name="chatbubbles-outline" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.навигацияЭлементі}>
          <Ionicons name="person-outline" size={24} color="#888" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  контейнер: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  жоғарғыБөлік: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  профильЖолы: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  аватарОрны: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#ddd',
  },
  қошКелдіңізМәтіні: {
    fontSize: 12,
    color: '#888',
  },
  қолданушыАты: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  белгішеБатырмасы: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  айналымМазмұны: {
    padding: 20,
    paddingBottom: 80,
  },
  күнтізбеАумағы: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  күнКарточкасы: {
    width: 55,
    height: 75,
    borderRadius: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  белсендіКүнКарточкасы: {
    backgroundColor: '#1E6FFF',
    borderColor: '#1E6FFF',
  },
  күнСанМәтіні: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  күнАтМәтіні: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  белсендіМәтін: {
    color: '#fff',
  },
  бөлімТақырыбыЖолы: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  бөлімТақырыбы: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  барлығынКөру: {
    fontSize: 14,
    color: '#1E6FFF',
    fontWeight: '600',
  },
  дәрігерКарточкасы: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  дәрігерАватары: {
    width: 55,
    height: 55,
    borderRadius: 12,
    backgroundColor: '#e1e1e1',
  },
  дәрігерАты: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  дәрігерМамандығы: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  уақытЖолы: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  уақытМәтіні: {
    fontSize: 12,
    color: '#1E6FFF',
    marginLeft: 4,
    fontWeight: '500',
  },
  төменгіПанель: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  навигацияЭлементі: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import DoctorHeader from '../components/DoctorHeader';
import DoctorCard from '../components/DoctorCard';
import BottomNavigation from '../components/BottomNavigation';
import { doctors } from '../data/doctors';
import { doctorStyles as styles } from '../styles/doctorStyles';

export default function FavoriteDoctorsScreen({ navigation }: any) {
  const [favorites, setFavorites] = useState<number[]>([1, 2, 3, 4]);

  const toggle = (id: number) => {
    setFavorites((old) =>
      old.includes(id) ? old.filter((x) => x !== id) : [...old, id]
    );
  };

  return (
    <View style={styles.container}>
      <DoctorHeader title="Favorite" onBack={() => navigation?.goBack?.()} />

      <View style={{
        flexDirection: 'row',
        margin: 17,
        backgroundColor: '#E0E6FF',
        borderRadius: 20,
        padding: 4,
      }}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: '#365FF5',
            borderRadius: 18,
            padding: 12,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#FFFFFF', fontWeight: '700' }}>
            Doctors
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation?.navigate?.('FavoriteServices')}
          style={{
            flex: 1,
            borderRadius: 18,
            padding: 12,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#365FF5' }}>Services</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {doctors
          .filter((doctor) => favorites.includes(doctor.id))
          .map((doctor) => (
            <View key={doctor.id}>
              <DoctorCard
                doctor={doctor}
                isFavorite={true}
                onFavorite={() => toggle(doctor.id)}
              />

              <TouchableOpacity style={{
                backgroundColor: '#365FF5',
                borderRadius: 15,
                padding: 9,
                marginHorizontal: 17,
                marginTop: -5,
                marginBottom: 12,
                alignItems: 'center',
              }}>
                <Text style={{ color: '#FFFFFF', fontSize: 11 }}>
                  Make Appointment
                </Text>
              </TouchableOpacity>
            </View>
          ))}

        {favorites.length === 0 && (
          <Text style={styles.empty}>No favorite doctors yet</Text>
        )}
      </ScrollView>

      <BottomNavigation
        activeTab="Home"
        onChange={(tab) => navigation?.navigate?.(tab)}
      />
    </View>
  );
}

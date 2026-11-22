
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import DoctorHeader from '../components/DoctorHeader';
import DoctorCard from '../components/DoctorCard';
import BottomNavigation from '../components/BottomNavigation';
import { doctors } from '../data/doctors';
import { doctorStyles as styles } from '../styles/doctorStyles';

export default function RatingScreen({ navigation }: any) {
  const sorted = [...doctors].sort(
    (a, b) => Number(b.rating) - Number(a.rating)
  );

  return (
    <View style={styles.container}>
      <DoctorHeader title="Rating" onBack={() => navigation?.goBack?.()} />

      <Text style={styles.sectionTitle}>Top Rated Doctors</Text>

      <ScrollView contentContainerStyle={styles.content}>
        {sorted.map((doctor, index) => (
          <View key={doctor.id}>
            <Text style={{
              color: '#365FF5',
              fontSize: 12,
              fontWeight: '700',
              marginLeft: 20,
              marginBottom: 5,
            }}>
              #{index + 1} Professional Doctor
            </Text>

            <DoctorCard
              doctor={doctor}
              isFavorite={false}
              onFavorite={() => {}}
            />
          </View>
        ))}
      </ScrollView>

      <BottomNavigation
        activeTab="Home"
        onChange={(tab) => navigation?.navigate?.(tab)}
      />
    </View>
  );
}

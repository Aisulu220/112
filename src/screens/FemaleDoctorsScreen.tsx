
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import DoctorHeader from '../components/DoctorHeader';
import DoctorCard from '../components/DoctorCard';
import BottomNavigation from '../components/BottomNavigation';
import { doctors } from '../data/doctors';
import { doctorStyles as styles } from '../styles/doctorStyles';

export default function FemaleDoctorsScreen({ navigation }: any) {
  const [favorites, setFavorites] = useState<number[]>([]);

  // Demo data: doctors 1 and 3 are assigned to this category.
  const femaleDoctors = doctors.filter((d) => [1, 3].includes(d.id));

  const toggle = (id: number) => {
    setFavorites((old) =>
      old.includes(id) ? old.filter((x) => x !== id) : [...old, id]
    );
  };

  return (
    <View style={styles.container}>
      <DoctorHeader title="Female" onBack={() => navigation?.goBack?.()} />

      <Text style={styles.sectionTitle}>Female Doctors</Text>

      <ScrollView contentContainerStyle={styles.content}>
        {femaleDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            isFavorite={favorites.includes(doctor.id)}
            onFavorite={() => toggle(doctor.id)}
          />
        ))}
      </ScrollView>

      <BottomNavigation
        activeTab="Home"
        onChange={(tab) => navigation?.navigate?.(tab)}
      />
    </View>
  );
}

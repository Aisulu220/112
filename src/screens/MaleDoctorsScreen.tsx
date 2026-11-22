
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import DoctorHeader from '../components/DoctorHeader';
import DoctorCard from '../components/DoctorCard';
import BottomNavigation from '../components/BottomNavigation';
import { doctors } from '../data/doctors';
import { doctorStyles as styles } from '../styles/doctorStyles';

export default function MaleDoctorsScreen({ navigation }: any) {
  const [favorites, setFavorites] = useState<number[]>([]);

  // Demo data: doctors 2 and 4 are assigned to this category.
  const maleDoctors = doctors.filter((d) => [2, 4].includes(d.id));

  const toggle = (id: number) => {
    setFavorites((old) =>
      old.includes(id) ? old.filter((x) => x !== id) : [...old, id]
    );
  };

  return (
    <View style={styles.container}>
      <DoctorHeader title="Male" onBack={() => navigation?.goBack?.()} />

      <Text style={styles.sectionTitle}>Male Doctors</Text>

      <ScrollView contentContainerStyle={styles.content}>
        {maleDoctors.map((doctor) => (
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

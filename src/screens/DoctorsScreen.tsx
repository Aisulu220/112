
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import DoctorHeader from '../components/DoctorHeader';
import DoctorFilter from '../components/DoctorFilter';
import DoctorCard from '../components/DoctorCard';
import BottomNavigation from '../components/BottomNavigation';

import { doctors } from '../data/doctors';
import { doctorStyles as styles } from '../styles/doctorStyles';

export default function DoctorsScreen({ navigation }: any) {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState('A–Z');
  const [favorites, setFavorites] = useState<number[]>([1]);

  const filtered = doctors
    .filter((d) =>
      (d.name + d.specialty).toLowerCase().includes(search.toLowerCase())
    )
    .filter((d) => selected !== '♥' || favorites.includes(d.id))
    .sort((a, b) => selected === 'A–Z' ? a.name.localeCompare(b.name) : 0);

  const toggleFavorite = (id: number) => {
    setFavorites((old) =>
      old.includes(id) ? old.filter((x) => x !== id) : [...old, id]
    );
  };

  return (
    <View style={styles.container}>
      <DoctorHeader
        title="Doctors"
        onBack={() => navigation?.goBack?.()}
      />

      <View style={{ paddingHorizontal: 17 }}>
        <View style={{
          backgroundColor: '#DCE3FF',
          borderRadius: 20,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 12,
        }}>
          <Ionicons name="search-outline" size={19} color="#365FF5" />
          <TextInput
            placeholder="Search doctors..."
            value={search}
            onChangeText={setSearch}
            style={{ flex: 1, height: 42, marginLeft: 8 }}
          />
        </View>
      </View>

      <DoctorFilter selected={selected} onSelect={setSelected} />

      <ScrollView contentContainerStyle={styles.content}>
        {filtered.map((doctor) => (
          <TouchableOpacity
            key={doctor.id}
            activeOpacity={0.9}
            onPress={() =>
              navigation?.navigate?.('DoctorInfo', { doctor })
            }
          >
            <DoctorCard
              doctor={doctor}
              isFavorite={favorites.includes(doctor.id)}
              onFavorite={() => toggleFavorite(doctor.id)}
            />
          </TouchableOpacity>
        ))}

        {filtered.length === 0 && (
          <Text style={styles.empty}>No doctors found</Text>
        )}
      </ScrollView>

      <BottomNavigation
        activeTab="Home"
        onChange={(tab) => navigation?.navigate?.(tab)}
      />
    </View>
  );
}

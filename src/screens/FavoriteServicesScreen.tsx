
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import DoctorHeader from '../components/DoctorHeader';
import BottomNavigation from '../components/BottomNavigation';
import { services } from '../data/services';
import { doctorStyles as styles } from '../styles/doctorStyles';

export default function FavoriteServicesScreen({ navigation }: any) {
  const [selected, setSelected] = useState<number[]>([1, 2, 3, 4, 5]);

  const toggle = (id: number) => {
    setSelected((old) =>
      old.includes(id) ? old.filter((x) => x !== id) : [...old, id]
    );
  };

  return (
    <View style={styles.container}>
      <DoctorHeader title="Favorite" onBack={() => navigation?.goBack?.()} />

      <View style={{ flexDirection: 'row', margin: 17, gap: 8 }}>
        <TouchableOpacity
          onPress={() => navigation?.navigate?.('FavoriteDoctors')}
          style={{
            flex: 1,
            backgroundColor: '#D1DAFF',
            padding: 12,
            borderRadius: 18,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#365FF5' }}>Doctors</Text>
        </TouchableOpacity>

        <View style={{
          flex: 1,
          backgroundColor: '#365FF5',
          padding: 12,
          borderRadius: 18,
          alignItems: 'center',
        }}>
          <Text style={{ color: '#FFFFFF', fontWeight: '700' }}>
            Services
          </Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {services.map((service) => {
          const active = selected.includes(service.id);

          return (
            <TouchableOpacity
              key={service.id}
              onPress={() => toggle(service.id)}
              style={styles.serviceItem}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.serviceName}>
                  ♥ {service.name}
                </Text>
                <Text style={styles.serviceDescription}>
                  {service.description}
                </Text>
              </View>

              <Ionicons
                name={active ? 'checkmark-circle' : 'ellipse-outline'}
                size={22}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <BottomNavigation
        activeTab="Home"
        onChange={(tab) => navigation?.navigate?.(tab)}
      />
    </View>
  );
}

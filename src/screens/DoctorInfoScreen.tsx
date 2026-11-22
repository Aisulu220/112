
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import DoctorHeader from '../components/DoctorHeader';
import BottomNavigation from '../components/BottomNavigation';
import { doctorStyles as styles } from '../styles/doctorStyles';

export default function DoctorInfoScreen({ route, navigation }: any) {
  const doctor = route?.params?.doctor || {
    name: 'Dr. Alexander Bennett, Ph.D.',
    specialty: 'Dermato-Genetics',
    rating: '4.5',
    reviews: '40',
    avatar: 'AB',
    color: '#B5C9D5',
  };

  return (
    <View style={styles.container}>
      <DoctorHeader title="Doctor Info" onBack={() => navigation?.goBack?.()} />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.profileCard}>
          <View style={styles.profileTop}>
            <View style={[
              styles.profileAvatar,
              { backgroundColor: doctor.color },
            ]}>
              <Text style={styles.avatarText}>{doctor.avatar}</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.profileName}>{doctor.name}</Text>
              <Text style={styles.description}>{doctor.specialty}</Text>
              <View style={{
                backgroundColor: '#365FF5',
                borderRadius: 12,
                padding: 5,
                alignSelf: 'flex-start',
                marginTop: 7,
              }}>
                <Text style={{ color: '#FFFFFF', fontSize: 11 }}>
                  ⭐ {doctor.rating}  ·  {doctor.reviews} reviews
                </Text>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', gap: 8, marginTop: 14 }}>
            {['Message', 'Call', 'Favorite'].map((item) => (
              <TouchableOpacity
                key={item}
                style={{
                  backgroundColor: '#365FF5',
                  borderRadius: 15,
                  padding: 9,
                  flex: 1,
                  alignItems: 'center',
                }}
              >
                <Text style={{ color: '#FFFFFF', fontSize: 10 }}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Text style={styles.sectionTitle}>About</Text>
        <View style={{ paddingHorizontal: 17 }}>
          <Text style={styles.description}>
            Our medical specialist provides professional consultations
            and personalized skin care recommendations. The doctor
            focuses on diagnosis, prevention and modern treatment methods.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Career Path</Text>
        <View style={{ paddingHorizontal: 17 }}>
          <Text style={styles.description}>
            Medical Education — University of Medical Sciences.
          </Text>
          <Text style={styles.description}>
            Clinical Experience — Specialist Medical Center.
          </Text>
          <Text style={styles.description}>
            Professional Development — Advanced Dermatology.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Highlights</Text>
        <View style={{ paddingHorizontal: 17 }}>
          <Text style={styles.description}>
            • Professional medical consultations
          </Text>
          <Text style={styles.description}>
            • Individual patient care
          </Text>
          <Text style={styles.description}>
            • Modern diagnostic approaches
          </Text>
        </View>

        <TouchableOpacity style={[styles.blueButton, { marginHorizontal: 17 }]}>
          <Text style={styles.buttonText}>Book Appointment</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNavigation
        activeTab="Home"
        onChange={(tab) => navigation?.navigate?.(tab)}
      />
    </View>
  );
}

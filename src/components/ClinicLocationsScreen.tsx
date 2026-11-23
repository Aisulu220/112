import React, { useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface ClinicBranch {
  id: string;
  name: string;
  address: string;
  hours: string;
  distance: string;
}

const CLINICS: ClinicBranch[] = [
  {
    id: '1',
    name: 'DermaCare Medical Center — Central',
    address: 'Dostyk Ave 120, Almaty',
    hours: 'Mon–Sat · 08:30–20:00',
    distance: '1.4 km',
  },
  {
    id: '2',
    name: 'DermaCare Skin & Laser Clinic',
    address: 'Abay Ave 52, Almaty',
    hours: 'Mon–Sun · 09:00–19:00',
    distance: '3.1 km',
  },
  {
    id: '3',
    name: 'DermaCare Outpatient Branch',
    address: 'Zharokov St 190, Almaty',
    hours: 'Mon–Fri · 09:00–18:00',
    distance: '4.6 km',
  },
];

export default function ClinicLocationsScreen({ navigation }: any) {
  const [selectedClinicId, setSelectedClinicId] = useState<string>('1');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack?.()}>
          <Text style={styles.backBtn}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Clinic Locations</Text>
        <View style={{ width: 20 }} />
      </View>

      <FlatList
        data={CLINICS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          const isSelected = item.id === selectedClinicId;
          return (
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => setSelectedClinicId(item.id)}
              style={[styles.card, isSelected && styles.cardSelected]}
            >
              <View style={styles.topRow}>
                <Text style={styles.clinicName}>{item.name}</Text>
                <View style={styles.distBadge}>
                  <Text style={styles.distText}>{item.distance}</Text>
                </View>
              </View>

              <Text style={styles.addressText}>{item.address}</Text>
              <Text style={styles.hoursText}>{item.hours}</Text>

              <TouchableOpacity
                style={styles.bookBtn}
                onPress={() => navigation?.navigate?.('Schedule')}
              >
                <Text style={styles.bookBtnText}>Book at This Branch</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backBtn: { fontSize: 20, fontWeight: '700', color: '#2260FF' },
  title: { fontSize: 18, fontWeight: '700', color: '#2260FF' },
  list: { paddingHorizontal: 16, paddingBottom: 24, gap: 12 },
  card: {
    backgroundColor: '#EEF2FF',
    borderRadius: 18,
    padding: 14,
  },
  cardSelected: {
    borderWidth: 1,
    borderColor: '#2260FF',
    backgroundColor: '#E4ECFF',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
  },
  clinicName: { flex: 1, fontSize: 14, fontWeight: '700', color: '#1F2937' },
  distBadge: {
    backgroundColor: '#CAD6FF',
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 10,
  },
  distText: { fontSize: 11, fontWeight: '700', color: '#2260FF' },
  addressText: { fontSize: 12.5, color: '#374151', marginTop: 6 },
  hoursText: { fontSize: 11.5, color: '#6B7280', marginTop: 3 },
  bookBtn: {
    marginTop: 12,
    backgroundColor: '#2260FF',
    paddingVertical: 9,
    borderRadius: 16,
    alignItems: 'center',
  },
  bookBtnText: { color: '#FFFFFF', fontSize: 12.5, fontWeight: '700' },
});
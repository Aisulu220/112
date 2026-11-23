import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface CancelledItem {
  id: string;
  doctor: string;
  specialty: string;
}

const CANCELLED_ITEMS: CancelledItem[] = [
  {
    id: '1',
    doctor: 'Dr. Olivia Turner, M.D.',
    specialty: 'Dermato-Endocrinology',
  },
  {
    id: '2',
    doctor: 'Dr. Alexander Bennett, Ph.D.',
    specialty: 'Dermato-Endocrinology',
  },
  {
    id: '3',
    doctor: 'Dr. Sophia Martinez, Ph.D.',
    specialty: 'Cosmetic Bioengineering',
  },
  {
    id: '4',
    doctor: 'Dr. Michael Brooks, M.D.',
    specialty: 'Dermato-Endocrinology',
  },
];

export default function CancelledAppointmentScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack?.()}>
          <Text style={styles.backBtn}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>All Appointment</Text>
        <View style={{ width: 20 }} />
      </View>

      <View style={styles.tabsRow}>
        <TouchableOpacity
          style={styles.tabInactive}
          onPress={() => navigation?.navigate?.('UpcomingAppointment')}
        >
          <Text style={styles.tabInactiveText}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabInactive}
          onPress={() => navigation?.navigate?.('AllAppointment')}
        >
          <Text style={styles.tabInactiveText}>Complete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabActive}>
          <Text style={styles.tabActiveText}>Cancelled</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={CANCELLED_ITEMS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {item.doctor.replace('Dr. ', '').slice(0, 2).toUpperCase()}
              </Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.doctorName}>{item.doctor}</Text>
              <Text style={styles.specialty}>{item.specialty}</Text>
              <TouchableOpacity
                style={styles.reviewBtn}
                onPress={() => navigation?.navigate?.('Review', { doctor: item.doctor })}
              >
                <Text style={styles.reviewBtnText}>Add Review</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
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
  backBtn: { fontSize: 20, color: '#2260FF', fontWeight: '700' },
  title: { fontSize: 18, fontWeight: '700', color: '#2260FF' },
  tabsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 12,
  },
  tabActive: {
    flex: 1,
    backgroundColor: '#2260FF',
    paddingVertical: 8,
    borderRadius: 18,
    alignItems: 'center',
  },
  tabActiveText: { color: '#FFFFFF', fontSize: 12, fontWeight: '700' },
  tabInactive: {
    flex: 1,
    backgroundColor: '#CAD6FF',
    paddingVertical: 8,
    borderRadius: 18,
    alignItems: 'center',
  },
  tabInactiveText: { color: '#2260FF', fontSize: 12, fontWeight: '600' },
  list: { paddingHorizontal: 16, paddingBottom: 24, gap: 12 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2FF',
    borderRadius: 18,
    padding: 12,
    gap: 12,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#CAD6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { color: '#2260FF', fontWeight: '800', fontSize: 15 },
  info: { flex: 1 },
  doctorName: { fontSize: 14, fontWeight: '700', color: '#2260FF' },
  specialty: { fontSize: 12, color: '#374151', marginTop: 2 },
  reviewBtn: {
    alignSelf: 'flex-start',
    backgroundColor: '#2260FF',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 14,
    marginTop: 8,
  },
  reviewBtnText: { color: '#FFFFFF', fontSize: 11.5, fontWeight: '700' },
});
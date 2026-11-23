import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface UpcomingItem {
  id: string;
  doctor: string;
  specialty: string;
  schedule: string;
}

const UPCOMING_ITEMS: UpcomingItem[] = [
  {
    id: '1',
    doctor: 'Dr. Olivia Turner, M.D.',
    specialty: 'Dermato-Endocrinology',
    schedule: 'Sunday, 12 June · 10:00 AM',
  },
  {
    id: '2',
    doctor: 'Dr. Alexander Bennett, Ph.D.',
    specialty: 'Dermato-Endocrinology',
    schedule: 'Monday, 13 June · 02:30 PM',
  },
  {
    id: '3',
    doctor: 'Dr. Sophia Martinez, Ph.D.',
    specialty: 'Cosmetic Bioengineering',
    schedule: 'Wednesday, 15 June · 11:00 AM',
  },
];

export default function UpcomingAppointmentScreen({ navigation }: any) {
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
        <TouchableOpacity style={styles.tabActive}>
          <Text style={styles.tabActiveText}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabInactive}
          onPress={() => navigation?.navigate?.('AllAppointment')}
        >
          <Text style={styles.tabInactiveText}>Complete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabInactive}
          onPress={() => navigation?.navigate?.('CancelledAppointment')}
        >
          <Text style={styles.tabInactiveText}>Cancelled</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={UPCOMING_ITEMS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.topRow}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {item.doctor.replace('Dr. ', '').slice(0, 2).toUpperCase()}
                </Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.doctorName}>{item.doctor}</Text>
                <Text style={styles.specialty}>{item.specialty}</Text>
                <Text style={styles.scheduleText}>{item.schedule}</Text>
              </View>
            </View>

            <View style={styles.actionsRow}>
              <TouchableOpacity
                style={styles.primaryBtn}
                onPress={() => navigation?.navigate?.('Schedule')}
              >
                <Text style={styles.primaryBtnText}>Reschedule</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.softBtn}
                onPress={() => navigation?.navigate?.('CancelAppointment')}
              >
                <Text style={styles.softBtnText}>Cancel</Text>
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
    backgroundColor: '#EEF2FF',
    borderRadius: 18,
    padding: 12,
  },
  topRow: { flexDirection: 'row', gap: 12, alignItems: 'center' },
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
  scheduleText: { fontSize: 11, color: '#4B5563', marginTop: 4 },
  actionsRow: { flexDirection: 'row', gap: 10, marginTop: 12 },
  primaryBtn: {
    flex: 1,
    backgroundColor: '#2260FF',
    paddingVertical: 8,
    borderRadius: 16,
    alignItems: 'center',
  },
  primaryBtnText: { color: '#FFFFFF', fontSize: 12, fontWeight: '700' },
  softBtn: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    borderRadius: 16,
    alignItems: 'center',
  },
  softBtnText: { color: '#2260FF', fontSize: 12, fontWeight: '600' },
});
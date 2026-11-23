import React, { useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface MedItem {
  id: string;
  name: string;
  dosage: string;
  timeOfDay: string;
  taken: boolean;
}

const INITIAL_MEDS: MedItem[] = [
  {
    id: '1',
    name: 'Gentle Cleanser & SPF 50',
    dosage: 'Thin layer · Morning',
    timeOfDay: '08:00 AM',
    taken: true,
  },
  {
    id: '2',
    name: 'Azelaic Acid Gel 15%',
    dosage: 'Pea-sized amount',
    timeOfDay: '01:00 PM',
    taken: false,
  },
  {
    id: '3',
    name: 'Ceramide Barrier Cream',
    dosage: 'Full face · Evening',
    timeOfDay: '09:30 PM',
    taken: false,
  },
];

export default function MedicationTrackerScreen({ navigation }: any) {
  const [meds, setMeds] = useState<MedItem[]>(INITIAL_MEDS);

  const toggleTaken = (id: string) => {
    setMeds((prev) =>
      prev.map((m) => (m.id === id ? { ...m, taken: !m.taken } : m))
    );
  };

  const completedCount = meds.filter((m) => m.taken).length;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack?.()}>
          <Text style={styles.backBtn}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Medication & Care</Text>
        <Text style={styles.progressCounter}>
          {completedCount}/{meds.length}
        </Text>
      </View>

      <View style={styles.summaryBanner}>
        <Text style={styles.bannerTitle}>Daily Treatment Adherence</Text>
        <Text style={styles.bannerSub}>
          Tap a medication to mark it as completed for today.
        </Text>
      </View>

      <FlatList
        data={meds}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => toggleTaken(item.id)}
            style={[styles.card, item.taken && styles.cardDone]}
          >
            <View style={styles.info}>
              <Text style={styles.medName}>{item.name}</Text>
              <Text style={styles.medSub}>
                {item.dosage} · {item.timeOfDay}
              </Text>
            </View>
            <View style={[styles.checkPill, item.taken && styles.checkPillActive]}>
              <Text style={[styles.checkText, item.taken && styles.checkTextActive]}>
                {item.taken ? '✓ Done' : 'Mark'}
              </Text>
            </View>
          </TouchableOpacity>
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
  backBtn: { fontSize: 20, fontWeight: '700', color: '#2260FF' },
  title: { fontSize: 18, fontWeight: '700', color: '#2260FF' },
  progressCounter: {
    fontSize: 13,
    fontWeight: '800',
    color: '#2260FF',
    backgroundColor: '#CAD6FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  summaryBanner: {
    marginHorizontal: 16,
    backgroundColor: '#2260FF',
    borderRadius: 18,
    padding: 14,
    marginBottom: 14,
  },
  bannerTitle: { color: '#FFFFFF', fontSize: 15, fontWeight: '700' },
  bannerSub: { color: '#DCE6FF', fontSize: 12, marginTop: 3 },
  list: { paddingHorizontal: 16, paddingBottom: 24, gap: 10 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EEF2FF',
    borderRadius: 16,
    padding: 14,
  },
  cardDone: { backgroundColor: '#E1EAFF' },
  info: { flex: 1, paddingRight: 10 },
  medName: { fontSize: 14, fontWeight: '700', color: '#1F2937' },
  medSub: { fontSize: 12, color: '#4B5563', marginTop: 3 },
  checkPill: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 14,
  },
  checkPillActive: { backgroundColor: '#2260FF' },
  checkText: { fontSize: 12, fontWeight: '700', color: '#2260FF' },
  checkTextActive: { color: '#FFFFFF' },
});
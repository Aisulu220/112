import React, { useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface PrescriptionItem {
  id: string;
  medicine: string;
  doctor: string;
  instructions: string;
  duration: string;
  refillRequested?: boolean;
}

const INITIAL_PRESCRIPTIONS: PrescriptionItem[] = [
  {
    id: '1',
    medicine: 'Adapalene 0.1% Topical Gel',
    doctor: 'Dr. Olivia Turner, M.D.',
    instructions: 'Apply a thin layer to clean, dry skin once daily in the evening.',
    duration: '30 days',
  },
  {
    id: '2',
    medicine: 'Panthenol Soothing Emulsion',
    doctor: 'Dr. Olivia Turner, M.D.',
    instructions: 'Apply morning and night after cleansing to support skin barrier.',
    duration: '45 days',
  },
];

export default function PrescriptionScreen({ navigation }: any) {
  const [items, setItems] = useState<PrescriptionItem[]>(INITIAL_PRESCRIPTIONS);

  const handleRequestRefill = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, refillRequested: true } : item
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack?.()}>
          <Text style={styles.backBtn}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Prescriptions</Text>
        <View style={{ width: 20 }} />
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.topRow}>
              <Text style={styles.medTitle}>{item.medicine}</Text>
              <View style={styles.durationTag}>
                <Text style={styles.durationText}>{item.duration}</Text>
              </View>
            </View>

            <Text style={styles.doctorText}>{item.doctor}</Text>
            <Text style={styles.instructionsText}>{item.instructions}</Text>

            <TouchableOpacity
              style={[
                styles.refillBtn,
                item.refillRequested && styles.refillBtnDone,
              ]}
              onPress={() => handleRequestRefill(item.id)}
            >
              <Text
                style={[
                  styles.refillBtnText,
                  item.refillRequested && styles.refillBtnTextDone,
                ]}
              >
                {item.refillRequested ? 'Refill Requested' : 'Request Refill'}
              </Text>
            </TouchableOpacity>
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
  backBtn: { fontSize: 20, fontWeight: '700', color: '#2260FF' },
  title: { fontSize: 18, fontWeight: '700', color: '#2260FF' },
  list: { paddingHorizontal: 16, paddingBottom: 24, gap: 12 },
  card: {
    backgroundColor: '#EEF2FF',
    borderRadius: 18,
    padding: 14,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
  },
  medTitle: { flex: 1, fontSize: 14.5, fontWeight: '700', color: '#1F2937' },
  durationTag: {
    backgroundColor: '#CAD6FF',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  durationText: { fontSize: 11, fontWeight: '700', color: '#2260FF' },
  doctorText: { fontSize: 12, fontWeight: '600', color: '#2260FF', marginTop: 4 },
  instructionsText: {
    fontSize: 12.5,
    color: '#374151',
    lineHeight: 18,
    marginTop: 8,
  },
  refillBtn: {
    marginTop: 12,
    backgroundColor: '#2260FF',
    paddingVertical: 9,
    borderRadius: 16,
    alignItems: 'center',
  },
  refillBtnDone: { backgroundColor: '#CAD6FF' },
  refillBtnText: { color: '#FFFFFF', fontSize: 12.5, fontWeight: '700' },
  refillBtnTextDone: { color: '#2260FF' },
});
import React, { useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface LabReport {
  id: string;
  testName: string;
  date: string;
  status: 'Normal' | 'Review';
  summary: string;
}

const LAB_REPORTS: LabReport[] = [
  {
    id: '1',
    testName: 'Vitamin D (25-OH)',
    date: '14 Nov 2026',
    status: 'Review',
    summary: 'Slightly below target range; daily supplement suggested.',
  },
  {
    id: '2',
    testName: 'Dermatoscopic Skin Scan',
    date: '02 Nov 2026',
    status: 'Normal',
    summary: 'No suspicious pigment lesions detected.',
  },
  {
    id: '3',
    testName: 'Complete Blood Count (CBC)',
    date: '18 Oct 2026',
    status: 'Normal',
    summary: 'All parameters within standard reference limits.',
  },
];

export default function LabResultsScreen({ navigation }: any) {
  const [selectedId, setSelectedId] = useState<string | null>('1');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack?.()}>
          <Text style={styles.backBtn}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Lab Results</Text>
        <View style={{ width: 20 }} />
      </View>

      <FlatList
        data={LAB_REPORTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          const expanded = selectedId === item.id;
          return (
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => setSelectedId(expanded ? null : item.id)}
              style={styles.card}
            >
              <View style={styles.topRow}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.testTitle}>{item.testName}</Text>
                  <Text style={styles.dateText}>{item.date}</Text>
                </View>
                <View
                  style={[
                    styles.statusPill,
                    item.status === 'Review' && styles.statusReview,
                  ]}
                >
                  <Text
                    style={[
                      styles.statusText,
                      item.status === 'Review' && styles.statusReviewText,
                    ]}
                  >
                    {item.status}
                  </Text>
                </View>
              </View>

              {expanded && <Text style={styles.summaryText}>{item.summary}</Text>}
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
    borderRadius: 16,
    padding: 14,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  testTitle: { fontSize: 14, fontWeight: '700', color: '#1F2937' },
  dateText: { fontSize: 11.5, color: '#6B7280', marginTop: 2 },
  statusPill: {
    backgroundColor: '#CAD6FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusReview: { backgroundColor: '#2260FF' },
  statusText: { fontSize: 11, fontWeight: '700', color: '#2260FF' },
  statusReviewText: { color: '#FFFFFF' },
  summaryText: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#DCE4FF',
    fontSize: 12.5,
    color: '#374151',
    lineHeight: 18,
  },
});
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const TIPS = [
  {
    id: '1',
    title: 'Daily Sun Protection',
    detail: 'Apply broad-spectrum SPF 50 every morning, even on cloudy days.',
  },
  {
    id: '2',
    title: 'Lukewarm Water Cleansing',
    detail: 'Avoid hot water on your face to prevent barrier dryness and irritation.',
  },
  {
    id: '3',
    title: 'Introduce Actives Slowly',
    detail: 'Patch-test new skincare products and add one active ingredient at a time.',
  },
];

export default function WellnessTipsScreen({ navigation }: any) {
  const [glasses, setGlasses] = useState<number>(5);
  const goalGlasses = 8;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation?.goBack?.()}>
            <Text style={styles.backBtn}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Care Tips & Water</Text>
          <View style={{ width: 20 }} />
        </View>

        <View style={styles.waterCard}>
          <Text style={styles.waterTitle}>Daily Water Intake</Text>
          <Text style={styles.waterCount}>
            {glasses} / {goalGlasses} glasses
          </Text>
          <View style={styles.waterActions}>
            <TouchableOpacity
              style={styles.waterBtnSecondary}
              onPress={() => setGlasses((g) => Math.max(0, g - 1))}
            >
              <Text style={styles.waterBtnSecondaryText}>-1 Glass</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.waterBtnPrimary}
              onPress={() => setGlasses((g) => Math.min(12, g + 1))}
            >
              <Text style={styles.waterBtnPrimaryText}>+1 Glass</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionHeading}>Dermatology Tips</Text>
        {TIPS.map((tip) => (
          <View key={tip.id} style={styles.tipCard}>
            <Text style={styles.tipTitle}>{tip.title}</Text>
            <Text style={styles.tipDetail}>{tip.detail}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { padding: 16, paddingBottom: 28 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  backBtn: { fontSize: 20, fontWeight: '700', color: '#2260FF' },
  title: { fontSize: 18, fontWeight: '700', color: '#2260FF' },
  waterCard: {
    backgroundColor: '#EEF2FF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 18,
  },
  waterTitle: { fontSize: 13, fontWeight: '700', color: '#2260FF' },
  waterCount: { fontSize: 24, fontWeight: '800', color: '#1F2937', marginVertical: 6 },
  waterActions: { flexDirection: 'row', gap: 10, marginTop: 6 },
  waterBtnSecondary: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 9,
    borderRadius: 16,
    alignItems: 'center',
  },
  waterBtnSecondaryText: { color: '#2260FF', fontWeight: '700', fontSize: 12.5 },
  waterBtnPrimary: {
    flex: 1,
    backgroundColor: '#2260FF',
    paddingVertical: 9,
    borderRadius: 16,
    alignItems: 'center',
  },
  waterBtnPrimaryText: { color: '#FFFFFF', fontWeight: '700', fontSize: 12.5 },
  sectionHeading: { fontSize: 15, fontWeight: '700', color: '#1F2937', marginBottom: 10 },
  tipCard: {
    backgroundColor: '#F6F8FF',
    borderRadius: 16,
    padding: 13,
    marginBottom: 10,
  },
  tipTitle: { fontSize: 13.5, fontWeight: '700', color: '#2260FF', marginBottom: 4 },
  tipDetail: { fontSize: 12.5, color: '#374151', lineHeight: 18 },
});
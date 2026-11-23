import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface DiaryEntry {
  id: string;
  date: string;
  mood: string;
  hydration: number;
  note: string;
}

const INITIAL_ENTRIES: DiaryEntry[] = [
  {
    id: '1',
    date: 'Today · 08:30',
    mood: 'Calm',
    hydration: 80,
    note: 'No new redness around cheeks after morning routine.',
  },
  {
    id: '2',
    date: 'Yesterday · 21:15',
    mood: 'Dry',
    hydration: 55,
    note: 'Felt slight dryness after outdoor walk; applied barrier cream.',
  },
];

const MOODS = ['Calm', 'Glowing', 'Dry', 'Sensitive'];

export default function SkinDiaryScreen({ navigation }: any) {
  const [entries, setEntries] = useState<DiaryEntry[]>(INITIAL_ENTRIES);
  const [selectedMood, setSelectedMood] = useState<string>('Calm');
  const [hydration, setHydration] = useState<number>(75);
  const [noteText, setNoteText] = useState<string>('');

  const handleAddEntry = () => {
    const trimmed = noteText.trim();
    if (!trimmed) return;

    const newEntry: DiaryEntry = {
      id: String(Date.now()),
      date: 'Just now',
      mood: selectedMood,
      hydration,
      note: trimmed,
    };

    setEntries((prev) => [newEntry, ...prev]);
    setNoteText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation?.goBack?.()}>
            <Text style={styles.backBtn}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Skin Diary</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{entries.length} logs</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>How does your skin feel?</Text>
          <View style={styles.moodsRow}>
            {MOODS.map((m) => {
              const active = m === selectedMood;
              return (
                <TouchableOpacity
                  key={m}
                  style={[styles.moodChip, active && styles.moodChipActive]}
                  onPress={() => setSelectedMood(m)}
                >
                  <Text style={[styles.moodText, active && styles.moodTextActive]}>
                    {m}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={styles.hydrationHeader}>
            <Text style={styles.sectionTitle}>Comfort / Hydration Score</Text>
            <Text style={styles.hydrationVal}>{hydration}%</Text>
          </View>
          <View style={styles.hydrationRow}>
            {[25, 50, 75, 100].map((val) => (
              <TouchableOpacity
                key={val}
                style={[styles.stepBtn, hydration === val && styles.stepBtnActive]}
                onPress={() => setHydration(val)}
              >
                <Text style={[styles.stepText, hydration === val && styles.whiteText]}>
                  {val}%
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TextInput
            style={styles.input}
            placeholder="Write observations, triggers, or care notes..."
            placeholderTextColor="#8A94A6"
            multiline
            value={noteText}
            onChangeText={setNoteText}
          />

          <TouchableOpacity style={styles.saveBtn} onPress={handleAddEntry}>
            <Text style={styles.saveBtnText}>Save Daily Log</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.listHeading}>Recent Entries</Text>
        {entries.map((entry) => (
          <View key={entry.id} style={styles.logCard}>
            <View style={styles.logTop}>
              <View style={styles.moodTag}>
                <Text style={styles.moodTagText}>{entry.mood}</Text>
              </View>
              <Text style={styles.logMeta}>
                {entry.date} · {entry.hydration}%
              </Text>
            </View>
            <Text style={styles.logNote}>{entry.note}</Text>
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
  badge: {
    backgroundColor: '#CAD6FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: { color: '#2260FF', fontSize: 11, fontWeight: '700' },
  card: {
    backgroundColor: '#EEF2FF',
    borderRadius: 18,
    padding: 14,
    marginBottom: 18,
  },
  sectionTitle: { fontSize: 13, fontWeight: '700', color: '#2260FF', marginBottom: 8 },
  moodsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 12 },
  moodChip: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
  },
  moodChipActive: { backgroundColor: '#2260FF' },
  moodText: { fontSize: 12, fontWeight: '600', color: '#2260FF' },
  moodTextActive: { color: '#FFFFFF' },
  hydrationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hydrationVal: { fontSize: 13, fontWeight: '800', color: '#2260FF' },
  hydrationRow: { flexDirection: 'row', gap: 8, marginBottom: 12 },
  stepBtn: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 7,
    borderRadius: 12,
    alignItems: 'center',
  },
  stepBtnActive: { backgroundColor: '#2260FF' },
  stepText: { fontSize: 12, fontWeight: '600', color: '#2260FF' },
  whiteText: { color: '#FFFFFF' },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 11,
    minHeight: 72,
    fontSize: 12.5,
    color: '#1F2937',
    textAlignVertical: 'top',
  },
  saveBtn: {
    marginTop: 12,
    backgroundColor: '#2260FF',
    paddingVertical: 12,
    borderRadius: 22,
    alignItems: 'center',
  },
  saveBtnText: { color: '#FFFFFF', fontSize: 13.5, fontWeight: '700' },
  listHeading: { fontSize: 15, fontWeight: '700', color: '#1F2937', marginBottom: 10 },
  logCard: {
    backgroundColor: '#F6F8FF',
    borderRadius: 16,
    padding: 12,
    marginBottom: 10,
  },
  logTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  moodTag: {
    backgroundColor: '#CAD6FF',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  moodTagText: { fontSize: 11, fontWeight: '700', color: '#2260FF' },
  logMeta: { fontSize: 11, color: '#6B7280' },
  logNote: { fontSize: 12.5, color: '#374151', lineHeight: 17 },
});
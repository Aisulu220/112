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

export default function ReviewScreen({ navigation, route }: any) {
  const doctorName = route?.params?.doctor || 'Dr. Olivia Turner, M.D.';
  const [stars, setStars] = useState<number>(4);
  const [comment, setComment] = useState<string>('');

  const handleSubmitReview = () => {
    navigation?.goBack?.();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation?.goBack?.()}>
            <Text style={styles.backBtn}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Review</Text>
          <View style={{ width: 20 }} />
        </View>

        <Text style={styles.subtitle}>
          Share your consultation experience and rate the specialist.
        </Text>

        <View style={styles.avatarCircle}>
          <Text style={styles.avatarInitials}>OT</Text>
        </View>

        <Text style={styles.doctorName}>{doctorName}</Text>
        <Text style={styles.specialty}>Dermato-Endocrinology</Text>

        <View style={styles.starsRow}>
          {[1, 2, 3, 4, 5].map((num) => (
            <TouchableOpacity key={num} onPress={() => setStars(num)}>
              <Text style={[styles.starGlyph, num <= stars && styles.starActive]}>
                ★
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TextInput
          style={styles.commentBox}
          placeholder="Write your comment here..."
          placeholderTextColor="#8A94A6"
          multiline
          value={comment}
          onChangeText={setComment}
        />

        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmitReview}>
          <Text style={styles.submitBtnText}>Add Review</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { padding: 16, paddingBottom: 28, alignItems: 'center' },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  backBtn: { fontSize: 20, color: '#2260FF', fontWeight: '700' },
  title: { fontSize: 18, fontWeight: '700', color: '#2260FF' },
  subtitle: {
    fontSize: 12.5,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 16,
  },
  avatarCircle: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: '#CAD6FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  avatarInitials: { fontSize: 26, fontWeight: '800', color: '#2260FF' },
  doctorName: { fontSize: 16, fontWeight: '700', color: '#2260FF' },
  specialty: { fontSize: 12, color: '#4B5563', marginTop: 2 },
  starsRow: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 16,
  },
  starGlyph: { fontSize: 28, color: '#D1D5DB' },
  starActive: { color: '#2260FF' },
  commentBox: {
    width: '100%',
    backgroundColor: '#EEF2FF',
    borderRadius: 16,
    padding: 12,
    minHeight: 110,
    fontSize: 12.5,
    color: '#1F2937',
    textAlignVertical: 'top',
  },
  submitBtn: {
    width: '100%',
    marginTop: 22,
    backgroundColor: '#2260FF',
    paddingVertical: 13,
    borderRadius: 24,
    alignItems: 'center',
  },
  submitBtnText: { color: '#FFFFFF', fontSize: 14, fontWeight: '700' },
});
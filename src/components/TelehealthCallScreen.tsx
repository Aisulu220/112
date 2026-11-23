import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function TelehealthCallScreen({ navigation }: any) {
  const [muted, setMuted] = useState<boolean>(false);
  const [cameraOn, setCameraOn] = useState<boolean>(true);
  const [speakerOn, setSpeakerOn] = useState<boolean>(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation?.goBack?.()}>
          <Text style={styles.backBtn}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.callTimer}>08:42 · HD</Text>
        <View style={{ width: 20 }} />
      </View>

      <View style={styles.centerStage}>
        <View style={styles.avatarRing}>
          <Text style={styles.avatarText}>OT</Text>
        </View>
        <Text style={styles.doctorName}>Dr. Olivia Turner, M.D.</Text>
        <Text style={styles.specialty}>Dermato-Endocrinology Consultation</Text>
        <Text style={styles.statusNote}>
          {cameraOn ? 'Video connected' : 'Audio-only mode'}
        </Text>
      </View>

      <View style={styles.controlsBar}>
        <TouchableOpacity
          style={[styles.ctrlBtn, muted && styles.ctrlBtnActive]}
          onPress={() => setMuted((p) => !p)}
        >
          <Text style={styles.ctrlGlyph}>🎤</Text>
          <Text style={styles.ctrlLabel}>{muted ? 'Muted' : 'Mic'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.ctrlBtn, !cameraOn && styles.ctrlBtnActive]}
          onPress={() => setCameraOn((p) => !p)}
        >
          <Text style={styles.ctrlGlyph}>🎥</Text>
          <Text style={styles.ctrlLabel}>{cameraOn ? 'Camera' : 'Off'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.ctrlBtn, speakerOn && styles.ctrlBtnActive]}
          onPress={() => setSpeakerOn((p) => !p)}
        >
          <Text style={styles.ctrlGlyph}>🔊</Text>
          <Text style={styles.ctrlLabel}>Speaker</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.endCallBtn}
          onPress={() => navigation?.goBack?.()}
        >
          <Text style={styles.endCallText}>End</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2260FF',
    justifyContent: 'space-between',
    padding: 20,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backBtn: { fontSize: 22, color: '#FFFFFF', fontWeight: '700' },
  callTimer: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
    backgroundColor: 'rgba(255,255,255,0.18)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  centerStage: { alignItems: 'center' },
  avatarRing: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: '#CAD6FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarText: { fontSize: 34, fontWeight: '800', color: '#2260FF' },
  doctorName: { fontSize: 20, fontWeight: '700', color: '#FFFFFF' },
  specialty: { fontSize: 13, color: '#DCE6FF', marginTop: 4 },
  statusNote: {
    marginTop: 12,
    fontSize: 12,
    color: '#FFFFFF',
    backgroundColor: 'rgba(0,0,0,0.16)',
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 14,
  },
  controlsBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 14,
    gap: 8,
  },
  ctrlBtn: {
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 14,
    backgroundColor: '#EEF2FF',
  },
  ctrlBtnActive: { backgroundColor: '#CAD6FF' },
  ctrlGlyph: { fontSize: 16 },
  ctrlLabel: { fontSize: 10.5, fontWeight: '600', color: '#2260FF', marginTop: 2 },
  endCallBtn: {
    backgroundColor: '#2260FF',
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderRadius: 18,
  },
  endCallText: { color: '#FFFFFF', fontSize: 13, fontWeight: '700' },
});
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface PaymentOption {
  id: string;
  label: string;
  subtitle: string;
  badge: string;
}

const PAYMENT_OPTIONS: PaymentOption[] = [
  {
    id: 'card',
    label: 'Credit / Debit Card',
    subtitle: '•••• 4829 · Visa / Mastercard',
    badge: 'CARD',
  },
  {
    id: 'wallet',
    label: 'Digital Wallet',
    subtitle: 'Instant mobile payment',
    badge: 'PAY',
  },
  {
    id: 'insurance',
    label: 'Medical Insurance',
    subtitle: 'Covered by active policy',
    badge: 'INS',
  },
  {
    id: 'clinic',
    label: 'Pay at Clinic',
    subtitle: 'Settle at reception desk',
    badge: 'CASH',
  },
];

export default function PaymentMethodsScreen({ navigation }: any) {
  const [selectedId, setSelectedId] = useState<string>('card');
  const [paid, setPaid] = useState<boolean>(false);

  const handlePay = () => {
    setPaid(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation?.goBack?.()}>
            <Text style={styles.backBtn}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Payment Method</Text>
          <View style={{ width: 20 }} />
        </View>

        <View style={styles.totalCard}>
          <Text style={styles.totalLabel}>Consultation Fee</Text>
          <Text style={styles.totalAmount}>15,000 KZT</Text>
          <Text style={styles.totalSub}>Dr. Olivia Turner, M.D. · Dermato-Endocrinology</Text>
        </View>

        <Text style={styles.sectionHeading}>Select Payment Option</Text>

        {PAYMENT_OPTIONS.map((opt) => {
          const active = opt.id === selectedId;
          return (
            <TouchableOpacity
              key={opt.id}
              activeOpacity={0.85}
              style={[styles.optionCard, active && styles.optionCardActive]}
              onPress={() => {
                setSelectedId(opt.id);
                setPaid(false);
              }}
            >
              <View style={styles.leftBadge}>
                <Text style={styles.leftBadgeText}>{opt.badge}</Text>
              </View>

              <View style={styles.optionInfo}>
                <Text style={styles.optionTitle}>{opt.label}</Text>
                <Text style={styles.optionSub}>{opt.subtitle}</Text>
              </View>

              <View style={[styles.radioOuter, active && styles.radioOuterActive]}>
                {active && <View style={styles.radioInner} />}
              </View>
            </TouchableOpacity>
          );
        })}

        {paid && (
          <View style={styles.statusBanner}>
            <Text style={styles.statusBannerText}>
              Payment method selected and confirmed.
            </Text>
          </View>
        )}

        <TouchableOpacity style={styles.primaryBtn} onPress={handlePay}>
          <Text style={styles.primaryBtnText}>
            {paid ? 'Confirmed' : 'Confirm Payment'}
          </Text>
        </TouchableOpacity>
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
  totalCard: {
    backgroundColor: '#2260FF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 18,
  },
  totalLabel: { color: '#DCE6FF', fontSize: 12, fontWeight: '600' },
  totalAmount: { color: '#FFFFFF', fontSize: 24, fontWeight: '800', marginVertical: 4 },
  totalSub: { color: '#E8EEFF', fontSize: 12 },
  sectionHeading: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 10,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2FF',
    borderRadius: 16,
    padding: 12,
    marginBottom: 10,
    gap: 12,
  },
  optionCardActive: {
    backgroundColor: '#E1EAFF',
    borderWidth: 1,
    borderColor: '#2260FF',
  },
  leftBadge: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#CAD6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftBadgeText: { color: '#2260FF', fontSize: 11, fontWeight: '800' },
  optionInfo: { flex: 1 },
  optionTitle: { fontSize: 13.5, fontWeight: '700', color: '#1F2937' },
  optionSub: { fontSize: 11.5, color: '#4B5563', marginTop: 2 },
  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#2260FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterActive: { borderColor: '#2260FF' },
  radioInner: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    backgroundColor: '#2260FF',
  },
  statusBanner: {
    backgroundColor: '#CAD6FF',
    borderRadius: 14,
    padding: 12,
    marginTop: 6,
  },
  statusBannerText: { color: '#2260FF', fontSize: 12.5, fontWeight: '700', textAlign: 'center' },
  primaryBtn: {
    marginTop: 18,
    backgroundColor: '#2260FF',
    paddingVertical: 13,
    borderRadius: 24,
    alignItems: 'center',
  },
  primaryBtnText: { color: '#FFFFFF', fontSize: 14, fontWeight: '700' },
});
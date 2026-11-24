
import React from 'react';
import { View, Text } from 'react-native';
import { appointmentStyles as styles } from '../styles/appointmentStyles';

type Props = {
  label: string;
  value: string;
};

export default function DetailRow({
  label,
  value,
}: Props) {
  return (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
}

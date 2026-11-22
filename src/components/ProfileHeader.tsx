
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  title: string;
  onBack?: () => void;
};

export default function ProfileHeader({ title, onBack }: Props) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBack} style={styles.back}>
        <Ionicons name="chevron-back" size={25} color="#365FF5" />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <View style={{ width: 35 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  back: {
    width: 35,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#365FF5',
  },
});

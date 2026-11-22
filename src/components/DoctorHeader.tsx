
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  title: string;
  onBack?: () => void;
};

export default function DoctorHeader({ title, onBack }: Props) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBack} style={styles.back}>
        <Ionicons name="chevron-back" size={25} color="#365FF5" />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.actions}>
        <TouchableOpacity>
          <Ionicons name="help-circle-outline" size={21} color="#365FF5" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={21} color="#365FF5" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  back: {
    width: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#365FF5',
  },
  actions: {
    width: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

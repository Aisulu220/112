
import React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { additionalStyles as styles } from '../styles/additionalStyles';

type Props = {
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
};

export default function SearchBar({
  value,
  onChangeText,
  placeholder = 'Search doctors...',
}: Props) {
  return (
    <View style={styles.searchBox}>
      <Ionicons name="search" size={20} color="#3561F5" />
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor="#8993AA"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  selected: string;
  onSelect: (value: string) => void;
};

const filters = ['A–Z', '⭐', '♥', '♀', '♂'];

export default function DoctorFilter({ selected, onSelect }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sort By:</Text>

      {filters.map((filter) => (
        <TouchableOpacity
          key={filter}
          onPress={() => onSelect(filter)}
          style={[
            styles.filter,
            selected === filter && styles.active,
          ]}
        >
          <Text
            style={[
              styles.text,
              selected === filter && styles.activeText,
            ]}
          >
            {filter}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingHorizontal: 17,
    paddingVertical: 9,
  },
  label: {
    color: '#777F9A',
    fontSize: 11,
  },
  filter: {
    width: 27,
    height: 23,
    borderRadius: 12,
    backgroundColor: '#E5EAFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#365FF5',
  },
  text: {
    fontSize: 10,
    color: '#7588D0',
  },
  activeText: {
    color: '#FFFFFF',
  },
});

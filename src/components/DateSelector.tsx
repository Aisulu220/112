import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const dates = [
  { day: '9', name: 'MON' },
  { day: '10', name: 'TUE' },
  { day: '11', name: 'WED' },
  { day: '12', name: 'THU' },
  { day: '13', name: 'FRI' },
  { day: '14', name: 'SAT' },
];

type Props = {
  selectedDate: string;
  onSelect: (day: string) => void;
};

export default function DateSelector({ selectedDate, onSelect }: Props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {dates.map((date) => {
          const selected = selectedDate === date.day;

          return (
            <TouchableOpacity
              key={date.day}
              onPress={() => onSelect(date.day)}
              style={[styles.date, selected && styles.active]}
            >
              <Text style={[styles.number, selected && styles.white]}>
                {date.day}
              </Text>
              <Text style={[styles.name, selected && styles.white]}>
                {date.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 9,
  },
  date: {
    width: 48,
    height: 62,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#365FF5',
  },
  number: {
    fontSize: 17,
    fontWeight: '700',
    color: '#202A44',
  },
  name: {
    fontSize: 10,
    color: '#59647C',
    marginTop: 3,
  },
  white: {
    color: '#FFFFFF',
  },
});
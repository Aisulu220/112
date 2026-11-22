import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  color?: string;
};

export default function Logo({ color = '#3561F6' }: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.icon, { color }]}>✿</Text>

      <Text style={[styles.title, { color }]}>
        Skin{"\n"}Firts
      </Text>

      <Text style={[styles.subtitle, { color }]}>
        Dermatology Center
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  icon: {
    fontSize: 65,
    lineHeight: 75,
  },
  title: {
    fontSize: 19,
    textAlign: 'center',
    lineHeight: 20,
    fontWeight: '300',
  },
  subtitle: {
    fontSize: 6,
    marginTop: 5,
  },
});
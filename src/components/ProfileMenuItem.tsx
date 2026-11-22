
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

type Props = {
  title: string;
  icon: any;
  onPress: () => void;
};

export default function ProfileMenuItem({
  title,
  icon,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.left}>
        <View style={styles.iconBox}>
          <Ionicons name={icon} size={20} color="#6488FF" />
        </View>

        <Text style={styles.title}>{title}</Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={19}
        color="#B7C8FF"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 17,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBox: {
    width: 29,
    height: 29,
    borderRadius: 16,
    backgroundColor: '#E1E8FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 13,
    color: '#333D59',
    fontWeight: '500',
  },
});

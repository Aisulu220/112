import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  doctor: any;
  isFavorite: boolean;
  onFavorite: () => void;
};

export default function DoctorCard({
  doctor,
  isFavorite,
  onFavorite,
}: Props) {
  return (
    <View style={styles.card}>
      <View style={[styles.avatar, { backgroundColor: doctor.color }]}>
        <Text style={styles.avatarText}>{doctor.avatar}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {doctor.name}
        </Text>

        <Text style={styles.specialty}>
          {doctor.specialty}
        </Text>

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Ionicons name="star" size={12} color="#FFFFFF" />
            <Text style={styles.statText}>{doctor.rating}</Text>
          </View>

          <View style={styles.stat}>
            <Ionicons name="chatbubble-outline" size={12} color="#FFFFFF" />
            <Text style={styles.statText}>{doctor.reviews}</Text>
          </View>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons
            name="help-circle-outline"
            size={20}
            color="#365FF5"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={onFavorite}
        >
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={20}
            color={isFavorite ? '#365FF5' : '#8C9BC4'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 78,
    backgroundColor: '#D1DAFF',
    borderRadius: 19,
    marginBottom: 9,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 51,
    height: 51,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  info: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 7,
  },
  name: {
    fontSize: 11,
    fontWeight: '700',
    color: '#3658B9',
  },
  specialty: {
    fontSize: 9,
    color: '#7A8194',
    marginTop: 2,
  },
  stats: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 4,
  },
  stat: {
    backgroundColor: '#9CB4FF',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  statText: {
    color: '#FFFFFF',
    fontSize: 9,
  },
  actions: {
    gap: 7,
  },
  actionButton: {
    width: 23,
    height: 23,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
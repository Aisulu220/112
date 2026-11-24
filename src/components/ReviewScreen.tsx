
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Appointment } from '../types/appointment';
import { appointmentStyles as styles } from '../styles/appointmentStyles';

type Props = {
  appointment: Appointment;
  rating: number;
  review: string;
  onRatingChange: (value: number) => void;
  onReviewChange: (value: string) => void;
  onSubmit: () => void;
  onBack: () => void;
};

export default function ReviewScreen({
  appointment,
  rating,
  review,
  onRatingChange,
  onReviewChange,
  onSubmit,
  onBack,
}: Props) {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Ionicons name="chevron-back" size={25} color="#3561F5" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Review</Text>
      </View>

      <ScrollView contentContainerStyle={styles.reviewContent}>
        <View style={styles.reviewDoctor}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {appointment.initials}
            </Text>
          </View>

          <Text style={styles.reviewDoctorName}>
            {appointment.doctor}
          </Text>

          <Text style={styles.specialty}>
            {appointment.specialty}
          </Text>

          <View style={styles.ratingStars}>
            {[1, 2, 3, 4, 5].map(star => (
              <TouchableOpacity
                key={star}
                onPress={() => onRatingChange(star)}
              >
                <Ionicons
                  name={star <= rating ? 'star' : 'star-outline'}
                  size={31}
                  color="#3561F5"
                />
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.ratingText}>
            {rating} out of 5 stars
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Your Review</Text>

        <TextInput
          style={styles.reviewInput}
          placeholder="Enter Your Comment Here..."
          placeholderTextColor="#A7B3D5"
          multiline
          textAlignVertical="top"
          value={review}
          onChangeText={onReviewChange}
        />

        <TouchableOpacity
          style={styles.fullButton}
          onPress={onSubmit}
        >
          <Text style={styles.primaryButtonText}>
            Add Review
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

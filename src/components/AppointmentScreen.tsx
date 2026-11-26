import React, { useState } from 'react';

import {
  View,
  Text,
  ScrollView,
  Alert,
  StatusBar,
} from 'react-native';

import {
  Appointment,
  AppointmentStatus,
  AppointmentScreenType,
} from '../types/appointment';

import { initialAppointments } from '../data/appointments';

import AppointmentCard from '../components/AppointmentCard';
import AppointmentTabs from '../components/AppointmentTabs';
import BottomNavigation from '../components/BottomNavigation';

import AppointmentDetailsScreen from './AppointmentDetailsScreen';
import CancelAppointmentScreen from './CancelAppointmentScreen';
import ReviewScreen from './ReviewScreen';

import { appointmentStyles as styles } from '../styles/appointmentStyles';

export default function AppointmentScreen() {
  const [appointments, setAppointments] =
    useState<Appointment[]>(initialAppointments);

  const [activeTab, setActiveTab] =
    useState<AppointmentStatus>('Complete');

  const [currentScreen, setCurrentScreen] =
    useState<AppointmentScreenType>('list');

  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);

  const [cancelReason, setCancelReason] = useState('');
  const [cancelComment, setCancelComment] = useState('');

  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);

  const filteredAppointments = appointments.filter(
    (item) => item.status === activeTab
  );

  // OPEN SCREEN
  const openScreen = (
    screen: AppointmentScreenType,
    appointment: Appointment
  ) => {
    setSelectedAppointment(appointment);
    setCurrentScreen(screen);
  };

  // GO BACK
  const goBack = () => {
    setCurrentScreen('list');
    setCancelReason('');
    setCancelComment('');
    setReviewText('');
  };

  // RE-BOOK
  const handleRebook = (appointment: Appointment) => {
    setAppointments((previous) =>
      previous.map((item) =>
        item.id === appointment.id
          ? { ...item, status: 'Upcoming' }
          : item
      )
    );

    setActiveTab('Upcoming');

    Alert.alert(
      'Successful',
      'Appointment moved to Upcoming.'
    );
  };

  // CANCEL
  const handleCancel = () => {
    if (!cancelReason) {
      Alert.alert(
        'Required',
        'Please select a cancellation reason.'
      );
      return;
    }

    if (!selectedAppointment) return;

    setAppointments((previous) =>
      previous.map((item) =>
        item.id === selectedAppointment.id
          ? { ...item, status: 'Cancelled' }
          : item
      )
    );

    setActiveTab('Cancelled');
    setCurrentScreen('list');

    setCancelReason('');
    setCancelComment('');

    Alert.alert(
      'Appointment Cancelled',
      'Your appointment has been cancelled successfully.'
    );
  };

  // REVIEW
  const handleReview = () => {
    if (!reviewText.trim()) {
      Alert.alert(
        'Required',
        'Please write your review.'
      );
      return;
    }

    Alert.alert(
      'Thank You!',
      `Your ${rating}-star review has been submitted.`,
      [
        {
          text: 'OK',
          onPress: goBack,
        },
      ]
    );
  };

  // APPOINTMENT LIST
  const renderList = () => (
    <>
      <View style={styles.header}>
        <Text style={styles.screenTitle}>
          All Appointment
        </Text>
      </View>

      <AppointmentTabs
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      >
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((item) => (
            <AppointmentCard
              key={item.id}
              item={item}
              onRebook={handleRebook}
              onDetails={(appointment: Appointment) =>
                openScreen('details', appointment)
              }
              onCancel={(appointment: Appointment) =>
                openScreen('cancel', appointment)
              }
              onReview={(appointment: Appointment) =>
                openScreen('review', appointment)
              }
            />
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>
              No Appointments
            </Text>

            <Text style={styles.emptyText}>
              There are no {activeTab.toLowerCase()} appointments.
            </Text>
          </View>
        )}
      </ScrollView>
    </>
  );

  // SCREEN CONTENT
  const renderContent = () => {
    if (!selectedAppointment && currentScreen !== 'list') {
      return renderList();
    }

    switch (currentScreen) {
      case 'details':
        return (
          <AppointmentDetailsScreen
            appointment={selectedAppointment!}
            onBack={goBack}
            onCancel={() => setCurrentScreen('cancel')}
          />
        );

      case 'cancel':
        return (
          <CancelAppointmentScreen
            reason={cancelReason}
            comment={cancelComment}
            onReasonChange={setCancelReason}
            onCommentChange={setCancelComment}
            onConfirm={handleCancel}
            onBack={goBack}
          />
        );

      case 'review':
        return (
          <ReviewScreen
            appointment={selectedAppointment!}
            rating={rating}
            review={reviewText}
            onRatingChange={setRating}
            onReviewChange={setReviewText}
            onSubmit={handleReview}
            onBack={goBack}
          />
        );

      default:
        return renderList();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={{ flex: 1 }}>
        {renderContent()}
      </View>

      <BottomNavigation
        activeTab="Calendar"
        onHome={() =>
          Alert.alert('Home', 'Home screen')
        }
        onChat={() =>
          Alert.alert('Chat', 'Chat screen')
        }
        onProfile={() =>
          Alert.alert('Profile', 'Profile screen')
        }
        onAppointment={() => {
          setCurrentScreen('list');
          setSelectedAppointment(null);
        }}
      />
    </View>
  );
}
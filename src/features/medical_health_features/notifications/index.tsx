      import React from 'react';
      import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
      import { styles } from './styles';
      import type { NotificationsScreenProps, NotificationsItem } from './types';

      const sections: NotificationsItem[] = [
        { id: '1', title: 'Appointment reminder', description: 'Open this section to view and manage your appointment reminder information.' },
{ id: '2', title: 'New message', description: 'Open this section to view and manage your new message information.' },
{ id: '3', title: 'Test result available', description: 'Open this section to view and manage your test result available information.' }
      ];

      export default function NotificationsScreen({ onBack }: NotificationsScreenProps) {
        return (
          <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.header}>
              {onBack ? (
                <TouchableOpacity onPress={onBack} style={styles.backButton} accessibilityRole="button">
                  <Text style={styles.backText}>‹ Back</Text>
                </TouchableOpacity>
              ) : null}
              <Text style={styles.title}>Notifications</Text>
              <Text style={styles.subtitle}>View important health reminders</Text>
            </View>

            {sections.map((item) => (
              <View key={item.id} style={styles.card}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
              </View>
            ))}

            <Text style={styles.footer}>
              This module is a starter interface. Connect it to your app navigation and your verified backend data.
            </Text>
          </ScrollView>
        );
      }

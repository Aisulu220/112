      import React from 'react';
      import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
      import { styles } from './styles';
      import type { HealthTrackingScreenProps, HealthTrackingItem } from './types';

      const sections: HealthTrackingItem[] = [
        { id: '1', title: 'Water intake', description: 'Open this section to view and manage your water intake information.' },
{ id: '2', title: 'Sleep', description: 'Open this section to view and manage your sleep information.' },
{ id: '3', title: 'Activity', description: 'Open this section to view and manage your activity information.' }
      ];

      export default function HealthTrackingScreen({ onBack }: HealthTrackingScreenProps) {
        return (
          <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.header}>
              {onBack ? (
                <TouchableOpacity onPress={onBack} style={styles.backButton} accessibilityRole="button">
                  <Text style={styles.backText}>‹ Back</Text>
                </TouchableOpacity>
              ) : null}
              <Text style={styles.title}>Health Tracking</Text>
              <Text style={styles.subtitle}>Record everyday health measurements</Text>
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

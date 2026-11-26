      import React from 'react';
      import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
      import { styles } from './styles';
      import type { WellnessScreenProps, WellnessItem } from './types';

      const sections: WellnessItem[] = [
        { id: '1', title: 'Daily wellness', description: 'Open this section to view and manage your daily wellness information.' },
{ id: '2', title: 'Sleep routine', description: 'Open this section to view and manage your sleep routine information.' },
{ id: '3', title: 'Mindfulness', description: 'Open this section to view and manage your mindfulness information.' }
      ];

      export default function WellnessScreen({ onBack }: WellnessScreenProps) {
        return (
          <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.header}>
              {onBack ? (
                <TouchableOpacity onPress={onBack} style={styles.backButton} accessibilityRole="button">
                  <Text style={styles.backText}>‹ Back</Text>
                </TouchableOpacity>
              ) : null}
              <Text style={styles.title}>Wellness</Text>
              <Text style={styles.subtitle}>Build healthy everyday habits</Text>
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

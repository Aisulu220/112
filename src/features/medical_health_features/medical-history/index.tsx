      import React from 'react';
      import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
      import { styles } from './styles';
      import type { MedicalHistoryScreenProps, MedicalHistoryItem } from './types';

      const sections: MedicalHistoryItem[] = [
        { id: '1', title: 'Allergies', description: 'Open this section to view and manage your allergies information.' },
{ id: '2', title: 'Previous conditions', description: 'Open this section to view and manage your previous conditions information.' },
{ id: '3', title: 'Past procedures', description: 'Open this section to view and manage your past procedures information.' }
      ];

      export default function MedicalHistoryScreen({ onBack }: MedicalHistoryScreenProps) {
        return (
          <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.header}>
              {onBack ? (
                <TouchableOpacity onPress={onBack} style={styles.backButton} accessibilityRole="button">
                  <Text style={styles.backText}>‹ Back</Text>
                </TouchableOpacity>
              ) : null}
              <Text style={styles.title}>Medical History</Text>
              <Text style={styles.subtitle}>Keep a record of your health history</Text>
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

      import React from 'react';
      import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
      import { styles } from './styles';
      import type { DiagnosisScreenProps, DiagnosisItem } from './types';

      const sections: DiagnosisItem[] = [
        { id: '1', title: 'Diagnosis overview', description: 'Open this section to view and manage your diagnosis overview information.' },
{ id: '2', title: 'Clinical notes', description: 'Open this section to view and manage your clinical notes information.' },
{ id: '3', title: 'Follow-up advice', description: 'Open this section to view and manage your follow-up advice information.' }
      ];

      export default function DiagnosisScreen({ onBack }: DiagnosisScreenProps) {
        return (
          <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.header}>
              {onBack ? (
                <TouchableOpacity onPress={onBack} style={styles.backButton} accessibilityRole="button">
                  <Text style={styles.backText}>‹ Back</Text>
                </TouchableOpacity>
              ) : null}
              <Text style={styles.title}>Diagnosis</Text>
              <Text style={styles.subtitle}>Review diagnoses shared by your clinician</Text>
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

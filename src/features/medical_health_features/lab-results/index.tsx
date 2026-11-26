      import React from 'react';
      import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
      import { styles } from './styles';
      import type { LabResultsScreenProps, LabResultsItem } from './types';

      const sections: LabResultsItem[] = [
        { id: '1', title: 'Recent results', description: 'Open this section to view and manage your recent results information.' },
{ id: '2', title: 'Previous tests', description: 'Open this section to view and manage your previous tests information.' },
{ id: '3', title: 'Result details', description: 'Open this section to view and manage your result details information.' }
      ];

      export default function LabResultsScreen({ onBack }: LabResultsScreenProps) {
        return (
          <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.header}>
              {onBack ? (
                <TouchableOpacity onPress={onBack} style={styles.backButton} accessibilityRole="button">
                  <Text style={styles.backText}>‹ Back</Text>
                </TouchableOpacity>
              ) : null}
              <Text style={styles.title}>Lab Results</Text>
              <Text style={styles.subtitle}>Review your laboratory test records</Text>
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

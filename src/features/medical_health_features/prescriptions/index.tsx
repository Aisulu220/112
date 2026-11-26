      import React from 'react';
      import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
      import { styles } from './styles';
      import type { PrescriptionsScreenProps, PrescriptionsItem } from './types';

      const sections: PrescriptionsItem[] = [
        { id: '1', title: 'Current prescriptions', description: 'Open this section to view and manage your current prescriptions information.' },
{ id: '2', title: 'Dosage schedule', description: 'Open this section to view and manage your dosage schedule information.' },
{ id: '3', title: 'Prescription history', description: 'Open this section to view and manage your prescription history information.' }
      ];

      export default function PrescriptionsScreen({ onBack }: PrescriptionsScreenProps) {
        return (
          <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.header}>
              {onBack ? (
                <TouchableOpacity onPress={onBack} style={styles.backButton} accessibilityRole="button">
                  <Text style={styles.backText}>‹ Back</Text>
                </TouchableOpacity>
              ) : null}
              <Text style={styles.title}>Prescriptions</Text>
              <Text style={styles.subtitle}>Keep track of prescribed medicines</Text>
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

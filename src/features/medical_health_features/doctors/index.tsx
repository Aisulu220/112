      import React from 'react';
      import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
      import { styles } from './styles';
      import type { DoctorsScreenProps, DoctorsItem } from './types';

      const sections: DoctorsItem[] = [
        { id: '1', title: 'Dermatologist', description: 'Open this section to view and manage your dermatologist information.' },
{ id: '2', title: 'Cardiologist', description: 'Open this section to view and manage your cardiologist information.' },
{ id: '3', title: 'General practitioner', description: 'Open this section to view and manage your general practitioner information.' }
      ];

      export default function DoctorsScreen({ onBack }: DoctorsScreenProps) {
        return (
          <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.header}>
              {onBack ? (
                <TouchableOpacity onPress={onBack} style={styles.backButton} accessibilityRole="button">
                  <Text style={styles.backText}>‹ Back</Text>
                </TouchableOpacity>
              ) : null}
              <Text style={styles.title}>Doctors</Text>
              <Text style={styles.subtitle}>Browse and save doctors</Text>
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

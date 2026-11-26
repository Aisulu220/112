      import React from 'react';
      import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
      import { styles } from './styles';
      import type { PharmaciesScreenProps, PharmaciesItem } from './types';

      const sections: PharmaciesItem[] = [
        { id: '1', title: 'Pharmacy directory', description: 'Open this section to view and manage your pharmacy directory information.' },
{ id: '2', title: 'Opening hours', description: 'Open this section to view and manage your opening hours information.' },
{ id: '3', title: 'Contact pharmacy', description: 'Open this section to view and manage your contact pharmacy information.' }
      ];

      export default function PharmaciesScreen({ onBack }: PharmaciesScreenProps) {
        return (
          <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.header}>
              {onBack ? (
                <TouchableOpacity onPress={onBack} style={styles.backButton} accessibilityRole="button">
                  <Text style={styles.backText}>‹ Back</Text>
                </TouchableOpacity>
              ) : null}
              <Text style={styles.title}>Pharmacies</Text>
              <Text style={styles.subtitle}>Browse pharmacy information</Text>
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

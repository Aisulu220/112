      import React from 'react';
      import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
      import { styles } from './styles';
      import type { ChatScreenProps, ChatItem } from './types';

      const sections: ChatItem[] = [
        { id: '1', title: 'Doctor messages', description: 'Open this section to view and manage your doctor messages information.' },
{ id: '2', title: 'Support', description: 'Open this section to view and manage your support information.' },
{ id: '3', title: 'Conversation history', description: 'Open this section to view and manage your conversation history information.' }
      ];

      export default function ChatScreen({ onBack }: ChatScreenProps) {
        return (
          <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.header}>
              {onBack ? (
                <TouchableOpacity onPress={onBack} style={styles.backButton} accessibilityRole="button">
                  <Text style={styles.backText}>‹ Back</Text>
                </TouchableOpacity>
              ) : null}
              <Text style={styles.title}>Chat</Text>
              <Text style={styles.subtitle}>Messages with your care team</Text>
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

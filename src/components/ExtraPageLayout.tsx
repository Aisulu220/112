
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  SafeAreaView,
} from 'react-native';

type Props = {
  navigation: any;
  title: string;
  subtitle: string;
  icon: string;
  sections: {
    title: string;
    items: string[];
  }[];
  buttonText?: string;
};

export default function ExtraPageLayout({
  navigation,
  title,
  subtitle,
  icon,
  sections,
  buttonText = 'Save Information',
}: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const [note, setNote] = useState('');

  const toggleItem = (item: string) => {
    setSelected(previous =>
      previous.includes(item)
        ? previous.filter(value => value !== item)
        : [...previous, item]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{title}</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <Text style={styles.icon}>{icon}</Text>
          <Text style={styles.heroTitle}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>

        {sections.map((section, index) => (
          <View style={styles.card} key={index}>
            <Text style={styles.sectionTitle}>
              {section.title}
            </Text>

            {section.items.map((item, itemIndex) => {
              const active = selected.includes(item);

              return (
                <TouchableOpacity
                  key={itemIndex}
                  style={styles.item}
                  onPress={() => toggleItem(item)}
                >
                  <View
                    style={[
                      styles.checkbox,
                      active && styles.activeCheckbox,
                    ]}
                  >
                    {active && (
                      <Text style={styles.check}>✓</Text>
                    )}
                  </View>

                  <Text style={styles.itemText}>{item}</Text>
                  <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Additional Notes</Text>
          <TextInput
            style={styles.input}
            placeholder="Write your notes..."
            multiline
            value={note}
            onChangeText={setNote}
            placeholderTextColor="#9AA5B5"
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Alert.alert(
              'Success',
              `${title} information saved!`
            )
          }
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FC',
  },
  header: {
    height: 60,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E9EDF4',
  },
  backButton: {
    width: 40,
  },
  backText: {
    fontSize: 36,
    color: '#2864E8',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#192B4D',
  },
  content: {
    padding: 18,
  },
  hero: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 18,
  },
  icon: {
    fontSize: 45,
    marginBottom: 12,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#192B4D',
  },
  subtitle: {
    fontSize: 13,
    color: '#8995A8',
    marginTop: 8,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 17,
    borderRadius: 18,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#192B4D',
    marginBottom: 12,
  },
  item: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F2F6',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: '#C5CEDB',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeCheckbox: {
    backgroundColor: '#2864E8',
    borderColor: '#2864E8',
  },
  check: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  itemText: {
    flex: 1,
    fontSize: 14,
    color: '#46556D',
  },
  arrow: {
    fontSize: 22,
    color: '#A4ADBA',
  },
  input: {
    minHeight: 100,
    backgroundColor: '#F6F8FC',
    borderRadius: 12,
    padding: 14,
    textAlignVertical: 'top',
    color: '#192B4D',
  },
  button: {
    height: 54,
    backgroundColor: '#2864E8',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});

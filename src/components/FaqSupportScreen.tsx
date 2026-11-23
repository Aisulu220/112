import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: '1',
    question: 'How do I reschedule or cancel an appointment?',
    answer: 'Open the Upcoming tab in Appointments and tap Reschedule or Cancel.',
  },
  {
    id: '2',
    question: 'Can I message my doctor after a consultation?',
    answer: 'Yes, you can send messages or voice notes directly in the Chat screen.',
  },
  {
    id: '3',
    question: 'Where can I view my lab test notes?',
    answer: 'All clinical reports and test summaries are available under Lab Results.',
  },
];

export default function FaqSupportScreen({ navigation }: any) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openId, setOpenId] = useState<string | null>('1');

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation?.goBack?.()}>
            <Text style={styles.backBtn}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.title}>FAQ & Support</Text>
          <View style={{ width: 20 }} />
        </View>

        <TextInput
          style={styles.searchInput}
          placeholder="Search help topics..."
          placeholderTextColor="#8A94A6"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <TouchableOpacity
              key={faq.id}
              activeOpacity={0.85}
              style={styles.faqCard}
              onPress={() => setOpenId(isOpen ? null : faq.id)}
            >
              <View style={styles.faqHeader}>
                <Text style={styles.faqQuestion}>{faq.question}</Text>
                <Text style={styles.faqPlus}>{isOpen ? '−' : '+'}</Text>
              </View>
              {isOpen && <Text style={styles.faqAnswer}>{faq.answer}</Text>}
            </TouchableOpacity>
          );
        })}

        <View style={styles.supportBox}>
          <Text style={styles.supportTitle}>Need Direct Assistance?</Text>
          <Text style={styles.supportSub}>
            Our care coordinators are ready to help with appointments and billing.
          </Text>
          <TouchableOpacity
            style={styles.supportBtn}
            onPress={() => navigation?.navigate?.('Chat')}
          >
            <Text style={styles.supportBtnText}>Message Support</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { padding: 16, paddingBottom: 28 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  backBtn: { fontSize: 20, fontWeight: '700', color: '#2260FF' },
  title: { fontSize: 18, fontWeight: '700', color: '#2260FF' },
  searchInput: {
    backgroundColor: '#EEF2FF',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 13,
    color: '#1F2937',
    marginBottom: 14,
  },
  faqCard: {
    backgroundColor: '#F6F8FF',
    borderRadius: 16,
    padding: 13,
    marginBottom: 10,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  faqQuestion: { flex: 1, fontSize: 13.5, fontWeight: '700', color: '#1F2937' },
  faqPlus: { fontSize: 18, fontWeight: '700', color: '#2260FF' },
  faqAnswer: {
    marginTop: 8,
    fontSize: 12.5,
    color: '#4B5563',
    lineHeight: 18,
  },
  supportBox: {
    marginTop: 12,
    backgroundColor: '#EEF2FF',
    borderRadius: 18,
    padding: 16,
  },
  supportTitle: { fontSize: 14.5, fontWeight: '700', color: '#2260FF' },
  supportSub: { fontSize: 12.5, color: '#374151', marginTop: 4, lineHeight: 18 },
  supportBtn: {
    marginTop: 12,
    backgroundColor: '#2260FF',
    paddingVertical: 11,
    borderRadius: 20,
    alignItems: 'center',
  },
  supportBtnText: { color: '#FFFFFF', fontSize: 13, fontWeight: '700' },
});
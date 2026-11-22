import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Linking,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const BLUE = '#365FF5';
const LIGHT_BLUE = '#EDF1FF';
const DARK = '#34446D';
const GRAY = '#8996BA';

const questions = [
  {
    id: 1,
    question: 'How can I book an appointment?',
    answer:
      'Open the Doctors section, select your preferred doctor and choose an available appointment time.',
    category: 'General',
  },
  {
    id: 2,
    question: 'How can I change my profile?',
    answer:
      'Open My Profile, select Profile and update your personal information.',
    category: 'General',
  },
  {
    id: 3,
    question: 'How can I cancel an appointment?',
    answer:
      'Open your appointment details and select the available cancellation option.',
    category: 'Services',
  },
  {
    id: 4,
    question: 'How can I change my password?',
    answer:
      'Go to Settings, open Password Manager and follow the password change instructions.',
    category: 'Account',
  },
  {
    id: 5,
    question: 'How can I contact support?',
    answer:
      'Open Contact Us to find the available customer support channels.',
    category: 'Services',
  },
  {
    id: 6,
    question: 'How can I add a doctor to Favorites?',
    answer:
      'Tap the heart icon on the doctor card to save that doctor to your Favorites.',
    category: 'General',
  },
  {
    id: 7,
    question: 'How can I receive notifications?',
    answer:
      'Open Settings and configure your Notification Settings.',
    category: 'Account',
  },
  {
    id: 8,
    question: 'How can I update my phone number?',
    answer:
      'Go to My Profile, select Profile and update your phone number.',
    category: 'Account',
  },
];

const categories = ['All', 'General', 'Account', 'Services'];

export default function HelpCenterScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState('FAQ');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<number | null>(1);

  const filteredQuestions = questions.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' ||
      item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const openContact = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.log('Unable to open link:', error);
    }
  };

  const contactItems = [
    {
      title: 'Customer Service',
      subtitle: 'Contact our support team',
      icon: 'headset-outline',
      url: 'mailto:support@example.com',
    },
    {
      title: 'Website',
      subtitle: 'Visit our website',
      icon: 'globe-outline',
      url: 'https://example.com',
    },
    {
      title: 'WhatsApp',
      subtitle: 'Chat with our support',
      icon: 'logo-whatsapp',
      url: 'https://wa.me/',
    },
    {
      title: 'Facebook',
      subtitle: 'Follow our Facebook page',
      icon: 'logo-facebook',
      url: 'https://facebook.com',
    },
    {
      title: 'Instagram',
      subtitle: 'Follow our Instagram page',
      icon: 'logo-instagram',
      url: 'https://instagram.com',
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar
        barStyle="dark-content"
      />

      <View style={styles.container}>

        {/* HEADER */}

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons
              name="chevron-back"
              size={23}
              color={BLUE}
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Help Center
          </Text>

          <View style={styles.headerRight} />
        </View>

        <Text style={styles.subtitle}>
          How Can We Help You?
        </Text>

        {/* SEARCH */}

        <View style={styles.searchBox}>
          <Ionicons
            name="search-outline"
            size={20}
            color={BLUE}
          />

          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor={GRAY}
            value={search}
            onChangeText={setSearch}
          />

          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch('')}>
              <Ionicons
                name="close-circle"
                size={19}
                color={GRAY}
              />
            </TouchableOpacity>
          )}
        </View>

        {/* TABS */}

        <View style={styles.tabs}>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === 'FAQ' && styles.activeTab,
            ]}
            onPress={() => setActiveTab('FAQ')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'FAQ' && styles.activeTabText,
              ]}
            >
              FAQ
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === 'Contact Us' && styles.activeTab,
            ]}
            onPress={() => setActiveTab('Contact Us')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'Contact Us' && styles.activeTabText,
              ]}
            >
              Contact Us
            </Text>
          </TouchableOpacity>
        </View>

        {/* FAQ CONTENT */}

        {activeTab === 'FAQ' ? (

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >

            <Text style={styles.sectionTitle}>
              Popular Topic
            </Text>

            {/* CATEGORY FILTER */}

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categories}
            >
              {categories.map((item) => (
                <TouchableOpacity
                  key={item}
                  onPress={() => setSelectedCategory(item)}
                  style={[
                    styles.categoryButton,
                    selectedCategory === item &&
                      styles.categoryActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      selectedCategory === item &&
                        styles.categoryActiveText,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <Text style={styles.sectionTitle}>
              Frequently Asked Questions
            </Text>

            {/* QUESTIONS */}

            {filteredQuestions.map((item) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.8}
                onPress={() =>
                  setExpanded(
                    expanded === item.id ? null : item.id
                  )
                }
                style={styles.questionCard}
              >

                <View style={styles.questionHeader}>
                  <Text style={styles.questionText}>
                    {item.question}
                  </Text>

                  <Ionicons
                    name={
                      expanded === item.id
                        ? 'chevron-up'
                        : 'chevron-down'
                    }
                    size={19}
                    color={BLUE}
                  />
                </View>

                {expanded === item.id && (
                  <View style={styles.answerContainer}>
                    <View style={styles.answerLine} />

                    <Text style={styles.answerText}>
                      {item.answer}
                    </Text>
                  </View>
                )}

              </TouchableOpacity>
            ))}

            {filteredQuestions.length === 0 && (
              <View style={styles.emptyContainer}>
                <Ionicons
                  name="search-outline"
                  size={40}
                  color="#B5C5FF"
                />

                <Text style={styles.emptyTitle}>
                  No Results Found
                </Text>

                <Text style={styles.emptyText}>
                  Try searching with another keyword.
                </Text>
              </View>
            )}

            <View style={styles.bottomInfo}>
              <Ionicons
                name="help-circle-outline"
                size={20}
                color={BLUE}
              />

              <Text style={styles.bottomInfoText}>
                Can't find your answer? Contact our support team.
              </Text>
            </View>

          </ScrollView>

        ) : (

          /* CONTACT US CONTENT */

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contactContent}
          >

            <Text style={styles.sectionTitle}>
              Contact Us
            </Text>

            <Text style={styles.contactDescription}>
              Choose one of the following ways to contact us.
              We are always ready to help you.
            </Text>

            {contactItems.map((item) => (
              <TouchableOpacity
                key={item.title}
                activeOpacity={0.7}
                onPress={() => openContact(item.url)}
                style={styles.contactCard}
              >

                <View style={styles.contactIcon}>
                  <Ionicons
                    name={item.icon as any}
                    size={23}
                    color={BLUE}
                  />
                </View>

                <View style={styles.contactInfo}>
                  <Text style={styles.contactTitle}>
                    {item.title}
                  </Text>

                  <Text style={styles.contactSubtitle}>
                    {item.subtitle}
                  </Text>
                </View>

                <Ionicons
                  name="chevron-forward"
                  size={19}
                  color={BLUE}
                />

              </TouchableOpacity>
            ))}

            <View style={styles.supportCard}>
              <Ionicons
                name="time-outline"
                size={25}
                color={BLUE}
              />

              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.supportTitle}>
                  Support Hours
                </Text>

                <Text style={styles.supportText}>
                  Monday - Friday
                </Text>

                <Text style={styles.supportText}>
                  09:00 AM - 06:00 PM
                </Text>
              </View>
            </View>

          </ScrollView>

        )}

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  backButton: {
    width: 35,
    height: 40,
    justifyContent: 'center',
  },

  headerTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: BLUE,
  },

  headerRight: {
    width: 35,
  },

  subtitle: {
    fontSize: 11,
    color: GRAY,
    textAlign: 'center',
    marginBottom: 17,
  },

  searchBox: {
    height: 44,
    backgroundColor: LIGHT_BLUE,
    borderRadius: 25,
    marginHorizontal: 17,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchInput: {
    flex: 1,
    fontSize: 12,
    color: DARK,
    marginLeft: 9,
  },

  tabs: {
    flexDirection: 'row',
    marginHorizontal: 17,
    marginTop: 18,
    marginBottom: 8,
    gap: 10,
  },

  tab: {
    flex: 1,
    height: 40,
    borderRadius: 22,
    backgroundColor: '#DCE5FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeTab: {
    backgroundColor: BLUE,
  },

  tabText: {
    color: BLUE,
    fontSize: 12,
    fontWeight: '600',
  },

  activeTabText: {
    color: '#FFFFFF',
  },

  scrollContent: {
    paddingBottom: 30,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: DARK,
    marginHorizontal: 18,
    marginTop: 20,
    marginBottom: 13,
  },

  categories: {
    paddingHorizontal: 17,
    gap: 8,
  },

  categoryButton: {
    backgroundColor: '#E5EBFF',
    paddingHorizontal: 17,
    paddingVertical: 9,
    borderRadius: 20,
  },

  categoryActive: {
    backgroundColor: BLUE,
  },

  categoryText: {
    color: BLUE,
    fontSize: 11,
    fontWeight: '600',
  },

  categoryActiveText: {
    color: '#FFFFFF',
  },

  questionCard: {
    marginHorizontal: 17,
    marginBottom: 10,
    backgroundColor: LIGHT_BLUE,
    borderRadius: 13,
    padding: 14,
  },

  questionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  questionText: {
    flex: 1,
    color: DARK,
    fontSize: 12,
    fontWeight: '600',
    marginRight: 10,
  },

  answerContainer: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'stretch',
  },

  answerLine: {
    width: 3,
    backgroundColor: BLUE,
    borderRadius: 5,
    marginRight: 10,
  },

  answerText: {
    flex: 1,
    color: '#7785A5',
    fontSize: 11,
    lineHeight: 19,
  },

  emptyContainer: {
    alignItems: 'center',
    padding: 35,
  },

  emptyTitle: {
    color: DARK,
    fontWeight: '700',
    fontSize: 14,
    marginTop: 10,
  },

  emptyText: {
    color: GRAY,
    fontSize: 11,
    marginTop: 6,
  },

  bottomInfo: {
    marginHorizontal: 17,
    marginTop: 15,
    padding: 14,
    borderRadius: 13,
    backgroundColor: '#F5F7FF',
    flexDirection: 'row',
    alignItems: 'center',
  },

  bottomInfoText: {
    flex: 1,
    fontSize: 11,
    color: DARK,
    marginLeft: 9,
  },

  contactContent: {
    paddingBottom: 30,
  },

  contactDescription: {
    fontSize: 11,
    color: GRAY,
    lineHeight: 18,
    marginHorizontal: 18,
    marginBottom: 18,
  },

  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: LIGHT_BLUE,
    marginHorizontal: 17,
    marginBottom: 12,
    padding: 13,
    borderRadius: 14,
  },

  contactIcon: {
    width: 43,
    height: 43,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  contactInfo: {
    flex: 1,
    marginLeft: 13,
  },

  contactTitle: {
    fontSize: 12,
    color: DARK,
    fontWeight: '700',
  },

  contactSubtitle: {
    fontSize: 10,
    color: GRAY,
    marginTop: 5,
  },

  supportCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F7FF',
    padding: 16,
    marginHorizontal: 17,
    marginTop: 15,
    borderRadius: 14,
  },

  supportTitle: {
    fontSize: 13,
    color: DARK,
    fontWeight: '700',
    marginBottom: 5,
  },

  supportText: {
    fontSize: 11,
    color: GRAY,
    marginTop: 3,
  },

});
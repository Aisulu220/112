import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import { profileStyles as styles } from '../styles/profileStyles';

const initialSettings = [
  { id: 'general', title: 'General Notification', value: true },
  { id: 'sound', title: 'Sound', value: true },
  { id: 'call', title: 'Sound Call', value: true },
  { id: 'vibrate', title: 'Vibrate', value: false },
  { id: 'offers', title: 'Special Offers', value: false },
  { id: 'payments', title: 'Payments', value: true },
  { id: 'promo', title: 'Promo And Discount', value: true },
  { id: 'cashback', title: 'Cashback', value: false },
];

interface NotificationItem {
  id: string;
  section: 'Today' | 'Yesterday' | '15 April';
  title: string;
  description: string;
  time: string;
  unread: boolean;
}

const initialNotifications: NotificationItem[] = [
  {
    id: '1',
    section: 'Today',
    title: 'Scheduled Appointment',
    description: 'Your dermatology consultation is scheduled for today.',
    time: '2M',
    unread: true,
  },
  {
    id: '2',
    section: 'Today',
    title: 'Scheduled Change',
    description: 'Your appointment slot has been updated by the clinic.',
    time: '1H',
    unread: true,
  },
  {
    id: '3',
    section: 'Today',
    title: 'Medical Notes',
    description: 'New doctor notes were added to your health record.',
    time: '3H',
    unread: false,
  },
  {
    id: '4',
    section: 'Yesterday',
    title: 'Scheduled Appointment',
    description: 'Follow-up visit reminder from your previous checkup.',
    time: '1D',
    unread: false,
  },
  {
    id: '5',
    section: '15 April',
    title: 'Medical History Update',
    description: 'Your clinical profile and care notes were updated.',
    time: '5D',
    unread: false,
  },
];

interface ChatMessage {
  id: string;
  text?: string;
  time: string;
  sender: 'doctor' | 'user';
  isVoice?: boolean;
  duration?: string;
}

const initialMessages: ChatMessage[] = [
  {
    id: '1',
    text: 'Hello! How is your skin feeling today after following the care plan?',
    time: '09:00',
    sender: 'doctor',
  },
  {
    id: '2',
    text: 'Much better, thank you! The irritation is much calmer now.',
    time: '09:12',
    sender: 'user',
  },
  {
    id: '3',
    text: 'Glad to hear that. Keep applying the prescribed topical care consistently.',
    time: '09:30',
    sender: 'doctor',
  },
  {
    id: '4',
    time: '09:31',
    sender: 'doctor',
    isVoice: true,
    duration: '01:24',
  },
  {
    id: '5',
    text: 'Got it, I will follow your instructions.',
    time: '09:35',
    sender: 'user',
  },
];

export default function NotificationSettingsScreen({ navigation }: any) {
  const [settings, setSettings] = useState(initialSettings);
  const [activeTab, setActiveTab] = useState<'settings' | 'notifications' | 'chat'>('settings');

  // Notifications state
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications);

  // Chat state
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  const toggleSetting = (id: string, value: boolean) => {
    setSettings((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, value } : item
      )
    );
  };

  const unreadCount = notifications.filter((n) => n.unread).length;

  const handleMarkAll = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, unread: false })));
  };

  const handleToggleRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, unread: false } : item))
    );
  };

  const handleSendMessage = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return;

    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');

    setMessages((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        text: trimmed,
        time: `${hh}:${mm}`,
        sender: 'user',
      },
    ]);
    setInputText('');
  };

  const sections: Array<'Today' | 'Yesterday' | '15 April'> = [
    'Today',
    'Yesterday',
    '15 April',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader
        title="Notification Setting"
        onBack={() => navigation.goBack()}
      />

      {/* Бөлім ауыстырғыш: Settings / Notifications / Chat */}
      <View style={extraStyles.tabBar}>
        <TouchableOpacity
          style={[extraStyles.tabBtn, activeTab === 'settings' && extraStyles.tabBtnActive]}
          onPress={() => setActiveTab('settings')}
        >
          <Text style={[extraStyles.tabText, activeTab === 'settings' && extraStyles.tabTextActive]}>
            Settings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[extraStyles.tabBtn, activeTab === 'notifications' && extraStyles.tabBtnActive]}
          onPress={() => setActiveTab('notifications')}
        >
          <Text style={[extraStyles.tabText, activeTab === 'notifications' && extraStyles.tabTextActive]}>
            Notifications ({unreadCount})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[extraStyles.tabBtn, activeTab === 'chat' && extraStyles.tabBtnActive]}
          onPress={() => setActiveTab('chat')}
        >
          <Text style={[extraStyles.tabText, activeTab === 'chat' && extraStyles.tabTextActive]}>
            Chat
          </Text>
        </TouchableOpacity>
      </View>

      {/* 1. Өзгертілмеген Notification Settings тізімі */}
      {activeTab === 'settings' && (
        <ScrollView style={{ paddingHorizontal: 18, marginTop: 15 }}>
          {settings.map((item) => (
            <View
              key={item.id}
              style={{
                minHeight: 52,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
                borderBottomColor: '#F0F2FA',
              }}
            >
              <Text style={{
                fontSize: 13,
                color: '#333D59',
              }}>
                {item.title}
              </Text>

              <Switch
                value={item.value}
                onValueChange={(value) =>
                  toggleSetting(item.id, value)
                }
                trackColor={{
                  false: '#E1E6F5',
                  true: '#B8C9FF',
                }}
                thumbColor={item.value ? '#365FF5' : '#FFFFFF'}
              />
            </View>
          ))}
        </ScrollView>
      )}

      {/* 2. Notifications экраны */}
      {activeTab === 'notifications' && (
        <ScrollView style={extraStyles.notifContainer}>
          <View style={extraStyles.notifHeaderRow}>
            <View style={extraStyles.dateChip}>
              <Text style={extraStyles.dateChipText}>Today</Text>
            </View>
            <TouchableOpacity onPress={handleMarkAll}>
              <Text style={extraStyles.markAllText}>Mark all</Text>
            </TouchableOpacity>
          </View>

          {notifications.map((item, index) => {
            const prevSection = index > 0 ? notifications[index - 1].section : 'Today';
            const showSectionHeader =
              index > 0 && item.section !== prevSection && sections.includes(item.section);

            return (
              <View key={item.id}>
                {showSectionHeader && (
                  <View style={extraStyles.sectionSpacing}>
                    <View style={extraStyles.dateChip}>
                      <Text style={extraStyles.dateChipText}>{item.section}</Text>
                    </View>
                  </View>
                )}

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => handleToggleRead(item.id)}
                  style={[extraStyles.notifCard, item.unread && extraStyles.notifCardUnread]}
                >
                  <View style={extraStyles.notifIconCircle}>
                    <Text style={extraStyles.notifIconText}>📅</Text>
                  </View>

                  <View style={extraStyles.notifCardBody}>
                    <View style={extraStyles.notifTopRow}>
                      <Text style={extraStyles.notifTitle}>{item.title}</Text>
                      <Text style={extraStyles.notifTime}>{item.time}</Text>
                    </View>
                    <Text numberOfLines={2} style={extraStyles.notifDesc}>
                      {item.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      )}

      {/* 3. Chat экраны (Dr. Olivia Turner) */}
      {activeTab === 'chat' && (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <View style={extraStyles.chatBanner}>
            <Text style={extraStyles.chatBannerTitle}>Dr. Olivia Turner</Text>
            <View style={extraStyles.chatBannerActions}>
              <View style={extraStyles.chatActionDot}>
                <Text style={extraStyles.chatActionGlyph}>📞</Text>
              </View>
              <View style={extraStyles.chatActionDot}>
                <Text style={extraStyles.chatActionGlyph}>🎥</Text>
              </View>
            </View>
          </View>

          <ScrollView style={extraStyles.chatScroll} contentContainerStyle={{ paddingBottom: 14 }}>
            {messages.map((msg) => {
              if (msg.isVoice) {
                return (
                  <View key={msg.id} style={extraStyles.voiceBubble}>
                    <View style={extraStyles.voiceAvatar}>
                      <Text style={extraStyles.voiceAvatarText}>OT</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => setIsPlayingVoice((prev) => !prev)}
                      style={extraStyles.voicePlayBtn}
                    >
                      <Text style={extraStyles.voicePlayText}>
                        {isPlayingVoice ? '❚❚' : '▶'}
                      </Text>
                    </TouchableOpacity>
                    <View style={extraStyles.voiceTrack}>
                      <View
                        style={[
                          extraStyles.voiceFill,
                          { width: isPlayingVoice ? '75%' : '35%' },
                        ]}
                      />
                    </View>
                    <Text style={extraStyles.voiceDuration}>{msg.duration}</Text>
                  </View>
                );
              }

              const isDoctor = msg.sender === 'doctor';
              return (
                <View
                  key={msg.id}
                  style={[
                    extraStyles.msgBubble,
                    isDoctor ? extraStyles.doctorBubble : extraStyles.userBubble,
                  ]}
                >
                  <Text style={extraStyles.msgText}>{msg.text}</Text>
                  <Text style={extraStyles.msgTime}>{msg.time}</Text>
                </View>
              );
            })}

            <Text style={extraStyles.typingText}>Dr. Olivia is typing...</Text>
          </ScrollView>

          <View style={extraStyles.chatInputRow}>
            <TouchableOpacity style={extraStyles.chatIconBtn}>
              <Text style={extraStyles.chatIconGlyph}>📎</Text>
            </TouchableOpacity>

            <TextInput
              style={extraStyles.chatInput}
              placeholder="Write here..."
              placeholderTextColor="#8A94A6"
              value={inputText}
              onChangeText={setInputText}
              onSubmitEditing={handleSendMessage}
            />

            <TouchableOpacity style={extraStyles.chatIconBtn}>
              <Text style={extraStyles.chatIconGlyph}>🎤</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSendMessage} style={extraStyles.chatSendBtn}>
              <Text style={extraStyles.chatSendText}>➤</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
}

const extraStyles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    marginHorizontal: 18,
    marginTop: 10,
    backgroundColor: '#EEF2FF',
    borderRadius: 12,
    padding: 4,
    gap: 4,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 9,
    alignItems: 'center',
  },
  tabBtnActive: {
    backgroundColor: '#2260FF',
  },
  tabText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333D59',
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  notifContainer: {
    paddingHorizontal: 18,
    marginTop: 12,
  },
  notifHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionSpacing: {
    marginTop: 6,
    marginBottom: 8,
  },
  dateChip: {
    backgroundColor: '#CAD6FF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  dateChipText: {
    color: '#2260FF',
    fontSize: 11,
    fontWeight: '600',
  },
  markAllText: {
    color: '#2260FF',
    fontSize: 12,
    fontWeight: '600',
  },
  notifCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#F6F8FF',
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
  },
  notifCardUnread: {
    backgroundColor: '#E4ECFF',
  },
  notifIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#2260FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  notifIconText: {
    fontSize: 15,
    color: '#FFFFFF',
  },
  notifCardBody: {
    flex: 1,
  },
  notifTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 3,
  },
  notifTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1F2937',
  },
  notifTime: {
    fontSize: 10,
    color: '#6B7280',
  },
  notifDesc: {
    fontSize: 12,
    color: '#4B5563',
    lineHeight: 16,
  },
  chatBanner: {
    backgroundColor: '#2260FF',
    marginHorizontal: 18,
    marginTop: 10,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chatBannerTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  chatBannerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  chatActionDot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatActionGlyph: {
    fontSize: 12,
  },
  chatScroll: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 12,
  },
  msgBubble: {
    maxWidth: '80%',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 9,
    marginBottom: 10,
  },
  doctorBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#CAD6FF',
    borderBottomLeftRadius: 4,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#EEF2FF',
    borderBottomRightRadius: 4,
  },
  msgText: {
    fontSize: 12.5,
    color: '#1F2937',
    lineHeight: 17,
  },
  msgTime: {
    fontSize: 10,
    color: '#6B7280',
    alignSelf: 'flex-end',
    marginTop: 3,
  },
  voiceBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#CAD6FF',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    gap: 8,
  },
  voiceAvatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#2260FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  voiceAvatarText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
  voicePlayBtn: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#2260FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  voicePlayText: {
    color: '#FFFFFF',
    fontSize: 10,
  },
  voiceTrack: {
    width: 85,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(34, 96, 255, 0.25)',
    overflow: 'hidden',
  },
  voiceFill: {
    height: '100%',
    backgroundColor: '#2260FF',
  },
  voiceDuration: {
    fontSize: 10.5,
    color: '#374151',
  },
  typingText: {
    fontSize: 11.5,
    color: '#2260FF',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  chatInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CAD6FF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 6,
  },
  chatInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 7,
    fontSize: 12.5,
    color: '#1F2937',
  },
  chatIconBtn: {
    padding: 4,
  },
  chatIconGlyph: {
    fontSize: 15,
  },
  chatSendBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#2260FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatSendText: {
    color: '#FFFFFF',
    fontSize: 13,
  },
});
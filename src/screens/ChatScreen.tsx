import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";

interface ChatMessage {
  id: string;
  text?: string;
  time: string;
  sender: "doctor" | "user";
  isVoice?: boolean;
  duration?: string;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "1",
    text: "Hello! How is your skin feeling today after following the care plan?",
    time: "09:00",
    sender: "doctor",
  },
  {
    id: "2",
    text: "Much better, thank you! The irritation is much calmer now.",
    time: "09:12",
    sender: "user",
  },
  {
    id: "3",
    text: "Glad to hear that. Keep applying the prescribed topical care consistently.",
    time: "09:30",
    sender: "doctor",
  },
  {
    id: "4",
    time: "09:31",
    sender: "doctor",
    isVoice: true,
    duration: "01:24",
  },
  {
    id: "5",
    text: "Got it, I will follow your instructions.",
    time: "09:35",
    sender: "user",
  },
];

interface Props {
  doctorName?: string;
  onBack?: () => void;
}

export const ChatScreen: React.FC<Props> = ({
  doctorName = "Dr. Olivia Turner",
  onBack,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState("");
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  const handleSend = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return;

    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");

    const newMsg: ChatMessage = {
      id: String(Date.now()),
      text: trimmed,
      time: `${hh}:${mm}`,
      sender: "user",
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>

        <Text numberOfLines={1} style={styles.doctorName}>
          {doctorName}
        </Text>

        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.actionCircle}>
            <Text style={styles.actionIcon}>📞</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCircle}>
            <Text style={styles.actionIcon}>🎥</Text>
          </TouchableOpacity>
        </View>
      </View>

      <KeyboardAvoidingView
        style={styles.flexOne}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messagesList}
          renderItem={({ item }) => {
            if (item.isVoice) {
              return (
                <View style={styles.voiceBubble}>
                  <View style={styles.voiceAvatar}>
                    <Text style={styles.voiceAvatarText}>OT</Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => setIsPlayingVoice((prev) => !prev)}
                    style={styles.playBtn}
                  >
                    <Text style={styles.playText}>
                      {isPlayingVoice ? "❚❚" : "▶"}
                    </Text>
                  </TouchableOpacity>

                  <View style={styles.trackBg}>
                    <View
                      style={[
                        styles.trackFill,
                        { width: isPlayingVoice ? "75%" : "35%" },
                      ]}
                    />
                  </View>

                  <Text style={styles.durationText}>{item.duration}</Text>
                </View>
              );
            }

            const isDoctor = item.sender === "doctor";
            return (
              <View
                style={[
                  styles.bubble,
                  isDoctor ? styles.doctorBubble : styles.userBubble,
                ]}
              >
                <Text style={styles.bubbleText}>{item.text}</Text>
                <Text style={styles.msgTime}>{item.time}</Text>
              </View>
            );
          }}
          ListFooterComponent={
            <Text style={styles.typingText}>Dr. Olivia is typing...</Text>
          }
        />

        <View style={styles.inputBar}>
          <TouchableOpacity style={styles.iconAction}>
            <Text style={styles.iconActionText}>📎</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            placeholder="Write here..."
            placeholderTextColor="#8A94A6"
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={handleSend}
          />

          <TouchableOpacity style={styles.iconAction}>
            <Text style={styles.iconActionText}>🎤</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSend} style={styles.sendBtn}>
            <Text style={styles.sendText}>➤</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  flexOne: {
    flex: 1,
  },
  header: {
    backgroundColor: "#2260FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  backBtn: {
    padding: 4,
  },
  backText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
  },
  doctorName: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
    flex: 1,
    marginHorizontal: 10,
  },
  headerActions: {
    flexDirection: "row",
    gap: 8,
  },
  actionCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  actionIcon: {
    fontSize: 13,
  },
  messagesList: {
    padding: 14,
    gap: 10,
  },
  bubble: {
    maxWidth: "78%",
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  doctorBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#CAD6FF",
    borderBottomLeftRadius: 4,
  },
  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#EEF2FF",
    borderBottomRightRadius: 4,
  },
  bubbleText: {
    fontSize: 13,
    color: "#1F2937",
    lineHeight: 18,
  },
  msgTime: {
    fontSize: 10,
    color: "#6B7280",
    alignSelf: "flex-end",
    marginTop: 4,
  },
  voiceBubble: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#CAD6FF",
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    maxWidth: "82%",
    gap: 8,
  },
  voiceAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#2260FF",
    alignItems: "center",
    justifyContent: "center",
  },
  voiceAvatarText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
  },
  playBtn: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#2260FF",
    alignItems: "center",
    justifyContent: "center",
  },
  playText: {
    color: "#FFFFFF",
    fontSize: 11,
  },
  trackBg: {
    width: 90,
    height: 4,
    borderRadius: 2,
    backgroundColor: "rgba(34, 96, 255, 0.25)",
    overflow: "hidden",
  },
  trackFill: {
    height: "100%",
    backgroundColor: "#2260FF",
  },
  durationText: {
    fontSize: 11,
    color: "#374151",
  },
  typingText: {
    fontSize: 12,
    color: "#2260FF",
    fontStyle: "italic",
    marginTop: 4,
  },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#CAD6FF",
    paddingHorizontal: 10,
    paddingVertical: 8,
    gap: 6,
  },
  input: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    fontSize: 13,
    color: "#1F2937",
  },
  iconAction: {
    padding: 4,
  },
  iconActionText: {
    fontSize: 16,
  },
  sendBtn: {
    backgroundColor: "#2260FF",
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  sendText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
});

export default ChatScreen;
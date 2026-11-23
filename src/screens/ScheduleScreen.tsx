import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

type Step = "profile" | "datetime" | "summary";

const DAYS = [
  { day: "MON", date: "21" },
  { day: "TUE", date: "22" },
  { day: "WED", date: "23" },
  { day: "THU", date: "24" },
  { day: "FRI", date: "25" },
  { day: "SAT", date: "26" },
];

const TIME_SLOTS = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
];

const CALENDAR_DAYS = [
  1, 2, 3, 4, 5, 6, 7,
  8, 9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28,
  29, 30, 31,
];

interface Props {
  navigation?: any;
  onBack?: () => void;
}

export default function ScheduleScreen({ navigation, onBack }: Props) {
  const [step, setStep] = useState<Step>("profile");
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(3); // THU 24
  const [selectedTime, setSelectedTime] = useState<string>("10:00 AM");
  const [selectedCalendarDay, setSelectedCalendarDay] = useState<number>(24);
  const [patientType, setPatientType] = useState<"Yourself" | "Another Person">("Yourself");
  const [age, setAge] = useState<string>("30+");
  const [gender, setGender] = useState<"Male" | "Female" | "Other">("Female");
  const [problemText, setProblemText] = useState<string>("");

  const handleBack = () => {
    if (step === "summary") {
      setStep("datetime");
      return;
    }
    if (step === "datetime") {
      setStep("profile");
      return;
    }
    if (onBack) {
      onBack();
    } else if (navigation?.goBack) {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Қадам ауыстырғыш (8-бөлімнің 3 экраны) */}
      <View style={styles.stepSwitcher}>
        <TouchableOpacity
          style={[styles.stepTab, step === "profile" && styles.stepTabActive]}
          onPress={() => setStep("profile")}
        >
          <Text style={[styles.stepTabText, step === "profile" && styles.stepTabTextActive]}>
            Doctor
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.stepTab, step === "datetime" && styles.stepTabActive]}
          onPress={() => setStep("datetime")}
        >
          <Text style={[styles.stepTabText, step === "datetime" && styles.stepTabTextActive]}>
            Time Slot
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.stepTab, step === "summary" && styles.stepTabActive]}
          onPress={() => setStep("summary")}
        >
          <Text style={[styles.stepTabText, step === "summary" && styles.stepTabTextActive]}>
            Appointment
          </Text>
        </TouchableOpacity>
      </View>

      {/* 1-ЭКРАН: Дәрігер профилі, тәжірибесі және күнтізбе */}
      {step === "profile" && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.topHeader}>
            <TouchableOpacity onPress={handleBack}>
              <Text style={styles.backArrow}>{"<"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.primaryPillBtn}
              onPress={() => setStep("datetime")}
            >
              <Text style={styles.primaryPillText}>Schedule</Text>
            </TouchableOpacity>
            <View style={styles.miniActions}>
              <View style={styles.miniCircle}><Text style={styles.miniGlyph}>📞</Text></View>
              <View style={styles.miniCircle}><Text style={styles.miniGlyph}>💬</Text></View>
              <View style={styles.miniCircle}><Text style={styles.miniGlyph}>♡</Text></View>
            </View>
          </View>

          <View style={styles.doctorProfileCard}>
            <View style={styles.avatarBox}>
              <Text style={styles.avatarInitials}>OT</Text>
            </View>
            <View style={styles.doctorMeta}>
              <View style={styles.expBadge}>
                <Text style={styles.expBadgeText}>15 Years Experience</Text>
              </View>
              <Text style={styles.doctorName}>Dr. Olivia Turner, M.D.</Text>
              <Text style={styles.doctorSpec}>Dermato-Endocrinology</Text>
              <View style={styles.statsRow}>
                <Text style={styles.statChip}>★ 5</Text>
                <Text style={styles.statChip}>💬 60</Text>
                <Text style={styles.statChip}>🕒 Mon–Sat · 9:00–17:00</Text>
              </View>
            </View>
          </View>

          <Text style={styles.sectionHeading}>Profile</Text>
          <Text style={styles.bodyCopy}>
            Experienced dermatologist specializing in clinical skin care, acne treatment,
            and hormone-related skin conditions with personalized consultations.
          </Text>

          <Text style={styles.sectionHeading}>Focus</Text>
          <Text style={styles.bodyCopy}>
            Medical dermatology, skin diagnostics, and long-term treatment plans.
          </Text>

          <View style={styles.calendarCard}>
            <View style={styles.calendarHeader}>
              <Text style={styles.calendarMonth}>November 2026</Text>
              <Text style={styles.calendarHint}>Select date</Text>
            </View>
            <View style={styles.calendarGrid}>
              {CALENDAR_DAYS.map((dayNum) => {
                const isSelected = dayNum === selectedCalendarDay;
                return (
                  <TouchableOpacity
                    key={dayNum}
                    style={[styles.calDayCell, isSelected && styles.calDaySelected]}
                    onPress={() => setSelectedCalendarDay(dayNum)}
                  >
                    <Text style={[styles.calDayText, isSelected && styles.calDayTextSelected]}>
                      {dayNum}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <TouchableOpacity
            style={styles.fullBlueBtn}
            onPress={() => setStep("datetime")}
          >
            <Text style={styles.fullBlueBtnText}>Choose Time Slot</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* 2-ЭКРАН: Күн, уақыт және пациент мәліметтері */}
      {step === "datetime" && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.topHeader}>
            <TouchableOpacity onPress={handleBack}>
              <Text style={styles.backArrow}>{"<"}</Text>
            </TouchableOpacity>
            <Text style={styles.screenTitleBlue}>Dr. Olivia Turner, M.D.</Text>
            <View style={styles.miniActions}>
              <View style={styles.miniCircle}><Text style={styles.miniGlyph}>📞</Text></View>
              <View style={styles.miniCircle}><Text style={styles.miniGlyph}>💬</Text></View>
              <View style={styles.miniCircle}><Text style={styles.miniGlyph}>★</Text></View>
            </View>
          </View>

          <View style={styles.daysStrip}>
            {DAYS.map((item, idx) => {
              const active = idx === selectedDayIndex;
              return (
                <TouchableOpacity
                  key={item.date}
                  style={[styles.dayPill, active && styles.dayPillActive]}
                  onPress={() => setSelectedDayIndex(idx)}
                >
                  <Text style={[styles.dayDateText, active && styles.whiteText]}>
                    {item.date}
                  </Text>
                  <Text style={[styles.dayNameText, active && styles.whiteText]}>
                    {item.day}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.sectionHeading}>Available Time</Text>
          <View style={styles.slotsGrid}>
            {TIME_SLOTS.map((slot) => {
              const active = slot === selectedTime;
              return (
                <TouchableOpacity
                  key={slot}
                  style={[styles.slotChip, active && styles.slotChipActive]}
                  onPress={() => setSelectedTime(slot)}
                >
                  <Text style={[styles.slotText, active && styles.whiteText]}>
                    {slot}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.sectionHeading}>Patient Details</Text>
          <View style={styles.rowGap}>
            {(["Yourself", "Another Person"] as const).map((type) => (
              <TouchableOpacity
                key={type}
                style={[styles.choicePill, patientType === type && styles.choicePillActive]}
                onPress={() => setPatientType(type)}
              >
                <Text style={[styles.choiceText, patientType === type && styles.whiteText]}>
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.fieldLabel}>Age</Text>
          <View style={styles.rowGap}>
            {["20s", "30+", "40+"].map((ageOpt) => (
              <TouchableOpacity
                key={ageOpt}
                style={[styles.smallChip, age === ageOpt && styles.choicePillActive]}
                onPress={() => setAge(ageOpt)}
              >
                <Text style={[styles.choiceText, age === ageOpt && styles.whiteText]}>
                  {ageOpt}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.fieldLabel}>Gender</Text>
          <View style={styles.rowGap}>
            {(["Male", "Female", "Other"] as const).map((g) => (
              <TouchableOpacity
                key={g}
                style={[styles.smallChip, gender === g && styles.choicePillActive]}
                onPress={() => setGender(g)}
              >
                <Text style={[styles.choiceText, gender === g && styles.whiteText]}>
                  {g}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.fieldLabel}>Describe your problem</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Enter your symptoms here..."
            placeholderTextColor="#8A94A6"
            multiline
            value={problemText}
            onChangeText={setProblemText}
          />

          <TouchableOpacity
            style={styles.fullBlueBtn}
            onPress={() => setStep("summary")}
          >
            <Text style={styles.fullBlueBtnText}>Continue</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* 3-ЭКРАН: Your Appointment (Қорытынды жазба) */}
      {step === "summary" && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.topHeader}>
            <TouchableOpacity onPress={handleBack}>
              <Text style={styles.backArrow}>{"<"}</Text>
            </TouchableOpacity>
            <Text style={styles.screenTitleBlue}>Your Appointment</Text>
            <View style={{ width: 20 }} />
          </View>

          <View style={styles.summaryDoctorCard}>
            <View style={styles.avatarBoxSmall}>
              <Text style={styles.avatarInitialsSmall}>OT</Text>
            </View>
            <View style={styles.flex1}>
              <Text style={styles.doctorName}>Dr. Olivia Turner, M.D.</Text>
              <Text style={styles.doctorSpec}>Dermato-Endocrinology</Text>
              <Text style={styles.ratingInline}>★ 5 · Almaty Clinic</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Date & Time</Text>
            <Text style={styles.summaryValue}>
              {DAYS[selectedDayIndex].day}, {DAYS[selectedDayIndex].date} Nov · {selectedTime}
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Patient</Text>
            <Text style={styles.summaryValue}>
              {patientType} ({age}, {gender})
            </Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.sectionHeading}>Notes</Text>
          <Text style={styles.bodyCopy}>
            {problemText.trim()
              ? problemText.trim()
              : "Routine dermatological consultation and skin care review."}
          </Text>

          <TouchableOpacity
            style={styles.fullBlueBtn}
            onPress={() => setStep("profile")}
          >
            <Text style={styles.fullBlueBtnText}>Confirm Appointment</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  flex1: {
    flex: 1,
  },
  stepSwitcher: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 8,
    backgroundColor: "#EEF2FF",
    borderRadius: 12,
    padding: 4,
    gap: 4,
  },
  stepTab: {
    flex: 1,
    paddingVertical: 7,
    borderRadius: 9,
    alignItems: "center",
  },
  stepTabActive: {
    backgroundColor: "#2260FF",
  },
  stepTabText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333D59",
  },
  stepTabTextActive: {
    color: "#FFFFFF",
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 28,
  },
  topHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  backArrow: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2260FF",
    paddingHorizontal: 4,
  },
  screenTitleBlue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2260FF",
  },
  primaryPillBtn: {
    backgroundColor: "#2260FF",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  primaryPillText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  miniActions: {
    flexDirection: "row",
    gap: 6,
  },
  miniCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#CAD6FF",
    alignItems: "center",
    justifyContent: "center",
  },
  miniGlyph: {
    fontSize: 11,
  },
  doctorProfileCard: {
    flexDirection: "row",
    backgroundColor: "#F4F7FF",
    borderRadius: 18,
    padding: 12,
    gap: 12,
    marginBottom: 14,
  },
  avatarBox: {
    width: 68,
    height: 78,
    borderRadius: 14,
    backgroundColor: "#CAD6FF",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarInitials: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2260FF",
  },
  doctorMeta: {
    flex: 1,
  },
  expBadge: {
    backgroundColor: "#2260FF",
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    marginBottom: 4,
  },
  expBadgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "600",
  },
  doctorName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1F2937",
  },
  doctorSpec: {
    fontSize: 12,
    color: "#4B5563",
    marginBottom: 6,
  },
  statsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  statChip: {
    fontSize: 10.5,
    color: "#2260FF",
    backgroundColor: "#E4ECFF",
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 8,
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: "700",
    color: "#2260FF",
    marginTop: 8,
    marginBottom: 6,
  },
  bodyCopy: {
    fontSize: 12.5,
    color: "#4B5563",
    lineHeight: 18,
  },
  calendarCard: {
    marginTop: 14,
    backgroundColor: "#EEF2FF",
    borderRadius: 16,
    padding: 12,
  },
  calendarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  calendarMonth: {
    fontSize: 13,
    fontWeight: "700",
    color: "#2260FF",
  },
  calendarHint: {
    fontSize: 11,
    color: "#6B7280",
  },
  calendarGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  calDayCell: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  calDaySelected: {
    backgroundColor: "#2260FF",
  },
  calDayText: {
    fontSize: 12,
    color: "#1F2937",
  },
  calDayTextSelected: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  daysStrip: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#CAD6FF",
    padding: 8,
    borderRadius: 16,
    marginBottom: 12,
  },
  dayPill: {
    width: 44,
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  dayPillActive: {
    backgroundColor: "#2260FF",
  },
  dayDateText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1F2937",
  },
  dayNameText: {
    fontSize: 10,
    color: "#6B7280",
  },
  slotsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 8,
  },
  slotChip: {
    width: "31%",
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: "#EEF2FF",
    alignItems: "center",
  },
  slotChipActive: {
    backgroundColor: "#2260FF",
  },
  slotText: {
    fontSize: 11.5,
    fontWeight: "600",
    color: "#2260FF",
  },
  fieldLabel: {
    fontSize: 12.5,
    fontWeight: "600",
    color: "#1F2937",
    marginTop: 10,
    marginBottom: 6,
  },
  rowGap: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
  },
  choicePill: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 16,
    backgroundColor: "#EEF2FF",
  },
  choicePillActive: {
    backgroundColor: "#2260FF",
  },
  choiceText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#2260FF",
  },
  smallChip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 14,
    backgroundColor: "#EEF2FF",
  },
  textArea: {
    backgroundColor: "#EEF2FF",
    borderRadius: 14,
    padding: 12,
    minHeight: 76,
    fontSize: 12.5,
    color: "#1F2937",
    textAlignVertical: "top",
    marginTop: 4,
  },
  summaryDoctorCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  avatarBoxSmall: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#CAD6FF",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarInitialsSmall: {
    fontSize: 16,
    fontWeight: "800",
    color: "#2260FF",
  },
  ratingInline: {
    fontSize: 11.5,
    color: "#2260FF",
    marginTop: 3,
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 10,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 12,
    color: "#6B7280",
  },
  summaryValue: {
    fontSize: 12.5,
    fontWeight: "600",
    color: "#1F2937",
  },
  fullBlueBtn: {
    marginTop: 18,
    backgroundColor: "#2260FF",
    paddingVertical: 13,
    borderRadius: 24,
    alignItems: "center",
  },
  fullBlueBtnText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
  whiteText: {
    color: "#FFFFFF",
  },
});
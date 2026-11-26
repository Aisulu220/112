import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HealthCalendarScreen() {
  const events = [
    {
      day: '27',
      month: 'Қараша',
      title: 'Дәрігер қабылдауы',
      time: '10:30',
      description: 'Терапевтпен кездесу',
      icon: 'person-outline' as const,
    },
    {
      day: '29',
      month: 'Қараша',
      title: 'Қан талдауы',
      time: '09:00',
      description: 'Зертханалық тексеру',
      icon: 'flask-outline' as const,
    },
    {
      day: '03',
      month: 'Желтоқсан',
      title: 'Дәрі қабылдау',
      time: '08:00',
      description: 'Дәрумендерді қабылдау',
      icon: 'medical-outline' as const,
    },
    {
      day: '08',
      month: 'Желтоқсан',
      title: 'Денсаулық тексеруі',
      time: '11:00',
      description: 'Жалпы медициналық тексеріс',
      icon: 'clipboard-outline' as const,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Денсаулық күнтізбесі</Text>
        <Text style={styles.subtitle}>
          Маңызды медициналық оқиғаларды бақылаңыз
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.monthCard}>
          <View style={styles.monthHeader}>
            <Text style={styles.monthTitle}>Қараша 2026</Text>
            <Ionicons name="calendar-outline" size={24} color="#269B78" />
          </View>

          <View style={styles.weekRow}>
            {['Дс', 'Сс', 'Ср', 'Бс', 'Жм', 'Сб', 'Жс'].map((day) => (
              <Text key={day} style={styles.weekDay}>{day}</Text>
            ))}
          </View>

          <View style={styles.daysGrid}>
            {Array.from({ length: 30 }, (_, index) => {
              const day = index + 1;
              const hasEvent = [27, 29].includes(day);

              return (
                <View key={day} style={styles.dayCell}>
                  <View style={[
                    styles.dayCircle,
                    day === 26 && styles.today,
                    hasEvent && styles.eventDay,
                  ]}>
                    <Text style={[
                      styles.dayText,
                      day === 26 && styles.todayText,
                      hasEvent && styles.eventText,
                    ]}>
                      {day}
                    </Text>
                  </View>
                  {hasEvent && <View style={styles.eventDot} />}
                </View>
              );
            })}
          </View>
        </View>

        <Text style={styles.sectionTitle}>Алдағы оқиғалар</Text>

        {events.map((item, index) => (
          <View style={styles.eventCard} key={index}>
            <View style={styles.dateBox}>
              <Text style={styles.dateDay}>{item.day}</Text>
              <Text style={styles.dateMonth}>{item.month}</Text>
            </View>

            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Text style={styles.eventDescription}>{item.description}</Text>
              <View style={styles.timeRow}>
                <Ionicons name="time-outline" size={15} color="#269B78" />
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
            </View>

            <Ionicons name={item.icon} size={24} color="#269B78" />
          </View>
        ))}

        <View style={styles.noteCard}>
          <Ionicons name="information-circle-outline" size={22} color="#269B78" />
          <Text style={styles.note}>
            Күнтізбедегі кездесулер — үлгі ақпарат. Өз жоспарларыңызға сәйкес өзгертіңіз.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F9F7',
  },
  header: {
    backgroundColor: '#269B78',
    padding: 25,
    paddingTop: 55,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#D5F5E8',
    fontSize: 14,
    marginTop: 8,
  },
  content: {
    padding: 20,
  },
  monthCard: {
    backgroundColor: '#FFFFFF',
    padding: 17,
    borderRadius: 18,
    marginBottom: 25,
  },
  monthHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  monthTitle: {
    color: '#263B35',
    fontSize: 19,
    fontWeight: 'bold',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  weekDay: {
    width: '13%',
    textAlign: 'center',
    color: '#8A9D95',
    fontSize: 12,
    fontWeight: 'bold',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    width: '14.28%',
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayCircle: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  dayText: {
    color: '#47665B',
    fontSize: 13,
  },
  today: {
    backgroundColor: '#269B78',
  },
  todayText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  eventDay: {
    backgroundColor: '#E5F5EF',
  },
  eventText: {
    color: '#269B78',
    fontWeight: 'bold',
  },
  eventDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#269B78',
    position: 'absolute',
    bottom: 1,
  },
  sectionTitle: {
    color: '#263B35',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  eventCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 16,
    marginBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateBox: {
    width: 55,
    height: 60,
    backgroundColor: '#E5F5EF',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateDay: {
    color: '#269B78',
    fontSize: 21,
    fontWeight: 'bold',
  },
  dateMonth: {
    color: '#47665B',
    fontSize: 10,
    marginTop: 2,
  },
  eventInfo: {
    flex: 1,
    marginLeft: 12,
  },
  eventTitle: {
    color: '#263B35',
    fontSize: 14,
    fontWeight: 'bold',
  },
  eventDescription: {
    color: '#8A9D95',
    fontSize: 11,
    marginTop: 4,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  timeText: {
    color: '#269B78',
    fontSize: 12,
    marginLeft: 5,
  },
  noteCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5F5EF',
    padding: 15,
    borderRadius: 14,
    marginTop: 5,
    marginBottom: 25,
  },
  note: {
    flex: 1,
    color: '#47665B',
    fontSize: 12,
    marginLeft: 10,
    lineHeight: 18,
  },
});
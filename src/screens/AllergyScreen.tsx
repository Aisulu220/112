import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AllergyScreen() {
  const allergies = [
    {
      name: 'Шаң',
      type: 'Қоршаған орта',
      reaction: 'Түшкіру, мұрын бітелуі',
      severity: 'Орташа',
      icon: 'cloud-outline' as const,
    },
    {
      name: 'Мысық жүні',
      type: 'Жануарлар',
      reaction: 'Көздің қышуы, қызаруы',
      severity: 'Жоғары',
      icon: 'paw-outline' as const,
    },
    {
      name: 'Жаңғақ',
      type: 'Тағам',
      reaction: 'Тері бөртпесі',
      severity: 'Жоғары',
      icon: 'nutrition-outline' as const,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Менің аллергияларым</Text>
        <Text style={styles.subtitle}>
          Аллергия туралы жеке ақпарат
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.infoCard}>
          <Ionicons name="shield-checkmark-outline" size={30} color="#269B78" />
          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>Денсаулығыңызды қорғаңыз</Text>
            <Text style={styles.infoDescription}>
              Аллергияларыңызды бақылап, дәрігерге хабарлауды ұмытпаңыз.
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Тіркелген аллергиялар</Text>

        {allergies.map((item, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.cardTop}>
              <View style={styles.iconBox}>
                <Ionicons name={item.icon} size={25} color="#269B78" />
              </View>
              <View style={styles.nameBox}>
                <Text style={styles.allergyName}>{item.name}</Text>
                <Text style={styles.type}>{item.type}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8A9D95" />
            </View>

            <View style={styles.divider} />

            <Text style={styles.label}>Белгілері</Text>
            <Text style={styles.reaction}>{item.reaction}</Text>

            <View style={styles.severityRow}>
              <Text style={styles.label}>Қауіптілік деңгейі</Text>
              <Text
                style={[
                  styles.severity,
                  item.severity === 'Жоғары'
                    ? styles.high
                    : styles.medium,
                ]}
              >
                {item.severity}
              </Text>
            </View>
          </View>
        ))}

        <View style={styles.noteCard}>
          <Ionicons name="information-circle-outline" size={22} color="#269B78" />
          <Text style={styles.note}>
            Бұл — үлгі ақпарат. Нақты аллергияларыңызды дәрігермен анықтаңыз.
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
    fontSize: 27,
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
  infoCard: {
    backgroundColor: '#E5F5EF',
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  infoText: {
    flex: 1,
    marginLeft: 12,
  },
  infoTitle: {
    color: '#263B35',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoDescription: {
    color: '#47665B',
    fontSize: 13,
    marginTop: 5,
    lineHeight: 19,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#263B35',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 17,
    borderRadius: 16,
    marginBottom: 15,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#E5F5EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameBox: {
    flex: 1,
    marginLeft: 12,
  },
  allergyName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#263B35',
  },
  type: {
    fontSize: 13,
    color: '#8A9D95',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#EEF2F0',
    marginVertical: 15,
  },
  label: {
    color: '#8A9D95',
    fontSize: 13,
  },
  reaction: {
    color: '#263B35',
    fontSize: 14,
    marginTop: 5,
  },
  severityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  severity: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    overflow: 'hidden',
  },
  high: {
    color: '#C64D4D',
    backgroundColor: '#FCE8E8',
  },
  medium: {
    color: '#B78327',
    backgroundColor: '#FFF3D9',
  },
  noteCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 14,
    marginTop: 5,
    marginBottom: 25,
  },
  note: {
    flex: 1,
    color: '#47665B',
    fontSize: 13,
    marginLeft: 10,
    lineHeight: 19,
  },
});
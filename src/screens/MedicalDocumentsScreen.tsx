import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MedicalDocumentsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Medical Documents</Text>
        <Text style={styles.subtitle}>Медициналық құжаттар</Text>
        <Text style={styles.description}>
          Денсаулық құжаттарыңыз бір жерде
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.mainCard}>
          <Ionicons name="folder-open-outline" size={42} color="#269B78" />
          <Text style={styles.mainTitle}>Менің құжаттарым</Text>
          <Text style={styles.mainText}>
            Медициналық құжаттарыңызды осы жерден қарай аласыз.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Құжаттар тізімі</Text>

        <View style={styles.card}>
          <View style={styles.iconBox}>
            <Ionicons name="document-text-outline" size={27} color="#269B78" />
          </View>
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Медициналық карта</Text>
            <Text style={styles.cardText}>Жеке медициналық мәліметтер</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#789087" />
        </View>

        <View style={styles.card}>
          <View style={styles.iconBox}>
            <Ionicons name="flask-outline" size={27} color="#269B78" />
          </View>
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Зертхана нәтижелері</Text>
            <Text style={styles.cardText}>Талдау қорытындылары</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#789087" />
        </View>

        <View style={styles.card}>
          <View style={styles.iconBox}>
            <Ionicons name="medkit-outline" size={27} color="#269B78" />
          </View>
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Дәрігер қорытындысы</Text>
            <Text style={styles.cardText}>Қаралу нәтижелері</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#789087" />
        </View>

        <View style={styles.card}>
          <View style={styles.iconBox}>
            <Ionicons name="shield-checkmark-outline" size={27} color="#269B78" />
          </View>
          <View style={styles.info}>
            <Text style={styles.cardTitle}>Вакцинация құжаты</Text>
            <Text style={styles.cardText}>Екпе туралы ақпарат</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#789087" />
        </View>

        <View style={styles.tipCard}>
          <Ionicons name="information-circle-outline" size={24} color="#269B78" />
          <Text style={styles.tip}>
            Бұл экранда әзірге үлгі құжаттар көрсетілген.
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
  title: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#D5F5E8',
    fontSize: 17,
    marginTop: 8,
  },
  description: {
    color: '#E5F8EF',
    fontSize: 14,
    marginTop: 8,
  },
  content: {
    padding: 20,
  },
  mainCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 25,
    alignItems: 'center',
    marginBottom: 25,
  },
  mainTitle: {
    color: '#263B35',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 12,
  },
  mainText: {
    color: '#789087',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 21,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#263B35',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 13,
    backgroundColor: '#E5F5EF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#263B35',
  },
  cardText: {
    fontSize: 12,
    color: '#789087',
    marginTop: 5,
  },
  tipCard: {
    backgroundColor: '#E5F5EF',
    borderRadius: 15,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  tip: {
    flex: 1,
    color: '#47665B',
    fontSize: 13,
    marginLeft: 12,
  },
});
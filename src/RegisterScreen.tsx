import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  onBack: () => void;
}

export default function RegisterScreen({ onBack }: Props) {
  return (
    <SafeAreaView style={styles.контейнер}>
      <ScrollView contentContainerStyle={styles.айналым}>
        <TouchableOpacity onPress={onBack} style={styles.артқаБатырмасы}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <Text style={styles.тақырып}>Жаңа аккаунт</Text>

        <Text style={styles.белгі}>Толық аты-жөніңіз (Full Name)</Text>
        <TextInput style={styles.енгізуӨрісі} placeholder="Аты-жөніңіз" placeholderTextColor="#999" />

        <Text style={styles.белгі}>Құпия сөз (Password)</Text>
        <TextInput style={styles.енгізуӨрісі} placeholder="••••••••••••" secureTextEntry placeholderTextColor="#999" />

        <Text style={styles.белгі}>Электрондық пошта (Email)</Text>
        <TextInput style={styles.енгізуӨрісі} placeholder="example@example.com" placeholderTextColor="#999" />

        <Text style={styles.белгі}>Телефон нөмірі (Mobile Number)</Text>
        <TextInput style={styles.енгізуӨрісі} placeholder="+7..." placeholderTextColor="#999" />

        <Text style={styles.белгі}>Туған күні (Date Of Birth)</Text>
        <TextInput style={styles.енгізуӨрісі} placeholder="КК / АА / ЖЖЖЖ" placeholderTextColor="#999" />

        {/* Тіркелу батырмасы */}
        <TouchableOpacity style={styles.батырма} onPress={() => alert('Тіркелу сәтті аяқталды!')}>
          <Text style={styles.батырмаМәтіні}>Тіркелу</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  контейнер: { flex: 1, backgroundColor: '#fff' },
  айналым: { padding: 24 },
  артқаБатырмасы: { marginBottom: 16 },
  тақырып: { fontSize: 26, fontWeight: 'bold', color: '#000', marginBottom: 20 },
  белгі: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 6 },
  енгізуӨрісі: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
    marginBottom: 12,
    backgroundColor: '#fafafa',
  },
  батырма: {
    backgroundColor: '#1E6FFF',
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  батырмаМәтіні: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
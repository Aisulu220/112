import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  onBack: () => void;
  onForgot: () => void;
}

export default function LoginScreen({ onBack, onForgot }: Props) {
  return (
    <SafeAreaView style={styles.контейнер}>
      <ScrollView contentContainerStyle={styles.айналым}>
        {/* Артқа қайту батырмасы */}
        <TouchableOpacity onPress={onBack} style={styles.артқаБатырмасы}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <Text style={styles.тақырып}>Кіру</Text>
        <Text style={styles.қосалқыТақырып}>Қайта оралғаныңызға қуаныштымыз! Мәліметтеріңізді енгізіңіз.</Text>

        <Text style={styles.белгі}>Электрондық пошта немесе телефон нөмірі</Text>
        <TextInput
          style={styles.енгізуӨрісі}
          placeholder="example@example.com"
          placeholderTextColor="#999"
        />

        <Text style={styles.белгі}>Құпия сөз (Password)</Text>
        <TextInput
          style={styles.енгізуӨрісі}
          placeholder="••••••••••••"
          secureTextEntry={true}
          placeholderTextColor="#999"
        />

        {/* Құпия сөзді ұмыттым */}
        <TouchableOpacity onPress={onForgot} style={styles.ұмыттымАумағы}>
          <Text style={styles.ұмыттымМәтіні}>Құпия сөзді ұмытыңыз ба?</Text>
        </TouchableOpacity>

        {/* Кіру батырмасы */}
        <TouchableOpacity style={styles.батырма} onPress={() => alert('Жүйеге сәтті кірдіңіз!')}>
          <Text style={styles.батырмаМәтіні}>Кіру</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  контейнер: { flex: 1, backgroundColor: '#fff' },
  айналым: { padding: 24 },
  артқаБатырмасы: { marginBottom: 16 },
  тақырып: { fontSize: 26, fontWeight: 'bold', color: '#000', marginBottom: 8 },
  қосалқыТақырып: { fontSize: 14, color: '#666', marginBottom: 32 },
  белгі: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 8 },
  енгізуӨрісі: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 14,
    fontSize: 14,
    marginBottom: 16,
    backgroundColor: '#fafafa',
  },
  ұмыттымАумағы: { alignItems: 'flex-end', marginBottom: 24 },
  ұмыттымМәтіні: { color: '#1E6FFF', fontWeight: '600' },
  батырма: {
    backgroundColor: '#1E6FFF',
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  батырмаМәтіні: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
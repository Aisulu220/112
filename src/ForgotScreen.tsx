import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  onBack: () => void;
}

export default function ForgotScreen({ onBack }: Props) {
  return (
    <SafeAreaView style={styles.контейнер}>
      <View style={styles.мазмұны}>
        <TouchableOpacity onPress={onBack} style={styles.артқаБатырмасы}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <Text style={styles.тақырып}>Құпия сөзді орнату</Text>
        <Text style={styles.қосалқыТақырып}>
          Аккаунтыңызды қорғау үшін күшті құпия сөз жасаңыз.
        </Text>

        <Text style={styles.белгі}>Жаңа құпия сөз</Text>
        <TextInput
          style={styles.енгізуӨрісі}
          placeholder="••••••••••••"
          secureTextEntry={true}
          placeholderTextColor="#999"
        />

        <Text style={styles.белгі}>Құпия сөзді растау</Text>
        <TextInput
          style={styles.енгізуӨрісі}
          placeholder="••••••••••••"
          secureTextEntry={true}
          placeholderTextColor="#999"
        />

        {/* Растау батырмасы */}
        <TouchableOpacity style={styles.батырма} onPress={() => alert('Құпия сөз сәтті өзгертілді!')}>
          <Text style={styles.батырмаМәтіні}>Жаңа құпия сөзді жасау</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  контейнер: { flex: 1, backgroundColor: '#fff' },
  мазмұны: { padding: 24 },
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
  батырма: {
    backgroundColor: '#1E6FFF',
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 16,
  },
  батырмаМәтіні: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
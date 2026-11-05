import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Басқа экранға өту үшін функцияның типі
interface Props {
  onNext: () => void;
}

export default function SplashScreen({ onNext }: Props) {
  return (
    <SafeAreaView style={styles.контейнер}>
      <View style={styles.мазмұны}>
        <Ionicons name="medical" size={70} color="#fff" />
        <Text style={styles.тақырып}>Skin Firsts</Text>
        <Text style={styles.қосалқыТақырып}>Дерматология орталығы</Text>
        
        {/* Бастау батырмасы */}
        <TouchableOpacity style={styles.батырма} onPress={onNext}>
          <Text style={styles.батырмаМәтіні}>Бастау</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  контейнер: {
    flex: 1,
    backgroundColor: '#1E6FFF',
  },
  мазмұны: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  тақырып: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  қосалқыТақырып: {
    fontSize: 12,
    color: '#fff',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  батырма: {
    marginTop: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 20,
  },
  батырмаМәтіні: {
    color: '#1E6FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
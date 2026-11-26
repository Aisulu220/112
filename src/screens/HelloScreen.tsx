import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

type Props = {
  navigation: (screen: string) => void;
};

export default function HelloScreen({ navigation }: Props) {
  const handleContinue = () => {
    Alert.alert(
      'Тексеру',
      'Батырма жұмыс істеп тұр!',
      [
        {
          text: 'OK',
          onPress: () => navigation('home'),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.back} onPress={() => navigation('login')}>
        ‹
      </Text>

      <Text style={styles.title}>Hello!</Text>

      <Text style={styles.subtitle}>Welcome</Text>

      <Text style={styles.description}>
        You have successfully opened the application.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleContinue}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 25,
    paddingTop: 60,
  },
  back: {
    color: '#3561F6',
    fontSize: 35,
  },
  title: {
    color: '#3561F6',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 40,
  },
  subtitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 30,
  },
  description: {
    fontSize: 13,
    color: '#888888',
    marginTop: 15,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3561F6',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});